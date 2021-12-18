import React from "react";

const HomeLaunchpadSteps = ({ id, heading, para }) => {
  return (
    <div className="w-full flex flex-col items-center mt-12 lg:mt-0 lg:items-start sm:ml-8 sm:w-3/4">
      <div className="bg-[#50C9C3] w-fit px-3 py-2 rounded-lg text-white font-bold">
        {id}
      </div>
      <div className="my-5 flex flex-col items-center text-center lg:items-start lg:text-left">
        <h3 className="text-lg font-bold">{heading}</h3>
        <p className="text-gray-500 text-md">{para}</p>
      </div>
    </div>
  );
};

export default HomeLaunchpadSteps;
