import Navbar from "./components/Navbar";
import './App.css'
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="home-main mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes here */}
      </Routes>
      <Footer />
    </div>
  )
}