import Board from "../Board/Board";
import Control from "../Control/Control";
import TakeBack from "../Control/bits/TakeBack";
import MovesList from "../Control/bits/MovesList";

function HomePage() {
  return (
    <div className="App">
      <Board />
      <Control>
        <MovesList />
        <TakeBack />
      </Control>
    </div>
  );
}

export default HomePage;
