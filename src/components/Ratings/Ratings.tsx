import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";

type RatingsProps = {
  rating: number;
  starSize: number;
};

const Ratings = (props: RatingsProps) => {
  const { rating } = props;
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(
        <FaStar size={props.starSize} key={i} className={"text-accent"} />,
      );
    } else if (i - 0.5 === rating) {
      stars.push(
        <FaStarHalf
          size={props.starSize}
          className={"transform rotate-180 text-accent"}
          key={i}
        />,
      );
    } else {
      stars.push(
        <FaStar size={props.starSize} key={i} className={"text-dark-black"} />,
      );
    }
  }
  return <div className="flex gap-2">{stars.reverse()}</div>;
};

export default Ratings;
