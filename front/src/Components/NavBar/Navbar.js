import React, { useState, useEffect } from "react";

//Images
import TLogo from "../../Images/t-redBlue.png";
import LinkedinLogo from "../../Images/.svg/linkedin-in-brands.svg";
import LinkedinLogoHover from "../../Images/.svg/linkedin-in-brands_hover.svg";
import GitHubLogo from "../../Images/.svg/github-square-brands.svg";
import GitHubLogoHover from "../../Images/.svg/github-square-brands_hover.svg";

import "../../index.scss";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar__headBox">
          <img
            src={TLogo}
            alt="Logo"
            width="53"
            height="72"
            className="navbar__headBoxLogo"
          />
          <span className="navbar__headBoxTitle">Thomas</span>
          <span className="navbar__headBoxSubTitle">Web Developer</span>
        </div>
        <div className="navbar-body">
          <ul className="navbar-body__ul">
            <li className="navbar-body__li" id="li-One">
              À propos
            </li>
            <li className="navbar-body__li">Skills</li>
            <li className="navbar-body__li">Projets</li>
            <li className="navbar-body__li" id="li-Last">
              Contact
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
