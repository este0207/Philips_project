"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BioContainer() {
    return (
        <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, margin: "-100px" }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex justify-center items-center text-center my-10 px-4 w-full flex-wrap gap-8">
        <Image
          src="/homepage.webp"
          alt="Banner Image"
          width={800}
          height={600}
          className="object-cover rounded-2xl"
        />
        <div className="flex flex-col justify-start items-start ml-8 max-w-lg gap-3 text-white">
          <h2 className="font-bold text-2xl text-start">130 ans d'innovation centrée sur les personnes</h2>
          <p className="text-start ">Depuis plus de 130 ans, nous sommes un nom de confiance dans les foyers. Notre histoire commence - et continue - avec des étincelles d'innovation et des expériences à la maison conçues pour rendre la maison moins exigeante et la vie plus gratifiante.</p>
        </div>
      </motion.div>
    );
}