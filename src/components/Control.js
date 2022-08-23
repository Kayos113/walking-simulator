import "./css/control.css";

function Control(props) {
  return (
    <div className="control-panel">
      <div className="control-row">
        <button onClick={props.controlClicked} value="northwest">↖</button>
        <button onClick={props.controlClicked} value="north">↑</button>
        <button onClick={props.controlClicked} value="northeast">↗</button>
      </div>
      <div className="control-row">
        <button onClick={props.controlClicked} value="west">←</button>
        <button onClick={props.controlClicked} value="toggle-walk">{props.startStop}</button>
        <button onClick={props.controlClicked} value="east">→</button>
      </div>
      <div className="control-row">
        <button onClick={props.controlClicked} value="southwest">↙</button>
        <button onClick={props.controlClicked} value="south">↓</button>
        <button onClick={props.controlClicked} value="southeast">↘</button>
      </div>
    </div>
  );
}

export default Control;
