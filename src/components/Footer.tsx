import Image from "next/image";
import React from "react";
import Logo from "@/assets/icon/logo.png";
import Link from "next/link";

import InstagramIcon from "@/assets/icon/instagram.svg";
import XIcon from "@/assets/icon/x.svg";
import TelegramIcon from "@/assets/icon/telegram.svg";
import FacebookIcon from "@/assets/icon/facebook.svg";
import LinkedinIcon from "@/assets/icon/linkedin.svg";
import MediumIcon from "@/assets/icon/medium.svg";

const Footer = () => {
  return (
    <div className="grid min-h-[128px] grid-cols-1 grid-rows-3 items-center justify-center bg-[#3E3E3E] px-4 py-6 md:grid-cols-3 md:grid-rows-1 lg:px-10 xl:px-[80px]">
      <div className="flex items-center justify-center gap-1.5 md:justify-start">
        <Image
          src={Logo}
          className="size-8"
          width={32}
          height={32}
          alt="logo"
        />
        <h4 className="font-poppins text-[28px] font-medium">Aktiv</h4>
      </div>
      <div className="flex items-center justify-center">
        <Link
          href={"/privacy-policy"}
          className="text-base font-medium hover:underline"
        >
          Privacy Policy
        </Link>
      </div>
      <div className="flex items-center justify-center gap-1.5 md:justify-end">
        <button className="flex size-8 items-center justify-center rounded-full bg-[#3399FF]">
          <InstagramIcon />
        </button>
        <button className="flex size-8 items-center justify-center rounded-full bg-[#3399FF]">
          <XIcon />
        </button>
        <button className="flex size-8 items-center justify-center rounded-full bg-[#3399FF]">
          <TelegramIcon />
        </button>
        <button className="flex size-8 items-center justify-center rounded-full bg-[#3399FF]">
          <FacebookIcon />
        </button>
        <button className="flex size-8 items-center justify-center rounded-full bg-[#3399FF]">
          <LinkedinIcon />
        </button>
        <button className="flex size-8 items-center justify-center rounded-full bg-[#3399FF]">
          <MediumIcon />
        </button>
      </div>
    </div>
  );
};

export default Footer;
