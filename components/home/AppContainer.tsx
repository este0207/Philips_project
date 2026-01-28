"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AppContainer() {
    return (
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
    );
}