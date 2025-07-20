// import React, { useState, useEffect } from 'react';
// import { FileSearch, Upload, Database, Clock, FileCog, ChevronLeft, ChevronRight, Search, AlertTriangle, CheckCircle } from 'lucide-react';

// // Main App Component
// export default function MetadataForensicsApp() {
//   const [activeView, setActiveView] = useState('home');
//   const [scanId, setScanId] = useState(null);
  
//   // Helper function to switch views
//   const navigateTo = (view, id = null) => {
//     setActiveView(view);
//     if (id) setScanId(id);
//   };
  
//   // Render the appropriate view
//   const renderView = () => {
//     switch (activeView) {
//       case 'upload':
//         return <UploadView navigateTo={navigateTo} />;
//       case 'scans':
//         return <ScanListView navigateTo={navigateTo} />;
//       case 'metadata':
//         return <MetadataView scanId={scanId} navigateTo={navigateTo} />;
//       default:
//         return <HomeView navigateTo={navigateTo} />;
//     }
//   };
  
//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col">
//       <Header navigateTo={navigateTo} activeView={activeView} />
//       <main className="flex-grow container mx-auto px-4 py-8">
//         {renderView()}
//       </main>
//       <Footer />
//     </div>
//   );
// }

// // Header Component
// function Header({ navigateTo, activeView }) {
//   return (
//     <header className="bg-gray-900 text-white shadow-lg">
//       <div className="container mx-auto px-4 py-4">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center space-x-2" onClick={() => navigateTo('home')} style={{ cursor: 'pointer' }}>
//             <FileSearch size={28} className="text-blue-400" />
//             <h1 className="text-xl font-bold">Metadata Forensics</h1>
//           </div>
//           <nav>
//             <ul className="flex space-x-6">
//               <li>
//                 <button 
//                   onClick={() => navigateTo('home')} 
//                   className={`py-2 px-1 border-b-2 ${activeView === 'home' ? 'border-blue-400' : 'border-transparent'}`}
//                 >
//                   Dashboard
//                 </button>
//               </li>
//               <li>
//                 <button 
//                   onClick={() => navigateTo('upload')} 
//                   className={`py-2 px-1 border-b-2 ${activeView === 'upload' ? 'border-blue-400' : 'border-transparent'}`}
//                 >
//                   Upload File
//                 </button>
//               </li>
//               <li>
//                 <button 
//                   onClick={() => navigateTo('scans')} 
//                   className={`py-2 px-1 border-b-2 ${activeView === 'scans' ? 'border-blue-400' : 'border-transparent'}`}
//                 >
//                   View Scans
//                 </button>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// }

// // Footer Component
// function Footer() {
//   return (
//     <footer className="bg-gray-900 text-gray-400 py-6">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row justify-between">
//           <div>
//             <div className="flex items-center space-x-2 mb-4">
//               <FileSearch size={24} className="text-blue-400" />
//               <span className="font-bold text-white">Metadata Forensics</span>
//             </div>
//             <p className="text-sm">Advanced file metadata extraction and analysis tool for digital forensics</p>
//           </div>
//           <div className="mt-4 md:mt-0">
//             <p className="text-sm">© {new Date().getFullYear()} Metadata Forensics</p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// // Home View
// function HomeView({ navigateTo }) {
//   return (
//     <div>
//       <section className="mb-12">
//         <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-white">
//           <h2 className="text-3xl font-bold mb-4">Welcome to Metadata Forensics</h2>
//           <p className="text-xl mb-6">Powerful metadata extraction and analysis for digital investigations</p>
//           <button 
//             onClick={() => navigateTo('upload')} 
//             className="bg-white text-blue-600 px-6 py-2 rounded-md font-medium hover:bg-blue-50 transition"
//           >
//             Start New Scan
//           </button>
//         </div>
//       </section>
      
//       <section className="grid md:grid-cols-3 gap-6 mb-12">
//         <FeatureCard 
//           icon={<Upload size={32} />}
//           title="Upload & Analyze"
//           description="Upload files of any type to extract comprehensive metadata"
//           onClick={() => navigateTo('upload')}
//         />
//         <FeatureCard 
//           icon={<FileCog size={32} />}
//           title="Deep Inspection"
//           description="Examine detailed technical metadata from various file formats"
//           onClick={() => navigateTo('upload')}
//         />
//         <FeatureCard 
//           icon={<Database size={32} />}
//           title="Scan History"
//           description="Access your complete scan history and results"
//           onClick={() => navigateTo('scans')}
//         />
//       </section>
      
//       <RecentScansPanel navigateTo={navigateTo} />
//     </div>
//   );
// }

// // Feature Card Component
// function FeatureCard({ icon, title, description, onClick }) {
//   return (
//     <div 
//       className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition cursor-pointer"
//       onClick={onClick}
//     >
//       <div className="text-blue-500 mb-4">{icon}</div>
//       <h3 className="text-lg font-semibold mb-2">{title}</h3>
//       <p className="text-gray-600">{description}</p>
//     </div>
//   );
// }

// // Recent Scans Panel Component
// function RecentScansPanel({ navigateTo }) {
//   const [recentScans, setRecentScans] = useState([]);
//   const [loading, setLoading] = useState(true);
  
//   useEffect(() => {
//     // Fetch recent scans
//     fetch('/scans?page=1&per_page=5&sort=desc')
//       .then(response => response.json())
//       .then(data => {
//         if (data.status === 'success') {
//           setRecentScans(data.scans);
//         }
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching recent scans:', error);
//         setLoading(false);
//       });
//   }, []);
  
//   return (
//     <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-xl font-semibold">Recent Scans</h2>
//         <button 
//           onClick={() => navigateTo('scans')} 
//           className="text-blue-600 text-sm font-medium hover:text-blue-800"
//         >
//           View All
//         </button>
//       </div>
      
//       {loading ? (
//         <div className="flex justify-center py-8">
//           <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
//         </div>
//       ) : recentScans.length > 0 ? (
//         <div className="divide-y divide-gray-200">
//           {recentScans.map(scan => (
//             <div 
//               key={scan.scan_id} 
//               className="py-4 flex justify-between items-center hover:bg-gray-50 cursor-pointer"
//               onClick={() => navigateTo('metadata', scan.scan_id)}
//             >
//               <div>
//                 <p className="font-medium text-gray-800 truncate max-w-xs md:max-w-md">
//                   {scan.file_path.split('/').pop()}
//                 </p>
//                 <p className="text-sm text-gray-500">
//                   <Clock size={14} className="inline mr-1" />
//                   {new Date(scan.timestamp).toLocaleString()}
//                 </p>
//               </div>
//               <button className="text-blue-600 hover:text-blue-800">
//                 <Search size={18} />
//               </button>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="text-center py-8 text-gray-500">
//           <Database size={40} className="mx-auto mb-2 opacity-40" />
//           <p>No scans found. Upload a file to get started.</p>
//         </div>
//       )}
//     </div>
//   );
// }

