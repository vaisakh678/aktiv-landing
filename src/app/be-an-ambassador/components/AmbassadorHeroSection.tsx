import React from "react";

const AmbassadorHeroSection = () => {
  return (
    <section className="relative h-svh bg-[url('/ambassador.png')] bg-cover bg-center bg-no-repeat">
      <div className="flex h-full max-w-[765px] items-center justify-center bg-gradient-to-r from-[#121212] to-[#12121200]">
        <div className="max-w-[615px]">
          <h1 className="text-[48px] font-semibold leading-[68px]">
            Be an Aktiv Ambassador
          </h1>
          <p className="mt-4 text-xl font-normal">
            Join us in building the #1 social fitness network
          </p>
          <button
            className="mt-4 h-[52px] w-full max-w-[414px] rounded-xl bg-gradient-to-r from-[#3399FF] to-[#00E676] text-center text-xl font-medium hover:opacity-80"
            style={{
              boxShadow: "4px 0px 18.9px 0px #AFD7FFCC inset",
            }}
          >
            Apply now
          </button>
        </div>
      </div>
    </section>
  );
};

export default AmbassadorHeroSection;
