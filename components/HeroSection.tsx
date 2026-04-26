import React, { useRef, useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeroSectionProps {
  headline: React.ReactNode;
  subtext: string;
  primaryCta: { text: string; onClick: () => void; };
  secondaryCta?: { text: string; onClick: () => void; };
  imageUrl: string; 
  altText: string;
}

// A high-quality abstract technology animation for the hero
const TECH_ANIMATION_URL = "https://assets2.lottiefiles.com/packages/lf20_at6mdaid.json"; 

const NetworkNodes: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        const resize = () => {
            canvas.width = 300;
            canvas.height = 300;
        };
        resize();
        
        const nodes: {x: number, y: number, vx: number, vy: number}[] = [];
        const nodeCount = 15;
        const radius = 140;
        const centerX = 150;
        const centerY = 150;
        
        for (let i = 0; i < nodeCount; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * radius;
            nodes.push({
                x: centerX + Math.cos(angle) * dist,
                y: centerY + Math.sin(angle) * dist,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5
            });
        }
        
        let animationFrame: number;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Draw connections
            ctx.strokeStyle = 'rgba(34, 211, 238, 0.2)';
            ctx.lineWidth = 1;
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 80) {
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.stroke();
                    }
                }
            }
            
            // Draw nodes
            ctx.fillStyle = '#22d3ee';
            nodes.forEach(node => {
                ctx.beginPath();
                ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
                ctx.fill();
                
                node.x += node.vx;
                node.y += node.vy;
                
                // Keep inside circle
                const dx = node.x - centerX;
                const dy = node.y - centerY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist > radius) {
                    node.vx *= -1;
                    node.vy *= -1;
                }
            });
            
            animationFrame = requestAnimationFrame(animate);
        };
        animate();
        
        return () => cancelAnimationFrame(animationFrame);
    }, []);
    
    return (
        <canvas 
            ref={canvasRef} 
            className="w-full h-full rounded-full"
            style={{ filter: 'drop-shadow(0 0 8px rgba(34, 211, 238, 0.4))' }}
        />
    );
};

const TypewriterText: React.FC<{text: string}> = ({ text }) => {
    const [currentText, setCurrentText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prev => prev + text[index]);
                setIndex(prev => prev + 1);
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [index, text]);

    return (
        <span className="font-mono text-cyan border-r-2 border-cyan animate-pulse pr-1">
            {currentText}
        </span>
    );
};

