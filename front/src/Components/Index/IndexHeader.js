import React from "react";
import { HashLink } from "react-router-hash-link";

import Tlogo from "../../Images/t-redBlue.png";

export default function IndexHeader() {
  // Light Mode
  const whatIsSL = localStorage.getItem("DisplayMode : ");

  return (
    <>
      <div id="hello"></div>
      <div
        className={
          whatIsSL === "false" ? "index-divMasterW" : "index-divMaster"
        }
      >
        <div
          className={whatIsSL === "false" ? "index-headerW" : "index-header"}
        >
          <h1
            className={
              whatIsSL === "false"
                ? "index-headerW__title"
                : "index-header__title"
            }
          >
            Hello, <br />
            Moi c'est{" "}
            <img
              src={Tlogo}
              alt="Logo"
              width="53"
              height="72"
              className={
                whatIsSL === "false"
                  ? "index-headerW__img"
                  : "index-header__img"
              }
            />
            homas.
            <br />
            Je suis Web Developer.{" "}
          </h1>
          <p
            className={
              whatIsSL === "false"
                ? "index-headerW__subtitle"
                : "index-header__subtitle"
            }
          >
            Dev Front-End__
          </p>
          <div
            className={
              whatIsSL === "false" ? "index-headerW__box" : "index-header__box"
            }
          >
            <HashLink smooth to="#contactMe">
              <button
                className={
                  whatIsSL === "false"
                    ? "index-headerW__btn"
                    : "index-header__btn"
                }
              >
                Contactez-moi
              </button>
            </HashLink>
            <div
              className={
                whatIsSL === "false"
                  ? "index-headerW__btnDiv"
                  : "index-header__btnDiv"
              }
            ></div>
          </div>
        </div>
        <div
          className={
            whatIsSL === "false"
              ? "index-divMasterW__divScroll"
              : "index-divMaster__divScroll"
          }
        >
          <span
            className={
              whatIsSL === "false"
                ? "index-divMasterW__scrollSign"
                : "index-divMaster__scrollSign"
            }
            id="scrollSignLeft"
          >
            Scroll down →
          </span>
          <span
            className={
              whatIsSL === "false"
                ? "index-divMasterW__scrollSign"
                : "index-divMaster__scrollSign"
            }
            id="scrollSignRight"
          >
            Scroll down →
          </span>
        </div>
      </div>
      <div id="myprojets"></div>
    </>
  );
}
