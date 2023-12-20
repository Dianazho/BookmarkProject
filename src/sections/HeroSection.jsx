import { NavLink } from "react-router-dom";
import MainHeader from "../components/reusable/MainHeader";
import MainText from "../components/reusable/MainText";
import BtnCTA from "../components/reusable/BtnCTA";
import "./HeroSection.scss";

function HeroSection() {
  return (
    <section className="heroSection flex center">
      <div className="maxWidth column">
        <div className="hero">
          <div className="heroInfoCol">
            <MainHeader>A Simple Bookmark Manager</MainHeader>
            <MainText>
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </MainText>
            <div className="heroNavBar flex gap-1">
              <NavLink to="/construction">
                <BtnCTA color="purple">Get it on Chrome</BtnCTA>
              </NavLink>
              <NavLink to="/construction">
                <BtnCTA color="grey">Get it on Firefox</BtnCTA>
              </NavLink>
            </div>
          </div>
          <div className="heroImgWrapper">
            <img
              src="/illustration-hero.svg"
              alt="Screen with application layout"
              className="heroImg"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
