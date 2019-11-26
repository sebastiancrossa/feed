// Libraries
import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AppContext } from "../App";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const AppState = useContext(AppContext);

  return (
    <Route
      {...rest}
      render={props =>
        AppState !== null && AppState.selectedUser !== "" ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};
