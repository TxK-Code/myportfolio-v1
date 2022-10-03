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

  return (
    <>
      <div className="index-portfolio">
        <div className="index-portfolioHeader">
          <h1 className="index-portfolioHeader__title">Mes Projets</h1>
          <p className="index-portfolioHeader__subtitle">
            Une petite liste de mes projets récents, alimentée par mes essais et
            mes idées et qui grandira vite !
          </p>
        </div>
        <div className="index-portfolioBody">
          <div className="index-portfolioBody__projets">
            <div className="btnProjekt" id="firstBtnPrj" onClick={newTabTest}>
              <button className="btnProjekt__btn">Test Technique WCS</button>
              <div className="btnProjekt__btnDiv"></div>
            </div>

            <div className="btnProjekt" onClick={newTabPizza}>
              <button className="btnProjekt__btn">Pizzeria</button>
              <div className="btnProjekt__btnDiv"></div>
            </div>

            <div className="btnProjekt" onClick={newTabMtg}>
              <button className="btnProjekt__btn">Card Manager</button>
              <div className="btnProjekt__btnDiv"></div>
            </div>

            <div className="btnProjekt" onClick={newTabOC}>
              <button className="btnProjekt__btn">
                Projet Final OpenClassrooms
              </button>
              <div className="btnProjekt__btnDiv"></div>
            </div>
          </div>
        </div>
        <div id="skills"></div>
      </div>
    </>
  );
}