// // Upload View
// function UploadView({ navigateTo }) {
//   const [file, setFile] = useState(null);
//   const [uploading, setUploading] = useState(false);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [uploadStatus, setUploadStatus] = useState(null);
//   const [scanId, setScanId] = useState(null);
  
//   const handleFileChange = (e) => {
//     if (e.target.files[0]) {
//       setFile(e.target.files[0]);
//       setUploadStatus(null);
//     }
//   };
  
//   const handleUpload = async () => {
//     if (!file) return;
    
//     setUploading(true);
//     setUploadProgress(0);
//     setUploadStatus(null);
    
//     const formData = new FormData();
//     formData.append('file', file);
    
//     try {
//       // Simulate upload progress for better UX
//       const progressInterval = setInterval(() => {
//         setUploadProgress(prev => {
//           const next = prev + (100 - prev) * 0.1;
//           return Math.min(next, 95);
//         });
//       }, 300);
      
//       const response = await fetch('/upload', {
//         method: 'POST',
//         body: formData,
//       });
      
//       clearInterval(progressInterval);
      
//       if (response.ok) {
//         const data = await response.json();
//         setUploadStatus('success');
//         setUploadProgress(100);
//         setScanId(data.scan_id);
//       } else {
//         const error = await response.json();
//         setUploadStatus('error');
//         console.error('Upload failed:', error);
//       }
//     } catch (error) {
//       setUploadStatus('error');
//       console.error('Upload error:', error);
//     } finally {
//       setUploading(false);
//     }
//   };
  
//   return (
//     <div className="max-w-3xl mx-auto">
//       <h2 className="text-2xl font-bold mb-6">Upload File for Analysis</h2>
      
//       <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 mb-6">
//         <div className="mb-6">
//           <label className="block text-gray-700 font-medium mb-2">Select File for Metadata Extraction</label>
//           <div 
//             className={`border-2 border-dashed rounded-lg p-8 text-center ${
//               file ? 'border-blue-400 bg-blue-50' : 'border-gray-300 hover:border-blue-400'
//             }`}
//           >
//             <input
//               type="file"
//               onChange={handleFileChange}
//               className="hidden"
//               id="file-upload"
//               disabled={uploading}
//             />
//             <label htmlFor="file-upload" className="cursor-pointer">
//               {file ? (
//                 <div>
//                   <FileCog size={40} className="mx-auto mb-4 text-blue-500" />
//                   <p className="text-gray-800 font-medium mb-1">{file.name}</p>
//                   <p className="text-gray-500 text-sm">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
//                 </div>
//               ) : (
//                 <div>
//                   <Upload size={40} className="mx-auto mb-4 text-gray-400" />
//                   <p className="text-gray-800 font-medium">Drag and drop your file here or click to browse</p>
//                   <p className="text-gray-500 text-sm mt-1">Supports all file types for metadata analysis</p>
//                 </div>
//               )}
//             </label>
//           </div>
//         </div>
        
//         {file && (
//           <div>
//             {uploading && (
//               <div className="mb-4">
//                 <div className="flex justify-between text-sm mb-1">
//                   <span>Uploading...</span>
//                   <span>{uploadProgress.toFixed(0)}%</span>
//                 </div>
//                 <div className="w-full bg-gray-200 rounded-full h-2">
//                   <div 
//                     className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
//                     style={{ width: `${uploadProgress}%` }}
//                   ></div>
//                 </div>
//               </div>
//             )}
            
//             {uploadStatus === 'success' && (
//               <div className="mb-4 p-4 bg-green-50 text-green-700 rounded-md flex items-start">
//                 <CheckCircle size={20} className="mr-2 mt-0.5 flex-shrink-0" />
//                 <div>
//                   <p className="font-medium">File uploaded successfully!</p>
//                   <p className="text-sm mt-1">Scan ID: {scanId}</p>
//                   <button 
//                     onClick={() => navigateTo('metadata', scanId)} 
//                     className="mt-2 text-sm font-medium text-green-700 hover:text-green-800"
//                   >
//                     View Metadata Results →
//                   </button>
//                 </div>
//               </div>
//             )}
            
//             {uploadStatus === 'error' && (
//               <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-md flex items-start">
//                 <AlertTriangle size={20} className="mr-2 mt-0.5 flex-shrink-0" />
//                 <div>
//                   <p className="font-medium">Upload failed</p>
//                   <p className="text-sm mt-1">There was an error uploading your file. Please try again.</p>
//                 </div>
//               </div>
//             )}
            
//             <button
//               onClick={handleUpload}
//               disabled={uploading || uploadStatus === 'success'}
//               className={`w-full py-2 px-4 rounded-md font-medium text-white ${
//                 uploading || uploadStatus === 'success'
//                   ? 'bg-gray-400 cursor-not-allowed'
//                   : 'bg-blue-600 hover:bg-blue-700'
//               }`}
//             >
//               {uploading ? 'Uploading...' : uploadStatus === 'success' ? 'Uploaded' : 'Upload and Analyze'}
//             </button>
//           </div>
//         )}
//       </div>
      
//       <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
//         <h3 className="text-lg font-medium text-blue-800 mb-2">About Metadata Analysis</h3>
//         <p className="text-blue-700 text-sm">
//           Our metadata extraction tool analyzes files to reveal hidden information such as creation dates, 
//           modification history, device information, geolocation data, and other forensic artifacts that may 
//           not be visible through standard file viewing applications.
//         </p>
//       </div>
//     </div>
//   );
// }

// // Scan List View
// function ScanListView({ navigateTo }) {
//   const [scans, setScans] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [pagination, setPagination] = useState({
//     currentPage: 1,
//     totalPages: 1,
//     totalScans: 0,
//     perPage: 10
//   });
  
//   useEffect(() => {
//     fetchScans(pagination.currentPage);
//   }, [pagination.currentPage]);
  
