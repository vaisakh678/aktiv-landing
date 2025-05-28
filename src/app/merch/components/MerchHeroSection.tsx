import React from "react";

const MerchHeroSection = () => {
  return (
    <section className="relative h-svh bg-[url('/merch.png')] bg-cover bg-center bg-no-repeat">
      <div
        className="flex h-full max-w-[765px] items-center justify-center bg-gradient-to-r from-[#121212] to-[#12121200]"
        style={{}}
      >
        <div className="max-w-[615px]">
          <h1 className="font-poppins text-[48px] font-semibold leading-[68px]">
            Community-first merch, shipping soon.
          </h1>
          <p className="mt-4 text-xl font-normal">
            Aktiv merch is made for people who move with purpose together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MerchHeroSection;
