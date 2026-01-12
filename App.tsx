import React, { useState, useEffect } from 'react';
import { UserRole, User, Ticket, TicketStatus, TicketPriority } from './types';
import LandingPage from './views/LandingPage';
import UserDashboard from './views/UserDashboard';
import AdminDashboard from './views/AdminDashboard';
import LoginPage from './views/LoginPage';
import RegisterPage from './views/RegisterPage';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

// Mock Data initialization
const MOCK_USER: User = {
  id: 'usr-1',
  name: 'Alex Johnson',
  email: 'alex.j@company.com',
  role: UserRole.USER,
  avatar: 'https://picsum.photos/seed/user/150/150'
};

const MOCK_ADMIN: User = {
  id: 'adm-1',
  name: 'Sarah Chief',
  email: 'sarah.it@company.com',
  role: UserRole.ADMIN,
  avatar: 'https://picsum.photos/seed/admin/150/150'
};

const INITIAL_TICKETS: Ticket[] = [
  {
    id: 'T-1001',
    title: 'VPN Connection Issues',
    description: 'Cannot connect to the office VPN from home network. Receiving authentication timeout error.',
    status: TicketStatus.OPEN,
    priority: TicketPriority.HIGH,
    category: 'Network',
    userId: 'usr-1',
    userName: 'Alex Johnson',
    createdAt: new Date(Date.now() - 3600000).toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'T-1002',
    title: 'Printer Offline in Lobby',
    description: 'The main lobby printer is showing as offline for all users on the 3rd floor.',
    status: TicketStatus.PENDING,
    priority: TicketPriority.MEDIUM,
    category: 'Hardware',
    userId: 'usr-2',
    userName: 'John Doe',
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    updatedAt: new Date(Date.now() - 3600000).toISOString()
  }
];

