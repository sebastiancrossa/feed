// Libraries
import React from "react";
import { Link } from "react-router-dom";

// Component Imports
import LoginInputSection from "../containers/Login/InputSection";
import CreateInputSeccion from "../containers/Login/CreateAccountInputSection";

// Styles
import { Grid } from "./login.style";

const Login = () => {
  return (
    <Grid>
      <LoginInputSection />
      <CreateInputSeccion />
    </Grid>
  );
};

export default Login;
