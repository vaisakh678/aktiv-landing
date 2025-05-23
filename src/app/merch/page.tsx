import Image, { StaticImageData } from "next/image";
import React from "react";
import MerchCoverImage from "@/assets/images/merch.png";
import { cn } from "../../lib/utils";

import TShirtImage from "@/assets/images/tshirt.png";
import Link from "next/link";

const merchData = [
  {
    title: "T-shirt",
    image: TShirtImage,
    path: "/merch/t-shirt",
  },
  {
    title: "Hoodie",
    image: TShirtImage,
    path: "/merch/hoodie",
  },
  {
    title: "Cap",
    image: TShirtImage,
    path: "/merch/cap",
  },
  {
    title: "Mugs",
    image: TShirtImage,
    path: "/merch/mugs",
  },
  {
    title: "Sticker packs",
    image: TShirtImage,
    path: "/merch/sticker-packs",
  },
];

const MerchCardContainer = ({
  children,
  className,
  path,
}: {
  children: React.ReactNode;
  className?: string;
  path?: string;
}) => {
  return (
    <Link
      className={cn("h-[460px] w-full rounded-xl bg-white", className)}
      href={path ? path : "#"}
    >
      {children}
    </Link>
  );
};

interface MerchCardProps {
  title: string;
  image: StaticImageData;
  path: string;
}

const MerchCard: React.FC<MerchCardProps> = ({ title, image, path }) => {
  return (
    <MerchCardContainer
      className="relative flex flex-col justify-end bg-[#F2F2F2] p-5"
      path={path}
    >
      <Image
        src={image}
        alt={title}
        width={200}
        height={200}
        className="object-fit w-full"
      />
      <div className="absolute bottom-0 left-0 right-0 flex h-[200px] flex-col items-center justify-end bg-gradient-to-t from-[#121212] to-[#12121200]">
        <h2 className="mb-12 text-[28px] font-medium">{title}</h2>
      </div>
    </MerchCardContainer>
  );
};

const page = () => {
  return (
    <div className="">
      <section className="relative h-svh">
        <Image
          src={MerchCoverImage}
          alt="Merch Cover"
          width={1440}
          height={740}
          className="absolute left-0 top-0 -z-10 h-svh w-full"
        />
        <div className="flex h-full max-w-[765px] items-center justify-center bg-gradient-to-r from-[#121212] to-[#12121200]">
          <div className="max-w-[615px]">
            <h1 className="text-[48px] font-semibold leading-[68px]">
              Community-first merch, shipping soon.
            </h1>
            <p className="mt-4 text-xl font-normal">
              Aktiv merch is made for people who move with purpose together.
            </p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-3 gap-5 px-[80px] py-[118px]">
        {merchData.map(({ title, image, path }, index) => (
          <MerchCard key={index} title={title} image={image} path={path} />
        ))}
        <MerchCardContainer className="flex items-center justify-center bg-gradient-to-b from-[#3399FF] to-[#00E676]">
          <p className="w-[300px] text-center text-2xl font-medium leading-9 text-[#121212]">
            More drops coming soon, available to purchase at launch.
          </p>
        </MerchCardContainer>
      </section>

      <section className="mb-[79px] px-[80px]">
        <div className="rounded-3xl bg-gradient-to-r from-[#3399FF] to-[#00E676] p-11">
          <div className="max-w-[585px]">
            <h1 className="text-[48px] font-medium leading-[64px]">
              Represent Aktiv, Get{" "}
              <strong className="font-semibold">Free Merch.</strong>
            </h1>
            <p className="mt-3 text-xl font-medium text-[#E0E0E0]">
              Help us grow the community as an Ambassador and get rewarded.
            </p>
          </div>
          <button
            className="mt-7 h-[52px] w-full max-w-[414px] rounded-xl bg-gradient-to-r from-[#3399FF] to-[#00E676] text-center text-xl font-medium hover:opacity-80"
            style={{
              boxShadow: "4px 0px 18.9px 0px #AFD7FFCC inset",
            }}
          >
            Be an ambassador
          </button>
        </div>
      </section>
    </div>
  );
};

export default page;
