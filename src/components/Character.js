import "./css/character.css";
import character from "./images/character/Spritesheet Walk.png";
import standingNorthWest from "./images/character/Standing/northwest.png";
import standingNorth from "./images/character/Standing/north.png";
import standingNorthEast from "./images/character/Standing/northeast.png";
import standingEast from "./images/character/Standing/east.png";
import standingWest from "./images/character/Standing/west.png";
import standingSouthWest from "./images/character/Standing/southwest.png";
import standingSouth from "./images/character/Standing/south.png";
import standingSouthEast from "./images/character/Standing/southeast.png";



function Character(props) {

  let spriteSheetClasses = props.walking ? "Character-sprite walking " + props.direction : "Character-sprite hidden " + props.direction;
  let standingImageClasses = props.walking ? "character-standing hidden " + props.direction : "character-standing " + props.direction;
  let standingImage;
  switch (props.direction) {
    case "northwest":
      standingImage = standingNorthWest;
      break;
    case "north":
      standingImage = standingNorth;
      break;
    case "northeast":
      standingImage = standingNorthEast;
      break;
    case "west":
      standingImage = standingWest;
      break;
    case "southwest":
      standingImage = standingSouthWest;
      break;
    case "south":
      standingImage = standingSouth;
      break;
    case "southeast":
      standingImage = standingSouthEast;
      break;
    case "east":
    default:
      standingImage = standingEast;
      break;
  }

  return ( <
    div className = "Character-container " >
    <img
    src = {character}
    alt = "Character"
    className = {spriteSheetClasses}
    />
    <img
    src = {standingImage}
    alt = "Character"
    className = {standingImageClasses}
    />
    </div>
  )
}

export default Character;
