
import "./css/character.css";
import character from "./images/character/Spritesheet Walk.png"

function Character(props) {

let classes = "Character-sprite walking " + props.direction;

  return (
    <div className="Character-container ">
      <img
        src={character}
        alt="Character"
        className={classes}
        />
    </div>
  )
}

export default Character;
