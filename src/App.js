import {useState} from "react";
import './App.css';
import "./components/css/control.css";
import Character from "./components/Character";

function App() {

  const [directionFacing, setDirectionFacing] = useState("dm");
  const controlClicked = (event) => {
    setDirectionFacing(event.target.value);

  }

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Character
      direction={directionFacing}/>
      <div className="control-panel">
        <div className="control-row">
          <button onClick={controlClicked} value="ul">↖</button>
          <button onClick={controlClicked} value="um">↑</button>
          <button onClick={controlClicked} value="ur">↗</button>
        </div>
        <div className="control-row">
          <button onClick={controlClicked} value="ml">←</button>
          <button onClick={controlClicked} value="mm">⦿</button>
          <button onClick={controlClicked} value="mr">→</button>
        </div>
        <div className="control-row">
          <button onClick={controlClicked} value="dl">↙</button>
          <button onClick={controlClicked} value="dm">↓</button>
          <button onClick={controlClicked} value="dr">↘</button>
        </div>
      </div>
    </div>
  );
}

// ↑ ↓ → ← ↙ ↘ ↗ ↖ ⦿ ●
export default App;
