// @ts-nocheck
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import Root from './routes/root';
import Index from "./routes/index";
import Contact from './routes/contact';
import EditContact from "./routes/edit";
import ErrorPage from './error-page';
// import "./index.css";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        // errorElement: <ErrorPage />, 
        // children: [
        //     {
                errorElement: <ErrorPage />,
                children: [
                    { 
                        index: true, 
                        element: <Index /> 
                    },
                    { 
                        path: "contact", 
                        element: <Contact />  
                    },
                    { 
                        path: "contact/edit", 
                        element: <EditContact /> 
                    },
                ]
        //     }
        // ]
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
