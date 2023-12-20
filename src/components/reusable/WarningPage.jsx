import BtnCTA from "./BtnCTA";
import { NavLink } from "react-router-dom";

export default function WarningPage({ warning }) {
  return (
    <div className="message">
      <img src={warning.image} alt="Page not found" className="image" />
      <h2 className="warningHeader">{warning.header}</h2>
      <NavLink to="/">
        <BtnCTA color="purple">Go to homepage</BtnCTA>
      </NavLink>
    </div>
  );
}
