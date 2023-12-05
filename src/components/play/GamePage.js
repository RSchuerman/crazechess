import "../../App.css";

import { useState, useMemo, useCallback, useEffect } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";

function PEGamePage(props) {
  const chess = useMemo(() => new Chess(), []); // <- 1
  const [fen, setFen] = useState(chess.fen()); // <- 2
  const [turn, setTurn] = useState("w");
  const [whoAmI, setWhoAmI] = useState("w");
  const [over, setOver] = useState("");

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

  const makeAMove = useCallback(
    (move) => {
      try {
        const result = chess.move(move); // update Chess instance
        setFen(chess.fen()); // update fen state to trigger a re-render
        setTurn(chess.turn());

        console.log("over, checkmate", chess.isGameOver(), chess.isCheckmate());

        if (chess.isGameOver()) {
          // check if move led to "game over"
          if (chess.isCheckmate()) {
            // if reason for game over is a checkmate
            // Set message to checkmate.
            setOver(
              `Checkmate! ${chess.turn() === "w" ? "black" : "white"} wins!`
            );
            // The winner is determined by checking which side made the last move
          } else if (chess.isDraw()) {
            // if it is a draw
            setOver("Draw"); // set message to "Draw"
          } else {
            setOver("Game over");
          }
        }

        return result;
      } catch (e) {
        return null;
      } // null if the move was illegal, the move object if the move was legal
    },
    [chess]
  );

  function onDrop(sourceSquare, targetSquare) {
    const moveData = {
      from: sourceSquare,
      to: targetSquare,
      color: chess.turn(),
      promotion: "q",
    };

    const move = makeAMove(moveData);

    // illegal move
    if (move === null) return false;

    return true;
  }

  return (
    <div >
      <p className="gameDialogue">{over ? over : ("Turn:", turn === 'w' ? "White's Turn": "Black's Turn") }</p>
      <div className="boardPage">
        <Chessboard
          id="styledBoard"
          boardOrientation={whoAmI === "w" ? "white" : "black"}
          position={fen}
          onPieceDrop={onDrop}
          autoPromoteToQueen={true}
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

export default PEGamePage;
