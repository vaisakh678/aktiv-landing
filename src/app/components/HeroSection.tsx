import React from "react";

const HeroSection = () => {
  return (
    <section className="relative flex h-[calc(100svh)] pt-[68px]">
      <div className="flex flex-1 items-center justify-between">
        <div className="flex max-w-[673px] flex-col gap-5">
          <h1 className="bg-gradient-to-r from-[#3399FF] to-[#00E676] bg-clip-text font-poppins text-[40px] font-semibold leading-[52px] text-transparent">
            Find Your Perfect Workout Buddy and Smart AI support
          </h1>
          <p className="font-normal">
            The all-in-one app to help you stay on track
          </p>

          <div className="mt-16">
            <p className="mb-3 text-xl font-medium">
              Sign up now to get early access
            </p>
            <div className="flex flex-col gap-5 xl:flex-row">
              <input
                type="text"
                className="h-14 w-full rounded-xl border border-[#3399FF] bg-[#F2F2F233] px-4 text-[#E0E0E0]"
                placeholder="Enter Your Name"
              />
              <input
                type="text"
                className="h-14 w-full rounded-xl border border-[#3399FF] bg-[#F2F2F233] px-4 text-[#E0E0E0]"
                placeholder="Enter Your Email address"
              />
            </div>
            <button className="mt-3.5 flex h-[52px] w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#3399FF] to-[#00E676] font-poppins text-xl font-medium hover:opacity-90">
              Get early access
            </button>
          </div>
        </div>
        {/*  */}
      </div>
    </section>
  );
};

export default HeroSection;
