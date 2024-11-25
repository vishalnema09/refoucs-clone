import React from "react";

const Stripe = ({ val }) => {
  return (
    <div className="w-[16.66%] py-4 px-10 border-t-2 border-b-2 border-r-2 border-zinc-600 flex items-center justify-between">
      <img className="w-20" src={val.url} alt="" />
      <span className="font-semibold">{val.number}</span>
    </div>
  );
};

export default Stripe;
