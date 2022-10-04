import React, { useRef } from "react";

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

  return (
    <>
      <div
        className={
          whatIsSL === "false" ? "index-portfolioW" : "index-portfolio"
        }
      >
        <div
          className={
            whatIsSL === "false"
              ? "index-portfolioHeaderW"
              : "index-portfolioHeader"
          }
        >
          <h1
            className={
              whatIsSL === "false"
                ? "index-portfolioHeaderW__title"
                : "index-portfolioHeader__title"
            }
          >
            Mes Projets
          </h1>
          <p
            className={
              whatIsSL === "false"
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
            whatIsSL === "false"
              ? "index-portfolioBodyW"
              : "index-portfolioBody"
          }
        >
          <div
            className={
              whatIsSL === "false"
                ? "index-portfolioBodyW__projets"
                : "index-portfolioBody__projets"
            }
          >
            <div
              className={whatIsSL === "false" ? "btnProjektW" : "btnProjekt"}
              id="firstBtnPrj"
              onClick={newTabTest}
            >
              <button
                className={
                  whatIsSL === "false" ? "btnProjektW__btn" : "btnProjekt__btn"
                }
              >
                Test Technique WCS
              </button>
              <div
                className={
                  whatIsSL === "false"
                    ? "btnProjektW__btnDiv"
                    : "btnProjekt__btnDiv"
                }
              ></div>
            </div>

            <div
              className={whatIsSL === "false" ? "btnProjektW" : "btnProjekt"}
              onClick={newTabPizza}
            >
              <button
                className={
                  whatIsSL === "false" ? "btnProjektW__btn" : "btnProjekt__btn"
                }
              >
                Pizzeria
              </button>
              <div
                className={
                  whatIsSL === "false"
                    ? "btnProjektW__btnDiv"
                    : "btnProjekt__btnDiv"
                }
              ></div>
            </div>

            <div
              className={whatIsSL === "false" ? "btnProjektW" : "btnProjekt"}
              onClick={newTabMtg}
            >
              <button
                className={
                  whatIsSL === "false" ? "btnProjektW__btn" : "btnProjekt__btn"
                }
              >
                Card Manager
              </button>
              <div
                className={
                  whatIsSL === "false"
                    ? "btnProjektW__btnDiv"
                    : "btnProjekt__btnDiv"
                }
              ></div>
            </div>

            <div
              className={whatIsSL === "false" ? "btnProjektW" : "btnProjekt"}
              onClick={newTabOC}
            >
              <button
                className={
                  whatIsSL === "false" ? "btnProjektW__btn" : "btnProjekt__btn"
                }
              >
                Projet Final OpenClassrooms
              </button>
              <div
                className={
                  whatIsSL === "false"
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
