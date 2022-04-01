import React from "react";

const HomeLaunchpadSteps = ({ id, heading, para1, para2, para3,para4 }) => {
  return (
    <div id="#roadmap" className="w-full flex flex-col items-center mt-12 lg:mt-0 lg:items-start sm:ml-8 sm:w-3/4">
      <div className="bg-[#50C9C3] w-fit px-3 py-2 rounded-lg text-white font-bold">
        {id}
      </div>
      <div className="my-5 flex flex-col lg:items-start lg:text-left">
              <h3 className="text-lg text-white font-bold">{heading}</h3>
              <p className="text-gray-500 text-md">{para1}</p>
              <p className="text-gray-500 text-md">{para2}</p>
              <p className="text-gray-500 text-md">{para3}</p>
              <p className="text-gray-500 text-md">{para4}</p>
      </div>
    </div>
  );
};

export default HomeLaunchpadSteps;
