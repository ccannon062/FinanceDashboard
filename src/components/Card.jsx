import React from "react";

const Card = ({ cardName, value, trend, trendDirection, icon }) => {
  //Trend direction will need to come into play later with the trend span display options.
  return (
    <div className="bg-white p-10 rounded transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl">
      <div className="flex items-center gap-2">
        {icon}
        <h1 className="text-xl font-semibold text-slate-800">{cardName}</h1>
      </div>
      <h2 className="text-slate-800 font-bold text-2xl pt-4">{value}</h2>
      <div className={trend ? "text-green-700 pt-2" : "hidden"}>
        {trend}
        <span className="text-slate-600"> (24 h)</span>
      </div>
    </div>
  );
};

export default Card;
