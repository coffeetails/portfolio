import { Outlet, Link } from "react-router-dom";
// <Outlet /> is where the content will show
import { useLayoutEffect, useState, useRef } from "react";

import './root.css';

import WaveOneSvg from '/wave1.svg';
import WaveTwoSvg from '/wave2.svg';
import WaveThreeSvg from '/wave3.svg';

import WaveOne from './waves/waveOne';
import WaveTwo from './waves/waveTwo';
import WaveThree from './waves/waveThree';

export default function Root() {
    const headerElem = useRef(null);
    const [height, setHeight] = useState(null);
    const [width, setWidth] = useState(null);

    useLayoutEffect(() => setHeight(headerElem.current.offsetHeight));
    useLayoutEffect(() => setWidth(headerElem.current.offsetWidth));

    const viewBoxValue = "0 0 " + width + " " + height;

    return (
        <>
        <header ref={headerElem}>
            <h1 className="header-text">{width + " x " + height}</h1>
            {/* <div className="wrapper-wave"> */}
                
                {/* <object data={WaveOneSvg} type="image/svg+xml" className="wave"></object>
                <object data={WaveTwoSvg} type="image/svg+xml" className="wave"></object>
                <object data={WaveThreeSvg} type="image/svg+xml" className="wave"></object> */}

                <WaveOne width={width} height={height} viewBoxValue={viewBoxValue} />
                <WaveTwo width={width} height={height} viewBoxValue={viewBoxValue} />
                <WaveThree width={width} height={height} viewBoxValue={viewBoxValue} />

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