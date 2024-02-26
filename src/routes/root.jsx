import { Outlet, Link } from "react-router-dom";
// <Outlet /> is where the content will show

import './root.css';
import WaveOne from '/wave1.svg';
import WaveTwo from '/wave2.svg';
import WaveThree from '/wave3.svg';

export default function Root() {
    console.log(WaveThree);

    return (
        <>
        <header>
            <h1>Header</h1>
            {/* <div className="wrapper-wave"> */}
                <object data={WaveOne} type="image/svg+xml"></object>
                <object data={WaveTwo} type="image/svg+xml"></object>
                <object data={WaveThree} type="image/svg+xml"></object>

            {/* </div> */}
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