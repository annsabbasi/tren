import { Button } from "@/components/ui/button"
import { Star, ArrowRight, ChevronRight } from "lucide-react"
import dashboardImg from '../../assets/homePage1/dashboard-img.png'
import dashboardImg2 from '../../assets/homePage1/dashboard-i2.png'
import dashboardImg3 from '../../assets/homePage1/dashboard-i3.png'
import midgradient from '../../assets/homePage1/midgradient.png';
import flash from '../../assets/homePage1/flash.png';
import play from '../../assets/homePage1/play.svg';
import userReview from '../../assets/homePage1/users-review.png';
import { motion } from 'framer-motion';

function AnimatedGradient() {
    return (
        <motion.div
            className="absolute w-[1500px] h-[600px] top-0 left-1/2 -translate-x-1/2 z-[-1] bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${midgradient})`,
            }}
            animate={{
                x: ['-25%', '25%', '-25%'], // move left → right → left
            }}
            transition={{
                duration: 30, // total time for a full back-and-forth cycle
                repeat: Infinity,
                ease: 'easeInOut', // smooth easing
            }}
        />
    );
}

function StatBubble() {
    return (
        <div className="bg-white/5 backdrop-blur-sm
 rounded-2xl px-6 py-2 border-r border-l">

            <div className="flex items-center gap-4">
                {/* <Zap className="brand" size={16} /> */}

                <img src={flash} alt="light" className="size-10" />
                <div className="flex text-sm flex-col">
                    <span className="text-muted-foreground text-base">10,000+</span>
                    <p className="mt-1 text-xs text-muted-foreground">investors sharing insights.</p>
                </div>
            </div>
        </div>
    )
}

function TrustBubble() {
    return (
        <div className="bg-white/5 backdrop-blur-sm
 rounded-2xl px-6 py-2 border-r border-l">
            <div className="flex items-center gap-4">
                {/* <Zap className="brand" size={16} /> */}
                <img src={userReview} alt="light" className="w-24" />
                <div className="flex text-sm flex-col">
                    <span className="text-gray-300 text-xs">5.0 rating from 1,650+ patients</span>
                    <div className="flex gap-1 items-center">
                        <div className="flex items-center text-amber-400">
                            <Star size={10} fill="currentColor" />
                            <Star size={10} fill="currentColor" />
                            <Star size={10} fill="currentColor" />
                            <Star size={10} fill="currentColor" />
                            <Star size={10} fill="currentColor" />
                        </div>
                        {/* <div>
                            <img src={userReview} alt="users" className="w-14 h-10" />
                        </div> */}
                        <p className="mt-1">Trustpilot</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function AppMock() {
    return (
        <div className="relative">

            <div className="">
                <img src={dashboardImg} alt="dashboard" className="w-4/5 mx-auto rounded-4xl border-t border-b border-gray-50/50" />
            </div>

            <div className="hidden md:block absolute left-0 top-14 backdrop-blur-lg">
                <img src={dashboardImg3} alt="dashboard" className="w-76 h-58" />
            </div>
            <div className="hidden md:block absolute -right-10 bottom-6 w-72 glass rounded-2xl p-4">

                <img src={dashboardImg2} alt="dashboard" />
            </div>
        </div>
    )
}

export function Landing() {
    return (
        // <div className="landing-main landing-gradient relative radial-glow">
        <div className="landing-main relative radial-glow">
            <AnimatedGradient />
            {/* <div className="bg-grid absolute inset-0 -z-10" aria-hidden /> */}
            <div className="z-10 mx-auto max-w-6xl px-4 pt-24 md:pt-32">
                <div className="mb-6 mx-auto flex justify-center border w-fit rounded-4xl px-4 py-1 items-center gap-1 cursor-pointer">

                    🌟 What makes you unique
                    <span className=" ml-3"> <ArrowRight size={16} /> </span>
                </div>

                <h1 className="mx-auto max-w-5xl text-center text-balance text-4xl md:text-6xl font-semibold">
                    Smarter Tech. Smarter Investing.
                </h1>
                <p className="mx-auto mt-5 max-w-lg text-center text-gray-300 text-lg font-extralight">
                    AI-powered predictions, real-time data, and investor communities — all in one platform.
                </p>

                <div className="mt-6 flex items-center justify-center gap-3">
                    {/* <Button className="rounded-full px-3 pl-5 py-5 text-primary-foreground special-btn cursor-pointer hover:scale-110 transition-all ">
                        Start free trial
                        <span className=""> <ChevronRight size={14} /> </span>
                    </Button> */}
                    <Button
                        className="rounded-full px-3 pl-5 py-5 text-primary-foreground special-btn cursor-pointer hover:scale-110 transition-all"
                        style={{
                            boxShadow: `
      20px 0px 50px 0px rgba(40, 173, 155, 0.5),
      -20px 0px 50px 0px rgba(78, 58, 172, 0.5)
    `,
                        }}
                    >
                        Start free trial
                        <span className="ml-1">
                            <ChevronRight size={14} />
                        </span>
                    </Button>

                    <div className="flex items-center justify-center px-3 rounded-4xl ml-4 hover:scale-110 transition-all">
                        {/* <CirclePlay className="w-6 h-6 mr-2" /> */}
                        <img src={play} alt="play" className="size-7 mr-2" />
                        <Button variant="outline" className="rounded-full px-0 py-5 !bg-transparent border-none">
                            See demo
                        </Button>
                    </div>
                </div>

                <div className="-mt-6 flex items-center justify-between">
                    <div className="hidden md:block">
                        <StatBubble />
                    </div>
                    <div className="hidden md:block">
                        <TrustBubble />
                    </div>
                </div>

                <div className="mt-8 md:mt-12">
                    <AppMock />
                </div>
            </div>

        </div >
    )
}
