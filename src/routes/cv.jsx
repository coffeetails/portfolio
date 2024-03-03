import cvData from "../data/cv.json";
import parse from "html-react-parser";
import "./cv.css";

export default function CV() {

    const cvDataDisplay = cvData.map((category, x) => {
        for(let categoryKey in category) {
            const items = category[categoryKey].map((item, y) => {
                console.log(item);
                
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