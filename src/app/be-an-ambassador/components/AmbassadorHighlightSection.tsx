import React from "react";
import Image from "next/image";

import PartnershipIcon from "@/assets/icon/partnership.png";
import GraphIcon from "@/assets/icon/graph.png";
import BadgeIcon from "@/assets/icon/badge.png";

const AmbassadorHighlightSection = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="flex w-full max-w-[1000px] flex-col items-center justify-between gap-20 lg:flex-row">
        <div className="flex flex-col items-center">
          <div className="flex size-[140px] items-center justify-center rounded-3xl bg-[#3399FF]">
            <Image
              src={PartnershipIcon}
              alt="Partnership Icon"
              width={80}
              height={80}
            />
          </div>
          <h4 className="mt-6 text-[28px] font-medium">Join the movement</h4>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex size-[140px] items-center justify-center rounded-3xl bg-[#3399FF]">
            <Image src={GraphIcon} alt="Graph Icon" width={80} height={80} />
          </div>
          <h4 className="mt-6 text-[28px] font-medium">Join the movement</h4>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex size-[140px] items-center justify-center rounded-3xl bg-[#3399FF]">
            <Image src={BadgeIcon} alt="Badge Icon" width={80} height={80} />
          </div>
          <h4 className="mt-6 text-[28px] font-medium">Join the movement</h4>
        </div>
      </div>
    </section>
  );
};

export default AmbassadorHighlightSection;
