import React from "react";
import { motion } from "framer-motion";

type InquirySelectionProps = {
  setFormType: any;
};

const InquirySelection = ({ setFormType }: InquirySelectionProps) => {
  return (
    <motion.div
      // layout
      className={"text-white"}
    >
      <h1 className={"text-center"}>How Can We Help? 😄</h1>
      <motion.div
        // layout
        className={"flex gap-8 mt-24"}
      >
        <motion.div
          // layout
          layoutId="generalInquiry"
          initial={false}
          onClick={() => setFormType("general")}
          className={
            "px-4 py-2 bg-primary font-bold rounded-3xl w-full text-center"
          }
        >
          General Inquiries
        </motion.div>
        <motion.div
          // layout
          layoutId="businessInquiry"
          onClick={() => setFormType("business")}
          className={
            "px-4 py-2 bg-primary font-bold rounded-3xl w-full text-center"
          }
        >
          Bring Idea To Life 💡
        </motion.div>
        <motion.div
          layout
          layoutId="bugReport"
          initial={false}
          onClick={() => setFormType("bug")}
          className={
            "px-4 py-2 bg-primary font-bold rounded-3xl w-full text-center"
          }
        >
          Report a Bug 🐛
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default InquirySelection;
