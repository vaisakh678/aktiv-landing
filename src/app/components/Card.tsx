import React from "react";

interface CardProps {
	icon: React.ReactNode;
	title: string;
	desc: string;
}

const Card: React.FC<CardProps> = ({ icon, title, desc }) => {
	return (
		<div className="bg-gradient-to-b from-[#3399FF] to-[#fff] rounded-2xl overflow-hidden p-px">
			<div className="flex flex-col p-6 pb-[35px] bg-[#3F3F3F] rounded-2xl">
				<div className="mb-4">{icon}</div>
				<h3 className="font-semibold text-xl mb-4">{title}</h3>
				<p className="font-normal text-base">{desc}</p>
			</div>
		</div>
	);
};

export default Card;
