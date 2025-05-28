import Image from "next/image";
import React from "react";
import Logo from "@/assets/icon/logo.png";
import Link from "next/link";

const Header = () => {
  return (
    <div className="fixed z-50 flex h-[68px] w-full items-center justify-between bg-[#FFFFFF1A] px-[80px] text-white backdrop-blur-[60px]">
      <Link className="flex items-center justify-center gap-1.5" href={"/"}>
        <Image src={Logo} width={24} height={24} alt="logo" />
        <h1 className="font-poppins text-2xl font-medium">Aktiv</h1>
      </Link>
      <div className="flex items-center justify-center gap-[60px] text-base font-medium">
        <Link href="/#features">Features</Link>
        <Link href="/#faq" scroll>
          FAQ
        </Link>
        <Link href="/be-an-ambassador">Be an Ambassador</Link>
        <Link href="/merch">Merch</Link>
      </div>
      <div>
        <button className="rounded-2xl bg-[#3399FF] px-4 py-2 font-poppins text-base font-medium hover:opacity-90">
          Get App
        </button>
      </div>
    </div>
  );
};

export default Header;
