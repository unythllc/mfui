import React from "react";
import MoneySign from "@/icons/Money";
import { motion } from "framer-motion";

const ExpandableCircle = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <motion.div
          layout
          layoutId="expandableCircle"
          initial={{ scale: 0, x: 0, width: 0 }}
          animate={
            isHovered
              ? {
                  scale: 1,
                  x: 0,
                  width: 100,
                  transition: {
                    duration: 0.5,
                    ease: "easeInOut",
                  },
                }
              : {
                  scale: 0,
                  x: 0,
                  width: 0,
                  transition: {
                    duration: 0.5,
                    ease: "easeInOut",
                  },
                }
          }
          className={
            "text-slate-700 rounded-full h-8 py-2 flex items-center justify-center cursor-pointer text-xl font-medium overflow-x-auto whitespace-nowrap no-scrollbar"
          }
        >
          Buy Now
        </motion.div>
      ) : (
        <motion.div
          layout
          layoutId="expandableCircle"
          initial={{ scale: 0 }}
          animate={
            isHovered
              ? {
                  scale: 0,
                  transition: {
                    duration: 0.4,
                    ease: "easeInOut",
                  },
                }
              : {
                  scale: 1,
                  width: 32,
                  transition: {
                    duration: 0.4,
                    ease: "easeInOut",
                  },
                }
          }
          className={" rounded-full"}
        >
          <MoneySign className={" h-8 w-8 rotate-180"} />
        </motion.div>
      )}
    </div>
  );
};

export default ExpandableCircle;
