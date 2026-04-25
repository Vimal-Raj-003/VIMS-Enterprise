import React, { useEffect, useRef } from 'react';

const DynamicBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let widthStr = '';
        let heightStr = '';
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
        const particleCount = Math.min(Math.floor(width / 15), 120);

        class Particle {
            x: number;
            y: number;
            baseX: number;
            baseY: number;
            size: number;
            speedX: number;
            speedY: number;
            opacity: number;
            z: number; // Layer depth for parallax
            color: string;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.baseX = this.x;
                this.baseY = this.y;
                this.z = Math.random() * 2 + 1; // 1 to 3
                this.size = (Math.random() * 1.5 + 0.5) / this.z;
                
                const velocityScale = 0.3 / this.z;
                this.speedX = (Math.random() - 0.5) * velocityScale;
                this.speedY = (Math.random() - 0.5) * velocityScale;
                
                this.opacity = (Math.random() * 0.4 + 0.1) / this.z;
                
                // Varied colors for a more premium look
                const colors = ['#8B5CF6', '#06B6D4', '#6366F1'];
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                // Natural movement
                this.x += this.speedX;
                this.y += this.speedY;

                // Mouse interaction - subtle push/pull
                const dx = mouseRef.current.x - this.x;
                const dy = mouseRef.current.y - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const maxDist = 200;

                if (dist < maxDist) {
                    const force = (maxDist - dist) / maxDist;
                    const directionX = dx / dist;
                    const directionY = dy / dist;
                    const push = force * 0.5;
                    
                    this.x -= directionX * push;
                    this.y -= directionY * push;
                }

                // Wrap around edges
                if (this.x > width) this.x = 0;
                if (this.x < 0) this.x = width;
                if (this.y > height) this.y = 0;
                if (this.y < 0) this.y = height;
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = this.color;
                ctx.globalAlpha = this.opacity;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        const animate = () => {
            // Subtle fade effect for motion blur look
            ctx.clearRect(0, 0, width, height);

            // Draw a subtle professional grid
            const isDarkMode = document.documentElement.classList.contains('dark');
            ctx.strokeStyle = isDarkMode ? 'rgba(30, 41, 59, 0.05)' : 'rgba(148, 163, 184, 0.1)';
            ctx.lineWidth = 1;
            const gridSize = 100;
            
            for (let x = 0; x < width; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
                ctx.stroke();
            }
            for (let y = 0; y < height; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
                ctx.stroke();
            }

            // Mouse glow effect
            if (mouseRef.current.x > 0) {
                const gradient = ctx.createRadialGradient(
                    mouseRef.current.x, mouseRef.current.y, 0,
                    mouseRef.current.x, mouseRef.current.y, 300
                );
                gradient.addColorStop(0, isDarkMode ? 'rgba(6, 182, 212, 0.05)' : 'rgba(6, 182, 212, 0.08)');
                gradient.addColorStop(1, 'rgba(6, 182, 212, 0)');
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, width, height);
            }

            // Update and draw connections (Network effect)
            for (let i = 0; i < particles.length; i++) {
                const p1 = particles[i];
                p1.update();
                p1.draw();

                // Connect to a limited number of nearest neighbors for cleaner look
                let connections = 0;
                for (let j = i + 1; j < particles.length && connections < 3; j++) {
                    const p2 = particles[j];
                    
                    // Only connect within the same depth layer for true parallax aesthetic
                    if (Math.abs(p1.z - p2.z) > 0.5) continue;

                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        const alpha = (0.08 * (1 - distance / 150)) / p1.z;
                        ctx.strokeStyle = p1.color;
                        ctx.globalAlpha = alpha;
                        ctx.lineWidth = 0.5 / p1.z;
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
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
            className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-60 dark:opacity-40 bg-white dark:bg-navy transition-colors duration-1000"
        />
    );
};

export default DynamicBackground;
