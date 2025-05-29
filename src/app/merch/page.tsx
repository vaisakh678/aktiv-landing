import React from "react";

import MerchHeroSection from "./components/MerchHeroSection";
import MerchGridSection from "./components/MerchGridSection";
import AmbassadorSection from "./components/AmbassadorSection";

const page = () => {
  return (
    <div className="flex flex-col gap-24 pb-24">
      <MerchHeroSection />
      <div className="flex flex-col gap-24 px-4 lg:px-10 xl:px-[80px]">
        <MerchGridSection />
        <AmbassadorSection />
      </div>
    </div>
  );
};

export default page;
