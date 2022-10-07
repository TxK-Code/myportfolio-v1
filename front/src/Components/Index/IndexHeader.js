import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { HashLink } from "react-router-hash-link";
import { changeMode } from "../../redux/articles/modeSlice";

import Tlogo from "../../Images/t-redBlue.png";

export default function IndexHeader() {
  // Light Mode
  const isDark = useSelector((state) => state.modeSelected.value);
  const dispatch = useDispatch();
  // State
  const [displayMode, setDisplayMode] = useState(false);
  console.log(displayMode, "DisplayDark");
  // Save LS
  const saveStateToLS = (e) => {
    localStorage.setItem("DisplayMode : ", e);
  };
  // Get LS
  const whatIsSL = localStorage.getItem("DisplayMode : ");
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
      <div id="hello"></div>
      <div
        className={isDark === false ? "index-divMasterW" : "index-divMaster"}
      >
        <div className={isDark === false ? "index-headerW" : "index-header"}>
          <h1
            className={
              isDark === false ? "index-headerW__title" : "index-header__title"
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
                isDark === false ? "index-headerW__img" : "index-header__img"
              }
            />
            homas.
            <br />
            Je suis Web Developer.{" "}
          </h1>
          <p
            className={
              isDark === false
                ? "index-headerW__subtitle"
                : "index-header__subtitle"
            }
          >
            Dev Front-End__
          </p>
          <div
            className={
              isDark === false ? "index-headerW__box" : "index-header__box"
            }
          >
            <HashLink smooth to="#contactMe">
              <button
                className={
                  isDark === false ? "index-headerW__btn" : "index-header__btn"
                }
              >
                Contactez-moi
              </button>
            </HashLink>
            <div
              className={
                isDark === false
                  ? "index-headerW__btnDiv"
                  : "index-header__btnDiv"
              }
            ></div>
          </div>
        </div>
        <button
          className={
            isDark === false
              ? "index-divMasterW__SecBtn"
              : "index-divMaster__SecBtn"
          }
          onClick={saveDisplayMode}
        >
          {isDark === false ? "Light Off" : "Light On"}
        </button>
        <div
          className={
            isDark === false
              ? "index-divMasterW__divScroll"
              : "index-divMaster__divScroll"
          }
        >
          <span
            className={
              isDark === false
                ? "index-divMasterW__scrollSign"
                : "index-divMaster__scrollSign"
            }
            id="scrollSignLeft"
          >
            Scroll down →
          </span>
          <span
            className={
              isDark === false
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