//   const fetchScans = (page) => {
//     setLoading(true);
//     fetch(`/scans?page=${page}&per_page=${pagination.perPage}&sort=desc`)
//       .then(response => response.json())
//       .then(data => {
//         if (data.status === 'success') {
//           setScans(data.scans);
//           setPagination({
//             currentPage: data.current_page,
//             totalPages: data.total_pages,
//             totalScans: data.total_scans,
//             perPage: data.per_page
//           });
//         }
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching scans:', error);
//         setLoading(false);
//       });
//   };
  
//   const handlePageChange = (newPage) => {
//     if (newPage >= 1 && newPage <= pagination.totalPages) {
//       setPagination(prev => ({...prev, currentPage: newPage}));
//     }
//   };
  
//   return (
//     <div>
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl font-bold">Scan History</h2>
//         <button
//           onClick={() => navigateTo('upload')}
//           className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700"
//         >
//           New Scan
//         </button>
//       </div>
      
//       <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
//         {loading ? (
//           <div className="flex justify-center py-12">
//             <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
//           </div>
//         ) : scans.length > 0 ? (
//           <>
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">File Name</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Scan ID</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {scans.map(scan => {
//                     const fileName = scan.file_path.split('/').pop();
//                     return (
//                       <tr key={scan.scan_id} className="hover:bg-gray-50">
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="text-sm font-medium text-gray-900 truncate max-w-xs">{fileName}</div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="text-sm text-gray-500 font-mono">{scan.scan_id.substring(0, 8)}...</div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="text-sm text-gray-500">{new Date(scan.timestamp).toLocaleString()}</div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <button
//                             onClick={() => navigateTo('metadata', scan.scan_id)}
//                             className="text-blue-600 hover:text-blue-800 text-sm font-medium"
//                           >
//                             View Details
//                           </button>
//                         </td>
//                       </tr>
//                     );
//                   })}
//                 </tbody>
//               </table>
//             </div>
            
//             {/* Pagination */}
//             <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
//               <div className="text-sm text-gray-500">
//                 Showing <span className="font-medium">{scans.length}</span> of{' '}
//                 <span className="font-medium">{pagination.totalScans}</span> results
//               </div>
//               <div className="flex space-x-2">
//                 <button
//                   onClick={() => handlePageChange(pagination.currentPage - 1)}
//                   disabled={pagination.currentPage === 1}
//                   className={`p-2 rounded ${
//                     pagination.currentPage === 1
//                       ? 'text-gray-400 cursor-not-allowed'
//                       : 'text-gray-600 hover:bg-gray-200'
//                   }`}
//                 >
//                   <ChevronLeft size={16} />
//                 </button>
//                 <span className="text-sm font-medium py-2">
//                   Page {pagination.currentPage} of {pagination.totalPages}
//                 </span>
//                 <button
//                   onClick={() => handlePageChange(pagination.currentPage + 1)}
//                   disabled={pagination.currentPage === pagination.totalPages}
//                   className={`p-2 rounded ${
//                     pagination.currentPage === pagination.totalPages
//                       ? 'text-gray-400 cursor-not-allowed'
//                       : 'text-gray-600 hover:bg-gray-200'
//                   }`}
//                 >
//                   <ChevronRight size={16} />
//                 </button>
//               </div>
//             </div>
//           </>
//         ) : (
//           <div className="text-center py-12 px-4">
//             <Database size={48} className="mx-auto mb-4 text-gray-300" />
//             <h3 className="text-lg font-medium text-gray-700 mb-2">No scans found</h3>
//             <p className="text-gray-500 mb-6">Upload a file to begin your metadata analysis</p>
//             <button
//               onClick={() => navigateTo('upload')}
//               className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700"
//             >
//               Upload a File
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// // Metadata View
// function MetadataView({ scanId, navigateTo }) {
//   const [metadata, setMetadata] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
  
//   useEffect(() => {
//     if (scanId) {
//       setLoading(true);
//       fetch(`/get_metadata?scan_id=${scanId}`, {
//         method: 'POST'
//       })
//         .then(response => {
//           if (!response.ok) {
//             throw new Error('Failed to fetch metadata');
//           }
//           return response.json();
//         })
//         .then(data => {
//           setMetadata(data);
//           setLoading(false);
//         })
//         .catch(err => {
//           setError(err.message);
//           setLoading(false);
//         });
//     }
//   }, [scanId]);
  
//   if (!scanId) {
//     return (
//       <div className="text-center py-12">
//         <AlertTriangle size={48} className="mx-auto mb-4 text-yellow-500" />
//         <h3 className="text-lg font-medium text-gray-700 mb-2">No scan ID provided</h3>
//         <p className="text-gray-500 mb-6">Please select a scan from the scan list</p>
//         <button
//           onClick={() => navigateTo('scans')}
//           className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700"
//         >
//           View Scan List
//         </button>
//       </div>
//     );
//   }
  
//   if (loading) {
//     return (
//       <div className="flex flex-col items-center justify-center py-12">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
//         <p className="text-gray-600">Loading metadata...</p>
//       </div>
//     );
//   }
  
//   if (error) {
//     return (
//       <div className="text-center py-12">
//         <AlertTriangle size={48} className="mx-auto mb-4 text-red-500" />
//         <h3 className="text-lg font-medium text-gray-700 mb-2">Error loading metadata</h3>
//         <p className="text-red-500 mb-6">{error}</p>
//         <button
//           onClick={() => navigateTo('scans')}
//           className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700"
//         >
//           Return to Scan List
//         </button>
//       </div>
//     );
//   }
  
//   if (!metadata) {
//     return (
//       <div className="text-center py-12">
//         <AlertTriangle size={48} className="mx-auto mb-4 text-yellow-500" />
//         <h3 className="text-lg font-medium text-gray-700 mb-2">No metadata found</h3>
//         <p className="text-gray-500 mb-6">The scan ID provided did not return any metadata</p>
//         <button
//           onClick={() => navigateTo('scans')}
//           className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700"
//         >
//           Return to Scan List
//         </button>
//       </div>
//     );
//   }
  
//   const fileName = metadata.file_path.split('/').pop();
  
//   return (
//     <div>
//       <div className="mb-6">
//         <button
//           onClick={() => navigateTo('scans')}
//           className="text-blue-600 hover:text-blue-800 flex items-center"
//         >
//           <ChevronLeft size={16} className="mr-1" />
//           Back to Scan List
//         </button>
//       </div>
      
