import React from 'react';
import './Portfolio.css';
import portfolioLinklImg from '../../images/portfolio-link-img.png';

function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__list">
                <li><a href="https://yan4on.github.io/how-to-learn/" className="portfolio__link-container" target="_blank" rel="noreferrer">
                    <p className="portfolio__link-text">Статичный сайт</p>
                    <img className="portfolio__link-icon" src={portfolioLinklImg} alt="Иконка ссылки" />
                </a></li>
                <span className="portfolio__line" />
                <li><a href="https://yan4on.github.io/russian-travel/" className="portfolio__link-container" target="_blank" rel="noreferrer">
                    <p className="portfolio__link-text">Адаптивный сайт</p>
                    <img className="portfolio__link-icon" src={portfolioLinklImg} alt="Иконка ссылки" />
                </a></li>
                <span className="portfolio__line" />
                <li><a href="https://yan4on.github.io/mesto/" className="portfolio__link-container" target="_blank" rel="noreferrer">
                    <p className="portfolio__link-text">Одностраничное приложение</p>
                    <img className="portfolio__link-icon" src={portfolioLinklImg} alt="Иконка ссылки" />
                </a></li>
            </ul>

        </section>
    );
}

export default Portfolio;