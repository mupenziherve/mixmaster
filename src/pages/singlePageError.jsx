import { useRouteError } from "react-router-dom";

const singlePageError = () => {
    const error = useRouteError ();
  return <div>singlePageError</div>;
};
export default singlePageError;
