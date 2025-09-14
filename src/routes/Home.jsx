import React from "react";
import { FaGlobeAmericas } from "react-icons/fa";
import Card from "../components/Card";
import { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

const Home = () => {
  const [marketCapPrice, setMarketCapPrice] = useState(0);
  const [tradingVolume, setTradingVolume] = useState(0);
  const [bitCoinDom, setBitcoinDom] = useState(0);
  const [ethDom, setEthDom] = useState(0);
  const [btcPercentChange, setBtcPercentChange] = useState(0);
  const [ethPercentChange, setEthPercentChange] = useState(0);
  const [marketCapPercentChange, setMarketCapPercentChange] = useState(0);

  const cleanNumbers = (number) => {
    const num = Number(number);
    if (num >= 1e12) {
      return (num / 1e12).toFixed(2) + "T";
    } else if (num >= 1e9) {
      return (num / 1e9).toFixed(2) + "B";
    } else if (num >= 1e6) {
      return (num / 1e6).toFixed(2) + "M";
    } else {
      return num.toLocaleString();
    }
  };

  /*
  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        let totalMarketCap = 0;
        let dayTradingVolume = 0;
        let btcMarketDominance = 0;
        let ethMarketDominance = 0;
        const response = await fetch(`${BASE_URL}/assets?limit=200`, {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
        });
        const coins = await response.json();
        coins.data.forEach((data) => {
          totalMarketCap += Number(data.marketCapUsd);
          dayTradingVolume += Number(data.volumeUsd24hr);
        });
        setMarketCapPrice(totalMarketCap);
        setTradingVolume(dayTradingVolume);
        const btc = coins.data.find(data => data.id === "bitcoin");
        const eth = coins.data.find(data => data.id === "ethereum");
        btcMarketDominance = (Number(btc.marketCapUsd) / totalMarketCap) * 100;
        ethMarketDominance = (Number(eth.marketCapUsd) / totalMarketCap) * 100;
        setBitcoinDom(btcMarketDominance);
        setEthDom(ethMarketDominance);
      } catch (error) {
        console.log("There was an error fetching the data: ", error);
      }
    };
    fetchCoinData();
  }, []);
  */

  return (
    <div className="min-h-screen bg-slate-200 w-full flex items-center justify-center px-3">
      <div className="flex flex-col max-w-3xl gap-5 text-slate-600">
        <h1 className="text-5xl font-bold text-slate-800 text-center mt-20 mb-10">
          Global Market Snapshot
        </h1>
        <div className="flex flex-wrap gap-5 justify-center">
          <Card
            cardName="DummyCard"
            value={
              marketCapPrice == 0
                ? "No data available"
                : cleanNumbers(marketCapPrice)
            }
            trend="+3.4%"
            trendDirection={null}
            icon={<FaGlobeAmericas className="text-slate-800 text-2xl" />}
          />
          <Card
            cardName="DummyCard"
            value="$2.15T"
            trend="+3.4%"
            trendDirection={null}
            icon={<FaGlobeAmericas className="text-slate-800 text-2xl" />}
          />
          <div className="flex gap-5 md:flex-col md:gap-2 items-center">
            <Card cardName="DummyCard" value="$2.15T" />
            <Card cardName="DummyCard" value="$2.15T" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
