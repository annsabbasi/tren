import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion';
import { Star, ArrowRight, ChevronRight } from "lucide-react"
import dashboardImg from '../../../assets/Home/dashboard-img.webp'
import dashboardImg2 from '../../../assets/Home/dashboard-i2.png'
import dashboardImg3 from '../../../assets/Home/dashboard-i3.png'
import flash from '../../../assets/Home/flash.png';
import play from '../../../assets/Home/play.svg';
import userReview from '../../../assets/Home/users-review.png';
import DashboardMobile from '../../../assets/Home/Dashboard-Mobile.png';
import EllipseMobile from '../../../assets/Home/EllipseMobile.svg';
import SingleBox from '../../../assets/Home/singlebox.png';

function AnimatedGradient() {
    return (
        <motion.img
            src={EllipseMobile}
            alt="Animated gradient background"
            className="absolute -z-10 w-full h-full scale-150 sm:scale-[120%] translate-y-32 sm:translate-y-0"
            animate={{
                x: ['-25%', '25%', '-25%'],
            }}
            transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'easeInOut',
            }}
        />
    );
}

export function StatBubble() {
    return (
        <div className="backdrop-blur-sm rounded-[20px] px-8 py-4 shadow-[inset_1px_0_1px_rgba(255,255,255,0.1),inset_-1px_0_1px_rgba(255,255,255,0.1)]">
            <div className="flex items-center gap-4">
                <img src={flash} alt="light" className="size:8 sm:size-10" />
                <div className="flex text:xs sm:text-sm flex-col text-start">
                    <span className="text-muted-foreground text-base">10,000+</span>
                    <p className="mt-1 text-[10px] text-muted-foreground">investors sharing insights.</p>
                </div>
            </div>
        </div>
    )
}

export function TrustBubble() {
    return (
        <div className="backdrop-blur-sm rounded-[20px] px-5 py-4 shadow-[inset_1px_0_1px_rgba(255,255,255,0.2),inset_-1px_0_1px_rgba(255,255,255,0.2)]">
            <div className="flex items-center gap-4">
                <img src={userReview} alt="light" className="w-20 sm:w-24" />
                <div className="flex text-sm flex-col text-start">
                    <span className="text-gray-300 [10px] sm:text-xs">5.0 rating from 1,650+ patients</span>
                    <div className="flex gap-1 items-center">
                        <div className="flex items-center text-amber-400">
                            <Star size={10} fill="currentColor" />
                            <Star size={10} fill="currentColor" />
                            <Star size={10} fill="currentColor" />
                            <Star size={10} fill="currentColor" />
                            <Star size={10} fill="currentColor" />
                        </div>
                        <p className="mt-1">Trustpilot</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function AppMock() {
    return (
        <div className="relative hidden sm:block">

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

function MobileMock() {
    return (
        <div className="relative block sm:hidden">

            <span className="">
                <img src={DashboardMobile} alt="dashboard" className="w-[95%] mx-auto" />
            </span>
        </div>
    )
}

export function Landing() {
    return (
        <div className="landing-main relative radial-glow">
            <AnimatedGradient />
            <div className="relative z-10 mx-auto max-w-6xl px-4 pt-28 sm:pt-24 md:pt-36">
                <div className="mb-6 mx-auto flex justify-center border w-fit rounded-4xl px-4 py-1 items-center gap-1 cursor-pointer text-sm">
                    🌟 What makes you unique
                    <span className=" ml-3"> <ArrowRight size={16} /> </span>
                </div>

                <h1 className="mx-auto max-w-5xl text-center text-balance text-4xl md:text-6xl font-light">
                    Smarter Tech. Smarter Investing.
                </h1>
                <p className="mx-auto mt-3 px-12 sm:px-auto sm:mt-5 max-w-lg text-center text-gray-300 text-lg font-extralight">
                    AI-powered predictions, real-time data, and investor communities — all in one platform.
                </p>

                <div className="mt-6 flex items-center justify-center sm:flex-row flex-col gap-5 sm:gap-3">
                    <Button className="special-btn hover:scale-110 gradient-box-shadow w-2/3 sm:w-fit sm:py-5 sm:px-5 py-6 text-base">
                        Start free trial
                        <span className="ml-1">
                            <ChevronRight size={14} />
                        </span>
                    </Button>

                    <div className="flex items-center justify-center px-3 rounded-4xl ml-4 hover:scale-110 transition-all">
                        <img src={play} alt="play" className="size-7 mr-2" />
                        <Button variant="outline" className="rounded-full px-0 py-5 !bg-transparent border-none">
                            See demo
                        </Button>
                    </div>
                </div>

                <div className="-mt-6 flex items-center justify-center sm:justify-between absolute -bottom-24 sm:-bottom-2 left-1/2 -translate-x-1/2 sm:relative sm:left-auto sm:translate-x-0 w-full">
                    <div className="hidden sm:block">
                        <StatBubble />
                    </div>
                    <div className="block">
                        <TrustBubble />
                    </div>
                </div>

                <div className="mt-4 md:mt-12">
                    <AppMock />
                    <MobileMock />
                </div>
                <img src={SingleBox} alt="box" className="sm:hidden block absolute top-88 z-[-2] " />
            </div>

        </div >
    )
}
