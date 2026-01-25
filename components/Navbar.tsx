"use client";
import Links from "./Links";
import Link from "next/link";
import Image from "next/image";
import Pins from "./Pins";
import { FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion"

export default function Navbar() {
    return (
        <motion.nav 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="w-full flex items-center py-4 px-8 bg-transparent justify-between fixed top-10 left-0 z-50"
        >
            <div className="flex bg-white/10 backdrop-blur-md rounded-xl justify-between items-center px-6 py-3 shadow-lg">
                <div className="flex">
                    <Link href="/" className="flex text-white text-2xl font-bold">
                        <Image src="/logoN.png" alt="Logo" width={40} height={40} />
                        Philips
                    </Link>
                </div>
                <div className="flex justify-center space-x-6 text-xl ">
                    <ul className="flex gap-5 items-center text-white list-disc pl-5">
                        <Links href="/" name="Home" />
                        <Links href="/about" name="About" />
                        <Links href="/Products" name="Products" />
                        <Links href="/contact" name="Contact" />
                    </ul>
                </div>
            </div>
            <Pins icon={<FaShoppingCart />} />
        </motion.nav>
    );
}