import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
// import gradientGraph from '../../../assets/Home/gradient-graph.png'
import gradientGraph from '../../../assets/Home/gradient-graph.png'
import currencyEht from '../../../assets/Home/currency-ethereum.svg'
import lightBulb from '../../../assets/Home/lightbulb-02.svg'
import sheild from '../../../assets/Home/shield-tick.svg'
import marketSvg from '../../../assets/Home/bar-line-chart.svg'
import marketchartGraph from '../../../assets/Home/chart-breakout-square.svg'
import singleBox from '../../../assets/Home/singlebox.png';
import arrowUp from '../../../assets/Home/arrow-up.svg';

export default function RevolutionPage() {
    return (
        <div className="relative pt-32 pb-5 mx-auto px-6 max-w-6xl">
            <h1 className="mx-auto max-w-3xl text-center text-balance text-4xl md:text-5xl font-light pb-16">Revolutionizing the
                Investment worldwide</h1>

            <div className="">
                <img src={singleBox} alt="box" className="absolute -right-[450px] top-10 object-contain w-1/2" />
                <div className="purple-shadow top-10 -right-[400px]"></div>
            </div>

            <Card className="relative rounded-4xl bg-[#0B0B0E] border text-white shadow-lg pr-1 pt-1">

                <CardContent className="flex flex-col justify-between h-full pr-0">
                    <div className="flex items-end justify-between">
                        <p className="text-sm text-gray-400 mb-2 flex items-center gap-2">
                            <span className="inline-block size-5">
                                <img src={marketchartGraph} alt="graph" className="opacity-50" />
                            </span>
                            Ask anything
                        </p>
                        <div className="relative inset-0 w-3/4 -mt-1 -mr-1 overflow-visible">
                            <img
                                src={gradientGraph}
                                alt="Financial Graph Background"
                                className="w-full h-full object-cover ml-auto opacity-70 rounded-tr-4xl"
                            />
                            <div className="absolute top-20 -left-30">
                                <Tag label="Trading strategies" imgVal={lightBulb} />
                            </div>
                            <div className="absolute -bottom-5 left-30">
                                <Tag label="Risk management" imgVal={sheild} />
                            </div>
                            <div className="absolute -top-4 right-30">
                                <Tag label="Stock and crypto insights" imgVal={currencyEht} />
                            </div>
                            <div className="absolute -right-10 bottom-10">
                                <Tag label="Market analysis and trends" imgVal={marketSvg} />
                            </div>
                            <div className="absolute right-2/6 top-25 w-2/5">
                                <Input label="What can i help you with?" />
                            </div>
                        </div>
                    </div>
                    <h2 className="text-3xl font-semibold">Financial GPT <ArrowRight className="inline w-6 h-6 ml-1" /></h2>
                    <p className="text-gray-400 mt-3 max-w-3xl">
                        Ask me anything about financial markets, trading strategies, stock analysis, economic trends, or investment insights.
                        I’m here to help you make informed financial decisions.
                    </p>

                </CardContent>
            </Card>



        </div>
    )
}


export function Tag({ label, imgVal }: { label: string, imgVal: string }) {
    return (
        <div className="px-6 py-2 bg-[#141418]/70 rounded-full text-sm flex items-center gap-2 border border-white/20 hover:bg-[#1a1a1f]/70 transition-all backdrop-blur-md backdrop-saturate-150">
            <span className="inline-block">
                <img src={imgVal} alt="" />
                {/* {imgVal} */}
            </span>
            {label}
            <span>
                <img src={arrowUp} alt="arrow" className="w-2 h-2 ml-3" />
            </span>
        </div>
    )
}


export function Input({ label }: { label: string }) {
    return (
        <div className="glass text-white px-4 py-2 flex items-center justify-between rounded-full">
            <input
                type="text"
                name="revolution-inp"
                id="revolution-inp"
                placeholder={label}
                className="outline-0 bg-transparent opacity-70 w-full"
            // disabled
            />
        </div>
    )
}

