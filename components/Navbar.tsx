"use client";
import Links from "./Links";
import Link from "next/link";
import Image from "next/image";
import Pins from "./Pins";
import { FaShoppingCart } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { motion } from "framer-motion"
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const isProductPage = pathname?.toLowerCase().includes("/products");

    const textColor = isProductPage ? "text-black" : "text-white";
    return (
        <nav className="w-full flex items-center py-4 px-8 bg-transparent justify-between fixed top-5 left-0 z-50">
            <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="flex bg-white/10 backdrop-blur-md rounded-full justify-between items-center px-6 py-3 shadow-lg gap-5">
                <div className="flex">
                    <Link href="/" className={`flex ${textColor} text-2xl font-bold`}>
                        <Image src="/logoN.png" alt="Logo" width={40} height={40} />
                        Philips
                    </Link>
                </div>
                <div className="flex justify-center space-x-10 text-xl ">
                    <ul className={`flex gap-10 items-center ${textColor} list-none pl-5`}>
                        <li><Links href="/" name="HOME" /></li>
                        <li><Links href="/about" name="ABOUT" /></li>
                        <li><Links href="/Products" name="PRODUCTS" /></li>
                        <li><Links href="/contact" name="CONTACT" /></li>
                    </ul>
                </div>
            </motion.div>
            <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className={`flex gap-2 ${textColor}`}>
                <Link href="/cart">
                    <Pins icon={<FaShoppingCart />} text="CART" />
                </Link>
                    <Pins icon={<MdLanguage />} text="" />
            </motion.div>
        </nav>
    );
}