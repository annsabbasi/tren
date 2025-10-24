import { useState } from 'react';
import { TrendingUp, Search, DollarSign, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const stockData = [
    { symbol: 'TSLA', name: 'Tesla', price: '$289.24', change: '+2.34%', positive: true },
    { symbol: 'AAPL', name: 'Apple Inc.', price: '$182.32', change: '+0.72%', positive: true },
    { symbol: 'GOOGL', name: 'Alphabet', price: '$139.23', change: '+1.45%', positive: true },
    { symbol: 'NVDA', name: 'NVIDIA', price: '$761.02', change: '-0.23%', positive: false },
    { symbol: 'BTC', name: 'Bitcoin', price: '$45,218', change: '+3.21%', positive: true },
];

const recentPosts = [
    { id: 1, title: 'TSLA stock will hit $450 after by the end of Q4', metric: 'up by 2.47%', icon: '📈' },
    { id: 2, title: 'AAPL stock payout is around 12%', icon: '💰' },
    { id: 3, title: 'Microsoft breaks record for Highest Event Revenue', icon: '📊' },
    { id: 4, title: 'GOOGL Hires a new executive from Microsoft', icon: '👔' },
    { id: 5, title: 'NVFT Stock out on NASDAQ', icon: '📉' },
    { id: 6, title: 'Apple s New AI Features Released to Extreme Success', icon: '🤖' },
];

const recentNews = [
    'OpenAI Says its Crystal...',
    'SpaceX Wins Rights for...',
    'Microsoft breaks record for...',
    'Gigachat Produced Gains...',
    'NVFT Stock out on NASD...',
];

const FinancialGPT = () => {
    const [chatMessage, setChatMessage] = useState('');

    return (
        <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - Chat Interface */}
                <div className="lg:col-span-2">
                    <Card className="bg-slate-900 border-slate-800 h-full flex flex-col">
                        <CardContent className="p-6 flex-1 flex flex-col">
                            {/* Chat Header */}
                            <div className="text-center mb-8">
                                <div className="inline-block mb-4">
                                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center">
                                        <TrendingUp size={40} />
                                    </div>
                                </div>
                                <h2 className="text-3xl font-bold mb-2">Ask Financial GPT</h2>
                                <p className="text-slate-400">Your AI-powered financial assistant</p>
                                <p className="text-xs text-slate-500 mt-1">Outperformed all other platform</p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-4 justify-center mb-8">
                                <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm transition-colors">
                                    <Search size={16} className="text-cyan-400" />
                                    <span>Market analysis & trends</span>
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm transition-colors">
                                    <TrendingUp size={16} className="text-cyan-400" />
                                    <span>Stock and open insights</span>
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm transition-colors">
                                    <DollarSign size={16} className="text-cyan-400" />
                                    <span>Trading strategies</span>
                                </button>
                            </div>

                            {/* Stock Watchlist */}
                            <div className="mb-6">
                                <h3 className="text-sm font-semibold mb-3 text-slate-400">Recent or watchlist</h3>
                                <div className="flex gap-4 overflow-x-auto pb-2">
                                    {stockData.map((stock) => (
                                        <div key={stock.symbol} className="bg-slate-800 rounded-lg p-4 min-w-[140px]">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="font-bold">{stock.symbol}</span>
                                                <span className={`text-xs ${stock.positive ? 'text-green-400' : 'text-red-400'}`}>
                                                    {stock.change}
                                                </span>
                                            </div>
                                            <div className="text-sm text-slate-400 mb-1">{stock.name}</div>
                                            <div className="text-lg font-semibold">{stock.price}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Price Prediction */}
                            <div className="bg-slate-800 rounded-lg p-4 mb-6">
                                <div className="text-sm text-slate-400 mb-1">Last price prediction</div>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-3xl font-bold">$247.37</span>
                                    <span className="text-green-400 text-sm">+2.34%</span>
                                </div>
                                <div className="text-xs text-slate-500 mt-1">Predicted price by EOB</div>
                                <div className="text-xs text-slate-500">15 of March 2025</div>
                            </div>

                            {/* Chat Input */}
                            <div className="mt-auto">
                                <div className="relative">
                                    <Input
                                        type="text"
                                        placeholder="Still wanna know about question expect on the FAQs read now?"
                                        value={chatMessage}
                                        onChange={(e) => setChatMessage(e.target.value)}
                                        className="bg-slate-800 border-slate-700 pr-12 py-6 rounded-xl text-white placeholder:text-slate-500" />
                                    <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-cyan-600 hover:bg-cyan-700 p-2 rounded-lg transition-colors">
                                        <Send size={18} />
                                    </button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column - Recent Posts & News */}
                <div className="space-y-6">
                    {/* Recent Posts */}
                    <Card className="bg-slate-900 border-slate-800">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-semibold">Recent posts</h3>
                                <button className="text-cyan-400 text-sm hover:text-cyan-300">→</button>
                            </div>
                            <div className="space-y-3">
                                {recentPosts.map((post) => (
                                    <div key={post.id} className="bg-slate-800 rounded-lg p-3 hover:bg-slate-750 transition-colors cursor-pointer">
                                        <div className="flex gap-3">
                                            <div className="text-2xl">{post.icon}</div>
                                            <div className="flex-1">
                                                <p className="text-sm text-slate-300 mb-1">{post.title}</p>
                                                {post.metric && (
                                                    <p className="text-xs text-green-400">{post.metric}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Recent News */}
                    <Card className="bg-slate-900 border-slate-800">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-semibold">Recent News</h3>
                                <button className="text-cyan-400 text-sm hover:text-cyan-300">→</button>
                            </div>
                            <div className="space-y-2">
                                {recentNews.map((news, idx) => (
                                    <div key={idx} className="text-sm text-slate-400 hover:text-white cursor-pointer transition-colors">
                                        {news}
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default FinancialGPT;