import logo from './logo.svg';
import './App.css';
import Character from "./components/Character";

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Character />
      <div>
        <button>↖</button>
        <button>↑</button>
        <button>↗</button>
      </div>
      <div>
        <button>←</button>
        <button>⦿</button>
        <button>→</button>
      </div>
      <div>
        <button>↙</button>
        <button>↓</button>
        <button>↘</button>
      </div>
    </div>
  );
}

// ↑ ↓ → ← ↙ ↘ ↗ ↖ ⦿ ●
export default App;
