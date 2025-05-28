import React from "react";

interface ToggleButtonProps {
  onClick?: () => void;
  isOpen?: boolean;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ onClick }) => {
  return (
    <button
      className="flex flex-col items-center justify-center gap-1 md:hidden"
      onClick={onClick}
    >
      <div className="h-0.5 w-4 bg-white" />
      <div className="h-0.5 w-4 bg-white" />
      <div className="h-0.5 w-4 bg-white" />
    </button>
  );
};

export default ToggleButton;
