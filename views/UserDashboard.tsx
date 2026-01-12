import React, { useState, useRef } from 'react';
import { User, Ticket, TicketStatus } from '../types';
import TicketForm from '../components/TicketForm';
import { generateVeoVideo, analyzeTicketDeep } from '../services/gemini';

interface UserDashboardProps {
  user: User;
  tickets: Ticket[];
  onCreateTicket: (ticket: any) => void;
  theme: 'light' | 'dark';
  activeTab: string;
}

const UserDashboard: React.FC<UserDashboardProps> = ({ user, tickets, onCreateTicket, theme, activeTab }) => {
  const isDark = theme === 'dark';
  const [showForm, setShowForm] = useState(false);
  const [deepAnalysis, setDeepAnalysis] = useState<string | null>(null);
  const [isDeepThinking, setIsDeepThinking] = useState(false);

  const [veoImage, setVeoImage] = useState<string | null>(null);
  const [veoResult, setVeoResult] = useState<string | null>(null);
  const [isGeneratingVeo, setIsGeneratingVeo] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDeepThink = async () => {
    if (tickets.length === 0) return;
    setIsDeepThinking(true);
    setDeepAnalysis(null);
    try {
      const result = await analyzeTicketDeep(tickets[0].title, tickets[0].description);
      setDeepAnalysis(result);
    } catch (error) {
      console.error("Deep analysis failed:", error);
      setDeepAnalysis("Analysis failed. Please try again later.");
    } finally {
      setIsDeepThinking(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setVeoImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleGenerateVeo = async () => {
    if (!veoImage) return;
    setIsGeneratingVeo(true);
    setVeoResult(null);
    try {
      const videoUrl = await generateVeoVideo(veoImage, "Technical architecture topology animation showing nodes connecting and glowing.");
      setVeoResult(videoUrl);
    } catch (e: any) {
      console.error("Veo error:", e);
      alert("AI Visualization failed. Check API configuration.");
    } finally {
      setIsGeneratingVeo(false);
    }
  };

  return (
    <div className={`space-y-6 pb-20 max-w-7xl mx-auto transition-all duration-700`}>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <h1 className={`text-3xl font-bold lowercase tracking-tight ${isDark ? 'text-white' : 'text-blue-900'}`}>{activeTab === 'dashboard' ? 'Overview' : activeTab === 'tickets' ? 'My Tickets' : activeTab === 'new-ticket' ? 'New Request' : 'Profile'}</h1>
          <p className="text-[10px] text-blue-600 font-bold uppercase tracking-[0.3em] mt-2">Intelligent IT Support // {user.name}</p>
        </div>
      </div>

      {activeTab === 'new-ticket' && (
        <div className="bg-white p-8 lg:p-12 rounded-[2rem] border border-blue-100 shadow-xl animate-in slide-in-from-top-4 duration-500">
          <TicketForm onSubmit={(data) => { onCreateTicket(data); }} />
        </div>
      )}

      {activeTab === 'tickets' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className={`border rounded-[2rem] p-8 shadow-sm ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-blue-100'}`}>
              <h2 className={`text-xl font-bold mb-8 flex items-center gap-4 ${isDark ? 'text-white' : 'text-blue-900'}`}>
                <i className="fas fa-ticket-alt text-blue-600"></i> Active Tickets
              </h2>
              <div className="space-y-4">
                {tickets.length === 0 ? (
                  <div className="text-center py-24 opacity-50"><i className="fas fa-inbox text-6xl mb-6 text-blue-200"></i><p className="text-xs uppercase font-bold tracking-[0.2em] text-blue-400">No Tickets Found</p></div>
                ) : (
                  tickets.map(t => (
                    <div key={t.id} className={`group p-6 rounded-2xl border flex items-center justify-between transition-all cursor-pointer ${isDark ? 'bg-slate-900/50 border-slate-700 hover:bg-slate-700' : 'bg-white border-blue-50 hover:bg-blue-50 hover:border-blue-100'}`}>
                      <div className="flex items-center gap-6">
                        <div className={`w-3 h-3 rounded-full animate-pulse ${t.status === TicketStatus.OPEN ? 'bg-amber-400' : 'bg-green-400'}`}></div>
                        <div>
                          <h4 className={`font-bold text-sm lowercase ${isDark ? 'text-white' : 'text-blue-900'}`}>{t.title}</h4>
                          <p className="text-[10px] text-blue-500 uppercase font-bold mt-1 tracking-widest">{t.id} // {t.status} // {t.category}</p>
                        </div>
                      </div>
                      <i className="fas fa-chevron-right text-gray-300 group-hover:text-blue-500 transition-colors"></i>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Deep Insight Box */}
            <div className="bg-gradient-to-br from-blue-950 to-blue-900 p-10 rounded-[2.5rem] text-white flex flex-col items-center text-center shadow-2xl shadow-blue-900/20">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-2xl mb-8"><i className="fas fa-brain text-blue-200"></i></div>
              <h2 className="text-2xl font-bold mb-4 lowercase tracking-tight">AI Ticket Analysis</h2>
              <p className="text-sm text-blue-200/70 mb-10 max-w-md leading-relaxed">Run a deep architectural analysis on your latest ticket to identify root causes using AI.</p>

              {deepAnalysis && (
                <div className="w-full bg-white/5 p-8 rounded-2xl text-[11px] font-mono leading-loose mb-10 border border-white/10 text-left whitespace-pre-wrap max-h-64 overflow-y-auto custom-scrollbar">
                  {deepAnalysis}
                </div>
              )}

              <button
                onClick={handleDeepThink}
                disabled={isDeepThinking || tickets.length === 0}
                className="w-full max-w-xs py-5 bg-white text-blue-950 text-[11px] font-bold uppercase tracking-widest rounded-xl hover:bg-blue-50 disabled:opacity-20 transition-all active:scale-95"
              >
                {isDeepThinking ? <i className="fas fa-spinner fa-spin mr-2"></i> : <i className="fas fa-bolt mr-2"></i>}
                {isDeepThinking ? 'Analyzing...' : 'Run Analysis'}
              </button>
            </div>
          </div>

          {/* Sidebar for Ticket View */}
          <div className="space-y-8">
            <div className={`p-8 rounded-[2.5rem] border shadow-sm text-center ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-blue-100'}`}>
              <h2 className="text-xs font-bold mb-8 uppercase tracking-[0.2em] text-gray-400">Topology Visualizer</h2>
              <div
                onClick={() => fileInputRef.current?.click()}
                className={`h-56 border-2 border-dashed rounded-[2rem] mb-6 flex flex-col items-center justify-center cursor-pointer transition-all overflow-hidden relative group ${isDark ? 'bg-slate-900 border-slate-600 hover:border-blue-500 hover:bg-slate-800' : 'bg-blue-50/50 border-blue-200 hover:border-blue-400 hover:bg-blue-50'}`}
              >
                {veoImage ? (
                  <img src={veoImage} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                ) : (
                  <>
                    <i className="fas fa-cloud-upload-alt text-4xl text-blue-200 mb-4"></i>
                    <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest px-6">Upload Screenshot</p>
                  </>
                )}
                <input ref={fileInputRef} type="file" hidden accept="image/*" onChange={handleFileChange} />
              </div>

              {veoResult && (
                <div className="mb-6 rounded-2xl overflow-hidden shadow-2xl bg-black aspect-video">
                  <video src={veoResult} autoPlay loop controls className="w-full h-full object-cover" />
                </div>
              )}

              <button
                onClick={handleGenerateVeo}
                disabled={isGeneratingVeo || !veoImage}
                className="w-full py-4 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-blue-700 disabled:opacity-50 transition-all"
              >
                {isGeneratingVeo ? 'Generating...' : 'Visualize Topology'}
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'dashboard' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Suggested Solutions */}
          <div className={`border rounded-[2rem] p-8 shadow-sm ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-blue-100'}`}>
            <h2 className={`text-xl font-bold mb-6 lowercase tracking-tight ${isDark ? 'text-white' : 'text-blue-900'}`}>Suggested Actions</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: 'fa-wifi', title: 'Network Reset', desc: 'Fix connection issues.' },
                { icon: 'fa-key', title: 'Password Sync', desc: 'Update credentials.' },
                { icon: 'fa-print', title: 'Device Setup', desc: 'Install drivers.' },
                { icon: 'fa-cloud', title: 'VPN Config', desc: 'Remote access help.' }
              ].map((item, i) => (
                <div key={i} className={`p-4 rounded-xl border flex items-center gap-4 cursor-pointer transition-colors ${isDark ? 'bg-slate-900 border-slate-700 hover:border-blue-500' : 'bg-blue-50 border-blue-100 hover:border-blue-300 hover:bg-blue-100'}`}>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isDark ? 'bg-slate-800 text-blue-400' : 'bg-white text-blue-600 shadow-sm'}`}><i className={`fas ${item.icon}`}></i></div>
                  <div>
                    <h4 className={`font-bold text-sm ${isDark ? 'text-white' : 'text-blue-900'}`}>{item.title}</h4>
                    <p className={`text-[10px] ${isDark ? 'text-slate-400' : 'text-blue-500'}`}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Station Health */}
          <div className={`border rounded-[2rem] p-8 shadow-sm ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-blue-100'}`}>
            <h2 className={`text-xl font-bold mb-6 lowercase tracking-tight ${isDark ? 'text-white' : 'text-blue-900'}`}>System Status</h2>
            <div className="space-y-6">
              {[
                { label: 'Network', status: 'Optimal', color: 'text-green-500' },
                { label: 'Latency', status: '24ms', color: 'text-blue-500' },
                { label: 'Security', status: 'Encrypted', color: 'text-green-500' }
              ].map((stat, i) => (
                <div key={i} className={`flex justify-between items-center border-b pb-4 ${isDark ? 'border-slate-700' : 'border-blue-50'}`}>
                  <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">{stat.label}</span>
                  <span className={`text-[10px] font-black uppercase ${stat.color}`}>{stat.status}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Activity Feed */}
          <div className={`lg:col-span-2 border rounded-[2rem] p-8 shadow-sm ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-blue-100'}`}>
            <h2 className={`text-xl font-bold mb-6 lowercase tracking-tight ${isDark ? 'text-white' : 'text-blue-900'}`}>Recent Activity</h2>
            <div className="space-y-4">
              {[
                { time: '2m ago', action: 'Ticket T-1001', detail: 'Analysis Complete' },
                { time: '1h ago', action: 'System Login', detail: 'Authorized' },
                { time: 'Yesterday', action: 'Password Change', detail: 'Security Rotation' }
              ].map((act, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-dashed border-gray-100/10">
                  <div className="flex items-center gap-4">
                    <span className={`text-[10px] font-mono font-bold ${isDark ? 'text-blue-400' : 'text-blue-500'}`}>{act.time}</span>
                    <span className={`text-sm font-bold ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>{act.action}</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest opacity-50">{act.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'profile' && (
        <div className={`border rounded-[2rem] p-12 text-center ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-blue-100'}`}>
          <img src={user.avatar} className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-100" />
          <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-blue-900'}`}>{user.name}</h2>
          <p className="text-sm text-blue-500 font-bold uppercase tracking-widest mb-8">{user.role}</p>
          <div className="max-w-md mx-auto grid grid-cols-2 gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">{tickets.length}</p>
              <p className="text-[10px] uppercase tracking-widest text-gray-400">Total Tickets</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-500">{tickets.filter(t => t.status === TicketStatus.RESOLVED).length}</p>
              <p className="text-[10px] uppercase tracking-widest text-gray-400">Resolved</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default UserDashboard;