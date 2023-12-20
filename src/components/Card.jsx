import { NavLink } from "react-router-dom";
import BtnCTA from "./reusable/BtnCTA";
import "./Card.scss";

function Card({ card }) {
  return (
    <div className="card flex column alignCenter">
      <img src={card.imgPath} alt="alt text" className="cardImg" />
      <div className="flex column center">
        <p className="cardHeader">Add to {card.browserName}</p>
        <p className="cardText">Minimum version {card.minVersion}</p>
      </div>
      <img src="/bg-dots.svg" alt="Separation element" className="dots" />
      <NavLink to="/construction">
        <BtnCTA color={card.btnColor}>Add & Install extention</BtnCTA>
      </NavLink>
    </div>
  );
}

export default Card;
