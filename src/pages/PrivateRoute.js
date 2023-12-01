import React from "react";
// import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth0();
  if (!user) {
    return <Link to="/" />;
  }
  return children;
};
export default PrivateRoute;
