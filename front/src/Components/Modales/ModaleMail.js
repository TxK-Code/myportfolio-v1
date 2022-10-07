import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function ModaleMail() {
  // Light Mode
  const isDark = useSelector((state) => state.modeSelected.value);

  return (
    <>
      <div className={isDark === false ? "modaleMailW" : "modaleMail"}>
        <div
          className={isDark === false ? "modaleMailW__box" : "modaleMail__box"}
        >
          <h2
            className={
              isDark === false ? "modaleMailW__title" : "modaleMail__title"
            }
          >
            Message Envoyé
          </h2>
          <div
            className={
              isDark === false ? "modaleMailW__div" : "modaleMail__div"
            }
          ></div>
        </div>
      </div>
    </>
  );
}
