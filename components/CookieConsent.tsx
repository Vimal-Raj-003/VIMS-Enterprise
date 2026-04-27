import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, X, Settings, Check } from 'lucide-react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: true,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('vims_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('vims_cookie_consent', JSON.stringify({
      essential: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    }));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('vims_cookie_consent', JSON.stringify({
      ...preferences,
      timestamp: new Date().toISOString(),
    }));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-md z-[100]"
      >
        <div className="bg-white/90 dark:bg-navy/90 backdrop-blur-xl border border-slate-200 dark:border-cyan/20 p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden">
          {/* Futuristic Accent */}
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan to-violet"></div>
          
          <div className="flex items-start gap-4">
            <div className="p-3 bg-cyan/10 dark:bg-cyan/20 rounded-2xl">
              <Shield className="text-cyan w-6 h-6" />
            </div>
            
            <div className="flex-1">
              {!showPreferences ? (
                <>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-light-text mb-2">Privacy & Cookies</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 font-mono leading-relaxed">
                    We use cookies to optimize neural performance and analyze data flow. Acceptance ensures full system throughput.
                  </p>
                  
                  <div className="flex flex-col gap-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleAcceptAll}
                      className="w-full py-3 bg-cyan text-navy font-bold rounded-xl shadow-lg shadow-cyan/20 transition-all hover:shadow-cyan/40"
                    >
                      Accept All Systems
                    </motion.button>
                    
                    <button 
                      onClick={() => setShowPreferences(true)}
                      className="text-xs text-slate-500 hover:text-cyan font-mono transition-colors flex items-center justify-center gap-2"
                    >
                      <Settings size={14} />
                      CONFIGURE_MODULES
                    </button>
                  </div>
                </>
              ) : (
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-light-text mb-4">Module Configuration</h3>
                  
                  <div className="space-y-3">
                    {[
                      { id: 'essential', label: 'Essential Core', desc: 'Required for system stability' },
                      { id: 'analytics', label: 'Analytics Node', desc: 'Performance monitoring' },
                      { id: 'marketing', label: 'Marketing Layer', desc: 'External sync services' },
                    ].map((m) => (
                      <div key={m.id} className="flex items-center justify-between p-3 rounded-2xl bg-slate-100 dark:bg-white/5 border border-transparent hover:border-cyan/20 transition-all">
                        <div>
                          <p className="text-xs font-bold font-mono text-cyan">{m.label}</p>
                          <p className="text-[10px] text-slate-500">{m.desc}</p>
                        </div>
                        <button
                          onClick={() => m.id !== 'essential' && setPreferences(prev => ({ ...prev, [m.id]: !prev[m.id as keyof typeof prev] }))}
                          className={`w-10 h-6 rounded-full relative transition-colors ${
                              preferences[m.id as keyof typeof preferences] ? 'bg-cyan' : 'bg-slate-300 dark:bg-slate-700'
                          } ${m.id === 'essential' ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                        >
                          <motion.div
                            animate={{ x: preferences[m.id as keyof typeof preferences] ? 18 : 2 }}
                            className="absolute top-1 w-4 h-4 bg-white dark:bg-navy rounded-full shadow-sm"
                          />
                        </button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <button 
                      onClick={() => setShowPreferences(false)}
                      className="flex-1 py-2 text-xs font-bold text-slate-500 hover:text-cyan hover:bg-cyan/5 rounded-xl transition-all"
                    >
                      BACK
                    </button>
                    <button 
                      onClick={handleSavePreferences}
                      className="flex-[2] py-2 bg-slate-900 dark:bg-white text-white dark:text-navy text-xs font-bold rounded-xl transition-all hover:opacity-90"
                    >
                      SAVE_CONFIG
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            <button 
              onClick={() => setIsVisible(false)}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-light-text p-1"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieConsent;
