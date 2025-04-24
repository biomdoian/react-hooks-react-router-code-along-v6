import NavBar from "../components/NavBar";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Whoops! Something went wrong!</h1>
        {error && (
          <>
            <p>Status: {error.statusText || error.message}</p>
            {error.data && <pre>{JSON.stringify(error.data, null, 2)}</pre>}
          </>
        )}
      </main>
    </>
  );
}

export default ErrorPage;