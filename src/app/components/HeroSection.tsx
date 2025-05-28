import React from "react";
import StarImage from "@/assets/icon/star.svg";

const HeroSection = () => {
  return (
    <section className="relative flex h-[calc(100svh)] px-[80px] pt-[68px]">
      <div className="absolute left-0 right-0 -z-10 flex h-full items-center justify-center">
        <StarImage />
      </div>
      <div className="flex flex-1 items-center justify-between">
        {/* <StarImage /> */}
        <div className="flex max-w-[673px] flex-col gap-5">
          <h1 className="bg-gradient-to-r from-[#3399FF] to-[#00E676] bg-clip-text font-poppins text-[40px] font-semibold leading-[52px] text-transparent">
            Find Your Perfect Workout Buddy and Smart AI support
          </h1>
          <p className="font-normal">
            Tired of training alone or losing motivation? Aktiv helps you find
            workout buddies, accountability partners, coaches, and AI tools for
            motivation, diet, and progress tracking. Plus, access Aktiverse — a
            supportive fitness community.
          </p>
        </div>
        {/*  */}
        <div className="relative flex w-full max-w-[416px] flex-col gap-3">
          <div className="flex flex-col gap-2.5">
            <div className="flex">
              <h3 className="rounded-xl border border-[#3399FFCC] px-4 py-1 font-poppins text-xl font-semibold text-[#3399FF]">
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
            <button className="flex h-[52px] w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#3399FF] to-[#00E676] font-poppins text-xl font-medium hover:opacity-90">
              Get early access
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
