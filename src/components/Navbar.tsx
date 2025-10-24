import { useState } from "react";
import { ChevronDown, ChevronRight, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Logo from "../assets/Home/logo.png";
import flag from "../assets/Home/Flags.svg";
import singleBox from '../assets/Home/singlebox.png';
import MenuIcon from '../assets/Home/menu-02.svg';

export default function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <>
            <header className="fixed top-0 left-1/2 -translate-x-1/2 w-[90%] sm:w-3/4 max-w-6xl glass-dark2 text-white sm:px-6 px-4 sm:py-2 py-4 flex items-center justify-between border rounded-full z-[100] mt-6">
                <div className="flex items-center gap-12">
                    <Link to="/">
                        <img src={Logo} alt="Tech Tren Logo" className="w-32" />
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center gap-8 text-sm">
                        <Dropdown title="Products">
                            <LinkItem to="/financial-gpt">Financial GPT</LinkItem>
                            <LinkItem to="/price-prediction">Price Prediction</LinkItem>
                            <LinkItem to="/news-ai-insights">News & AI Insights</LinkItem>
                            <LinkItem to="/watchlists">Watchlists</LinkItem>
                        </Dropdown>

                        <Link to="/pricing" className="hover:text-gray-300">
                            Pricing
                        </Link>

                        <Dropdown title="Resources">
                            <LinkItem to="/documentation">Documentation</LinkItem>
                            <LinkItem to="/blog">Blog</LinkItem>
                            <LinkItem to="/faqs">FAQs</LinkItem>
                            <LinkItem to="/support">Support</LinkItem>
                        </Dropdown>

                        <Link to="/about" className="hover:text-gray-300">
                            About
                        </Link>
                    </nav>
                </div>

                {/* Right Side */}
                <div className="hidden md:flex items-center gap-2">
                    <div className="flex items-center gap-2 border-l border-gray-700 pl-10 pr-4">
                        <img src={flag} alt="Language flag" />
                        <span>EN</span>
                    </div>

                    <Button
                        variant="ghost"
                        className="text-white hover:text-gray-300 rounded-full"
                        style={{ backgroundColor: "rgba(55, 65, 81, 0.25)" }}
                        asChild
                    >
                        <Link to="/signin">Sign in</Link>
                    </Button>

                    <Button
                        className="bg-white text-black rounded-full px-4 hover:bg-gray-200 font-semibold"
                        asChild
                    >
                        <Link to="/demo">Get free demo</Link>
                    </Button>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-white focus:outline-none z-[150] relative"
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                    {isSidebarOpen ? <X size={26} /> : <img src={MenuIcon} alt="Menu" />}
                </button>
            </header>

            {/* Sidebar Overlay */}
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    } z-[90]`}
                onClick={() => setIsSidebarOpen(false)}
            />

            {/* Sidebar Content */}
            <aside
                className={`sidebar fixed top-0 left-0 h-full w-full bg-black text-white p-6 transition-transform duration-500 z-[95] flex flex-col justify-between pt-28 px-4 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <Accordion type="single" collapsible className="">
                    <AccordionItem value="products" className="border-transparent">
                        <AccordionTrigger className="py-4 text-white text-lg">
                            Products
                        </AccordionTrigger>
                        <AccordionContent className="flex items-start gap-6 flex-col ml-2">
                            <Link onClick={() => setIsSidebarOpen(false)} to="/financial-gpt" >Financial GPT</Link>
                            <Link onClick={() => setIsSidebarOpen(false)} to="/price-prediction">Price Prediction</Link>
                            <Link onClick={() => setIsSidebarOpen(false)} to="/news-ai-insights">News & AI Insights</Link>
                            <Link onClick={() => setIsSidebarOpen(false)} to="/watchlists">Watchlists</Link>
                        </AccordionContent>
                    </AccordionItem>

                    <SidebarLink onClose={() => setIsSidebarOpen(false)} to="/pricing">
                        Pricing
                    </SidebarLink>

                    <AccordionItem value="resources" className="border-transparent">
                        <AccordionTrigger className="py-4 text-white text-lg">
                            Resources
                        </AccordionTrigger>
                        <AccordionContent className="flex items-start gap-6 flex-col ml-2">
                            <Link onClick={() => setIsSidebarOpen(false)} to="/blog">Blog</Link>
                            <Link onClick={() => setIsSidebarOpen(false)} to="/support">Support</Link>
                            <Link onClick={() => setIsSidebarOpen(false)} to="/faqs">FAQs</Link>
                            <Link onClick={() => setIsSidebarOpen(false)} to="/documentation">Documentation</Link>
                        </AccordionContent>
                    </AccordionItem>

                    <SidebarLink onClose={() => setIsSidebarOpen(false)} to="/about">
                        About
                    </SidebarLink>
                </Accordion >

                <div className="mt-auto mb-4 flex flex-col items-center gap-6 ">
                    <Button className="special-btn gradient-box-shadow w-[70%] py-7 ">
                        <Link to="/demo" onClick={() => setIsSidebarOpen(false)} className="font-bold">
                            Get free demo
                        </Link>
                        <ChevronRight size={14} className="ml-1" />
                    </Button>
                    <Button variant="default" className="w-[70%] py-7 text-base font-bold bg-transparent">
                        <Link to="/signin" onClick={() => setIsSidebarOpen(false)}>
                            Sign in
                        </Link>
                    </Button>
                </div>
                <div className="">
                    <img src={singleBox} alt="box" className="absolute bottom-24 object-contain right-0 w-full -z-10" />
                    <div className="purple-shadow bottom-10 left-20 w-1/2 h-[150px] -z-10"></div>
                    <div className="purple-shadow -top-10 left-20 w-1/2 h-[100px] -z-10"></div>
                </div>
            </aside >
        </>
    );
}



function Dropdown({ title, children }: { title: any, children: any }) {
    return (
        <div className="relative group">
            <div className="flex items-center gap-2 hover:text-gray-300 cursor-pointer">
                {title} <ChevronDown className="w-4 h-4" />
            </div>
            <div className="absolute glass border border-gray-700 rounded-2xl p-2 min-w-48 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {children}
            </div>
        </div>
    );
}


function LinkItem({ to, children }: { to: any, children: any }) {
    return (
        <Link
            to={to}
            className="block px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
        >
            {children}
        </Link>
    );
}


function SidebarLink({ to, onClose, children }: { to: any, onClose: any, children: any }) {
    return (
        <Link
            to={to}
            className="block py-3 hover:text-gray-300 transition text-lg"
            onClick={onClose}
        >
            {children}
        </Link>
    );
}
