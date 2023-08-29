import React from "react";
import { motion } from "framer-motion";

type ButtonProps = {
  onClick: () => void;
  type: string;
  borderColor: string;
  className: string;
  children: React.ReactNode;
};

enum ButtonType {
  Button = "button",
  Submit = "submit",
}

const ButtonBorderHover = ({
  className,
  type,
  children,
  borderColor,
  onClick,
}: ButtonProps) => {
  return (
    <motion.button
      className={className}
      onClick={onClick}
      type={type as ButtonType}
      // {...props}
      style={{
        border: "0px solid #fff0",
      }}
      whileHover={{
        border: `3px solid ${borderColor}`,
        transition: { duration: 0.2, ease: "easeIn" },
      }}
    >
      {children}
    </motion.button>
  );
};

export default ButtonBorderHover;