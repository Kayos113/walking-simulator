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

import bgImage from "./images/bg/grassy-bg.png";


function Character(props) {

  let spriteSheetClasses = props.walking ? "Character-sprite walking " + props.direction : "Character-sprite hidden " + props.direction;
  let standingImageClasses = props.walking ? "character-standing hidden " + props.direction : "character-standing " + props.direction;
  let bgImgOneClasses = "";
  let bgImgTwoClasses = "";
  let standingImage;
  switch (props.direction) {
    case "northwest":
      standingImage = standingNorthWest;
      getImgClasses("bg-down-right");
      break;
    case "north":
      standingImage = standingNorth;
      getImgClasses("bg-down")
      break;
    case "northeast":
      standingImage = standingNorthEast;
      getImgClasses("bg-down-left");
      break;
    case "west":
      standingImage = standingWest;
      getImgClasses("bg-right");
      break;
    case "southwest":
      standingImage = standingSouthWest;
      getImgClasses("bg-up-right");
      break;
    case "south":
      standingImage = standingSouth;
      getImgClasses("bg-up")
      break;
    case "southeast":
      standingImage = standingSouthEast;
      getImgClasses("bg-up-left");
            break;
    case "east":
      standingImage = standingEast;
      getImgClasses("bg-left");
      break;
    default:
      standingImage = standingSouth;
      getImgClasses("still");
      break;
  }

  function getImgClasses(direction) {
    if(!props.walking) {
      direction="";
    }
    bgImgOneClasses = "background-image bg-one " + direction;
    bgImgTwoClasses = "delay-visible background-image bg-two " + direction;
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
    <img
    src={bgImage}
    alt=""
    className ={bgImgOneClasses}
    />
    <img
    src={bgImage}
    alt=""
    className = {bgImgTwoClasses}
    />
    </div>
  )
}

export default Character;
