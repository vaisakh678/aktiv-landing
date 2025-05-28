import React from "react";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import TShirtImage from "@/assets/images/tshirt.png";

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

const MerchGridSection = () => {
  return (
    <section className="grid grid-cols-3 gap-5 px-[80px] py-[118px]">
      {merchData.map(({ title, image, path }, index) => (
        <MerchCard key={index} title={title} image={image} path={path} />
      ))}

      <MerchCardContainer className="flex items-center justify-center bg-gradient-to-b from-[#3399FF] to-[#00E676]">
        <p className="w-[300px] text-center font-poppins text-2xl font-medium leading-9 text-[#121212]">
          More drops coming soon, available to purchase at launch.
        </p>
      </MerchCardContainer>
    </section>
  );
};

export default MerchGridSection;
