import React from "react";
import "./AboutMe.css";
import mainPhoto from "../../images/portfolio-main-pic.jpg";

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title" id="about-me-id">Студент</h2>
      <div className="about-me__content-container">
        <article className="about-me__text-container">
          <h3 className="about-me__name">Янис</h3>
          <p className="about-me__profession">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__description">
          c\components\Portfolio\Portfolio.js
  Line 10:21:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
  Line 15:21:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
  Line 20:21:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
          </p>
          <ul className="about-me__links-container">
            <li>
              <a
                href="https://vk.com/yan.andreevich"
                className="about-me__link"
                target="_blank"
                rel="noreferrer"
              >
                Вконтакте
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Yan4on"
                className="about-me__link"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </article>
        <img className="about-me__photo" src={mainPhoto} alt="Фото студента" />
      </div>
    </section>
  );
}

export default AboutMe;
