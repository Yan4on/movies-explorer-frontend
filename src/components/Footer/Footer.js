import React from 'react';
import { Route} from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
            <Route exact path="/">
                <footer className="footer">
                    <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                    <div className="footer__copyright-links-container">
                        <p className="footer__copyright">© 2021</p>
                        <ul className="footer__links-container">
                            <li><a href="https://praktikum.yandex.ru/" className="footer__link" target="_blank" rel="noreferrer">Яндекс.Практикум</a></li>
                            <li><a href="https://github.com/yan4on" className="footer__link" target="_blank" rel="noreferrer">Github</a></li>
                            <li><a href="https://vk.com/yan.andreevich" className="footer__link" target="_blank" rel="noreferrer">Вконтакте</a></li>
                        </ul>
                    </div>
                </footer>
            </Route>
    );
}

export default Footer;