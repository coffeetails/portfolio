import { useRef, useEffect } from 'react';
import "./techstack.css";

export default function TechStack() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const canvasWidth = 300;
    const canvasHeight = 700;
    
    
    
    useEffect(() => {
        const techsOld: string[] = ["HTML","CSS", "SASS", "Javascript", "Typescript", "Figma", "Node.js", "React", "Git / github", "Docker", "C#" ];
        const techs: any = [ ["HTML", 30],["CSS",30],["SASS",90],["Javascript",40],["Typescript",60],["Figma",40],["Node.js",40],["React",60],["Git / github",80],["Docker",80],["C#",100] ];
        const gap: number = 30;
        const backgroundHeight: number = 18;
        const backgroundRadius: number = backgroundHeight/2;
        let textPosition: number[] = [140,180];
        let backgoundPosition: number[] = [130,165];

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
        let gradient = context.createLinearGradient(0, 130, 0, backgoundPosition[1]+(gap*techs.length));
        gradient.addColorStop(0.4, "#38761D");
        gradient.addColorStop(0.8, "#0C343D");
        context.fillStyle = gradient;

        // for(let i = 0; i < techs.length; i++) {
        for(let tech of techs) {
            context.fillRect(tech[1], backgoundPosition[1], canvasWidth, backgroundHeight);

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