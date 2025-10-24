import { Card, CardContent } from '@/components/ui/card';

const StocksCoins = () => {
    return (
        <div className="p-6">
            <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Stocks & Coins</h2>
                <p className="text-slate-400">Track stocks and cryptocurrency</p>
            </div>

            <Card className="bg-slate-900 border-slate-800">
                <CardContent className="p-6">
                    <p className="text-slate-400">Stocks & Coins content coming soon...</p>
                </CardContent>
            </Card>
        </div>
    );
};

export default StocksCoins;