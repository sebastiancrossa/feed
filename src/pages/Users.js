// Libraries
import React, { useState } from "react";
import useInputState from "../hooks/useInputState";

// Component imports
import Input from "../layout/components/Input";
import { Navbar } from "../layout/components/Navbar";
import { Header, InputCard, SearchButton } from "./users.style";
import { UserList } from "../containers/Feed/UserList";

const Users = () => {
  const [buscar, updateBuscar, resetBuscar] = useInputState("");

  return (
    <div>
      <Navbar />

      <div style={{ margin: "0 auto 2rem auto" }}>
        <Header>Search for other users</Header>
        <InputCard>
          <Input
            type="text"
            value={buscar}
            onChange={updateBuscar}
            placeholder="Buscar..."
          />
          <SearchButton>BUSCAR</SearchButton>
        </InputCard>
      </div>
      <UserList />
    </div>
  );
};

export default Users;
