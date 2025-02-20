// @ts-nocheck
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import Root from './routes/root';
import Index from "./routes/index";
import Connect from './routes/connect';
import CV from "./routes/cv";
import Projects from "./routes/projects";
import Photography from "./routes/photography";
import Games from "./routes/games";
import ErrorPage from './error-page';
import "./index.css";
import "./fontstyles.css";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            { 
                index: true, 
                element: <Index /> 
            },
            { 
                path: "cv", 
                element: <CV /> 
            },
            { 
                path: "projekt", 
                element: <Projects /> 
            },
            {
                path: "foton",
                element: <Photography />
            },
            {
                path: "games",
                element: <Games />
            },
            { 
                path: "kontakt", 
                element: <Connect />  
            }
        ]
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