//       <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 mb-6">
//         <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 pb-6 border-b border-gray-200">
//           <div>
//             <h2 className="text-2xl font-bold mb-2 break-all">{fileName}</h2>
//             <p className="text-gray-500 mb-2">
//               <span className="font-medium">Scan ID:</span> {metadata.scan_id}
//             </p>
//             <p className="text-gray-500">
//               <span className="font-medium">Analyzed:</span> {new Date(metadata.timestamp).toLocaleString()}
//             </p>
//           </div>
//           <div className="mt-4 md:mt-0 flex">
//             <button
//               onClick={() => {
//                 const dataStr = JSON.stringify(metadata, null, 2);
//                 const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
//                 const exportFileDefaultName = `metadata_${fileName}_${metadata.scan_id.substring(0, 8)}.json`;
                
//                 const linkElement = document.createElement('a');
//                 linkElement.setAttribute('href', dataUri);
//                 linkElement.setAttribute('download', exportFileDefaultName);
//                 linkElement.click();
//               }}
//               className="bg-blue-100 text-blue-700 px-4 py-2 rounded-md font-medium hover:bg-blue-200 flex items-center"
//             >
//               <Database size={16} className="mr-2" />
//               Export JSON
//             </button>
//           </div>
//         </div>
        
//         <div>
//           <h3 className="text-lg font-medium mb-4">Extracted Metadata</h3>
          
//           <MetadataTree data={metadata.metadata} />
//         </div>
//       </div>
//     </div>
//   );
// }

// // Recursive component to display nested metadata
// function MetadataTree({ data, level = 0 }) {
//   if (!data || Object.keys(data).length === 0) {
//     return <div className="text-gray-500 italic">No metadata available</div>;
//   }
  
//   if (typeof data !== 'object') {
//     return <div className="text-gray-800">{String(data)}</div>;
//   }
  
//   return (
//     <div className="space-y-2" style={{ marginLeft: level > 0 ? '1.5rem' : '0' }}>
//       {Object.entries(data).map(([key, value]) => {
//         const isObject = typeof value === 'object' && value !== null;
        
//         return (
//           <div key={key} className="border-l-2 border-gray-200 pl-4 py-1">
//             <div className="flex items-start">
//               <div className="font-medium text-gray-700 mr-2">{key}:</div>
//               {isObject ? (
//                 <div className="flex-grow">
//                   <MetadataTree data={value} level={level + 1} />
//                 </div>
//               ) : (
//                 <div className="text-gray-800 break-all">
//                   {typeof value === 'boolean' ? String(value) : value}
//                 </div>
//               )}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import { FileSearch, Upload, Database, Clock, FileCog, ChevronLeft, ChevronRight, Search, AlertTriangle, CheckCircle } from 'lucide-react';

