import LogoSm from '../../../assets/Home/logosm.svg';
import AiStrategiesGIF from '../../../assets/Home/aiStrategiesGIT.gif';
import { Input, Tag } from './RevolutionPage';

import currencyEht from '../../../assets/Home/currency-ethereum.svg'
import lightBulb from '../../../assets/Home/lightbulb-02.svg'
import sheild from '../../../assets/Home/shield-tick.svg'
import marketSvg from '../../../assets/Home/bar-line-chart.svg'
import singleBox from '../../../assets/Home/singlebox.png';
import AiStrategyVd from '../../../assets/Home/HOMEPAGE_HEADER_WEB.mp4';

export default function AiStrategies() {
    return (
        // <section className='relative px-5 py-28 max-w-6xl mx-auto'>
        <section className='relative py-28 pt-12 mx-auto'>
            {/* Add a container div with higher z-index for content */}
            <div className='relative max-w-6xl mx-auto'>
                <div className=' flex items-center justify-between gap-8 mb-20'>
                    <h1 className='text-5xl'>AI Says: 65% chance of upward trend.</h1>
                    <p className='max-w-xl text-sm text-gray-300'>Tech Tren operate with full transparency, directly passing your investment to the market, ensuring fair pricing and execution. With a commitment to regulatory compliance, they provide a secure environment that protects your investments..</p>
                </div>

                <div className='!bg-black relative ai-strategies-main w-4/5 mx-auto !overflow-visible'>
                    <div className='flex items-center justify-center flex-col p-4 gap-4 py-20'>
                        <img src={LogoSm} alt="logo" className='w-12' />
                        <h3 className='text-4xl'>Welcome to Financial GPT</h3>
                        <p className='max-w-xl text-base text-gray-400 text-center'>Ask me anything about financial markets, trading strategies, stock analysis, economic trends, or investment insights. I'm here to help you make informed financial decisions.</p>
                        <div className='w-full h-full relative'>
                            <img src={AiStrategiesGIF} alt="gif" className='w-2/5 h-40 mx-auto' />
                            {/* <div className='ai-gif-gradient absolute top-10 right-68 w-2/5 h-2/5'></div> */}
                        </div>
                        <div className=" right-2/6 top-25 w-2/5">
                            <Input label="What can i help you with?" />
                        </div>
                    </div>
                    <div className="!absolute -right-20 top-[58%] w-72 z-[1]">
                        <Tag label="Market analysis and trends" imgVal={marketSvg} />
                    </div>
                    <div className="!absolute top-20 -left-30 z-[1]">
                        <Tag label="Trading strategies" imgVal={lightBulb} />
                    </div>
                    <div className="!absolute top-68 left-10 z-[1]">
                        <Tag label="Risk management" imgVal={sheild} />
                    </div>
                    <div className="!absolute top-10 right-10 z-[1]">
                        <Tag label="Stock and crypto insights" imgVal={currencyEht} />
                    </div>
                </div>

                <div className="">
                    <img src={singleBox} alt="box" className="absolute -left-[200px] -bottom-30 object-contain w-[60%]" />
                    <div className="ai-strategy-shade-purple -bottom-20 -left-[300px]"></div>
                </div>


                <div className="">
                    <img src={singleBox} alt="box" className="absolute -right-[200px] top-32 object-contain w-[60%]" />
                    <div className="ai-strategy-shade-green top-60 -right-[400px]"></div>
                </div>
            </div>

            {/* <div className="absolute top-48 h-[740px]  w-full -z-10 overflow-hidden"> */}
            <div className="absolute top-40 h-full w-full -z-10 overflow-hidden">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-50"
                >
                    <source src={AiStrategyVd} />
                </video>

                <div
                    className="absolute top-0 left-0 w-full h-48"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, transparent 100%)',
                        backdropFilter: 'blur(8px)',
                        WebkitBackdropFilter: 'blur(8px)'
                    }}
                />
            </div>

        </section >
    )
}