import { useRef, useEffect } from 'react';
import "./techstack.css";

export default function TechStack() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const canvasWidth = 350*2;
    const canvasHeight = 550*2;
    
    useEffect(() => {
        const techs: {label: string, x: number}[] = [ 
            {label: "HTML",         x: 145*2},
            {label: "CSS",          x: 145*2},
            {label: "SASS",         x: 115*2},
            {label: "Javascript",   x: 125*2},
            {label: "Typescript",   x: 115*2},
            {label: "Figma",        x: 125*2},
            {label: "React",        x: 110*2},
            {label: "Node.js",      x: 110*2},
            {label: "Git / github", x: 95*2},
            {label: "Docker",       x: 95*2},
            {label: "C#",           x: 85*2} ];
        const gap: number = 30*2;
        const backgroundHeight: number = 18*2;
        const backgroundRadius: number = backgroundHeight/2;
        let textPosition: {x: number, y: number}      = {x: 170*2, y: 130*2};
        let backgoundPosition: {x: number, y: number} = {x: 30*2,   y: 115*2};

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
        // context.font = '1rem "Nunito"';
        context.font = '2rem "Nunito"';
        context.fillText("Grundläggande kunskaper", 60*2,  30*2);
        context.fillText("Goda kunskaper",          90*2,  60*2);
        context.fillText("Mycket goda kunskaper",   120*2, 90*2);

        for(let tech of techs) {
            // context.font = '1rem "Nunito"';
            // context.fillStyle = "#fafafa";
            context.fillText(tech.label, textPosition.x, textPosition.y);
            textPosition.y += gap;
        };
        
        // === LEVEL OF KNOWLEDGE LINES === //
        context.beginPath();
        
        context.moveTo(65*2, canvasHeight);
        context.lineTo(65*2, 35*2);
        context.lineTo(265*2, 35*2);
        
        context.moveTo(95*2, canvasHeight);
        context.lineTo(95*2, 65*2);
        context.lineTo(305*2, 65*2);
        
        context.moveTo(125*2, canvasHeight);
        context.lineTo(125*2, 95*2);
        context.lineTo(325*2, 95*2);
        
        context.strokeStyle = "#fafafa";
        context.stroke();
        
        // === STACKS & STACK BACKGROUND === //
        let gradient = context.createLinearGradient(0, 130, 0, backgoundPosition.y+(gap*techs.length));
        gradient.addColorStop(0.4, "#38761D");
        gradient.addColorStop(0.8, "#0C343D");
        context.fillStyle = gradient;

        console.log("Drawing stack: ");
        for(let tech of techs) {
            console.log(tech.label);

            // Background
            context.beginPath();
            context.roundRect(-backgroundRadius, backgoundPosition.y, tech.x, backgroundHeight, backgroundRadius);
            context.fill();
            
            // Outer shadow
            context.shadowOffsetX = 1;
            context.shadowOffsetY = 2;
            context.shadowBlur = 3;
            context.shadowColor = '#000';

            // Inner shadow
            context.save();
            
            context.strokeStyle = "#000";
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


            backgoundPosition.y += gap;
        }
        backgoundPosition.y -= (gap*techs.length); // Reset variable

    }, [canvasRef, canvasWidth, canvasHeight]);

    return (
        <>
            <h2>TechStack</h2>
            <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} style={{width: "350px", height: "550px"}} className="techstack-canvas"></canvas>
            <span className="canvasAltText">alt text to the canvas</span>
        </>
    );
}