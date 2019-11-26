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
      friends: ["Daniel"]
    },
    {
      name: "Daniel",
      friends: ["Sebastian", "Jonathan"]
    },
    {
      name: "Jonathan",
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
  const [selectedUser, setSelectedUser] = useState("Sebastian");

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
          <Route exact path="/" component={Feed} />

          <Route component={() => <h1>404</h1>} />
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
