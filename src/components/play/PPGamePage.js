import "../../App.css";

import { useEffect, useReducer, useState, useMemo, useCallback } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { useNavigate } from "react-router-dom";

import { DataStore } from "@aws-amplify/datastore";
import { GameResult } from "../../models";
import { Game } from "../../models";

function PPGamePage({ user, isAuthenticated, currentGame }) {
  
  const navigate = useNavigate();
  useEffect(() => {
    //fetchGame();
    isAuthenticated !== true && navigate("/");
  });

  // const chess = useMemo(() => new Chess(), [])
  const [chess, setChess] = useState("")
  const [fen, setFen] = useState("");
  const [over, setOver] = useState("");
  const [turn, setTurn] = useState("");
  const [whoAmI, setWhoAmI] = useState("");

  const pieces = [
    "wp",
    "wn",
    "wb",
    "wr",
    "wq",
    "wk",
    "bp",
    "bn",
    "bb",
    "br",
    "bq",
    "bk",
  ];

  const customPieces = useMemo(() => {
    const pieceComponents = {};
    pieces.forEach((piece) => {
      pieceComponents[piece] = ({ squareWidth }) => (
        <div
          style={{
            width: squareWidth,
            height: squareWidth,
            backgroundImage: `../../assets(/${piece}.png)`,
            backgroundSize: "100%",
          }}
        />
      );
    });
    return pieceComponents;
  }, []);

  async function saveGame(newFen, newTurn) {
    console.log("saving game");
    console.log(newFen,newTurn);
    const model = await DataStore.query(Game, currentGame.id)
    await DataStore.save(
      Game.copyOf(model, (item) => {
        // Update the values on {item} variable to update DataStore entry
        item.board = newFen;
        item.turn = newTurn;
      })
    );
    
    
    fetchGame();
  }

  const makeAMove = useCallback(
    (move) => {
      try {
        
    console.log("making a move");
        const result = chess.move(move); // update Chess instance
        saveGame(chess.fen(),chess.turn());
        // setFen(chess.fen()); // update fen state to trigger a re-render
        // setTurn(chess.turn());
        // console.log("over, checkmate", chess.isGameOver(), chess.isCheckmate());

        // if (chess.isGameOver()) {
        //   // check if move led to "game over"
        //   if (chess.isCheckmate()) {
        //     // if reason for game over is a checkmate
        //     // Set message to checkmate.
        //     setOver(
        //       `Checkmate! ${chess.turn() === "w" ? "black" : "white"} wins!`
        //     );
        //     // The winner is determined by checking which side made the last move
        //   } else if (chess.isDraw()) {
        //     // if it is a draw
        //     setOver("Draw"); // set message to "Draw"
        //   } else {
        //     setOver("Game over");
        //   }
        // }

        return result;
      } catch (e) {
        console.log(e);
        return null;
      } // null if the move was illegal, the move object if the move was legal
    },
    [chess]
  );

  function onDrop(sourceSquare, targetSquare) {
    console.log("making a turn with ",whoAmI);
    if( turn === whoAmI ) {
      
      console.log("really making a turn with ",whoAmI);
      const moveData = {
        from: sourceSquare,
        to: targetSquare,
        color: turn,
        //promotion: "q",
      };

      
      const move = makeAMove(moveData);

      // illegal move
      if (move === null) return false;

      return true;
    }
    else
    {
      return false;
    }
  }

  async function fetchGame() {
    console.log("Fetch Game");
    try {
      const model = await DataStore.query(Game, currentGame);
      console.log(model);
      setFen(model.board);
      setTurn(model.turn);
      setChess(new Chess(model.board));
      
      if( model.opponentName === user ) {
        setWhoAmI(model.opponentColor === "w" ? "w" : "b");
      }
      else {
        setWhoAmI(model.hostColor === "w" ? "w" : "b");
      }
      console.log("whoAmI", whoAmI);
      console.log("turn", turn)
    } catch (err) {
      console.log("error fetching game" + err);
    }
  }

  return (
    <div className="boardPage">
      <div className="board">
        <Chessboard
          id="styledBoard"
          boardOrientation={whoAmI === "w" ? "white" : "black"}
          position={fen}
          onPieceDrop={onDrop}
          customDarkSquareStyle={{ backgroundColor: "#639bb5" }}
          customLightSquareStyle={{ backgroundColor: "#e3dbcf" }}
          customPieces={customPieces}
          customBoardStyle={{
            borderRadius: "4px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
          }}
        />
      </div>
    </div>
  );
}

export default PPGamePage;
