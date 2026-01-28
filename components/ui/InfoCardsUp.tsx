"use client";
import InfoCard from "@/components/ui/InfoCard";
import { FaHome , FaStar , FaCheckCircle } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { motion } from "framer-motion";
import { t } from "../../lib/language";
import { useLanguage } from "../../lib/LanguageContext";

export default function InfoPins() {
    const { lang } = useLanguage();
    return (
        <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, margin: "-100px" }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex gap-10 my-20 w-full flex-wrap justify-center items-center">
        <InfoCard 
          icon={<FaHome />}
          titre={t("Pins1.title", lang)} 
          desc={t("Pins1.desc", lang)}
        />
        <InfoCard 
          icon={<FaStar />}
          titre={t("Pins2.title", lang)} 
          desc={t("Pins2.desc", lang)}
        />
        <InfoCard 
          icon={<FaCheckCircle />}
          titre={t("Pins3.title", lang)} 
          desc={t("Pins3.desc", lang)}
        />
        <InfoCard 
          icon={<MdLanguage />}
          titre={t("Pins4.title", lang)} 
          desc={t("Pins4.desc", lang)}
        />
      </motion.div>
    );
}