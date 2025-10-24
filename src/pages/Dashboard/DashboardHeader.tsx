import { Bell } from 'lucide-react';

const DashboardHeader = () => {
    return (
        <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <h1 className="text-xl font-light">Welcome again, John doe!</h1>
            </div>
            <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-slate-800 rounded-lg relative transition-colors">
                    <Bell size={20} />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-cyan-400 rounded-full"></span>
                </button>
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center font-bold">
                    J
                </div>
            </div>
        </div>
    );
};

export default DashboardHeader;