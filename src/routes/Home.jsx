import React from "react";
import Card from "../components/Card";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-200 w-full flex items-center justify-center">
      <div className="flex flex-col items-start max-w-3xl gap-5 text-slate-600">
        <h1 className="text-5xl font-bold text-slate-800 text-center mt-20 mb-10">
          Global Market Snapshot
        </h1>
        <Card cardName="DummyCard" value="$2.15T" />
      </div>
    </div>
  );
};

export default Home;
