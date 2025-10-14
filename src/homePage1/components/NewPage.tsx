import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import greenBull from '../../assets/homePage1/greenbull.png';
import purpleBull from '../../assets/homePage1/purplebull.png';
import singleBox from '../../assets/homePage1/singlebox.png';
import upGraph from '../../assets/homePage1/Solid (1).svg';
import downGraph from '../../assets/homePage1/Solid (2).svg';
import idea from '../../assets/homePage1/bulb.svg';
import star0 from '../../assets/homePage1/star0.svg';
import {
    Marquee,
    MarqueeContent,
    MarqueeFade,
    MarqueeItem,
} from '@/components/ui/shadcn-io/marquee';

interface StockData {
    name: string;
    amount: string;
    bonus: string;
    icon: string
}

const data: StockData[] = [
    { name: 'NVDA', amount: '$187.62', bonus: '-0.32%', icon: upGraph },
    { name: 'AAPL', amount: '$175.43', bonus: '-0.45%', icon: upGraph },
    { name: 'MSFT', amount: '$415.86', bonus: '+0.28%', icon: downGraph },
    { name: 'GOOGL', amount: '$158.22', bonus: '+0.51%', icon: downGraph },
];

// StockCard Component for Marquee Items
const StockCard = ({ item }: { item: StockData }) => (
    <div className="glass-card text-white p-4 flex flex-col justify-between rounded-3xl h-28 w-40">
        <div className="space-y-2">
            <h5 className="font-medium text-lg">{item.name}</h5>
            <p className="text-lg font-medium text-gray-400">{item.amount}</p>
        </div>
        {/* <p className="flex items-center text-green-500 font-medium"> */}
        <p
            className={`flex items-center font-medium ${item.bonus.startsWith('+') ? 'text-green-500' : 'text-red-500'
                }`}
        >
            {item.bonus}
            <span>
                <img src={item.icon} alt="" className="size-5" />
            </span>
            {/* <ChartNoAxesCombined className="w-4 h-4 ml-1" /> */}
        </p>
    </div>
);

// MarqueeCards Component using shadcn marquee
interface MarqueeCardsProps {
    items: StockData[];
    direction?: "left" | "right";
    speed?: "slow" | "normal" | "fast";
    pauseOnHover?: boolean;
    className?: string;
}

const MarqueeCards = ({
    items,
    direction = "left",
    speed = "normal",
    pauseOnHover = true,
    className,
}: MarqueeCardsProps) => {
    // Transform direction to whatever prop the Marquee component expects
    const marqueeProps = {
        // Example: if the component uses 'reverse' instead of 'direction'
        reverse: direction === "right",
        pauseOnHover,
        // Add other props as needed
    };

    return (
        <div className={`relative w-full ${className}`}>
            <Marquee {...marqueeProps}>
                <MarqueeFade side="left" />
                <MarqueeFade side="right" />
                <MarqueeContent>
                    {items.map((item, index) => (
                        <MarqueeItem key={index} className="flex-shrink-0">
                            <StockCard item={item} />
                        </MarqueeItem>
                    ))}
                </MarqueeContent>
            </Marquee>
        </div>
    );
};

export default function NewPage() {
    return (
        <div className="relative flex items-stretch justify-between gap-6 mx-auto px-8 pb-40">
            {/* First Card */}
            <div className="relative pl-4">
                <Card className="relative overflow-hidden bg-transparent">
                    <CardHeader className="pb-4">
                        <div className="relative h-28 mb-4">
                            <img
                                src={greenBull}
                                alt="bull"
                                className="w-[400px] h-[230px] object-contain absolute top-3 right-6 -mr-40 -z-3 opacity-50"
                            />
                        </div>
                    </CardHeader>
                    <CardContent className="pt-4 z-10">
                        <p className="flex items-center text-gray-400 mb-2 text-base">
                            <span>
                                <img src={idea} alt="idea" className="size-5 mr-2 mb-1" />
                            </span>
                            AI based prediction
                        </p>
                        <h3 className="text-2xl font-semibold flex items-center gap-2 mb-3">
                            Price Prediction
                            <ArrowRight className="w-5 h-5 text-gray-400" />
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            An innovative method allows you to predict the price of assets and earn on your investments.
                        </p>
                    </CardContent>
                    <div className="green-circled absolute -top-40 -right-60"></div>
                </Card>

                {/* Marquee Section - Using shadcn marquee */}
                <div className="absolute top-5 left-0 w-full h-full">
                    <MarqueeCards
                        items={data}
                        direction="left"
                        speed="normal"
                        pauseOnHover={true}
                    />
                </div>
            </div>

            {/* Second Card */}
            <Card className="relative overflow-hidden bg-transparent">
                <CardHeader className="pb-4">
                    <div className="relative h-28 mb-4">
                        <img
                            src={purpleBull}
                            alt="bull"
                            className="w-[400px] h-[230px] object-contain absolute top-3 -left-84 -mr-40 -z-3 opacity-50"
                        />
                        <div className="glass-custom absolute -top-12 left-5 py-4 pt-6 px-6 w-66">
                            <span>🔥</span>
                            <h5 className="text-gray-200 mt-1 text-sm">Thousands Gather for Election Day Protest in Georgia</h5>
                            <p className="text-xs text-gray-400 mt-2">1d - Yahoo Finance</p>
                        </div>
                        <div className="glass-custom absolute -top-10 -right-36 py-4 pt-6 px-6 w-72 z-10">
                            <span>🔥</span>
                            <h5 className="text-gray-200 mt-1 text-sm">The Fed Lowers Interest Rates: Implications for Tesla Stock</h5>
                            <p className="text-xs text-gray-400 mt-2">1d ago - NASDAQ.com</p>
                        </div>
                        <div className="glass-custom absolute top-16 -right-16 py-4 pt-6 px-6 w-72">
                            <span>🔥</span>
                            <h5 className="text-gray-200 mt-1 text-sm">Rachel Cruze: 8 Strategies to Reduce Your Essential Expenses</h5>
                            <p className="text-xs text-gray-400 mt-2">1d ago - AMAZON</p>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="pt-4 z-10">
                    <p className="flex items-center text-gray-400 mb-2 text-base">
                        {/* <Lightbulb className="w-4 h-4 text-gray-400 mr-2" /> */}
                        <span>
                            <img src={star0} alt="idea" className="size-5 mr-2 mb-1" />
                        </span>
                        Updates & blogs
                    </p>
                    <h3 className="text-2xl font-semibold flex items-center gap-2 mb-3">
                        News and AI Insights
                        <ArrowRight className="w-5 h-5 text-gray-400" />
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        A comprehensive, hassle-free solution to launch your own trading brand without the complexities
                    </p>
                </CardContent>
                <div className="purple-circled absolute -top-36 -left-88"></div>
            </Card>

            <div className="">
                <img src={singleBox} alt="box" className="absolute -left-[450px] top-10 object-contain w-1/2" />
                <div className="green-shadow top-10"></div>
            </div>

        </div>
    );
}