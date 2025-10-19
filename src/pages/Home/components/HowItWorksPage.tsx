import { Card, CardContent } from "@/components/ui/card";
import PuzzlePiece from "../../../assets/Home/puzzle-piece.svg";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import play from '../../../assets/Home/play.svg';
import TechCardImg1 from '../../../assets/Home/techCardImg1.svg';
import Signals from '../../../assets/Home/signals.gif';
import TechCardImg3 from '../../../assets/Home/techCardImg3.svg';
import VectorInput from '../../../assets/Home/vectorInput.svg';
import singleBox from '../../../assets/Home/singlebox.png';

export default function HowItWorksSection() {
    return (
        <section className="relative w-full flex flex-col items-center justify-center pb-20 pt-8 px-4 text-center max-w-6xl mx-auto">
            {/* Top: small text link */}
            <div className="text-sm mb-5 flex items-center justify-center gap-2">
                <img src={PuzzlePiece} alt="PuzzlePiece" className="w-4 h-4" />
                <p className="text-gray-400">
                    How it works
                </p>
            </div>

            {/* Main title */}
            <h1 className="text-4xl md:text-5xl font-medium mb-2">
                Tech Tren – your personal
            </h1>
            <h2 className="text-4xl md:text-5xl font-medium mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                    AI consultant for Investment
                </span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm md:text-base text-muted-foreground mb-16 text-gray-400">
                Find out if you're the investor – in 3 minutes
            </p>

            {/* 3 Step Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mt-8">

                {/* Step 1 */}
                <div className="group">
                    <Card className="relative flex flex-col items-center text-center p-6 bg-transparent hover:shadow-lg transition-all duration-300 border border-border group-hover:border-[#28AD9B] glass-dark2">
                        {/* Step number badge with gradient on hover */}
                        <div className="absolute -top-5 bg-[#06040C] border border-border rounded-full w-10 h-10 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[#28AD9B] group-hover:to-[#4E3AAC] group-hover:border-transparent transition-all duration-300">
                            <span className="text-lg font-medium group-hover:text-white">1</span>
                        </div>

                        <CardContent className="pt-6 space-y-6">
                            <h3 className="text-xl font-medium">Search or Ask</h3>
                            <div className="w-full space-y-2">
                                <span className="">
                                    <img src={TechCardImg1} alt="TechCardImg1" className="border rounded-2xl h-64 transition-all duration-300" />
                                </span>
                            </div>
                            <p className="text-sm text-muted-foreground px-10 mb-10 mt-8 text-gray-400">
                                Enter your stock, crypto, or question.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Step 2 */}
                <div className="group">
                    <Card className="relative flex flex-col items-center text-center p-6 bg-transparent hover:shadow-lg transition-all duration-300 border border-border group-hover:border-[#28AD9B] glass-dark2">
                        {/* Step number badge with gradient on hover */}
                        <div className="absolute -top-5 bg-[#06040C] border border-border rounded-full w-10 h-10 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[#28AD9B] group-hover:to-[#4E3AAC] group-hover:border-transparent transition-all duration-300">
                            <span className="text-lg font-medium group-hover:text-white">2</span>
                        </div>

                        <CardContent className="pt-6 space-y-6">
                            <h3 className="text-xl font-medium">AI Analysis</h3>
                            <div className="w-full space-y-2">
                                <div className="relative border rounded-2xl flex items-end justify-end h-64 px-6 transition-all duration-300">
                                    <img src={VectorInput} alt="VectorInput" className="self-end" />

                                    {/* Updated Signals GIF with blend mode */}
                                    <div className="absolute w-36 h-auto left-1/2 -translate-x-1/2 top-2">
                                        <img
                                            src={Signals}
                                            alt="Signals"
                                            className="w-full h-full object-contain"
                                        />
                                        {/* Gradient overlay with mix blend mode */}
                                        <div
                                            className="absolute inset-0 mix-blend-color"
                                            style={{
                                                background: 'linear-gradient(275.19deg, #14E893 -15.5%, #5131AD 98.25%)',
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground px-10 mb-10 mt-8 text-gray-400">
                                Our AI analyzes market data and trends.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Step 3 */}
                <div className="group">
                    <Card className="relative flex flex-col items-center text-center p-6 bg-transparent hover:shadow-lg transition-all duration-300 border border-border group-hover:border-[#28AD9B] glass-dark2">

                        {/* Step number badge with gradient on hover */}
                        <div className="absolute -top-5 bg-[#06040C] border border-border rounded-full w-10 h-10 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[#28AD9B] group-hover:to-[#4E3AAC] group-hover:border-transparent transition-all duration-300">
                            <span className="text-lg font-medium group-hover:text-white">3</span>
                        </div>

                        <CardContent className="pt-6 space-y-6">
                            <h3 className="text-xl font-medium">Get Insights</h3>
                            <div className="w-full space-y-2">
                                <span className="">
                                    <img src={TechCardImg3} alt="TechCardImg3" className="border rounded-2xl h-64 transition-all duration-300" />
                                </span>
                            </div>
                            <p className="text-sm text-muted-foreground px-10 mb-10 mt-8 text-gray-400">
                                Receive actionable investment insights.
                            </p>
                        </CardContent>
                    </Card>
                </div>

            </div>

            <div className="mt-12 flex items-center justify-center gap-3 mb-12">
                <Button className="special-btn hover:scale-110 gradient-box-shadow">
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
                <img src={singleBox} alt="box" className="absolute -right-[500px] -bottom-36 object-contain w-1/2" />
                <div className="purple-shadow -right-[500px] -bottom-36"></div>
            </div>
        </section>
    );
}