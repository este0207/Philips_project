"use client";
import Links from "./Links";
import Link from "next/link";
import Image from "next/image";
import Pins from "./Pins";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { motion } from "framer-motion"
import { usePathname } from "next/navigation";
import { useState } from "react";
import { t } from "../lib/language";
import { useLanguage } from "../lib/LanguageContext";

export default function Navbar() {
    const pathname = usePathname();
    const { lang, toggleLang } = useLanguage();

    const [menuOpen, setMenuOpen] = useState(false);

    const isProductPage = pathname?.toLowerCase().includes("/products") || pathname?.toLowerCase().includes("/terms") || pathname?.toLowerCase().includes("/privacy");

    const textColor = isProductPage ? "text-black" : "text-white";
    return (
        <nav className="w-full flex items-center py-4 px-4 sm:px-8 bg-transparent justify-between fixed top-5 left-0 z-50">
            {/* Left: Logo & Hamburger */}
            <motion.div 
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="flex bg-white/10 backdrop-blur-md rounded-full justify-between items-center px-6 py-3 shadow-lg gap-5 w-full sm:w-auto">
                <div className="flex items-center justify-between w-full sm:w-autow">
                    <Link href="/" className={`flex ${textColor} text-2xl font-bold`}>
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={30}
                            height={30}
                            className="mr-2"
                        />
                        Philips
                    </Link>
                    {/* Hamburger icon for mobile */}
                    <button
                        className="sm:hidden ml-4 text-2xl focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Menu"
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
                {/* Desktop menu */}
                <div className="hidden sm:flex justify-center space-x-10 text-xl">
                    <ul className={`flex gap-10 items-center ${textColor} list-none pl-5`}>
                        <li><Links href="/" name={t("nav.home", lang)} /></li>
                        <li><Links href="/about" name={t("nav.about", lang)} /></li>
                        <li><Links href="/Products" name={t("nav.products", lang)} /></li>
                        <li><Links href="/contact" name={t("nav.contact", lang)} /></li>
                    </ul>
                </div>
            </motion.div>
            {/* Desktop right icons */}
            <motion.div 
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className={`hidden sm:flex gap-2 ${textColor}`}>
                <Pins icon={<FaShoppingCart />} text="" href="/cart" />
                <Pins icon={<MdLanguage onClick={toggleLang} />} text="" href="#" />
                <Pins icon={<FaUser />} text="" href="/auth" />
            </motion.div>
            {/* Mobile menu overlay */}
            {menuOpen && (
                <div className="fixed inset-0 z-40 flex flex-col items-center justify-start pt-24 bg-black/70 backdrop-blur-md sm:hidden">
                    <ul className="flex flex-col gap-8 items-center text-white text-2xl">
                        <li onClick={() => setMenuOpen(false)}><Links href="/" name={t("nav.home", lang)} /></li>
                        <li onClick={() => setMenuOpen(false)}><Links href="/about" name={t("nav.about", lang)} /></li>
                        <li onClick={() => setMenuOpen(false)}><Links href="/Products" name={t("nav.products", lang)} /></li>
                        <li onClick={() => setMenuOpen(false)}><Links href="/contact" name={t("nav.contact", lang)} /></li>
                    </ul>
                    <div className="flex gap-4 mt-10">
                        <Pins icon={<FaShoppingCart />} text="" href="/cart" />
                        <Pins icon={<MdLanguage onClick={() => { toggleLang(); setMenuOpen(false); }} />} text="" href="#" />
                        <Pins icon={<FaUser />} text="" href="/auth" />
                    </div>
                </div>
            )}
        </nav>
    );
}