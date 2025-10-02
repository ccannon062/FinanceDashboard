import React from "react";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

const Coins = () => {
  const [coinList, setCoinList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [coinHistory, setCoinHistory] = useState([]);
  const [histLoading, setHistLoading] = useState(false);

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

  const filteredData = coinList?.filter((input) =>
    `${input.name}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const clearSearch = () => {
    setSearchQuery("");
  };

  const handleCoinClick = async (coin) => {
    setSelectedCoin(coin);
    setHistLoading(true);
    clearSearch();
    try {
      const response = await fetch(
        `${BASE_URL}/assets/${coin.id}/history?interval=d1`,
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );
      const history = await response.json();
      setCoinHistory(history.data);
    } catch (error) {
      console.log("There was an error retrieving your data: ", error);
    } finally {
      setHistLoading(false);
    }
  };

  const handleTrackCoin = () => {
    const watchlist = JSON.parse(localStorage.getItem("watchlist") || "[]");

    if (!watchlist.includes(selectedCoin.id)) {
      watchlist.push(selectedCoin.id);
      localStorage.setItem("watchlist", JSON.stringify(watchlist));
    }
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <div className="min-h-screen bg-slate-200 w-full flex flex-col items-center px-5 py-5">
      <h1 className="text-5xl font-bold text-slate-800 text-center mt-20 mb-10">
        Search Coins
      </h1>
      <div
        className={
          searchQuery.length == 0
            ? "flex items-center border-gray-300 border-2 rounded-md shadow-2xl p-2 gap-2 bg-white w-[50%] mb-10"
            : "flex items-center border-gray-300 border-2 rounded-md shadow-2xl p-2 gap-2 bg-white w-[50%]"
        }
      >
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
        <div className="max-h-[300px] overflow-auto flex flex-col p-2 bg-white shadow-2xl w-[50%] mb-10">
          {isLoading ? (
            <div className="p-4 text-center text-slate-500">Searching...</div>
          ) : filteredData.length !== 0 ? (
            filteredData?.map((coin) => (
              <div
                key={coin.id}
                className="flex items-center justify-between p-3 hover:bg-slate-50 cursor-pointer border-b last:border-b-0"
                onClick={() => handleCoinClick(coin)}
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
      {selectedCoin && (
        <div className="bg-slate-800 p-4 sm:p-6 md:p-10 rounded-2xl mb-5 w-full sm:w-[80%] md:w-[70%] lg:w-[50%]">
          <h1 className="mt-10 mb-2 text-2xl font-semibold text-sky-600 ">
            Price History
          </h1>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-white">
              {selectedCoin.name}
            </h2>
            <button
              onClick={handleTrackCoin}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Track
            </button>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              width={600}
              height={400}
              data={coinHistory}
              margin={{ top: 20, right: 25, left: 25, bottom: 5 }}
            >
              <XAxis
                dataKey="date"
                tickFormatter={(date) =>
                  new Date(date).toLocaleDateString("default", {
                    month: "short",
                  })
                }
                stroke="#94a3b8"
                tick={{ fill: "#94a3b8" }}
              />
              <Line
                dataKey="priceUsd"
                dot={false}
                stroke="#3b82f6"
                strokeWidth={2}
              />
              <YAxis
                label={{
                  value: "USD",
                  angle: -90,
                  offset: -15,
                  position: "insideLeft",
                  style: { fill: "#94a3b8" },
                }}
                stroke="#94a3b8"
                tick={{ fill: "#94a3b8" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "1px solid #475569",
                  borderRadius: "8px",
                  color: "#f1f5f9",
                }}
                labelStyle={{ color: "#94a3b8" }}
                itemStyle={{ color: "#f1f5f9" }}
                labelFormatter={(date) =>
                  new Date(date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })
                }
                formatter={(value) => [
                  `$${Number(value).toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}`,
                  "Price",
                ]}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default Coins;
