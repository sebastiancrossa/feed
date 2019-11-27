// Libraries
import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../../App";

// Styles
import { UserCard } from "../UserCard";
import { List } from "./userList.style";

export const UserList = () => {
  const [data, setData] = useState();
  const AppState = useContext(AppContext);

  const fetchData = () => {
    let filteredUserData;

    if (AppState.userList !== null) {
      filteredUserData = AppState.userList.filter(
        user => user.name !== AppState.selectedUser
      );
    }

    setData(filteredUserData);
  };

  const fetchQuery = () => {
    if (AppState.query !== "") {
      DFSrec();
    }
  };

  useEffect(() => {
    fetchData();
    fetchQuery();
  }, [AppState]);

  /*
    Nos fuimos por el algoritmo DF ya que este funciona mejor que BFS cuando se está buscando a traves de conexiones mas largas, ya que busca primero por todas las conexiones largas antes de ir a la siguiente conexion. DFS tambien nos ayuda a calcular todos los posibles caminos a un destino, y en nuestro caso, esto significa revisar todos los amigos existentes antes de determinar cuales se tienen en común
  */
  const DFSrec = () => {
    let filteredData;

    if (AppState) {
      let res = [];
      let visited = {};
      let adjacencyList = AppState.adjacencyList;

      // Wheere user is our vertex
      function helper(user) {
        if (!user) return null; // Base case where user does not exist

        visited[user] = true;
        res.push(user);

        if (user == AppState.query) {
          filteredData = AppState.userList.filter(
            listUser => listUser.name === user
          );
          setData(filteredData);
        } else {
          // Loop through all of the current vertex neighbours
          adjacencyList[user].forEach(neighbour => {
            if (!visited[neighbour]) {
              return helper(neighbour);
            }
          });
        }
      }

      helper(AppState.selectedUser);
      return res;
    }
  };

  return (
    <List>
      {data !== undefined ? (
        data.map(user => <UserCard name={user.name} friends={user.friends} />)
      ) : (
        <h1>Loading...</h1>
      )}
    </List>
  );
};
