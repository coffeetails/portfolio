import { Outlet, Link } from "react-router-dom";
// <Outlet /> is where the content will show

import WaveOne from "/wave1.svg";
import WaveTwo from "/wave2.svg";
import WaveThree from "/wave3.svg";

export default function Root() {
    return (
        <>
        <header>
            <h1>Header</h1>
            {/* <img src={WaveOne} className="wave-one"/> */}
            {/* <img src={WaveTwo} className="wave-two"/> */}
            <svg width="1440" height="349" viewBox="0 0 1440 349" fill="none" xmlns="http://www.w3.org/2000/svg" className="wave-one">
                <g filter="url(#filter0_i_705_1597)">
                    <path d="M0 349V55.723C28.6822 37.9142 126.392 1.84192 287.772 0.023148C489.497 -2.25032 857.048 163.713 1056.49 157.461C1216.05 152.459 1378.65 87.5515 1440 55.723V349H0Z" fill="url(#paint0_linear_705_1597)"/>
                </g>
                <defs>
                    <filter id="filter0_i_705_1597" x="0" y="0" width="1440" height="353" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_705_1597"/>
                    </filter>
                    <linearGradient id="paint0_linear_705_1597" x1="720" y1="0" x2="720" y2="349" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#379A5E"/>
                        <stop offset="1" stop-color="#7A42C2"/>
                    </linearGradient>
                </defs>
            </svg>
            <svg width="1440" height="316" viewBox="0 0 1440 316" fill="none" xmlns="http://www.w3.org/2000/svg" className="wave-two">
                <g filter="url(#filter0_i_705_1598)">
                    <path d="M0 316V59.5742C270.428 26.6069 434.419 123.54 627.94 110.808C869.842 94.8924 968.113 -14.3357 1168.37 1.57946C1328.57 14.3116 1432.77 135.249 1440 110.808V316H0Z" fill="url(#paint0_linear_705_1598)"/>
                </g>
                <defs>
                    <filter id="filter0_i_705_1598" x="0" y="0" width="1440" height="320" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_705_1598"/>
                    </filter>
                    <linearGradient id="paint0_linear_705_1598" x1="720" y1="12.9304" x2="720" y2="316" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#38761D"/>
                        <stop offset="0.795" stop-color="#0C343D"/>
                    </linearGradient>
                </defs>
            </svg>


            <img src={WaveThree} className="wave-three"/>
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