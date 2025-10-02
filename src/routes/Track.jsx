import React from "react";
import { useState, useEffect } from "react";
import { cleanNumbers } from "./utils/CleanNum";
import { MdCancel } from "react-icons/md";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

const Track = () => {
  const [trackedCoins, setTrackedCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTrackedCoins = async () => {
      const watchlist = JSON.parse(localStorage.getItem("watchlist") || "[]");

      if (watchlist.length === 0) {
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch(`${BASE_URL}/assets?limit=200`, {
          headers: { Authorization: `Bearer ${API_KEY}` },
        });
        const data = await response.json();

        const filtered = data.data.filter((coin) =>
          watchlist.includes(coin.id)
        );
        setTrackedCoins(filtered);
      } catch (error) {
        console.error("Error fetching tracked coins:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrackedCoins();
  }, []);

  const handleRemoveFromTrack = (coinId) => {
    const watchlist = JSON.parse(localStorage.getItem("watchlist") || "[]");
    const updated = watchlist.filter((id) => id !== coinId);
    localStorage.setItem("watchlist", JSON.stringify(updated));
    setTrackedCoins((prev) => prev.filter((coin) => coin.id !== coinId));
  };

  if (trackedCoins.length === 0) {
    return (
      <div className="min-h-screen bg-slate-200 flex items-center justify-center">
        <p className="text-slate-600 text-xl">No coins are currently tracked</p>
      </div>
    );
  }

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className="min-h-screen bg-slate-200 p-5 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-slate-800 text-center my-10">
        Tracked Coins
      </h1>
      <div className="w-full max-w-5xl overflow-x-auto flex items-center justify-center">
        <table className="bg-white text-sm text-left rtl:text-right text-slate-600">
          <thead>
            <tr className="bg-slate-100 font-bold">
              <th className="text-left p-4">Symbol</th>
              <th className="text-left p-4">Name</th>
              <th className="text-left p-4">Price</th>
              <th className="text-left p-4">24h Change</th>
              <th className="text-left p-4">Market Cap</th>
              <th className="text-left p-4">Remove</th>
            </tr>
          </thead>
          <tbody>
            {trackedCoins.map((coin) => (
              <tr
                key={crypto.randomUUID()}
                className="border-b hover:bg-slate-50"
              >
                <td className="p-4 font-semibold">{coin.symbol}</td>
                <td className="p-4">{coin.name}</td>
                <td className="p-4 text-left">
                  ${cleanNumbers(coin.priceUsd)}
                </td>
                <td
                  className={`p-4 text-left ${
                    coin.changePercent24Hr > 0
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {Number(coin.changePercent24Hr).toFixed(2)}%
                </td>
                <td className="p-4 text-left">
                  {cleanNumbers(coin.marketCapUsd)}
                </td>
                <td>
                  <button onClick={() => handleRemoveFromTrack(coin.id)}>
                    <MdCancel
                      className="text-red-500 hover:text-red-700 text-right"
                      size={20}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Track;
