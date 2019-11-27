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
      friends: ["Daniel"],
      requests: ["Jonathan"]
    },
    {
      name: "Daniel",
      password: "jericho",
      friends: ["Sebastian", "Jonathan"],
      requests: []
    },
    {
      name: "Jonathan",
      password: "google",
      friends: ["Daniel"],
      requests: []
    }
  ];

  const adjacencyListVar = {
    Sebastian: ["Daniel"],
    Daniel: ["Sebastian", "Jonathan"],
    Jonathan: ["Daniel"]
  };

  const posts = [
    {
      name: "Sebastian",
      text: "Ya casi acaba el semestre :)"
    }
  ];

  const [userList, setUserList] = useState(null);
  const [postList, setPostList] = useState(null);
  const [adjacencyList, setAdjacencyList] = useState(null);
  const [selectedUser, setSelectedUser] = useState("");

  const [query, setQuery] = useState("");

  useEffect(() => {
    setUserList(users);
    setPostList(posts);
    setAdjacencyList(adjacencyListVar);
  }, []);

  return (
    <AppContext.Provider
      value={{
        selectedUser,
        setSelectedUser,
        userList,
        setUserList,
        postList,
        setPostList,
        adjacencyList,
        setAdjacencyList,
        query,
        setQuery
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
