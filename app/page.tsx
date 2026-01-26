
import InfoCard from "@/components/InfoCard";
import Header from "@/components/Header";
import { FaHome , FaStar , FaCheckCircle } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Header />
      <div className="flex gap-10 my-20">
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
      </div>
    </main>
  );
}
