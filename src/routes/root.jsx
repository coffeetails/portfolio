
import { Outlet } from "react-router-dom";

export default function Root() {
    return (
        <>
        <div id="sidebar">
          <h1>sidebar</h1>
        </div>
        
        <div id="detail">
            <Outlet />
        </div>
      </>
    );
  }