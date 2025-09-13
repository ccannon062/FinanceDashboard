import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Coins from "./routes/Coins";
import Track from "./routes/Track";
import Settings from "./routes/Settings";
import { Routes, Route } from "react-router";

export default function App() {
  return (
    <>
      <div className="h-[100%] w-[100%]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coins" element={<Coins />} />
          <Route path="/track" elements={<Track />} />
          <Route path="/settings" elements={<Settings />} />
        </Routes>
      </div>
    </>
  );
}
