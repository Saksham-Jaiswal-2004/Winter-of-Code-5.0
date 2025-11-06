"use client"
import { useEffect, useRef } from 'react';

class Snowflake {
  canvas: HTMLCanvasElement;
  x: number;
  y: number;
  radius: number;
  speed: number;
  wind: number;
  opacity: number;
  swing: number;
  swingSpeed: number;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.x = 0;
    this.y = 0;
    this.radius = 0;
    this.speed = 0;
    this.wind = 0;
    this.opacity = 0;
    this.swing = 0;
    this.swingSpeed = 0;
    this.reset();
  }

  reset() {
    this.x = Math.random() * this.canvas.width;
    this.y = Math.random() * -100;
    this.radius = Math.random() * 2.5 + 1;
    this.speed = Math.random() * 1 + 0.3;
    this.wind = Math.random() * 0.8 - 0.4;
    this.opacity = Math.random() * 0.6 + 0.4;
    this.swing = Math.random() * 0.5;
    this.swingSpeed = Math.random() * 0.01 + 0.005;
  }

  update() {
    this.y += this.speed;
    this.swing += this.swingSpeed;
    this.x += Math.sin(this.swing) * 0.5 + this.wind;

    if (this.y > this.canvas.height) {
      this.reset();
      this.y = -10;
    }

    if (this.x > this.canvas.width + 10) {
      this.x = -10;
    } else if (this.x < -10) {
      this.x = this.canvas.width + 10;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.globalAlpha = this.opacity;
    
    ctx.translate(this.x, this.y);
    ctx.rotate(this.swing);
    
    ctx.fillStyle = '#ffffff';
    ctx.shadowBlur = 5;
    ctx.shadowColor = '#ffffff';
    
    ctx.beginPath();
    ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
    ctx.fill();
    
    if (this.radius > 1.5) {
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = this.radius * 0.3;
      
      for (let i = 0; i < 6; i++) {
        ctx.rotate(Math.PI / 3);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -this.radius * 2);
        ctx.stroke();
      }
    }
    
    ctx.restore();
  }
}

export default function SnowfallWrapper() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const snowflakesRef = useRef<Snowflake[]>([]);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const snowflakeCount = 120;
    
    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      snowflakesRef.current = [];
      for (let i = 0; i < snowflakeCount; i++) {
        snowflakesRef.current.push(new Snowflake(canvas));
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      snowflakesRef.current.forEach(snowflake => {
        snowflake.update();
        snowflake.draw(ctx);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]"
    />
  );
}