import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, X, SlidersHorizontal } from 'lucide-react';

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
      const timer = setTimeout(() => setIsVisible(true), 1200);
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
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-sm z-[100]"
        >
          <div className="relative rounded-2xl bg-white dark:bg-[#111114] border border-zinc-200 dark:border-white/15 p-5 shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E8451E] to-[#D4AF37]" />

            <div className="flex items-start gap-3.5 pt-1">
              <div className="p-2.5 rounded-xl bg-[#E8451E]/10 text-[#E8451E] shrink-0">
                <ShieldCheck size={19} />
              </div>

              <div className="flex-1 min-w-0">
                {!showPreferences ? (
                  <>
                    <h3 className="text-sm font-display font-bold text-zinc-900 dark:text-white">
                      Privacy &amp; Cookies
                    </h3>
                    <p className="text-xs text-zinc-600 dark:text-zinc-300 mt-1.5 leading-relaxed">
                      We use essential cookies to keep bookings, chat, and preferences working reliably.
                    </p>

                    <div className="mt-4 flex items-center gap-2.5">
                      <button
                        type="button"
                        onClick={handleAcceptAll}
                        className="flex-1 py-2.5 px-4 rounded-xl bg-[#E8451E] hover:bg-[#D93814] text-white text-xs font-semibold transition-all shadow-sm"
                      >
                        Accept All
                      </button>

                      <button
                        type="button"
                        onClick={() => setShowPreferences(true)}
                        className="inline-flex items-center gap-1.5 py-2.5 px-3 rounded-xl bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200/70 dark:hover:bg-white/10 border border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-zinc-200 text-xs font-medium transition-colors"
                      >
                        <SlidersHorizontal size={12} />
                        <span>Settings</span>
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="space-y-3">
                    <h3 className="text-sm font-display font-bold text-zinc-900 dark:text-white">
                      Cookie Preferences
                    </h3>

                    <div className="space-y-2">
                      {[
                        { id: 'essential', label: 'Essential', desc: 'Required for bookings & navigation' },
                        { id: 'analytics', label: 'Analytics', desc: 'Helps improve page experience' },
                        { id: 'marketing', label: 'Communications', desc: 'Campaign attribution signals' },
                      ].map((m) => (
                        <div
                          key={m.id}
                          className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-50 dark:bg-white/5 border border-zinc-200/70 dark:border-white/10"
                        >
                          <div>
                            <p className="text-xs font-semibold text-zinc-900 dark:text-white">{m.label}</p>
                            <p className="text-[11px] text-zinc-500 dark:text-zinc-400">{m.desc}</p>
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
                            aria-label={`Toggle ${m.label} cookies`}
                            className={`w-9 h-5 rounded-full relative transition-colors ${
                              preferences[m.id as keyof typeof preferences]
                                ? 'bg-[#E8451E]'
                                : 'bg-zinc-300 dark:bg-zinc-700'
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
                        className="flex-1 py-2 text-xs font-semibold text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/5 rounded-xl transition-all"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={handleSavePreferences}
                        className="flex-[2] py-2 bg-[#E8451E] hover:bg-[#D93814] text-white text-xs font-semibold rounded-xl transition-all"
                      >
                        Save Preferences
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={() => setIsVisible(false)}
                aria-label="Close cookie notice"
                className="text-zinc-400 hover:text-zinc-700 dark:hover:text-white p-1"
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
