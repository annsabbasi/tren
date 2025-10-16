import AiStrategies from './components/AiStrategies'
import { Landing } from './components/LandingPage'
import PricingPage from './components/PricingPage'
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
            {/* <New /> */}
        </div>
    )
}
