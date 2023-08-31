"use client";
import React from "react";
import { motion } from "framer-motion";

type ButtonProps = {
  onClick?: () => void;
  type?: string;
  borderColor?: string;
  borderWidth?: string;
  className?: string;
  children: React.ReactNode;
};

enum ButtonType {
  Button = "button",
  Submit = "submit",
}

const ButtonBorderHover = ({
  className,
  children,
  onClick = () => {},
  type = "button",
  borderColor = "#fff",
  borderWidth = "3px",
}: ButtonProps) => {
  return (
    <motion.button
      className={
        className ??
        "bg-dark-red hover:bg-red-500 text-white flex items-center justify-center border-0 rounded-full w-full h-12  cursor-pointer font-medium"
      }
      onClick={onClick}
      type={type as ButtonType}
      style={{
        border: `${borderWidth} solid #fff0`,
      }}
      whileHover={{
        border: `${borderWidth} solid ${borderColor}`,
        transition: { duration: 0.1, ease: "easeIn" },
      }}
    >
      {children}
    </motion.button>
  );
};

export default ButtonBorderHover;
