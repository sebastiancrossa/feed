// Libraries
import React, { useContext } from "react";
import { AppContext } from "../App";
import useInputState from "../hooks/useInputState";

// Component imports
import Input from "../layout/components/Input";
import { Navbar } from "../layout/components/Navbar";
import { Header, InputCard, SearchButton } from "./users.style";
import { UserList } from "../containers/Feed/UserList";

const Users = () => {
  const [buscar, updateBuscar, resetBuscar] = useInputState("");

  const AppState = useContext(AppContext);

  return (
    <div>
      <Navbar />

      <div style={{ margin: "0 auto 2rem auto" }}>
        <Header>Search for other users</Header>
        <InputCard width={`${75}%`}>
          <Input
            type="text"
            value={buscar}
            onChange={updateBuscar}
            width={`${80}%`}
            placeholder="Buscar por nombre"
          />
          <SearchButton
            onClick={() => {
              AppState.setQuery(buscar);
              resetBuscar();
            }}
          >
            BUSCAR
          </SearchButton>
        </InputCard>
      </div>
      <UserList />
    </div>
  );
};

export default Users;
