import { useRef, useEffect } from 'react';
import "./techstack.css";

export default function TechStack() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const canvasWidth = 300;
    const canvasHeight = 550;
    
    
    
    useEffect(() => {
        const techs: {label: string, x: number}[] = [ 
            {label: "HTML",         x: 115},
            {label: "CSS",          x: 115},
            {label: "SASS",         x: 85},
            {label: "Javascript",   x: 95},
            {label: "Typescript",   x: 85},
            {label: "Figma",        x: 95},
            {label: "Node.js",      x: 90},
            {label: "React",        x: 90},
            {label: "Git / github", x: 65},
            {label: "Docker",       x: 65},
            {label: "C#",           x: 55} ];
        const gap: number = 30;
        const backgroundHeight: number = 18;
        const backgroundRadius: number = backgroundHeight/2;
        let textPosition: {x: number, y: number}      = {x: 140, y: 180};
        let backgoundPosition: {x: number, y: number} = {x: 0,   y: 165};

        const canvas = canvasRef.current;
        if(!canvas) {
            return;
        }
        const context = canvas.getContext('2d');
        if(!context) {
            return;
        }

        // === TEXT === //
        context.fillStyle = "#fafafa";
        context.font = '2rem "Nunito"';
        context.fillText("Techstack",               10,  50);
        context.font = '1rem "Nunito"';
        context.fillText("Grundläggande kunskaper", 30,  80);
        context.fillText("Goda kunskaper",          60, 110);
        context.fillText("Mycket goda kunskaper",   90, 140);

        for(let tech of techs) {
            context.font = '1rem "Nunito"';
            context.fillStyle = "#fafafa";
            context.fillText(tech.label, textPosition.x, textPosition.y);
            textPosition.y += gap;
        };
        
        // === LEVEL OF KNOWLEDGE LINES === //
        context.beginPath();
        
        context.moveTo(35, canvasHeight);
        context.lineTo(35, 85);
        context.lineTo(230, 85);
        
        context.moveTo(65, canvasHeight);
        context.lineTo(65, 115);
        context.lineTo(250, 115);
        
        context.moveTo(95, canvasHeight);
        context.lineTo(95, 145);
        context.lineTo(270, 145);
        
        context.strokeStyle = "#fafafa";
        context.stroke();
        
        // === STACKS & STACK BACKGROUND === //
        let gradient = context.createLinearGradient(0, 130, 0, backgoundPosition.y+(gap*techs.length));
        gradient.addColorStop(0.4, "#38761D");
        gradient.addColorStop(0.8, "#0C343D");
        context.fillStyle = gradient;


        for(let tech of techs) {
            // Background
            context.beginPath();
            context.roundRect(-backgroundRadius, backgoundPosition.y, tech.x, backgroundHeight, backgroundRadius);
            context.fill();
            
            // Inner shadow
            context.strokeStyle = "#000";
            
            context.save();
            context.beginPath();
            context.roundRect(-backgroundRadius, backgoundPosition.y, tech.x, backgroundHeight, backgroundRadius);
            context.stroke();
            context.clip();
            
            context.shadowOffsetY = -2;
            context.shadowBlur = 3;
            context.shadowColor = '#000';
            context.stroke();

            context.shadowOffsetY = 2;
            context.shadowColor = '#fff';
            context.stroke();
            
            context.restore();

            // Outer shadow
            context.shadowOffsetX = 1;
            context.shadowOffsetY = 2;
            context.shadowBlur = 3;
            context.shadowColor = '#000';

            backgoundPosition.y += gap;
        }
        backgoundPosition.y = -(gap*techs.length); // Reset variable
 
    }, []);

    return (
        <>
            <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} className="techstack-canvas"></canvas>
            <span className="canvasAltText">alt text to the canvas</span>
        </>
    );
}