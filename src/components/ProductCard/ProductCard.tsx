"use client";
import React from "react";

import Image from "next/image";
import Ratings from "@/components/Ratings";
import TechStack from "@/components/TechStack";
import Link from "next/link";
import { motion } from "framer-motion";
import ExpandableCircle from "@/components/animations/ExpandableCircle";
import ButtonBorderHover from "@/components/animations/ButtonBorderHover";

// TODO: Substitute the data here with the actual date
//
type ProductCardProps = {
  id: string;
  i: number;
};

const ProductCard = (props: ProductCardProps) => {
  const [rating, setRating] = React.useState(0);
  const [price, setPrice] = React.useState(0);
  const [sales, setSales] = React.useState(0);

  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => {
    setRating(Math.random() * 5 + 0.5);
    setPrice(Math.floor(Math.random() * 50 + 9.99));
    setSales(Math.floor(Math.random() * 50000 + 500));
  }, []);

  return (
    <div
      // style={{
      //     backgroundImage: `url(/static/mesh-dark.png)`,
      //     backgroundSize: 'cover',
      // }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={"bg-dark-gray rounded-3xl relative shadow-sm p-8"}
    >
      <div className="w-full rounded-2xl block relative">
        <Image
          alt="Product Image"
          priority
          src="/static/arc.png"
          width={400}
          height={200}
          layout={"responsive"}
          className={"rounded-2xl"}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className={
            "absolute top-2 right-2  p-1 flex justify-center items-center bg-dark-green rounded-full z-10"
          }
        >
          <ExpandableCircle />
        </motion.div>
      </div>

      <div className={"px-4"}>
        {/* Template Details */}
        <div className={"mt-4"}>
          <div className={"flex justify-between"}>
            {/* Template Name*/}
            <h5 className="text-2xl font-bold text-dark-red">
              Template {props.i}
            </h5>

            {/* Template Price */}
            <div className="text-2xl font-bold text-dark-green">${price}</div>
          </div>
        </div>

        {/* Template Category and Rating */}
        <div className={"my-2"}>
          <div className={"flex justify-between"}>
            {/* Template Category*/}
            <p className="text-md font-normal text-white">Restaurant</p>

            {/* Template Rating */}
            <div className="flex gap-2">
              <Ratings rating={rating} starSize={20} />
            </div>
          </div>
        </div>
        {/* Template Category and Rating Ends */}

        {/* Tech Stack and Sales*/}
        <div className={"my-2"}>
          <div className={"flex justify-between"}>
            {/* Template Category*/}
            <TechStack techStack={["React", "tailwind", "html"]} />

            {/* Template Rating */}
            <div className="flex gap-2 font-extralight text-sm text-dark-gray-text">
              {
                // random sales from 500 to 50000
                sales + " Sales"
              }
            </div>
          </div>
        </div>
        {/* Tech Stack and Sales Ends */}
      </div>

      <div className={"flex gap-4"}>
        <Link href={`/overview/${props.id}`}>
          <ButtonBorderHover
            bordercolor="#fff"
            className={
              "bg-dark-red hover:bg-red-500 text-white flex items-center justify-center border-0 rounded-full w-full h-12 cursor-pointer font-medium"
            }
          >
            Overview
          </ButtonBorderHover>
        </Link>
        <Link href={"/live-preview"}>
          <ButtonBorderHover
            bordercolor="#fff"
            className={
              "bg-dark-red hover:bg-red-500 text-white flex items-center justify-center border-0 rounded-full w-full h-12  cursor-pointer font-medium"
            }
          >
            Live Preview
          </ButtonBorderHover>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
