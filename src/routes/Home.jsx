import React from "react";
import { FaGlobeAmericas, FaBitcoin, FaEthereum } from "react-icons/fa";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";

/* CREDIT FOR USED COMPONENTS

  Credit to David Hu's React Spinner for the API loading animations
  https://github.com/davidhu2000/react-spinners?tab=readme-ov-file 
*/

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

const Home = () => {
  const [marketCapPrice, setMarketCapPrice] = useState(0);
  const [tradingVolume, setTradingVolume] = useState(0);
  const [bitCoinDom, setBitcoinDom] = useState(0);
  const [ethDom, setEthDom] = useState(0);
  const [top10Vol, set10Vol] = useState(0);
  const [btcPercentChange, setBtcPercentChange] = useState(0);
  const [ethPercentChange, setEthPercentChange] = useState(0);

  const cleanNumbers = (number) => {
    const num = Number(number);
    if (num >= 1e12) {
      return (num / 1e12).toFixed(2) + " T";
    } else if (num >= 1e9) {
      return (num / 1e9).toFixed(2) + " B";
    } else if (num >= 1e6) {
      return (num / 1e6).toFixed(2) + " M";
    } else {
      return num.toFixed(2).toString();
    }
  };

  const calculatePercentChange = (data) => {
    if (!data.data || data.data.length === 0) {
      return 0;
    }
    return (
      ((Number(data.data[data.data.length - 1].priceUsd) -
        Number(data.data[0].priceUsd)) /
        Number(data.data[0].priceUsd)) *
      100
    );
  };
  /*
  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        let totalMarketCap = 0;
        let dayTradingVolume = 0;
        let btcMarketDominance = 0;
        let ethMarketDominance = 0;
        let top10Volume = 0;

        const response = await fetch(`${BASE_URL}/assets?limit=200`, {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
        });
        const coins = await response.json();
        coins.data.forEach((data) => {
          totalMarketCap += Number(data.marketCapUsd);
          dayTradingVolume += Number(data.volumeUsd24hr);
          top10Volume += Number(data.volumeUsd24Hr);
        });
        setMarketCapPrice(totalMarketCap);
        setTradingVolume(dayTradingVolume);
        set10Vol(top10Volume);
        const btc = coins.data.find((data) => data.id === "bitcoin");
        const eth = coins.data.find((data) => data.id === "ethereum");
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

  useEffect(() => {
    const fetchCoinHist = async () => {
      try {
        let btcPercentChange = 0;
        let ethPercentChange = 0;
        const response = await Promise.all([
          fetch(
            `${BASE_URL}/assets/bitcoin/history?interval=h1&start=${
              Date.now() - 86400000
            }&end=${Date.now()}`,
            {
              headers: {
                Authorization: `Bearer ${API_KEY}`,
              },
            }
          ),
          fetch(
            `${BASE_URL}/assets/ethereum/history?interval=h1&start=${
              Date.now() - 86400000
            }&end=${Date.now()}`,
            {
              headers: {
                Authorization: `Bearer ${API_KEY}`,
              },
            }
          ),
        ]);
        const [btcData, ethData] = await Promise.all([
          response[0].json(),
          response[1].json(),
        ]);
        btcPercentChange = calculatePercentChange(btcData);
        ethPercentChange = calculatePercentChange(ethData);
        setBtcPercentChange(btcPercentChange);
        setEthPercentChange(ethPercentChange);
      } catch (error) {
        console.log("There was an error fetching the data: ", error);
      }
    };
    fetchCoinHist();
  }, []);
*/
  const loadSettings = <PulseLoader size={10} />;

  return (
    <>
      <div className="min-h-screen bg-slate-200 w-full flex items-center justify-center px-5">
        <div className="text-slate-600">
          <h1 className="text-5xl font-bold text-slate-800 text-center mt-20 mb-20">
            Global Market Snapshot
          </h1>
          <div className="grid md:grid-cols-2 gap-10">
            <Card
              cardName="Total Market Cap (USD)"
              value={
                marketCapPrice == 0
                  ? loadSettings
                  : cleanNumbers(marketCapPrice)
              }
              icon={<FaGlobeAmericas className="text-slate-800 text-2xl" />}
            />
            <Card
              cardName="Coin Value Traded (24hr)"
              value={tradingVolume == 0 ? loadSettings : cleanNumbers(top10Vol)}
              icon={<FaGlobeAmericas className="text-slate-800 text-2xl" />}
            />
            <Card
              cardName="BTC Dominance"
              value={
                bitCoinDom == 0 ? loadSettings : cleanNumbers(bitCoinDom) + " %"
              }
              icon={<FaBitcoin className="text-[#f7931a] text-2xl" />}
              trendDirection={btcPercentChange}
            />
            <Card
              cardName="ETH Dominance"
              value={ethDom == 0 ? loadSettings : cleanNumbers(ethDom) + " %"}
              icon={<FaEthereum className="text-[#497493] text-2xl" />}
              trendDirection={ethPercentChange}
            />
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-slate-300 w-full flex items-center justify-center px-5"></div>
    </>
  );
};

export default Home;
