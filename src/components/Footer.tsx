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
		<div className="bg-[#3E3E3E] px-[80px] h-[128px] grid grid-cols-3 grid-rows-1">
			<div className="flex gap-1.5 items-center justify-start">
				<Image src={Logo} className="size-8" width={32} height={32} alt="logo" />
				<h4 className="font-medium text-[28px]">Aktiv</h4>
			</div>
			<div className="flex items-center justify-center">
				<Link href={"/privacy-policy"} className="font-medium text-base">
					Privacy Policy
				</Link>
			</div>
			<div className="flex gap-1.5 items-center justify-end">
				<button className="bg-[#3399FF] size-8 rounded-full flex justify-center items-center">
					<InstagramIcon />
				</button>
				<button className="bg-[#3399FF] size-8 rounded-full flex justify-center items-center">
					<XIcon />
				</button>
				<button className="bg-[#3399FF] size-8 rounded-full flex justify-center items-center">
					<TelegramIcon />
				</button>
				<button className="bg-[#3399FF] size-8 rounded-full flex justify-center items-center">
					<FacebookIcon />
				</button>
				<button className="bg-[#3399FF] size-8 rounded-full flex justify-center items-center">
					<LinkedinIcon />
				</button>
				<button className="bg-[#3399FF] size-8 rounded-full flex justify-center items-center">
					<MediumIcon />
				</button>
			</div>
		</div>
	);
};

export default Footer;
