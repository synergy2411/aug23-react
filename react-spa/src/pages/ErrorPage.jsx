import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  let errorTitle = "Something went wrong!";
  let errorMessage = "Could not locate this page...";

  if (error) {
    errorTitle = error.status;
    errorMessage = error.data.message;
  }

  return (
    <div className="text-center">
      <h1>{errorTitle}</h1>
      <p>{errorMessage}</p>
    </div>
  );
}
