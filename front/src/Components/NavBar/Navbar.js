import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HashLink } from "react-router-hash-link";

//Images
import TLogo from "../../Images/t-redBlue.png";
import LinkedinLogo from "../../Images/.svg/linkedin-in-brands.svg";
import LinkedinLogoHover from "../../Images/.svg/linkedin-in-brands_hover.svg";
import GitHubLogo from "../../Images/.svg/github-square-brands.svg";
import GitHubLogoHover from "../../Images/.svg/github-square-brands_hover.svg";

import LinkedinLogoHoverP from "../../Images/.svg/Pink/linkedin-in-brands_hover.svg";
import GitHubLogoHoverP from "../../Images/.svg/Pink/github-square-brands_hover.svg";

import { changeMode } from "../../redux/articles/modeSlice";

export default function Navbar() {
  const isDark = useSelector((state) => state.modeSelected.value);
  const dispatch = useDispatch();

  console.log(isDark, "IsDark");

  const newLink = () => {
    window.open("https://www.linkedin.com/in/thomas-maugendre-5a04ab209/");
  };
  const newGit = () => {
    window.open("https://github.com/TxK-Code");
  };

  // Light Mode

  // State
  const [displayMode, setDisplayMode] = useState(false);
  console.log(displayMode, "DisplayDark");
  // Save LS
  const saveStateToLS = (e) => {
    localStorage.setItem("DisplayMode : ", e);
  };
  // Get LS
  const whatIsSL = localStorage.getItem("DisplayMode : ");
  if (whatIsSL !== null || whatIsSL !== "undefined") {
  }
  // Set LS if null
  if (whatIsSL === null || whatIsSL === "undefined") {
    localStorage.setItem("DisplayMode : ", false);
  }

  const saveDisplayMode = () => {
    // dispatch(changeMode());
    setDisplayMode(!displayMode);
    saveStateToLS(!displayMode);
    dispatch(changeMode());
  };

  return (
    <>
      <div className={isDark === false ? "navbarW" : "navbar"}>
        <div
          className={isDark === false ? "navbarW__headBox" : "navbar__headBox"}
        >
          <HashLink smooth to="#hello">
            <img
              src={TLogo}
              alt="Logo"
              width="53"
              height="72"
              className={
                isDark === false
                  ? "navbarW__headBoxLogo"
                  : "navbar__headBoxLogo"
              }
            />
          </HashLink>
          <span
            className={
              isDark === false
                ? "navbarW__headBoxTitle"
                : "navbar__headBoxTitle"
            }
          >
            Thomas
          </span>
          <span
            className={
              isDark === false
                ? "navbarW__headBoxSubTitle"
                : "navbar__headBoxSubTitle"
            }
          >
            Web Developer
          </span>
        </div>
        <div className={isDark === false ? "navbar-bodyW" : "navbar-body"}>
          <ul
            className={
              isDark === false ? "navbar-bodyW__ul" : "navbar-body__ul"
            }
          >
            <li
              className={
                isDark === false ? "navbar-bodyW__li" : "navbar-body__li"
              }
              id="li-One"
            >
              <HashLink
                smooth
                to="#hello"
                className={
                  isDark === false ? "navbar-bodyW__li" : "navbar-body__li"
                }
              >
                Hello
              </HashLink>
            </li>
            <li
              className={
                isDark === false ? "navbar-bodyW__li" : "navbar-body__li"
              }
            >
              <HashLink
                smooth
                to="#myprojets"
                className={
                  isDark === false ? "navbar-bodyW__li" : "navbar-body__li"
                }
              >
                Projets
              </HashLink>
            </li>
            <li
              className={
                isDark === false ? "navbar-bodyW__li" : "navbar-body__li"
              }
            >
              <HashLink
                smooth
                to="#skills"
                className={
                  isDark === false ? "navbar-bodyW__li" : "navbar-body__li"
                }
              >
                Skills
              </HashLink>
            </li>
            <li
              className={
                isDark === false ? "navbar-bodyW__li" : "navbar-body__li"
              }
              id="li-Last"
            >
              <HashLink
                smooth
                to="#contactMe"
                className={
                  isDark === false ? "navbar-bodyW__li" : "navbar-body__li"
                }
              >
                Contact
              </HashLink>
            </li>
          </ul>
        </div>
        <div className={isDark === false ? "navbar-footerW" : "navbar-footer"}>
          <ul
            className={
              isDark === false ? "navbar-footerW__ul" : "navbar-footer__ul"
            }
          >
            <li
              className={
                isDark === false ? "navbar-footerW__li" : "navbar-footer__li"
              }
            >
              {isDark === false ? (
                <img
                  src={GitHubLogo}
                  onMouseOver={(e) =>
                    (e.currentTarget.src = `${GitHubLogoHoverP}`)
                  }
                  onMouseOut={(e) => (e.currentTarget.src = `${GitHubLogo}`)}
                  onClick={newGit}
                  alt="Lien Github"
                  height="25"
                  width="25"
                  className={
                    isDark === false
                      ? "navbar-footerW__img"
                      : "navbar-footer__img"
                  }
                />
              ) : (
                <img
                  src={GitHubLogo}
                  onMouseOver={(e) =>
                    (e.currentTarget.src = `${GitHubLogoHover}`)
                  }
                  onMouseOut={(e) => (e.currentTarget.src = `${GitHubLogo}`)}
                  onClick={newGit}
                  alt="Lien Github"
                  height="25"
                  width="25"
                  className={
                    isDark === false
                      ? "navbar-footerW__img"
                      : "navbar-footer__img"
                  }
                />
              )}
            </li>
            <li
              className={
                isDark === false ? "navbar-footerW__li" : "navbar-footer__li"
              }
            >
              {isDark === false ? (
                <img
                  src={LinkedinLogo}
                  onMouseOver={(e) =>
                    (e.currentTarget.src = `${LinkedinLogoHoverP}`)
                  }
                  onMouseOut={(e) => (e.currentTarget.src = `${LinkedinLogo}`)}
                  onClick={newLink}
                  alt="Lien Linkedin"
                  height="25"
                  width="25"
                  className={
                    isDark === false
                      ? "navbar-footerW__img"
                      : "navbar-footer__img"
                  }
                />
              ) : (
                <img
                  src={LinkedinLogo}
                  onMouseOver={(e) =>
                    (e.currentTarget.src = `${LinkedinLogoHover}`)
                  }
                  onMouseOut={(e) => (e.currentTarget.src = `${LinkedinLogo}`)}
                  onClick={newLink}
                  alt="Lien Linkedin"
                  height="25"
                  width="25"
                  className={
                    isDark === false
                      ? "navbar-footerW__img"
                      : "navbar-footer__img"
                  }
                />
              )}
            </li>
          </ul>
          <button
            className={
              isDark === false
                ? "navbar-footerW__btnLight"
                : "navbar-footer__btnLight"
            }
            onClick={saveDisplayMode}
          >
            {isDark === false ? "Light Off" : "Light On"}
          </button>
        </div>
      </div>
    </>
  );
}
