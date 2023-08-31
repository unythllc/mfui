import React from "react";
import { motion } from "framer-motion";

const Documentation = () => {
  return (
    <div
      className={
        "w-7/12 mx-auto my-12 justify-between bg-dark-gray rounded  flex gap-8"
      }
    >
      <motion.div className={"text-4xl font-bold text-transparent h-2"}>
        {" "}
        Overview{" "}
      </motion.div>
      <motion.div
        layout
        layoutId={"activeOverview"}
        className={
          "text-4xl font-bold text-transparent h-2 rounded bg-dark-red"
        }
      >
        {" "}
        Docs
      </motion.div>
      <motion.div className={"text-4xl font-bold text-transparent h-2"}>
        License{" "}
      </motion.div>
      <motion.div className={"text-4xl font-bold text-transparent h-2"}>
        Comments{" "}
      </motion.div>
      <motion.div className={"text-4xl font-bold text-transparent h-2"}>
        Support{" "}
      </motion.div>
    </div>
  );
};

export default Documentation;
