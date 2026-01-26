"use client";
import { motion } from "framer-motion";

export default function Header() {
    return (
        <motion.header 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full flex justify-center items-center h-screen top-0 left-0 absolute  text-white">
            <div className="bg-black/30 backdrop-blur-xl rounded-full p-10 text-center shadow-lg">
                <h1 className="text-6xl font-bold mb-4">Welcome to Philips</h1>
                <p className="text-2xl">Your one-stop shop for all things electronics</p>
            </div>
        </motion.header>
    );
}