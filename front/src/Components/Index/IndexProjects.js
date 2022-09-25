import React from "react";

export default function IndexProjects() {
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
          <div className="index-portfolioBody__projets"></div>
          <div className="index-portfolioBody__projets"></div>
          <div className="index-portfolioBody__projets"></div>
          <div className="index-portfolioBody__projets"></div>
          <div className="index-portfolioBody__projets"></div>
          <div className="index-portfolioBody__projets"></div>
          <div className="index-portfolioBody__projets"></div>
          <div className="index-portfolioBody__projets"></div>
          <div className="index-portfolioBody__projets"></div>
          <div className="index-portfolioBody__projets"></div>
        </div>
        <div id="skills"></div>
      </div>
    </>
  );
}
