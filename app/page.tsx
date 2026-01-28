
"use client";

import Header from "@/components/home/Header";
import InfoPinsUp from "@/components/ui/InfoCardsUp";
import InfoPinsDown from "@/components/ui/InfoCardsDown";
import AppContainer from "@/components/home/AppContainer";
import BioContainer from "@/components/home/BioContainer";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Header />
      <InfoPinsUp />
      <AppContainer />
      <BioContainer />
      <InfoPinsDown />
    </main>
  );
}
