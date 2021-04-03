import React from "react";
import "./Promo.css";
import landingLogo from "../../images/landing-logo.svg";
import NavTab from '../NavTab/NavTab';

function Landing() {
  return (
    <section className="landing">
      <div className="landing__container">
        <div className="landing__wrap">
          <h1 className="landing__title">
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <p className="landing__info">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
        </div>
        <img
          className="landing__logo"
          src={landingLogo}
          alt="Логотип проекта Movies Explorer"
        ></img>
      </div>
      <NavTab />
    </section>
  );
}

export default Landing;