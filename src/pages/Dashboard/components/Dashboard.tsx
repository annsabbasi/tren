import React from "react";
import {
    Bell,
    ChevronRight,
    MessageSquare,
    ArrowUp,
    ArrowDown,
} from "lucide-react";

const Dashboard: React.FC = () => {
    return (
        <div className="p-6 grid grid-cols-12 gap-6 w-full overflow-y-hidden">
            {/* Left Section */}
            <div className="col-span-8 space-y-6">
                {/* Top Hero Section */}
                <div className="rounded-2xl p-8 bg-gradient-to-b from-slate-800/60 to-slate-900/40 border border-slate-700/50 backdrop-blur">
                    <div className="flex flex-col items-start justify-between h-full">
                        <div>
                            <h2 className="text-3xl font-semibold mb-2">Ask Financial GPT</h2>
                            <p className="text-gray-400 mb-6">
                                Financial GPT — Your AI-powered investor and communicator all in one platform.
                            </p>
                        </div>

                        {/* Illustration placeholder */}
                        <div className="h-32 w-full bg-slate-800/40 rounded-xl mb-6 flex items-center justify-center">
                            <span className="text-gray-500">[AI Wave Image]</span>
                        </div>

                        {/* Category buttons */}
                        <div className="flex flex-wrap gap-3">
                            {["Market analysis & trends", "Stock and crypto insights", "Trading strategies"].map(
                                (text) => (
                                    <button
                                        key={text}
                                        className="border border-green-500/40 text-green-400 px-3 py-1.5 rounded-full text-sm hover:bg-green-500/10 transition-all"
                                    >
                                        {text}
                                    </button>
                                )
                            )}
                        </div>

                        {/* Resume chat */}
                        <div className="flex justify-between items-center mt-6 w-full">
                            <span className="text-gray-400 text-sm">
                                Still wanna know about potential impact on the Fed’s next rate?
                            </span>
                            <button className="flex items-center gap-2 bg-green-500/20 hover:bg-green-500/30 px-4 py-1.5 rounded-full text-green-400 text-sm transition-all">
                                <MessageSquare size={16} /> Resume last chat
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Row (Watchlist + Price Prediction) */}
                <div className="grid grid-cols-12 gap-6">
                    {/* Recent in Watchlist */}
                    <div className="col-span-8 bg-slate-900/40 rounded-2xl border border-slate-700/50 p-4">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-medium">Recent in watchlist</h3>
                            <div className="flex gap-2">
                                <button className="p-1.5 bg-slate-800/60 rounded-lg">&lt;</button>
                                <button className="p-1.5 bg-slate-800/60 rounded-lg">&gt;</button>
                            </div>
                        </div>

                        <div className="flex gap-3 overflow-x-auto">
                            {[
                                { symbol: "TSLA", price: "$423.11", change: "-2.47", up: false },
                                { symbol: "AAPL", price: "$246.46", change: "-0.04", up: false },
                                { symbol: "GOOGL", price: "$245.22", change: "+0.62", up: true },
                                { symbol: "NVDA", price: "$181.40", change: "-3.71", up: false },
                                { symbol: "BTC", price: "$49.36", change: "+3.74", up: true },
                            ].map((item) => (
                                <div
                                    key={item.symbol}
                                    className="min-w-[120px] bg-slate-800/60 rounded-xl p-3 text-center"
                                >
                                    <div className="text-xl font-semibold">{item.symbol}</div>
                                    <div className="text-gray-400 text-sm">{item.price}</div>
                                    <div
                                        className={`text-sm font-medium ${item.up ? "text-green-400" : "text-red-400"
                                            }`}
                                    >
                                        {item.up ? (
                                            <ArrowUp className="inline mr-1" size={12} />
                                        ) : (
                                            <ArrowDown className="inline mr-1" size={12} />
                                        )}
                                        {item.change}%
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Last Price Prediction */}
                    <div className="col-span-4 bg-slate-900/40 rounded-2xl border border-slate-700/50 p-4">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-medium">Last price prediction</h3>
                            <ChevronRight size={16} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400 mb-1">AAPL</p>
                            <p className="text-3xl font-semibold text-green-400">$247.37</p>
                            <p className="text-sm text-green-400">+3.94%</p>
                            <p className="text-sm text-gray-400 mt-3">
                                Predicted price by EOD:{" "}
                                <span className="text-gray-300">$246.72</span>{" "}
                                <span className="text-red-400">-1.28 (-0.52%)</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="col-span-4 space-y-6">
                {/* Recent Alerts */}
                <div className="bg-slate-900/40 rounded-2xl border border-slate-700/50 p-4">
                    <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                        <Bell size={18} /> Recent alerts
                    </h3>
                    <div className="space-y-3">
                        {[
                            { text: "TSLA stocks value is getting down up to -2.47%", color: "bg-red-500" },
                            { text: "AAPL stocks value is fluctuating around +1.12%", color: "bg-yellow-400" },
                            { text: "AMZN stocks value has increased by +3.45%", color: "bg-green-400" },
                            { text: "GOOGL stocks value shows a rise of +0.85%", color: "bg-purple-500" },
                        ].map((alert, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className={`w-8 h-8 rounded-full ${alert.color}/30 flex items-center justify-center`}>
                                    <div className={`w-3 h-3 rounded-full ${alert.color}`} />
                                </div>
                                <p className="text-sm text-gray-300">{alert.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent News */}
                <div className="bg-slate-900/40 rounded-2xl border border-slate-700/50 p-4">
                    <h3 className="text-lg font-medium mb-3">Recent news</h3>
                    <div className="space-y-4">
                        {[
                            "Oracle CEO Says 'Of Course' OpenAI Can Handle $60B",
                            "Microsoft Invests Further in OpenAI Amidst Market Expansion",
                            "Google’s AI Innovations Challenge Traditional Search",
                            "Amazon Introduces AI-Powered Tools for E-Commerce",
                            "Apple’s New AI Features Enhance User Privacy and Control",
                        ].map((news, i) => (
                            <div
                                key={i}
                                className="flex items-start gap-3 hover:bg-slate-800/60 p-2 rounded-lg transition-all"
                            >
                                <div className="w-10 h-10 bg-slate-700/60 rounded-lg" />
                                <p className="text-sm text-gray-300 leading-snug">{news}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
