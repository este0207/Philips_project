"use client";
import InfoCard from "@/components/ui/InfoCard";
import { FaTruck , FaHeartbeat } from "react-icons/fa";
import { MdLanguage , MdOutlinePayment } from "react-icons/md";
import { motion } from "framer-motion";
import { t } from "../lib/language";
import { useLanguage } from "../lib/LanguageContext";

export default function InfoPins() {
    const { lang } = useLanguage(); 
    return (
        <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, margin: "-100px" }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex gap-10 w-full p-5 bg-to-black from-transparent via-black flex-wrap justify-center items-center my-20">
        <InfoCard 
          icon={<FaTruck />}
          titre={t("Pins5.title", lang)} 
          desc={t("Pins5.desc", lang)}
        />
        <InfoCard 
          icon={<FaHeartbeat />}
          titre={t("Pins6.title", lang)} 
          desc={t("Pins6.desc", lang)}
        />
        <InfoCard 
          icon={<MdLanguage />}
          titre={t("Pins7.title", lang)} 
          desc={t("Pins7.desc", lang)}
        />
        <InfoCard 
          icon={<MdOutlinePayment />}
          titre={t("Pins8.title", lang)} 
          desc={t("Pins8.desc", lang)}
        />
      </motion.div>
    );
}