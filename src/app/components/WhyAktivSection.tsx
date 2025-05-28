import React from "react";
import WhatAkivBg from "@/assets/icon/what-aktiv-bg.svg";
import Image from "next/image";
import Card from "./Card";
import PuzzleIcon from "@/assets/icon/puzzle.png";

import DependableIcon from "@/assets/icon/dependable.png";
import LeadershipIcon from "@/assets/icon/leadership.png";
import GenerativeIcon from "@/assets/icon/generative.png";
import AktiverseIcon from "@/assets/icon/aktiverse.png";
import ConsistencyIcon from "@/assets/icon/consistency.png";

const WhyAktivSection = () => {
  return (
    <section className="relative scroll-mt-[120px] px-[80px]" id="features">
      <div className="bg-green-400x absolute right-0 top-0 -z-10">
        <WhatAkivBg />
      </div>
      <h2 className="mb-[60px] text-center font-poppins text-[40px] font-medium">
        Why Aktiv?
      </h2>
      <div className="grid grid-cols-3 gap-5">
        <Card
          icon={
            <Image src={PuzzleIcon} alt="Puzzle Icon" width={48} height={48} />
          }
          title="AI-Powered Matching"
          desc="Aktiv’s smart AI helps you find the right people for gym sessions, sports, or any fitness activity based on your location, goals, fitness level, and vibe."
        />
        <Card
          icon={
            <Image
              src={DependableIcon}
              alt="Dependable Icon"
              width={48}
              height={48}
            />
          }
          title="AI-Powered Matching"
          desc="Aktiv’s smart AI helps you find the right people for gym sessions, sports, or any fitness activity based on your location, goals, fitness level, and vibe."
        />
        <Card
          icon={
            <Image
              src={LeadershipIcon}
              alt="Leadership Icon"
              width={48}
              height={48}
            />
          }
          title="AI-Powered Matching"
          desc="Aktiv’s smart AI helps you find the right people for gym sessions, sports, or any fitness activity based on your location, goals, fitness level, and vibe."
        />
        <Card
          icon={
            <Image
              src={GenerativeIcon}
              alt="Generative Icon"
              width={48}
              height={48}
            />
          }
          title="AI-Powered Matching"
          desc="Aktiv’s smart AI helps you find the right people for gym sessions, sports, or any fitness activity based on your location, goals, fitness level, and vibe."
        />
        <Card
          icon={
            <Image
              src={AktiverseIcon}
              alt="Aktiverse Icon"
              width={48}
              height={48}
            />
          }
          title="AI-Powered Matching"
          desc="Aktiv’s smart AI helps you find the right people for gym sessions, sports, or any fitness activity based on your location, goals, fitness level, and vibe."
        />
        <Card
          icon={
            <Image
              src={ConsistencyIcon}
              alt="Consistency Icon"
              width={48}
              height={48}
            />
          }
          title="AI-Powered Matching"
          desc="Aktiv’s smart AI helps you find the right people for gym sessions, sports, or any fitness activity based on your location, goals, fitness level, and vibe."
        />
      </div>
    </section>
  );
};

export default WhyAktivSection;
