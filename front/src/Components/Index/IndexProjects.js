import React, { useRef } from "react";
import { useSelector } from "react-redux";

export default function IndexProjects() {
  const newTabTest = () => {
    window.open("https://github.com/TxK-Code/wcs-quest");
  };
  const newTabPizza = () => {
    window.open("https://github.com/TxK-Code/pizzeria");
  };
  const newTabMtg = () => {
    window.open("https://github.com/TxK-Code/mtxCards_code");
  };
  const newTabOC = () => {
    window.open("https://github.com/TxK-Code/ThomasMaugendre_7_16092021");
  };

  // Light Mode
  const whatIsSL = localStorage.getItem("DisplayMode : ");
  const isDark = useSelector((state) => state.modeSelected.value);

  return (
    <>
      <div
        className={isDark === false ? "index-portfolioW" : "index-portfolio"}
      >
        <div
          className={
            isDark === false
              ? "index-portfolioHeaderW"
              : "index-portfolioHeader"
          }
        >
          <h1
            className={
              isDark === false
                ? "index-portfolioHeaderW__title"
                : "index-portfolioHeader__title"
            }
          >
            Mes Projets
          </h1>
          <p
            className={
              isDark === false
                ? "index-portfolioHeaderW__subtitle"
                : "index-portfolioHeader__subtitle"
            }
          >
            Une petite liste de mes projets récents, alimentée par mes essais et
            mes idées et qui grandira vite !
          </p>
        </div>
        <div
          className={
            isDark === false ? "index-portfolioBodyW" : "index-portfolioBody"
          }
        >
          <div
            className={
              isDark === false
                ? "index-portfolioBodyW__projets"
                : "index-portfolioBody__projets"
            }
          >
            <div
              className={isDark === false ? "btnProjektW" : "btnProjekt"}
              id="firstBtnPrj"
              onClick={newTabTest}
            >
              <button
                className={
                  isDark === false ? "btnProjektW__btn" : "btnProjekt__btn"
                }
              >
                Test Technique WCS
              </button>
              <div
                className={
                  isDark === false
                    ? "btnProjektW__btnDiv"
                    : "btnProjekt__btnDiv"
                }
              ></div>
            </div>

            <div
              className={isDark === false ? "btnProjektW" : "btnProjekt"}
              onClick={newTabPizza}
            >
              <button
                className={
                  isDark === false ? "btnProjektW__btn" : "btnProjekt__btn"
                }
              >
                Pizzeria
              </button>
              <div
                className={
                  isDark === false
                    ? "btnProjektW__btnDiv"
                    : "btnProjekt__btnDiv"
                }
              ></div>
            </div>

            <div
              className={isDark === false ? "btnProjektW" : "btnProjekt"}
              onClick={newTabMtg}
            >
              <button
                className={
                  isDark === false ? "btnProjektW__btn" : "btnProjekt__btn"
                }
              >
                Card Manager
              </button>
              <div
                className={
                  isDark === false
                    ? "btnProjektW__btnDiv"
                    : "btnProjekt__btnDiv"
                }
              ></div>
            </div>

            <div
              className={isDark === false ? "btnProjektW" : "btnProjekt"}
              onClick={newTabOC}
            >
              <button
                className={
                  isDark === false ? "btnProjektW__btn" : "btnProjekt__btn"
                }
              >
                Projet Final OpenClassrooms
              </button>
              <div
                className={
                  isDark === false
                    ? "btnProjektW__btnDiv"
                    : "btnProjekt__btnDiv"
                }
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
