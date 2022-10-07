import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import emailjs from "@emailjs/browser";

import ModaleMail from "../Modales/ModaleMail";

export default function ContactForm() {
  const form = useRef();

  const [modale, setModale] = useState(false);

  const sendMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_j9o84cy",
        "template_ugvurp9",
        form.current,
        "gIUjX0UYdtwbV36jF"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    document.getElementById("nom").value = "";
    document.getElementById("eMail").value = "";
    document.getElementById("sujet").value = "";
    document.getElementById("message").value = "";
  };

  const okNext = () => {
    setModale(false);
  };
  const emailSended = () => {
    setModale(true);
    setTimeout(okNext, 1500);
  };

  // Light Mode
  const whatIsSL = localStorage.getItem("DisplayMode : ");
  const isDark = useSelector((state) => state.modeSelected.value);

  return (
    <>
      <form
        ref={form}
        action=""
        className={isDark === false ? "formContactW" : "formContact"}
        onSubmit={sendMail}
      >
        <div
          className={
            isDark === false ? "formContactW__box" : "formContact__box"
          }
        >
          <label
            htmlFor="nom"
            className={
              isDark === false ? "formContactW__label" : "formContact__label"
            }
          ></label>
          <input
            type="text"
            id="nom"
            className={
              isDark === false ? "formContactW__input" : "formContact__input"
            }
            placeholder="Nom"
            name="userName"
          />
          <span
            className={
              isDark === false ? "formContactW__valid" : "formContact__valid"
            }
          ></span>
        </div>
        <div
          className={
            isDark === false ? "formContactW__box" : "formContact__box"
          }
        >
          <label
            htmlFor="eMail"
            className={
              isDark === false ? "formContactW__label" : "formContact__label"
            }
          ></label>
          <input
            type="text"
            id="eMail"
            className={
              isDark === false ? "formContactW__input" : "formContact__input"
            }
            placeholder="Email"
            name="userMail"
          />
          <span
            className={
              isDark === false ? "formContactW__valid" : "formContact__valid"
            }
          ></span>
        </div>
        <div
          className={
            isDark === false ? "formContactW__box" : "formContact__box"
          }
        >
          <label
            htmlFor="sujet"
            className={
              isDark === false ? "formContactW__label" : "formContact__label"
            }
          ></label>
          <input
            type="text"
            id="sujet"
            className={
              isDark === false ? "formContactW__input" : "formContact__input"
            }
            placeholder="Sujet"
            name="userSujet"
          />
          <span
            className={
              isDark === false ? "formContactW__valid" : "formContact__valid"
            }
          ></span>
        </div>
        <div
          className={
            isDark === false ? "formContactW__box" : "formContact__box"
          }
        >
          <label
            htmlFor="message"
            className={
              isDark === false ? "formContactW__label" : "formContact__label"
            }
          ></label>
          <textarea
            type="text"
            id="message"
            className={
              isDark === false
                ? "formContactW__textarea"
                : "formContact__textarea"
            }
            placeholder="Votre message"
            name="userMessage"
          />
          <span
            className={
              isDark === false ? "formContactW__valid" : "formContact__valid"
            }
            id="formContact__valid"
          ></span>
        </div>
        <div
          className={
            isDark === false ? "formContactW__div" : "formContact__div"
          }
        >
          <button
            className={
              isDark === false ? "formContactW__btn" : "formContact__btn"
            }
            onClick={emailSended}
          >
            Envoyer!
          </button>
          <div
            className={
              isDark === false ? "formContactW__divBtn" : "formContact__divBtn"
            }
          ></div>
        </div>
      </form>
      {modale === true ? <ModaleMail /> : ""}
    </>
  );
}