// Main App Component
export default function MetadataForensicsApp() {
  const [activeView, setActiveView] = useState('home');
  const [scanId, setScanId] = useState(null);
  
  // Helper function to switch views
  const navigateTo = (view, id = null) => {
    setActiveView(view);
    if (id) setScanId(id);
  };
  
  // Render the appropriate view
  const renderView = () => {
    switch (activeView) {
      case 'upload':
        return <UploadView navigateTo={navigateTo} />;
      case 'scans':
        return <ScanListView navigateTo={navigateTo} />;
      case 'metadata':
        return <MetadataView scanId={scanId} navigateTo={navigateTo} />;
      default:
        return <HomeView navigateTo={navigateTo} />;
    }
  };
  
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', display: 'flex', flexDirection: 'column' }}>
      <Header navigateTo={navigateTo} activeView={activeView} />
      <main style={{ flexGrow: 1, maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
        {renderView()}
      </main>
      <Footer />
    </div>
  );
}

// Header Component
function Header({ navigateTo, activeView }) {
  return (
    <header style={{ backgroundColor: '#1f2937', color: 'white', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div 
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }} 
          onClick={() => navigateTo('home')}
        >
          <FileSearch size={28} style={{ color: '#60a5fa' }} />
          <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Metadata Forensics</h1>
        </div>
        <nav>
          <ul style={{ display: 'flex', gap: '1.5rem' }}>
            <li>
              <button 
                onClick={() => navigateTo('home')} 
                style={{ 
                  padding: '0.5rem 0.25rem', 
                  borderBottomWidth: '2px', 
                  borderBottomStyle: 'solid',
                  borderBottomColor: activeView === 'home' ? '#60a5fa' : 'transparent',
                  background: 'none',
                  color: 'white',
                  cursor: 'pointer'
                }}
              >
                Dashboard
              </button>
            </li>
            <li>
              <button 
                onClick={() => navigateTo('upload')} 
                style={{ 
                  padding: '0.5rem 0.25rem', 
                  borderBottomWidth: '2px', 
                  borderBottomStyle: 'solid',
                  borderBottomColor: activeView === 'upload' ? '#60a5fa' : 'transparent',
                  background: 'none',
                  color: 'white',
                  cursor: 'pointer'
                }}
              >
                Upload File
              </button>
            </li>
            <li>
              <button 
                onClick={() => navigateTo('scans')} 
                style={{ 
                  padding: '0.5rem 0.25rem', 
                  borderBottomWidth: '2px', 
                  borderBottomStyle: 'solid',
                  borderBottomColor: activeView === 'scans' ? '#60a5fa' : 'transparent',
                  background: 'none',
                  color: 'white',
                  cursor: 'pointer'
                }}
              >
                View Scans
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

// Footer Component
function Footer() {
  return (
    <footer style={{ backgroundColor: '#1f2937', color: '#9ca3af', padding: '1.5rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <FileSearch size={24} style={{ color: '#60a5fa' }} />
              <span style={{ fontWeight: 'bold', color: 'white' }}>Metadata Forensics</span>
            </div>
            <p style={{ fontSize: '0.875rem' }}>Advanced file metadata extraction and analysis tool for digital forensics</p>
          </div>
          <div>
            <p style={{ fontSize: '0.875rem' }}>© {new Date().getFullYear()} Metadata Forensics</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Home View
function HomeView({ navigateTo }) {
  return (
    <div>
      <section style={{ marginBottom: '3rem' }}>
        <div style={{ 
          background: 'linear-gradient(to right, #2563eb, #7c3aed)', 
          borderRadius: '0.5rem', 
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', 
          padding: '2rem',
          color: 'white'
        }}>
          <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1rem' }}>Welcome to Metadata Forensics</h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Powerful metadata extraction and analysis for digital investigations</p>
          <button 
            onClick={() => navigateTo('upload')} 
            style={{ 
              backgroundColor: 'white', 
              color: '#2563eb', 
              padding: '0.5rem 1.5rem',
              borderRadius: '0.375rem',
              fontWeight: '500',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Start New Scan
          </button>
        </div>
      </section>
      
      <section style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(1, 1fr)',
        gap: '1.5rem',
        marginBottom: '3rem'
      }}>
        <style>{`
          @media (min-width: 768px) {
            .feature-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }
        `}</style>
        <div className="feature-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(1, 1fr)',
          gap: '1.5rem'
        }}>
          <FeatureCard 
            icon={<Upload size={32} />}
            title="Upload & Analyze"
            description="Upload files of any type to extract comprehensive metadata"
            onClick={() => navigateTo('upload')}
          />
          <FeatureCard 
            icon={<FileCog size={32} />}
            title="Deep Inspection"
            description="Examine detailed technical metadata from various file formats"
            onClick={() => navigateTo('upload')}
          />
          <FeatureCard 
            icon={<Database size={32} />}
            title="Scan History"
            description="Access your complete scan history and results"
            onClick={() => navigateTo('scans')}
          />
        </div>
      </section>
      
      <RecentScansPanel navigateTo={navigateTo} />
    </div>
  );
}

// Feature Card Component
function FeatureCard({ icon, title, description, onClick }) {
  return (
    <div 
      style={{
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        padding: '1.5rem',
        border: '1px solid #e5e7eb',
        cursor: 'pointer',
        transition: 'box-shadow 0.2s ease-in-out'
      }}
      onClick={onClick}
      onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)'}
      onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)'}
    >
      <div style={{ color: '#3b82f6', marginBottom: '1rem' }}>{icon}</div>
      <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ color: '#6b7280' }}>{description}</p>
    </div>
  );
}

// Recent Scans Panel Component
function RecentScansPanel({ navigateTo }) {
  const [recentScans, setRecentScans] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Fetch recent scans
    fetch('/scans?page=1&per_page=5&sort=desc')
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          setRecentScans(data.scans);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching recent scans:', error);
        setLoading(false);
      });
  }, []);
  
  return (
    <div style={{ 
      backgroundColor: 'white', 
      borderRadius: '0.5rem', 
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', 
      padding: '1.5rem',
      border: '1px solid #e5e7eb'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '600' }}>Recent Scans</h2>
        <button 
          onClick={() => navigateTo('scans')} 
          style={{ 
            color: '#3b82f6', 
            fontSize: '0.875rem', 
            fontWeight: '500',
            background: 'none',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          View All
        </button>
      </div>
      
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem 0' }}>
          <div style={{ 
            width: '2rem', 
            height: '2rem', 
            borderRadius: '50%', 
            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: '#e5e7eb',
            borderTopColor: '#3b82f6',
            animation: 'spin 1s linear infinite'
          }}></div>
          <style>{`
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      ) : recentScans.length > 0 ? (
        <div style={{ borderTop: '1px solid #e5e7eb' }}>
          {recentScans.map(scan => (
            <div 
              key={scan.scan_id} 
              style={{ 
                padding: '1rem 0', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                borderBottom: '1px solid #e5e7eb',
                cursor: 'pointer'
              }}
              onClick={() => navigateTo('metadata', scan.scan_id)}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <div>
                <p style={{ fontWeight: '500', color: '#1f2937', marginBottom: '0.25rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '300px' }}>
                  {scan.file_path.split('/').pop()}
                </p>
                <p style={{ fontSize: '0.875rem', color: '#6b7280', display: 'flex', alignItems: 'center' }}>
                  <Clock size={14} style={{ marginRight: '0.25rem' }} />
                  {new Date(scan.timestamp).toLocaleString()}
                </p>
              </div>
              <button style={{ color: '#3b82f6' }}>
                <Search size={18} />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '2rem 0', color: '#6b7280' }}>
          <Database size={40} style={{ margin: '0 auto 0.5rem auto', opacity: 0.4 }} />
          <p>No scans found. Upload a file to get started.</p>
        </div>
      )}
    </div>
  );
}

// Upload View
function UploadView({ navigateTo }) {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState(null);
  const [scanId, setScanId] = useState(null);
  
  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
      setUploadStatus(null);
    }
  };
  
  const handleUpload = async () => {
    if (!file) return;
    
    setUploading(true);
    setUploadProgress(0);
    setUploadStatus(null);
    
    const formData = new FormData();
    formData.append('file', file);
    
    try {
      // Simulate upload progress for better UX
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => {
          const next = prev + (100 - prev) * 0.1;
          return Math.min(next, 95);
        });
      }, 300);
      
      const response = await fetch('/upload', {
        method: 'POST',
        body: formData,
      });
      
      clearInterval(progressInterval);
      
      if (response.ok) {
        const data = await response.json();
        setUploadStatus('success');
        setUploadProgress(100);
        setScanId(data.scan_id);
      } else {
        const error = await response.json();
        setUploadStatus('error');
        console.error('Upload failed:', error);
      }
    } catch (error) {
      setUploadStatus('error');
      console.error('Upload error:', error);
    } finally {
      setUploading(false);
    }
  };
  
  return (
    <div style={{ maxWidth: '768px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Upload File for Analysis</h2>
      
      <div style={{ 
        backgroundColor: 'white', 
        borderRadius: '0.5rem', 
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', 
        padding: '1.5rem',
        border: '1px solid #e5e7eb',
        marginBottom: '1.5rem'
      }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', color: '#374151', fontWeight: '500', marginBottom: '0.5rem' }}>Select File for Metadata Extraction</label>
          <div 
            style={{ 
              borderWidth: '2px', 
              borderStyle: 'dashed', 
              borderRadius: '0.5rem', 
              padding: '2rem', 
              textAlign: 'center',
              borderColor: file ? '#60a5fa' : '#d1d5db',
              backgroundColor: file ? '#eff6ff' : 'transparent',
              cursor: 'pointer'
            }}
            onClick={() => document.getElementById('file-upload').click()}
          >
            <input
              type="file"
              onChange={handleFileChange}
              style={{ display: 'none' }}
              id="file-upload"
              disabled={uploading}
            />
            {file ? (
              <div>
                <FileCog size={40} style={{ margin: '0 auto 1rem auto', color: '#3b82f6' }} />
                <p style={{ color: '#1f2937', fontWeight: '500', marginBottom: '0.25rem' }}>{file.name}</p>
                <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>{(file.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
            ) : (
              <div>
                <Upload size={40} style={{ margin: '0 auto 1rem auto', color: '#9ca3af' }} />
                <p style={{ color: '#1f2937', fontWeight: '500' }}>Drag and drop your file here or click to browse</p>
                <p style={{ color: '#6b7280', fontSize: '0.875rem', marginTop: '0.25rem' }}>Supports all file types for metadata analysis</p>
              </div>
            )}
          </div>
        </div>
        
        {file && (
          <div>
            {uploading && (
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginBottom: '0.25rem' }}>
                  <span>Uploading...</span>
                  <span>{uploadProgress.toFixed(0)}%</span>
                </div>
                <div style={{ width: '100%', backgroundColor: '#e5e7eb', borderRadius: '9999px', height: '0.5rem' }}>
                  <div 
                    style={{ 
                      backgroundColor: '#3b82f6', 
                      height: '0.5rem', 
                      borderRadius: '9999px',
                      width: `${uploadProgress}%`,
                      transition: 'width 0.3s ease-in-out'
                    }}
                  ></div>
                </div>
              </div>
            )}
            
            {uploadStatus === 'success' && (
              <div style={{ 
                marginBottom: '1rem', 
                padding: '1rem', 
                backgroundColor: '#f0fdf4', 
                color: '#166534', 
                borderRadius: '0.375rem', 
                display: 'flex',
                alignItems: 'flex-start'
              }}>
                <CheckCircle size={20} style={{ marginRight: '0.5rem', marginTop: '0.125rem', flexShrink: 0 }} />
                <div>
                  <p style={{ fontWeight: '500' }}>File uploaded successfully!</p>
                  <p style={{ fontSize: '0.875rem', marginTop: '0.25rem' }}>Scan ID: {scanId}</p>
                  <button 
                    onClick={() => navigateTo('metadata', scanId)} 
                    style={{ 
                      marginTop: '0.5rem', 
                      fontSize: '0.875rem', 
                      fontWeight: '500', 
                      color: '#166534',
                      background: 'none',
                      border: 'none',
                      padding: '0',
                      cursor: 'pointer'
                    }}
                  >
                    View Metadata Results →
                  </button>
                </div>
              </div>
            )}
            
            {uploadStatus === 'error' && (
              <div style={{ 
                marginBottom: '1rem', 
                padding: '1rem', 
                backgroundColor: '#fef2f2', 
                color: '#b91c1c', 
                borderRadius: '0.375rem', 
                display: 'flex',
                alignItems: 'flex-start'
              }}>
                <AlertTriangle size={20} style={{ marginRight: '0.5rem', marginTop: '0.125rem', flexShrink: 0 }} />
                <div>
                  <p style={{ fontWeight: '500' }}>Upload failed</p>
                  <p style={{ fontSize: '0.875rem', marginTop: '0.25rem' }}>There was an error uploading your file. Please try again.</p>
                </div>
              </div>
            )}
            
            <button
              onClick={handleUpload}
              disabled={uploading || uploadStatus === 'success'}
              style={{
                width: '100%',
                padding: '0.5rem 1rem',
                borderRadius: '0.375rem',
                fontWeight: '500',
                color: 'white',
                backgroundColor: uploading || uploadStatus === 'success' ? '#9ca3af' : '#3b82f6',
                cursor: uploading || uploadStatus === 'success' ? 'not-allowed' : 'pointer',
                border: 'none'
              }}
            >
              {uploading ? 'Uploading...' : uploadStatus === 'success' ? 'Uploaded' : 'Upload and Analyze'}
            </button>
          </div>
        )}
      </div>
      
      <div style={{ 
        backgroundColor: '#eff6ff', 
        border: '1px solid #bfdbfe', 
        borderRadius: '0.5rem', 
        padding: '1rem' 
      }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: '500', color: '#1e40af', marginBottom: '0.5rem' }}>About Metadata Analysis</h3>
        <p style={{ color: '#1e40af', fontSize: '0.875rem' }}>
          Our metadata extraction tool analyzes files to reveal hidden information such as creation dates, 
          modification history, device information, geolocation data, and other forensic artifacts that may 
          not be visible through standard file viewing applications.
        </p>
      </div>
    </div>
  );
}

// Scan List View
function ScanListView({ navigateTo }) {
  const [scans, setScans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalScans: 0,
    perPage: 10
  });
  
  useEffect(() => {
    fetchScans(pagination.currentPage);
  }, [pagination.currentPage]);
  
  const fetchScans = (page) => {
    setLoading(true);
    fetch(`/scans?page=${page}&per_page=${pagination.perPage}&sort=desc`)
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          setScans(data.scans);
          setPagination({
            currentPage: data.current_page,
            totalPages: data.total_pages,
            totalScans: data.total_scans,
            perPage: data.per_page
          });
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching scans:', error);
        setLoading(false);
      });
  };
  
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      setPagination(prev => ({...prev, currentPage: newPage}));
    }
  };
  
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Scan History</h2>
        <button
          onClick={() => navigateTo('upload')}
          style={{
            backgroundColor: '#3b82f6',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '0.375rem',
            fontWeight: '500',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          New Scan
        </button>
      </div>
      
      <div style={{
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        border: '1px solid #e5e7eb',
        overflow: 'hidden'
      }}>
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '3rem 0' }}>
            <div style={{ 
              width: '2.5rem', 
              height: '2.5rem', 
              borderRadius: '50%', 
              borderWidth: '2px',
              borderStyle: 'solid',
              borderColor: '#e5e7eb',
              borderTopColor: '#3b82f6',
              animation: 'spin 1s linear infinite'
            }}></div>
            <style>{`
              @keyframes spin {
                to { transform: rotate(360deg); }
              }
            `}</style>
          </div>
        ) : scans.length > 0 ? (
          <>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ minWidth: '100%', borderCollapse: 'collapse' }}>
                <thead style={{ backgroundColor: '#f9fafb' }}>
                  <tr>
                    <th style={{ 
                      padding: '0.75rem 1.5rem',
                      textAlign: 'left',
                      fontSize: '0.75rem',
                      fontWeight: '500',
                      color: '#6b7280',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>File Name</th>
                    <th style={{ 
                      padding: '0.75rem 1.5rem',
                      textAlign: 'left',
                      fontSize: '0.75rem',
                      fontWeight: '500',
                      color: '#6b7280',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>Scan ID</th>
                    <th style={{ 
                      padding: '0.75rem 1.5rem',
                      textAlign: 'left',
                      fontSize: '0.75rem',
                      fontWeight: '500',
                      color: '#6b7280',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>Date & Time</th>
                    <th style={{ 
                      padding: '0.75rem 1.5rem',
                      textAlign: 'left',
                      fontSize: '0.75rem',
                      fontWeight: '500',
                      color: '#6b7280',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>Action</th>
                  </tr>
                </thead>
                <tbody style={{ backgroundColor: 'white' }}>
                  {scans.map(scan => {
                    const fileName = scan.file_path.split('/').pop();
                    return (
                      <tr 
                        key={scan.scan_id} 
                        style={{ borderTop: '1px solid #e5e7eb' }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
                      >
                        <td style={{ padding: '1rem 1.5rem', whiteSpace: 'nowrap' }}>
                          <div style={{ fontSize: '0.875rem', fontWeight: '500', color: '#1f2937', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '300px' }}>{fileName}</div>
                        </td>
                        <td style={{ padding: '1rem 1.5rem', whiteSpace: 'nowrap' }}>
                          <div style={{ fontSize: '0.875rem', color: '#6b7280', fontFamily: 'monospace' }}>{scan.scan_id.substring(0, 8)}...</div>
                        </td>
                        <td style={{ padding: '1rem 1.5rem', whiteSpace: 'nowrap' }}>
                          <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>{new Date(scan.timestamp).toLocaleString()}</div>
                        </td>
                        <td style={{ padding: '1rem 1.5rem', whiteSpace: 'nowrap' }}>
                          <button
                            onClick={() => navigateTo('metadata', scan.scan_id)}
                            style={{
                              color: '#3b82f6',
                              fontSize: '0.875rem',
                              fontWeight: '500',
                              background: 'none',
                              border: 'none',
                              cursor: 'pointer'
                            }}
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            
            {/* Pagination */}
            <div style={{ 
              padding: '1rem 1.5rem', 
              backgroundColor: '#f9fafb', 
              borderTop: '1px solid #e5e7eb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                Showing <span style={{ fontWeight: '500' }}>{scans.length}</span> of{' '}
                <span style={{ fontWeight: '500' }}>{pagination.totalScans}</span> results
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  onClick={() => handlePageChange(pagination.currentPage - 1)}
                  disabled={pagination.currentPage === 1}
                  style={{
                    padding: '0.5rem',
                    borderRadius: '0.25rem',
                    color: pagination.currentPage === 1 ? '#9ca3af' : '#4b5563',
                    cursor: pagination.currentPage === 1 ? 'not-allowed' : 'pointer',
                    background: 'none',
                    border: 'none'
                  }}
                >
                  <ChevronLeft size={16} />
                </button>
                <span style={{ fontSize: '0.875rem', fontWeight: '500', padding: '0.5rem' }}>
                  Page {pagination.currentPage} of {pagination.totalPages}
                </span>
                <button
                  onClick={() => handlePageChange(pagination.currentPage + 1)}
                  disabled={pagination.currentPage === pagination.totalPages}
                  style={{
                    padding: '0.5rem',
                    borderRadius: '0.25rem',
                    color: pagination.currentPage === pagination.totalPages ? '#9ca3af' : '#4b5563',
                    cursor: pagination.currentPage === pagination.totalPages ? 'not-allowed' : 'pointer',
                    background: 'none',
                    border: 'none'
                  }}
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
            <Database size={48} style={{ margin: '0 auto 1rem auto', color: '#d1d5db' }} />
            <h3 style={{ fontSize: '1.125rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>No scans found</h3>
            <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>Upload a file to begin your metadata analysis</p>
            <button
              onClick={() => navigateTo('upload')}
              style={{
                backgroundColor: '#3b82f6',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '0.375rem',
                fontWeight: '500',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Upload a File
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// Metadata View
function MetadataView({ scanId, navigateTo }) {
  const [metadata, setMetadata] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    if (scanId) {
      setLoading(true);
      fetch(`/get_metadata?scan_id=${scanId}`, {
        method: 'POST'
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch metadata');
          }
          return response.json();
        })
        .then(data => {
          setMetadata(data);
          setLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [scanId]);
  
  if (!scanId) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem 0' }}>
        <div style={{ marginBottom: '1rem', color: '#f59e0b', fontSize: '2rem' }}>⚠️</div>
        <h3 style={{ fontSize: '1.125rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>No scan ID provided</h3>
        <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>Please select a scan from the scan list</p>
        <button
          onClick={() => navigateTo('scans')}
          style={{
            backgroundColor: '#3b82f6',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '0.375rem',
            fontWeight: '500',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          View Scan List
        </button>
      </div>
    );
  }
  
  if (loading) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3rem 0' }}>
        <div style={{ 
          width: '3rem', 
          height: '3rem', 
          borderRadius: '50%', 
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: '#e5e7eb',
          borderTopColor: '#3b82f6',
          animation: 'spin 1s linear infinite',
          marginBottom: '1rem'
        }}></div>
        <p style={{ color: '#6b7280' }}>Loading metadata...</p>
        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }
  
  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem 0' }}>
        <div style={{ marginBottom: '1rem', color: '#ef4444', fontSize: '2rem' }}>⚠️</div>
        <h3 style={{ fontSize: '1.125rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>Error loading metadata</h3>
        <p style={{ color: '#ef4444', marginBottom: '1.5rem' }}>{error}</p>
        <button
          onClick={() => navigateTo('scans')}
          style={{
            backgroundColor: '#3b82f6',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '0.375rem',
            fontWeight: '500',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Return to Scan List
        </button>
      </div>
    );
  }
  
  if (!metadata) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem 0' }}>
        <div style={{ marginBottom: '1rem', color: '#f59e0b', fontSize: '2rem' }}>⚠️</div>
        <h3 style={{ fontSize: '1.125rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>No metadata found</h3>
        <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>The scan ID provided did not return any metadata</p>
        <button
          onClick={() => navigateTo('scans')}
          style={{
            backgroundColor: '#3b82f6',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '0.375rem',
            fontWeight: '500',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Return to Scan List
        </button>
      </div>
    );
  }
  
  const fileName = metadata.file_path.split('/').pop();
  
  return (
    <div>
      <div style={{ marginBottom: '1.5rem' }}>
        <button
          onClick={() => navigateTo('scans')}
          style={{
            color: '#3b82f6',
            display: 'flex',
            alignItems: 'center',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem 0'
          }}
        >
          <ChevronLeft size={16} style={{ marginRight: '0.25rem' }} />
          Back to Scan List
        </button>
      </div>
      
      <div style={{ 
        backgroundColor: 'white', 
        borderRadius: '0.5rem', 
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        border: '1px solid #e5e7eb',
        padding: '1.5rem',
        marginBottom: '1.5rem'
      }}>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          borderBottom: '1px solid #e5e7eb',
          paddingBottom: '1.5rem',
          marginBottom: '1.5rem'
        }}>
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', wordBreak: 'break-all' }}>{fileName}</h2>
            <p style={{ color: '#6b7280', marginBottom: '0.5rem' }}>
              <span style={{ fontWeight: '500' }}>Scan ID:</span> {metadata.scan_id}
            </p>
            <p style={{ color: '#6b7280' }}>
              <span style={{ fontWeight: '500' }}>Analyzed:</span> {new Date(metadata.timestamp).toLocaleString()}
            </p>
          </div>
          <div style={{ marginTop: '1rem', display: 'flex' }}>
            <button
              onClick={() => {
                const dataStr = JSON.stringify(metadata, null, 2);
                const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
                const exportFileDefaultName = `metadata_${fileName}_${metadata.scan_id.substring(0, 8)}.json`;
                
                const linkElement = document.createElement('a');
                linkElement.setAttribute('href', dataUri);
                linkElement.setAttribute('download', exportFileDefaultName);
                linkElement.click();
              }}
              style={{
                backgroundColor: '#eff6ff',
                color: '#3b82f6',
                padding: '0.5rem 1rem',
                borderRadius: '0.375rem',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <Database size={16} style={{ marginRight: '0.5rem' }} />
              Export JSON
            </button>
          </div>
        </div>
        
        <div>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '1rem' }}>Extracted Metadata</h3>
          
          <FormattedMetadata data={metadata.metadata} />
        </div>
      </div>
    </div>
  );
}

// Recursive component to display nested metadata
function MetadataTree({ data, level = 0 }) {
  if (!data || Object.keys(data).length === 0) {
    return <div style={{ fontStyle: 'italic', color: '#6b7280' }}>No metadata available</div>;
  }
  
  // If data is a string and looks like a JSON string, try to parse it
  if (typeof data === 'string' && (data.startsWith('{') || data.startsWith('['))) {
    try {
      const parsedData = JSON.parse(data);
      data = parsedData;
    } catch (e) {
      // If parsing fails, keep it as a string
    }
  }
  
  // If data is not an object after potential parsing
  if (typeof data !== 'object' || data === null) {
    return <div style={{ wordBreak: 'break-all' }}>{String(data)}</div>;
  }

  // Handle arrays specially
  if (Array.isArray(data)) {
    return (
      <div style={{ marginLeft: level > 0 ? '1.5rem' : '0' }}>
        {data.map((item, index) => (
          <div 
            key={index} 
            style={{ 
              margin: '0.5rem 0',
              padding: '0.5rem',
              border: '1px solid #e5e7eb',
              borderRadius: '4px',
              backgroundColor: '#f9fafb'
            }}
          >
            <div style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>Item {index + 1}</div>
            <MetadataTree data={item} level={level + 1} />
          </div>
        ))}
      </div>
    );
  }

  // Handle regular objects
  return (
    <div style={{ marginLeft: level > 0 ? '1.5rem' : '0' }}>
      {Object.entries(data).map(([key, value]) => {
        const isObject = typeof value === 'object' && value !== null;
        const isLongString = typeof value === 'string' && value.length > 50;
        
        return (
          <div 
            key={key} 
            style={{ 
              borderLeft: '2px solid #d1d5db',
              paddingLeft: '1rem',
              marginBottom: '0.75rem',
              paddingTop: '0.5rem',
              paddingBottom: '0.5rem',
              backgroundColor: level % 2 === 0 ? '#fff' : '#f9fafb',
              borderRadius: '0 4px 4px 0'
            }}
          >
            <div style={{ display: 'flex', flexDirection: isObject || isLongString ? 'column' : 'row' }}>
              <div style={{ 
                fontWeight: 'bold', 
                color: '#374151',
                marginRight: '0.5rem',
                marginBottom: isObject || isLongString ? '0.5rem' : '0',
                fontSize: level === 0 ? '1.1rem' : '1rem',
                borderBottom: level === 0 ? '2px solid #3b82f6' : 'none',
                paddingBottom: level === 0 ? '0.25rem' : '0'
              }}>
                {key}:
              </div>
              
              <div style={{ 
                flexGrow: 1,
                wordBreak: 'break-all',
                backgroundColor: isObject ? 'transparent' : (level % 2 === 0 ? '#f9fafb' : '#fff'),
                padding: isObject ? '0' : '0.25rem 0.5rem',
                borderRadius: '4px'
              }}>
                {isObject ? (
                  <MetadataTree data={value} level={level + 1} />
                ) : (
                  <span>{typeof value === 'boolean' ? String(value) : value}</span>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Special component to better format metadata for files like videos and audio
function FormattedMetadata({ data }) {
  if (!data) return null;
  
  // Split into sections for better organization
  const sections = {
    General: data.General || {},
    Video: data.Video || {},
    Audio: data.Audio || {},
    Subtitles: data.Subtitles || {},
    // Add other sections as needed
  };

  // If data doesn't fit expected sections format, use the basic tree
  if (Object.values(sections).every(section => Object.keys(section).length === 0)) {
    return <MetadataTree data={data} />;
  }

  return (
    <div>
      {Object.entries(sections).map(([sectionName, sectionData]) => {
        if (!sectionData || Object.keys(sectionData).length === 0) return null;
        
        return (
          <div key={sectionName} style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: 'bold',
              padding: '0.5rem 1rem',
              backgroundColor: '#3b82f6',
              color: 'white',
              borderRadius: '4px 4px 0 0',
              marginBottom: '0'
            }}>
              {sectionName}
            </h3>
            <div style={{ 
              border: '1px solid #d1d5db', 
              borderTop: 'none',
              borderRadius: '0 0 4px 4px',
              padding: '1rem'
            }}>
              <MetadataTree data={sectionData} />
            </div>
          </div>
        );
      })}
    </div>
  );
}