"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

import heartRounded from "@/assets/homePage1/heart-rounded.svg";
import imgIcon1 from "@/assets/homePage1/Icon.svg";
import vectorIcon from "@/assets/homePage1/Vector.svg";

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
    time: "3 h ago",
    title:
      "📈 Understanding market volatility is key to making informed decisions in trading.",
    linkLabel: "Read more",
    imageUrl:
      "https://images.unsplash.com/photo-1556742400-b5b7c5121f2a?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    icon1: heartRounded,
    author: "Finance Hub",
    time: "1 h ago",
    title: "🔍 DeFi continues to reshape the financial landscape.",
    linkLabel: "Explore",
    imageUrl:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    author: "Investor Daily",
    time: "Just now",
    title: "📊 Long-term vs short-term investing: which suits your goals?",
    linkLabel: "View details",
    imageUrl:
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    author: "Tech Ten",
    time: "Live",
    title:
      "🔮 Developers are shipping faster with real-time commentary from the desk.",
    linkLabel: "View thread",
    imageUrl:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    author: "Tech Ten",
    time: "Live",
    title:
      "🔮 Developers are shipping faster with real-time commentary from the desk.",
    linkLabel: "View thread",
    imageUrl:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    author: "Tech Ten",
    time: "Live",
    title:
      "🔮 Developers are shipping faster with real-time commentary from the desk.",
    linkLabel: "View thread",
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

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="relative py-12 bg-white">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-2 text-gray-600">
            <img src={heartRounded} alt="heart" className="w-5 h-5" />
            <span>Social feeds and threads</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Join 10,000+ investors sharing insights in real time
          </h2>
        </div>

        {/* Carousel */}
        <Carousel setApi={setApi} className="w-full max-w-6xl mx-auto">
          <CarouselContent>
            {socialFeedItems.map((item, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <Card className="overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition">
                  {item.imageUrl && (
                    <div
                      className="h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${item.imageUrl})` }}
                    />
                  )}
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        {item.icon1 && (
                          <img
                            src={resolveIcon(item.icon1)}
                            alt=""
                            className="w-6 h-6 mr-2 rounded-full"
                          />
                        )}
                        <div>
                          <p className="font-semibold text-gray-800">
                            {item.author}
                          </p>
                          <p className="text-xs text-gray-500">{item.time}</p>
                        </div>
                      </div>
                      {item.icon2 && (
                        <img
                          src={resolveIcon(item.icon2)}
                          alt=""
                          className="w-4 h-4 opacity-75"
                        />
                      )}
                    </div>

                    <h3 className="text-gray-900 font-semibold mb-2 text-sm md:text-base">
                      {item.title}
                    </h3>

                    {item.linkLabel && (
                      <a
                        href="#"
                        className="text-blue-600 text-sm font-medium hover:underline"
                      >
                        {item.linkLabel}
                      </a>
                    )}
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
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
