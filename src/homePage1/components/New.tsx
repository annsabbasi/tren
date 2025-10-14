// MarqueeDemo.tsx
import React from 'react';

// Mock data for the cards
const sampleItems = [
    {
        id: 1,
        title: "Feature One",
        description: "Amazing feature that solves problems",
        color: "bg-blue-50 border-blue-200"
    },
    {
        id: 2,
        title: "Feature Two",
        description: "Incredible tool for productivity",
        color: "bg-green-50 border-green-200"
    },
    {
        id: 3,
        title: "Feature Three",
        description: "Revolutionary solution",
        color: "bg-purple-50 border-purple-200"
    },
    {
        id: 4,
        title: "Feature Four",
        description: "Game changing technology",
        color: "bg-orange-50 border-orange-200"
    },
    {
        id: 5,
        title: "Feature Five",
        description: "Next generation innovation",
        color: "bg-pink-50 border-pink-200"
    },
];

// Marquee Cards Component
interface MarqueeCardsProps {
    items: Array<{
        id: number;
        title: string;
        description: string;
        color?: string;
    }>;
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
    const getAnimationStyle = () => {
        const duration = speed === 'slow' ? '40s' : speed === 'fast' ? '15s' : '25s';
        const animationName = direction === 'right' ? 'reverseMarquee' : 'marquee';

        return {
            animation: `${animationName} ${duration} linear infinite`,
            animationPlayState: 'running' as const,
        };
    };

    return (
        <div
            className={`relative flex w-full overflow-hidden ${className}`}
        >
            <div
                style={getAnimationStyle()}
                className={`
          flex min-w-full shrink-0 items-center justify-around gap-4 py-4
          ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}
        `}
            >
                {items.map((item) => (
                    <div
                        key={item.id}
                        className={`
              w-64 shrink-0 cursor-pointer transition-all hover:scale-105 hover:shadow-lg
              border rounded-lg p-6
              ${item.color || "bg-white border-gray-200"}
            `}
                    >
                        <div className="p-2">
                            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-600">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Duplicate for seamless loop */}
            <div
                style={getAnimationStyle()}
                className={`
          flex min-w-full shrink-0 items-center justify-around gap-4 py-4
          ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}
        `}
                aria-hidden="true"
            >
                {items.map((item) => (
                    <div
                        key={`duplicate-${item.id}`}
                        className={`
              w-64 shrink-0 cursor-pointer transition-all hover:scale-105 hover:shadow-lg
              border rounded-lg p-6
              ${item.color || "bg-white border-gray-200"}
            `}
                    >
                        <div className="p-2">
                            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-600">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Inline CSS */}
            <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes reverseMarquee {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
        </div>
    );
};

// Main Demo Component
const New = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-7xl mx-auto">
                {/* <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
                    Scrolling Marquee Cards
                </h1>

                <section className="mb-16">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-700">Left Scrolling (Normal Speed)</h2>
                    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                        <MarqueeCards items={sampleItems} direction="left" speed="normal" />
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-700">Right Scrolling (Slow Speed)</h2>
                    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                        <MarqueeCards items={sampleItems} direction="right" speed="slow" />
                    </div>
                </section> */}

                {/* Fast Scrolling Example */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-700">Fast Scrolling</h2>
                    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                        <MarqueeCards items={sampleItems} speed="fast" />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default New;