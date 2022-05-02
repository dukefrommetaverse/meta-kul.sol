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
      filteredDataArray === undefined ? imagesData[1] : filteredDataArray
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
              <h1 className="text-3xl font-bold md:text-4xl  text-white">
        
          Learn and Earn Rare NFT in Metaverse
        </h1>
              <h5 className="text-md text-gray-500 my-2 md:text-lg">
          The Innovative Solana Metaverse Reforming Vedic Education via blockchain.
        </h5>
      </div>
      <div className="grid mt-3 grid-cols-1 lg:grid-cols-3">
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
                  <h2 className="text-2xl font-bold px-4 lg:text-3xl lg:px-0 text-white">
            Metaverse Is Here
          </h2>
                  <p className="mt-4 lg:mt-6 text-white">
            
            <span className="text-white font-semibold">
              
            </span>
                      <span className="text-gray-500 text-white">
              {" "}
              Take a step with us into the metaverse.{" "}
              
            </span>
          </p>
          <div>
          
                     
          </div>
          <div className="flex mt-6 w-full justify-around">
            <h5
              onClick={() => handleOpenDetails(1)}
                          className="pb-4 text-white"
              style={{
                borderBottom: isOpenDetails === 1 && "1px solid white",
                fontWeight: isOpenDetails === 1 && "500",
                cursor: "pointer",
              }}
            >
              What we Aim
            </h5>
            <h5
                  className="pb-4 text-md text-white"
              onClick={() => handleOpenDetails(2)}
              style={{
                borderBottom: isOpenDetails === 2 && "1px solid white",
                fontWeight: isOpenDetails === 2 && "500",
                cursor: "pointer",
              }}
            >
              What we Offer
            </h5>
          </div>
          <hr className="w-full " />
          {isOpenDetails === 1 && (
                      <p className="text-md text-justify mt-6 w-full text-white lg:mt-8">
                          Meta-kul is a metaverse based nft project which aims to spread awareness on blockchain WEB 3.0, NFT&apos;s, etc and we want our educational system to be changed.✌🏻 Reforming the vedic education system in Metaverse where every students will be treated equally  and can work on there special talent and polish them.👨🏻‍🏫
            </p>
          )}
          {isOpenDetails === 2 && (
                      <p className="text-md text-justify mt-6 w-full lg:mt-8 text-white">
                          Verified METAKUL NFT&apos;s are coming to solana. Our nft&apos;s can be staked to earn $KULL, our utility token.Earned $KULL could be spent in the upcoming games, breeding of NFT&aposs and exchange plateforms.
            </p>
          )}
                  <div className="w-11/12 flex flex-col justify-center lg:w-full lg:justify-start sm:flex-row">
                      <a className="w-full mr-6" href="#roadmap">
                     
                      <ButtonCommon 
              isGreen={true}
              text={`ROADMAP`}
                          /> </a>
                      <a className="w-full" rel="noopener noreferrer" target="_blank" href="https://discord.com/invite/sRk3tZ9z3A">
                          <ButtonCommon className="ml-2" text="JOIN THE CLUB" />
                      </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
