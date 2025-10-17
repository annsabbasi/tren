import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
    return (
        <footer className="w-full bg-black text-gray-300 py-12 px-6 md:px-16 border-t border-gray-800">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* --- Left Section --- */}
                <div className="space-y-5">
                    {/* Logo placeholder */}
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gray-700 rounded-full" />
                        <h2 className="text-xl font-semibold text-white">Techtren</h2>
                    </div>

                    <p className="text-sm leading-relaxed text-gray-400">
                        AI-powered predictions, real-time data, and investor communities —
                        all in one platform.
                    </p>

                    {/* App store buttons */}
                    <div className="flex gap-3">
                        <div className="w-32 h-10 bg-gray-800 rounded-md" /> {/* App Store */}
                        <div className="w-32 h-10 bg-gray-800 rounded-md" /> {/* Google Play */}
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-semibold mb-2">
                            Sign up Newsletter
                        </h4>
                        <p className="text-sm text-gray-400 mb-3">
                            Learn the numbers that spell success for your business!
                        </p>
                        <div className="flex items-center bg-gray-800 rounded-full overflow-hidden max-w-xs">
                            <Input
                                type="email"
                                placeholder="Enter email address"
                                className="bg-transparent border-none focus-visible:ring-0 focus:outline-none text-gray-200 placeholder-gray-500"
                            />
                            <Button
                                size="icon"
                                className="rounded-full bg-gradient-to-r from-purple-600 to-green-500 hover:opacity-80"
                            >
                                →
                            </Button>
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

            {/* --- Bottom Section --- */}
            <div className="mt-12 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 border-t border-gray-800 pt-6">
                <p>© 2025 Tech Tren. All Rights Reserved.</p>
                <div className="flex gap-4 mt-3 md:mt-0">
                    <p>Terms of services</p>
                    <span>|</span>
                    <p>Privacy statement</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
