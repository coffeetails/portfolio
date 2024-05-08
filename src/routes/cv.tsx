import { useEffect } from "react";
import parse from "html-react-parser";

import TechStack from "./components/techstack";
import cvData from "../data/cv.json";
import "./cv.css";


export default function CV() {

    useEffect(() => {
        document.title = 'Kaffekod - CV'; // Quick solution
    }, []);


    const cvDataDisplay = cvData.map((category: { [key: string]: any }, x: number) => {
        for(let categoryKeyName in category) {
            const items = category[categoryKeyName].map((item: { title: string; time: { start: string; end: string; }; location: string ; description: string; }, y: number) => {
                // console.log(item);
                
                const itemKey = "cv-" + x + "-" + y;
                
                return (
                    <section className="cvItem" key={itemKey}>
                        <p>{item.title}</p>
                        <p>{item.time.start} - {item.time.end}</p>
                        <address>{item.location}</address>
                        <p>{parse(item.description)}</p>
                    </section>
                );
            });

            const categoryKey = "cv-" + x;

            return (
                <section className="cvCategory" key={categoryKey}>
                    <h2>{categoryKeyName}</h2>
                    {items}
                </section>
            );
        }
    });

    return (
        <article className="cvPage">
            <section>
                {cvDataDisplay}
            </section>
            <section className="cvSide">
                <TechStack />

                <h2>Språkkunskaper</h2>
                <p>Svenska: Modersmål.</p>
                <p>Engelska: Goda kunskaper.</p>
                <p>Norska: Grundläggande läs- och </p>
                hörförståelse.

                <h2>Övriga meriter</h2>
                <p>B-körkort</p>
                <p>Klassrepresentant och deltagare i ledningsgruppen för Frontend-utbildningen, 2021-2023</p>
                <p>Admin på rollspels-server för SPRP i GTA5, 2017-2019</p>
                <p>Vattengympainstruktör för Korpen i Arvika, 2016</p>
            </section>
        </article>
    );
}