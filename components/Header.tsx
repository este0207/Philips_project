"use client";
import { motion } from "framer-motion";
import { t } from "../lib/language";
import { useLanguage } from "../lib/LanguageContext";


export default function Header() {
    const { lang } = useLanguage();
    return (
        <motion.header 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full flex justify-center items-center h-260 top-0 left-0   text-white">
            <div className="p-10 text-center ">
                <h1 className="text-6xl font-bold mb-4">{t("hero.title", lang)}</h1>
                <p className="text-2xl">{t("hero.subtitle", lang)}</p>
            </div>
        </motion.header>
    );
}