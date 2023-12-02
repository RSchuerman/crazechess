import "../../App.css";

import { reducer } from "../../reducer/reducer";
import { useEffect, useReducer } from "react";
import { initGameState } from "../../constants";
import AppContext from "../../contexts/Context";
import Board from "../Board/Board";
import Control from "../Control/Control";
import TakeBack from "../Control/bits/TakeBack";
import MovesList from "../Control/bits/MovesList";
import { useNavigate } from "react-router-dom";

function GamePage(props) {
  const navigate = useNavigate();
  useEffect(() => {
    {
      props.isAuthenticated !== true && navigate("/");
    }
  }, []);

  const [appState, dispatch] = useReducer(reducer, initGameState);

  const providerState = {
    appState,
    dispatch,
  };
  return (
    <AppContext.Provider value={providerState}>
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

export default GamePage;
