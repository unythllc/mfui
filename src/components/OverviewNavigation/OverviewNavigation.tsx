"use client";
import React from "react";
import OverviewDetails from "./OverviewDetails";
import Docs from "./Docs";
import License from "./License";
import Support from "./Support";
import Comments from "./Comments";
import { motion } from "framer-motion";

const getTab = (i: number) => {
  switch (i) {
    case 0:
      return (current: string) => <OverviewDetails current={current} />;
    case 1:
      return () => <Docs />;
    case 2:
      return () => <License />;
    case 3:
      return () => <Comments />;
    case 4:
      return () => <Support />;
    default:
      return (current: string) => <OverviewDetails current={current} />;
  }
};

type OverviewNavigationProps = {};

const OverviewNavigation = (props: OverviewNavigationProps) => {
  const [current, setCurrent] = React.useState("Overview");

  const navItems = [
    {
      name: "Overview",
      link: "/overview",
    },
    {
      name: "Docs",
      link: "/Docs",
    },
    {
      name: "License",
      link: "/License",
    },
    {
      name: "Comments",
      link: "/Comments",
    },
    {
      name: "Support",
      link: "/Support",
    },
  ];

  // log target item offSetLeft
  const handleClick = (e: any, current: string) => {
    setCurrent(current);
    console.log(e.target.offsetLeft);
    console.log(e);
    // setCurrentPosition(e.target.offsetLeft);
  };

  return (
    <div className={""}>
      <div className={"w-7/12 mx-auto"}>
        <div className={"flex justify-between gap-8 relative"}>
          {navItems.map((item, index) => {
            return (
              <div
                key={index}
                id={item.name}
                onClick={(e) => handleClick(e, item.name)}
                className={`flex flex-col relative cursor-pointer ${
                  current === item.name ? "text-white" : "text-dark-red"
                }`}
              >
                <h4>{item.name}</h4>
                {current === item.name && (
                  <motion.div
                    layout
                    layoutId={"activeOverview"}
                    className={`text-4xl font-bold text-transparent my-12 h-2 rounded bg-dark-red`}
                  />
                )}
              </div>
            );
          })}
          <div className="absolute h-2 rounded bg-dark-gray "></div>
        </div>
      </div>
    </div>
  );
};

export default OverviewNavigation;
