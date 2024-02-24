// @ts-nocheck
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import Root from './routes/root';
import Index from "./routes/index";
import Connect from './routes/connect';
import CV from "./routes/cv";
import ErrorPage from './error-page';
import "./index.css";

/* Easter egg ideas:
- a cat appears on the screen every 10min when no interaction occurs
- the sunsets starts moving
*/

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
                path: "connect", 
                element: <Connect />  
            },
            { 
                path: "cv", 
                element: <CV /> 
            },
        ]
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
