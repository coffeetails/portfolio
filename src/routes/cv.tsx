import { useEffect } from "react";
import parse from "html-react-parser";

import cvData from "../data/cv.json";
import "./cv.css";
// import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export default function CV() {

    useEffect(() => {
        document.title = 'Kaffekod - CV'; // Quick solution
    }, []);


    const cvDataDisplay = cvData.map((category: { [key: string]: any }, x: number) => {
        for(let categoryKey in category) {
            const items = category[categoryKey].map((item: { title: string; time: { start: string; end: string; }; location: string ; description: string; }, y: number) => {
                // console.log(item);
                
                const cvKey = "cv-" + x + "-" + y;
                
                return (
                    <section className="cvItem" key={cvKey}>
                        <p>{item.title}</p>
                        <p>{item.time.start} - {item.time.end}</p>
                        <address>{item.location}</address>
                        <p>{parse(item.description)}</p>
                    </section>
                );
            });

            return (
                <section className="cvCategory">
                    <h2>{categoryKey}</h2>
                    {items}
                </section>
            );
        }
    });

    return (
        <article>
            {cvDataDisplay}
        </article>
    );
}