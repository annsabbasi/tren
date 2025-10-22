import { useState } from "react";
import { ChevronDown, X, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    DropdownMenu,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Logo from "../assets/Home/logo.png";
import flag from "../assets/Home/Flags.svg";

export default function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <>
            {/* Desktop Navbar */}
            <header className="glass w-3/4 text-white px-6 py-2 flex items-center justify-between border !rounded-full left-1/2 -translate-x-1/2 mx-auto fixed z-50 mt-6 max-w-6xl">
                <div className="flex items-center gap-12">
                    <div className="flex items-center gap-2">
                        <img src={Logo} alt="Tech Tren Logo" className="w-32" />
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center gap-8 text-sm">
                        <DropdownMenu>
                            <DropdownMenuTrigger className="flex items-center gap-2 hover:text-gray-300 text-sm select-none cursor-pointer">
                                Products <ChevronDown className="w-4 h-4" />
                            </DropdownMenuTrigger>
                        </DropdownMenu>

                        <a href="#" className="hover:text-gray-300 text-sm select-none">
                            Pricing
                        </a>

                        <DropdownMenu>
                            <DropdownMenuTrigger className="flex items-center gap-2 hover:text-gray-300 text-sm select-none cursor-pointer">
                                Resources <ChevronDown className="w-4 h-4" />
                            </DropdownMenuTrigger>
                        </DropdownMenu>

                        <a href="#" className="hover:text-gray-300 text-sm select-none">
                            About
                        </a>
                    </nav>
                </div>

                {/* Right Side (Desktop Buttons + Language) */}
                <div className="hidden md:flex items-center gap-2">
                    <div className="flex items-center gap-2 border-l border-gray-700 pl-10 pr-4 relative">
                        <img src={flag} alt="Language flag" />
                        <DropdownMenu>
                            <DropdownMenuTrigger className="flex items-center gap-1 outline-0 focus:outline-none relative">
                                EN
                            </DropdownMenuTrigger>
                        </DropdownMenu>
                    </div>

                    <Button
                        variant="ghost"
                        className="text-white hover:text-gray-300 rounded-full cursor-pointer"
                        style={{ backgroundColor: "rgba(55, 65, 81, 0.25)" }}
                    >
                        Sign in
                    </Button>

                    <Button className="bg-white text-black rounded-full px-4 hover:bg-gray-200 font-semibold cursor-pointer hover:opacity-90 transition-all">
                        Get free demo
                    </Button>
                </div>

                {/* Mobile Sheet Trigger */}
                <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
                    <SheetTrigger asChild>
                        <button className="md:hidden block text-white focus:outline-none">
                            <Menu className="w-6 h-6" />
                        </button>
                    </SheetTrigger>

                    <SheetContent
                        side="left"
                        className="w-full bg-[#0b0b0b] text-white border-0 p-0 overflow-y-auto"
                    >
                        {/* Header inside sidebar */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-800">
                            <div className="flex items-center gap-2">
                                <img src={Logo} alt="Tech Tren Logo" className="w-28" />
                            </div>

                            {/* Close Button */}
                            <SheetClose className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none">
                                <X className="h-6 w-6" />
                                <span className="sr-only">Close</span>
                            </SheetClose>
                        </div>

                        {/* Language Selector */}
                        <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-800">
                            <img src={flag} alt="Language flag" className="w-6" />
                            <span>EN</span>
                        </div>

                        {/* Mobile Navigation with Accordion */}
                        <div className="p-6">
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="products" className="border-b border-gray-800">
                                    <AccordionTrigger className="text-white font-medium text-base hover:no-underline py-4">
                                        Products
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-300 pt-2">
                                        <div className="space-y-3 pl-4">
                                            <a href="#" className="block py-2 hover:text-white transition-colors">Financial GPT</a>
                                            <a href="#" className="block py-2 hover:text-white transition-colors">Price Prediction</a>
                                            <a href="#" className="block py-2 hover:text-white transition-colors">News & AI Insights</a>
                                            <a href="#" className="block py-2 hover:text-white transition-colors">Watchlists</a>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>

                                <a
                                    href="#"
                                    className="flex items-center justify-between py-4 border-b border-gray-800 text-white font-medium text-base hover:text-gray-300 transition-colors"
                                >
                                    Pricing
                                </a>

                                <AccordionItem value="resources" className="border-b border-gray-800">
                                    <AccordionTrigger className="text-white font-medium text-base hover:no-underline py-4">
                                        Resources
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-300 pt-2">
                                        <div className="space-y-3 pl-4">
                                            <a href="#" className="block py-2 hover:text-white transition-colors">Documentation</a>
                                            <a href="#" className="block py-2 hover:text-white transition-colors">Blog</a>
                                            <a href="#" className="block py-2 hover:text-white transition-colors">FAQs</a>
                                            <a href="#" className="block py-2 hover:text-white transition-colors">Support</a>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>

                                <a
                                    href="#"
                                    className="flex items-center justify-between py-4 border-b border-gray-800 text-white font-medium text-base hover:text-gray-300 transition-colors"
                                >
                                    About
                                </a>
                            </Accordion>

                            {/* Bottom Buttons */}
                            <div className="mt-8 space-y-4">
                                <Button className="w-full rounded-full text-black font-semibold bg-white hover:bg-gray-200">
                                    Get free demo
                                </Button>
                                <Button
                                    variant="ghost"
                                    className="w-full rounded-full text-white font-semibold border border-gray-600 hover:bg-gray-800"
                                >
                                    Sign in
                                </Button>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </header>
        </>
    );
}