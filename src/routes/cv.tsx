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

                <h2>Språk</h2>
                <ul>
                    <li>Svenska: Modersmål</li>
                    <li>Engelska: Goda kunskaper</li>
                    <li>Norska: Grundläggande läs- och hörförståelse</li>
                </ul>


                <h2>Community-engagemang</h2>
                <ul>
                    <li>Moderator i Junior Dev Sverige på Discord <br />
                        Ansvarar för att underhålla en positiv och strukturerad miljö genom att moderera diskussioner, hantera innehåll och bidra med förbättringsförslag för att utveckla communityt.</li>
                </ul>

                <h2>Ideellt arbete</h2>
                <ul>
                    <li>Funktionär vid Arvika Pride 2023 och PicaCon 2024.</li>

                    <li>Webbutvecklare åt FunKit för VänCon sedan våren 2024. <br />
                        Jag tog initiativ till att skapa deras webbplats på fritiden och byggde en första version i SvelteKit, med CMSet Sanity.io. Under projektets gång har vi sett behov av att utvärdera andra CMS-lösningar - en lärorik process i kravställning och val av tekniker som tillslut landade i en Wordpress lösning.</li>

                    <li>Webbutvecklare åt Arvika Värme sedan vintern 2025.</li>
                </ul>

            </section>
        </article>
    );
}