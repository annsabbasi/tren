import * as React from "react";
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

const testimonials = [
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
    text: "The age is user-friendly and the customer support was top-notch. Will definitely use again.",
    name: "Emily Wang",
    time: "15 mins ago"
  },
  {
    id: 5,
    rating: 4.7,
    text: "Amazing platform with great returns and excellent customer support!",
    name: "Robert Brown",
    time: "45 mins ago"
  },
  {
    id: 6,
    rating: 4.9,
    text: "The investment process is smooth and the returns are consistent.",
    name: "Lisa Taylor",
    time: "1 hr ago"
  },
  {
    id: 7,
    rating: 5.0,
    text: "Best investment platform I've ever used. Highly recommended!",
    name: "David Wilson",
    time: "2 hrs ago"
  },
  {
    id: 8,
    rating: 4.8,
    text: "Transparent fees and excellent service. Will continue investing.",
    name: "Maria Garcia",
    time: "3 hrs ago"
  }
];

// Company logos array with actual images
const companyLogos = [
  "supabase",
  "Voiceflow", 
  "n8n",
  "zep",
  "HOSTINGER",
  "NordPass"
];

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
      <div className="absolute left-0 top-0 bottom-0 w-30 bg-gradient-to-r from-[rgba(6,4,12,0.9)] to-transparent z-20 pointer-events-none"></div>
      
      {/* Right Shadow */}
      <div className="absolute right-0 top-0 bottom-0 w-30 bg-gradient-to-l from-[rgba(6,4,12,0.9)] to-transparent z-20 pointer-events-none"></div>
      
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
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const visibleCards = 4;
  const totalSlides = testimonials.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto slide with infinite loop
  React.useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Get current visible testimonials with infinite loop
  const getVisibleTestimonials = () => {
    const startIndex = currentIndex;
    const endIndex = startIndex + visibleCards;
    
    // If we need to wrap around the array
    if (endIndex > testimonials.length) {
      const overflow = endIndex - testimonials.length;
      return [
        ...testimonials.slice(startIndex),
        ...testimonials.slice(0, overflow)
      ];
    }
    
    return testimonials.slice(startIndex, endIndex);
  };

  const visibleTestimonials = getVisibleTestimonials();

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

        {/* Testimonial Carousel - Proper sliding carousel */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="relative overflow-hidden">
            {/* Carousel Container */}
            <div className="flex transition-transform duration-500 ease-in-out">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className="flex-shrink-0 w-1/4 px-3"
                  style={{ 
                    transform: `translateX(-${currentIndex * 100}%)`,
                    transition: 'transform 500ms ease-in-out'
                  }}
                >
                  <div className="bg-transparent border border-gray-600 rounded-lg p-6 shadow-lg h-full">
                    {/* Rating Section - Left Aligned */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl font-bold text-white">
                        {testimonial.rating}
                      </span>
                      <img
                        src={Stars}
                        alt="star rating"
                        className="h-5 w-auto"
                      />
                    </div>
                    
                    {/* Testimonial Text - Left Aligned */}
                    <div className="mb-6">
                      <p className="text-gray-300 text-[15px] leading-[1.6] text-left">
                        {testimonial.text}
                      </p>
                    </div>
                    
                    {/* Author Info - Left Aligned */}
                    <div className="text-left">
                      <p className="font-semibold text-white text-[15px] mb-1">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-400 text-[13px]">
                        {testimonial.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots - Black background with padding and rounded */}
          <div className="mt-8 flex items-center justify-center gap-3 py-3 px-6 bg-black rounded-[100px] max-w-max mx-auto">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-white w-8"
                    : "bg-gray-500 w-1.5 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center">
          <p className="text-white-400 text-[30px] mb-8">
            Join the 10,000+ investment firms network sharing insights
          </p>
          
          {/* Logo Marquee Section - Actual images from assets with shadow */}
          <LogoMarquee />
        </div>
      </div>
    </section>
  );
}