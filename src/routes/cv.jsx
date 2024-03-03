import cvData from "../data/cv.json";
import parse from "html-react-parser";

export default function CV() {

    const cvDataDisplay = cvData.map((category, x) => {
        for(let key in category) {
            const items = category[key].map((item, y) => {
                console.log(item);
                
                const cvKey = "cv-" + x + "-" + y;
                
                return (
                    <section key={cvKey}>
                        <h3>{item.title}</h3>
                        <p>{item.time.start} - {item.time.end}</p>
                        <address>{item.location}</address>
                        <p>{parse(item.description)}</p>
                    </section>
                );
            });

            return (
                <>
                    <h2>{key}</h2>
                    {items}
                </>
            );
        }
    });

    return (
        <article>
            <h1>CV</h1>
            <i>Ett urval</i>
            {cvDataDisplay}
        </article>
    );
}