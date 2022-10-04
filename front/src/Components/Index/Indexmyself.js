import React from "react";

import JsLogo from "../../Images/.svg/js-square-brands.svg";
import SassLogo from "../../Images/.svg/sass-brands.svg";
import ReactLogo from "../../Images/.svg/react-brands.svg";
import HtmlLogo from "../../Images/.svg/html5-brands.svg";
import mySqlLogo from "../../Images/.svg/mySql.svg";

export default function Indexmyself() {
  // Light Mode
  const whatIsSL = localStorage.getItem("DisplayMode : ");

  return (
    <>
      <div id="skills"></div>

      <div className={whatIsSL === "false" ? "index-myselfW" : "index-myself"}>
        <h1
          className={
            whatIsSL === "false"
              ? "index-myselfW__title"
              : "index-myself__title"
          }
        >
          Viens on parle de moi
        </h1>
        <p
          className={
            whatIsSL === "false"
              ? "index-myselfW__subtitle"
              : "index-myself__subtitle"
          }
        >
          Depuis tout petit, j'ai toujours été passioné par l'informatique
          <br />
          depuis le web sans google et jusqu'à aujourd'hui.
        </p>
        <p
          className={
            whatIsSL === "false"
              ? "index-myselfW__subtitle"
              : "index-myself__subtitle"
          }
        >
          Depuis ma formation de developpeur web en 2021 avec Openclassrooms,
          <br />
          je m'emploie à améliorer mes compétences au travers de mes projets
          personnels.
          <br />
          Mon objectif et de pouvoir un jour travailler avec vous sur des
          projets concret et amusants !
        </p>
        <p
          className={
            whatIsSL === "false"
              ? "index-myselfW__subtitle"
              : "index-myself__subtitle"
          }
        >
          Les technos que j'ai actuellement dans mon sac :
        </p>
        <div
          className={
            whatIsSL === "false"
              ? "index-myselfW__boxTechnos"
              : "index-myself__boxTechnos"
          }
        >
          <img
            src={HtmlLogo}
            alt="Logo HTML5"
            width="100px"
            height="100px"
            className={
              whatIsSL === "false"
                ? "index-myselfW__boxTechnos"
                : "index-myself__boxTechnos"
            }
          />
          <img
            src={SassLogo}
            alt="Logo Sass"
            width="100px"
            height="100px"
            className={
              whatIsSL
                ? "index-myselfW__boxTechnos"
                : "index-myself__boxTechnos"
            }
          />
          <img
            src={JsLogo}
            alt="Logo JavaScript"
            width="100px"
            height="100px"
            className={
              whatIsSL
                ? "index-myselfW__boxTechnos"
                : "index-myself__boxTechnos"
            }
          />
          <img
            src={ReactLogo}
            alt="Logo React"
            width="100px"
            height="100px"
            className={
              whatIsSL
                ? "index-myselfW__boxTechnos"
                : "index-myself__boxTechnos"
            }
          />
          <img
            src={mySqlLogo}
            alt="Logo React"
            width="100px"
            height="100px"
            className={
              whatIsSL
                ? "index-myselfW__boxTechnos"
                : "index-myself__boxTechnos"
            }
          />
        </div>
        <div
          className={
            whatIsSL === "false"
              ? "index-divMyselfW__divScroll"
              : "index-divMyself__divScroll"
          }
        >
          <span
            className={
              whatIsSL === "false"
                ? "index-divMyselfW__scrollSign"
                : "index-divMyself__scrollSign"
            }
            id="scrollSignLeftTwo"
          >
            Scroll down →
          </span>
          <span
            className={
              whatIsSL === "false"
                ? "index-divMyselfW__scrollSign"
                : "index-divMyself__scrollSign"
            }
            id="scrollSignRightTwo"
          >
            Scroll down →
          </span>
        </div>
      </div>
      <div id="contactMe"></div>
    </>
  );
}
