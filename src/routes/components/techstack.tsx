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

        // context.fillStyle = 'black';
        // context.fillRect(0, 0, canvasWidth, canvasHeight);

        /* Rectangle 77 */

// position: absolute;
// left: 100.64%;
// right: -101.27%;
// top: 30.62%;
// bottom: 6.4%;

// /* gradient 2 */
// background: linear-gradient(180deg, #38761D 4.09%, #0C343D 80.34%);
// transform: matrix(-1, 0, 0, 1, 0, 0);

        context.fillStyle = "#fafafa";
        context.font = '2rem "Nunito"';
        context.fillText("Techstack", 10, 50);
        
        context.font = '1rem "Nunito"';
        context.fillText("Grundläggande kunskaper", 30, 100);
        context.fillText("Goda kunskaper",          60, 120);
        context.fillText("Mycket goda kunskaper",   90, 140);


        const techs: string[] = ["HTML","CSS", "SASS", "Javascript", "Typescript", "Figma", "Node.js", "React", "Git / github", "Docker", "C#" ];
        let gradient = context.createLinearGradient(0, 130, 0, 365);
        gradient.addColorStop(0.4, "#38761D");
        gradient.addColorStop(0.8, "#0C343D");
        context.fillStyle = gradient;

        techs.map((tech, i) => {
            console.log(i, tech);
        });

        context.fillRect(130, 165, canvasWidth, 18);
        context.fillRect(130, 185, canvasWidth, 18);
        context.fillRect(130, 205, canvasWidth, 18);
        context.fillRect(130, 225, canvasWidth, 18);
        context.fillRect(130, 245, canvasWidth, 18);
        context.fillRect(130, 265, canvasWidth, 18);
        context.fillRect(130, 285, canvasWidth, 18);
        context.fillRect(130, 305, canvasWidth, 18);
        context.fillRect(130, 325, canvasWidth, 18);
        context.fillRect(130, 345, canvasWidth, 18);
        context.fillRect(130, 365, canvasWidth, 18);
        
        context.fillStyle = "#fafafa";
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