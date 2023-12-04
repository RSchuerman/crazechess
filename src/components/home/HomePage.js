import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import logo from "../../assets/crazelogo.png";

import { useEffect, useReducer, useState, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { DataStore } from "@aws-amplify/datastore";
import { Game, GameResult } from "../../models";
// import { Chess } from "chess.js";

import GameList from '../gameList'

function HomePage({user, isAuthenticated, changeActiveGame }) {
  const navigate = useNavigate();
  // const chess = useMemo(() => new Chess(), []);
  // const [fen, setFen] = useState(chess.fen());
  const [color, setColor] = useState((Math.random() % 2) === 0 ? "w" : "b");
  const [opcolor, setopColor] = useState(color === "w" ? "b" : "w");
  const [gameToJoin, setGameToJoin] = useState("");
  const [games, setGames] = useState([]); 


  useEffect(() => {
    const subscription = DataStore.observe(Game).subscribe((msg) => {
            console.log('observe received message');
            console.log(msg.model, msg.opType, msg.element);
            console.log('load fetch games');
            fetchGames();
          });
    fetchGames();
    return () => subscription.unsubscribe();
  },[])

  async function fetchGames() {
    console.log('Fetch Games');
    try {
        const models = await DataStore.query(Game, (g) =>
        g.result.eq(null));
        console.log("Games are");
        console.log(models);
        setGames(models);
    } catch (err) { console.log('error fetching games: '); console.log(err) }
  }

  async function createGame() {
    //create a new game using the data model, then route to the gamepage with the gameid
    //when game is created, color is white

    const hostedGame = await DataStore.save(
      new Game({
        "hostID": user,
        "board": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
        "turn": "w",
        "hostName": user,
        "hostColor": 'w',
        "opponentColor": 'b',
      })
    );
    console.log(hostedGame);
    changeActiveGame(hostedGame);
    navigate("/play");
  }

  async function joinGame(gameToJoin) {
    //prompt for a game id then route to the gamepage with the gameid
    //when game is joined, color is black
    const model = await DataStore.query(Game, gameToJoin)
    await DataStore.save(
      Game.copyOf(model, (item) => {
        // Update the values on {item} variable to update DataStore entry
        item.opponentID = user;
        item.opponentName = user;
      })
    );
    changeActiveGame(model);
    navigate("/play");
  }

  return (
    <Container>
      <Row className="px-4 my-5">
        <Col xs={4} sm={6}>
          <Image src={logo} fluid />
        </Col>
        <Col sm={6}>
          <h1 className="font-weight-light">Reed Chess</h1>
          {isAuthenticated === false && (
            <>
              <p>This is a chess game. Login to see more!</p>
              <Link to="/login">
                <button className="clkbtn">Login</button>
              </Link>
            </>
          )}
          {isAuthenticated !== false && (
            <>
              <p>This is a chess game. Create or join a game</p>
              <button className="clkbtn2" onClick={createGame}>
                Create Game
              </button>
              {/* <button className="clkbtn" onClick={joinGame}>
                Join Game
              </button>
              <input
                type="text"
                className="name ele"
                placeholder="Enter Game id"
                onChange={(evt) => setGameToJoin(evt.target.value)}
              />
              <Link to="/play">
                <button className="clkbtn">Play</button>
              </Link> */}
            </>
          )}
        </Col>
      </Row>
      <GameList games={games} onClick={joinGame}/>
    </Container>
  );
}

export default HomePage;
