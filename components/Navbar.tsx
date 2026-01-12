import React, { useState } from 'react';
import { User } from '../types';
import { Theme } from '../App';

interface NavbarProps {
  user: User | null;
  onLogout: () => void;
  theme: Theme;
  toggleTheme: () => void;
  onGoHome: () => void;
  onGoToLogin: () => void;
  onGoToRegister: () => void;
  onSignInUser: () => void;
  onSignInAdmin: () => void;
  activeTab?: string;
  setActiveTab?: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  user, onLogout, theme, toggleTheme, onGoHome, onGoToLogin, onGoToRegister, onSignInUser, onSignInAdmin, activeTab, setActiveTab
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDashboardsOpen, setIsDashboardsOpen] = useState(false);
  const [isMyMenuOpen, setIsMyMenuOpen] = useState(false);
  const isDark = theme === 'dark';

  const userMenuItems = [
    { id: 'dashboard', label: 'My Station', icon: 'fa-desktop' },
    { id: 'tickets', label: 'My Tickets', icon: 'fa-list-alt' },
    { id: 'new-ticket', label: 'New Request', icon: 'fa-plus-circle' },
    { id: 'profile', label: 'Profile', icon: 'fa-user-circle' },
  ];

  const adminMenuItems = [
    { id: 'dashboard', label: 'Command Hub', icon: 'fa-chart-network' },
    { id: 'tickets', label: 'Ticket Queue', icon: 'fa-ticket-alt' },
    { id: 'users', label: 'User Directory', icon: 'fa-users' },
    { id: 'settings', label: 'System Config', icon: 'fa-cogs' },
  ];

  const currentMenuItems = user?.role === 'admin' ? adminMenuItems : userMenuItems;

  return (
    <nav className={`border-b transition-all duration-300 sticky top-0 z-50 h-16 flex items-center ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-gradient-to-r from-blue-50 to-white border-blue-100 shadow-sm'} `}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <button onClick={onGoHome} className="flex items-center space-x-2 group">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white transition-transform group-hover:rotate-12">
            <i className="fas fa-headset text-sm"></i>
          </div>
          <span className={`text-xl font-bold tracking-tight lowercase ${isDark ? 'text-white' : 'text-blue-900'}`}>helpdesk</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8 text-[12px] font-medium lowercase">
          {!user && (
            <>
              {/* Homes Dropdown */}
              <div className="relative group h-16 flex items-center">
                <button className="flex items-center gap-1.5 text-blue-700 hover:text-blue-600 transition-colors">
                  Home <i className="fas fa-chevron-down text-[8px] transition-transform group-hover:rotate-180"></i>
                </button>
                <div className={`absolute top-16 left-0 w-56 border rounded-2xl shadow-2xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-gray-100'} `}>
                  <button onClick={onGoHome} className="w-full text-left px-4 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition-colors">Landing Page</button>
                </div>
              </div>

              {/* Dashboards Dropdown */}
              <div className="relative group h-16 flex items-center">
                <button className="flex items-center gap-1.5 text-blue-600 transition-colors font-bold">
                  Dashboards <i className="fas fa-chevron-down text-[8px] transition-transform group-hover:rotate-180"></i>
                </button>
                <div className={`absolute top-16 left-0 w-56 border rounded-2xl shadow-2xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-gray-100'} `}>
                  <button onClick={onSignInUser} className="w-full text-left px-4 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition-colors">User Station</button>
                  <button onClick={onSignInAdmin} className="w-full text-left px-4 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition-colors">Admin Core</button>
                </div>
              </div>

              <button onClick={onGoHome} className="text-blue-700 hover:text-blue-600">Contact Us</button>
            </>
          )}

          <div className="flex items-center space-x-4 pl-4 border-l border-gray-100/10 h-full">
            <button onClick={toggleTheme} className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-blue-400 hover:text-blue-600"><i className={`fas fa-${isDark ? 'sun' : 'moon'}`}></i></button>
            {user ? (
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="font-bold text-[11px]">{user.name.toLowerCase()}</p>
                  <p className="text-[9px] text-blue-500 uppercase tracking-widest">{user.role}</p>
                </div>
                <img src={user.avatar} className="w-8 h-8 rounded-full border border-gray-200" />
                <button onClick={onLogout} className="text-gray-400 hover:text-blue-500 transition-colors"><i className="fas fa-power-off"></i></button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <button onClick={onGoToLogin} className={`px - 4 py - 2 border rounded - xl font - bold ${isDark ? 'border-slate-700 text-slate-300' : 'border-gray-200 text-blue-600'} `}>Login</button>
                <button onClick={onGoToRegister} className="bg-blue-600 text-white px-5 py-2 rounded-xl">Sign Up</button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Header Controls */}
        <div className="lg:hidden flex items-center gap-4">
          <button onClick={toggleTheme} className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 hover:text-blue-600 transition-all">
            <i className={`fas fa-${isDark ? 'sun' : 'moon'}`}></i>
          </button>

          {user && (
            <button onClick={onLogout} className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500 hover:bg-blue-100 transition-all">
              <i className="fas fa-power-off"></i>
            </button>
          )}

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-500 text-xl p-2">
            <i className={`fas ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className={`lg:hidden absolute top-16 left-0 w-full border-b shadow-2xl p-6 z-[100] animate-in fade-in slide-in-from-top-2 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'}`}>
          <nav className="flex flex-col space-y-6 text-left text-sm font-medium lowercase">

            <div className="space-y-4">
              <button
                onClick={() => setIsDashboardsOpen(!isDashboardsOpen)}
                className="w-full flex items-center justify-between text-[10px] text-gray-400 font-bold uppercase tracking-widest group"
              >
                <span>Dashboards</span>
                <i className={`fas fa-chevron-down transition-transform ${isDashboardsOpen ? 'rotate-180' : ''}`}></i>
              </button>

              {isDashboardsOpen && (
                <div className="flex flex-col gap-3 pl-2 border-l border-gray-100/10 animate-in slide-in-from-top-2">
                  <button onClick={() => { onSignInUser(); setIsMobileMenuOpen(false); }} className="block w-full text-left hover:text-blue-600 transition-colors">User Station</button>
                  <button onClick={() => { onSignInAdmin(); setIsMobileMenuOpen(false); }} className="block w-full text-left hover:text-blue-600 transition-colors">Admin Core</button>

                  {/* Dashboard Tabs */}
                  {/* Dashboard Tabs Nested Dropdown */}
                  {user && setActiveTab && (
                    <div className="mt-4 pt-4 border-t border-gray-100/10">
                      <button
                        onClick={() => setIsMyMenuOpen(!isMyMenuOpen)}
                        className="w-full flex items-center justify-between text-[10px] text-gray-400 font-bold uppercase tracking-widest group pl-2 mb-2"
                      >
                        <span>My Menu</span>
                        <i className={`fas fa-chevron-down transition-transform ${isMyMenuOpen ? 'rotate-180' : ''}`}></i>
                      </button>

                      {isMyMenuOpen && (
                        <div className="space-y-1 animate-in slide-in-from-top-1">
                          {currentMenuItems.map(item => (
                            <button
                              key={item.id}
                              onClick={() => { setActiveTab(item.id); setIsMobileMenuOpen(false); }}
                              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-bold transition-all ${activeTab === item.id
                                ? 'bg-blue-50 text-blue-600'
                                : isDark ? 'text-slate-400 hover:text-white' : 'text-gray-500 hover:text-blue-600'}`}
                            >
                              <i className={`fas ${item.icon} w-4 text-center`}></i>
                              {item.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>



            <div className="pt-6 border-t border-gray-100/10 flex flex-col gap-3">
              {!user && (
                <div className="flex flex-col gap-3">
                  <button onClick={() => { onGoToLogin(); setIsMobileMenuOpen(false); }} className="w-full py-3 border rounded-xl font-bold text-center hover:bg-gray-50 transition-colors">Login</button>
                  <button onClick={() => { onGoToRegister(); setIsMobileMenuOpen(false); }} className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold text-center hover:bg-blue-700 transition-colors">Sign Up</button>
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navbar;