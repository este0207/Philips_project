
"use client";

import InfoCard from "@/components/InfoCard";
import Image from "next/image";
import Header from "@/components/Header";
import { FaHome , FaStar , FaCheckCircle , FaTruck , FaHeartbeat} from "react-icons/fa";
import { MdLanguage , MdOutlinePayment } from "react-icons/md";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Header />
      <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, margin: "-100px" }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex gap-10 my-20 w-full flex-wrap justify-center items-center">
        <InfoCard 
          icon={<FaHome />}
          titre="Votre avantage à domiciles" 
          desc="Des expériences à la maison moins exigeantes et plus gratifiantes"
        />
        <InfoCard 
          icon={<FaStar />}
          titre="Apporter des innovations qui comptent" 
          desc="Nos produits vous aident à bien vivre, à rester en bonne santé et à profiter de la vie à la maison."
        />
        <InfoCard 
          icon={<FaCheckCircle />}
          titre="130 ans d'excellence" 
          desc="Nous sommes une marque que vous reconnaissez et en laquelle vous avez confiance avec plus d'un..."
        />
        <InfoCard 
          icon={<MdLanguage />}
          titre="Durable et circulaire" 
          desc="Notre responsabilité est toujours envers les personnes et la planète."
        />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true, margin: "-100px" }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex bg-black h-200 w-full justify-center items-center my-20 rounded-2xl sm:flex-row flex-col"
      >
        <div className="flex flex-col justify-center items-center w-full text-white px-6 py-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Bénéficiez du soutien de notre écosystème de produits et d'applications connectés
          </h2>
          <p className="text-lg mb-6 text-center max-w-xl">
            Téléchargez notre application HomeID et améliorez votre expérience. Rejoignez 1,4 million d'autres utilisateurs satisfaits.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.philips.ka.oneka.app&hl=fr&pli=1"
            className="bg-white text-black px-6 py-3 rounded-full font-medium shadow hover:bg-gray-200 transition"
          >
            Télécharger HomeID
          </a>
        </div>
        <div className="flex justify-center items-center w-full px-8 py-12">
          <Image
            src="/app.jpg"
            alt="App Promotion"
            width={900}
            height={900}
            className="object-cover"
          />
        </div>
      </motion.div>
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
      <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, margin: "-100px" }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex gap-10 w-full p-5 bg-to-black from-transparent via-black flex-wrap justify-center items-center my-20">
        <InfoCard 
          icon={<FaTruck />}
          titre="Livraison gratuite" 
          desc="Livraison gratuite - sans minimum d'achat"
        />
        <InfoCard 
          icon={<FaHeartbeat />}
          titre="Pour ceux qui font d'une maison un chez soi" 
          desc="Conception d'appareils électroménagers pour votre maison"
        />
        <InfoCard 
          icon={<MdLanguage />}
          titre="Émissions compensées" 
          desc="Nous compensons toutes les émissions CO2 des livraisons de notre boutique Philips."
        />
        <InfoCard 
          icon={<MdOutlinePayment />}
          titre="Payez plus tard" 
          desc="Payez jusqu'à 30 jours plus tard avec Klarna"
        />
      </motion.div>
    </main>
  );
}
