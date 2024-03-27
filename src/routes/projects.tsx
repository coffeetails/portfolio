import { useEffect } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

import projectsData from "../data/projects.json";
import "./projects.css";

export default function Projects() {
  
    useEffect(() => {
        document.title = 'Kaffekod - Projekt';
    }, []);

    const projectsDataDisplay = projectsData.map((item, i) => {
        const projectKey = "project-" + i;

        return (
            <section className="projectItem" key={projectKey}>
                <img src={item.image} />
                <div className="textWrapper">
                    <h2>{item.title}</h2>
                    <p>{parse(item.text)}</p>
                    <Link to={item.livePage}>Se sidan live</Link>
                    <Link to={item.githubPage}>Github repo</Link>
                </div>
            </section>
        );
    });

    return (
        <>
            {projectsDataDisplay}
        </>
    );
}