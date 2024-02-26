export default function CV({width, height}) {
    console.log("width & height of header", width, height);
    const originalPath = "M0 349V55.723C28.6822 37.9142 126.392 1.84192 287.772 0.023148C489.497 -2.25032 857.048 163.713 1056.49 157.461C1216.05 152.459 1378.65 87.5515 1440 55.723V349H0Z";
    let halfHeight = height/2;
    console.log(halfHeight);
    let newPath = "M0."+{halfHeight}+"V55.723 C1216.05 152.459 1378.65 87.5515 "+{halfHeight}+" 55.723 V"+{halfHeight}+"H0Z";

    return (
        <svg width="100%" height="349" viewBox={"0 0 1440 349"} fill="none" xmlns="http://www.w3.org/2000/svg" className="wave">
            <g filter="url(#filter0_i_705_1597)">
                <path d={newPath} fill="url(#paint0_linear_705_1597)"/>
            </g>
            <defs>
                <filter id="filter0_i_705_1597" x="0" y="0" width="100%" height="353" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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