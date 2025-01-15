import { Outlet, Link, useLocation } from "react-router-dom";
// <Outlet /> is where the content will show
import { useLayoutEffect, useState, useRef, useEffect } from "react";

import './root.css';

import * as THREE from 'three';

import WaveOne from './components/waveOne';
import WaveTwo from './components/waveTwo';
import WaveThree from './components/waveThree';


export default function Root() {
    const canvas = useRef(null);
    const headerElem = useRef<HTMLElement | null>(null);
    
    const homeLink = useRef<HTMLAnchorElement | null>(null);
    const cvLink = useRef<HTMLAnchorElement | null>(null);
    const projectsLink = useRef<HTMLAnchorElement | null>(null);
    const connectLink = useRef<HTMLAnchorElement | null>(null);
    const photographyLink =  useRef<HTMLAnchorElement | null>(null);

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

    useEffect(() => {
        var scene = new THREE.Scene();
        scene.background = new THREE.Color( 'darkgray' );
    
        var camera = new THREE.PerspectiveCamera( 30, window.innerWidth/window.innerHeight );
        camera.position.set( 0, 0, 10 );
        camera.lookAt( scene.position );
    
        //@ts-ignore
        const renderer = new THREE.WebGLRenderer({ canvas: canvas.current });        

        // window.addEventListener( "resize", (event) => {
        //     camera.aspect = window.innerWidth/window.innerHeight;
        //     camera.updateProjectionMatrix( );
        //     renderer.setSize( window.innerWidth, window.innerHeight );
        // });
    
        var ambientLight = new THREE.AmbientLight( 'white', 0.5 );
        scene.add( ambientLight );
    
        var light = new THREE.DirectionalLight( 'white', 0.5 );
        light.position.set( 1, 1, 1 );
        scene.add( light );
    
        // three points defining the curve
        var A = new THREE.Mesh(
            new THREE.SphereGeometry( 0.1 ),
            new THREE.MeshBasicMaterial( {color:'black'} )
        ),
        B = A.clone(),
        C = A.clone();
        scene.add( A, B, C );
    
        // a Bezier curve based on three points
        var curve = new THREE.QuadraticBezierCurve3(
            A.position,
            B.position,
            C.position
        );
    
        // a plane that adopts the silhouette of the curve
        var plane = new THREE.Mesh(
            new THREE.PlaneGeometry( 1, 1, 20, 1 ),
            new THREE.MeshBasicMaterial( {color: 'tomato'} )
        );
        scene.add( plane );
    
        // vertices of the plane
        var pos = plane.geometry.getAttribute( 'position' ),
            n = pos.count/2,
            pnt = new THREE.Vector3(),
            tan = new THREE.Vector3();
    
    
        function animationLoop( t: number ) {
            // move the three points up and down
            A.position.set( -2, Math.sin( t/700 ), 0 );
            B.position.set(  0, Math.cos( t/800 ), 0 );
            C.position.set(  2, Math.sin( t/900 ), 0 );
        
            // update the plane
            for( var i=0; i<n; i++ ) {
                curve.getPoint( i/(n-1), pnt );
                curve.getTangent( i/(n-1), tan );
            
                pos.setXY( i, pnt.x-tan.y, pnt.y+tan.x );		
                pos.setXY( i+n, pnt.x+tan.y, pnt.y-tan.x );		
            }
            pos.needsUpdate = true;
            
            renderer.render( scene, camera );
        }
    
        renderer.setAnimationLoop( animationLoop );
    
    }, []);
    
    [homeLink, cvLink, projectsLink, connectLink, photographyLink].forEach(elem => {
        if(elem.current) {
            // console.log(elem.current.pathname, location.pathname, elem.current.pathname == location.pathname);
            
            if(elem.current.pathname == location.pathname) {
                elem.current.className = "currentPage";
            } else {
                elem.current.className = "";
            }
            
        }
    });


    return (
        <>
        <header ref={headerElem}>
            <canvas width={window.innerWidth} height={window.innerHeight} ref={canvas} style={{border: "1px solid red"}} />
            {/* <canvas width={width} height={height} ref={canvas} style={{border: "1px solid red"}} /> */}
            {/* <WaveOne width={width} height={height} viewBoxValue={viewBoxValue} />
            <WaveTwo width={width} height={height} viewBoxValue={viewBoxValue} />
            <WaveThree width={width} height={height} viewBoxValue={viewBoxValue} /> */}

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
                <li><Link ref={projectsLink} to={`/projekt`}>Projekt</Link></li>
                <li><Link ref={photographyLink} to={`/foton`}>Foton</Link></li>
                <li><Link ref={connectLink} to={`/kontakt`}>Kontakt</Link></li>
            </ul>
        </nav>
        
        <main>
            <Outlet />
        </main>
      </>
    );
  }