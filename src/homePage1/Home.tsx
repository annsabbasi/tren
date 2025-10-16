import { Landing } from './components/LandingPage'
import NewPage from './components/NewPage'
import RevolutionPage from './components/RevolutionPage'
import SocialFeedSection from './components/SocialFeedSection'

export default function Home() {
    return (
        <div className='max-w-6xl mx-auto'>
            <Landing />
            <RevolutionPage />
            <NewPage />
            <SocialFeedSection />
            {/* <New /> */}
        </div>
    )
}
