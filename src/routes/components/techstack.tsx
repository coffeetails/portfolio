import { useRef } from 'react';
import "./techstack.css";

export default function TechStack() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const canvasWidth = 700;
    const canvasHeight = 1000;

    // useEffect(() => {
    document.fonts.load("2rem Nunito").then(() => {
        const techs: {label: string, x: number}[] = [ 
            {label: "HTML",         x: 290},
            {label: "CSS",          x: 290},
            {label: "SASS",         x: 230},
            {label: "Javascript",   x: 250},
            {label: "Typescript",   x: 230},
            {label: "Figma",        x: 250},
            {label: "React",        x: 220},
            {label: "Node.js",      x: 220},
            {label: "Git / github", x: 190},
            {label: "Docker",       x: 190},
            {label: "C#",           x: 170} ];
        const gap: number = 60;
        const backgroundHeight: number = 36;
        const backgroundRadius: number = backgroundHeight/2;
        let textPosition: {x: number, y: number}  = {x: 340, y: 260};
        let stackPosition: {x: number, y: number} = {x: 60, y: 230};
        
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
        context.fillText("Grundläggande kunskaper", 120, 60);
        context.fillText("Goda kunskaper",          180, 120);
        context.fillText("Mycket goda kunskaper",   240, 180);

        for(let tech of techs) {
            context.fillText(tech.label, textPosition.x, textPosition.y);
            textPosition.y += gap;
        };
        
        // === LEVEL OF KNOWLEDGE LINES === //
        context.beginPath();
        
        context.moveTo(130, canvasHeight);
        context.lineTo(130, 70);
        context.lineTo(530, 70);
        
        context.moveTo(190, canvasHeight);
        context.lineTo(190, 130);
        context.lineTo(610, 130);
        
        context.moveTo(250, canvasHeight);
        context.lineTo(250, 190);
        context.lineTo(650, 190);
        
        context.strokeStyle = "#fafafa";
        context.stroke();
        
        // === STACKS & STACK BACKGROUND === //
        let gradient = context.createLinearGradient(0, stackPosition.y/2, 0, stackPosition.y+(gap*techs.length));
        gradient.addColorStop(0.4, "#38761D");
        gradient.addColorStop(0.8, "#0C343D");
        context.fillStyle = gradient;

        console.log("Drawing stack: ");
        for(let tech of techs) {

            // Background
            context.beginPath();
            context.roundRect(-backgroundRadius, stackPosition.y, tech.x, backgroundHeight, backgroundRadius);
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
            context.roundRect(-backgroundRadius, stackPosition.y, tech.x, backgroundHeight, backgroundRadius);
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


            stackPosition.y += gap;
        }
        stackPosition.y -= (gap*techs.length); // Reset variable
    });
    // }, [canvasRef, canvasWidth, canvasHeight, ]);

    return (
        <>
            <h2>TechStack</h2>
            <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} style={{width: "350px", height: "500px"}} className="techstack-canvas"></canvas>
            <span className="canvasAltText">alt text to the canvas</span>
        </>
    );
}