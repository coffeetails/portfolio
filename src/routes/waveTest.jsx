export default function waveTest({width, height}) {
    console.log("width & height of header", width, height);
    const originalPath = "M0 349V55.723C28.6822 37.9142 126.392 1.84192 287.772 0.023148C489.497 -2.25032 857.048 163.713 1056.49 157.461C1216.05 152.459 1378.65 87.5515 1440 55.723V349H0Z";
    const halfWidth = width/2;
    const halfHeight = height/2;
    const quarterWidth = width/4;
    const quarterHeight = height/4

    let newPath = "M0 " + height +
        "V" + halfHeight + 
        "Q " + quarterWidth + " " + quarterHeight + " " + halfWidth + " " + halfHeight +
        "T " + width + " " + halfHeight +
        "V" + height + "H0Z";
    let newFullPath = ( <path d={newPath} fill="url(#paint0_linear_705_1597)"/> );

    let viewBoxValue = "0 0 " + {width} + " " + {height};

    return (
        <svg width={width} height={height} viewBox={viewBoxValue} fill="none" xmlns="http://www.w3.org/2000/svg" className="wave">
            <g filter="url(#filter0_i_705_1597)">
                {newFullPath}
            </g>
            <defs>
                <filter id="filter0_i_705_1597" x="0" y="0" width={width} height={height} filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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
    );
}