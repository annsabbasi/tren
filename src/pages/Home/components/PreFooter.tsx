import { Button } from "@/components/ui/button";
import Logo from '../../../assets/Home/logosm.svg';
import play from '../../../assets/Home/play.svg';
import { ChevronRight } from "lucide-react";
import { StatBubble, TrustBubble } from "./LandingPage";
import singleBox from '../../../assets/Home/singlebox.png';
import TechTren from '../../../assets/Home/TechTren.svg';

const PreFooter = () => {
    return (
        <section className="relative w-full text-center sm:pt-40 md:px-12 max-w-6xl mx-auto sm:px-0 px-4 pt-24">

            <div className="relative max-w-5xl mx-auto space-y-10">
                <div className="absolute sm:top-28 sm:left-10 z-10 -bottom-20 left-1/5">
                    <StatBubble />
                </div>

                {/* --- Main Content Card --- */}
                <div className="relative border rounded-3xl p-10 md:p-16 shadow-lg w-full sm:!py-24 overflow-hidden py-14">
                    {/* Top bull icon placeholder */}
                    <div className="flex justify-center mb-6">
                        <img src={Logo} alt="logo" className="sm:w-14 sm:h-8 " />
                    </div>

                    {/* Headline */}
                    <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-8">
                        Stop trading blind. <br /> Start trading with AI.
                    </h1>

                    {/* CTA Buttons */}
                    <div className="sm:mt-8 mt-12 flex items-center justify-center sm:flex-row flex-col gap-5 sm:gap-3 w-full">
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


                    <div className="">
                        <img src={singleBox} alt="box" className="absolute sm:block hidden right-0 top-0 object-contain w-1/2" />
                        <div className="green-circled sm:block hidden absolute -top-20 -right-80"></div>
                    </div>

                    <div className="">
                        <img src={singleBox} alt="box" className="absolute -bottom-36 -left-48 object-contain w-1/2 sm:block hidden" />
                        <div className="purple-circled absolute -bottom-36 -left-60 sm:block hidden"></div>
                    </div>
                </div>

                {/* <div className="absolute !-right-24 bottom-24 md:right-10 w-88"> */}
                <div className="absolute sm:bottom-24 sm:right-10 w-88 -top-10 left-[15%]">
                    <TrustBubble />
                </div>
            </div>

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full">
                <img src={TechTren} alt="TechTren" className="w-full max-w-full" />
            </div>

            <div className="">
                <div className="purple-shadow sm:w-1/2 sm:h-96 bottom-20 sm:-right-[400px] right-0 w-full h-1/4 sm:hidden block"></div>
            </div>

        </section >
    );
};

export default PreFooter;
