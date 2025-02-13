import { Outlet, Link, useLocation } from "react-router-dom";
import { useLayoutEffect, useState, useRef, useEffect } from "react";

import './root.css';
import * as THREE from 'three';


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
    // const [fps, setFps] = useState<number>(0);

    const location = useLocation();
    // let frames = 0, prevTime = performance.now();
    
    // Set height and with on canvas
    useLayoutEffect(() => {
        setHeight(headerElem.current!.offsetHeight);
        setWidth(headerElem.current!.offsetWidth);
    }, [headerElem.current]);


    useEffect(() => {
        if (height > 0 && width > 0) {
        var scene = new THREE.Scene();
    
        var camera = new THREE.PerspectiveCamera( 30, width/height );
        camera.position.set( 0, 0, 10 );
        camera.aspect = width / height;
        
        //@ts-ignore
        const renderer = new THREE.WebGLRenderer({ canvas: canvas.current, alpha: true, antialias: true });
        
        window.addEventListener( "resize", () => {
            // Unsure why, but the state refuses to update
            // inside of useEffect. But fps works fine.
            // This is a mystery to be solved for a noob
            // like me. Mañana.
            const newWidth = headerElem.current!.offsetWidth;
            const newHeight = headerElem.current!.offsetHeight;

            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(newWidth, newHeight);
        });
    

        var ambientLight = new THREE.AmbientLight( 'white', 0.5 );
        scene.add( ambientLight );
    

        // Plane Geometry
        const widthPlane = 5, heightPlane = 1, segments = 100;
        const geometryOne  = new THREE.PlaneGeometry(widthPlane, heightPlane, segments, segments/6);
        const geometryTwo  = new THREE.PlaneGeometry(widthPlane+4, heightPlane, segments*1.5, segments/6);
        const geometryThree = new THREE.PlaneGeometry(widthPlane+8, heightPlane, segments*2, segments/6);
        geometryOne.rotateY(Math.PI / 2); 
        geometryTwo.rotateY(Math.PI / 2); 
        geometryThree.rotateY(Math.PI / 2);   


        const fragmentShader = `
            precision mediump float;

            varying vec2 vUv;

            uniform vec3 colors[5];  // Up to 5 colors
            uniform float stops[5];  // Corresponding positions

            void main() {
                float t = vUv.y; // Linear gradient along y-axis

                vec3 color = colors[0]; // Start with the first color

                for (int i = 0; i < 4; i++) { // Loop through colors
                    float lower = stops[i];
                    float upper = stops[i + 1];

                    if (t >= lower && t <= upper) {
                        float blend = (t - lower) / (upper - lower);
                        color = mix(colors[i], colors[i + 1], blend);
                    }
                }

                gl_FragColor = vec4(color, 1.0);
            }
        `;

        const materialOne = new THREE.ShaderMaterial({
            vertexShader: `
                uniform float time;
                varying vec2 vUv;
                void main() {
                    vUv = uv * 0.98 + 0.01; // Scale & shift UVs slightly
                    vec3 pos = position;

                    // Rotate 90 degrees around the Y-axis
                    float temp = pos.x;
                    pos.x = pos.z;
                    pos.z = -temp;

                    float wave = cos(pos.x * 3.0 + time * 0.02-2.0) * 0.13; 
                    pos.y += wave;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
                }
            `,
            fragmentShader,
            uniforms: {
                time: { value: 0 },
                colors: { value: [
                    new THREE.Color("rgb(12, 25, 4)"),
                    new THREE.Color("rgb(35, 126, 110)"),
                    new THREE.Color("rgb(111, 150, 112)"),
                    new THREE.Color("rgb(98, 168, 97)"),
                    new THREE.Color("rgb(193, 219, 196)"), 
                ]},
                stops: { value: [0.0, 0.75, 0.85, 0.975, 1.0] }
            },
            side: THREE.DoubleSide,
            wireframe: false,
        });

        const materialTwo = new THREE.ShaderMaterial({
            vertexShader: `
                uniform float time;
                varying vec2 vUv;
                void main() {
                    vUv = uv * 0.98 + 0.01; // Scale & shift UVs slightly
                    vec3 pos = position;

                    // Rotate 90 degrees around the Y-axis
                    float temp = pos.x;
                    pos.x = pos.z;
                    pos.z = -temp;

                    float wave = cos(pos.x * 1.8 + time * 0.04+1.5) * 0.20; 
                    pos.y += wave;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
                }
            `,
            fragmentShader,
            uniforms: {
                time: { value: 0 },
                colors: { value: [
                    new THREE.Color("rgb(12, 25, 4)"),
                    new THREE.Color("rgb(26, 122, 127)"),
                    new THREE.Color("rgb(111, 150, 114)"),
                    new THREE.Color("rgb(124, 193, 119)"),
                    new THREE.Color("rgb(208, 236, 211)"), 
                ]},
                stops: { value: [0.0, 0.65, 0.85, 0.97, 1.00] }
            },
            side: THREE.DoubleSide,
            wireframe: false,
        });

        const materialThree = new THREE.ShaderMaterial({
            vertexShader: `
                uniform float time;
                varying vec2 vUv;
                void main() {
                    vUv = uv * 0.98 + 0.01; // Scale & shift UVs slightly
                    vec3 pos = position;

                    // Rotate 90 degrees around the Y-axis
                    float temp = pos.x;
                    pos.x = pos.z;
                    pos.z = -temp;

                    float wave = cos(pos.x * 1.5 + time * 0.05-1.6) * 0.26; 
                    pos.y += wave;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
                }
            `,
            fragmentShader,
            uniforms: {
                time: { value: 0 },
                colors: { value: [
                    new THREE.Color("rgb(12, 25, 4)"),
                    new THREE.Color("rgb(146, 189, 182)"),
                    new THREE.Color("rgb(150, 197, 170)"),
                    new THREE.Color("rgb(162, 213, 176)"),
                    new THREE.Color("rgb(227, 242, 229)"), 
                ]},
                stops: { value: [0.0, 0.65, 0.85, 0.965, 1.0] }
            },
            side: THREE.DoubleSide,
            wireframe: false,
        });

        const wavePlaneOne   = new THREE.Mesh(geometryOne, materialOne);
        const wavePlaneTwo   = new THREE.Mesh(geometryTwo, materialTwo);
        const wavePlaneThree = new THREE.Mesh(geometryThree, materialThree);
        wavePlaneOne.position.set(0, -0.58, 9);
        wavePlaneTwo.position.set(0, -0.5, 8.5);
        wavePlaneThree.position.set(0, -0.35, 8);
        wavePlaneOne.rotateY(3.15);
        wavePlaneTwo.rotateY(3.15);
        wavePlaneThree.rotateY(3.15);
        scene.add(wavePlaneOne);
        scene.add(wavePlaneTwo);
        scene.add(wavePlaneThree);
        const clock = new THREE.Clock();



        function animationLoop() {

            // FPS 
            // frames ++;
            // const time = performance.now();
            // if ( time >= prevTime + 1000 ) {
                // console.log( "fps", Math.round( ( frames * 1000 ) / ( time - prevTime ) ) );
                // setFps(Math.round( ( frames * 1000 ) / ( time - prevTime ) ));
                // frames = 0;
                // prevTime = time;
            // }

            materialOne.uniforms.time.value   = clock.getElapsedTime();
            materialTwo.uniforms.time.value   = clock.getElapsedTime();
            materialThree.uniforms.time.value = clock.getElapsedTime();
            renderer.render( scene, camera );
        }
    
        renderer.setAnimationLoop( animationLoop );
        }
    }, [height, width, headerElem.current]);
    

    [homeLink, cvLink, projectsLink, connectLink, photographyLink].forEach(elem => {
        if(elem.current) {
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
            <canvas width={width} height={height} ref={canvas} />
            {/* <p style={{position: "absolute", right: "0.5rem", bottom: "-0.75rem", color: "black", opacity: "0.5", fontSize: "0.75rem"}}>{fps}fps</p> */}

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