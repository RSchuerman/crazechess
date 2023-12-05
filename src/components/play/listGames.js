import "./gameList.css";
import "../../App.css";
import { useEffect, useReducer, useState, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { DataStore } from "@aws-amplify/datastore";
import { Game, GameResult } from "../../models";

function ListGames({ user, isAuthenticated, changeActiveGame }) {
  const navigate = useNavigate();

  useEffect(() => {
    isAuthenticated !== true && navigate("/");
  }, []);

  const [color] = useState(Math.random() % 2 === 0 ? "w" : "b");
  const [opcolor] = useState(color === "w" ? "b" : "w");
  // const [gameToJoin, setGameToJoin] = useState("");
  const [games, setGames] = useState([]);
  const [availableGames, setAvailableGames] = useState([]);
  const [gameAmount, setGameAmount] = useState(availableGames.length);
  const [opName, setOpName] = useState();

  useEffect(() => {
    const subscription = DataStore.observe(Game).subscribe((msg) => {
      console.log("observe received message");
      console.log(msg.model, msg.opType, msg.element);
      console.log("load fetch games");
      fetchGames();
    });
    fetchGames();
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    console.log("list games");
    listAvailableGames();
  }, [gameAmount]);

  async function fetchGames() {
    console.log("Fetch Games");
    try {
      const models = await DataStore.query(Game, (g) => g.result.eq(null));
      console.log("Games are");
      console.log(models);
      setGames(models);
      setGameAmount(models.length);
    } catch (err) {
      console.log("error fetching games: ");
      console.log(err);
    }
  }

  async function createPublicGame() {
    //create a new game using the data model, then route to the gamepage with the gameid
    //when game is created, color is white
    const gameDetails = {
      'hostID': user,
      'board': "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      'turn': "w",
      'hostName': user,
      'hostColor': color,
      'opponentColor': opcolor,
    };
    const hostedGame = await DataStore.save(new Game(gameDetails));
    console.log(hostedGame);
    changeActiveGame(hostedGame);
    navigate("/playOnline");
  }

  async function createPrivateGame() {
    //create a new game using the data model, then route to the gamepage with the gameid
    //when game is created, color is white
    const gameDetails = {
      'hostID': user,
      'board': "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      'turn': "w",
      'hostName': user,
      'hostColor': color,
      'opponentColor': opcolor,
      'opponentName': opName,
      'opponentID': opName,
    };
    const hostedGame = await DataStore.save(new Game(gameDetails));
    console.log(hostedGame);
    changeActiveGame(hostedGame);
    navigate("/playOnline");
  }

  async function joinPublicGame(gameToJoin) {
    //prompt for a game id then route to the gamepage with the gameid
    //when game is joined, color is black
    const model = await DataStore.query(Game, gameToJoin);
    await DataStore.save(
      Game.copyOf(model, (item) => {
        // Update the values on {item} variable to update DataStore entry
        item.opponentID = user;
        item.opponentName = user;
      })
    );
    changeActiveGame(model);
    navigate("/playOnline");
  }

  async function joinPrivateGame(gameToJoin) {
    //prompt for a game id then route to the gamepage with the gameid
    //when game is joined, color is black
    const model = await DataStore.query(Game, gameToJoin);
    changeActiveGame(model);
    navigate("/playOnline");
  }

  async function joinHostGame(gameToJoin) {
    //prompt for a game id then route to the gamepage with the gameid
    //when game is joined, color is black
    const model = await DataStore.query(Game, gameToJoin);
    changeActiveGame(model);
    navigate("/playOnline");
  }

  async function deleteGame(gameToDelete) {
    const modelToDelete = await DataStore.query(Game, gameToDelete);
    DataStore.delete(modelToDelete);
  }

  function listAvailableGames() {
    setAvailableGames(
      games.map((game) => {
        const privateGame = game.opponentName === user;
        console.log(user, privateGame);
        const publicGame = (game.opponentName === null && game.hostName !== user);
        const hostGame = (game.hostName === user);
        if(game.hostName === user || game.opponentName === user || game.opponentName === null) {
          return (
            <li key={game.id}>
              <b>Players: </b>
              {game.hostName}
              {", "}
              {game.opponentName === null ? "" : game.opponentName}
              {privateGame ? (
                <button className="clkbtn2" onClick={() => joinPrivateGame(game)}>
                  JOIN
                </button>
              ) : (
                <></>
              )}
              {publicGame ? (
                <button className="clkbtn2" onClick={() => joinPublicGame(game)}>
                  JOIN
                </button>
              ) : (
                <></>
              )}
              {hostGame ? (
                <button className="clkbtn2" onClick={() => joinHostGame(game)}>
                  RESUME
                </button>
              ) : (
                <></>
              )}
              {hostGame ? (
                <button className="clkbtn2" onClick={() => deleteGame(game)}>
                  DELETE
                </button>
              ) : (
                <></>
              )}
            </li>
          );
        }
      })
    );
  }

  return (
    <div>
      <button className="clkbtn2" onClick={createPublicGame}>
        Create Public Game
      </button>
      <button className="clkbtn2" onClick={createPrivateGame}>
        Create Private Game
      </button>
      <input
        type="text"
        className="name ele"
        placeholder="Opponent Username"
        onChange={(evt) => {
          setOpName(evt.target.value.toLowerCase());
        }}
      />
      <h2 className="styleH2">JOIN a Game (Available Games: {gameAmount})</h2>
      <ul className="styleUL">{availableGames}</ul>
    </div>
  );
}

export default ListGames;
