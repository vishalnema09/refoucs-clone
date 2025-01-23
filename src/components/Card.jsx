import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
const Card = ({ width, start, para, hover }) => {
  return (
    <div
      className={`bg-zinc-800 p-5 rounded-xl hover:${hover} ${width} min-h-[30rem] flex flex-col justify-between`}
    >
      <div className="w-full">
        <div className="w-full flex items-center justify-between  ">
          <h3>one heading</h3>
          <MdOutlineArrowRightAlt />
        </div>
        <h1 className="text-3xl font-medium mt-5">whatever something</h1>
      </div>
      <div className="w-full">
        {start && (
          <>
            <h1 className="text-5xl font-semibold tracking-tight leading-none">
              start a project
            </h1>
            <h2>finish the project.</h2>
            <button className="rounded-full py-2 px-5 border-2 border-zinc-50 mt-5">
              Contact US
            </button>
          </>
        )}
        {para && (
          <p className="text-sm text-zinc-500 font-medium mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            minus.
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
