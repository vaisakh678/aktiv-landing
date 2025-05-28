import React from "react";
import LandingPageAccordion from "./LandingPageAccordion";

const FAQSection = () => {
  return (
    <section
      className="mt-[140px] flex scroll-mt-[130px] flex-col justify-between gap-10 xl:flex-row"
      id="faq"
    >
      <div className="max-w-[460px]">
        <h3 className="mb-4 font-poppins text-[40px] font-medium">FAQ</h3>
        <p className="text-xl font-medium">
          Got questions? Find answers to common queries here. If you need more
          info, don’t hesitate to reach out.
        </p>
      </div>
      <div className="w-full lg:max-w-[630px]">
        <LandingPageAccordion />
      </div>
    </section>
  );
};

export default FAQSection;
