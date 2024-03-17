import React from "react";
import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error: any = useRouteError();
  console.log(error);
  return (
    <div className="flex justify-center items-center">
      <h1>Oops!</h1>
      <br />
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error?.message}</i>
      </p>
    </div>
  );
};

export default NotFound;
