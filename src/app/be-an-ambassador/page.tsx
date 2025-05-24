import React from "react";
import Image from "next/image";
import AmbassadorCoverImage from "@/assets/images/ambassador.png";

import PartnershipIcon from "@/assets/icon/partnership.png";
import GraphIcon from "@/assets/icon/graph.png";
import BadgeIcon from "@/assets/icon/badge.png";
import WhatYouDoCard from "./components/WhatYouDoCard";
import WhatYouGetCard from "./components/WhatYouGetCard";

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

const page = () => {
  return (
    <div>
      <section className="relative h-svh">
        <Image
          src={AmbassadorCoverImage}
          alt="Merch Cover"
          width={1440}
          height={740}
          className="absolute left-0 top-0 -z-10 h-svh w-full"
        />
        <div className="flex h-full max-w-[765px] items-center justify-center bg-gradient-to-r from-[#121212] to-[#12121200]">
          <div className="max-w-[615px]">
            <h1 className="text-[48px] font-semibold leading-[68px]">
              Be an Aktiv Ambassador
            </h1>
            <p className="mt-4 text-xl font-normal">
              Join us in building the #1 social fitness network
            </p>
            <button
              className="mt-4 h-[52px] w-full max-w-[414px] rounded-xl bg-gradient-to-r from-[#3399FF] to-[#00E676] text-center text-xl font-medium hover:opacity-80"
              style={{
                boxShadow: "4px 0px 18.9px 0px #AFD7FFCC inset",
              }}
            >
              Apply now
            </button>
          </div>
        </div>
      </section>

      <section className="flex min-h-[408px] items-center justify-center">
        <div className="flex w-full max-w-[1000px] items-center justify-between">
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

      <section className="flex min-h-[340px] items-center justify-center bg-gradient-to-r from-[#3399FF] to-[#00E676]">
        <p className="max-w-[1000px] text-center text-[32px] font-medium leading-[44px] text-[#121212]">
          Aktiv is more than an app - it’s a movement. As an ambassador, you’ll
          play a key role in growing our community, spreading the word, and
          bringing people together through fitness and sport.
        </p>
      </section>

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
    </div>
  );
};

export default page;
