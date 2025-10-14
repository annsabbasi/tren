import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Logo from '../assets/homePage1/logo.png'
import flag from "../assets/homePage1/Flags.svg"

export default function Navbar() {
    const [language, setLanguage] = useState("EN")

    return (
        <header className="glass w-3/4 text-white px-6 py-3 flex items-center justify-between border rounded-4xl left-1/2 -translate-x-1/2 mx-auto fixed z-10 mt-6 max-w-6xl">
            <div className="flex items-center gap-14">
                <div className="flex items-center gap-2">
                    {/* Replace the src below with your own logo */}
                    <img src={Logo} alt="Tech Tren Logo" className="w-32 " />
                </div>

                {/* Nav Links */}
                <nav className="hidden md:flex items-center gap-6 text-sm">
                    {/* Products Dropdown */}
                    <DropdownMenu >
                        <DropdownMenuTrigger className="flex items-center gap-1 hover:text-gray-300 text-sm select-none">
                            Products <ChevronDown className="w-4 h-4" />
                        </DropdownMenuTrigger>
                        {/* <DropdownMenuContent className="bg-white text-black">
                            <DropdownMenuItem>Product 1</DropdownMenuItem>
                            <DropdownMenuItem>Product 2</DropdownMenuItem>
                            <DropdownMenuItem>Product 3</DropdownMenuItem>
                        </DropdownMenuContent> */}
                    </DropdownMenu>

                    {/* Pricing */}
                    <a href="#" className="hover:text-gray-300 text-sm select-none">Pricing</a>

                    {/* Resources Dropdown */}
                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center gap-1 hover:text-gray-300 text-sm select-none">
                            Resources <ChevronDown className="w-4 h-4" />
                        </DropdownMenuTrigger>
                        {/* <DropdownMenuContent className="bg-white text-black">
                            <DropdownMenuItem>Docs</DropdownMenuItem>
                            <DropdownMenuItem>Blog</DropdownMenuItem>
                            <DropdownMenuItem>Community</DropdownMenuItem>
                        </DropdownMenuContent> */}
                    </DropdownMenu>

                    {/* About */}
                    <a href="#" className="hover:text-gray-300 text-sm select-none">About</a>
                </nav>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
                {/* Language Selector */}
                <div className="flex items-center gap-1 border-l border-gray-700 pl-12">
                    {/* <Globe className="w-4 h-4" /> */}
                    <img src={flag} alt="" />
                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center gap-1">
                            {language}
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-white text-black">
                            <DropdownMenuItem onClick={() => setLanguage("EN")}>EN</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setLanguage("AR")}>AR</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setLanguage("ES")}>ES</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                {/* Sign In */}
                <Button variant="ghost" className="text-white hover:text-gray-300">
                    Sign in
                </Button>

                {/* Get Free Demo */}
                <Button className="bg-white text-black rounded-full px-4 hover:bg-gray-200">
                    Get free demo
                </Button>
            </div>
        </header>
    )
}
