
export default function waveThree({width, height, viewBoxValue}) {
    let path = "M0 " + height + 
    "V" + (height*0.6) + 
    "Q " + (width*0.15) + " " + (height*0.25) + " " + (width*0.25) + " " + (height*0.5) +
    "T " + (width*0.55) + " " + (height*0.75) +
    "Q " + (width*0.7) + " " + (height*0.7) + " " + (width*0.8) + " " + (height*0.55) +
    "T " + width + " " + (height*0.7) +
    "V" + height + "H0Z";

        
    return (
        <svg width={width} height={height} viewBox={viewBoxValue} fill="none" xmlns="http://www.w3.org/2000/svg" className="wave">
            <g filter="url(#filter0_i_705_1600)">
                <path d={path} fill="url(#paint0_linear_705_1600)"/>
            </g>
            <defs>
                <filter id="filter0_i_705_1600" x="0" y="0" width={width} height={height} filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_705_1600"/>
                </filter>
                <linearGradient id="paint0_linear_705_1600" x1={width*0.5} y1={height*0.3} x2={width*0.5} y2={height} gradientUnits="userSpaceOnUse">
                    <stop stop-color="#274E13"/>
                    <stop offset="0.97" stop-color="#0C343D"/>
                    <stop offset="1" stop-color="#1C1C1C"/>
                </linearGradient>
            </defs>
        </svg>
    );
}