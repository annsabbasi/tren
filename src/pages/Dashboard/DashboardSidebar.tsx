import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
    LayoutDashboard,
    Lightbulb,
    Bookmark,
    Target,
    BarChart3,
    Bell,
    BookText,
    AlignLeft,
    User,
    Settings,
    HelpCircle,
    Headphones,
    LogOut,
} from "lucide-react";

interface DashboardSidebarProps {
    sidebarOpen: boolean;
    setSidebarOpen: (open: boolean) => void;
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({
    sidebarOpen,
}) => {
    const navigate = useNavigate();
    const location = useLocation();

    const mainMenu = [
        { path: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
        { path: "/dashboard/financial-gpt", icon: Lightbulb, label: "Financial GPT" },
        { path: "/dashboard/watchlist", icon: Bookmark, label: "Watchlist" },
        { path: "/dashboard/predictions", icon: Target, label: "Predictions" },
        { path: "/dashboard/charts", icon: BarChart3, label: "Charts" },
        { path: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
        { path: "/dashboard/financial-gpt", icon: Lightbulb, label: "Financial GPT" },
        { path: "/dashboard/watchlist", icon: Bookmark, label: "Watchlist" },
        { path: "/dashboard/predictions", icon: Target, label: "Predictions" },
        { path: "/dashboard/charts", icon: BarChart3, label: "Charts" },
    ];

    const secondaryMenu = [
        { path: "/dashboard/news", icon: Bell, label: "News" },
        { path: "/dashboard/journal", icon: BookText, label: "Journal" },
        { path: "/dashboard/threads", icon: AlignLeft, label: "Threads" },
        { path: "/dashboard/account", icon: User, label: "Account" },
    ];

    const bottomMenu = [
        { path: "/dashboard/settings", icon: Settings, label: "Settings" },
        { path: "/dashboard/help", icon: HelpCircle, label: "Get help" },
        { path: "/dashboard/support", icon: Headphones, label: "Support" },
    ];

    const isActive = (path: string) => location.pathname === path;

    const renderMenu = (items: any[]) =>
        items.map((item) => (
            <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all ${isActive(item.path)
                    ? "text-green-400 font-semibold"
                    : "text-gray-400 hover:text-white"
                    }`}
            >
                <item.icon size={18} />
                {sidebarOpen && <span>{item.label}</span>}
            </button>
        ));

    return (
        <div
            className={`${sidebarOpen ? "w-64" : "w-20"
                } transition-all duration-300 flex flex-col justify-between border !border-l-transparent  rounded-tr-3xl rounded-br-3xl glass h-full`}
        >
            {/* Top Section */}
            <div>
                <div className="flex items-center gap-2 p-4">
                    <div className="w-8 h-8 bg-gray-700 rounded-full" />
                    {sidebarOpen && <span className="font-bold text-lg">Tech Tren</span>}
                </div>

                {/* Main Navigation */}
                <div className="mt-2 space-y-1">{renderMenu(mainMenu)}</div>

                {/* Secondary Navigation */}
                <div className="mt-5 space-y-1">{renderMenu(secondaryMenu)}</div>
            </div>

            {/* Bottom Section */}
            <div className="mb-4">
                <div className="space-y-1">{renderMenu(bottomMenu)}</div>
                <button
                    onClick={() => navigate("/logout")}
                    className="w-full flex items-center gap-3 px-4 py-2.5 mt-2 rounded-lg text-green-500 hover:text-green-400 transition-all"
                >
                    <LogOut size={18} />
                    {sidebarOpen && <span>Logout</span>}
                </button>
            </div>
        </div>
    );
};

export default DashboardSidebar;
