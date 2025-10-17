import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import Stars from '../../assets/homePage1/stars.png';
import {
    Marquee,
    MarqueeContent,
    MarqueeFade,
    MarqueeItem,
} from '@/components/ui/shadcn-io/marquee';

// Import all logo images
import logo11 from '../../assets/homePage1/logo11.png';
import logo12 from '../../assets/homePage1/logo12.png';
import logo13 from '../../assets/homePage1/logo13.png';
import logo14 from '../../assets/homePage1/logo14.png';
import logo15 from '../../assets/homePage1/logo15.png';
import logo16 from '../../assets/homePage1/logo16.png';

const originalTestimonials = [
  {
    id: 1,
    rating: 5.0,
    text: "It was good and smooth and I will always recommend Funded next to other and will recommend to myself as well.",
    name: "James Lippens",
    time: "2 hrs ago"
  },
  {
    id: 2,
    rating: 4.8,
    text: "Exceptional served! The process was seamless and the team was incredibly supportive throughout.",
    name: "Sarah Johnson", 
    time: "1 hr ago"
  },
  {
    id: 3,
    rating: 4.9,
    text: "I'm impressed by the transparency and efficiency of the entire experience. Highly recommend.",
    name: "Michael Chen",
    time: "30 mins ago"
  },
  {
    id: 4,
    rating: 5.0,
    text: "The page is user-friendly and the customer support was top-notch. Will definitely use again.",
    name: "Emily Wang",
    time: "15 mins ago"
  }
];

// Duplicate testimonials for seamless infinite scroll
const testimonials = [...originalTestimonials, ...originalTestimonials];

// Partner logos with actual imported images
const partnerLogos = [
  logo11,
  logo12, 
  logo13,
  logo14,
  logo15,
  logo16
];

// Marquee Component for Logos with shadow
const LogoMarquee = () => {
  return (
    <div className="relative w-full mt-12">
      {/* Left Shadow */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[rgba(6,4,12,0.9)] to-transparent z-10 pointer-events-none"></div>
      
      {/* Right Shadow */}
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[rgba(6,4,12,0.9)] to-transparent z-10 pointer-events-none"></div>
      
      <Marquee pauseOnHover={true}>
        <MarqueeContent>
          {partnerLogos.map((logo, index) => (
            <MarqueeItem key={index} className="flex-shrink-0 mx-6">
              <div className="h-16 w-32 flex items-center justify-center">
                <img 
                  src={logo} 
                  alt={`Partner Logo ${index + 1}`}
                  className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105"
                />
              </div>
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>
    </div>
  );
};

export default function OurInvestorCard() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }
    
    setCount(originalTestimonials.length); // Show dots only for original testimonials
    setCurrent(api.selectedScrollSnap() % originalTestimonials.length);
    
    api.on("select", () => {
      const selectedIndex = api.selectedScrollSnap();
      setCurrent(selectedIndex % originalTestimonials.length);
    });
  }, [api]);

  // FIXED: Smart autoplay with seamless infinite scroll
  React.useEffect(() => {
    if (!api) return;
    
    const interval = setInterval(() => {
      const currentIndex = api.selectedScrollSnap();
      
      // If we're at the last duplicate slide, instantly reset to first original slide
      if (currentIndex === testimonials.length - 1) {
        api.scrollTo(0); // Reset to first slide instantly
      } else {
        api.scrollNext(); // Normal next slide
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  // Manual navigation for dots - only for original slides
  const scrollToSlide = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <section className="bg-[linear-gradient(180deg,rgba(20,232,147,0.25)_0%,rgba(6,4,12,0.25)_100%)] text-white py-16 rounded-2xl">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="flex items-center justify-center gap-2 text-2xl text-gray-300 mb-2">
            <Star className="w-6 h-6 text-gray" />
            Social proof & Credibility
          </p>

          <h2 className="text-3xl sm:text-5xl mb-4">
            What our investors say about us
          </h2>

          <p className="text-gray-400 mb-5 text-sm max-w-[500px] mx-auto">
            Tech Tren shines with investors like you! See what real investors have to say
            about our best-in-class prop AI-based investment firm.
          </p>

          <div className="flex items-center justify-center gap-3 mt-5">
            <span className="font-medium">Excellent</span>
            <div className="flex justify-center">
              <img
                src={Stars}
                alt="5 star rating"
                className="h-[24px] w-auto"
              />
            </div>
            <span className="text-white-400 text-sm">
              5.0 rating from 1,650 reviews
            </span>
          </div>
        </div>

        {/* Testimonial Carousel - WITH DUPLICATED SLIDES */}
        <div className="max-w-7xl mx-auto mb-16">
          <Carousel 
            setApi={setApi} 
            className="w-full"
            opts={{
              align: "start",
              loop: false, // We handle loop manually with duplicated slides
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem 
                  key={`${testimonial.id}-${index}`} 
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/4"
                >
                  <div className="h-full p-1">
                    <Card className="bg-transparent border-gray-600 shadow-lg border h-full">
                      <CardContent className="p-6 h-full flex flex-col">
                        {/* Rating Section - Left Aligned */}
                        <div className="flex items-center gap-3 mb-4">
                          <img
                            src={Stars}
                            alt="star rating"
                            className="h-5 w-auto"
                          />
                          <span className="text-2xl font-bold text-white">
                            {testimonial.rating}
                          </span>
                          
                        </div>
                        
                        {/* Testimonial Text - Left Aligned */}
                        <div className="mb-6 flex-grow">
                          <p className="text-gray-300 text-[15px] leading-[1.6] text-left">
                            {testimonial.text}
                          </p>
                        </div>
                        
                        {/* Author Info - Left Aligned */}
                        <div className="text-left mt-auto">
                          <p className="font-semibold text-white text-[15px] mb-1">
                            {testimonial.name}
                          </p>
                          <p className="text-gray-400 text-[13px]">
                            {testimonial.time}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Dots - Only for original testimonials */}
          {count > 0 && (
            <div className="mt-8 flex items-center justify-center gap-3 py-3 px-6 bg-black/90 rounded-[100px] max-w-max mx-auto border border-gray-700/50">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSlide(index)}
                  className={cn(
                    "rounded-full transition-all duration-300 ease-out cursor-pointer",
                    current === index 
                      ? "bg-white w-8 h-2" // Active dot - wider
                      : "bg-gray-600 w-2 h-2 hover:bg-gray-400" // Inactive dots - same size
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer CTA */}
        <div className="text-center">
          <p className="text-gray-400 text-[15px] mb-8">
            Join the 10,000+ investment firms network sharing insights
          </p>
          
          {/* Logo Marquee Section */}
          <LogoMarquee />
        </div>
      </div>
    </section>
  );
}