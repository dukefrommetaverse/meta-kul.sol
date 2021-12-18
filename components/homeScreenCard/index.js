import Link from "next/link";
import React from "react";

//Components
import SingleCard from "../singleCard";

const HomeScreenCard = ({ data, heading }) => {
  return (
    <div className="px-12 mt-12 sm:px-28">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold md:text-3xl">{heading}</h1>
        <Link href="/">
          <h3 className="w-fit whitespace-nowrap text-lg font-bold cursor-pointer md:text-2xl md:pr-24">
            See All <i className="fas fa-angle-right"></i>
          </h3>
        </Link>
      </div>
      <SingleCard data={data} />
    </div>
  );
};

export default HomeScreenCard;
