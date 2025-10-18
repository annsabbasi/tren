"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay"; // ✅ import autoplay plugin

import heartRounded from "@/assets/homePage1/heart-rounded.svg";
import imgIcon1 from "@/assets/homePage1/Vector.svg";
import vectorIcon from "@/assets/homePage1/threads-1 1.svg";

type SocialFeedItem = {
  id: number;
  icon1?: string;
  icon2?: string;
  author: string;
  time: string;
  title: string;
  imageUrl?: string;
  linkLabel?: string;
};

const socialFeedItems: SocialFeedItem[] = [
  {
    id: 1,
    icon1: imgIcon1,
    icon2: vectorIcon,
    author: "Tech Ten",
    time: "3h ago",
    title:
      "📈 Understanding market volatility is key to making informed decisions in trading.",
    linkLabel: "Read more",
    imageUrl: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    icon1: imgIcon1,
    icon2: vectorIcon,
    author: "Finance Hub",
    time: "1h ago",
    title:
      "🔍 The rise of decentralized finance continues to reshape the financial landscape.",
    linkLabel: "Read more",
    imageUrl:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    icon1: imgIcon1,
    icon2: vectorIcon,
    author: "Investor Daily",
    time: "Just now",
    title:
      "📊 Long-term vs short-term investing: which strategy suits your goals?",
    linkLabel: "Read more",
    imageUrl:
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    icon1: imgIcon1,
    icon2: vectorIcon,
    author: "Tech Ten",
    time: "Live",
    title:
      "🔮 Analysts predict significant shifts in the market over the next quarter.",
    linkLabel: "Read more",
    imageUrl:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    icon1: imgIcon1,
    icon2: vectorIcon,
    author: "Tech Ten",
    time: "Live",
    title:
      "🔍 The rise of decentralized finance continues to reshape the financial landscape.",
    linkLabel: "Read more",
    imageUrl:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    icon1: imgIcon1,
    icon2: vectorIcon,
    author: "Tech Ten",
    time: "Live",
    title:
      "🔮 Developers are shipping faster with real-time commentary from the desk.",
    linkLabel: "Read more",
    imageUrl:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=900&q=80",
  },
];

function resolveIcon(icon?: string) {
  if (!icon) return "";
  if (icon.startsWith("http")) return icon;
  if (icon.startsWith("/")) return icon;
  return icon;
}

export default function SocialFeedCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  // ✅ autoplay plugin ref (with pause on hover)
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="social-feed-section">
      <div className="container">
        <header className="intro max-w-1200 mx-auto text-center mb-16">
          <span className="eyebrow text-gray-400 flex items-center justify-center">
            <img
              src={heartRounded}
              alt="heartRounded"
              className="size-5 mr-2 mb-1 text-gray-400"
            />
            Social feeds and threads
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Join 10,000+ investors <br />sharing insights in real time.
          </h2>
        </header>

        {/* ✅ Carousel with autoplay + loop */}
        <Carousel
          setApi={setApi}
          className="w-full max-w-6xl mx-auto"
          plugins={[plugin.current]}
          opts={{ loop: true }}
        >
          <CarouselContent>
            {socialFeedItems.map((item, index) => (
              <CarouselItem
                key={index}
                className="flex-[0_0_80%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] p-2"
              >
                <Card className="card relative overflow-hidden rounded-2xl shadow-md p-4">
                  <CardContent className="p-0">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          {item.icon1 && (
                            <img
                              src={resolveIcon(item.icon1)}
                              alt=""
                              className="size-5 mr-2"
                            />
                          )}
                          <div className="text-sm">
                            <span className="font-medium block">
                              {item.author}
                            </span>
                            <span className="text-gray-500">{item.time}</span>
                          </div>
                        </div>
                        {item.icon2 && (
                          <img
                            src={resolveIcon(item.icon2)}
                            alt=""
                            className="size-4 opacity-80"
                          />
                        )}
                      </div>

                      <h3 className="font-semibold mb-2 text-gray-800">
                        {item.title}
                      </h3>
                      <a
                        href="#"
                        className="text-blue-600 text-sm font-medium hover:underline"
                      >
                        {item.linkLabel}
                      </a>
                    </div>

                    {item.imageUrl && (
                      <div
                        className="h-48 bg-cover bg-center mt-3 rounded-lg"
                        style={{ backgroundImage: `url(${item.imageUrl})` }}
                      />
                    )}
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Pagination Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "h-3 w-3 rounded-full border-2 transition",
                current === index + 1
                  ? "border-primary bg-primary/80"
                  : "border-gray-300 hover:border-gray-400"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
