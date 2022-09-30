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
      bgImgOneClasses = "background-image bg-down-left bg-one";
      bgImgTwoClasses = "delay-visible background-image bg-down-left  bg-two";
      break;
    case "north":
      standingImage = standingNorth;
      bgImgOneClasses = "background-image bg-down bg-one";
      bgImgTwoClasses = "delay-visible background-image bg-two";
      break;
    case "northeast":
      standingImage = standingNorthEast;
      bgImgOneClasses = "background-image bg-down-right bg-one";
      bgImgTwoClasses = "delay-visible background-image  bg-two";
      break;
    case "west":
      standingImage = standingWest;
      bgImgOneClasses = "background-image bg-right bg-one";
      bgImgTwoClasses = "delay-visible background-image  bg-two";
      break;
    case "southwest":
      standingImage = standingSouthWest;
      bgImgOneClasses = "background-image bg-up-right bg-one";
      bgImgTwoClasses = "delay-visible background-image bg-up-right bg-two";
      break;
    case "south":
      standingImage = standingSouth;
      bgImgOneClasses = "background-image bg-up bg-one";
      bgImgTwoClasses = "delay-visible background-image bg-up bg-two";
      break;
    case "southeast":
      standingImage = standingSouthEast;
      bgImgOneClasses = "background-image bg-up-left bg-one";
      bgImgTwoClasses = "delay-visible background-image bg-up-left bg-two";
      break;
    case "east":
      standingImage = standingEast;
      bgImgOneClasses = "background-image bg-left bg-one";
      bgImgTwoClasses = "delay-visible background-image bg-left bg-two";
      break;
    default:
      standingImage = standingSouth;
      bgImgOneClasses = "background-image bg-left bg-one";
      bgImgTwoClasses = "delay-visible background-image bg-left bg-two";
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