export type LandingSubView = 'home' | 'services' | 'about' | 'faq' | 'contact';
export type LandingStyle = 'corporate' | 'modern';
export type AppView = 'landing' | 'dashboard' | 'login' | 'register';
export type Theme = 'light' | 'dark';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('helpdesk_user');
    return saved ? JSON.parse(saved) : null;
  });
  const [tickets, setTickets] = useState<Ticket[]>(INITIAL_TICKETS);
  const [view, setView] = useState<AppView>(() => (localStorage.getItem('helpdesk_view') as AppView) || 'landing');

  // State with LocalStorage Persistence
  const [landingSubView, setLandingSubView] = useState<LandingSubView>(() => (localStorage.getItem('helpdesk_sub_view') as LandingSubView) || 'home');
  const [landingStyle, setLandingStyle] = useState<LandingStyle>(() => (localStorage.getItem('helpdesk_landing_style') as LandingStyle) || 'corporate');
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('helpdesk_theme') as Theme) || 'light');
  const [dashboardTab, setDashboardTab] = useState('dashboard');

  // Persistence Effects
  useEffect(() => { localStorage.setItem('helpdesk_user', JSON.stringify(currentUser)); }, [currentUser]);
  useEffect(() => { localStorage.setItem('helpdesk_view', view); }, [view]);
  useEffect(() => { localStorage.setItem('helpdesk_sub_view', landingSubView); }, [landingSubView]);
  useEffect(() => { localStorage.setItem('helpdesk_landing_style', landingStyle); }, [landingStyle]);
  useEffect(() => { localStorage.setItem('helpdesk_theme', theme); }, [theme]);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);

    // Force scroll to top on mount/refresh
    window.scrollTo(0, 0);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  const loginAsUser = () => {
    setCurrentUser(MOCK_USER);
    setView('dashboard');
    scrollToTop();
  };

  const loginAsAdmin = () => {
    setCurrentUser(MOCK_ADMIN);
    setView('dashboard');
    scrollToTop();
  };

  const logout = () => {
    setCurrentUser(null);
    setView('landing');
    setLandingSubView('home');
    scrollToTop();
  };

  const addTicket = (newTicket: Omit<Ticket, 'id' | 'createdAt' | 'updatedAt' | 'userName' | 'userId'>) => {
    if (!currentUser) return;
    const ticket: Ticket = {
      ...newTicket,
      id: `T-${Math.floor(1000 + Math.random() * 9000)}`,
      userId: currentUser.id,
      userName: currentUser.name,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    setTickets([ticket, ...tickets]);
  };

  const updateTicketStatus = (id: string, newStatus: TicketStatus) => {
    setTickets(tickets.map(t => t.id === id ? { ...t, status: newStatus, updatedAt: new Date().toISOString() } : t));
  };

  // Modern landing style uses dark backgrounds by default, but respects theme toggle as well
  const isDarkUI = theme === 'dark' || (landingSubView === 'home' && landingStyle === 'modern' && view === 'landing');

  const renderContent = () => {
    switch (view) {
      case 'login':
        return <LoginPage
          theme={theme}
          onLoginUser={loginAsUser}
          onLoginAdmin={loginAsAdmin}
          onBack={() => setView('landing')}
          onGoToSignup={() => setView('register')}
        />;
      case 'register':
        return <RegisterPage
          theme={theme}
          onBack={() => setView('landing')}
          onGoToLogin={() => setView('login')}
        />;
      case 'dashboard':
        return (
          <div className={`flex h-screen overflow-hidden ${isDarkUI ? 'bg-[#0f172a]' : 'bg-gray-50'}`}>
            <div className="hidden lg:block h-full">
              <Sidebar
                user={currentUser!}
                theme={theme}
                onLogout={logout}
                activeTab={dashboardTab}
                setActiveTab={setDashboardTab}
              />
            </div>
            <div className="flex-1 flex flex-col overflow-hidden">
              <Navbar
                user={currentUser}
                onLogout={logout}
                theme={theme}
                toggleTheme={toggleTheme}
                onGoHome={() => setView('landing')}
                onGoToLogin={() => setView('login')}
                onGoToRegister={() => setView('register')}
                onSignInUser={loginAsUser}
                onSignInAdmin={loginAsAdmin}
                activeTab={dashboardTab}
                setActiveTab={setDashboardTab}
              />
              <main className="flex-1 overflow-y-auto p-4 md:p-8">
                {currentUser?.role === UserRole.USER ? (
                  <UserDashboard
                    user={currentUser}
                    tickets={tickets.filter(t => t.userId === currentUser.id)}
                    onCreateTicket={addTicket}
                    theme={theme}
                    activeTab={dashboardTab}
                  />
                ) : (
                  <AdminDashboard
                    user={currentUser!}
                    tickets={tickets}
                    onUpdateStatus={updateTicketStatus}
                    theme={theme}
                    activeTab={dashboardTab}
                  />
                )}
              </main>
            </div>
          </div>
        );
      default:
        return (
          <LandingPage
            theme={theme}
            // Fix: Remove setTheme as it is not present in LandingPageProps
            toggleTheme={toggleTheme}
            subView={landingSubView}
            setSubView={setLandingSubView}
            landingStyle={landingStyle}
            setLandingStyle={setLandingStyle}
            onGoToLogin={() => setView('login')}
            onGoToRegister={() => setView('register')}
            onSignInUser={loginAsUser}
            onSignInAdmin={loginAsAdmin}
          />
        );
    }
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-500 ${isDarkUI ? 'bg-[#0f172a] text-white' : 'bg-white text-gray-900'}`}>
      {renderContent()}

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-[60] w-12 h-12 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 ${isDarkUI ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-blue-500/20' : 'bg-white text-blue-600 hover:bg-blue-50 border border-gray-100'
            }`}
          aria-label="Back to top"
        >
          <i className="fas fa-chevron-up"></i>
        </button>
      )}

      {(view === 'landing') && (
        <footer className={`${isDarkUI ? 'bg-[#0f172a] border-t border-slate-800' : 'bg-gray-50 border-t border-gray-200'} py-16 mt-auto text-sm`}>
          <div className="container mx-auto px-4">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-12 lg:gap-y-16 lg:gap-x-8 mb-16">

              {/* Brand Column - Top Row Left (Cols 1-4) */}
              <div className="lg:col-span-4 space-y-6">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                    <i className="fas fa-headset text-sm"></i>
                  </div>
                  <span className={`text-xl font-bold tracking-tight lowercase ${isDarkUI ? 'text-white' : 'text-blue-900'}`}>helpdesk</span>
                </div>
                <p className={`leading-relaxed ${isDarkUI ? 'text-slate-400' : 'text-gray-500'}`}>
                  Enterprise-grade IT support that scales with your ambition. Secure, reliable, and human-centric.
                </p>

              </div>

              {/* Platform Column - Top Row Middle (Cols 6-7) */}
              <div className="lg:col-span-2 lg:col-start-6">
                <h4 className={`font-bold mb-6 lowercase text-base ${isDarkUI ? 'text-white' : 'text-blue-900'}`}>Platform</h4>
                <ul className={`space-y-4 ${isDarkUI ? 'text-slate-400' : 'text-gray-600'}`}>
                  <li><button onClick={() => setLandingSubView('home')} className="hover:text-blue-500 transition-colors lowercase">Home</button></li>
                  <li><button onClick={() => setLandingSubView('services')} className="hover:text-blue-500 transition-colors lowercase">Services</button></li>
                  <li><button className="hover:text-blue-500 transition-colors lowercase">Pricing</button></li>
                  <li><button className="hover:text-blue-500 transition-colors lowercase">Status</button></li>
                </ul>
              </div>

              {/* Support Column - Top Row Right (Cols 8-9) */}
              <div className="lg:col-span-2 lg:col-start-8">
                <h4 className={`font-bold mb-6 lowercase text-base ${isDarkUI ? 'text-white' : 'text-blue-900'}`}>Support</h4>
                <ul className={`space-y-4 ${isDarkUI ? 'text-slate-400' : 'text-gray-600'}`}>
                  <li><button onClick={() => setLandingSubView('about')} className="hover:text-blue-500 transition-colors lowercase">About Us</button></li>
                  <li><button onClick={() => setLandingSubView('contact')} className="hover:text-blue-500 transition-colors lowercase">Contact</button></li>
                  <li><button onClick={() => setLandingSubView('faq')} className="hover:text-blue-500 transition-colors lowercase">FAQ</button></li>
                  <li><button className="hover:text-blue-500 transition-colors lowercase">Legal</button></li>
                </ul>
              </div>

              {/* Newsletter Column - Bottom Row Left (Cols 1-4) */}
              <div className="lg:col-span-4 lg:row-start-2">
                <h4 className={`font-bold mb-6 lowercase text-base ${isDarkUI ? 'text-white' : 'text-blue-900'}`}>Stay Updated</h4>
                <p className={`mb-4 text-xs ${isDarkUI ? 'text-slate-400' : 'text-gray-500'}`}>Subscribe for the latest updates and security alerts.</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="email@company.com"
                    className={`w-full px-4 py-3 rounded-xl border text-sm outline-none focus:border-blue-500 transition-all ${isDarkUI ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-500' : 'bg-white border-gray-200'}`}
                  />
                  <button className="bg-blue-600 text-white px-4 py-3 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20">
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </div>

              {/* Follow Us Column - Top Row Right (Cols 10-11) */}
              <div className="lg:col-span-2 lg:col-start-10">
                <h4 className={`font-bold mb-6 lowercase text-base ${isDarkUI ? 'text-white' : 'text-blue-900'}`}>Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className={`text-xl transition-colors ${isDarkUI ? 'text-slate-400 hover:text-white' : 'text-gray-400 hover:text-blue-600'}`}><i className="fab fa-twitter"></i></a>
                  <a href="#" className={`text-xl transition-colors ${isDarkUI ? 'text-slate-400 hover:text-white' : 'text-gray-400 hover:text-blue-600'}`}><i className="fab fa-github"></i></a>
                  <a href="#" className={`text-xl transition-colors ${isDarkUI ? 'text-slate-400 hover:text-white' : 'text-gray-400 hover:text-blue-600'}`}><i className="fab fa-linkedin"></i></a>
                  <a href="#" className={`text-xl transition-colors ${isDarkUI ? 'text-slate-400 hover:text-white' : 'text-gray-400 hover:text-blue-600'}`}><i className="fab fa-youtube"></i></a>
                </div>
              </div>

            </div>

            <div className={`border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs ${isDarkUI ? 'border-slate-800 text-slate-500' : 'border-gray-200 text-gray-400'}`}>
              <p>&copy; {new Date().getFullYear()} helpdesk. all rights reserved.</p>
              <div className="flex gap-6">
                <button className="hover:text-blue-500 transition-colors">Privacy Policy</button>
                <button className="hover:text-blue-500 transition-colors">Terms of Service</button>
                <button className="hover:text-blue-500 transition-colors">Cookie Policy</button>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default App;