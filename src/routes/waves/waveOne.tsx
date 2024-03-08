
export default function waveOne({width, height, viewBoxValue}) {
    let path = "M0 " + height +
        "V" + (height*0.3) + 
        "Q " + (width*0.2) + " " + (height*-0.01) + " " + (width*0.5) + " " + (height*0.4) +
        "T " + width + " " + (height*0.3) +
        "V" + height + "H0Z";

        
    return (
        <svg width={width} height={height} viewBox={viewBoxValue} fill="none" xmlns="http://www.w3.org/2000/svg" className="wave">
            <g filter="url(#filter0_i_705_1597)">
                <path d={path} fill="url(#paint0_linear_705_1597)"/>
            </g>
            <defs>
                <filter id="filter0_i_705_1597" x="0" y={height*0.16} width={width} height={height} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_705_1597"/>
                </filter>
                {/* <linearGradient id="paint0_linear_705_1597" x1="720" y1="0" x2="720" y2="349" gradientUnits="userSpaceOnUse"> */}
                <linearGradient id="paint0_linear_705_1597" x1={width*0.5} y1={height*0.2} x2={width*0.5} y2={height} gradientUnits="userSpaceOnUse">
                    <stop stopColor="#379A5E"/>
                    <stop offset="1" stopColor="#7A42C2"/>
                </linearGradient>
            </defs>
        </svg>
    );
}