import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Heart, RefreshCw, Square } from "lucide-react";

// Image imports
import logosm from "../../../assets/home/logosm.svg";
import group11 from "../../../assets/homePage1/group11.png";
import group12 from "../../../assets/homePage1/group12.png";
import group13 from "../../../assets/homePage1/group13.png";
import group14 from "../../../assets/homePage1/group14.png";

const originalFeedItems = [
  {
    id: 1,
    company: "Tech Tren",
    time: "2d ago",
    text: "Understanding market volatility is key to making informed decisions in trading.",
    image: group11,
  },
  {
    id: 2,
    time: "04:39p",
    company: "Tech Tren",
    text: "The rise of decentralized finance continues to reshape the financial landscape.",
    image: group12,
  },
  {
    id: 3,
    time: "11:25a",
    company: "Tech Tren", 
    text: "Long-term vs short-term investing: which strategy suits your goals?",
    image: group13,
  },
  {
    id: 4,
    time: "03:15p",
    company: "Tech Tren",
    text: "Analysis predict significant shifts in the market over the next quarter.",
    image: group14,
  },
];

// Duplicate for seamless loop
const feedItems = [...originalFeedItems, ...originalFeedItems];

export default function SocialFeedsSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(originalFeedItems.length);

  React.useEffect(() => {
    if (!api) return;

    const update = () => {
      const selected = api.selectedScrollSnap() % originalFeedItems.length;
      setCurrent(selected);
    };

    update();
    api.on("select", update);

    const autoplay = setInterval(() => {
      const index = api.selectedScrollSnap();
      if (index === feedItems.length - 1) {
        api.scrollTo(0);
      } else {
        api.scrollNext();
      }
    }, 4000);

    return () => clearInterval(autoplay);
  }, [api]);

  return (
    <section className="relative text-white py-16 rounded-tl-3xl rounded-tr-3xl w-full mx-auto overflow-hidden bg-[#0A0A1F]">
      <div className="relative w-full mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="flex items-center justify-center gap-2 text-xs uppercase tracking-wide text-gray-400 mb-4">
            <Heart className="w-3 h-3" />
            Social feeds and threads
          </p>

          <h2 className="text-4xl sm:text-5xl font-normal mb-4 leading-tight">
            Join 10000+ investors
            <br />
            sharing insights in real time.
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{ align: "start", loop: false }}
          >
            <CarouselContent className="-ml-3 md:-ml-4 px-2">
              {feedItems.map((item, i) => (
                <CarouselItem
                  key={`${item.id}-${i}`}
                  className="pl-3 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/4"
                >
                  <Card className="border border-gray-700/40 rounded-2xl h-full bg-[#12132B]/60 backdrop-blur-sm transition cursor-default overflow-hidden">
                    <CardContent className="p-0 h-full flex flex-col">
                      {/* Part 1: Top section with logo, company name, time and @ icon */}
                      <div className="px-5 pt-5 pb-3 flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gray-700/40 flex items-center justify-center overflow-hidden flex-shrink-0">
                            <img
                              src={logosm}
                              alt="Tech Tren"
                              className="w-7 h-7 object-contain opacity-70"
                            />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-white">
                              {item.company}
                            </p>
                            <p className="text-xs text-gray-500">{item.time}</p>
                          </div>
                        </div>
                        <button className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 hover:bg-gray-700/20 transition">
                          <span className="text-gray-400 text-xs font-medium">@</span>
                        </button>
                      </div>

                      {/* Part 2: Text content with checkbox and read more */}
                      <div className="px-5 pb-4 flex-grow">
                        <div className="flex items-start gap-2 mb-2">
                          <Square className="w-3.5 h-3.5 mt-0.5 text-gray-600 flex-shrink-0" />
                          <p className="text-sm text-gray-300 leading-relaxed">
                            {item.text}
                          </p>
                        </div>
                        <button className="text-xs text-white hover:text-gray-300 underline underline-offset-2 transition ml-5">
                          Read more
                        </button>
                      </div>

                      {/* Part 3: Image - flush to bottom */}
                      <div className="w-full aspect-[16/10] overflow-hidden rounded-b-2xl">
                        <img 
                          src={item.image} 
                          alt=""
                          className="w-full h-full object-cover block"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Pagination Dots - positioned over the carousel */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-10">
            <div className="flex items-center gap-2 px-6 py-2 bg-black/80 border border-gray-700/40 rounded-full">
              {Array.from({ length: count }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => api?.scrollTo(i)}
                  className={cn(
                    "transition-all duration-300 rounded-full",
                    current === i
                      ? "bg-white w-8 h-2"
                      : "bg-gray-600 w-2 h-2 hover:bg-gray-400"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
