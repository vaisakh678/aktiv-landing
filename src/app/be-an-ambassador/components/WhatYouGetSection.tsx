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

const whatYouWillGet = [
  {
    title: "Free merch",
    content: "(tees, caps, stickers, etc.)",
  },
  {
    title: "Early access",
    content: "to the app and new features",
  },
  {
    title: "Shoutouts",
    content: "on our social media",
  },
  {
    title: "Referral rewards",
    content: "as we grow",
  },
  {
    title: "",
    content: "A chance to be part of something meaningful from day one",
  },
  {
    title: "VIP Invites ",
    content: "to any meetups or events",
  },
] as {
  title: string;
  content: string;
}[];

const WhatYouGetSection = () => {
  return (
    <section className="p-[80px]">
      <h1 className="mb-[64px] text-center text-[40px] font-semibold">
        What You Get
      </h1>
      <div className="grid grid-cols-1 gap-x-[96px] gap-y-[48px] md:grid-cols-2 xl:grid-cols-3">
        {whatYouWillGet.map((item, idx) => (
          <WhatYouGetCard {...item} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default WhatYouGetSection;