const HeroSection: React.FC<HeroSectionProps> = ({ headline, subtext, primaryCta, secondaryCta, imageUrl, altText }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch(TECH_ANIMATION_URL)
      .then(res => res.json())
      .then(data => setAnimationData(data))
      .catch(err => console.error("Error loading Hero Lottie:", err));
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { left, top } = heroRef.current.getBoundingClientRect();
      const x = clientX - left;
      const y = clientY - top;
      heroRef.current.style.setProperty('--mouse-x', `${x}px`);
      heroRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    const currentRef = heroRef.current;
    currentRef?.addEventListener('mousemove', handleMouseMove);

    return () => {
      currentRef?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const particles = Array.from({ length: 20 });

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-start overflow-hidden group pt-16 md:pt-24 lg:pt-32">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute top-[10%] right-[10%] w-[40rem] h-[40rem] bg-cyan/5 dark:bg-cyan/10 rounded-full blur-[120px] animate-pulse"></div>
         <div className="absolute bottom-[20%] left-[5%] w-[30rem] h-[30rem] bg-violet/5 dark:bg-violet/10 rounded-full blur-[100px] animate-float"></div>
      </div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {particles.map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan/40 dark:bg-cyan/60 rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: '-20px',
              animationDuration: `${10 + Math.random() * 20}s`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Interactive Gradient Glow */}
      <div 
        className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(34, 211, 238, 0.1), transparent 80%)`
        }}
      />

      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="space-y-6 md:space-y-8"
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-xs font-bold uppercase tracking-widest"
            >
               <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan"></span>
               </span>
               Expert Enterprise Solutions
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-poppins font-extrabold tracking-tight text-slate-900 dark:text-light-text leading-[1.1] md:leading-[1.05]">
              {headline}
            </h1>
            
            <p className="max-w-xl text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              {subtext}
            </p>
            
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
              <motion.button 
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 20px 5px rgba(139, 92, 246, 0.4)",
                  filter: "brightness(1.1)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={primaryCta.onClick}
                className="w-full sm:w-auto px-10 py-3.5 text-base font-bold text-light-text bg-gradient-to-r from-orange to-violet rounded-full shadow-lg transition-all duration-300"
              >
                {primaryCta.text}
              </motion.button>
              
              {secondaryCta && (
                <motion.button 
                  whileHover={{ 
                    scale: 1.05, 
                    borderColor: "#22d3ee",
                    boxShadow: "0 0 15px 2px rgba(34, 211, 238, 0.3)",
                    backgroundColor: "rgba(255, 255, 255, 0.9)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={secondaryCta.onClick}
                  className="w-full sm:w-auto px-10 py-3.5 text-base font-bold text-slate-900 dark:text-light-text bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border-2 border-slate-300 dark:border-slate-700 rounded-full shadow-lg transition-all duration-300"
                >
                  {secondaryCta.text}
                </motion.button>
              )}
            </div>

            {/* Dynamic Social Proof Pop-up */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="pt-8 flex items-center gap-4"
            >
               <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-navy bg-slate-200 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                    </div>
                  ))}
               </div>
               <div className="text-sm text-slate-500 dark:text-slate-400">
                  <span className="font-bold text-slate-900 dark:text-light-text">500+</span> Industry Leaders Trust Us
               </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
             {/* Laptop + Mobile Mockup Area */}
             <div className="relative flex items-center justify-center lg:justify-end pr-0 lg:pr-12">
                
                {/* Laptop Mockup */}
                <motion.div 
                  initial={{ rotateY: -10, scale: 0.9 }}
                  animate={{ rotateY: 0, scale: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="relative z-10 w-full max-w-[500px]"
                >
                   <div className="relative p-2 md:p-3 bg-slate-900 rounded-[2rem] shadow-2xl border-[6px] border-slate-800/50">
                      <div className="relative aspect-[16/10] bg-slate-950 rounded-xl overflow-hidden group/screen">
                         {/* Network Web Animation inside Laptop */}
                         <div className="absolute inset-0 z-0">
                            <div className="absolute inset-0 flex items-center justify-center">
                               <div className="w-64 h-64 md:w-80 md:h-80 border-2 border-dashed border-cyan/30 rounded-full animate-spin-slow flex items-center justify-center p-8">
                                  <div className="w-full h-full border-2 border-dashed border-violet/20 rounded-full flex items-center justify-center">
                                      <NetworkNodes />
                                  </div>
                               </div>
                            </div>
                         </div>
                         
                         {/* UI Overlay */}
                         <div className="absolute inset-0 z-10 p-6 flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                               <div className="space-y-1">
                                  <div className="w-20 h-2 bg-cyan/40 rounded-full"></div>
                                  <div className="w-32 h-2 bg-violet/40 rounded-full"></div>
                                </div>
                                <div className="w-8 h-8 rounded-lg bg-navy-light/40 border border-white/10 backdrop-blur-sm"></div>
                            </div>
                            
                            <div className="text-center font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
                               <TypewriterText text="Constructing Architecture..." />
                            </div>
                         </div>
                      </div>
                   </div>
                   {/* Laptop Base */}
                   <div className="h-4 w-[110%] -ml-[5%] bg-slate-800 rounded-b-2xl shadow-xl mt-[-4px]"></div>
                </motion.div>

                {/* Mobile Mockup adjacent */}
                <motion.div 
                   initial={{ x: 30, y: 50, opacity: 0 }}
                   animate={{ x: 0, y: 0, opacity: 1 }}
                   transition={{ duration: 0.8, delay: 0.8 }}
                   className="absolute -right-4 md:-right-8 bottom-[-40px] md:bottom-[-20px] z-20 w-32 md:w-40"
                >
                   <div className="p-2 bg-slate-900 rounded-[2.5rem] shadow-2xl border-[4px] border-slate-800/80">
                      <div className="aspect-[9/16] bg-slate-950 rounded-[2rem] overflow-hidden relative">
                         <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-4 bg-slate-900 rounded-full z-10"></div>
                         <div className="absolute inset-0 p-4 flex flex-col items-center justify-center space-y-4">
                            <div className="w-12 h-12 rounded-full bg-cyan/20 animate-pulse"></div>
                            <div className="w-full space-y-2">
                               <div className="h-1 bg-slate-800 rounded-full"></div>
                               <div className="h-1 bg-slate-800 rounded-full w-2/3"></div>
                            </div>
                            <div className="mt-auto w-full h-8 bg-gradient-to-r from-cyan/20 to-violet/20 rounded-xl"></div>
                         </div>
                      </div>
                   </div>
                </motion.div>

             </div>

             {/* Dynamic Pop-up Metric */}
             <motion.div 
               initial={{ scale: 0, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ delay: 1.5, type: 'spring' }}
               className="absolute -top-12 left-0 md:left-20 p-4 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 z-30"
             >
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 font-bold text-xs ring-4 ring-green-500/10">
                      98%
                   </div>
                   <div className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Efficiency Boost</div>
                </div>
             </motion.div>

          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;
