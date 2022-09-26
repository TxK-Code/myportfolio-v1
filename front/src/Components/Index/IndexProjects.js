import React from "react";

export default function IndexProjects() {
  const newTabTest = () => {
    window.open("https://github.com/TxK-Code/wcs-quest");
  };
  const newTabPizza = () => {
    window.open("https://github.com/TxK-Code/pizzeria");
  };

  return (
    <>
      <div className="index-portfolio">
        <div className="index-portfolioHeader">
          <h1 className="index-portfolioHeader__title">Mes Projets</h1>
          <p className="index-portfolioHeader__subtitle">
            Une petite liste de mes projets récents,
            <br />
            alimentée par mes essais et mes idées et qui grandira vite ! :
          </p>
        </div>
        <div className="index-portfolioBody">
          <div className="index-portfolioBody__projets">
            <div className="index-portfolioBody__projetsBox" id="task01">
              <p
                className="index-portfolioBody__projetsButton"
                onClick={newTabTest}
              >
                Test Technique WCS
              </p>
            </div>
            <div className="index-portfolioBody__projetsBox" id="task02">
              <p
                className="index-portfolioBody__projetsButton"
                onClick={newTabPizza}
              >
                Pizzeria
              </p>
            </div>
          </div>
        </div>
        <div id="skills"></div>
      </div>
    </>
  );
}
