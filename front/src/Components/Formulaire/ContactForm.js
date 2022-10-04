import React, { useRef, useState } from "react";
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

  return (
    <>
      <form
        ref={form}
        action=""
        className={whatIsSL === "false" ? "formContactW" : "formContact"}
        onSubmit={sendMail}
      >
        <div
          className={
            whatIsSL === "false" ? "formContactW__box" : "formContact__box"
          }
        >
          <label
            htmlFor="nom"
            className={
              whatIsSL === "false"
                ? "formContactW__label"
                : "formContact__label"
            }
          ></label>
          <input
            type="text"
            id="nom"
            className={
              whatIsSL === "false"
                ? "formContactW__input"
                : "formContact__input"
            }
            placeholder="Nom"
            name="userName"
          />
          <span
            className={
              whatIsSL === "false" ? "formContact__valid" : "formContact__valid"
            }
          ></span>
        </div>
        <div
          className={
            whatIsSL === "false" ? "formContactW__box" : "formContact__box"
          }
        >
          <label
            htmlFor="eMail"
            className={
              whatIsSL === "false"
                ? "formContactW__label"
                : "formContact__label"
            }
          ></label>
          <input
            type="text"
            id="eMail"
            className={
              whatIsSL === "false"
                ? "formContactW__input"
                : "formContact__input"
            }
            placeholder="Email"
            name="userMail"
          />
          <span
            className={
              whatIsSL === "false" ? "formContact__valid" : "formContact__valid"
            }
          ></span>
        </div>
        <div
          className={
            whatIsSL === "false" ? "formContactW__box" : "formContact__box"
          }
        >
          <label
            htmlFor="sujet"
            className={
              whatIsSL === "false"
                ? "formContactW__label"
                : "formContact__label"
            }
          ></label>
          <input
            type="text"
            id="sujet"
            className={
              whatIsSL === "false"
                ? "formContactW__input"
                : "formContact__input"
            }
            placeholder="Sujet"
            name="userSujet"
          />
          <span
            className={
              whatIsSL === "false"
                ? "formContactW__valid"
                : "formContact__valid"
            }
          ></span>
        </div>
        <div
          className={
            whatIsSL === "false" ? "formContactW__box" : "formContact__box"
          }
        >
          <label
            htmlFor="message"
            className={
              whatIsSL === "false"
                ? "formContactW__label"
                : "formContact__label"
            }
          ></label>
          <textarea
            type="text"
            id="message"
            className={
              whatIsSL === "false"
                ? "formContactW__textarea"
                : "formContact__textarea"
            }
            placeholder="Votre message"
            name="userMessage"
          />
          <span
            className={
              whatIsSL === "false"
                ? "formContactW__valid"
                : "formContact__valid"
            }
            id="formContact__valid"
          ></span>
        </div>
        <div
          className={
            whatIsSL === "false" ? "formContactW__div" : "formContact__div"
          }
        >
          <button
            className={
              whatIsSL === "false" ? "formContactW__btn" : "formContact__btn"
            }
            onClick={emailSended}
          >
            Envoyer!
          </button>
          <div
            className={
              whatIsSL === "false"
                ? "formContactW__divBtn"
                : "formContact__divBtn"
            }
          ></div>
        </div>
      </form>
      {modale === true ? <ModaleMail /> : ""}
    </>
  );
}
