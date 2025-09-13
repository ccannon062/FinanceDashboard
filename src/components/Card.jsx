import React from "react";

const Card = ({ cardName, value, trend, trendDirection, icon }) => {
  return (
    <div className="">
      <h1 className="text-xl font-semibold text-slate-800">{cardName}</h1>
    </div>
  );
};

export default Card;
