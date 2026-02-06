"use client";
import { motion } from "framer-motion";


export default function AuthContainer() {
    return (
        <motion.div
          className="min-h-screen flex flex-col justify-center items-center bg-transparent backdrop-blur-md p-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            <h1 className="text-4xl font-bold text-white mb-6">Authentication Page</h1>
        
        </motion.div>
        
    );
}