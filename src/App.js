import {useState} from "react";
import './App.css';
import "./components/css/control.css";
import Character from "./components/Character";
import Control from "./components/Control";

function App() {

  const [directionFacing, setDirectionFacing] = useState("dm");
  const [walking, setWalking] = useState(true);
  const [startStop, setStartStop] = useState("■");
  const controlClicked = (event) => {
    let val = event.target.value;
    if(val==="toggle-walk") {
      setWalking(!walking);
      if(walking) { // check for the negate of walking as the setStartStop won't have finished updating by the time this statement checks it.
        setStartStop("►");
      } else {
        setStartStop("■");
      }
    } else {
      setDirectionFacing(event.target.value);
    }
  }

  return (
    <div className="App">
    <h1>CSS Walking Animation</h1>
      <Character
      direction={directionFacing}
      walking={walking}/>
      <Control
      startStop = {startStop}
      controlClicked = {controlClicked}/>
    </div>
  );
}

// ↑ ↓ → ← ↙ ↘ ↗ ↖ ⦿ ● ► ■
export default App;
