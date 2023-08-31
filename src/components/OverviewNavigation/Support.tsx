import React from "react";
import { motion } from "framer-motion";

const Support = () => {
  const [selectTab, setSelectTab] = React.useState("Overview");

  const tabs = ["Overview", "Docs", "License", "Comments", "Support"];
  return (
    <div>
      <ul>
        {tabs.map((tab) => {
          return (
            <li
              onClick={() => setSelectTab(tab)}
              key={tab}
              className="text-4xl font-bold text-transparent h-2"
            >
              {tab}
              {selectTab === tab && (
                <motion.div
                  layout
                  layoutId={"activeOverview"}
                  className={
                    "text-4xl font-bold text-transparent h-2 rounded bg-dark-red"
                  }
                />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Support;
