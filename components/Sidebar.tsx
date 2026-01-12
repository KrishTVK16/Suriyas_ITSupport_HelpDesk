import React from 'react';
import { User, UserRole } from '../types';
import { Theme } from '../App';

interface SidebarProps {
    user: User;
    theme: Theme;
    onLogout: () => void;
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ user, theme, onLogout, activeTab, setActiveTab }) => {
    const isDark = theme === 'dark';

    const menuItems = user.role === UserRole.ADMIN ? [
        { id: 'dashboard', label: 'Command Hub', icon: 'fa-chart-network' },
        { id: 'tickets', label: 'Ticket Queue', icon: 'fa-ticket-alt' },
        { id: 'users', label: 'User Directory', icon: 'fa-users' },
        { id: 'settings', label: 'System Config', icon: 'fa-cogs' },
    ] : [
        { id: 'dashboard', label: 'My Station', icon: 'fa-desktop' },
        { id: 'tickets', label: 'My Tickets', icon: 'fa-list-alt' },
        { id: 'new-ticket', label: 'New Request', icon: 'fa-plus-circle' },
        { id: 'profile', label: 'Profile', icon: 'fa-user-circle' },
    ];

    return (
        <div className={`w-64 h-full flex flex-col border-r transition-colors duration-300 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-blue-50'}`}>
            {/* Sidebar Header */}
            <div className="h-16 flex items-center px-6 border-b border-gray-100/10">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white mr-3">
                    <i className="fas fa-headset text-sm"></i>
                </div>
                <span className={`text-xl font-bold tracking-tight lowercase ${isDark ? 'text-white' : 'text-blue-900'}`}>helpdesk</span>
            </div>

            {/* User Mini Profile */}
            <div className={`p-6 border-b ${isDark ? 'border-slate-800/50' : 'border-blue-50/50'}`}>
                <div className="flex items-center gap-3 mb-4">
                    <img src={user.avatar} alt="User" className="w-10 h-10 rounded-full border border-blue-200" />
                    <div className="overflow-hidden">
                        <h4 className={`font-bold text-sm truncate ${isDark ? 'text-white' : 'text-gray-900'}`}>{user.name}</h4>
                        <span className={`text-[10px] font-bold uppercase tracking-widest ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{user.role}</span>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                {menuItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === item.id
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                            : isDark
                                ? 'text-slate-400 hover:bg-slate-800 hover:text-white'
                                : 'text-gray-500 hover:bg-blue-50 hover:text-blue-600'
                            }`}
                    >
                        <i className={`fas ${item.icon} w-5 text-center`}></i>
                        {item.label}
                    </button>
                ))}
            </nav>

            {/* Footer / Logout */}
            <div className="p-4 border-t border-gray-100/10">
                <button
                    onClick={onLogout}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${isDark
                        ? 'text-red-400 hover:bg-red-500/10'
                        : 'text-gray-500 hover:bg-red-50 hover:text-red-600'
                        }`}
                >
                    <i className="fas fa-power-off w-5 text-center"></i>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
