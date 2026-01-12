import React, { useState } from 'react';
import { LandingSubView, LandingStyle, Theme } from '../App';

// --- SHARED COMPONENTS ---

const LiveTicker = ({ isDark }: { isDark: boolean }) => (
  <div className={`py-4 border-y overflow-hidden whitespace-nowrap ${isDark ? 'bg-slate-950 border-slate-800 text-slate-500' : 'bg-slate-50 border-slate-100 text-slate-400'}`}>
    <div className="inline-block animate-[marquee_30s_linear_infinite] px-4 font-mono text-[10px] uppercase tracking-widest font-bold">
      {['system-01: optimal', 'security-grid: active', 'latency: 0.8ms', 'monitoring: synced', 'cloud-02: scaling', 'network: healthy', 'analytics: processing', 'encryption: active'].map((item, idx) => (
        <span key={idx} className="mx-12 inline-flex items-center gap-2">
          <span className="w-1 h-1 bg-green-500 rounded-full"></span>
          {item}
        </span>
      ))}
    </div>
    <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
  </div>
);

// --- HOME 1 (CORPORATE) ---
const CorporateHero = ({ onGoToLogin, isDark }: any) => (
  <section className={`min-h-[calc(100vh-4rem)] flex items-center pt-20 pb-8 md:py-20 lg:py-32 relative overflow-hidden`}>
    {/* Hero Background Image */}
    <div className="absolute inset-0 z-0">
      <img
        src="/helpDesk/images/hero_server_room.png"
        alt="Modern Server Room"
        className="w-full h-full object-cover"
      />
      {/* Light/Dark Mode Overlay for Text Readability - Reduced Opacity for better visibility */}
      <div className={`absolute inset-0 ${isDark ? 'bg-slate-900/60' : 'bg-white/60'} backdrop-blur-[1px]`}></div>
      <div className={`absolute inset-0 bg-gradient-to-r ${isDark ? 'from-slate-900 via-slate-900/80' : 'from-white via-white/80'} to-transparent`}></div>
    </div>

    <div className="container mx-auto px-4 text-center max-w-5xl relative z-10">
      <div className="inline-block px-4 py-1.5 bg-blue-50/10 border border-blue-500/20 rounded-full mb-6 backdrop-blur-sm">
        <span className="text-blue-600 text-[10px] font-bold uppercase tracking-widest">Enterprise Class IT Support</span>
      </div>
      <h1 className={`text-4xl md:text-6xl lg:text-7xl mb-6 leading-[1.1] tracking-tight font-bold lowercase ${isDark ? 'text-white' : 'text-gray-900'}`}>Fast IT Support <br /><span className="text-blue-600">You Can Trust.</span></h1>
      <p className={`text-lg mb-8 max-w-2xl mx-auto leading-relaxed lowercase ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>We manage your technology infrastructure so you can focus on scale. Reliable, secure, and human-centric technical governance for modern business.</p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button onClick={onGoToLogin} className="w-full sm:w-64 bg-blue-600 text-white px-8 py-4 rounded-2xl text-[12px] font-bold lowercase hover:bg-blue-700 shadow-2xl shadow-blue-500/30 transition-all active:scale-95">Establish Connection</button>
        <button className={`w-full sm:w-64 border px-8 py-4 rounded-2xl text-[12px] font-bold lowercase transition-all ${isDark ? 'border-slate-800 hover:bg-slate-800 text-white' : 'border-blue-200 text-blue-800 hover:bg-blue-50'}`}>View Services</button>
      </div>
    </div>
  </section>
);

// --- HOME 2 (MODERN AI) ---
// --- HOME 2 (MODERN AI) ---
const ModernHero = ({ onGoToLogin, isDark }: any) => (
  <section className={`min-h-[calc(100vh-4rem)] flex items-center pt-20 pb-8 md:py-20 lg:py-32 relative overflow-hidden ${isDark ? 'bg-[#020617] text-white' : 'bg-gradient-to-br from-blue-50 via-white to-blue-100 text-blue-950'}`}>
    {/* Modern Hero Background Image */}
    <div className="absolute inset-0 z-0">
      <img
        src="/helpDesk/images/history_modern_dashboard.png"
        alt="Intelligent Dashboard"
        className={`w-full h-full object-cover transition-opacity duration-700 ${isDark ? 'opacity-50 mix-blend-overlay' : 'opacity-60'}`}
      />
      <div className={`absolute inset-0 ${isDark ? 'bg-[#020617]/80' : 'bg-white/70'} backdrop-blur-[1px]`}></div>
    </div>

    <div className={`absolute top-0 left-0 w-full h-full opacity-10 [background-size:20px_20px] ${isDark ? 'bg-[radial-gradient(#1e293b_1px,transparent_1px)]' : 'bg-[radial-gradient(#1d4ed8_1px,transparent_1px)]'} z-0`}></div>
    <div className="container mx-auto px-4 text-center max-w-5xl relative z-10">
      <div className={`inline-flex items-center space-x-3 px-6 py-2 rounded-full mb-8 backdrop-blur-sm ${isDark ? 'bg-blue-500/10 border border-blue-500/20' : 'bg-blue-500/10 border border-blue-500/20'}`}>
        <span className={`w-2 h-2 rounded-full animate-ping ${isDark ? 'bg-blue-400' : 'bg-blue-500'}`}></span>
        <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${isDark ? 'text-blue-300' : 'text-blue-600'}`}>Proactive Monitoring Active</span>
      </div>
      <h1 className="text-4xl md:text-7xl mb-6 leading-[1.1] tracking-tight font-bold lowercase">Predictive <br /><span className={`${isDark ? 'text-blue-500' : 'text-blue-600'}`}>Intelligent IT Support</span></h1>
      <p className={`text-lg mb-10 max-w-2xl mx-auto leading-relaxed lowercase ${isDark ? 'text-slate-400' : 'text-blue-800/70'}`}>Self-healing infrastructure powered by Gemini 3. We deploy autonomous support nodes that anticipate technical friction before it manifests.</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <button onClick={onGoToLogin} className={`w-full sm:w-64 px-8 py-4 font-bold rounded-2xl text-[12px] lowercase shadow-2xl hover:scale-105 transition-all text-white ${isDark ? 'bg-blue-600 shadow-blue-500/40' : 'bg-blue-600 shadow-blue-500/30 hover:bg-blue-700'}`}>Initialize Node</button>
        <button className={`w-full sm:w-64 px-8 py-4 border font-bold rounded-2xl text-[12px] lowercase transition-all ${isDark ? 'border-white/10 text-white hover:bg-white/5' : 'border-blue-200 text-blue-900 hover:bg-blue-50'}`}>Architecture Doc</button>
      </div>
    </div>
  </section>
);

// --- MAIN LANDING PAGE COMPONENT ---

