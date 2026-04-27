import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface HeroSectionProps {
  headline: React.ReactNode;
  subtext: string;
  primaryCta: { text: string; onClick: () => void; };
  secondaryCta?: { text: string; onClick: () => void; };
  imageUrl: string; 
  altText: string;
  variant?: 'landing' | 'subpage';
}

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
        const nodeCount = 20;
        const radius = 140;
        const centerX = 150;
        const centerY = 150;
        
        for (let i = 0; i < nodeCount; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * radius;
            nodes.push({
                x: centerX + Math.cos(angle) * dist,
                y: centerY + Math.sin(angle) * dist,
                vx: (Math.random() - 0.5) * 0.7,
                vy: (Math.random() - 0.5) * 0.7
            });
        }
        
        let animationFrame: number;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Draw connections
            ctx.strokeStyle = 'rgba(34, 211, 238, 0.3)';
            ctx.lineWidth = 1;
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 90) {
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
                ctx.arc(node.x, node.y, 2.5, 0, Math.PI * 2);
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
            style={{ filter: 'drop-shadow(0 0 10px rgba(34, 211, 238, 0.6))' }}
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

const HeroSection: React.FC<HeroSectionProps> = ({ headline, subtext, primaryCta, secondaryCta, imageUrl, altText, variant = 'landing' }) => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      const x = clientX - left;
      const y = clientY - top;
      
      heroRef.current.style.setProperty('--mouse-x', `${x}px`);
      heroRef.current.style.setProperty('--mouse-y', `${y}px`);
      heroRef.current.style.setProperty('--mouse-x-norm', `${x / width}`);
      heroRef.current.style.setProperty('--mouse-y-norm', `${y / height}`);
    };

    const currentRef = heroRef.current;
    currentRef?.addEventListener('mousemove', handleMouseMove);

    return () => {
      currentRef?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const particles = React.useMemo(() => {
    return Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 1,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      depth: Math.random() * 0.2 + 0.05,
      opacity: Math.random() * 0.3 + 0.1,
      color: i % 2 === 0 ? '#22d3ee' : '#8b5cf6',
    }));
  }, []);

  if (variant === 'subpage') {
    return (
        <div ref={heroRef} className="relative min-h-[40vh] md:min-h-[50vh] flex items-center overflow-hidden pt-16">
            {/* Background Image and Overlay */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 scale-105 animate-slow-zoom" 
                style={{ backgroundImage: `url(${imageUrl})` }}
                aria-label={altText}
                role="img"
            >
                <div className="absolute inset-0 bg-navy/60 backdrop-blur-[2px]"></div>
            </div>

            <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl lg:text-7xl font-poppins font-extrabold tracking-tight"
                >
                    {headline}
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-4 max-w-2xl mx-auto text-lg text-slate-300"
                >
                    {subtext}
                </motion.p>
            </div>
        </div>
    );
  }

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-start overflow-hidden group pt-16 md:pt-20 lg:pt-24">
      {/* Background Decor - Sharper Colors */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute top-[5%] right-[5%] w-[45rem] h-[45rem] bg-cyan/10 dark:bg-cyan/15 rounded-full blur-[100px] animate-pulse"></div>
         <div className="absolute bottom-[10%] left-[5%] w-[35rem] h-[35rem] bg-violet/10 dark:bg-violet/15 rounded-full blur-[90px] animate-float"></div>
      </div>
      
      {/* Interactive Particles with Parallax */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full transition-colors duration-500"
            style={{
              width: p.size,
              height: p.size,
              left: p.left,
              top: p.top,
              opacity: p.opacity,
              backgroundColor: p.color,
              boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
            }}
            animate={{
              x: (mousePos.x - (typeof window !== 'undefined' ? window.innerWidth / 2 : 0)) * p.depth,
              y: (mousePos.y - (typeof window !== 'undefined' ? window.innerHeight / 2 : 0)) * p.depth + (scrollY * p.depth * 0.5),
            }}
            transition={{ type: 'spring', damping: 30, stiffness: 50 }}
          />
        ))}

        {/* Floating Geometric Lines */}
        <div className="absolute inset-0 opacity-10 dark:opacity-20 translate-y-[-10%]">
             {[1, 2, 3].map((i) => (
                 <motion.div
                    key={i}
                    animate={{ 
                        y: [0, 50, 0],
                        opacity: [0.1, 0.3, 0.1]
                    }}
                    transition={{ 
                        duration: 10 + i * 2, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                    }}
                    className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-cyan to-transparent"
                    style={{ top: `${20 + i * 25}%` }}
                 />
             ))}
        </div>
      </div>

      {/* Interactive Gradient Glow */}
      <div 
        className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(1000px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(34, 211, 238, 0.15), transparent 85%)`
        }}
      />

      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="space-y-6 md:space-y-8 lg:mt-6"
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan/20 border border-cyan/30 text-cyan text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(34,211,238,0.2)]"
            >
               <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan"></span>
               </span>
               Professional Systems Engineering
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-poppins font-extrabold tracking-tight text-slate-900 dark:text-light-text leading-[1.1] md:leading-[1.05]">
              {headline}
            </h1>
            
            <p className="max-w-xl text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              {subtext}
            </p>
            
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
              <motion.button 
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 30px 10px rgba(139, 92, 246, 0.4)",
                  filter: "brightness(1.2)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={primaryCta.onClick}
                className="relative overflow-hidden group/hero-btn w-full sm:w-auto px-12 py-4 text-base font-bold text-light-text bg-gradient-to-r from-orange to-violet rounded-full shadow-2xl transition-all duration-300"
              >
                <span className="relative z-10">{primaryCta.text}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover/hero-btn:animate-shimmer pointer-events-none"></div>
              </motion.button>
              
              {secondaryCta && (
                <motion.button 
                  whileHover={{ 
                    scale: 1.05, 
                    borderColor: "#22d3ee",
                    boxShadow: "0 0 20px 5px rgba(34, 211, 238, 0.4)",
                    backgroundColor: "rgba(255, 255, 255, 1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={secondaryCta.onClick}
                  className="w-full sm:w-auto px-12 py-4 text-base font-bold text-slate-900 dark:text-light-text bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border-2 border-slate-300 dark:border-slate-700 rounded-full shadow-xl transition-all duration-300"
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
              className="pt-10 flex items-center gap-4"
            >
               <div className="flex -space-x-4">
                  {[10, 11, 12, 13].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white dark:border-navy bg-slate-200 dark:bg-slate-800 flex items-center justify-center overflow-hidden shadow-lg">
                       <img src={`https://i.pravatar.cc/100?img=${i}`} alt="User" />
                    </div>
                  ))}
               </div>
               <div className="text-base text-slate-500 dark:text-slate-400">
                  <span className="font-bold text-slate-900 dark:text-light-text text-lg">10+</span> Enterprise Partners
               </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="relative lg:mt-6"
          >
             {/* Laptop + Mobile Mockup Area */}
             <div className="relative flex items-center justify-center lg:justify-end pr-0 lg:pr-8">
                
                {/* Macbook Mockup */}
                <motion.div 
                  initial={{ rotateY: -15, rotateX: 5 }}
                  animate={{ rotateY: 0, rotateX: 0 }}
                  transition={{ duration: 1.5, delay: 0.4 }}
                  className="relative z-10 w-full max-w-[550px] perspective-1000"
                >
                   {/* Realistic Macbook Pro Style */}
                   <div className="relative p-2 md:p-3 bg-[#1e1e1e] rounded-[1.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] border-[4px] border-[#3a3a3a]">
                      <div className="relative aspect-[16/10] bg-black rounded-lg overflow-hidden ring-1 ring-white/10 group/screen">
                         
                         {/* Network Web Animation inside Laptop */}
                         <div className="absolute inset-0 z-0">
                            <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a0a]">
                               <div className="w-64 h-64 md:w-80 md:h-80 border border-dashed border-cyan/40 rounded-full animate-spin-slow flex items-center justify-center p-8 bg-cyan/5">
                                  <div className="w-full h-full border border-dashed border-violet/30 rounded-full flex items-center justify-center bg-violet/5">
                                      <NetworkNodes />
                                  </div>
                               </div>
                            </div>
                         </div>
                         
                         {/* UI Overlay - Minimalist macOS style */}
                         <div className="absolute inset-0 z-10 p-6 flex flex-col justify-between">
                            <div className="flex justify-between items-center bg-white/5 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                               <div className="flex gap-1.5">
                                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                                </div>
                                <div className="text-[10px] font-mono text-slate-500">vims-core-v3.0.sh</div>
                                <div className="w-4 h-4 rounded-full bg-cyan/20"></div>
                            </div>
                            
                            <div className="text-center font-mono text-sm uppercase tracking-[0.3em] text-cyan drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                               <TypewriterText text="Architectural Matrix Engaged" />
                            </div>
                         </div>
                      </div>
                   </div>
                   {/* Macbook Base / Hinge */}
                   <div className="relative h-4 w-[108%] -ml-[4%] bg-[#2a2a2a] rounded-b-xl shadow-2xl mt-[-2px] flex justify-center">
                      <div className="w-32 h-1 bg-[#1a1a1a] rounded-full mt-1.5 mb-1 opacity-50"></div>
                   </div>
                </motion.div>

             </div>

             {/* Highlighted Dynamic Pop-up Metric */}
             <motion.div 
               initial={{ scale: 0, opacity: 0, x: -100 }}
               animate={{ scale: 1, opacity: 1, x: 0 }}
               transition={{ delay: 1.8, type: 'spring', stiffness: 100 }}
               className="absolute top-0 md:top-10 left-0 md:-left-20 p-5 bg-navy/80 dark:bg-slate-900/90 backdrop-blur-2xl rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 z-40"
             >
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-2xl bg-cyan/20 flex items-center justify-center text-cyan">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                   </div>
                   <div>
                      <div className="text-xl font-bold text-white">4.2x Faster</div>
                      <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-cyan/60">Logic Processing</div>
                   </div>
                </div>
             </motion.div>

          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;
