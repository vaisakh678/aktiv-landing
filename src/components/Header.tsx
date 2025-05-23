import Image from "next/image";
import React from "react";
import Logo from "@/assets/icon/logo.png";
import Link from "next/link";

const Header = () => {
	return (
		<div className="h-[68px] bg-[#2A2A2A] text-white flex items-center justify-between px-[80px]">
			<div className="flex gap-1.5 items-center justify-center">
				<Image src={Logo} width={24} height={24} alt="logo" />
				<h1 className="font-medium text-2xl">Aktiv</h1>
			</div>
			<div className="gap-[60px] flex items-center justify-center text-base font-medium">
				<Link href="/login">Features</Link>
				<Link href="/login">FAQ</Link>
				<Link href="/login">Be an Ambassador</Link>
				<Link href="/login">Merch</Link>
			</div>
			<div>
				<button className="bg-[#3399FF] px-4 py-2 rounded-2xl font-medium text-base">Get App</button>
			</div>
		</div>
	);
};

export default Header;
