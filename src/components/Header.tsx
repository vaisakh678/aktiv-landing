"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Logo from "@/assets/icon/logo.png";
import Link from "next/link";
import ToggleButton from "../app/components/ToggleButton";
import { cn } from "../lib/utils";
import { useIsMediumScreen } from "../hooks/useMediaQuery";

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const isMid = useIsMediumScreen();

  useEffect(() => {
    if (isMid) {
      setToggleNav(false);
    }
  }, [isMid]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setToggleNav(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCloseNav = () => {
    setToggleNav(false);
  };

  return (
    <nav
      className={cn(
        "fixed z-50 flex w-full flex-col overflow-hidden bg-[#FFFFFF1A] backdrop-blur-[60px]",
      )}
      ref={navRef}
    >
      <div className="flex h-[68px] items-center justify-between px-4 text-white lg:px-10 xl:px-[80px]">
        <Link className="flex items-center justify-center gap-1.5" href={"/"}>
          <Image src={Logo} width={24} height={24} alt="logo" />
          <h1 className="font-poppins text-2xl font-medium">Aktiv</h1>
        </Link>

        <div className="hidden items-center justify-center gap-[60px] text-base font-medium md:flex">
          <Link href="/#features" scroll>
            Features
          </Link>
          <Link href="/#faq" scroll>
            FAQ
          </Link>
          <Link href="/be-an-ambassador">Be an Ambassador</Link>
          <Link href="/merch">Merch</Link>
        </div>

        <div>
          <button className="hidden rounded-2xl bg-[#3399FF] px-4 py-2 font-poppins text-base font-medium hover:opacity-90 md:flex">
            Get App
          </button>
          <ToggleButton
            onClick={() => setToggleNav((prev) => !prev)}
            isOpen={toggleNav}
          />
        </div>
      </div>

      <div
        className={cn(
          "flex h-[300px] w-full flex-col gap-5 overflow-hidden p-5 transition-all duration-200",
          {
            "h-0 py-0 opacity-0": !toggleNav,
          },
        )}
      >
        <Link
          className="rounded bg-white p-2 px-4 text-black hover:opacity-80"
          href="/#features"
          onClick={handleCloseNav}
        >
          Features
        </Link>
        <Link
          className="rounded bg-white p-2 px-4 text-black hover:opacity-80"
          href="/#faq"
          scroll
          onClick={handleCloseNav}
        >
          FAQ
        </Link>
        <Link
          className="rounded bg-white p-2 px-4 text-black hover:opacity-80"
          href="/be-an-ambassador"
          onClick={handleCloseNav}
        >
          Be an Ambassador
        </Link>
        <Link
          className="rounded bg-white p-2 px-4 text-black hover:opacity-80"
          href="/merch"
          onClick={handleCloseNav}
        >
          Merch
        </Link>
      </div>
    </nav>
  );
};

export default Header;
