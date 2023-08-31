"use client";
import React from "react";
import Ratings from "@/components/Ratings";
import Carousel from "@/components/Carousel";
import OverviewNavigation from "@/components/OverviewNavigation";
import ButtonBorderHover from "@/components/animations/ButtonBorderHover";
import { HtmlIcon, ReactIcon, TailwindIcon } from "@/icons/mfui";

const Overview = () => {
  const randomRating = () => {
    // random rating from .5 to 5
    return Math.random() * 5 + 0.5;
  };

  return (
    <div className={"mx-auto my-32 text-white z-10"}>
      <div
        className={"w-4/12 mx-auto flex justify-between gap-16 my-24 text-xl"}
      >
        <ButtonBorderHover
          // TODO: Fix this
          borderColor="#fff"
          className={
            "bg-dark-red hover:bg-red-500 text-white flex items-center justify-center border-0 rounded-full w-full h-12 cursor-pointer font-medium"
          }
        >
          Add to Cart
        </ButtonBorderHover>

        <ButtonBorderHover
          borderColor="#fff"
          className={
            "bg-dark-red hover:bg-red-500 text-white flex items-center justify-center border-0 rounded-full w-full h-12 cursor-pointer font-medium"
          }
        >
          Live Preview
        </ButtonBorderHover>

        <ButtonBorderHover
          borderColor="rgba(235, 86, 84,1)"
          onClick={() => ({})}
          className={
            "bg-white hover:bg-gray-100 text-dark-red flex items-center justify-center border-0 rounded-full w-full h-12 cursor-pointer font-medium"
          }
        >
          Buy Now
        </ButtonBorderHover>
      </div>
      <Carousel />

      {/* Body Heading */}
      <div className={"w-6/12 mx-auto"}>
        <div className={"my-16"}>
          <div className={"flex justify-between items-center"}>
            <div className={"flex gap-4"}>
              <h4 className={"text-dark-red"}>Chef's Kiss</h4>
              <div
                className={
                  "flex gap-2 items-center my-auto text-dark-gray-text"
                }
              >
                <HtmlIcon className={"w-5 h-5"} />
                <TailwindIcon className={"w-5 h-5"} />
                <ReactIcon className={"w-5 h-5"} />
              </div>
            </div>
            <div className={"flex items-center gap-4"}>
              <p className={"text-6xl text-dark-green font-bold"}>$ 69</p>
            </div>
          </div>
          <div className={"flex justify-between items-center my-2"}>
            <h6>Restaurant</h6>
            <div className={"flex items-center gap-4 mt-3"}>
              <p className={"text-xl italic"}>(69)</p>
              <Ratings starSize={40} rating={randomRating()} />
            </div>
          </div>
          <div className={"flex justify-between items-center my-4"}>
            <div className={"grid grid-cols-3 gap-2"}>
              {[1, 2, 3, 4, 5].map((i) => (
                <button
                  key={i}
                  className={
                    "bg-dark-gray text-dark-gray-text px-4 py-1 rounded-full layered"
                  }
                >
                  Tag {i}
                </button>
              ))}
            </div>
            <div className={"flex items-center gap-4"}>
              <p className={"text-xl italic"}>18,397 Sales</p>
            </div>
          </div>
        </div>
      </div>
      {/* Overview Navigation */}
      <OverviewNavigation />
      <div className={"w-8/12 mx-auto"}>
        Occaecat sit minim id in sunt magna sint proident veniam eiusmod
        consectetur deserunt et reprehenderit. Qui veniam qui culpa occaecat ad
        esse sunt consectetur et eu nulla consequat do. Tempor elit fugiat
        cupidatat commodo commodo nostrud adipisicing officia mollit esse sit.
        Eiusmod eiusmod ad aute aliquip amet in tempor magna tempor qui duis
        velit. Ea voluptate excepteur nostrud nisi reprehenderit nisi id
        excepteur. Cillum proident Lorem enim elit culpa in voluptate magna
        irure velit. Anim commodo aliquip nisi magna. Anim reprehenderit culpa
        ut fugiat ullamco nostrud ullamco dolore. Dolore tempor ea ullamco enim
        Lorem Lorem ullamco fugiat.
        <br />
        <br />
        Occaecat sit minim id in sunt magna sint proident veniam eiusmod
        consectetur deserunt et reprehenderit. Qui veniam qui culpa occaecat ad
        esse sunt consectetur et eu nulla consequat do. Tempor elit fugiat
        cupidatat commodo commodo nostrud adipisicing officia mollit esse sit.
        Eiusmod eiusmod ad aute aliquip amet in tempor magna tempor qui duis
        velit. Ea voluptate excepteur nostrud nisi reprehenderit nisi id
        excepteur. Cillum proident Lorem enim elit culpa in voluptate magna
        irure velit. Anim commodo aliquip nisi magna. Anim reprehenderit culpa
        ut fugiat ullamco nostrud ullamco dolore. Dolore tempor ea ullamco enim
        Lorem Lorem ullamco fugiat.
      </div>
    </div>
  );
};

export default Overview;
