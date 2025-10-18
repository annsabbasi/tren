import { Card, CardContent } from "@/components/ui/card";
import {
    Marquee,
    MarqueeContent,
    MarqueeFade,
    MarqueeItem,
} from '@/components/ui/shadcn-io/marquee';

import Icon1 from '../../../assets/Home/revolution-carousel-icon1.svg';
import Icon2 from '../../../assets/Home/revolution-carousel-icon2.svg';
import Icon3 from '../../../assets/Home/revolution-carousel-icon3.svg';
import Icon4 from '../../../assets/Home/revolution-carousel-icon4.svg';

const cards = [
    {
        icon: Icon1,
        title: "AI Stock Picks",
        desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    },
    {
        icon: Icon2,
        title: "Screener",
        desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu pariatur.",
    },
    {
        icon: Icon3,
        title: "Live alerts",
        desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
    },
    {
        icon: Icon4,
        title: "Trading Signals",
        desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
    },
];

// Card Component for Marquee Items
const FeatureCard = ({ card }: { card: typeof cards[0] }) => (
    <Card className="!w-80 bg-gradient-to-b rounded-2xl text-center text-white flex-shrink-0 mx-3">
        <CardContent className="p-6 flex flex-col items-center justify-center space-y-4 pt-1 gap-4">
            <div className="p-3 "> <img src={card.icon} alt="icon" /> </div>
            <div>
                <h3 className="text-xl font-medium mb-4">{card.title}</h3>
                <p className="text-sm text-gray-400">{card.desc}</p>
            </div>
        </CardContent>
    </Card>
);

// MarqueeCards Component using shadcn marquee
interface FeatureMarqueeProps {
    items: typeof cards;
    direction?: "left" | "right";
    pauseOnHover?: boolean;
    className?: string;
}

const FeatureMarquee = ({
    items,
    direction = "left",
    pauseOnHover = true,
    className,
}: FeatureMarqueeProps) => {
    const marqueeProps = {
        reverse: direction === "right",
        pauseOnHover,
    };

    return (
        <div className={`relative w-full ${className}`}>
            <Marquee {...marqueeProps}>
                <MarqueeFade side="left" />
                <MarqueeFade side="right" />
                <MarqueeContent>
                    {items.map((card, index) => (
                        <MarqueeItem key={index} className="flex-shrink-0">
                            <FeatureCard card={card} />
                        </MarqueeItem>
                    ))}
                </MarqueeContent>
            </Marquee>
        </div>
    );
};

export default function RevolutionSlider() {
    return (
        <div className="relative overflow-hidden w-full bg-transparent pb-10 px-16 max-w-6xl mx-auto">
            <FeatureMarquee
                items={cards}
                direction="left"
                pauseOnHover={true}
            />
        </div>
    );
}
