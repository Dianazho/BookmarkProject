import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "./reusable/Logo";
import SocialLink from "../components/reusable/SocialLink";
import "./MobilePageNav.scss";

function MobilePageNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* OPEN */}
      {isOpen && (
        <>
          {/* BLUR */}
          <div className="blur fullWidth"></div>

          {/* Mobile nav */}
          <div className="mobileNavWrapper flex column center">
            <div className="mobileNav flex column center">
              <div className="fullWidth">
                <div className="fullWidth mobileFirstLine flex center">
                  <Logo color="fullWhite" />
                  <svg
                    className="closeMobileIcon"
                    onClick={() => setIsOpen(!isOpen)}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="15"
                  >
                    <path
                      fill="#FFF"
                      fillRule="evenodd"
                      d="M8 5.379L13.303.075l2.122 2.122L10.12 7.5l5.304 5.303-2.122 2.122L8 9.62l-5.303 5.304-2.122-2.122L5.88 7.5.575 2.197 2.697.075 8 5.38z"
                    />
                  </svg>
                </div>

                <div className="fullWidth flex column center">
                  <ul className="fullWidth mobileLinksList flex column center">
                    <NavLink to="/construction">
                      <li className="mobileLink ">Features</li>
                    </NavLink>
                    <NavLink to="/construction">
                      <li className="mobileLink">Pricing</li>
                    </NavLink>
                    <NavLink to="/construction">
                      <li className="mobileLink">Contact</li>
                    </NavLink>
                  </ul>
                  <div className="flex fullWidth">
                    <NavLink className="flex fullWidth" to="/construction">
                      {" "}
                      <button className="flex center uppercase mobileLoginBtn">
                        Login
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="mobileSocialLinks">
                <div className="flex gap-5">
                  <SocialLink social="facebook" />
                  <SocialLink social="twitter" />
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* CLOSED */}
      {!isOpen && (
        <svg
          className="mobileIcon"
          onClick={() => setIsOpen(!isOpen)}
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="15"
        >
          <path
            fill="#242A45"
            fillRule="evenodd"
            d="M0 0h18v3H0V0zm0 6h18v3H0V6zm0 6h18v3H0v-3z"
          />
        </svg>
      )}
    </>
  );
}

export default MobilePageNav;
