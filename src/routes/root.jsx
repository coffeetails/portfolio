import { Outlet, Link } from "react-router-dom";
// <Outlet /> is where the content will show
import { useLayoutEffect, useState, useRef } from "react";

import './root.css';
import WaveOne from '/wave1.svg';
import WaveTwo from '/wave2.svg';
import WaveThree from '/wave3.svg';
import WaveTest from './waveTest';

export default function Root() {
    let headerElem = useRef(null);
    let [height, setHeight] = useState(null);
    let [width, setWidth] = useState(null);
    useLayoutEffect(() => setHeight(headerElem.current.offsetHeight));
    useLayoutEffect(() => setWidth(headerElem.current.offsetWidth));
    useLayoutEffect(() => console.log(headerElem));

    return (
        <>
        <header ref={headerElem}>
            <h1 className="header-text">{width + " x " + height}</h1>
            {/* <div className="wrapper-wave"> */}
                
                <object data={WaveOne} type="image/svg+xml" className="wave"></object>
                <object data={WaveTwo} type="image/svg+xml" className="wave"></object>
                <object data={WaveThree} type="image/svg+xml" className="wave"></object>

                <WaveTest width={width} height={height} />

            {/* </div> */}
        </header>
        
        <main>
            <nav>
                <ul>
                    <li><Link to={`/`}>Hem</Link></li>
                    <li><Link to={`/cv`}>CV</Link></li>
                    <li><Link to={`/connect`}>Kontakt</Link></li>
                    <li><Link to={`/nope`}>Nope</Link></li>
                </ul>
            </nav>
            <Outlet />
        </main>
      </>
    );
  }