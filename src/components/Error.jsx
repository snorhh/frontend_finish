import { useRouteError } from "react-router-dom";
//https://github.com/juhahinkula/reactrouter/blob/main/src/components/Error.jsx
export default function Error() {
  const error = useRouteError();

  return (
    <div>
      <h1>Page not found</h1>
      <p>{error.data}</p>
    </div>
  );
}