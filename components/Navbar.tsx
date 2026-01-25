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
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="w-full flex items-center py-4 px-8 bg-transparent justify-between fixed top-10 left-0 z-50"
        >
            <div className="flex bg-white/10 backdrop-blur-md rounded-full justify-between items-center px-6 py-3 shadow-lg gap-5">
                <div className="flex">
                    <Link href="/" className="flex text-white text-2xl font-bold">
                        <Image src="/logoN.png" alt="Logo" width={40} height={40} />
                        Philips
                    </Link>
                </div>
                <div className="flex justify-center space-x-10 text-xl ">
                    <ul className="flex gap-10 items-center text-white list-none pl-5">
                        <li><Links href="/" name="Home" /></li>
                        <li><Links href="/about" name="About" /></li>
                        <li><Links href="/Products" name="Products" /></li>
                        <li><Links href="/contact" name="Contact" /></li>
                    </ul>
                </div>
            </div>
            <Link href="/cart" className="text-white text-2xl">
                <Pins icon={<FaShoppingCart />} />
            </Link>
        </motion.nav>
    );
}