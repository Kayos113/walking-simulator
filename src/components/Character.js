import react, {useState} from "react";
import "./css/character.css";
import character from "./images/character/Spritesheet Walk.png"

function Character(props) {



  return (
    <div className="Character-container ">
      <img
        src={character}
        alt="Character"
        className="Character-sprite walking face_right"

        />
    </div>
  )
}

export default Character;
