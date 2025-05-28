import React from "react";

import MerchHeroSection from "./components/MerchHeroSection";
import MerchGridSection from "./components/MerchGridSection";
import AmbassadorSection from "./components/AmbassadorSection";

const page = () => {
  return (
    <div className="">
      <MerchHeroSection />

      <MerchGridSection />

      <AmbassadorSection />
    </div>
  );
};

export default page;
