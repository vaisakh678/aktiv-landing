import React from "react";
import BgShape4 from "@/assets/icon/Vector 29.svg";
import AppStoreIcon from "@/assets/icon/app-store.svg";
import PlayStoreIcon from "@/assets/icon/play-store.svg";

const NotifyEarlyAccessSection = () => {
  return (
    <section className="relative px-[80px] pb-[81px] pt-[120px]">
      <div>
        <BgShape4 className="absolute right-0 -z-10 h-full" />
      </div>
      <div className="gradient-border flex justify-between overflow-hidden rounded-3xl bg-[#F2F2F233] p-11 backdrop-blur-[20px] before:rounded-3xl before:bg-gradient-to-r before:from-[#00E676] before:to-[#00E67600]">
        <div className="w-full max-w-[480px]">
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
          <button className="mt-5 h-[52px] rounded-xl bg-gradient-to-r from-[#3399FF] to-[#00E676] px-6 font-poppins text-xl font-medium hover:opacity-90">
            Get early access
          </button>
        </div>
      </div>
    </section>
  );
};

export default NotifyEarlyAccessSection;
