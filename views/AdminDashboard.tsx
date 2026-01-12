import React, { useState, useEffect } from 'react';
import { User, Ticket, TicketStatus, DashboardStats } from '../types';
import { analyzeTicket, generateTicketSummary } from '../services/gemini';

interface AdminDashboardProps {
  user: User;
  tickets: Ticket[];
  onUpdateStatus: (id: string, status: TicketStatus) => void;
  theme: 'light' | 'dark';
  activeTab: string;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ user, tickets, onUpdateStatus, theme, activeTab }) => {
  const isDark = theme === 'dark';
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [aiInsight, setAiInsight] = useState<string>('');
  const [isLoadingInsight, setIsLoadingInsight] = useState(false);
  const [systemSummary, setSystemSummary] = useState<string>('');

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const summary = await generateTicketSummary(tickets);
        setSystemSummary(summary);
      } catch (e) {
        setSystemSummary("Core summary unavailable.");
      }
    };
    fetchSummary();
  }, [tickets]);

  const handleTicketSelect = async (ticket: Ticket) => {
    setSelectedTicket(ticket);
    setAiInsight('');
    setIsLoadingInsight(true);
    try {
      const insight = await analyzeTicket(ticket.title, ticket.description);
      setAiInsight(insight);
    } catch (e) {
      setAiInsight("Diagnostic failed.");
    } finally {
      setIsLoadingInsight(false);
    }
  };

  return (
    <div className={`space-y-6 pb-20 max-w-7xl mx-auto transition-all duration-700`}>
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
        <div>
          <h1 className="text-3xl font-bold lowercase tracking-tight">Admin Core: {activeTab === 'dashboard' ? 'Overview' : activeTab}</h1>
          <p className="text-[10px] text-blue-600 font-bold uppercase tracking-[0.4em] mt-2">Global System Orchestration</p>
        </div>
        <div className="flex gap-4">
          <button className="w-48 py-3 border border-blue-200 text-blue-700 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-blue-50 active:scale-95 transition-all text-center">Download Audit</button>
          <button className="w-48 py-3 bg-blue-600 text-white rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-blue-700 shadow-xl shadow-blue-500/20 active:scale-95 transition-all text-center">System Broadcast</button>
        </div>
      </div>

      {activeTab === 'dashboard' && (
        <>
          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <StatItem label="Active Load" val={tickets.length} icon="fa-chart-network" color="text-blue-600" bg={isDark ? 'bg-slate-800 border border-slate-700 text-white' : 'bg-white border border-blue-100 text-gray-900'} />
            <StatItem label="Pending Triage" val={tickets.filter(t => t.status === TicketStatus.OPEN).length} icon="fa-hourglass-half" color="text-amber-500" bg={isDark ? 'bg-slate-800 border border-slate-700 text-white' : 'bg-amber-50 border-transparent text-gray-900'} />
            <StatItem label="Resolved" val={tickets.filter(t => t.status === TicketStatus.RESOLVED).length} icon="fa-check-double" color="text-green-500" bg={isDark ? 'bg-slate-800 border border-slate-700 text-white' : 'bg-green-50 border-transparent text-gray-900'} />
            <StatItem label="Avg Response" val="4.2m" icon="fa-bolt-lightning" color="text-blue-400" bg={isDark ? 'bg-slate-800 border border-slate-700 text-white' : 'bg-blue-50 border-transparent text-gray-900'} />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Global Node Health */}
            <div className={`xl:col-span-2 border rounded-[2rem] overflow-hidden shadow-sm flex flex-col ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-blue-100'}`}>
              <div className={`p-8 border-b flex justify-between items-center ${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-blue-50/30 border-blue-50'}`}>
                <h2 className={`text-xl font-bold lowercase tracking-tight ${isDark ? 'text-white' : 'text-blue-900'}`}>Global Node Health</h2>
                <div className="flex gap-2">
                  {['NA', 'EU', 'APAC', 'LATAM'].map(region => (
                    <span key={region} className={`text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${isDark ? 'bg-slate-900 text-slate-400' : 'bg-white border border-gray-100 text-gray-400'}`}>{region}</span>
                  ))}
                </div>
              </div>
              <div className="p-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className={`p-6 rounded-2xl text-center border ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-gray-50 border-gray-100'}`}>
                    <div className={`w-3 h-3 rounded-full mx-auto mb-3 animate-pulse ${i === 2 ? 'bg-amber-500' : 'bg-green-500'}`}></div>
                    <p className={`text-[10px] font-bold uppercase tracking-widest ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>Server-{100 + i}</p>
                    <p className={`text-xs font-bold mt-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{i === 2 ? 'High Load' : 'Optimal'}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Security Threat Map */}
            <div className={`border rounded-[2rem] overflow-hidden shadow-sm flex flex-col ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-blue-100'}`}>
              <div className={`p-8 border-b flex justify-between items-center ${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-blue-50/30 border-blue-50'}`}>
                <h2 className={`text-xl font-bold lowercase tracking-tight ${isDark ? 'text-white' : 'text-blue-900'}`}>Security Status</h2>
                <span className="text-[9px] font-black bg-green-100 text-green-700 px-4 py-1.5 rounded-full uppercase tracking-widest animate-pulse">Secure</span>
              </div>
              <div className="p-8 relative h-64 flex items-center justify-center overflow-hidden">
                <div className={`absolute inset-0 opacity-10 ${isDark ? 'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-slate-900 to-slate-900' : 'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-white to-white'}`}></div>
                <div className="relative z-10 grid grid-cols-3 gap-4 text-center w-full">
                  {[
                    { label: 'Phishing', level: 'Low', count: '2' },
                    { label: 'DDoS', level: 'None', count: '0' },
                    { label: 'Malware', level: 'None', count: '0' }
                  ].map((t, i) => (
                    <div key={i} className={`p-3 rounded-2xl border ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-blue-50'}`}>
                      <h4 className={`text-xs font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t.label}</h4>
                      <p className={`text-[10px] font-bold uppercase ${t.level === 'None' ? 'text-green-500' : 'text-amber-500'}`}>{t.level}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {activeTab === 'tickets' && (
        <div className={`border rounded-[2rem] overflow-hidden shadow-sm flex flex-col ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-blue-100'}`}>
          <div className={`p-8 border-b flex justify-between items-center ${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-blue-50/30 border-blue-50'}`}>
            <h2 className={`text-xl font-bold lowercase tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>Ticket Queue</h2>
            <span className="text-[9px] font-black bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full uppercase tracking-widest animate-pulse">{tickets.filter(t => t.status === 'Open').length} Pending</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-center">
              <thead className={`${isDark ? 'bg-slate-900/50 text-blue-400' : 'bg-blue-50/50 text-blue-700'} text-[10px] font-bold uppercase tracking-widest`}>
                <tr>
                  <th className="px-8 py-5">ID</th>
                  <th className="px-8 py-5">Issue / User</th>
                  <th className="px-8 py-5">Priority</th>
                  <th className="px-8 py-5">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {tickets.map(t => (
                  <tr key={t.id} onClick={() => handleTicketSelect(t)} className={`hover:bg-blue-50/50 cursor-pointer transition-all ${selectedTicket?.id === t.id ? 'bg-blue-50' : ''}`}>
                    <td className="px-8 py-6 text-[10px] font-mono font-bold text-blue-500">{t.id}</td>
                    <td className="px-8 py-6">
                      <p className={`font-bold text-xs lowercase ${isDark ? 'text-white' : 'text-gray-900'}`}>{t.title}</p>
                      <p className="text-[9px] text-blue-500 font-bold uppercase mt-1 tracking-tighter">{t.userName}</p>
                    </td>
                    <td className="px-8 py-6">
                      <span className={`text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${t.priority === 'High' ? 'bg-red-50 text-red-500' : 'bg-gray-100 text-gray-400'}`}>{t.priority}</span>
                    </td>
                    <td className="px-8 py-6"><i className="fas fa-chevron-right text-gray-300"></i></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'users' && (
        <div className={`border rounded-[2rem] overflow-hidden shadow-sm flex flex-col ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-blue-100'}`}>
          <div className={`p-8 lg:p-10 border-b ${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-blue-50/30 border-blue-50'}`}>
            <h2 className={`text-xl font-bold lowercase tracking-tight ${isDark ? 'text-white' : 'text-blue-900'}`}>Agent Performance</h2>
          </div>
          <div className="p-8">
            {[
              { name: 'Sarah Chief', role: 'L3 Admin', score: '98%' },
              { name: 'Mike Ross', role: 'L2 Support', score: '95%' },
              { name: 'Jessica P.', role: 'L1 Triage', score: '92%' }
            ].map((agent, i) => (
              <div key={i} className="flex items-center justify-between mb-4 last:mb-0">
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold ${isDark ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-600'}`}>{agent.name.charAt(0)}</div>
                  <div>
                    <p className={`text-xs font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{agent.name}</p>
                    <p className="text-[9px] opacity-50 uppercase tracking-wider">{agent.role}</p>
                  </div>
                </div>
                <div className={`text-xs font-bold ${isDark ? 'text-green-400' : 'text-green-600'}`}>{agent.score}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'settings' && (
        <div className={`border rounded-[2rem] overflow-hidden shadow-sm flex flex-col ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-blue-100'}`}>
          <div className={`p-8 lg:p-10 border-b ${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-blue-50/30 border-blue-50'}`}>
            <h2 className={`text-xl font-bold lowercase tracking-tight ${isDark ? 'text-white' : 'text-blue-900'}`}>System Log</h2>
          </div>
          <div className="p-8 space-y-6">
            {[
              { time: '10:42 AM', action: 'Patch Deployed', target: 'Node-102', user: 'System' },
              { time: '09:15 AM', action: 'User Sync', target: 'Global DB', user: 'Admin' },
              { time: '08:30 AM', action: 'Backup Complete', target: 'Vault-A', user: 'System' },
              { time: '08:00 AM', action: 'Shift Start', target: 'HQ-Main', user: 'Sarah C.' }
            ].map((log, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className={`text-[9px] font-mono font-bold w-12 pt-1 ${isDark ? 'text-slate-500' : 'text-gray-400'}`}>{log.time}</div>
                <div>
                  <p className={`text-xs font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{log.action}</p>
                  <p className={`text-[10px] uppercase tracking-widest ${isDark ? 'text-slate-400' : 'text-blue-400'}`}>{log.target} // {log.user}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

const StatItem = ({ label, val, icon, color, bg }: any) => (
  // Note: Parent component handles passing appropriate bg/color props based on theme
  <div className={`p-8 rounded-[2rem] shadow-sm flex flex-col items-center text-center ${bg.includes('bg-white') || bg.includes('bg-amber') || bg.includes('bg-green') || bg.includes('bg-indigo') ? bg : bg} border ${bg.includes('border') ? '' : 'border-gray-100'}`}>
    <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm ${bg.includes('bg-white') ? 'bg-gray-50' : ''} ${color}`}>
      <i className={`fas ${icon}`}></i>
    </div>
    <p className="text-[9px] font-bold text-blue-500 uppercase tracking-[0.3em] mb-2">{label}</p>
    <p className={`text-2xl font-bold tracking-tighter`}>{val}</p>
  </div>
);

export default AdminDashboard;