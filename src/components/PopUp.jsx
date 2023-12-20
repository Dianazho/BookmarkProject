import { NavLink } from "react-router-dom";
import BtnCTA from "./reusable/BtnCTA";
import "./PopUp.scss";

const selectedFeature = Math.floor(Math.random() * 2 + 1);
// Will give us random number from 1 to 2
const featuresList = [
  {
    id: 1,
    feature: "Speedy Searching",
    header: "Share your bookmarks",
    text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
  },
  {
    id: 2,
    feature: "Easy Sharing",
    header: "Share your bookmarks",
    text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  },
];
const feature = featuresList.find((feature) => feature.id === selectedFeature);
function PopUp({ onHidePopupHandler }) {
  return (
    <>
      <div className="popUpBlur fullWidth"></div>
      <section className="popUpSection">
        <div className="popUpCloseBtn" onClick={onHidePopupHandler}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15">
            <path
              fill="#252b46"
              d="M8 5.379L13.303.075l2.122 2.122L10.12 7.5l5.304 5.303-2.122 2.122L8 9.62l-5.303 5.304-2.122-2.122L5.88 7.5.575 2.197 2.697.075 8 5.38z"
            />
          </svg>
        </div>
        <div className="maxWidth">
          <div className="popUpBody">
            <div className="popUpImgWrapper flex center">
              <img
                src={`/illustration-features-tab-${+selectedFeature + 1}.svg`}
                alt="Screen with application layout"
                className="popUpImage"
              ></img>
            </div>
            <div className="popUpTextWrapper flex column">
              <p className="popUpHeader">{feature.header}</p>
              <p className="popUpText">{feature.text}</p>
              <div className="flex gap-1">
                <NavLink to="/construction">
                  <BtnCTA color="purple">More info</BtnCTA>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PopUp;
