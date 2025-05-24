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
    <div className="grid h-[128px] grid-cols-3 grid-rows-1 bg-[#3E3E3E] px-[80px]">
      <div className="flex items-center justify-start gap-1.5">
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
        <Link href={"/privacy-policy"} className="text-base font-medium">
          Privacy Policy
        </Link>
      </div>
      <div className="flex items-center justify-end gap-1.5">
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
