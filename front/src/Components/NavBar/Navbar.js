import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

//Images
import TLogo from "../../Images/t-redBlue.png";
import LinkedinLogo from "../../Images/.svg/linkedin-in-brands.svg";
import LinkedinLogoHover from "../../Images/.svg/linkedin-in-brands_hover.svg";
import GitHubLogo from "../../Images/.svg/github-square-brands.svg";
import GitHubLogoHover from "../../Images/.svg/github-square-brands_hover.svg";

// import "../../index.scss";

export default function Navbar() {
  const newLink = () => {
    window.open("https://www.linkedin.com/in/thomas-maugendre-5a04ab209/");
  };
  const newGit = () => {
    window.open("https://github.com/TxK-Code");
  };

  // Light Mode
  const [displayMode, setDisplayMode] = useState(true);
  const saveStateToLS = () => {
    localStorage.setItem("DisplayMode : ", displayMode);
  };
  const saveDisplayMode = () => {
    setDisplayMode(!displayMode);
    saveStateToLS();
    console.log(displayMode);
  };
  const whatIsSL = localStorage.getItem("DisplayMode : ");
  if (whatIsSL === null) {
    localStorage.setItem("DisplayMode : ", true);
    setDisplayMode(true);
  }

  return (
    <>
      <div className={whatIsSL === "false" ? "navbarW" : "navbar"}>
        <div
          className={
            whatIsSL === "false" ? "navbarW__headBox" : "navbar__headBox"
          }
        >
          <HashLink smooth to="#hello">
            <img
              src={TLogo}
              alt="Logo"
              width="53"
              height="72"
              className={
                whatIsSL === "false"
                  ? "navbarW__headBoxLogo"
                  : "navbar__headBoxLogo"
              }
            />
          </HashLink>
          <span
            className={
              whatIsSL === "false"
                ? "navbarW__headBoxTitle"
                : "navbar__headBoxTitle"
            }
          >
            Thomas
          </span>
          <span
            className={
              whatIsSL === "false"
                ? "navbarW__headBoxSubTitle"
                : "navbar__headBoxSubTitle"
            }
          >
            Web Developer
          </span>
        </div>
        <div className={whatIsSL === "false" ? "navbar-bodyW" : "navbar-body"}>
          <ul
            className={
              whatIsSL === "false" ? "navbar-bodyW__ul" : "navbar-body__ul"
            }
          >
            <li
              className={
                whatIsSL === "false" ? "navbar-bodyW__li" : "navbar-body__li"
              }
              id="li-One"
            >
              <HashLink
                smooth
                to="#hello"
                className={
                  whatIsSL === "false" ? "navbar-bodyW__li" : "navbar-body__li"
                }
              >
                Hello
              </HashLink>
            </li>
            <li
              className={
                whatIsSL === "false" ? "navbar-bodyW__li" : "navbar-body__li"
              }
            >
              <HashLink
                smooth
                to="#myprojets"
                className={
                  whatIsSL === "false" ? "navbar-bodyW__li" : "navbar-body__li"
                }
              >
                Projets
              </HashLink>
            </li>
            <li
              className={
                whatIsSL === "false" ? "navbar-bodyW__li" : "navbar-body__li"
              }
            >
              <HashLink
                smooth
                to="#skills"
                className={
                  whatIsSL === "false" ? "navbar-bodyW__li" : "navbar-body__li"
                }
              >
                Skills
              </HashLink>
            </li>
            <li
              className={
                whatIsSL === "false" ? "navbar-bodyW__li" : "navbar-body__li"
              }
              id="li-Last"
            >
              <HashLink
                smooth
                to="#contactMe"
                className={
                  whatIsSL === "false" ? "navbar-bodyW__li" : "navbar-body__li"
                }
              >
                Contact
              </HashLink>
            </li>
          </ul>
        </div>
        <div
          className={whatIsSL === "false" ? "navbar-footerW" : "navbar-footer"}
        >
          <ul
            className={
              whatIsSL === "false" ? "navbar-footerW__ul" : "navbar-footer__ul"
            }
          >
            <li
              className={
                whatIsSL === "false"
                  ? "navbar-footerW__li"
                  : "navbar-footer__li"
              }
            >
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
                  whatIsSL === "false"
                    ? "navbar-footerW__img"
                    : "navbar-footer__img"
                }
              />
            </li>
            <li
              className={
                whatIsSL === "false"
                  ? "navbar-footerW__li"
                  : "navbar-footer__li"
              }
            >
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
                  whatIsSL === "false"
                    ? "navbar-footerW__img"
                    : "navbar-footer__img"
                }
              />
            </li>
          </ul>
          <button
            className={
              whatIsSL === "false"
                ? "navbar-footerW__btnLight"
                : "navbar-footer__btnLight"
            }
            onClick={saveDisplayMode}
          >
            {whatIsSL === "false" ? "Light Off" : "Light On"}
          </button>
        </div>
      </div>
    </>
  );
}
