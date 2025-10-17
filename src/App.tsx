import Navbar from "./components/Navbar";
import './App.css'
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="home-main mx-auto">
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}
