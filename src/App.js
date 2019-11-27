// Libraries
import React, { useState, createContext, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "./layout/ProtectedRoute";

// Page Imports
import Feed from "./pages/Feed";
import Login from "./pages/Login";
import Users from "./pages/Users";

export const AppContext = createContext(null);

function App() {
  const users = [
    {
      name: "Sebastian",
      password: "123",
      friends: ["Daniel"]
    },
    {
      name: "Daniel",
      password: "jericho",
      friends: ["Sebastian", "Jonathan"]
    },
    {
      name: "Jonathan",
      password: "google",
      friends: ["Daniel"]
    }
  ];

  const posts = [
    {
      name: "Sebastian",
      text: "Ya casi acaba el semestre :)"
    }
  ];

  const [userList, setUserList] = useState(null);
  const [postList, setPostList] = useState(null);
  const [selectedUser, setSelectedUser] = useState("");

  useEffect(() => {
    setUserList(users);
    setPostList(posts);
  }, []);

  return (
    <AppContext.Provider
      value={{
        selectedUser,
        setSelectedUser,
        userList,
        setUserList,
        postList,
        setPostList
      }}
    >
      <BrowserRouter>
        <Switch>
          <ProtectedRoute exact path="/" component={Feed} />
          <ProtectedRoute exact path="/search" component={Users} />
          <Route exact path="/login" component={Login} />

          <Route component={() => <h1>404</h1>} />
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
