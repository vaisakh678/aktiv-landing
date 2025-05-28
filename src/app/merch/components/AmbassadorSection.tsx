import React from "react";
import GradientCircle1 from "@/assets/images/gradient-circle-1.svg";

const AmbassadorSection = () => {
  return (
    <section className="relative mb-[79px] px-[80px]">
      <div className="absolute h-full w-full">
        <GradientCircle1 className="absolute right-0 top-0 size-[480px]" />
      </div>
      <div className="rounded-3xl bg-gradient-to-r from-[#3399FF] to-[#00E676] p-11">
        <div className="max-w-[585px]">
          <h1 className="font-poppins text-[48px] font-medium leading-[64px]">
            Represent Aktiv, Get{" "}
            <strong className="font-semibold">Free Merch.</strong>
          </h1>
          <p className="mt-3 text-xl font-medium text-[#E0E0E0]">
            Help us grow the community as an Ambassador and get rewarded.
          </p>
        </div>
        <button
          className="mt-7 h-[52px] w-full max-w-[414px] rounded-xl bg-gradient-to-r from-[#3399FF] to-[#00E676] text-center font-poppins text-xl font-medium hover:opacity-80"
          style={{
            boxShadow: "4px 0px 18.9px 0px #AFD7FFCC inset",
          }}
        >
          Be an ambassador
        </button>
      </div>
    </section>
  );
};

export default AmbassadorSection;
