import React from "react";

const Service = (props) => {
  return (
    <div className="group w-[80vw] md:w-auto md:relative">
      <h1 className="text-center bg-orange text-sm md:text-lg font-bold">
        {props.service}
      </h1>
      <img
        src={props.img}
        alt=""
        className="hidden md:block md:aspect-square md:w-[40vh] md:h-[35vh] w-full"
      />
      <p className="block p-10 opacity-1 text-left rounded-none md:p-0 md:hidden md:absolute md:top-[50%] bg-blue md:bg-opacity-80 text-white md:rounded-md md:px-10 md:py-5 md:left-0 md:group-hover:block">
        {props.desc}
      </p>
    </div>
  );
};

export default Service;
