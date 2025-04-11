import { useNavigate } from "react-router-dom";
import { Home, ArrowLeft, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <motion.div 
        className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-red-600 p-6">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 15 
            }}
          >
            <svg 
              className="w-20 h-20 text-white mx-auto" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
              />
            </svg>
          </motion.div>
        </div>
        
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Oops! Halaman tidak ditemukan</h1>
          
          <p className="text-gray-600 mb-8 text-center">
            Maaf, kami tidak dapat menemukan halaman yang Anda cari. Halaman mungkin telah dipindahkan atau dihapus.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <button 
              onClick={() => navigate(-1)} 
              className="flex items-center justify-center py-2 px-4 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded transition duration-300"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span>Kembali</span>
            </button>
            
            <button 
              onClick={() => navigate("/")} 
              className="flex items-center justify-center py-2 px-4 bg-blue-900 hover:bg-blue-800 text-white rounded transition duration-300"
            >
              <Home className="w-5 h-5 mr-2" />
              <span>Beranda</span>
            </button>
            
            <button 
              onClick={() => window.location.reload()} 
              className="flex items-center justify-center py-2 px-4 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded transition duration-300"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              <span>Refresh</span>
            </button>
          </div>
        </div>
      </motion.div>
      
      <motion.p 
        className="mt-8 text-gray-500 text-center text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Jika masalah terus berlanjut, silakan hubungi tim dukungan kami.
      </motion.p>
    </div>
  );
}

export default ErrorPage;