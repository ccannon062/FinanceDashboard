import React from "react";
import { FaGlobeAmericas } from "react-icons/fa";
import Card from "../components/Card";
import { useEffect, useState } from "react";

const Home = () => {
  const [marketCapPrice, setMarketCapPrice] = useState(0);

  /*
  useEffect(() => {
    const fetchCap = async () => {
      try {
        let totalMarketCap = 0;
        const response = await fetch(`${BASE_URL}/assets?limit=200`, {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
        });
        const coins = await response.json();
        coins.data.forEach((data) => {
          totalMarketCap += Number(data.marketCapUsd);
        });
        setMarketCapPrice(totalMarketCap);
      } catch (error) {
        console.log("There was an error fetching the data: ", error);
      }
    };
    fetchCap();
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
            value={marketCapPrice == 0 ? "No data available" : marketCapPrice}
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
