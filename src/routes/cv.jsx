import cvData from "../data/cv.json";

export default function CV() {

    const cvDataDisplay = cvData.map(category => {
        for(let key in category) {
            const items = category[key].map(item => {
                console.log(item);
                return (
                    <section>
                        <h3>{item.title}</h3>
                        <p>{item.time.start} - {item.time.end}</p>
                        <address>{item.location}</address>
                        <p>{item.description}</p>
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