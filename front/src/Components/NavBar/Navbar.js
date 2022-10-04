import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

//Images
import TLogo from "../../Images/t-redBlue.png";
import LinkedinLogo from "../../Images/.svg/linkedin-in-brands.svg";
import LinkedinLogoHover from "../../Images/.svg/linkedin-in-brands_hover.svg";
import GitHubLogo from "../../Images/.svg/github-square-brands.svg";
import GitHubLogoHover from "../../Images/.svg/github-square-brands_hover.svg";

import "../../index.scss";

export default function Navbar() {
  const newLink = () => {
    window.open("https://www.linkedin.com/in/thomas-maugendre-5a04ab209/");
  };
  const newGit = () => {
    window.open("https://github.com/TxK-Code");
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar__headBox">
          <HashLink smooth to="#hello">
            <img
              src={TLogo}
              alt="Logo"
              width="53"
              height="72"
              className="navbar__headBoxLogo"
            />
          </HashLink>
          <span className="navbar__headBoxTitle">Thomas</span>
          <span className="navbar__headBoxSubTitle">Web Developer</span>
        </div>
        <div className="navbar-body">
          <ul className="navbar-body__ul">
            <li className="navbar-body__li" id="li-One">
              <HashLink smooth to="#hello">
                Hello
              </HashLink>
            </li>
            <li className="navbar-body__li">
              <HashLink smooth to="#myprojets">
                Projets
              </HashLink>
            </li>
            <li className="navbar-body__li">
              <HashLink smooth to="#skills">
                Skills
              </HashLink>
            </li>
            <li className="navbar-body__li" id="li-Last">
              <HashLink smooth to="#contactMe">
                Contact
              </HashLink>
            </li>
          </ul>
        </div>
        <div className="navbar-footer">
          <ul className="navbar-footer__ul">
            <li className="navbar-footer__li">
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
                className="navbar-footer__img"
              />
            </li>
            <li className="navbar-footer__li">
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
                className="navbar-footer__img"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
