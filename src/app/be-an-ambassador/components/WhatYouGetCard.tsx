import React from "react";
import BadgeIcon from "@/assets/icon/badge.svg";

interface WhatYouGetCardProps {
  title: string;
  content: string;
}

const WhatYouGetCard: React.FC<WhatYouGetCardProps> = ({ title, content }) => {
  return (
    <div className="gradient-border relative rounded-[20px] bg-[#FFFFFF]/20 px-[23px] py-5 backdrop-blur-[20px] before:rounded-[20px] before:bg-gradient-to-b before:from-[#FFFFFF] before:to-[#FFFFFF00]">
      <div className="absolute -left-[46px] top-[7px]">
        <BadgeIcon />
      </div>
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  );
};

export default WhatYouGetCard;
