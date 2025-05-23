import React from "react";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const Card: React.FC<CardProps> = ({ icon, title, desc }) => {
  return (
    <div>
      <div className="gradient-border flex flex-col rounded-2xl bg-[#F2F2F233]/20 p-6 pb-[35px] backdrop-blur-[20px] before:rounded-[16px]">
        <div className="mb-4">{icon}</div>
        <h3 className="mb-4 text-xl font-semibold">{title}</h3>
        <p className="text-base font-normal">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
