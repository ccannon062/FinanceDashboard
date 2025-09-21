import React from "react";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { data } from "react-router";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

const Coins = () => {
  const [coinList, setCoinList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchCoins = async () => {
    try {
      const response = await fetch(`${BASE_URL}/assets?limit=200`, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      });
      const list = await response.json();
      setCoinList(list.data);
    } catch (error) {
      console.log("There was an error retrieving your data: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  const filteredData = coinList?.filter((input) =>
    `${input.name}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-slate-200 w-full flex flex-col items-center px-5 py-5">
      <h1 className="text-5xl font-bold text-slate-800 text-center mt-20 mb-10">
        Search Coins
      </h1>
      <div className="flex items-center border-gray-300 border-2 rounded-md shadow-2xl p-2 gap-2 bg-white w-[50%]">
        <FaSearch className="text-slate-600" />
        <input
          className="border-none bg-white outline-none w-full"
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <MdCancel
          onClick={clearSearch}
          className="text-slate-600 cursor-pointer"
          size={25}
        />
      </div>
      {searchQuery.length > 0 && (
        <div className="max-h-[300px] overflow-auto flex flex-col p-2 bg-white shadow-2xl w-[50%]">
          {isLoading ? (
            <div className="p-4 text-center text-slate-500">Searching...</div>
          ) : filteredData.length !== 0 ? (
            filteredData?.map((coin) => (
              <div
                key={coin.id}
                className="flex items-center justify-between p-3 hover:bg-slate-50 cursor-pointer border-b last:border-b-0"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">{coin.symbol}</span>
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">{coin.name}</p>
                    <p className="text-sm text-slate-500">{coin.symbol}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">
                    ${Number(coin.priceUsd).toFixed(2)}
                  </p>
                  <p className="text-xs text-slate-500">#{coin.rank}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="p-2 flex justify-center items-center">
              No data available.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Coins;
