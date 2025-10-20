import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Heart, X } from "lucide-react";
import { cn } from "@/lib/utils";

import Logo from "../../../assets/Home/logosm.svg";
import Thread from "../../../assets/Home/thread.svg";
import Img1 from "../../../assets/home/group11.png";
import Img2 from "../../../assets/home/group12.png";
import Img3 from "../../../assets/home/group13.png";
import Img4 from "../../../assets/home/group14.png";

const originalFeedItems = [
  {
    id: 1,
    company: "Tech Tren",
    time: "2d ago",
    text: "📈 Understanding market volatility is key to making informed decisions in trading.",
    image: Img1,
    // dummy long content for modal testing (id === 1)
    longText:
      "📈 Understanding market volatility is key to making informed decisions in trading. \n\nDummy Long Content for testing: This card demonstrates the 'Read more' modal. Here you can put the entire article, thread replies, images, charts, or any rich HTML. Use this area to render markdown or HTML safely. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
  },
  {
    id: 2,
    company: "Tech Tren",
    time: "3d ago",
    text: "🔍 The rise of decentralized finance continues to reshape the financial landscape.",
    image: Img2,
  },
  {
    id: 3,
    company: "Tech Tren",
    time: "4d ago",
    text: "📊 Long-term vs short-term investing: which strategy suits your goals?",
    image: Img3,
  },
  {
    id: 4,
    company: "Tech Tren",
    time: "6d ago",
    text: "🔮 Analysts predict significant shifts in the market over the next quarter.",
    image: Img4,
  },
  {
    id: 5,
    company: "Tech Tren",
    time: "3d ago",
    text: "🔍 The rise of decentralized finance continues to reshape the financial landscape.",
    image: Img1,
  },
  {
    id: 6,
    company: "Tech Tren",
    time: "4d ago",
    text: "📊 Long-term vs short-term investing: which strategy suits your goals?",
    image: Img2,
  },
  {
    id: 7,
    company: "Tech Tren",
    time: "6d ago",
    text: "🔮 Analysts predict significant shifts in the market over the next quarter.",
    image: Img4,
  },
];

// Duplicate for seamless loop - EXACTLY like OurInvestorCard
const feedItems = [...originalFeedItems, ...originalFeedItems];

