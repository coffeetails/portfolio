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

        let githubLinks = item.githubPage.map( (page) => {
            return <li><Link to={page.link}>{page.label}</Link></li>
        });

        return (
            <section className="projectItem" key={projectKey}>
                <img src={item.image} />
                <div className="textWrapper">
                    <h2>{item.title}</h2>
                    <p>{parse(item.text)}</p>

                    <ul>
                        <li><Link to={item.livePage}>Se sidan live</Link></li>
                        {githubLinks}
                    </ul>
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
