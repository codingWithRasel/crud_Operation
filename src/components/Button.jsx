import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({ text, className, onclick, type }) => {
  return (
    <button
      className={twMerge(
        ` bg-green-600 px-3 py-2 font-bold rounded-md text-white  ${className}`
      )}
      onClick={onclick}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
