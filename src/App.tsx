import Navbar from "./components/Navbar";
import './App.css'
import Home from "./pages/Home/Home";

export default function App() {
  return (
    <div className="home-main mx-auto">
      <Navbar />
      <Home />
    </div>
  )
}
