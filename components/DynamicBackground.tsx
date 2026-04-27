import React, { useEffect, useRef } from 'react';

const DynamicBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const isDarkMode = typeof document !== 'undefined' && document.documentElement.classList.contains('dark');

    const scrollRef = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            scrollRef.current = window.scrollY;
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let width = 0;
        let height = 0;

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        handleResize();

        // Particle configuration
        const particles: Particle[] = [];
        const hudElements: HudElement[] = [];
        const particleCount = Math.min(Math.floor(width / 12), 150);

        class HudElement {
            x: number;
            y: number;
            size: number;
            type: 'rect' | 'circle' | 'cross';
            opacity: number;
            rotation: number;
            rotationSpeed: number;
            parallax: number;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height * 2; // Spread across more scroll area
                this.size = Math.random() * 40 + 20;
                this.type = ['rect', 'circle', 'cross'][Math.floor(Math.random() * 3)] as any;
                this.opacity = Math.random() * 0.1 + 0.02;
                this.rotation = Math.random() * Math.PI * 2;
                this.rotationSpeed = (Math.random() - 0.5) * 0.01;
                this.parallax = Math.random() * 0.4 + 0.1;
            }

            draw() {
                if (!ctx) return;
                const scrollY = scrollRef.current * this.parallax;
                const drawY = (this.y - scrollY) % (height * 2);
                
                ctx.save();
                ctx.translate(this.x, drawY);
                ctx.rotate(this.rotation);
                ctx.strokeStyle = '#06B6D4';
                ctx.globalAlpha = this.opacity;
                ctx.lineWidth = 1;

                if (this.type === 'rect') {
                    ctx.strokeRect(-this.size / 2, -this.size / 2, this.size, this.size);
                    ctx.beginPath();
                    ctx.moveTo(-this.size / 4, 0);
                    ctx.lineTo(this.size / 4, 0);
                    ctx.stroke();
                } else if (this.type === 'circle') {
                    ctx.beginPath();
                    ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(0, 0, 2, 0, Math.PI * 2);
                    ctx.fill();
                } else {
                    ctx.beginPath();
                    ctx.moveTo(-this.size / 2, 0);
                    ctx.lineTo(this.size / 2, 0);
                    ctx.moveTo(0, -this.size / 2);
                    ctx.lineTo(0, this.size / 2);
                    ctx.stroke();
                }
                ctx.restore();
                this.rotation += this.rotationSpeed;
            }
        }

        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            opacity: number;
            z: number;
            color: string;
            parallax: number;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.z = Math.random() * 2 + 1;
                this.parallax = (1 / this.z) * 0.5;
                this.size = (Math.random() * 1.8 + 0.5) / this.z;
                
                const velocityScale = 0.4 / this.z;
                this.speedX = (Math.random() - 0.5) * velocityScale;
                this.speedY = (Math.random() - 0.5) * velocityScale;
                this.opacity = (Math.random() * 0.5 + 0.1) / this.z;
                
                const colors = ['#8B5CF6', '#06B6D4', '#22D3EE'];
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                const dx = mouseRef.current.x - this.x;
                const dy = (mouseRef.current.y + scrollRef.current) - (this.y + scrollRef.current * this.parallax);
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 150) {
                    const force = (150 - dist) / 150;
                    this.x -= (dx / dist) * force * 0.8;
                    this.y -= (dy / dist) * force * 0.8;
                }

                if (this.x > width) this.x = 0;
                if (this.x < 0) this.x = width;
                if (this.y > height) this.y = 0;
                if (this.y < 0) this.y = height;
            }

            draw() {
                if (!ctx) return;
                const scrollOffset = scrollRef.current * this.parallax;
                const drawY = (this.y - scrollOffset + height) % height;
                
                ctx.fillStyle = this.color;
                ctx.globalAlpha = this.opacity;
                ctx.beginPath();
                ctx.arc(this.x, drawY, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        for (let i = 0; i < particleCount; i++) particles.push(new Particle());
        for (let i = 0; i < 15; i++) hudElements.push(new HudElement());

        let scanline = 0;

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            const isDarkMode = document.documentElement.classList.contains('dark');
            
            // Grid lines
            ctx.strokeStyle = isDarkMode ? 'rgba(56, 189, 248, 0.08)' : 'rgba(6, 182, 212, 0.05)';
            ctx.lineWidth = 1;
            const gridSize = 120;
            const scrollOffset = (scrollRef.current * 0.2) % gridSize;
            
            ctx.beginPath();
            for (let x = 0; x < width; x += gridSize) {
                ctx.moveTo(x, 0); ctx.lineTo(x, height);
            }
            for (let y = -scrollOffset; y < height; y += gridSize) {
                ctx.moveTo(0, y); ctx.lineTo(width, y);
            }
            ctx.stroke();

            // Scanline effect
            scanline = (scanline + 1.5) % height;
            ctx.strokeStyle = isDarkMode ? 'rgba(34, 211, 238, 0.02)' : 'rgba(34, 211, 238, 0.04)';
            ctx.lineWidth = 20;
            ctx.beginPath();
            ctx.moveTo(0, scanline);
            ctx.lineTo(width, scanline);
            ctx.stroke();

            // Draw HUD elements
            hudElements.forEach(el => el.draw());

            // Static HUD structural elements
            ctx.save();
            ctx.strokeStyle = isDarkMode ? 'rgba(34, 211, 238, 0.1)' : 'rgba(6, 182, 212, 0.05)';
            ctx.lineWidth = 1;
            
            // Corners
            const d = 40;
            const pad = 30;
            // Top Right
            ctx.beginPath(); ctx.moveTo(width - pad - d, pad); ctx.lineTo(width - pad, pad); ctx.lineTo(width - pad, pad + d); ctx.stroke();
            // Bottom Left
            ctx.beginPath(); ctx.moveTo(pad, height - pad - d); ctx.lineTo(pad, height - pad); ctx.lineTo(pad + d, height - pad); ctx.stroke();
            
            // Vertical side indicator
            ctx.beginPath(); ctx.moveTo(width - pad, height * 0.4); ctx.lineTo(width - pad, height * 0.6); ctx.stroke();
            
            ctx.restore();

            // Network effect
            for (let i = 0; i < particles.length; i++) {
                const p1 = particles[i];
                p1.update();
                p1.draw();

                let connections = 0;
                for (let j = i + 1; j < particles.length && connections < 3; j++) {
                    const p2 = particles[j];
                    if (Math.abs(p1.z - p2.z) > 0.5) continue;

                    const p1Y = (p1.y - scrollRef.current * p1.parallax + height) % height;
                    const p2Y = (p2.y - scrollRef.current * p2.parallax + height) % height;

                    const dx = p1.x - p2.x;
                    const dy = p1Y - p2Y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.strokeStyle = p1.color;
                        ctx.globalAlpha = (0.25 * (1 - distance / 150)) / p1.z;
                        ctx.lineWidth = 0.8 / p1.z;
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1Y);
                        ctx.lineTo(p2.x, p2Y);
                        ctx.stroke();
                        connections++;
                    }
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-20 pointer-events-none bg-slate-50 dark:bg-[#050510] transition-colors duration-1000"
            style={{ 
                opacity: isDarkMode ? 0.8 : 1,
            }}
        />
    );
};

export default DynamicBackground;
