import Navbar from "./components/Navbar";
import './App.css';
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/components/Dashboard";
import FinancialGPT from "./pages/Dashboard/components/FinancialGPT";
import Portfolio from "./pages/Dashboard/components/Portfolio";
import StocksCoins from "./pages/Dashboard/components/StocksCoins";
import Account from "./pages/Dashboard/components/Account";
import DashboardLayout from "./pages/Dashboard/DashboardLayout";
import Product from "./pages/Home/Product";

const PublicLayout = ({ children }: { children: any }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

export default function App() {
  return (
    <div className="home-main mx-auto">
      <Routes>
        <Route path="/" element={
          <PublicLayout>
            <Home />
          </PublicLayout>
        } />

        <Route path="/product" element={
          <PublicLayout>
            <Product />
          </PublicLayout>
        } />


        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="financial-gpt" element={<FinancialGPT />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="stocks" element={<StocksCoins />} />
          <Route path="account" element={<Account />} />
        </Route>
      </Routes>
    </div>
  );
}