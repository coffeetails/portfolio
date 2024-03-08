import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="error-page">
            <h1>Oops!</h1>
            <img src="/confused.gif"/>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>{error.status} {error.statusText || error.message}</p>
            <Link to={`/`}>Go back home</Link>
        </div>
    );
}