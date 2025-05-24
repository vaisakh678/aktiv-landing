import Image from "next/image";
import Card from "./components/Card";
import PuzzleIcon from "@/assets/icon/puzzle.png";
import AppStoreIcon from "@/assets/icon/app-store.svg";
import PlayStoreIcon from "@/assets/icon/play-store.svg";
import LandingPageAccordion from "./components/LandingPageAccordion";

import StarImage from "@/assets/icon/star.svg";
import WhatAkivBg from "@/assets/icon/what-aktiv-bg.svg";
import BgShape2 from "@/assets/images/shape-2.svg";
import BgShape3 from "@/assets/images/shape-3.svg";
import BgShape4 from "@/assets/icon/Vector 29.svg";
import DependableIcon from "@/assets/icon/dependable.png";
import LeadershipIcon from "@/assets/icon/leadership.png";
import GenerativeIcon from "@/assets/icon/generative.png";
import AktiverseIcon from "@/assets/icon/aktiverse.png";
import ConsistencyIcon from "@/assets/icon/consistency.png";

export default function Home() {
  return (
    <div className="">
      <section className="relative flex h-[calc(100svh)] px-[80px] pt-[68px]">
        <div className="absolute left-0 right-0 -z-10 flex h-full items-center justify-center">
          <StarImage />
        </div>
        <div className="flex flex-1 items-center justify-between">
          {/* <StarImage /> */}
          <div className="flex max-w-[673px] flex-col gap-5">
            <h1 className="font-poppins bg-gradient-to-r from-[#3399FF] to-[#00E676] bg-clip-text text-[40px] font-semibold leading-[52px] text-transparent">
              Find Your Perfect Workout Buddy and Smart AI support
            </h1>
            <p className="font-normal">
              Tired of training alone or losing motivation? Aktiv helps you find
              workout buddies, accountability partners, coaches, and AI tools
              for motivation, diet, and progress tracking. Plus, access
              Aktiverse — a supportive fitness community.
            </p>
          </div>
          {/*  */}
          <div className="relative flex w-full max-w-[416px] flex-col gap-3">
            <div className="flex flex-col gap-2.5">
              <div className="flex">
                <h3 className="font-poppins rounded-xl border border-[#3399FFCC] px-4 py-1 text-xl font-semibold text-[#3399FF]">
                  Launching Soon
                </h3>
              </div>
              <p className="text-2xl font-medium">
                Sign up now to get early access
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="text"
                className="h-14 rounded-xl border border-[#3399FF] bg-[#F2F2F233] px-4 text-[#E0E0E0]"
                placeholder="Enter Your Name"
              />
              <input
                type="text"
                className="h-14 rounded-xl border border-[#3399FF] bg-[#F2F2F233] px-4 text-[#E0E0E0]"
                placeholder="Enter Your Email address"
              />
            </div>
            <div>
              <button className="font-poppins flex h-[52px] w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#3399FF] to-[#00E676] text-xl font-medium hover:opacity-90">
                Get early access
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-[80px]">
        <div className="bg-green-400x absolute right-0 top-0 -z-10">
          <WhatAkivBg />
        </div>
        <h2 className="font-poppins mb-[60px] text-center text-[40px] font-medium">
          Why Aktiv?
        </h2>
        <div className="grid grid-cols-3 gap-5">
          <Card
            icon={
              <Image
                src={PuzzleIcon}
                alt="Puzzle Icon"
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

      <section className="relative">
        <div className="absolute left-0 top-0 -z-10 mt-[-80px]">
          <BgShape2 />
          <BgShape3 className="mt-[-280px]" />
        </div>
        <section className="mt-[140px] flex justify-between px-[80px]">
          <div className="max-w-[460px]">
            <h3 className="font-poppins mb-4 text-[40px] font-medium">FAQ</h3>
            <p className="text-xl font-medium">
              Got questions? Find answers to common queries here. If you need
              more info, don’t hesitate to reach out.
            </p>
          </div>
          <div className="w-full max-w-[630px]">
            <LandingPageAccordion />
          </div>
        </section>

        <section className="relative px-[80px] pb-[81px] pt-[120px]">
          <div>
            <BgShape4 className="absolute right-0 -z-10 h-full" />
          </div>
          <div className="gradient-border flex justify-between overflow-hidden rounded-3xl bg-[#F2F2F233] p-11 backdrop-blur-[20px] before:rounded-3xl before:bg-gradient-to-r before:from-[#00E676] before:to-[#00E67600]">
            <div>
              <div>
                <h2 className="font-poppins text-[40px] font-medium leading-[56px]">
                  Available Soon on App Store & Google Play
                </h2>
                <div className="mt-14"></div>
              </div>
              <div className="flex gap-14">
                <AppStoreIcon className="cursor-pointer transition-transform duration-200 hover:scale-110" />
                <PlayStoreIcon className="cursor-pointer transition-transform duration-200 hover:scale-110" />
              </div>
            </div>
            <div className="max-w-[420px]">
              <h3 className="text-2xl font-medium">
                Get Notified When We Launch and Enjoy Exclusive Early Access.
              </h3>
              <div className="mt-4 flex flex-col gap-3">
                <input
                  type="text"
                  className="h-14 rounded-xl border border-[#3399FF] bg-[#F2F2F233] p-px px-4 text-[#E0E0E0]"
                  placeholder="Enter Your Name"
                />
                <input
                  type="text"
                  className="h-14 rounded-xl border border-[#3399FF] bg-[#F2F2F233] p-px px-4 text-[#E0E0E0]"
                  placeholder="Enter Your Email address"
                />
              </div>
              <button className="font-poppins mt-5 h-[52px] rounded-xl bg-gradient-to-r from-[#3399FF] to-[#00E676] px-6 text-xl font-medium hover:opacity-90">
                Get early access
              </button>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
