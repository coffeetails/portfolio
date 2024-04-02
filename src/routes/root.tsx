import { Outlet, Link, useLocation } from "react-router-dom";
// <Outlet /> is where the content will show
import { useLayoutEffect, useEffect, useState, useRef } from "react";

import './root.css';

import WaveOne from './waves/waveOne';
import WaveTwo from './waves/waveTwo';
import WaveThree from './waves/waveThree';


export default function Root() {
    const headerElem = useRef<HTMLElement | null>(null);
    const [height, setHeight] = useState<number>(0);
    const [width, setWidth] = useState<number>(0);
    const [viewBoxValue, setViewBoxValue] = useState<string>("0 0 0 0");
    const location = useLocation();
    let subtitle = "";

    
    function useWindowSize() {
        const [size, setSize] = useState([0, 0]);
        useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
        }, []);
        return size;
    } // https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react
    let windowSize = useWindowSize();
    
    useLayoutEffect(() => {
        const reducedHeight = 0.8;
        const mediaQueryBreakpoint = 800;
        // console.log("header", headerElem.current!.offsetWidth + " x " + headerElem.current!.offsetHeight);
        // console.log("window", windowSize);
        
        
        if(headerElem.current!.offsetWidth < mediaQueryBreakpoint) {
            setHeight(headerElem.current!.offsetHeight*reducedHeight);
            setWidth(headerElem.current!.offsetWidth);
            setViewBoxValue("0 0 " + width + " " + (height*reducedHeight));
        } else {
            setHeight(headerElem.current!.offsetHeight);
            setWidth(headerElem.current!.offsetWidth);
            setViewBoxValue("0 0 " + width + " " + height);
        }

    });

    switch (location.pathname) {
        case "/":
            subtitle = "Hem";
            break;
        case "/cv":
            subtitle = "CV";
            break;
        case "/projects":
            subtitle = "Projekt";
            break;
        case "/connect":
            subtitle = "Kontakt";
            break;
        default:
            subtitle = "";
            console.log("Where are we now? 👀");
            break;
    }



    return (
        <>
        <header ref={headerElem}>
            <WaveOne width={width} height={height} viewBoxValue={viewBoxValue} />
            <WaveTwo width={width} height={height} viewBoxValue={viewBoxValue} />
            <WaveThree width={width} height={height} viewBoxValue={viewBoxValue} />
            <div className="header-text">
                <h1>Monica Björk</h1>
                {/* <p>{subtitle}</p> */}
            </div>
            <img src="cv-photo.png" className="cvPhoto" />
            <div className="borderShadow"> </div>
        </header>
        
        <main>
            <nav className="mainmenu">
                <ul>
                    <li><Link to={`/`}>Hem</Link></li>
                    <li><Link to={`/cv`} >CV</Link></li>
                    <li><Link to={`/projects`}>Projekt</Link></li>
                    <li><Link to={`/connect`}>Kontakt</Link></li>
                </ul>
            </nav>

            <Outlet />
            
        </main>
      </>
    );
  }