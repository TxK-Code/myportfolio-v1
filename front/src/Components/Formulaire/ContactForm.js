import React from "react";

export default function ContactForm() {
  return (
    <>
      <form action="" className="formContact">
        <div className="formContact__box">
          <label for="nom" className="formContact__label"></label>
          <input
            type="text"
            id="nom"
            className="formContact__input"
            placeholder="Nom"
          />
          <span className="formContact__valid"></span>
        </div>
        <div className="formContact__box">
          <label for="eMail" className="formContact__label"></label>
          <input
            type="text"
            id="eMail"
            className="formContact__input"
            placeholder="Email"
          />
          <span className="formContact__valid"></span>
        </div>
        <div className="formContact__box">
          <label for="sujet" className="formContact__label"></label>
          <input
            type="text"
            id="sujet"
            className="formContact__input"
            placeholder="Sujet"
          />
          <span className="formContact__valid"></span>
        </div>
        <div className="formContact__box">
          <label for="message" className="formContact__label"></label>
          <textarea
            type="text"
            id="message"
            className="formContact__textarea"
            placeholder="Votre message"
          />
          <span className="formContact__valid" id="formContact__valid"></span>
        </div>
        <div className="formContact__div">
          <button className="formContact__btn">Envoyer!</button>
          <div className="formContact__divBtn"></div>
        </div>
      </form>
    </>
  );
}
