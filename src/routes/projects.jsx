import projectsData from "../data/projects.json";
import { Link } from "react-router-dom";

export default function Projects() {

    const projectsDataDisplay = projectsData.map(item => {
        return (
            <article className="projectItem">
                <img src={item.image} />
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                <Link to={item.livePage}>Se sidan live</Link>
                <Link to={item.githubPage}>Github repo</Link>
            </article>
        );
    });

    return (
        <>
        <h1>Projekt</h1>
        {projectsDataDisplay}
        </>
    );
}