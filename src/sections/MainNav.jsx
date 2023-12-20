import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Logo from "../components/reusable/Logo";
import BtnCTA from "../components/reusable/BtnCTA";
import Section from "../components/reusable/Section";
import MobilePageNav from "../components/MobilePageNav";
import "./MainNav.scss";

function MainNav() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 800px)" });
  return (
    <Section>
      <nav className="mainNav letterSpacing">
        <Logo />
        {!isTabletOrMobile && (
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
            <BtnCTA color="red">LOGIN</BtnCTA>
          </div>
        )}
        {isTabletOrMobile && <MobilePageNav />}
      </nav>
    </Section>
  );
}

export default MainNav;
