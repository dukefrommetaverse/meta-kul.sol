import React, { useEffect, useState } from "react";

import ButtonCommon from "../buttonCommon";
import { imagesData } from "../data/imagesData";

const Hero = () => {
  const [isOpenAllData, setIsOpenAllData] = useState(1);
  const [filteredData, setFilteredData] = useState({});
  const [isOpenDetails, setIsOpenDetails] = useState(1);
  const handleOpenAllDetails = (value) => {
    setIsOpenAllData(value);
  };
  const hanldeFilteredData = () => {
    const filteredDataArray = imagesData.find(
      (value) => value.id === isOpenAllData
    );
    setFilteredData(
      filteredDataArray === undefined ? imagesData[0] : filteredDataArray
    );
  };
  useEffect(() => {
    hanldeFilteredData();
  }, [isOpenAllData]);
  const handleOpenDetails = (value) => {
    setIsOpenDetails(value);
  };
  return (
    <div className="my-12">
      <div className="text-center">
        <h5 className="text-md text-gray-500 my-2 md:text-lg">
          Buy, Sell and Discover Rare Digital Items
        </h5>
        <h1 className="text-3xl font-bold md:text-4xl">
          The Innovative Solana Marketplace
        </h1>
      </div>
      <div className="grid mt-6 grid-cols-1 lg:grid-cols-3">
        <div className="grid grid-cols-3 gap-1 border-r-4 px-6 lg:pl-6 sm:pr-12">
          {imagesData.map(({ imgSrc, altText, id }) => (
            <div
              className="flex items-center justify-center cursor-pointer mx-1"
              key={id}
              onClick={() => handleOpenAllDetails(id)}
            >
              <img
                className="rounded-xl h-28 w-28 md:rounded-3xl m-2 md:h-40 md:w-40"
                src={imgSrc}
                alt={altText}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-5 lg:mt-0">
          <img
            className="rounded-3xl w-64 h-64 lg:w-10/12 lg:h-[94%] sm:w-96 sm:h-96 object-cover"
            src={filteredData.imgSrc}
            alt={filteredData.altText}
          />
        </div>
        <div className="flex justify-center items-center flex-col mt-8 px-4 lg:pr-12 lg:px-12 sm:mt-4 lg:items-start">
          <h2 className="text-2xl font-bold px-4 lg:text-3xl lg:px-0">
            {filteredData.heading}
          </h2>
          <p className="mt-4 lg:mt-6">
            From{" "}
            <span className="text-black font-semibold">
              {filteredData.price} SOL ·{" "}
            </span>
            <span className="text-gray-500">
              {" "}
              {filteredData.availableCards} of {filteredData.totalCards}{" "}
              available
            </span>
          </p>
          <div>
            <p className="text-gray-500 mt-5">
              Artiste:{" "}
              <span className="text-black font-semibold">
                {" "}
                {filteredData.artiste}
              </span>
            </p>
            <p className="text-gray-500 mt-2">
              Size:{" "}
              <span className="text-black font-semibold">
                {" "}
                {filteredData.size}
              </span>
            </p>
            <p className="text-gray-500 mt-2">
              Created:{" "}
              <span className="text-black font-semibold">
                {" "}
                {filteredData.dateCreated}
              </span>
            </p>
          </div>
          <div className="flex mt-6 w-full justify-around">
            <p
              onClick={() => handleOpenDetails(1)}
              className="pb-4"
              style={{
                borderBottom: isOpenDetails === 1 && "1px solid black",
                fontWeight: isOpenDetails === 1 && "500",
                cursor: "pointer",
              }}
            >
              Details
            </p>
            <p
              className="pb-4 text-md"
              onClick={() => handleOpenDetails(2)}
              style={{
                borderBottom: isOpenDetails === 2 && "1px solid black",
                fontWeight: isOpenDetails === 2 && "500",
                cursor: "pointer",
              }}
            >
              Offers
            </p>
          </div>
          <hr className="w-full text-gray-500" />
          {isOpenDetails === 1 && (
            <p className="text-md text-justify mt-6 w-full lg:mt-8">
              {filteredData.details}
            </p>
          )}
          {isOpenDetails === 2 && (
            <p className="text-md text-justify mt-6 w-full lg:mt-8">
              {filteredData.offers}
            </p>
          )}
          <div className="w-11/12 flex flex-col justify-center lg:w-full lg:justify-start sm:flex-row">
            <ButtonCommon
              isGreen={true}
              text={`Buy for ${filteredData.price} SOL`}
            />
            <ButtonCommon text="Make Offer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
