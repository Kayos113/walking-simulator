import {useState} from "react";
import './App.css';
import "./components/css/control.css";
import Character from "./components/Character";

function App() {

  const [directionFacing, setDirectionFacing] = useState("dm");
  const [walking, setWalking] = useState(true);
  const controlClicked = (event) => {
    let val = event.target.value;
    if(val==="toggle-walk") {
      setWalking(!walking);
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
      <div className="control-panel">
        <div className="control-row">
          <button onClick={controlClicked} value="northwest">↖</button>
          <button onClick={controlClicked} value="north">↑</button>
          <button onClick={controlClicked} value="northeast">↗</button>
        </div>
        <div className="control-row">
          <button onClick={controlClicked} value="west">←</button>
          <button onClick={controlClicked} value="toggle-walk">⦿</button>
          <button onClick={controlClicked} value="east">→</button>
        </div>
        <div className="control-row">
          <button onClick={controlClicked} value="southwest">↙</button>
          <button onClick={controlClicked} value="south">↓</button>
          <button onClick={controlClicked} value="southeast">↘</button>
        </div>
      </div>
    </div>
  );
}

// ↑ ↓ → ← ↙ ↘ ↗ ↖ ⦿ ●
export default App;
