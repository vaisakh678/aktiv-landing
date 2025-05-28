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
    <div className="min-h-[242px] max-w-[220px] gap-[48px] rounded-2xl border border-white/80 bg-white/25 p-5 backdrop-blur-[60px]">
      <div className="text-[48px] font-medium">{badgeNumber}</div>
      <p className="text-xl font-medium">{content}</p>
    </div>
  );
};

const whatYouWillDo = [
  {
    badgeNumber: "1",
    content:
      "Share Aktiv with your friends, fitness buddies, and sports circles",
  },
  {
    badgeNumber: "2",
    content:
      "Represent the brand with positivity and purpose - online or offline",
  },
  {
    badgeNumber: "3",
    content: "Invite people to join the App (Waitlist for now)",
  },
  {
    badgeNumber: "4",
    content: "Give feedback and ideas to help shape the future of Aktiv",
  },
] as {
  content: string;
  badgeNumber: string;
}[];

const WhatYouDoSection = () => {
  return (
    <section className="p-[80px]">
      <h1 className="mb-[64px] text-center text-[40px] font-semibold">
        What You’ll Do
      </h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {whatYouWillDo.map((item, idx) => (
          <WhatYouDoCard {...item} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default WhatYouDoSection;
