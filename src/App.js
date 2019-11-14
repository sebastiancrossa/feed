// Libraries
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Component Imports
import Feed from "./pages/Feed";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Feed} />

        <Route component={() => <h1>404</h1>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
