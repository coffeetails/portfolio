import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useEffect } from "react";
import gamesData from "../data/games.json";
import "./games.css";


export default function Games() {
    const gameTitles = gamesData.map(game => game.name);
    console.log(gameTitles);

    useEffect(() => {
        document.title = 'Games'; // Quick solution
    }, []);
    
    const gamesDataDisplay = gamesData.map((game: { [key: string]: any }, x: number) => {

        const gameTags = game.tags.map((tag: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined) => {
            return (
                <li key={game.name+tag+x}>{tag}</li>
            );
        });

        return (
            <section className="gameCard" key={game.name+x}>
                <h3><a href={game.url}>{game.name}</a></h3>
                <p className="gameCard-price"></p>
                <h4>About the game</h4>
                <p>{game.about}</p>
                <h4>About the modding</h4>
                <p>{game.modding}</p>
                <ul className="gameCard-tags">{gameTags}</ul>
            </section>
        );
    });

    return (
        <article className="games">
            <h2>Game list: Home server Sandbox Hangouts with modding</h2>
            <span className="updateDate">This page was last updated 2025-02-20</span>
            <p>Are you also looking for a moddable multiplayer game that you can run from home to be creative with your friends? Me too! So I made a list of games that check all the boxes.</p>
            <p>If you stumbled upon this page, these games are great to play with friends to just chill and hang around it. Chat about everything and nothing while building, exploring, fishing, crafting or whatever else the game might offer.</p>

            <section className="gamesWrapper">
                {gamesDataDisplay}
            </section>
        </article>
    );
}