// --- CORPORATE SECTIONS ---
// --- CORPORATE SECTIONS ---
const CorporateFeatures = () => (
  <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl font-bold lowercase mb-4 text-blue-900">Enterprise Capabilities</h2>
        <p className="text-blue-800/70">Built for scale, security, and compliant governance.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: 'fa-shield-halved', title: 'Managed Security', desc: '24/7 endpoint protection and threat monitoring.' },
          { icon: 'fa-cloud-arrow-up', title: 'Cloud Infrastructure', desc: 'Seamless migration and hybrid cloud management.' },
          { icon: 'fa-headset', title: 'Dedicated Support', desc: 'Direct access to Tier-3 engineers, no chatbots.' }
        ].map((f, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-blue-100 hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-xl mb-6"><i className={`fas ${f.icon}`}></i></div>
            <h3 className="font-bold text-lg mb-3 lowercase">{f.title}</h3>
            <p className="text-sm text-blue-900/60 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CorporateWhyUs = () => (
  <section className="py-20 bg-white overflow-hidden">
    <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row items-center gap-12">
      <div className="md:w-1/2">
        <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 border border-blue-100 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">Proven Track Record</div>
        <h2 className="text-3xl lg:text-4xl font-bold lowercase mb-6 text-blue-950 leading-tight">We define standard <br /> <span className="text-blue-600">for technical excellence.</span></h2>
        <p className="text-blue-900/70 mb-8 leading-relaxed">Unlike generic MSPs, we assign dedicated pods to your business. We understand your stack, your people, and your goals.</p>
        <ul className="space-y-4">
          {['99.99% Uptime SLA Guarantee', 'Sub-15 Minute Response Time', 'Quarterly Strategic Reviews'].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-blue-900 font-medium">
              <i className="fas fa-check-circle text-blue-600"></i> {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="md:w-1/2 relative">
        <div className="absolute inset-0 bg-blue-600 rounded-[2.5rem] rotate-3 opacity-10"></div>
        <img
          src="/helpDesk/images/engineer_fixing_server.png"
          alt="Engineer working on server"
          className="rounded-[2rem] shadow-2xl relative z-10 rotate-[-2deg] transition-transform hover:rotate-0 duration-500 border-4 border-white"
        />
        {/* Floating Stats Card */}
        <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-blue-50 z-20 animate-bounce [animation-duration:3s]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
              <i className="fas fa-bolt"></i>
            </div>
            <div>
              <p className="text-xs font-bold uppercase text-gray-500">Avg Response</p>
              <p className="text-xl font-bold text-gray-900">12 Mins</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
0;

const CorporateProcess = () => (
  <section className="py-24 bg-gradient-to-b from-white to-blue-50/30">
    <div className="container mx-auto px-4 max-w-6xl text-center">
      <div className="inline-block px-4 py-1.5 bg-blue-100/50 text-blue-700 border border-blue-100 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">Workflow</div>
      <h2 className="text-3xl font-bold lowercase mb-16 text-blue-950">Deployment Protocol</h2>
      <div className="grid md:grid-cols-4 gap-8">
        {[
          { step: '01', title: 'Audit', desc: 'Full infrastructure assessment.' },
          { step: '02', title: 'Strategy', desc: 'Custom governance framework.' },
          { step: '03', title: 'Migration', desc: 'Zero-downtime transition.' },
          { step: '04', title: 'Support', desc: '24/7 dedicated pod active.' }
        ].map((s, i) => (
          <div key={i} className="relative">
            <div className="w-16 h-16 mx-auto bg-white border border-blue-100 rounded-2xl flex items-center justify-center text-xl font-bold text-blue-600 shadow-sm mb-6 z-10 relative">{s.step}</div>
            {i !== 3 && <div className="hidden md:block absolute top-8 left-1/2 w-full h-[1px] bg-blue-100 -z-0"></div>}
            <h3 className="font-bold text-lg mb-2 lowercase">{s.title}</h3>
            <p className="text-sm text-blue-800/60 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CorporateTestimonials = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-4 max-w-6xl">
      <h2 className="text-3xl font-bold lowercase mb-16 text-center text-blue-950">Trusted Partners</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            quote: "HelpDesk Pro transformed our IT from a bottleneck into a strategic asset.",
            author: "Marcus Ray",
            role: "CTO, FinCorp",
            bg: "/helpDesk/images/testimonial_bg_tech_city.png"
          },
          {
            quote: "The response times are incredible. It feels like they are in the building with us.",
            author: "Elena V.",
            role: "Ops Director, TechFlow",
            bg: "/helpDesk/images/testimonial_bg_office.png"
          }
        ].map((t, i) => (
          <div key={i} className="relative p-10 rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-500">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img src={t.bg} alt="Background" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-slate-900/80 group-hover:bg-slate-900/70 transition-colors"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex text-yellow-500 mb-6 gap-1"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
              <p className="text-xl leading-relaxed mb-6 text-white font-medium">"{t.quote}"</p>
              <div>
                <p className="font-bold text-sm uppercase tracking-widest text-white">{t.author}</p>
                <p className="text-xs text-blue-400 font-bold uppercase tracking-widest mt-1">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CorporateCTA = ({ onRegister }: any) => (
  <section className="py-24 bg-blue-950 text-white text-center">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-3xl md:text-5xl font-bold lowercase mb-8">Ready to modernize your infrastructure?</h2>
      <p className="text-blue-200 mb-10 text-lg">Join 500+ forward-thinking companies running on our proactive core.</p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button onClick={onRegister} className="w-full sm:w-64 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold lowercase hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20">Get Started Now</button>
        <button className="w-full sm:w-64 px-8 py-4 rounded-xl font-bold lowercase border border-blue-800 hover:bg-blue-900 transition-all">Schedule Demo</button>
      </div>
    </div>
  </section>
);

// --- MODERN SECTIONS ---
// --- MODERN SECTIONS ---
const ModernFeatures = ({ isDark }: any) => (
  <section className={`py-24 ${isDark ? 'bg-[#020617] text-white' : 'bg-white text-blue-950'}`}>
    <div className="container mx-auto px-4 max-w-7xl">
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { title: "Predictive Analytics", desc: "AI models trained on 10M+ incidents predict failures before they occur." },
          { title: "Automated Patching", desc: "Self-healing fleets apply security patches instantly across all nodes." },
          { title: "Advanced Encryption", desc: "Future-proof data security using industry-leading cryptographic standards." }
        ].map((f, i) => (
          <div key={i} className={`group p-1 bg-gradient-to-b rounded-[2rem] transition-all duration-500 ${isDark ? 'from-blue-500/20 to-transparent hover:from-blue-500/40' : 'from-blue-200 to-transparent hover:from-blue-300'}`}>
            <div className={`h-full p-8 rounded-[1.9rem] flex flex-col justify-between ${isDark ? 'bg-[#0f172a]' : 'bg-blue-50/50 border border-blue-100'}`}>
              <div>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${isDark ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-100 text-blue-600'}`}><i className="fas fa-microchip"></i></div>
                <h3 className="text-xl font-bold mb-3 lowercase tracking-tight">{f.title}</h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-blue-800/70'}`}>{f.desc}</p>
              </div>
              <div className={`mt-8 pt-8 border-t flex items-center text-xs font-bold uppercase tracking-widest gap-2 ${isDark ? 'border-blue-500/10 text-blue-400' : 'border-blue-200 text-blue-600'}`}>
                <span>Active</span> <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ModernStats = ({ isDark }: any) => (
  <section className={`py-24 ${isDark ? 'bg-[#0f172a]' : 'bg-blue-50'}`}>
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className={`text-3xl font-bold lowercase mb-6 leading-tight ${isDark ? 'text-white' : 'text-blue-950'}`}>Real-Time <br /><span className={isDark ? 'text-blue-400' : 'text-blue-600'}>System Velocity</span></h2>
          <p className={`text-lg mb-8 leading-relaxed ${isDark ? 'text-slate-400' : 'text-blue-800/70'}`}>Our AI engine processes incidents 400x faster than traditional human-only support desks.</p>

          <div className="space-y-6">
            {[
              { label: 'Auto-Resolution Rate', val: '87%', sub: 'No human intervention' },
              { label: 'Predictive Accuracy', val: '99.2%', sub: 'Pre-incident detection' },
              { label: 'Global Latency', val: '< 12ms', sub: 'Edge-distributed nodes' }
            ].map((s, i) => (
              <div key={i} className={`flex items-center justify-between p-6 rounded-2xl border ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-blue-100 shadow-sm'}`}>
                <div>
                  <p className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${isDark ? 'text-blue-400' : 'text-blue-500'}`}>{s.label}</p>
                  <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-blue-300'}`}>{s.sub}</p>
                </div>
                <div className={`text-3xl font-bold tracking-tighter ${isDark ? 'text-white' : 'text-blue-950'}`}>{s.val}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={`aspect-square rounded-[3rem] p-8 border-4 border-dashed relative overflow-hidden flex items-center justify-center ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-blue-200'}`}>
          <div className={`absolute inset-0 bg-grid-slate-800/[0.05] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),transparent)]`}></div>
          <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
            <img
              src="/helpDesk/images/modern_ai_node.png"
              alt="AI Neural Node"
              className="w-full h-full object-contain drop-shadow-2xl animate-pulse"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ModernTimeline = ({ isDark }: any) => (
  <section className={`py-24 ${isDark ? 'bg-[#020617]' : 'bg-white'}`}>
    <div className="container mx-auto px-4 max-w-4xl text-center">
      <h2 className={`text-3xl font-bold lowercase mb-16 ${isDark ? 'text-white' : 'text-blue-950'}`}>Integration Roadmap</h2>
      <div className="space-y-4">
        {[
          { time: 'Day 01', title: 'System Mapping', desc: 'AI scans complete topology.' },
          { time: 'Day 03', title: 'Policy Deployment', desc: 'Automated governance rules applied.' },
          { time: 'Day 07', title: 'Full Optimization', desc: 'System enters self-healing state.' }
        ].map((t, i) => (
          <div key={i} className={`flex items-center gap-6 p-6 rounded-2xl border transition-all hover:scale-[1.02] ${isDark ? 'bg-slate-900 border-slate-800 hover:border-blue-500/30' : 'bg-blue-50 border-blue-100 hover:border-blue-200'}`}>
            <div className={`w-20 py-2 text-center rounded-lg text-[10px] font-bold uppercase tracking-widest ${isDark ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-200 text-blue-800'}`}>{t.time}</div>
            <div className="text-left flex-1">
              <h4 className={`font-bold text-lg lowercase ${isDark ? 'text-white' : 'text-blue-950'}`}>{t.title}</h4>
              <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-blue-800/60'}`}>{t.desc}</p>
            </div>
            <i className={`fas fa-arrow-right opacity-0 md:opacity-100 ${isDark ? 'text-slate-600' : 'text-blue-300'}`}></i>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ModernCTA = ({ onRegister, isDark }: any) => (
  <section className={`py-32 relative overflow-hidden ${isDark ? 'bg-[#020617]' : 'bg-blue-900'}`}>
    <div className="absolute inset-0 z-0">
      <img src="/helpDesk/images/testimonial_bg_tech_city.png" alt="City Grid" className="w-full h-full object-cover opacity-30 mix-blend-overlay" />
    </div>
    <div className={`absolute inset-0 bg-gradient-to-r blur-3xl opacity-30 ${isDark ? 'from-blue-600/20 to-sky-600/20' : 'from-blue-500/20 to-sky-500/20'} z-0`}></div>
    <div className="container mx-auto px-4 relative z-10 text-center">
      <h2 className="text-5xl md:text-7xl font-bold text-white lowercase tracking-tight mb-8">Modernize Your IT</h2>
      <p className={`text-lg mb-12 max-w-xl mx-auto ${isDark ? 'text-blue-200' : 'text-blue-100'}`}>Initialize your workspace with the most advanced autonomous IT stack ever built.</p>
      <button onClick={onRegister} className="bg-white text-black px-10 py-4 rounded-full font-bold lowercase hover:scale-105 transition-transform shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
        Get Access
      </button>
    </div>
  </section>
);


interface LandingPageProps {
  theme: Theme;
  toggleTheme: () => void;
  subView: LandingSubView;
  setSubView: (v: LandingSubView) => void;
  landingStyle: LandingStyle;
  setLandingStyle: (s: LandingStyle) => void;
  onGoToLogin: () => void;
  onGoToRegister: () => void;
  onSignInUser: () => void;
  onSignInAdmin: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({
  theme, toggleTheme, subView, setSubView, landingStyle, setLandingStyle, onGoToLogin, onGoToRegister, onSignInUser, onSignInAdmin
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHomeOptionsOpen, setIsHomeOptionsOpen] = useState(false);
  const [isDashboardsOpen, setIsDashboardsOpen] = useState(false);
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [activeFaqCategory, setActiveFaqCategory] = useState<string>('General');
  const [contactDepartment, setContactDepartment] = useState<string>('Support');

  // Constants for Services Page
  const SERVICE_WORKFLOW = [
    { step: '01', title: 'Discovery', desc: 'We analyze your current infrastructure and identify bottlenecks.', icon: 'fa-magnifying-glass' },
    { step: '02', title: 'Strategy', desc: 'We design a custom roadmap aligned with your business goals.', icon: 'fa-compass-drafting' },
    { step: '03', title: 'Implementation', desc: 'Seamless deployment of solutions with zero downtime.', icon: 'fa-code-branch' },
    { step: '04', title: 'Optimization', desc: 'Continuous monitoring and improvement of your systems.', icon: 'fa-chart-line' }
  ];

  const TECH_STACK = [
    { category: 'Cloud', items: ['AWS', 'Azure', 'Google Cloud', 'DigitalOcean'] },
    { category: 'Security', items: ['SentinelOne', 'CrowdStrike', 'Fortinet', 'Splunk'] },
    { category: 'DevOps', items: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform'] },
    { category: 'Collaboration', items: ['Microsoft 365', 'Slack', 'Teams', 'Zoom'] }
  ];

  const SERVICES_DATA = [
    {
      title: "Managed IT",
      icon: "fa-server",
      desc: "Proactive infrastructure monitoring and maintenance.",
      features: ["24/7 Server Monitoring", "Automated Patch Management", "Asset Lifecycle Management", "Vendor Management"]
    },
    {
      title: "Cybersecurity",
      icon: "fa-shield-virus",
      desc: "Threat detection, firewall management, and zero-trust architecture.",
      features: ["Endpoint Protection (EDR)", "SIEM/SOC Services", "Penetration Testing", "Security Awareness Training"]
    },
    {
      title: "Cloud Solutions",
      icon: "fa-cloud",
      desc: "Azure/AWS migration, management, and cost optimization.",
      features: ["Cloud Migration Strategy", "Architecture Design", "Cost Optimization", "Hybrid Cloud Management"]
    },
    {
      title: "Consulting",
      icon: "fa-briefcase",
      desc: "Strategic technology planning and digital transformation.",
      features: ["Digital Transformation", "vCIO Services", "IT Budgeting", "Compliance Assessments"]
    },
    {
      title: "Network",
      icon: "fa-network-wired",
      desc: "Architecture design, implementation, and optimization.",
      features: ["SD-WAN Implementation", "WiFi 6 Upgrades", "VPN Solutions", "Network Security"]
    },
    {
      title: "Disaster Recovery",
      icon: "fa-hard-drive",
      desc: "Business continuity planning and data backup solutions.",
      features: ["Automated Backups", "Ransomware Recovery", "Business Continuity Planning", "Disaster Recovery Testing"]
    }
  ];

  const CASE_STUDIES = [
    {
      client: "FinTech Global",
      metric: "99.99% Uptime",
      desc: "Migrated legacy banking infrastructure to a hybrid cloud environment, reducing downtime by 94%.",
      tags: ["Cloud Migration", "Security"]
    },
    {
      client: "HealthPlus Networks",
      metric: "$2M Saved",
      desc: "Optimized software licensing and automated compliance reporting for 50+ hospital locations.",
      tags: ["Cost Optimization", "Compliance"]
    },
    {
      client: "Logistics One",
      metric: "10x Faster",
      desc: "Deployed edge computing nodes to improve warehouse tracking and inventory management speed.",
      tags: ["IoT", "Edge Computing"]
    }
  ];

  const PRICING_TIERS = [
    {
      name: "Standard",
      price: "$29",
      period: "/user/mo",
      desc: "Essential support for growing teams.",
      features: ["8x5 Remote Support", "Basic Monitoring", "Antivirus Included", "Patch Management"],
      highlight: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/user/mo",
      desc: "Comprehensive IT management.",
      features: ["24/7 Remote Support", "Advanced Security (EDR)", "Cloud Backup", "Vendor Management", "Priority Response"],
      highlight: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      desc: "Strategic partnership & compliance.",
      features: ["Dedicated CIO", "On-site Support Options", "Compliance Management", "Disaster Recovery", "Zero Trust Security"],
      highlight: false
    }
  ];

  // Constants for About Page
  const CORE_VALUES = [
    { title: 'Reliability', desc: 'We deliver consistent performance you can count on, 24/7/365.', icon: 'fa-lock' },
    { title: 'Transparency', desc: 'No hidden fees, no technical jargon. Just clear, honest communication.', icon: 'fa-comments' },
    { title: 'Innovation', desc: 'We constantly evolve our stack to keep you ahead of the curve.', icon: 'fa-lightbulb' },
    { title: 'Human-Centric', desc: 'Technology serves people, not the other way around.', icon: 'fa-users' }
  ];

  const COMPANY_HISTORY = [
    { year: '2010', title: 'Founded', desc: 'Started in a garage with a mission to fix IT support.' },
    { year: '2015', title: 'Global Expansion', desc: 'Opened offices in London and Singapore.' },
    { year: '2020', title: 'AI Integration', desc: 'Launched our proprietary neural support core.' },
    { year: '2024', title: 'Enterprise Scale', desc: 'Serving 500+ enterprise clients worldwide.' }
  ];

  const CERTIFICATIONS = [
    { name: 'ISO 27001', icon: 'fa-certificate' },
    { name: 'SOC 2 Type II', icon: 'fa-shield-halved' },
    { name: 'GDPR Compliant', icon: 'fa-globe-europe' },
    { name: 'HIPAA Ready', icon: 'fa-notes-medical' }
  ];

  // Constants for FAQ Page
  const HELP_CATEGORIES = [
    { name: 'Account & Billing', icon: 'fa-credit-card', desc: 'Manage subscriptions and invoices' },
    { name: 'Technical Support', icon: 'fa-microchip', desc: 'Hardware and software troubleshooting' },
    { name: 'Security & Compliance', icon: 'fa-shield-halved', desc: 'Protocols, audits, and ISO standards' },
    { name: 'User Management', icon: 'fa-users', desc: 'Onboarding and access control' }
  ];

  const GLOSSARY_TERMS = [
    { term: 'EDR', def: 'Endpoint Detection and Response - advanced security for devices.' },
    { term: 'SLA', def: 'Service Level Agreement - our promise of guaranteed uptime.' },
    { term: 'Zero Trust', def: 'Security model requiring verification for every person and device.' },
    { term: 'VoIP', def: 'Voice over Internet Protocol - internet-based phone systems.' }
  ];

  const FAQ_DATA = [
    {
      category: 'General',
      items: [
        { q: "What is HelpDesk Pro?", a: "HelpDesk Pro is a comprehensive IT support platform designed for modern enterprises." },
        { q: "Do you offer 24/7 support?", a: "Yes, our support teams and automated systems operate 24/7/365 across all time zones." },
        { q: "How quickly can we get started?", a: "Onboarding typically takes 1-2 weeks depending on the size of your infrastructure." }
      ]
    },
    {
      category: 'Technical',
      items: [
        { q: "Do you support remote employees?", a: "Yes, our secure remote management tools allow us to support staff anywhere in the world." },
        { q: "What security standards do you follow?", a: "We adhere to ISO 27001, SOC 2 Type II, and NIST guidelines for maximum security." },
        { q: "Can you manage our existing hardware?", a: "Absolutely. We can take over management of your current fleet or help you upgrade." }
      ]
    },
    {
      category: 'Billing',
      items: [
        { q: "Is hardware included in the monthly fee?", a: "Hardware as a Service (HaaS) options are available, or we can manage your existing fleet." },
        { q: "What are your contract terms?", a: "We offer flexible monthly plans as well as discounted annual contracts." },
        { q: "Are there any setup fees?", a: "There is a one-time onboarding fee which covers the initial audit and system configuration." }
      ]
    }
  ];

  // Constants for Contact Page
  const DEPARTMENTS = [
    { name: 'Technical Support', email: 'support@helpdesk.io', phone: '+1 (800) 555-0101' },
    { name: 'Sales & Inquiries', email: 'sales@helpdesk.io', phone: '+1 (800) 555-0102' },
    { name: 'Billing & Accounts', email: 'billing@helpdesk.io', phone: '+1 (800) 555-0103' },
    { name: 'Partnerships', email: 'partners@helpdesk.io', phone: '+1 (800) 555-0104' }
  ];

  const OFFICE_LOCATIONS = [
    { city: 'San Francisco', address: '100 Tech Plaza, CA 94107', timezone: 'PST (UTC-8)' },
    { city: 'London', address: '25 Bishopsgate, EC2N 4AA', timezone: 'GMT (UTC+0)' },
    { city: 'Singapore', address: '8 Marina Blvd, 018981', timezone: 'SGT (UTC+8)' },
    { city: 'Sydney', address: '100 Barangaroo Ave, NSW 2000', timezone: 'AEDT (UTC+11)' }
  ];
  // Decoupled dark mode: Modern style now respects theme pref, but visualizes as Red/White in light mode
  const isDark = theme === 'dark';

  const renderContent = () => {
    if (subView === 'home') {
      return (
        <div className="animate-in fade-in duration-700">
          {landingStyle === 'corporate' ? (
            <>
              <CorporateHero onGoToLogin={onGoToLogin} isDark={theme === 'dark'} />
              <CorporateFeatures />
              <CorporateProcess />
              <CorporateTestimonials />
              <CorporateWhyUs />
              <CorporateCTA onRegister={onGoToRegister} />
            </>
          ) : (
            <>
              <ModernHero onGoToLogin={onGoToLogin} isDark={theme === 'dark'} />
              <LiveTicker isDark={theme === 'dark'} />
              <ModernFeatures isDark={theme === 'dark'} />
              <ModernStats isDark={theme === 'dark'} />
              <ModernTimeline isDark={theme === 'dark'} />
              <ModernCTA onRegister={onGoToRegister} isDark={theme === 'dark'} />
            </>
          )}
        </div>
      );
    }
    return (
      <div className={`min-h-screen pt-24 ${isDark ? 'bg-[#020617] text-white' : 'bg-gradient-to-br from-blue-50 via-white to-blue-100 text-blue-950'}`}>

        {/* SERVICES PAGE */}
        {subView === 'services' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center max-w-4xl mx-auto px-4 mb-20">
              <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">Our Expertise</span>
              <h1 className="text-4xl md:text-6xl font-bold lowercase mb-6">Comprehensive IT Solutions</h1>
              <p className={`text-lg leading-relaxed max-w-2xl mx-auto ${isDark ? 'text-slate-500' : 'text-blue-800/70'}`}>From essential helpdesk support to advanced cybersecurity ecosystems, we manage your entire digital lifecycle.</p>
            </div>

            <div className="container mx-auto px-4 max-w-6xl pb-20">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 animate-in fade-in zoom-in duration-700 delay-150">
                {SERVICES_DATA.map((s, i) => (
                  <div
                    key={i}
                    className={`relative p-8 rounded-[2rem] border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-default group overflow-hidden ${isDark ? 'bg-slate-900 border-slate-800 hover:border-blue-500/30' : 'bg-white border-blue-100 hover:border-blue-200'} ${expandedService === i ? 'row-span-2' : ''}`}
                  >
                    <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-xl mb-6 shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform"><i className={`fas ${s.icon}`}></i></div>
                    <h3 className="text-xl font-bold mb-3 lowercase">{s.title}</h3>
                    <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-slate-500' : 'text-blue-800/70'}`}>{s.desc}</p>

                    {/* Expandable Content */}
                    <div className={`grid transition-all duration-500 ease-in-out ${expandedService === i ? 'grid-rows-[1fr] opacity-100 mb-6' : 'grid-rows-[0fr] opacity-0'}`}>
                      <div className="overflow-hidden">
                        <h4 className={`text-xs font-bold uppercase tracking-widest mb-3 ${isDark ? 'text-slate-400' : 'text-blue-900'}`}>Key Features</h4>
                        <ul className="space-y-2">
                          {s.features.map((f, idx) => (
                            <li key={idx} className={`text-sm flex items-center gap-2 ${isDark ? 'text-slate-500' : 'text-blue-800/70'}`}>
                              <i className="fas fa-check text-xs text-blue-500"></i> {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <button
                      onClick={() => setExpandedService(expandedService === i ? null : i)}
                      className="text-xs font-bold uppercase tracking-widest text-blue-600 hover:text-blue-500 flex items-center gap-2"
                    >
                      {expandedService === i ? 'Show Less' : 'Learn More'} <i className={`fas fa-chevron-down transition-transform ${expandedService === i ? 'rotate-180' : ''}`}></i>
                    </button>
                  </div>
                ))}
              </div>

              {/* Case Studies Section */}
              <div className="mb-24 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
                <div className="text-center mb-16">
                  <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">Success Stories</span>
                  <h2 className="text-3xl font-bold lowercase mb-6">Proven Results</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  {CASE_STUDIES.map((study, i) => (
                    <div key={i} className={`p-8 rounded-3xl border transition-all hover:shadow-lg ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-blue-100'}`}>
                      <div className="text-4xl font-bold text-blue-600 mb-2">{study.metric}</div>
                      <h3 className={`font-bold text-lg mb-4 ${isDark ? 'text-white' : 'text-blue-900'}`}>{study.client}</h3>
                      <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>{study.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {study.tags.map((tag, idx) => (
                          <span key={idx} className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md ${isDark ? 'bg-slate-800 text-slate-400' : 'bg-blue-50 text-blue-600'}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Section */}
              <div className="mb-24 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
                <div className="text-center mb-16">
                  <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">Transparent Pricing</span>
                  <h2 className="text-3xl font-bold lowercase mb-6">Plans that scale</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  {PRICING_TIERS.map((tier, i) => (
                    <div key={i} className={`relative p-8 rounded-3xl border transition-all ${tier.highlight
                      ? 'border-blue-500 ring-4 ring-blue-500/10 shadow-2xl scale-105 z-10 bg-white'
                      : isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-blue-100'
                      }`}>
                      {tier.highlight && (
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                          Most Popular
                        </div>
                      )}
                      <h3 className={`font-bold text-xl mb-2 lowercase ${isDark && !tier.highlight ? 'text-white' : 'text-blue-900'}`}>{tier.name}</h3>
                      <div className="flex items-baseline mb-4">
                        <span className={`text-4xl font-bold ${isDark && !tier.highlight ? 'text-white' : 'text-blue-600'}`}>{tier.price}</span>
                        <span className={`text-sm ml-1 ${isDark && !tier.highlight ? 'text-slate-500' : 'text-gray-500'}`}>{tier.period}</span>
                      </div>
                      <p className={`text-sm mb-8 ${isDark && !tier.highlight ? 'text-slate-400' : 'text-gray-600'}`}>{tier.desc}</p>
                      <ul className="space-y-4 mb-8">
                        {tier.features.map((f, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm">
                            <i className="fas fa-check text-green-500 mt-1"></i>
                            <span className={isDark && !tier.highlight ? 'text-slate-300' : 'text-gray-700'}>{f}</span>
                          </li>
                        ))}
                      </ul>
                      <button onClick={onGoToRegister} className={`w-full py-4 rounded-xl font-bold lowercase transition-all ${tier.highlight
                        ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/30'
                        : isDark ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                        }`}>Choose Plan</button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Workflow Section */}
              <div className="mb-24 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                <div className="text-center mb-16">
                  <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">Engagement Process</span>
                  <h2 className="text-3xl font-bold lowercase mb-6">How We Work</h2>
                  <p className={`text-lg leading-relaxed max-w-2xl mx-auto ${isDark ? 'text-slate-500' : 'text-blue-800/70'}`}>A transparent, structured approach to modernizing your IT infrastructure.</p>
                </div>
                <div className="grid md:grid-cols-4 gap-8">
                  {SERVICE_WORKFLOW.map((step, i) => (
                    <div key={i} className="relative group">
                      <div className={`w-20 h-20 mx-auto rounded-3xl flex items-center justify-center text-2xl mb-6 transition-all ${isDark ? 'bg-slate-900 text-blue-500 group-hover:bg-blue-950' : 'bg-blue-50 text-blue-600 group-hover:bg-blue-100'}`}>
                        <i className={`fas ${step.icon}`}></i>
                      </div>
                      <div className="text-center">
                        <span className={`block text-xs font-bold uppercase tracking-widest mb-2 ${isDark ? 'text-slate-600' : 'text-blue-200'}`}>{step.step}</span>
                        <h3 className="text-lg font-bold mb-3 lowercase">{step.title}</h3>
                        <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-500' : 'text-blue-800/70'}`}>{step.desc}</p>
                      </div>
                      {i !== 3 && (
                        <div className={`hidden md:block absolute top-10 left-[60%] w-[80%] h-[2px] ${isDark ? 'bg-slate-800' : 'bg-blue-50'}`}></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Section */}
              <div className="mb-24 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
                <div className="text-center mb-16">
                  <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">Technologies</span>
                  <h2 className="text-3xl font-bold lowercase mb-6">Our Tech Stack</h2>
                </div>
                <div className="grid md:grid-cols-4 gap-6">
                  {TECH_STACK.map((cat, i) => (
                    <div key={i} className={`p-6 rounded-2xl border ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-blue-100'}`}>
                      <h3 className={`font-bold mb-4 pb-2 border-b ${isDark ? 'text-white border-slate-700' : 'text-blue-900 border-blue-50'}`}>{cat.category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {cat.items.map((tech, idx) => (
                          <span key={idx} className={`text-xs px-2 py-1 rounded-md font-medium ${isDark ? 'bg-slate-800 text-slate-400' : 'bg-blue-50 text-blue-700'}`}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`rounded-[3rem] p-12 text-center ${isDark ? 'bg-indigo-950/30 border border-indigo-500/20' : 'bg-white border border-blue-100 shadow-xl shadow-blue-900/5'}`}>
                <h2 className="text-3xl font-bold lowercase mb-4">Ready to upgrade your stack?</h2>
                <button onClick={onGoToRegister} className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold lowercase shadow-xl hover:bg-blue-700 transition-all mt-6">Get Started Today</button>
              </div>
            </div>
          </div>
        )}

        {/* ABOUT PAGE */}
        {subView === 'about' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center max-w-4xl mx-auto px-4 mb-20">
              <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">Our Mission</span>
              <h1 className="text-4xl md:text-6xl font-bold lowercase mb-6">Human-Centric Technology</h1>
              <p className={`text-lg leading-relaxed max-w-2xl mx-auto ${isDark ? 'text-slate-500' : 'text-blue-800/70'}`}>We believe technology should empower people, not complicate their lives.</p>
            </div>

            <div className="container mx-auto px-4 max-w-5xl pb-20 space-y-24">
              {/* Stats Grid with Layered Images */}
              <div className="grid md:grid-cols-2 gap-12 items-center animate-in fade-in slide-in-from-bottom-8 duration-700">
                <div className="relative h-[400px]">
                  {/* Layer 1: Vintage Bottom Layer (-12deg) */}
                  <div className="absolute top-10 left-10 w-[70%] h-[60%] rounded-2xl overflow-hidden shadow-2xl rotate-[-12deg] border-4 border-white z-0">
                    <img src="/helpDesk/images/history_vintage_server.png" alt="Vintage Server Room" className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-500" />
                  </div>
                  {/* Layer 2: Modern Top Layer (12deg) */}
                  <div className="absolute bottom-10 right-10 w-[70%] h-[60%] rounded-2xl overflow-hidden shadow-2xl rotate-[12deg] border-4 border-white z-10">
                    <img src="/helpDesk/images/history_modern_dashboard.png" alt="Modern Command Center" className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className="text-center md:text-left">
                  <h2 className="text-3xl font-bold lowercase mb-6">Since 2010</h2>
                  <p className={`leading-relaxed mb-6 ${isDark ? 'text-slate-500' : 'text-blue-800/70'}`}>Founded on the principle that IT support needed a revolution. We started as a small team of engineers tired of the "break-fix" model. Today, we are a global partner for companies that value reliability.</p>
                  <div className="grid grid-cols-2 gap-6">
                    <div><h4 className="text-4xl font-bold text-blue-600">500+</h4><span className={`text-xs uppercase tracking-widest font-bold ${isDark ? 'text-slate-400' : 'text-blue-300'}`}>Clients</span></div>
                    <div><h4 className="text-4xl font-bold text-blue-600">50+</h4><span className={`text-xs uppercase tracking-widest font-bold ${isDark ? 'text-slate-400' : 'text-blue-300'}`}>Experts</span></div>
                  </div>
                </div>
              </div>

              {/* Core Values Section */}
              <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
                <div className="text-center mb-12">
                  <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">Our DNA</span>
                  <h2 className="text-3xl font-bold lowercase mb-6">Core Values</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {CORE_VALUES.map((val, i) => (
                    <div key={i} className={`p-6 rounded-2xl border text-center transition-all hover:-translate-y-1 ${isDark ? 'bg-slate-900 border-slate-800 hover:border-blue-500/30' : 'bg-white border-blue-100 hover:border-blue-200'}`}>
                      <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4 ${isDark ? 'bg-slate-800 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                        <i className={`fas ${val.icon}`}></i>
                      </div>
                      <h3 className="font-bold mb-2 lowercase">{val.title}</h3>
                      <p className={`text-sm ${isDark ? 'text-slate-500' : 'text-blue-800/60'}`}>{val.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Company Journey Timeline */}
              <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                <div className="text-center mb-16">
                  <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">Milestones</span>
                  <h2 className="text-3xl font-bold lowercase mb-6">Our Journey</h2>
                </div>
                <div className="grid md:grid-cols-4 gap-4">
                  {COMPANY_HISTORY.map((item, i) => (
                    <div key={i} className="relative">
                      <div className={`text-4xl font-bold mb-4 ${isDark ? 'text-indigo-900/40' : 'text-red-100'}`}>{item.year}</div>
                      <div className={`relative z-10 p-6 rounded-2xl border h-full ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-red-100'}`}>
                        <h3 className="font-bold mb-2 lowercase">{item.title}</h3>
                        <p className={`text-sm ${isDark ? 'text-slate-500' : 'text-red-800/60'}`}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications Section */}
              <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
                <div className="text-center mb-12">
                  <span className="text-red-600 font-bold uppercase tracking-widest text-xs mb-4 block">Compliance</span>
                  <h2 className="text-3xl font-bold lowercase mb-8">Certifications</h2>
                  <div className="flex flex-wrap justify-center gap-8">
                    {CERTIFICATIONS.map((cert, i) => (
                      <div key={i} className={`flex items-center gap-3 px-6 py-3 rounded-full border ${isDark ? 'bg-slate-900 border-slate-800 text-slate-400' : 'bg-white border-red-100 text-red-800/70'}`}>
                        <i className={`fas ${cert.icon} ${isDark ? 'text-indigo-500' : 'text-red-500'}`}></i>
                        <span className="font-bold text-sm uppercase tracking-wide">{cert.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Leadership Section */}
              <div className="text-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
                <h2 className="text-3xl font-bold lowercase mb-12">Leadership Team</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { role: 'CEO', name: 'Alex V.', img: '/helpDesk/images/team_ceo_male.png' },
                    { role: 'CTO', name: 'James L.', img: '/helpDesk/images/team_cto_female.png' },
                    { role: 'COO', name: 'Michael R.', img: '/helpDesk/images/team_coo_male.png' }
                  ].map((leader, i) => (
                    <div key={i} className={`p-8 rounded-3xl border transition-all hover:scale-105 ${isDark ? 'border-slate-800 bg-slate-900 hover:border-indigo-500/30' : 'border-red-100 bg-white hover:border-red-200'}`}>
                      <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-red-50 shadow-lg">
                        <img src={leader.img} alt={leader.role} className="w-full h-full object-cover" />
                      </div>
                      <h3 className="font-bold text-lg mb-1">{leader.name}</h3>
                      <p className="text-xs font-bold uppercase tracking-widest text-red-600">{leader.role}</p>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-10">
                  <button onClick={onGoToRegister} className="bg-red-600 text-white px-8 py-4 rounded-xl font-bold lowercase hover:bg-red-700 transition-all shadow-xl shadow-red-500/20">Join Our Team</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FAQ PAGE */}
        {subView === 'faq' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
            <div className="text-center max-w-4xl mx-auto px-4 mb-20">
              <span className="text-red-600 font-bold uppercase tracking-widest text-xs mb-4 block">Help Center</span>
              <h1 className="text-4xl md:text-6xl font-bold lowercase mb-6">Common Questions</h1>
              <p className={`text-lg leading-relaxed max-w-2xl mx-auto ${isDark ? 'text-slate-500' : 'text-red-800/70'}`}>Everything you need to know about our service models.</p>
            </div>

            <div className="container mx-auto px-4 max-w-4xl space-y-20">

              {/* Visual Help Categories (Compact) */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                {HELP_CATEGORIES.map((cat, i) => (
                  <div key={i} className={`p-6 rounded-2xl border text-center transition-all hover:-translate-y-1 ${isDark ? 'bg-slate-900 border-slate-800 hover:border-blue-500/30' : 'bg-white border-blue-50 hover:border-blue-200'}`}>
                    <div className={`w-10 h-10 mx-auto rounded-xl flex items-center justify-center mb-3 ${isDark ? 'bg-slate-800 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                      <i className={`fas ${cat.icon}`}></i>
                    </div>
                    <h3 className="font-bold text-sm lowercase mb-1">{cat.name}</h3>
                    <p className={`text-[10px] leading-tight ${isDark ? 'text-slate-500' : 'text-blue-800/60'}`}>{cat.desc}</p>
                  </div>
                ))}
              </div>

              {/* FAQ Section */}
              <div className="space-y-8">
                {/* Category Tabs */}
                <div className="flex justify-center gap-4 flex-wrap">
                  {FAQ_DATA.map((cat, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveFaqCategory(cat.category)}
                      className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${activeFaqCategory === cat.category
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                        : isDark
                          ? 'bg-slate-900 text-slate-400 hover:bg-slate-800'
                          : 'bg-white text-gray-500 hover:bg-blue-50'
                        }`}
                    >
                      {cat.category}
                    </button>
                  ))}
                </div>

                <div className="space-y-4 min-h-[400px]">
                  {FAQ_DATA.find(c => c.category === activeFaqCategory)?.items.map((faq, i) => (
                    <div key={i} className={`p-6 rounded-2xl border text-left animate-in fade-in slide-in-from-bottom-2 duration-500 ${isDark ? 'border-slate-800 bg-slate-900' : 'border-blue-50 bg-white hover:border-blue-100 transition-colors'}`}>
                      <h3 className="font-bold text-base mb-2 flex items-start gap-3"><i className="fas fa-question-circle text-blue-600 mt-1"></i> {faq.q}</h3>
                      <p className={`text-sm leading-relaxed pl-7 ${isDark ? 'text-slate-500' : 'text-blue-800/70'}`}>{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Glossary Section (Compact) */}
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
                <h4 className={`text-center font-bold mb-8 lowercase ${isDark ? 'text-slate-400' : 'text-blue-900'}`}>Common Terminology</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {GLOSSARY_TERMS.map((term, i) => (
                    <div key={i} className={`flex items-start gap-4 p-4 rounded-xl border ${isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50 border-slate-100'}`}>
                      <span className="font-bold text-blue-600 min-w-[60px] text-right">{term.term}</span>
                      <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>{term.def}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center pt-8 border-t border-slate-100 dark:border-slate-800">
                <p className={`mb-6 text-sm ${isDark ? 'text-slate-500' : 'text-blue-800/70'}`}>Still have questions? We are here to help.</p>
                <button onClick={() => setSubView('contact')} className="border border-blue-600 text-blue-600 px-8 py-3 rounded-xl font-bold lowercase text-sm hover:bg-blue-50 transition-all">Contact Support</button>
              </div>
            </div>
          </div>
        )}

        {/* CONTACT PAGE */}
        {subView === 'contact' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
            <div className="text-center max-w-4xl mx-auto px-4 mb-16">
              <span className="text-red-600 font-bold uppercase tracking-widest text-xs mb-4 block">Get In Touch</span>
              <h1 className="text-4xl md:text-6xl font-bold lowercase mb-6">Contact Support</h1>
              <p className={`text-lg leading-relaxed max-w-2xl mx-auto ${isDark ? 'text-slate-500' : 'text-red-800/70'}`}>We are here to help. Reach out via any of the channels below.</p>
            </div>

            <div className="container mx-auto px-4 max-w-6xl">
              {/* 1. Detailed Contact Form (Moved First) */}
              <div className={`rounded-[3rem] p-8 md:p-12 border mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 ${isDark ? 'border-slate-800 bg-slate-900' : 'border-blue-100 bg-white shadow-xl shadow-blue-900/5'}`}>
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h2 className="text-2xl font-bold lowercase mb-6">Send a Message</h2>
                    <form className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="First Name" className={`w-full p-4 rounded-xl border ${isDark ? 'bg-slate-950 border-slate-700' : 'bg-blue-50 border-blue-100'} outline-none focus:border-blue-600 transition-colors`} />
                        <input type="text" placeholder="Last Name" className={`w-full p-4 rounded-xl border ${isDark ? 'bg-slate-950 border-slate-700' : 'bg-blue-50 border-blue-100'} outline-none focus:border-blue-600 transition-colors`} />
                      </div>
                      <input type="email" placeholder="Email Address" className={`w-full p-4 rounded-xl border ${isDark ? 'bg-slate-950 border-slate-700' : 'bg-blue-50 border-blue-100'} outline-none focus:border-blue-600 transition-colors`} />

                      <select
                        value={contactDepartment}
                        onChange={(e) => setContactDepartment(e.target.value)}
                        className={`w-full p-4 rounded-xl border ${isDark ? 'bg-slate-950 border-slate-700 text-slate-400' : 'bg-blue-50 border-blue-100 text-gray-500'} outline-none focus:border-blue-600 transition-colors appearance-none`}
                      >
                        <option value="Support">Technical Support</option>
                        <option value="Sales">Sales & Inquiries</option>
                        <option value="Billing">Billing & Accounts</option>
                        <option value="Partnerships">Partnerships</option>
                      </select>

                      <textarea rows={4} placeholder="How can we help?" className={`w-full p-4 rounded-xl border ${isDark ? 'bg-slate-950 border-slate-700' : 'bg-blue-50 border-blue-100'} outline-none focus:border-blue-600 transition-colors`}></textarea>
                      <button type="button" className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold lowercase hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20">Send Message</button>
                    </form>
                  </div>
                  <div className="h-full min-h-[300px] rounded-3xl bg-slate-200 overflow-hidden relative">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=-122.40648269653322%2C37.78168233361181%2C-122.390775680542%2C37.78950468305886&amp;layer=mapnik&amp;marker=37.78559%2C-122.39863"
                      style={{ border: 0, minHeight: '100%' }}
                      allowFullScreen
                      loading="lazy"
                      title="Office Location"
                      className={`w-full h-full ${isDark ? 'opacity-80 invert hue-rotate-180 brightness-90 grayscale-[0.5]' : ''}`}
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* 2. Quick Info Cards */}
              <div className="grid md:grid-cols-3 gap-8 mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
                <div className={`p-8 rounded-3xl border text-center transition-all hover:-translate-y-1 ${isDark ? 'border-slate-800 bg-slate-900' : 'border-blue-100 bg-white shadow-sm'}`}>
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full mx-auto flex items-center justify-center mb-6"><i className="fas fa-phone"></i></div>
                  <h3 className="font-bold mb-2">Phone</h3>
                  <p className="text-slate-500 text-sm opacity-80">+1 (800) HELP-PRO</p>
                  <p className="text-slate-400 text-xs mt-1">Mon-Fri 9am-6pm EST</p>
                </div>
                <div className={`p-8 rounded-3xl border text-center transition-all hover:-translate-y-1 ${isDark ? 'border-slate-800 bg-slate-900' : 'border-blue-100 bg-white shadow-sm'}`}>
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full mx-auto flex items-center justify-center mb-6"><i className="fas fa-envelope"></i></div>
                  <h3 className="font-bold mb-2">Email</h3>
                  <p className="text-slate-500 text-sm opacity-80">support@helpdesk.io</p>
                  <p className="text-slate-400 text-xs mt-1">24/7 Monitoring</p>
                </div>
                <div className={`p-8 rounded-3xl border text-center transition-all hover:-translate-y-1 ${isDark ? 'border-slate-800 bg-slate-900' : 'border-blue-100 bg-white shadow-sm'}`}>
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full mx-auto flex items-center justify-center mb-6"><i className="fas fa-map-marker-alt"></i></div>
                  <h3 className="font-bold mb-2">HQ</h3>
                  <p className="text-slate-500 text-sm opacity-80">100 Tech Plaza</p>
                  <p className="text-slate-400 text-xs mt-1">San Francisco, CA 94107</p>
                </div>
              </div>

              {/* 3. Department Direct Access */}
              <div className="mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                <div className="text-center mb-12">
                  <h2 className="text-2xl font-bold lowercase mb-6">Direct Department Access</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {DEPARTMENTS.map((dept, i) => (
                    <div key={i} className={`p-6 rounded-2xl border ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-blue-100'}`}>
                      <h4 className="font-bold mb-3 lowercase">{dept.name}</h4>
                      <p className={`text-xs uppercase tracking-widest font-bold mb-1 ${isDark ? 'text-slate-500' : 'text-blue-300'}`}>Email</p>
                      <p className={`text-sm mb-3 ${isDark ? 'text-slate-300' : 'text-blue-900'}`}>{dept.email}</p>
                      <p className={`text-xs uppercase tracking-widest font-bold mb-1 ${isDark ? 'text-slate-500' : 'text-blue-300'}`}>Phone</p>
                      <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-blue-900'}`}>{dept.phone}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Global Hubs */}
              <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
                <div className="text-center mb-12">
                  <h2 className="text-2xl font-bold lowercase mb-6">Global Hubs</h2>
                </div>
                <div className="grid md:grid-cols-4 gap-6">
                  {OFFICE_LOCATIONS.map((loc, i) => {
                    const imgMap = {
                      'San Francisco': '/helpDesk/images/hub_sf.png',
                      'London': '/helpDesk/images/hub_london.png',
                      'Singapore': '/helpDesk/images/hub_singapore.png',
                      'Sydney': '/helpDesk/images/hub_sydney.png'
                    };
                    return (
                      <div key={i} className={`group rounded-2xl overflow-hidden border text-center transition-all hover:shadow-xl ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-red-100'}`}>
                        {/* City Thumbnail */}
                        <div className="h-32 overflow-hidden relative">
                          <img src={imgMap[loc.city as keyof typeof imgMap]} alt={loc.city} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                          <div className={`absolute inset-0 ${isDark ? 'bg-slate-900/50' : 'bg-red-900/10'}`}></div>
                        </div>
                        <div className="p-6">
                          <h3 className="font-bold text-lg mb-1">{loc.city}</h3>
                          <p className={`text-sm mb-2 ${isDark ? 'text-slate-400' : 'text-red-800/60'}`}>{loc.address}</p>
                          <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded border ${isDark ? 'border-slate-700 text-slate-500' : 'border-red-100 text-red-400'}`}>{loc.timezone}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-[#020617] text-white' : 'bg-white text-red-900'}`}>
      <header className={`fixed top-0 w-full z-50 h-16 border-b backdrop-blur-md flex items-center transition-all ${isDark ? 'bg-[#020617]/95 border-slate-800' : 'bg-white/95 border-gray-100'}`}>
        <div className="container mx-auto px-4 flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer group" onClick={() => { setSubView('home'); setIsMobileMenuOpen(false); }}>
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white transition-transform group-hover:rotate-12">
              <i className="fas fa-headset text-sm"></i>
            </div>
            <span className="text-xl font-bold lowercase tracking-tight">helpdesk</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-[12px] font-medium lowercase">
            {/* Homes Dropdown */}
            <div className="relative group h-16 flex items-center">
              <button className={`flex items-center gap-1.5 transition-colors ${subView === 'home' ? 'text-red-600 font-bold' : 'text-gray-700 hover:text-blue-600'}`}>
                Home <i className="fas fa-chevron-down text-[8px] transition-transform group-hover:rotate-180"></i>
              </button>
              <div className={`absolute top-16 left-0 w-56 border rounded-2xl shadow-2xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-gray-100'}`}>
                <button onClick={() => { setLandingStyle('corporate'); setSubView('home'); }} className="w-full text-left px-4 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition-colors">Corporate Edition</button>
                <button onClick={() => { setLandingStyle('modern'); setSubView('home'); }} className="w-full text-left px-4 py-3 rounded-xl hover:bg-indigo-600 hover:text-white transition-colors">Modern AI Edition</button>
              </div>
            </div>

            {/* Dashboards Dropdown */}
            <div className="relative group h-16 flex items-center">
              <button className="flex items-center gap-1.5 text-gray-500 hover:text-blue-600 transition-colors">
                Dashboards <i className="fas fa-chevron-down text-[8px] transition-transform group-hover:rotate-180"></i>
              </button>
              <div className={`absolute top-16 left-0 w-56 border rounded-2xl shadow-2xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-gray-100'}`}>
                <button onClick={onSignInUser} className="w-full text-left px-4 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition-colors">User Station</button>
                <button onClick={onSignInAdmin} className="w-full text-left px-4 py-3 rounded-xl hover:bg-indigo-600 hover:text-white transition-colors">Admin Core</button>
              </div>
            </div>

            <button onClick={() => setSubView('services')} className={`transition-colors ${subView === 'services' ? 'text-red-600 font-bold' : 'text-gray-500 hover:text-blue-600'}`}>Services</button>
            <button onClick={() => setSubView('about')} className={`transition-colors ${subView === 'about' ? 'text-red-600 font-bold' : 'text-gray-500 hover:text-blue-600'}`}>About</button>
            <button onClick={() => setSubView('faq')} className={`transition-colors ${subView === 'faq' ? 'text-red-600 font-bold' : 'text-gray-500 hover:text-blue-600'}`}>FAQ</button>
            <button onClick={() => setSubView('contact')} className={`transition-colors ${subView === 'contact' ? 'text-red-600 font-bold' : 'text-gray-500 hover:text-blue-600'}`}>Contact Us</button>

            <div className="flex items-center space-x-2 pl-4 border-l border-gray-100/10 h-full">
              <button onClick={toggleTheme} className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 hover:text-blue-600 transition-all"><i className={`fas fa-${theme === 'dark' ? 'sun' : 'moon'}`}></i></button>
              <button onClick={onGoToLogin} className={`px-4 py-2 border rounded-xl font-bold transition-all ${isDark ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-gray-200 text-gray-500 hover:bg-gray-50'}`}>Login</button>
              <button onClick={onGoToRegister} className="bg-blue-600 text-white px-5 py-2 rounded-xl active:scale-95 transition-all shadow-lg shadow-blue-500/20">Sign Up</button>
            </div>
          </nav>

          {/* Mobile Header Controls */}
          <div className="lg:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 hover:text-blue-600 transition-all">
              <i className={`fas fa-${theme === 'dark' ? 'sun' : 'moon'}`}></i>
            </button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-500 text-xl p-2">
              <i className={`fas ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMobileMenuOpen && (
          <div className={`lg:hidden absolute top-16 left-0 w-full border-b shadow-2xl p-6 z-[100] overflow-y-auto max-h-[85vh] animate-in fade-in slide-in-from-top-2 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'}`}>
            <nav className="flex flex-col space-y-6 text-left text-sm font-medium lowercase">

              <div className="space-y-4">
                <button
                  onClick={() => setIsHomeOptionsOpen(!isHomeOptionsOpen)}
                  className="w-full flex items-center justify-between text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b pb-2 group"
                >
                  <span>Home Options</span>
                  <i className={`fas fa-chevron-down transition-transform ${isHomeOptionsOpen ? 'rotate-180' : ''}`}></i>
                </button>

                {isHomeOptionsOpen && (
                  <div className="flex flex-col gap-3 pl-2 animate-in slide-in-from-top-2">
                    <button onClick={() => { setLandingStyle('corporate'); setSubView('home'); setIsMobileMenuOpen(false); }} className="block w-full text-left hover:text-blue-600 transition-colors">Corporate Edition</button>
                    <button onClick={() => { setLandingStyle('modern'); setSubView('home'); setIsMobileMenuOpen(false); }} className="block w-full text-left hover:text-blue-600 transition-colors">Modern AI Edition</button>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => setIsDashboardsOpen(!isDashboardsOpen)}
                  className="w-full flex items-center justify-between text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b pb-2 group"
                >
                  <span>Dashboards</span>
                  <i className={`fas fa-chevron-down transition-transform ${isDashboardsOpen ? 'rotate-180' : ''}`}></i>
                </button>

                {isDashboardsOpen && (
                  <div className="flex flex-col gap-3 pl-2 animate-in slide-in-from-top-2">
                    <button onClick={() => { onSignInUser(); setIsMobileMenuOpen(false); }} className="block w-full text-left hover:text-blue-600 transition-colors">User Station</button>
                    <button onClick={() => { onSignInAdmin(); setIsMobileMenuOpen(false); }} className="block w-full text-left hover:text-blue-600 transition-colors">Admin Core</button>
                  </div>
                )}
              </div>

              <div className="space-y-3 pt-2">
                <button onClick={() => { setSubView('services'); setIsMobileMenuOpen(false); }} className="block w-full text-left hover:text-blue-600 transition-colors">Services</button>
                <button onClick={() => { setSubView('about'); setIsMobileMenuOpen(false); }} className="block w-full text-left hover:text-blue-600 transition-colors">About</button>
                <button onClick={() => { setSubView('faq'); setIsMobileMenuOpen(false); }} className="block w-full text-left hover:text-blue-600 transition-colors">FAQ</button>
                <button onClick={() => { setSubView('contact'); setIsMobileMenuOpen(false); }} className="block w-full text-left hover:text-blue-600 transition-colors">Contact Us</button>
              </div>

              <div className="pt-6 border-t border-gray-100/10 flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                  <button onClick={() => { onGoToLogin(); setIsMobileMenuOpen(false); }} className={`w-full py-3 border rounded-xl font-bold text-center ${isDark ? 'border-slate-700 text-white' : 'border-gray-200 text-gray-600'}`}>Login</button>
                  <button onClick={() => { onGoToRegister(); setIsMobileMenuOpen(false); }} className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold text-center">Sign Up</button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main>{renderContent()}</main>
    </div>
  );
};

export default LandingPage;