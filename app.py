# metadata_api.py
from flask import Flask, request, jsonify
import uuid
from datetime import datetime
from pymongo import MongoClient
import os
import traceback
import logging

# Import the metadata extractor function
from extractor import extract_metadata

# Configure logging
logging.basicConfig(level=logging.INFO, 
                    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

app = Flask(__name__)
UPLOAD_FOLDER="./uploads"

# MongoDB connection
try:
    client = MongoClient('mongodb://localhost:27017/')
    db = client['metadata_db']
    collection = db['file_metadata']
    logger.info("MongoDB connection established successfully")
except Exception as e:
    logger.error(f"Failed to connect to MongoDB: {e}")
    

@app.route("/upload", methods=["POST"])
def upload_large_file():
    
    if "file" not in request.files:
        return jsonify({"error": "No file part"}), 400

    file = request.files["file"]
    if file.filename == "":
        return jsonify({"error": "No selected file"}), 400

    file_path = os.path.join(UPLOAD_FOLDER, file.filename)

    # Increase chunk size for faster writes
    chunk_size = 50 * 1024 * 1024  # 4MB per chunk
    scan_id = str(uuid.uuid4())
    with open(file_path, "wb") as f:
        while chunk := file.read(chunk_size):
            f.write(chunk)
    scan_file(file_path,scan_id)
    return jsonify({"message": "File uploaded successfully and scanned", "file_path": file_path,"scan_id":scan_id})


def scan_file(file_path,scan_id):
    try:
        # Get file path and scan_id from request

        if not scan_id:
            
            logger.info(f"No scan_id provided, generated: {scan_id}")
        else:
            logger.info(f"Using provided scan_id: {scan_id}")
        
        # Validate file path
        if not os.path.exists(file_path):
            return jsonify({'error': f'File not found: {file_path}'}), 404
        
        # Get current timestamp
        timestamp = datetime.now()
        
        # Extract metadata
        logger.info(f"Extracting metadata for file: {file_path}")
        metadata = extract_metadata(file_path)
        
        # Create document for MongoDB
        document = {
            'scan_id': scan_id,
            'timestamp': timestamp,
            'file_path': file_path,
            'metadata': metadata
        }
        
        # Insert into MongoDB
        result = collection.insert_one(document)
        
        # Return success response
        return jsonify({
            'status': 'success',
            'scan_id': scan_id,
            'timestamp': timestamp.isoformat(),
            'message': 'Metadata saved successfully'
        }), 200
        
    except Exception as e:
        logger.error(f"Error processing request: {str(e)}")
        logger.error(traceback.format_exc())
        return jsonify({'error': f'Error processing request: {str(e)}'}), 500


@app.route('/get_metadata', methods=['POST'])
def get_metadata():
    scan_id=request.args.get("scan_id")
    try:
        # Find document by scan_id
        document = collection.find_one({'scan_id': scan_id})
        
        if not document:
            return jsonify({'error': 'Scan ID not found'}), 404
        
        # Convert ObjectId to string for JSON serialization
        document['_id'] = str(document['_id'])
        document['timestamp'] = document['timestamp'].isoformat()
        
        return jsonify(document), 200
        
    except Exception as e:
        logger.error(f"Error retrieving metadata: {str(e)}")
        return jsonify({'error': f'Error retrieving metadata: {str(e)}'}), 500

@app.route('/scans', methods=['GET'])
def get_all_scans():
    try:
        # Get pagination parameters from query string
        page = request.args.get('page', default=1, type=int)
        per_page = request.args.get('per_page', default=20, type=int)
        
        # Get sorting parameters
        sort_order = request.args.get('sort', default='desc', type=str)
        sort_direction = -1 if sort_order.lower() == 'desc' else 1
        
        # Calculate skip value for pagination
        skip = (page - 1) * per_page
        
        # Get total count of documents
        total_scans = collection.count_documents({})
        
        # Query MongoDB for scan_id and timestamp only, with pagination
        cursor = collection.find(
            {}, 
            {'_id': 0, 'scan_id': 1, 'timestamp': 1, 'file_path': 1}
        ).sort('timestamp', sort_direction).skip(skip).limit(per_page)
        
        # Convert cursor to list and format timestamps
        scans = []
        for doc in cursor:
            doc['timestamp'] = doc['timestamp'].isoformat()
            scans.append(doc)
        
        # Calculate pagination metadata
        total_pages = (total_scans + per_page - 1) // per_page  # Ceiling division
        
        # Return formatted response
        return jsonify({
            'status': 'success',
            'total_scans': total_scans,
            'total_pages': total_pages,
            'current_page': page,
            'per_page': per_page,
            'scans': scans
        }), 200
        
    except Exception as e:
        logger.error(f"Error retrieving scan list: {str(e)}")
        logger.error(traceback.format_exc())
        return jsonify({'error': f'Error retrieving scan list: {str(e)}'}), 500

# @app.route('/health', methods=['GET'])
# def health_check():
#     try:
#         # Simple ping to MongoDB to verify connection
#         client.admin.command('ping')
#         return jsonify({'status': 'healthy', 'database': 'connected'}), 200
#     except Exception as e:
#         return jsonify({'status': 'unhealthy', 'database': f'disconnected: {str(e)}'}), 500


if __name__ == '__main__':
    # Start Flask app
    app.run(debug=True, host='0.0.0.0', port=5000)