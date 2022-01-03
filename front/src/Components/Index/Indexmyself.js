import React from "react";

import JsLogo from "../../Images/.svg/js-square-brands.svg";
import SassLogo from "../../Images/.svg/sass-brands.svg";
import ReactLogo from "../../Images/.svg/react-brands.svg";
import HtmlLogo from "../../Images/.svg/html5-brands.svg";

export default function Indexmyself() {
  return (
    <>
      <div className="index-myself">
        <h1 className="index-myself__title">Viens on parle de moi</h1>
        <p className="index-myself__subtitle">
          Depuis tout petit, j'ai toujours été passioné par l'informatique
          <br />
          depuis le web sans google et jusqu'à aujourd'hui.
        </p>
        <p className="index-myself__subtitle">
          Depuis ma formation de developpeur web en 2021 avec Openclassrooms,
          <br />
          je m'emploie à améliorer mes compétences au travers de mes projets
          personnels.
          <br />
          Mon objectif et de pouvoir un jour travailler avec vous sur des
          projets concret et amusants !
        </p>
        <p className="index-myself__subtitle">
          Les technos que j'ai actuellement dans mon sac :
        </p>
        <div className="index-myself__boxTechnos">
          <img
            src={HtmlLogo}
            alt="Logo HTML5"
            width="100px"
            height="100px"
            className="index-myself__technos"
          />
          <img
            src={SassLogo}
            alt="Logo Sass"
            width="100px"
            height="100px"
            className="index-myself__technos"
          />
          <img
            src={JsLogo}
            alt="Logo JavaScript"
            width="100px"
            height="100px"
            className="index-myself__technos"
          />
          <img
            src={ReactLogo}
            alt="Logo React"
            width="100px"
            height="100px"
            className="index-myself__technos"
          />
        </div>
        <div className="index-divMyself__divScroll">
          <span className="index-divMyself__scrollSign" id="scrollSignLeftTwo">
            Scroll down →
          </span>
          <span className="index-divMyself__scrollSign" id="scrollSignRightTwo">
            Scroll down →
          </span>
        </div>
      </div>
    </>
  );
}
