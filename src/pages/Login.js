// Libraries
import React from "react";
import { Link } from "react-router-dom";

// Component Imports
import LoginInputSection from "../containers/Login/InputSection";
import CreateInputSeccion from "../containers/Login/CreateAccountInputSection";

// Styles
import { Title, Subtitle, Grid } from "./login.style";

const Login = () => {
  return (
    <>
      <Title>Feed</Title>
      <Subtitle>The social network of all social networks</Subtitle>
      <Grid>
        <LoginInputSection />
        <CreateInputSeccion />
      </Grid>
    </>
  );
};

export default Login;
