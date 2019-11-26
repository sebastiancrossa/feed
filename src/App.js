// Libraries
import React, { useState, createContext, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Component Imports
import Feed from "./pages/Feed";

export const AppContext = createContext(null);

function App() {
  const users = [
    {
      name: "Sebastian",
      followers: ["Daniel", "Jonathan"]
    },
    {
      name: "Daniel",
      followers: ["Jonathan"]
    },
    {
      name: "Jonathan",
      followers: ["Sebastian"]
    }
  ];

  const [userList, setUserList] = useState(null);
  const [selectedUser, setSelectedUser] = useState("Sebastian");

  useEffect(() => {
    setUserList(users);
  }, []);

  return (
    <AppContext.Provider
      value={{ selectedUser, setSelectedUser, userList, setUserList }}
    >
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Feed} />

          <Route component={() => <h1>404</h1>} />
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
