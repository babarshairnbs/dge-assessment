import React from "react";

function GlobalError(props) {
  // You can access the error from props if needed
  const { error, resetErrorBoundary } = props;
  return <div>Something went wrong: {error?.message}</div>;
}

export default GlobalError;
