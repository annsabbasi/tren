// import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    // DropdownMenuContent,
    // DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Logo from '../assets/Home/logo.png'
import flag from "../assets/Home/Flags.svg"

export default function Navbar() {
    // const [language, setLanguage] = useState("EN")

    return (
        <header className="glass w-3/4 text-white px-6 py-2 flex items-center justify-between border !rounded-full left-1/2 -translate-x-1/2 mx-auto fixed z-50 mt-6 max-w-6xl">
            <div className="flex items-center gap-12">
                <div className="flex items-center gap-2">
                    <img src={Logo} alt="Tech Tren Logo" className="w-32 " />
                </div>

                <nav className="hidden md:flex items-center gap-8 text-sm">
                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center gap-2 hover:text-gray-300 text-sm select-none cursor-pointer">
                            Products <ChevronDown className="w-4 h-4" />
                        </DropdownMenuTrigger>
                    </DropdownMenu>

                    <a href="#" className="hover:text-gray-300 text-sm select-none">Pricing</a>

                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center gap-2 hover:text-gray-300 text-sm select-none cursor-pointer">
                            Resources <ChevronDown className="w-4 h-4" />
                        </DropdownMenuTrigger>
                    </DropdownMenu>

                    <a href="#" className="hover:text-gray-300 text-sm select-none">About</a>
                </nav>
            </div>

            <div className="flex items-center gap-2">
                {/* Updated Language Selector */}
                <div className="flex items-center gap-2 border-l border-gray-700 pl-10 pr-4 relative">
                    <img src={flag} alt="Language flag" />
                    <DropdownMenu >
                        <DropdownMenuTrigger className="flex items-center gap-1 outline-0 focus:outline-none relative">
                            {/* {language} */}
                            EN
                        </DropdownMenuTrigger>
                        {/* <DropdownMenuContent
                            className="bg-white text-black min-w-[80px] absolute border"
                            align="end"
                            sideOffset={5}
                        >
                            <DropdownMenuItem onClick={() => setLanguage("EN")}>EN</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setLanguage("AR")}>AR</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setLanguage("ES")}>ES</DropdownMenuItem>
                        </DropdownMenuContent> */}
                    </DropdownMenu>
                </div>

                <Button variant="ghost" className="text-white hover:text-gray-300 rounded-full cursor-pointer" style={{ backgroundColor: 'rgba(55, 65, 81, 0.25)' }}>
                    Sign in
                </Button>

                <Button className="bg-white text-black rounded-full px-4 hover:bg-gray-200 font-semibold cursor-pointer hover:opacity-90 transition-all">
                    Get free demo
                </Button>
            </div>
        </header>
    )
}