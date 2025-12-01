import { useEffect, useRef } from "react";

class StarSpaceParticle {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D | null;
    particles: any[] = [];
    mouseParticle: { x: number, y: number } | null = null;
    
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
        this.mouseParticle = { x: 0, y: 0 };
        
        this.init();
    }

    init() {
        this.resize();
        for (let i = 0; i < this.options.count; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * this.options.size,
                alpha: Math.random(),
                alphaDirection: Math.random() < 0.5 ? -1 : 1,
            });
        }
        this.animate();

        window.addEventListener("resize", () => this.resize());
    }

    animate() {
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
        requestAnimationFrame(() => this.animate());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
}

export const useBackgroundEffect = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        let particle = new StarSpaceParticle(canvas);

        // const resizeCanvas = () => {
        //     canvas.width = window.innerWidth;
        //     canvas.height = window.innerHeight;
        // };
        // resizeCanvas();
        // window.addEventListener("resize", resizeCanvas);

        // return () => {
        //     window.removeEventListener("resize", resizeCanvas);
        // };
    }, []);

    return canvasRef;
};