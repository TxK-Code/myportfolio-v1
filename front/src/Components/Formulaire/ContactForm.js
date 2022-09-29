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

  return (
    <>
      <form ref={form} action="" className="formContact" onSubmit={sendMail}>
        <div className="formContact__box">
          <label htmlFor="nom" className="formContact__label"></label>
          <input
            type="text"
            id="nom"
            className="formContact__input"
            placeholder="Nom"
            name="userName"
          />
          <span className="formContact__valid"></span>
        </div>
        <div className="formContact__box">
          <label htmlFor="eMail" className="formContact__label"></label>
          <input
            type="text"
            id="eMail"
            className="formContact__input"
            placeholder="Email"
            name="userMail"
          />
          <span className="formContact__valid"></span>
        </div>
        <div className="formContact__box">
          <label htmlFor="sujet" className="formContact__label"></label>
          <input
            type="text"
            id="sujet"
            className="formContact__input"
            placeholder="Sujet"
            name="userSujet"
          />
          <span className="formContact__valid"></span>
        </div>
        <div className="formContact__box">
          <label htmlFor="message" className="formContact__label"></label>
          <textarea
            type="text"
            id="message"
            className="formContact__textarea"
            placeholder="Votre message"
            name="userMessage"
          />
          <span className="formContact__valid" id="formContact__valid"></span>
        </div>
        <div className="formContact__div">
          <button className="formContact__btn" onClick={emailSended}>
            Envoyer!
          </button>
          <div className="formContact__divBtn"></div>
        </div>
      </form>
      {modale === true ? <ModaleMail /> : ""}
    </>
  );
}
