import { useRef, useEffect } from 'react';
import "./techstack.css";

export default function TechStack() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const canvasWidth = 300;
    const canvasHeight = 700;
    
    
    
    useEffect(() => {
        const techs: any = [ ["HTML", 100],["CSS", 100],["SASS", 80],["Javascript", 90],["Typescript",80],["Figma",50],["Node.js",40],["React",30],["Git / github",30],["Docker",20],["C#",20] ];
        const gap: number = 30;
        const backgroundHeight: number = 18;
        const backgroundRadius: number = backgroundHeight/2;
        let textPosition: number[] = [140,180];
        // let backgoundPosition: number[] = [130,165];
        let backgoundPosition: number[] = [0,165];

        const canvas = canvasRef.current;
        if(!canvas) {
            return;
        }
        const context = canvas.getContext('2d');
        if(!context) {
            return;
        }

        // === TITLE === //
        context.fillStyle = "#fafafa";
        context.font = '2rem "Nunito"';
        context.fillText("Techstack", 10, 50);
        
        // === LEVEL OF KNOWLEDGE === //
        context.font = '1rem "Nunito"';
        context.fillText("Grundläggande kunskaper", 30, 100);
        context.fillText("Goda kunskaper",          60, 120);
        context.fillText("Mycket goda kunskaper",   90, 140);

        // === LINES OF KNOWLEDGE === //


        
        // === STACK BACKGROUND === //
        // Color
        let gradient = context.createLinearGradient(0, 130, 0, backgoundPosition[1]+(gap*techs.length));
        gradient.addColorStop(0.4, "#38761D");
        gradient.addColorStop(0.8, "#0C343D");
        context.fillStyle = gradient;

        // Lines
        for(let tech of techs) {
            context.fillRect(0, backgoundPosition[1], tech[1], backgroundHeight);

            context.beginPath();
            context.arc(tech[1], backgoundPosition[1]+backgroundRadius, backgroundRadius, 0, 2 * Math.PI);
            context.fill();

            backgoundPosition[1] += gap;
        }

        // === STACK TEXT === //
        for(let tech of techs) {
            context.font = '1rem "Nunito"';
            context.fillStyle = "#fafafa";
            context.fillText(tech[0], textPosition[0], textPosition[1]);
            textPosition[1] += gap;
        };
 
    }, []);

    return (
        <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} className="techstack-canvas">
        </canvas>
    );
}