import { Landing } from './components/LandingPage'
import NewPage from './components/NewPage'
import OurInvestorCard from './components/OurInvestorCard'
import RevolutionPage from './components/RevolutionPage'

export default function Home() {
    return (
        <div className='max-w-6xl mx-auto'>
            <Landing />
            <RevolutionPage />
            <NewPage />
            <OurInvestorCard/>
            {/* <New /> */}
        </div>
    )
}
