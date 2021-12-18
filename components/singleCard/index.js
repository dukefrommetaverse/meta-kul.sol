import React from "react";

const SingleCard = ({ data }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 md:gap-7 sm:grid-cols-2">
      {data.map((item, i) => (
        <div
          className=" rounded-2xl shadow-[0px_11px_35px_-29px_grey] mt-12"
          key={i}
        >
          <div className="flex justify-center pt-4">
            <img
              src={item.img}
              className="w-10/12 h-full mt-4 rounded-2xl"
              alt={item.head}
            />
          </div>
          <div className="pl-5 pb-4">
            <h2 className="mt-5 text-xl font-semibold md:text-2xl">
              {item.head}
            </h2>
            <p className="py-3 w-11/12 truncate">{item.para}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleCard;
