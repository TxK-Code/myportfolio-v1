import React, { useState, useEffect } from "react";

export default function ModaleMail() {
  // Light Mode
  const whatIsSL = localStorage.getItem("DisplayMode : ");

  return (
    <>
      <div className={whatIsSL === "false" ? "modaleMailW" : "modaleMail"}>
        <div
          className={
            whatIsSL === "false" ? "modaleMailW__box" : "modaleMail__box"
          }
        >
          <h2
            className={
              whatIsSL === "false" ? "modaleMailW__title" : "modaleMail__title"
            }
          >
            Message Envoyé
          </h2>
          <div
            className={
              whatIsSL === "false" ? "modaleMailW__div" : "modaleMail__div"
            }
          ></div>
        </div>
      </div>
    </>
  );
}
