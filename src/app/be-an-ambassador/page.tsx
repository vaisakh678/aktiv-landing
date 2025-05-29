import React from "react";
import AmbassadorHeroSection from "./components/AmbassadorHeroSection";
import AmbassadorHighlightSection from "./components/AmbassadorHighlightSection";
import AmbassadorMovementSection from "./components/AmbassadorMovementSection";
import WhatYouDoSection from "./components/WhatYouDoSection";
import WhatYouGetSection from "./components/WhatYouGetSection";
import AmbassadorApplicationForm from "./components/AmbassadorApplicationForm";

const page = () => {
  return (
    <div className="flex flex-col gap-24">
      <AmbassadorHeroSection />
      <AmbassadorHighlightSection />
      <AmbassadorMovementSection />
      <div className="mx-4 flex flex-col gap-24 md:mx-10 lg:mx-[80px]">
        <WhatYouDoSection />
        <WhatYouGetSection />
        <AmbassadorApplicationForm />
      </div>
    </div>
  );
};

export default page;
