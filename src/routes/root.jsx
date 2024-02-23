import { Outlet, Link } from "react-router-dom";
// <Outlet /> is where the content will show

export default function Root() {
    return (
        <>
        <header>
          <h1>Header</h1>
        </header>
        
        <main>
            <nav>
                <ul>
                    <li><Link to={`/`}>Hem</Link></li>
                    <li><Link to={`/cv`}>CV</Link></li>
                    <li><Link to={`/connect`}>Kontakt</Link></li>
                    <li><Link to={`/nopee`}>Nope</Link></li>
                </ul>
            </nav>
            <Outlet />
        </main>
      </>
    );
  }