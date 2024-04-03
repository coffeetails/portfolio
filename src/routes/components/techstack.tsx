import { useRef, useEffect } from 'react';
import "./techstack.css";

export default function TechStack() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const canvasWidth = 300;
    const canvasHeight = 500;

    useEffect(() => {
        const canvas = canvasRef.current;
        if(!canvas) {
            return;
        }
        const context = canvas.getContext('2d');
        if(!context) {
            return;
        }

        context.fillStyle = 'black';
        context.fillRect(0, 0, canvasWidth, canvasHeight);

        context.fillStyle = "#fafafa"
        context.font = '2rem "Nunito"';
        context.fillText("Techstack", 10, 50);
        context.font = '1rem "Nunito"';
        context.fillText("Grundläggande kunskaper", 30, 100);
        context.fillText("Goda kunskaper",          60, 120);
        context.fillText("Mycket goda kunskaper",   90, 140);
        
        context.fillText("HTML",            140, 180);
        context.fillText("CSS",             140, 200);
        context.fillText("SASS",            140, 220);
        context.fillText("Javascript",      140, 240);
        context.fillText("Typescript",      140, 260);
        context.fillText("Figma",           140, 280);
        context.fillText("Node.js",         140, 300);
        context.fillText("React",           140, 320);
        context.fillText("Git / github",    140, 340);
        context.fillText("Docker",          140, 360);
        context.fillText("C#",              140, 380);
      }, []);

    return (
        <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} className="techstack-canvas">
        </canvas>
    );
}