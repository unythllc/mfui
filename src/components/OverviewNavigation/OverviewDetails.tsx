"use client";
import React from "react";
import { motion } from "framer-motion";

const OverviewDetails = ({ current }: { current: string }) => {
  console.log(current);

  const tabs = ["Overview", "Docs", "License", "Comments", "Support"];

  return (
    <div
      className={
        "w-7/12 mx-auto my-12 justify-between bg-dark-gray rounded flex gap-8"
      }
    >
      {tabs.map((tab) => {
        return <Tab key={tab} tab={tab} current={current} />;
      })}
    </div>
  );
};

const Tab = ({ tab, current }: { tab: string; current: string }) => {
  const props = current === tab ? { layoutId: "activeTab" } : {};
  return (
    <motion.div
      layout
      {...props}
      className={`text-4xl font-bold text-transparent h-2 ${
        current === tab && " rounded bg-dark-red"
      }`}
    >
      {tab}
    </motion.div>
  );
};

export default OverviewDetails;
