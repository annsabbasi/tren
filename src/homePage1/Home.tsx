import { Landing } from './components/LandingPage'
import NewPage from './components/NewPage'
import RevolutionPage from './components/RevolutionPage'
import SocialFeedSection from './components/SocialFeedSection'
import HowItWorksSection from './components/HowItWorksSection'

export default function Home() {
    return (
        <div className='max-w-6xl mx-auto'>
            <Landing />
            <RevolutionPage />
            <NewPage />
            <SocialFeedSection />
            <HowItWorksSection />
            {/* <New /> */}
        </div>
    )
}
