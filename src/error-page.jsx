import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div>
            <h1>Oops!</h1>
            <img src="/confused.gif"/>
            <p>Sorry, an unexpected error has occurred.</p>
            <p><i>{error.statusText || error.message}</i></p>
            <Link to={`/`}>Go back home</Link>
        </div>
    );
}