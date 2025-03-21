import React from "react";

interface MyButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button = ({ text, ...rest }: MyButton) => {
  return (
    <button
      {...rest}
      className="cursor-pointer bg-[#0C87D9] p-2 text-white font-medium rounded-3xl h-10 w-auto flex justify-center items-center border-none hover:bg-[#333958] transt"
    >
      {text}
    </button>
  );
};

export default Button;
