import { Outlet, Link, useLocation } from "react-router-dom";
// <Outlet /> is where the content will show
import { useLayoutEffect, useState, useRef, useEffect } from "react";
// import { BufferGeometryUtils } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';


import './root.css';

import * as THREE from 'three';

// import WaveOne from './components/waveOne';
// import WaveTwo from './components/waveTwo';
// import WaveThree from './components/waveThree';


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
    // const [viewBoxValue, setViewBoxValue] = useState<string>("0 0 0 0");
    const location = useLocation();
    // let subtitle = "";

    
    // function useWindowSize() {
    //     const [size, setSize] = useState([0, 0]);
    //     useLayoutEffect(() => {
    //     function updateSize() {
    //         setSize([window.innerWidth, window.innerHeight]);
    //     }
    //     window.addEventListener('resize', updateSize);
    //     updateSize();
    //     return () => window.removeEventListener('resize', updateSize);
    //     }, []);
    //     return size;
    // } // https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react
    // let windowSize = useWindowSize();
    // let canvasElem; 
    const reducedHeight = 0.8;
    const mediaQueryBreakpoint = 800;

    useLayoutEffect(() => {
        // console.log("header", headerElem.current!.offsetWidth + " x " + headerElem.current!.offsetHeight);
        // console.log("window", windowSize);
        
        if(headerElem.current!.offsetWidth < mediaQueryBreakpoint) {
            setHeight(headerElem.current!.offsetHeight*reducedHeight);
            setWidth(headerElem.current!.offsetWidth);
        } else {
            setHeight(headerElem.current!.offsetHeight);
            setWidth(headerElem.current!.offsetWidth);
        }
    }, [headerElem.current]);

    useEffect(() => {
        if (height > 0 && width > 0) {
        var scene = new THREE.Scene();
        scene.background = new THREE.Color( 'darkgray' );
    
        var camera = new THREE.PerspectiveCamera( 30, width/height );
        // var camera = new THREE.PerspectiveCamera( 30, window.innerWidth/(window.innerHeight-400) );
        camera.position.set( 0, 0, 10 );
        // camera.lookAt( scene.position );
    
        //@ts-ignore
        const renderer = new THREE.WebGLRenderer({ canvas: canvas.current });

        window.addEventListener( "resize", () => { 
            const newWidth = headerElem.current!.offsetWidth;
            const newHeight = headerElem.current!.offsetHeight;
            
            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(newWidth, newHeight);
        });
    

        // var ambientLight = new THREE.AmbientLight( 'white', 0.5 );
        // scene.add( ambientLight );
    
        const skyColor = 0xB1E1FF;  // light blue
        const groundColor = 0xB97A20;  // brownish orange
        const intensity = 1;
        const hemisphereLight = new THREE.HemisphereLight(skyColor, groundColor, intensity);
        scene.add(hemisphereLight);

        var directionalLight = new THREE.DirectionalLight( 'white', 10 );
        directionalLight.position.set( -13, 10, -10 );
        scene.add( directionalLight );


        // Plane Geometry
        const widthPlane = 5, heightPlane = 1, segments = 50;
        const geometry = new THREE.PlaneGeometry(widthPlane, heightPlane, segments, segments);
        geometry.rotateY(Math.PI / 2); 

        // // Create a rounded corner effect
        // const radius = 1;
        // const position = geometry.attributes.position;
        // for (let i = 0; i < position.count; i++) {
        //     let x = position.getX(i);
        //     let y = position.getY(i);
            
        //     // Clamp corners to create a rounded effect
        //     let d = Math.sqrt((x * x) + (y * y));
        //     if (d < heightPlane / 2 - radius && d < widthPlane / 2 - radius) {
        //         let scale = (heightPlane / 2 - radius) / d;
        //         position.setXY(i, x * scale, y * scale);
        //     }
        // }

        // Material
        const material = new THREE.ShaderMaterial({
            vertexShader: `
                uniform float time;
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    vec3 pos = position;

                    // Rotate 90 degrees around the Y-axis
                    float temp = pos.x;
                    pos.x = pos.z;
                    pos.z = -temp;

                    float wave = sin(pos.x * 2.0 + time * 1.0) * 0.1; 
                    pos.y += wave;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
                }
            `,
            fragmentShader: `
                varying vec2 vUv;
                void main() {
                    gl_FragColor = vec4(0.5, 0.5 + 0.5 * cos(vUv.y * 6.5), 0, 1); // Gradient color
                }
            `,
            uniforms: {
                time: { value: 0 }
            },
            side: THREE.DoubleSide,
            wireframe: false,
        });

        const wavePlane = new THREE.Mesh(geometry, material);
        wavePlane.position.set(0, -0.5, 5);
        // wavePlane.rotateX(0.75);
        scene.add(wavePlane);
        const clock = new THREE.Clock();



        function animationLoop() {
            material.uniforms.time.value = clock.getElapsedTime();
            renderer.render( scene, camera );
        }
    
        renderer.setAnimationLoop( animationLoop );
        }
    }, [height, width, headerElem.current]);
    
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
            {/* <canvas width={window.innerWidth} height={window.innerHeight-350} ref={canvas} /> */}
            <canvas width={width} height={height} ref={canvas} />

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