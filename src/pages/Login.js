// Libraries
import React from "react";
import { Link } from "react-router-dom";

// Component Imports
import LoginInputSection from "../containers/Login/InputSection";
import CreateInputSeccion from "../containers/Login/CreateAccountInputSection";

const Login = () => {
  return (
    <div>
      <LoginInputSection />
      <CreateInputSeccion />
    </div>
  );
};

export default Login;
