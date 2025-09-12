import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import { Routes, Route } from "react-router";

export default function App() {
  return (
    <>
      <div className="mid-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}
