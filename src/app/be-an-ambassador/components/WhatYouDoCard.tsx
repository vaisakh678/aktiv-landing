import React from "react";

interface WhatYouDoCardProps {
  badgeNumber: string;
  content: string | number;
}

const WhatYouDoCard: React.FC<WhatYouDoCardProps> = ({
  content,
  badgeNumber,
}) => {
  return (
    <div className="gradient-border relative mt-7 rounded-[20px] bg-[#FFFFFF]/20 px-[23px] py-5 backdrop-blur-[20px] before:rounded-[20px] before:bg-gradient-to-b before:from-[#FFFFFF] before:to-[#FFFFFF00]">
      <div className="absolute -top-[27px] left-2.5 flex size-10 items-center justify-center rounded-full bg-[#3399FF] text-2xl font-medium text-[#121212]">
        {badgeNumber}
      </div>
      {content}
    </div>
  );
};

export default WhatYouDoCard;
