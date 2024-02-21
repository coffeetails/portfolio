// @ts-nocheck
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import Root, {  loader as rootLoader, action as rootAction }  from './routes/root';
import Contact, { loader as contactLoader, action as contactAction, } from './routes/contact';
import EditContact, { action as editAction, } from "./routes/edit";
import { action as destroyAction } from "./routes/destroy";
import ErrorPage from './error-page';
import Index from "./routes/index";
import "./index.css";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />, 
        loader: rootLoader,
        action: rootAction,
        children: [
            {
                errorElement: <ErrorPage />,
                children: [
                    { 
                        index: true, 
                        element: <Index /> },
                    {
                        path: "contacts/:contactId",
                        element: <Contact />,
                        loader: contactLoader,
                        action: contactAction,
                    },
                    {
                        path: "contacts/:contactId/edit",
                        element: <EditContact />,
                        loader: contactLoader,
                        action: editAction,
                        // You might note we reused the contactLoader for this route. This is only because we're being lazy in the tutorial. There is no reason to attempt to share loaders among routes, they usually have their own.
                    },
                    {
                        path: "contacts/:contactId/destroy",
                        action: destroyAction,
                    },
                ]
            }
        ]
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
