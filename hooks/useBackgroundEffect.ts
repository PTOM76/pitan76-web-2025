import { useEffect, useRef } from "react";

type Particle = {
    x: number;
    y: number;
    size: number;
    alpha: number;
    alphaDirection: number;
};

class StarSpaceParticleManager {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D | null;
    particles: Particle[] = [];
    mouseTrail: { x: number, y: number, life: number }[] = [];
    animationId: number = 0;
    
    options: {count: number, color: string
        , size: number, twinkleSpeed: number} = 
    {
        count: 100,
        color: "#ffffff",
        size: 2,
        twinkleSpeed: 0.02,
    };

    constructor(canvas : HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");        
        this.init();
    }

    init() {
        this.onResize();
        for (let i = 0; i < this.options.count; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * this.options.size,
                alpha: Math.random(),
                alphaDirection: Math.random() < 0.5 ? -1 : 1,
            });
        }
        this.renderParticle();

        window.addEventListener("resize", () => this.onResize());
        window.addEventListener("mousemove", (e: MouseEvent) => this.onMousemove(e));
        window.addEventListener("touchmove", (e: TouchEvent) => {
            if (e.touches.length > 0) {
                this.onTouchmove(e);
            }
        });
    }

    renderParticle() {
        if (!this.ctx) return;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (let particle of this.particles) {
            particle.alpha += this.options.twinkleSpeed * particle.alphaDirection;
            if (particle.alpha <= 0) {
                particle.alpha = 0;
                particle.alphaDirection = 1;
            }
            if (particle.alpha >= 1) {
                particle.alpha = 1;
                particle.alphaDirection = -1;
            }

            this.ctx.fillStyle = `rgba(255, 255, 255, ${particle.alpha})`;
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fill();
        }

        let trailLen = this.mouseTrail.length;
        if (trailLen > 1) {
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            for (let i = 0; i < trailLen - 1; i++) {
                const p = this.mouseTrail[i];
                const next = this.mouseTrail[i + 1];
                this.ctx.strokeStyle = `rgba(255,255,255,${p.life})`;
                this.ctx.moveTo(p.x, p.y);
                this.ctx.lineTo(next.x, next.y);
            }
            this.ctx.stroke();
            
            for (let p of this.mouseTrail) {
                const count = 2;
                for (let i = 0; i < count; i++) {
                    const angle = Math.random() * Math.PI * 2;
                    const radius = Math.random() * 20;
                    const size = Math.random() * 2 + 1;
                    const x = p.x + Math.cos(angle) * radius;
                    const y = p.y + Math.sin(angle) * radius;
                    const alpha = p.life * (1 - radius / 20);
                    this.ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
                    this.ctx.beginPath();
                    this.ctx.arc(x, y, size, 0, Math.PI * 2);
                    this.ctx.fill();
                }
            }
        }

        for (let i = trailLen - 1; i >= 0; i--) {
            this.mouseTrail[i].life -= 0.25;
            if (this.mouseTrail[i].life <= 0)
                this.mouseTrail.splice(i, 1);
        }

        this.animationId = requestAnimationFrame(() => this.renderParticle());
    }

    destroy() {
        cancelAnimationFrame(this.animationId);
    }

    onMousemove(e: MouseEvent) {
        this.mouseTrail.push({ x: e.clientX, y: e.clientY, life: 1 });
        
        if (this.mouseTrail.length > 32) 
            this.mouseTrail.shift();
    }

    onTouchmove(e: TouchEvent) {
        const touch = e.touches[0];
        this.mouseTrail.push({ x: touch.clientX, y: touch.clientY, life: 1 });
    }

    onResize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
}

export const useBackgroundEffect = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const particleManager = new StarSpaceParticleManager(canvas);

        return () => {
            particleManager.destroy();
        };
    }, []);

    return canvasRef;
};