import { Outlet, Link, useLocation } from "react-router-dom";
// <Outlet /> is where the content will show
import { useLayoutEffect, useState, useRef } from "react";

import './root.css';

import WaveOne from './waves/waveOne';
import WaveTwo from './waves/waveTwo';
import WaveThree from './waves/waveThree';


export default function Root() {
    const headerElem = useRef<HTMLElement | null>(null);
    const homeLink = useRef<HTMLAnchorElement | null>(null);
    const cvLink = useRef<HTMLAnchorElement | null>(null);
    const projectsLink = useRef<HTMLAnchorElement | null>(null);
    const connectLink = useRef<HTMLAnchorElement | null>(null);

    const [height, setHeight] = useState<number>(0);
    const [width, setWidth] = useState<number>(0);
    const [viewBoxValue, setViewBoxValue] = useState<string>("0 0 0 0");
    const location = useLocation();
    // let subtitle = "";

    
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
        console.log("header", headerElem.current!.offsetWidth + " x " + headerElem.current!.offsetHeight);
        console.log("window", windowSize);
        
        
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
    
    if(homeLink.current && cvLink.current && projectsLink.current && connectLink.current) {
        homeLink.current.className = "";
        cvLink.current.className = "";
        projectsLink.current.className = "";
        connectLink.current.className = "";
        
        switch (location.pathname) {
            case "/":
                    homeLink.current.className = "currentPage";
                break;
            case "/cv":
                    cvLink.current.className = "currentPage";
                break;
            case "/projects":
                    projectsLink.current.className = "currentPage";
                break;
            case "/connect":
                    connectLink.current.className = "currentPage";
                break;
            default:
                console.log("Where are we now? 👀");
                break;
        }
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
        
        <nav className="mainmenu">
            <ul>
                <li><Link ref={homeLink} to={`/`}>Hem</Link></li>
                <li><Link ref={cvLink} to={`/cv`} >CV</Link></li>
                <li><Link ref={projectsLink} to={`/projects`}>Projekt</Link></li>
                <li><Link ref={connectLink} to={`/connect`}>Kontakt</Link></li>
            </ul>
        </nav>
        
        <main>
            <Outlet />
        </main>
      </>
    );
  }