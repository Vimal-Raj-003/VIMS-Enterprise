import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import { motion } from 'motion/react';

// Using a high-quality abstract technology animation from a reliable CDN
const LOTTIE_DATA_URL = "https://assets3.lottiefiles.com/packages/lf20_w51pcehl.json";

const GradientCircle = ({ delay = 0, size = "400px", color = "rgba(6, 182, 212, 0.1)" }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ 
      opacity: [0.05, 0.15, 0.05],
      scale: [1, 1.2, 1],
      x: [0, 20, 0],
      y: [0, -20, 0]
    }}
    transition={{ 
      duration: 10, 
      repeat: Infinity, 
      delay,
      ease: "easeInOut" 
    }}
    className="absolute rounded-full pointer-events-none"
    style={{
      width: size,
      height: size,
      background: `radial-gradient(circle, ${color} 0%, rgba(255,255,255,0) 70%)`,
      filter: "blur(40px)",
      zIndex: -5
    }}
  />
);

const FloatingLine = ({ delay = 0, top = "20%", left="10%" }) => (
  <motion.div
    initial={{ opacity: 0, x: -100 }}
    animate={{ 
      opacity: [0, 0.2, 0],
      x: ["0%", "100%"],
    }}
    transition={{ 
      duration: 15, 
      repeat: Infinity, 
      delay,
      ease: "linear" 
    }}
    className="absolute h-[1px] w-64 bg-gradient-to-r from-transparent via-cyan/40 to-transparent pointer-events-none"
    style={{ top, left, zIndex: -5 }}
  />
);

const LottieBackground: React.FC = () => {
    const [animationData, setAnimationData] = useState<any>(null);

    useEffect(() => {
        fetch(LOTTIE_DATA_URL)
            .then(res => {
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
                const contentType = res.headers.get("content-type");
                if (!contentType || !contentType.includes("application/json")) {
                    throw new Error("Oops, we didn't get JSON!");
                }
                return res.json();
            })
            .then(data => setAnimationData(data))
            .catch(err => {
                console.error("Error loading Lottie animation:", err);
                // Fallback: stay with just the motion-powered background if Lottie fails
            });
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-5">
            {/* Real Lottie Animation for futuristic flair */}
            {animationData && (
                <div className="absolute inset-0 opacity-10 dark:opacity-20 scale-110">
                    <Lottie 
                        animationData={animationData}
                        loop={true}
                        style={{ height: '100%', width: '100%' }}
                    />
                </div>
            )}

            {/* Ambient Glowing Orbs */}
            <div className="absolute top-[10%] left-[-10%]">
                <GradientCircle color="rgba(6, 182, 212, 0.15)" size="600px" />
            </div>
            <div className="absolute bottom-[-10%] right-[-10%]">
                <GradientCircle color="rgba(139, 92, 246, 0.12)" size="500px" delay={2} />
            </div>
            <div className="absolute top-[40%] right-[20%]">
                <GradientCircle color="rgba(236, 72, 153, 0.05)" size="300px" delay={5} />
            </div>

            {/* Futuristic "Data Streams" */}
            <FloatingLine top="15%" delay={0} />
            <FloatingLine top="45%" delay={5} />
            <FloatingLine top="75%" delay={10} />
            
            {/* Decorative Grid Accents */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(circle, #8B5CF6 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>
        </div>
    );
};

export default LottieBackground;
