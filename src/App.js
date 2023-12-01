import "./App.css";
import Board from "./components/Board/Board";
import { reducer } from "./reducer/reducer";
import { useReducer } from "react";
import { initGameState } from "./constants";
import AppContext from "./contexts/Context";
import Control from "./components/Control/Control";
import TakeBack from "./components/Control/bits/TakeBack";
import MovesList from "./components/Control/bits/MovesList";

import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import config from "./amplifyconfiguration.json";
Amplify.configure(config);

function App({ signOut, user }) {
  const [appState, dispatch] = useReducer(reducer, initGameState);

  const providerState = {
    appState,
    dispatch,
  };

  return (
    <AppContext.Provider value={providerState}>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
      <div className="App">
        <Board />
        <Control>
          <MovesList />
          <TakeBack />
        </Control>
      </div>
    </AppContext.Provider>
  );
}

export default withAuthenticator(App);
