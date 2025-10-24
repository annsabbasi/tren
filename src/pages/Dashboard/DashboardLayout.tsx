import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from './DashboardSidebar';
import DashboardHeader from './DashboardHeader';

const DashboardLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <div className="flex min-h-screen py-4 gap-2">
            <div className='sticky border'>
                <DashboardSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            </div>

            <div className="flex-1 flex flex-col">
                <DashboardHeader />

                <main className="flex-1 px-6 pb-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;