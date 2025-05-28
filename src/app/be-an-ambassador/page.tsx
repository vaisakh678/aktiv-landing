import React from "react";
import AmbassadorHeroSection from "./components/AmbassadorHeroSection";
import AmbassadorHighlightSection from "./components/AmbassadorHighlightSection";
import AmbassadorMovementSection from "./components/AmbassadorMovementSection";
import WhatYouDoSection from "./components/WhatYouDoSection";
import WhatYouGetSection from "./components/WhatYouGetSection";
import AmbassadorApplicationForm from "./components/AmbassadorApplicationForm";

const page = () => {
  return (
    <div>
      <AmbassadorHeroSection />
      <AmbassadorHighlightSection />
      <AmbassadorMovementSection />
      <WhatYouDoSection />
      <WhatYouGetSection />

      <AmbassadorApplicationForm />
    </div>
  );
};

export default page;
