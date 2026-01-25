"use client";
import Links from "./Links";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion"

export default function Navbar() {
    return (
        <motion.nav 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-420 flex justify-between items-center py-4 px-8 bg-white/50 shadow-md fixed top-2 left-20 z-50 rounded-full"
        >
            <Link href="/" className="text-2xl font-bold">
                <Image src="/logo.png" alt="Logo" width={40} height={40} />
            </Link>
            <div className="flex space-x-6 text-xl">
                <Links href="/" name="Home" />
                <Links href="/about" name="About" />
                <Links href="/Products" name="Products" />
                <Links href="/contact" name="Contact" />
            </div>
        </motion.nav>
    );
}