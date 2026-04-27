import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface TelemetryItem {
    id: string;
    text: string;
    value: string;
    type: 'metric' | 'log' | 'status';
}

const SYSTEM_LOGS = [
    "NEURAL_SYNC_INITIALIZED",
    "CORE_LATENCY_OPTIMIZED",
    "QUANTUM_ENCRYPTION_ACTIVE",
    "DATA_PACKET_VERIFIED",
    "AI_MODULE_LOADED",
    "SUBSYSTEM_PING_SUCCESS",
    "NODE_HEALTH_OPTIMAL",
    "SECURITY_SWEEP_COMPLETE"
];

const METRICS = [
    { label: "CPU", suffix: "%" },
    { label: "MEM", suffix: "GB" },
    { label: "SYNC", suffix: "ms" },
    { label: "TPS", suffix: "" }
];

const SystemTelemetry: React.FC = () => {
    const [items, setItems] = useState<TelemetryItem[]>([]);

    const [alert, setAlert] = useState<string | null>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            const isMetric = Math.random() > 0.6;
            const randomMetric = isMetric ? METRICS[Math.floor(Math.random() * METRICS.length)] : null;
            const newItem: TelemetryItem = {
                id: Math.random().toString(36).substr(2, 9),
                type: isMetric ? 'metric' : 'log',
                text: isMetric ? randomMetric!.label : SYSTEM_LOGS[Math.floor(Math.random() * SYSTEM_LOGS.length)],
                value: isMetric ? (Math.random() * 100).toFixed(1) + randomMetric!.suffix : ''
            };

            setItems(prev => [newItem, ...prev].slice(0, 5));

            // Occasional alert
            if (Math.random() > 0.85) {
                setAlert("INTEGRITY_CHECK_PASS");
                setTimeout(() => setAlert(null), 2000);
            }
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden font-mono uppercase tracking-widest text-[10px]">
            {/* System Alert Overlay */}
            <AnimatePresence>
                {alert && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 1.1, y: -10 }}
                        className="absolute bottom-24 right-8 bg-cyan/10 border border-cyan/50 backdrop-blur-md px-6 py-2 rounded-lg text-cyan font-bold flex items-center space-x-3 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                    >
                        <div className="w-2 h-2 bg-cyan animate-pulse rounded-full"></div>
                        <span>{alert}</span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Top Right Corner Telemetry & Scanning Circle */}
            <div className="absolute top-24 right-8 flex flex-col items-end space-y-8 opacity-40 dark:opacity-30">
                {/* Status Bar */}
                <div className="flex items-center space-x-3">
                    <div className="flex flex-col items-end">
                        <span className="text-[8px] text-slate-500">SYSTEM_AUTH</span>
                        <span className="text-cyan">ENCRYPTED_SSL_TLS</span>
                    </div>
                    <div className="w-[2px] h-10 bg-gradient-to-b from-cyan to-transparent"></div>
                </div>

                {/* Scanning Circle */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-24 h-24 border border-cyan/10 rounded-full flex items-center justify-center relative shadow-[0_0_20px_rgba(34,211,238,0.1)]"
                >
                    <div className="w-16 h-16 border border-violet/20 rounded-full animate-pulse"></div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-4 bg-cyan/50 shadow-[0_0_10px_#22d3ee]"></div>
                    <div className="absolute inset-0 border-t-2 border-cyan/30 rounded-full"></div>
                </motion.div>

                {/* Telemetry Logs */}
                <div className="flex flex-col items-end space-y-3">
                    <AnimatePresence mode="popLayout">
                        {items.map((item) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: 20, filter: 'blur(4px)' }}
                                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, x: -10, filter: 'blur(8px)' }}
                                transition={{ duration: 0.5 }}
                                className="flex items-center space-x-2 border-r-2 border-cyan/30 pr-3 py-1 group/item"
                            >
                                <span className="text-slate-400 dark:text-slate-500 group-hover/item:text-cyan transition-colors">{item.text}</span>
                                {item.value && <span className="text-cyan font-bold">{item.value}</span>}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* Bottom Left Corner Static Metadata */}
            <div className="absolute bottom-8 left-8 space-y-2 opacity-30 dark:opacity-20 hidden md:block">
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-[1px] bg-cyan/50"></div>
                    <div className="flex flex-col">
                        <span className="text-[10px] text-cyan font-bold">VIMS_SYSTEM_READY</span>
                        <span className="text-[8px] text-slate-500 tracking-[0.2em]">CONNECTION: SECURE_CHANNEL_ALPHA</span>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="w-8 h-[1px] bg-slate-500/50"></div>
                    <span className="text-[8px] text-slate-500">BUILD_ID_2026_04_27_STABLE_EXT</span>
                </div>
            </div>
        </div>
    );
};

export default SystemTelemetry;
