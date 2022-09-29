import React from "react";
import { HashLink } from "react-router-hash-link";

import Tlogo from "../../Images/t-redBlue.png";

export default function IndexHeader() {
  return (
    <>
      <div id="hello"></div>
      <div className="index-divMaster">
        <div className="index-header">
          <h1 className="index-header__title">
            Hello, <br />
            Moi c'est{" "}
            <img
              src={Tlogo}
              alt="Logo"
              width="53"
              height="72"
              className="index-header__img"
            />
            homas.
            <br />
            Je suis Web Developer.{" "}
          </h1>
          <p className="index-header__subtitle">Dev Front-End__</p>
          <div className="index-header__box">
            <HashLink smooth to="#contactMe">
              <button className="index-header__btn">Contactez-moi</button>
            </HashLink>
            <div className="index-header__btnDiv"></div>
          </div>
        </div>
        <div className="index-divMaster__divScroll">
          <span className="index-divMaster__scrollSign" id="scrollSignLeft">
            Scroll down →
          </span>
          <span className="index-divMaster__scrollSign" id="scrollSignRight">
            Scroll down →
          </span>
        </div>
      </div>
      <div id="myprojets"></div>
    </>
  );
}
