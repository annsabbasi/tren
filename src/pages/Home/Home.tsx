import AiStrategies from './components/AiStrategies'
import { Landing } from './components/LandingPage'
import PreFooter from './components/PreFooter'
import PricingPage from './components/pricing/PricingPage'
import RevolutionBullCard from './components/RevolutionBullCard'
import RevolutionPage from './components/RevolutionPage'
import RevolutionSlider from './components/RevolutionSlider'

export default function Home() {
    return (
        <div className='mx-auto'>
            <Landing />
            <RevolutionPage />
            <RevolutionBullCard />
            <RevolutionSlider />
            <AiStrategies />
            <PricingPage />
            <PreFooter />
            {/* <New /> */}
        </div>
    )
}
