import React from "react";
import AmbassadorHeroSection from "./components/AmbassadorHeroSection";
import AmbassadorHighlightSection from "./components/AmbassadorHighlightSection";
import AmbassadorMovementSection from "./components/AmbassadorMovementSection";
import WhatYouDoSection from "./components/WhatYouDoSection";
import WhatYouGetSection from "./components/WhatYouGetSection";
import AmbassadorApplicationForm from "./components/AmbassadorApplicationForm";

import BgShape2 from "@/assets/images/shape-2.svg";
import BgShape3 from "@/assets/images/shape-3.svg";
import BgShape1 from "@/assets/images/shape-1.svg";

const page = () => {
  return (
    <div className="relative flex flex-col gap-24">
      <AmbassadorHeroSection />
      <AmbassadorHighlightSection />
      <AmbassadorMovementSection />
      <div className="mx-4 flex flex-col gap-24 md:mx-10 lg:mx-[80px]">
        <div className="flex flex-col gap-24">
          <WhatYouDoSection />
          <WhatYouGetSection />
          <div className="absolute right-0 top-[1780px] -z-10">
            <BgShape1 />
          </div>
          <div className="absolute left-0 top-[1320px] -z-10">
            <BgShape2 />
            <BgShape3 className="mt-[-280px]" />
          </div>
        </div>
        <div>
          <AmbassadorApplicationForm />
          <div className="absolute bottom-[400px] right-0 -z-10 mt-[-80px] rotate-180">
            <BgShape2 />
            <BgShape3 className="mt-[-280px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
