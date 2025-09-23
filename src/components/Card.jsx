import React from "react";

const Card = ({ cardName, value, trendDirection, icon }) => {
  return (
    <div className="bg-white p-10 rounded transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl">
      <div className="flex items-center gap-2">
        {icon}
        <h1 className="text-xl font-semibold text-slate-800">{cardName}</h1>
      </div>
      <h2
        className={
          trendDirection
            ? `${
                trendDirection > 0 ? "text-green-500" : "text-red-500"
              } font-bold text-2xl pt-4`
            : "text-slate-800 font-bold text-2xl pt-4"
        }
      >
        {value}
      </h2>
    </div>
  );
};

export default Card;
