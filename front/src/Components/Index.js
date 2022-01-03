import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import IndexHeader from "../Components/Index/IndexHeader";
import IndexProjects from "../Components/Index/IndexProjects";
import Indexmyself from "../Components/Index/Indexmyself";

import FormContact from "../Components/Formulaire/ContactForm";

export default function Index() {
  return (
    <>
      <IndexHeader />
      <IndexProjects />
      <Indexmyself />
      <div className="index-contact">
        <div className="index-contact__header">
          <h1 className="index-contact__headertitle">Contactez-moi</h1>
          <p className="index-contact__headersubtitle">
            Une idée de projet ? Envie qu'on bosse ensemble ?<br />
            Je suis disponible et prêt pour une nouvelle aventure !
          </p>
        </div>
        <FormContact />
      </div>
    </>
  );
}