export default function SocialFeedsSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [openId, setOpenId] = React.useState<number | null>(null);

  // EXACT carousel logic from OurInvestorCard
  React.useEffect(() => {
    if (!api) return;

    const update = () => {
      const selected = api.selectedScrollSnap() % originalFeedItems.length;
      setCurrent(selected);
    };

    update();
    api.on("select", update);

    // Auto-play with 2 second interval - EXACTLY like OurInvestorCard
    const autoplay = setInterval(() => {
      api.scrollNext();
    }, 2000);

    return () => clearInterval(autoplay);
  }, [api]);

  // EXACT pagination dot style function from OurInvestorCard
  const getDotStyle = (index: number) => {
    const distanceFromActive = Math.abs(index - current);

    // For 4 dots (since we have 4 original items), we'll have this hierarchy:
    // Active dot: largest size, full opacity
    if (distanceFromActive === 0) {
      return {
        width: "1.2rem", // 16px - largest
        height: "0.5rem", // 8px
        opacity: 1
      };
    }
    // Immediate neighbors (1 away): medium size, high opacity
    if (distanceFromActive === 1) { // 3 accounts for circular nature with 4 items
      return {
        width: "0.6rem", // 12px - medium
        height: "0.6rem", // 6px
        opacity: 0.9
      };
    }
    // Next neighbors (2 away): small size, medium opacity
    if (distanceFromActive === 2) {
      return {
        width: "0.5rem", // 8px - small
        height: "0.5rem", // 4px
        opacity: 0.5
      };
    }
    // Default for any other case
    return {
      width: "0.4rem",
      height: "0.4rem",
      opacity: 0.3
    };
  };

  return (
    <section className="relative w-full overflow-hidden max-w-7xl mx-auto px-8">
      <div className="px-4 md:px-6 relative rounded-t-3xl py-20">
        <div className="absolute top-0 left-0 w-full h-[450px] bg-[linear-gradient(180deg,rgba(81,49,173,0.2)_0%,rgba(6,4,12,0.2)_100%)] pointer-events-none -z-[1] rounded-3xl"></div>

        {/* Header */}
        <div className="text-center mb-14">
          <p className="flex items-center justify-center gap-2 text-base text-gray-400 mb-3 tracking-wide">
            <Heart className="w-5 h-5 text-gray-400" />
            Social feeds and threads
          </p>

          <h2 className="text-xl sm:text-6xl font-medium leading-16">
            Join <span className="text-white">10,000+</span> investors
            <br className="hidden sm:block" />
            sharing insights in real time.
          </h2>
        </div>

        {/* Carousel - UPDATED with exact OurInvestorCard logic */}
        <div className="relative mb-16">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{ align: "start", loop: true }} // CHANGED to match OurInvestorCard
          >
            <CarouselContent className="-ml-3 md:-ml-4 px-2">
              {feedItems.map((item, i) => (
                <CarouselItem
                  key={`${item.id}-${i}`}
                  className="pl-3 md:pl-4 basis-1/2 lg:basis-1/4" // CHANGED to match OurInvestorCard
                >
                  <Card className="border rounded-3xl overflow-hidden py-0 h-full bg-transparent">
                    <CardContent className="p-0 flex flex-col h-full">
                      {/* Top section */}
                      <div className="px-5 pt-5 pb-3 flex items-start justify-between">
                        <div className="flex items-center gap-3 w-full">
                          <div className="w-16 h-12 rounded-full bg-[#06040C] flex items-center justify-center overflow-hidden">
                            <img
                              src={Logo}
                              alt="logo"
                              className="w-8 h-8 object-contain"
                            />
                          </div>
                          <div className="flex items-center justify-between w-full">
                            <div>
                              <p className="text-sm font-[450]">
                                {item.company}
                              </p>
                              <p className="text-xs text-gray-400">{item.time}</p>
                            </div>
                            <img
                              src={Thread}
                              alt="Thread"
                              className="w-6 h-6 object-contain"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Text */}
                      <div className="px-5 pb-5 flex-grow">
                        <p className="text-[0.9rem] text-gray-300 leading-relaxed mb-3">
                          {item.text}
                        </p>

                        {/* Read more button — opens modal (dummy content for id === 1) */}
                        <button
                          onClick={() => setOpenId(item.id)}
                          className="text-sm font-medium text-white hover:text-gray-300 underline underline-offset-2 transition"
                        >
                          Read more
                        </button>
                      </div>

                      {/* Image */}
                      <div className="w-full aspect-[16/10] overflow-hidden rounded-b-3xl">
                        <img
                          src={item.image}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Pagination Dots - EXACT COPY from OurInvestorCard */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 mt-10 flex justify-center">
            <div className="flex items-center gap-3 px-6 py-3 bg-black border border-gray-700/40 rounded-full">
              {Array.from({ length: originalFeedItems.length }).map((_, i) => {
                const dotStyle = getDotStyle(i);
                return (
                  <button
                    key={i}
                    onClick={() => api?.scrollTo(i)}
                    className={cn(
                      "transition-all duration-300 rounded-full bg-gray-600 hover:bg-gray-400",
                      current === i && "bg-white"
                    )}
                    style={{
                      width: dotStyle.width,
                      height: dotStyle.height,
                      opacity: dotStyle.opacity
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Read more modal (glass panel). Only show when openId is set */}
      {openId !== null && (
        <div
          aria-modal="true"
          role="dialog"
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          {/* Backdrop */}
          <button
            onClick={() => setOpenId(null)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            aria-label="Close"
          />

          {/* Modal panel */}
          <div className="relative z-10 w-[min(900px,95%)] mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-[#0F1020]/80 to-[#0B0B18]/80 border border-white/6 shadow-2xl">
            {/* Header with close */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
              <div>
                <p className="text-sm text-gray-400">Tech Tren</p>
                <p className="text-xs text-gray-500">Detail thread</p>
              </div>
              <button
                onClick={() => setOpenId(null)}
                className="p-2 rounded-md hover:bg-white/5 transition"
                aria-label="Close details"
              >
                <X className="w-5 h-5 text-gray-300" />
              </button>
            </div>

            {/* Content area */}
            <div className="px-6 py-6 max-h-[60vh] overflow-auto">
              {/* Show the longText if exists for the selected item, else show placeholder */}
              <div className="prose prose-invert text-gray-200">
                {(() => {
                  const selectedItem = originalFeedItems.find((f) => f.id === openId);
                  if (selectedItem?.longText) {
                    return (
                      <>
                        {/* Render longText with basic formatting (split by double-newline) */}
                        {selectedItem.longText.split("\n\n").map((para, idx) => (
                          <p key={idx} className="mb-4">
                            {para}
                          </p>
                        ))}
                      </>
                    );
                  } else {
                    return (
                      <>
                        <h3 className="text-lg font-semibold mb-2">Full post</h3>
                        <p className="mb-4 text-gray-300">
                          This is a placeholder for the full content. Replace with
                          server content or rich HTML when available.
                        </p>
                        <p className="mb-4">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Integer nec odio. Praesent libero. Sed cursus ante
                          dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
                          imperdiet. Duis sagittis ipsum.
                        </p>
                        <p className="mb-4">
                          Curabitur tortor. Pellentesque nibh. Aenean quam. In
                          scelerisque sem at dolor. Maecenas mattis.
                        </p>
                      </>
                    );
                  }
                })()}
              </div>
            </div>

            {/* Footer (optional actions) */}
            <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-white/5">
              <button
                onClick={() => setOpenId(null)}
                className="px-4 py-2 rounded-md bg-white/6 hover:bg-white/8 transition text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}