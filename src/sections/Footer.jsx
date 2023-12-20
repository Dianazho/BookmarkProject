import { NavLink } from "react-router-dom";
import Logo from "../components/reusable/Logo";
import SocialLink from "../components/reusable/SocialLink";
import "./Footer.scss";

function Footer() {
  return (
    <footer
      className="footer flex
    center"
    >
      <div className="footerWrapper">
        <nav className="footerNav flex letterSpacing">
          <Logo color="textWhite" />
          <div className="wrapper">
            <ul className="linksList">
              <li>
                <NavLink to="/construction">Features</NavLink>
              </li>
              <li>
                <NavLink to="/construction">Pricing</NavLink>
              </li>
              <li>
                <NavLink to="/construction">Contact</NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <div className="marginLeft flex center gap-4">
          <SocialLink social="facebook" />
          <SocialLink social="twitter" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
