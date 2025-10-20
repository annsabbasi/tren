import AiStrategies from './components/AiStrategies'
import HowItWorksSection from './components/HowItWorksPage'
import { Landing } from './components/LandingPage'
import OurInvestorCard from './components/OurInvestorCard'
import PreFooter from './components/PreFooter'
import PricingPage from './components/pricing/PricingPage'
import RevolutionBullCard from './components/RevolutionBullCard'
import RevolutionPage from './components/RevolutionPage'
import RevolutionSlider from './components/RevolutionSlider'
import SocialFeeds from './components/SocialFeeds'

export default function Home() {
    return (
        <div className='mx-auto'>
            <Landing />
            <RevolutionPage />
            <RevolutionBullCard />
            <RevolutionSlider />
            <OurInvestorCard />
            <AiStrategies />
            <HowItWorksSection />
            <PricingPage />
            <SocialFeeds />
            <PreFooter />
        </div>
    )
}
