import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, X, SlidersHorizontal } from 'lucide-react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: true,
    marketing: true,
  });

  useEffect(() => {
    const consent = localStorage.getItem('vims_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(
      'vims_cookie_consent',
      JSON.stringify({
        essential: true,
        analytics: true,
        marketing: true,
        timestamp: new Date().toISOString(),
      })
    );
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem(
      'vims_cookie_consent',
      JSON.stringify({
        ...preferences,
        timestamp: new Date().toISOString(),
      })
    );
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 60, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-sm z-[100]"
        >
          <div className="rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-700 p-5 shadow-xl">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-500/15 text-[#1D4ED8] dark:text-blue-400 shrink-0">
                <ShieldCheck size={18} />
              </div>

              <div className="flex-1 min-w-0">
                {!showPreferences ? (
                  <>
                    <h3 className="text-sm font-display font-bold text-slate-900 dark:text-white">
                      Privacy &amp; Cookies
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                      We use essential and measurement cookies to keep bookings reliable and comply with our Privacy Policy.
                    </p>

                    <div className="mt-3.5 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={handleAcceptAll}
                        className="flex-1 py-2 px-3.5 rounded-xl bg-[#1D4ED8] hover:bg-[#1E40AF] text-white text-xs font-semibold transition-colors"
                      >
                        Accept All
                      </button>

                      <button
                        type="button"
                        onClick={() => setShowPreferences(true)}
                        className="inline-flex items-center gap-1.5 py-2 px-3 rounded-xl bg-[#F8F7F4] dark:bg-slate-800 hover:bg-slate-200/70 text-slate-700 dark:text-slate-200 text-xs font-medium transition-colors"
                      >
                        <SlidersHorizontal size={12} />
                        <span>Settings</span>
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="space-y-3">
                    <h3 className="text-sm font-display font-bold text-slate-900 dark:text-white">
                      Cookie Preferences
                    </h3>
                    <div className="space-y-2">
                      {[
                        { id: 'essential', label: 'Essential', desc: 'Navigation & booking state' },
                        { id: 'analytics', label: 'Analytics', desc: 'Site performance measurement' },
                        { id: 'marketing', label: 'Ad Attribution', desc: 'Meta campaign reporting' },
                      ].map((m) => (
                        <div
                          key={m.id}
                          className="flex items-center justify-between p-2.5 rounded-xl bg-[#F8F7F4] dark:bg-slate-800/70"
                        >
                          <div>
                            <p className="text-xs font-semibold text-slate-900 dark:text-white">{m.label}</p>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400">{m.desc}</p>
                          </div>
                          <button
                            type="button"
                            onClick={() =>
                              m.id !== 'essential' &&
                              setPreferences((prev) => ({
                                ...prev,
                                [m.id]: !prev[m.id as keyof typeof prev],
                              }))
                            }
                            aria-label={`Toggle ${m.label}`}
                            className={`w-9 h-5 rounded-full relative transition-colors ${
                              preferences[m.id as keyof typeof preferences]
                                ? 'bg-[#1D4ED8]'
                                : 'bg-slate-300 dark:bg-slate-600'
                            } ${m.id === 'essential' ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
                          >
                            <span
                              className={`block w-3.5 h-3.5 rounded-full bg-white shadow transition-transform ${
                                preferences[m.id as keyof typeof preferences]
                                  ? 'translate-x-4'
                                  : 'translate-x-1'
                              }`}
                            />
                          </button>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => setShowPreferences(false)}
                        className="flex-1 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 rounded-xl"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={handleSavePreferences}
                        className="flex-[2] py-2 bg-[#1D4ED8] hover:bg-[#1E40AF] text-white text-xs font-semibold rounded-xl"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={() => setIsVisible(false)}
                aria-label="Dismiss cookies dialog"
                className="text-slate-400 hover:text-slate-700 dark:hover:text-white p-1"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default CookieConsent;
