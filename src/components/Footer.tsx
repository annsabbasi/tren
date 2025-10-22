import { Input } from "@/components/ui/input";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import TechTren from '../assets/Home/logo.png';
import Facebook from '../assets/Home/facebook.svg';
import X from '../assets/Home/x.svg';
import Instagram from '../assets/Home/instagram.svg';
import Pintrest from '../assets/Home/pintrest.svg';
import Discord from '../assets/Home/discord.svg';
import AppStore from '../assets/Home/appStore.svg';
import PlayApp from '../assets/Home/playApp.svg';
import { ChevronRight } from "lucide-react";

const Footer = () => {
    return (
        <footer className="Footer w-full max-w-6xl mx-auto pt-16 px-4">
            <div className="flex items-center justify-between sm:pb-8 sm:flex-row flex-col sm:gap-0 gap-8 pb-4">
                <div className="flex items-center gap-2">
                    <img src={TechTren} alt="TechTren" className="w-48" />
                </div>
                <div className="flex items-center sm:justify-center sm:w-fit w-full justify-evenly gap-2">
                    <span className="group border border-gray-600 p-2 rounded-full cursor-pointer hover:bg-white">
                        <img src={Facebook} alt="Facebook" className="w-4 h-4 group-hover:brightness-0 transition-colors duration-200" />
                    </span>
                    <span className="group border border-gray-600 p-2 rounded-full cursor-pointer hover:bg-white">
                        <img src={X} alt="Facebook" className="w-4 h-4 group-hover:brightness-0 transition-colors duration-200" />
                    </span>
                    <span className="group border border-gray-600 p-2 rounded-full cursor-pointer hover:bg-white">
                        <img src={Instagram} alt="Facebook" className="w-4 h-4 brightness-[100] group-hover:brightness-0 transition-colors duration-200" />
                    </span>
                    <span className="group border border-gray-600 p-2 rounded-full cursor-pointer hover:bg-white">
                        <img src={Discord} alt="Facebook" className="w-4 h-4 group-hover:brightness-0 transition-colors duration-200" />
                    </span>
                    <span className="group border border-gray-600 p-2 rounded-full cursor-pointer hover:bg-white">
                        <img src={Pintrest} alt="Facebook" className="w-4 h-4 group-hover:brightness-0 transition-colors duration-200" />
                    </span>
                </div>
            </div>
            <div className="border-t pt-12 text-gray-400">
                {/* --- Top Grid (Desktop) --- */}
                <div className="hidden md:grid md:grid-cols-4 gap-10 justify-items-center">
                    {/* --- Left Section --- */}

                    <div className="space-y-5 max-w-xs">
                        <p className="text-sm leading-relaxed pr-10 text-gray-300">
                            AI-powered predictions, real-time data, and investor communities —
                            all in one platform.
                        </p>

                        {/* App store buttons */}
                        <div className="flex gap-3 mb-10">
                            <img src={PlayApp} alt="playApp" className="w-32 cursor-pointer" />
                            <img src={AppStore} alt="appStore" className="w-32 cursor-pointer" />
                        </div>

                        {/* Newsletter */}
                        <div>
                            <h4 className="text-white font-medium mb-2">
                                Sign up Newsletter
                            </h4>
                            <p className="text-sm text-gray-400 mb-3">
                                Learn the numbers that spell success for your business!
                            </p>
                            <div className="flex items-center max-w-xs border px-2 py-1 rounded-[20px] mt-4">
                                <Input
                                    type="email"
                                    placeholder="Enter email address"
                                    className="!bg-transparent border-none focus-visible:ring-0 focus:outline-none text-gray-200 placeholder-gray-500"
                                />
                                <span className="special-btn !py-0 !px-3 self-stretch flex items-center">
                                    <ChevronRight className="h-4 w-4" />
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* --- Quick Links --- */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick links</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>Home</li>
                            <li>About us</li>
                            <li>Sign in</li>
                            <li>Blog</li>
                            <li>Pricing</li>
                            <li>Get demo</li>
                            <li>Contact us</li>
                        </ul>
                    </div>

                    {/* --- Products --- */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Products</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>Financial GPT</li>
                            <li>Price prediction</li>
                            <li>News & AI Insights</li>
                            <li>Watchlists</li>
                            <li>SwingTrade Signal</li>
                            <li>DayTrade Signal</li>
                            <li>Congress Monitoring</li>
                            <li>AI Stock Picker</li>
                            <li>AI Stock Screener</li>
                            <li>Crypto Spotlight</li>
                            <li>Gainers and Losers</li>
                        </ul>
                    </div>

                    {/* --- Resources --- */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>Journals</li>
                            <li>Billing</li>
                            <li>Priority support</li>
                            <li>Threads</li>
                            <li>Communities</li>
                            <li>FAQs</li>
                            <li>Case studies</li>
                            <li>Docs</li>
                        </ul>
                    </div>
                </div>

                {/* --- Mobile Accordion Sections --- */}
                <div className="md:hidden flex flex-col gap-8">
                    {/* App store icons */}
                    <div className="flex flex-col items-center mt-4 gap-4">
                        <p className="text-base text-center text-gray-300 max-w-xs px-6">
                            AI-powered predictions, real-time data, and investor communities —
                            all in one platform.
                        </p>
                        <div className="flex gap-3 mt-3 flex-col w-full items-center">
                            <img src={AppStore} alt="appStore" className="w-[60%] h-auto cursor-pointer" />
                            <img src={PlayApp} alt="playApp" className="w-[60%] h-auto cursor-pointer" />
                        </div>
                    </div>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="quick-links" className="border-b border-gray-700">
                            <AccordionTrigger className="text-white font-semibold text-base hover:no-underline py-3">
                                Quick links
                            </AccordionTrigger>
                            <AccordionContent className="text-sm text-gray-400 pt-2">
                                <ul className="space-y-2">
                                    {["Home", "About us", "Sign in", "Blog", "Pricing", "Get demo", "Contact us"].map((link, idx) => (
                                        <li key={idx}>{link}</li>
                                    ))}
                                </ul>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="products" className="border-b border-gray-700">
                            <AccordionTrigger className="text-white font-semibold text-base hover:no-underline py-3">
                                Products
                            </AccordionTrigger>
                            <AccordionContent className="text-sm text-gray-400 pt-2">
                                <ul className="space-y-2">
                                    {[
                                        "Financial GPT", "Price prediction", "News & AI Insights", "Watchlists",
                                        "SwingTrade Signal", "DayTrade Signal", "Congress Monitoring",
                                        "AI Stock Picker", "AI Stock Screener", "Crypto Spotlight", "Gainers and Losers",
                                    ].map((link, idx) => (
                                        <li key={idx}>{link}</li>
                                    ))}
                                </ul>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="resources" className="border-b border-gray-700">
                            <AccordionTrigger className="text-white font-semibold text-base hover:no-underline py-3">
                                Resources
                            </AccordionTrigger>
                            <AccordionContent className="text-sm text-gray-400 pt-2">
                                <ul className="space-y-2">
                                    {["Journals", "Billing", "Priority support", "Threads", "Communities", "FAQs", "Case studies", "Docs"].map((link, idx) => (
                                        <li key={idx}>{link}</li>
                                    ))}
                                </ul>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="newsletter" className="border-b border-gray-700">
                            <AccordionTrigger className="text-white font-semibold text-base hover:no-underline py-3">
                                Sign up Newsletter
                            </AccordionTrigger>
                            <AccordionContent className="text-sm text-gray-400 pt-2">
                                <p className="text-sm text-gray-400 mb-3">
                                    Learn the numbers that spell success for your business!
                                </p>
                                <div className="flex items-center border px-2 py-1 rounded-[20px]">
                                    <Input
                                        type="email"
                                        placeholder="Enter email address"
                                        className="!bg-transparent border-none focus-visible:ring-0 focus:outline-none text-gray-200 placeholder-gray-500"
                                    />
                                    <span className="special-btn !py-0 !px-3 flex items-center">
                                        <ChevronRight className="h-4 w-4" />
                                    </span>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    {/* App store icons */}
                    {/* <div className="flex flex-col items-center mt-4 gap-4">
                        <p className="text-sm text-center text-gray-300 max-w-xs">
                            AI-powered predictions, real-time data, and investor communities —
                            all in one platform.
                        </p>
                        <div className="flex gap-3 mt-3">
                            <img src={AppStore} alt="appStore" className="w-32 cursor-pointer" />
                            <img src={PlayApp} alt="playApp" className="w-32 cursor-pointer" />
                        </div>
                    </div> */}
                </div>

                <hr className="mt-1 bg-gray-800" />

                {/* --- Bottom Section --- */}
                <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 py-4 text-center md:text-left">
                    <ul className="flex items-center gap-2 mb-3 md:mt-0">
                        <li>Terms of Services</li>
                        <span>|</span>
                        <li>Privacy statement</li>
                    </ul>
                    <p>© 2025 Tech Tren. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;