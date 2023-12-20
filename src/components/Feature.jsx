import { NavLink } from "react-router-dom";
import SecondaryHeader from "./reusable/SecondaryHeader";
import MainText from "./reusable/MainText";
import BtnCTA from "./reusable/BtnCTA";

function Feature({ feature, selectedFeature }) {
  return (
    <div key={feature.id} className="maxWidth">
      <div className="featureBody">
        <div className="featureImgWrapper">
          <img
            src={`/illustration-features-tab-${+selectedFeature + 1}.svg`}
            alt="Screen with application layout"
            className="featureImg"
          ></img>
        </div>
        <div className="featureInfoCol">
          <SecondaryHeader>{feature.header}</SecondaryHeader>
          <MainText>{feature.text}</MainText>
          <div className="flex gap-1 featureBtn">
            <NavLink to="/construction">
              <BtnCTA color="purple">More info</BtnCTA>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
