import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './MoviesCard.css';

import movieOne from '../../images/movie1.png';
import movieTwo from '../../images/movie2.png';
import movieThree from '../../images/movie3.png';
import movieFour from '../../images/movie4.png';
import movieFive from '../../images/movie5.png';
import movieSix from '../../images/movie6.png';
import movieSeven from '../../images/movie7.png';
import movieEight from '../../images/movie8.png';
import movieNine from '../../images/movie9.png';
import movieTen from '../../images/movie10.png';
import movieEleven from '../../images/movie11.png';
import movieTwelve from '../../images/movie12.png';
import movieThirteen from '../../images/movie13.png';
import movieFourteen from '../../images/movie14.png';
import movieFifteen from '../../images/movie15.png';
import movieSixteen from '../../images/movie16.png';

import likeInactive from '../../images/like-inactive.png';
import likeActive from '../../images/like-active.png';
import btnDelMovie from '../../images/btn-del-movie.svg';


function MoviesCard() {
    return (
        <>
            <Switch >
                <Route path="/movies">
                    <figure className="movies-card">
                        <img className="movies-card__image" src={movieOne} alt="33 слова о дизайн" />
                        <figcaption className="movies-card__description-like-container">
                            <p className="movies-card__description">33 слова о дизайне</p>
                            <img type="button" className="movies-card__like-button" src={likeActive} alt="Иконка кнопки сохранения фильма"></img>
                        </figcaption>
                        <div className="movies__line"></div>
                        <p className="movies-card__duration">1ч 42м</p>
                    </figure>
                    <figure className="movies-card">
                        <img className="movies-card__image" src={movieTwo} alt="Киноальманах «100 лет дизайна»" />
                        <figcaption className="movies-card__description-like-container">
                            <p className="movies-card__description">Киноальманах «100 лет дизайна»</p>
                            <img type="button" className="movies-card__like-button" src={likeInactive} alt="Иконка кнопки сохранения фильма"></img>
                        </figcaption>
                        <div className="movies__line"></div>
                        <p className="movies-card__duration">1ч 42м</p>
                    </figure>
                    <figure className="movies-card">
                        <img className="movies-card__image" src={movieThree} alt="В погоне за Бенкси" />
                        <figcaption className="movies-card__description-like-container">
                            <p className="movies-card__description">33 слова о дизайне</p>
                            <img type="button" className="movies-card__like-button" src={likeActive} alt="В погоне за Бенкси"></img>
                        </figcaption>
                        <div className="movies__line"></div>
                        <p className="movies-card__duration">1ч 42м</p>
                    </figure>
                    <figure className="movies-card">
                        <img className="movies-card__image" src={movieFour} alt="Баския: Взрыв реальности" />
                        <figcaption className="movies-card__description-like-container">
                            <p className="movies-card__description">33 слова о дизайне</p>
                            <img type="button" className="movies-card__like-button" src={likeInactive} alt="Баския: Взрыв реальности"></img>
                        </figcaption>
                        <div className="movies__line"></div>
                        <p className="movies-card__duration">1ч 42м</p>
                    </figure>
                    <figure className="movies-card">
                        <img className="movies-card__image" src={movieFive} alt="Бег это свобода" />
                        <figcaption className="movies-card__description-like-container">
                            <p className="movies-card__description">Бег это свобода</p>
                            <img type="button" className="movies-card__like-button" src={likeInactive} alt="Иконка кнопки сохранения фильма"></img>
                        </figcaption>
                        <div className="movies__line"></div>
                        <p className="movies-card__duration">1ч 42м</p>
                    </figure>
                    <figure className="movies-card">
                        <img className="movies-card__image" src={movieSix} alt="Книготорговцы" />
                        <figcaption className="movies-card__description-like-container">
                            <p className="movies-card__description">Книготорговцы</p>
                            <img type="button" className="movies-card__like-button" src={likeActive} alt="Иконка кнопки сохранения фильма"></img>
                        </figcaption>
                        <div className="movies__line"></div>
                        <p className="movies-card__duration">1ч 42м</p>
                    </figure>
                    <figure className="movies-card">
                        <img className="movies-card__image" src={movieSeven} alt="Когда я думаю о Германии ночью" />
                        <figcaption className="movies-card__description-like-container">
                            <p className="movies-card__description">Когда я думаю о Германии ночью</p>
                            <img type="button" className="movies-card__like-button" src={likeInactive} alt="Иконка кнопки сохранения фильма"></img>
                        </figcaption>
                        <div className="movies__line"></div>
                        <p className="movies-card__duration">1ч 42м</p>
                    </figure>
                    <figure className="movies-card">
                        <img className="movies-card__image" src={movieEight} alt="Gimme Danger: История Игги и The Stooges" />
                        <figcaption className="movies-card__description-like-container">
                            <p className="movies-card__description">Gimme Danger: История Игги и The Stooges</p>
                            <img type="button" className="movies-card__like-button" src={likeActive} alt="Иконка кнопки сохранения фильма"></img>
                        </figcaption>
                        <div className="movies__line"></div>
                        <p className="movies-card__duration">1ч 42м</p>
                    </figure>
                    <figure className="movies-card">
                        <img className="movies-card__image" src={movieNine} alt="Дженис: Маленькая девочка грустит" />
                        <figcaption className="movies-card__description-like-container">
                            <p className="movies-card__description">Дженис: Маленькая девочка грустит</p>
                            <img type="button" className="movies-card__like-button" src={likeInactive} alt="Иконка кнопки сохранения фильма"></img>
                        </figcaption>
                        <div className="movies__line"></div>
                        <p className="movies-card__duration">1ч 42м</p>
                    </figure>
                    <figure className="movies-card">
                        <img className="movies-card__image" src={movieTen} alt="Соберись перед прыжком" />
                        <figcaption className="movies-card__description-like-container">
                            <p className="movies-card__description">Соберись перед прыжком</p>
                            <img type="button" className="movies-card__like-button" src={likeActive} alt="Иконка кнопки сохранения фильма"></img>
                        </figcaption>
                        <div className="movies__line"></div>
                        <p className="movies-card__duration">1ч 42м</p>
                    </figure>
                    <figure className="movies-card">
                        <img className="movies-card__image" src={movieEleven} alt="Пи Джей Харви: A dog called money" />
                        <figcaption className="movies-card__description-like-container">
                            <p className="movies-card__description">Пи Джей Харви: A dog called money</p>
                            <img type="button" className="movies-card__like-button" src={likeActive} alt="Иконка кнопки сохранения фильма"></img>
                        </figcaption>
                        <div className="movies__line"></div>
                        <p className="movies-card__duration">1ч 42м</p>
                    </figure>
                    <figure className="movies-card">
                        <img className="movies-card__image" src={movieTwelve} alt="По волнам: Искусство звука в кино" />
                        <figcaption className="movies-card__description-like-container">
                            <p className="movies-card__description">По волнам: Искусство звука в кино</p>
                            <img type="button" className="movies-card__like-button" src={likeInactive} alt="Иконка кнопки сохранения фильма"></img>
                        </figcaption>
                        <div className="movies__line"></div>
                        <p className="movies-card__duration">1ч 42м</p>
                    </figure>
                </Route>
                <Route path="/saved-movies">
                    <figure className="movies-card">
                        <img className="movies-card__image" src={movieThirteen} alt="Рудбой" />
                        <figcaption className="movies-card__description-like-container">
                            <p className="movies-card__description">Рудбой</p>
                            <img type="button" className="movies-card__del-button" src={btnDelMovie} alt="Иконка кнопки сохранения фильма"></img>
                        </figcaption>
                        <div className="movies__line"></div>
                        <p className="movies-card__duration">1ч 42м</p>
                    </figure>
                    <figure className="movies-card">
                        <img className="movies-card__image" src={movieFourteen} alt="Скейт — кухня" />
                        <figcaption className="movies-card__description-like-container">
                            <p className="movies-card__description">Скейт —кухня</p>
                            <img type="button" className="movies-card__del-button" src={btnDelMovie} alt="Иконка кнопки сохранения фильма"></img>
                        </figcaption>
                        <div className="movies__line"></div>
                        <p className="movies-card__duration">1ч 42м</p>
                    </figure>
                    <figure className="movies-card">
                        <img className="movies-card__image" src={movieFifteen} alt="Война искусств" />
                        <figcaption className="movies-card__description-like-container">
                            <p className="movies-card__description">Война искусств</p>
                            <img type="button" className="movies-card__del-button" src={btnDelMovie} alt="Иконка кнопки сохранения фильма"></img>
                        </figcaption>
                        <div className="movies__line"></div>
                        <p className="movies-card__duration">1ч 42м</p>
                    </figure>
                    <figure className="movies-card">
                        <img className="movies-card__image" src={movieSixteen} alt="Зона" />
                        <figcaption className="movies-card__description-like-container">
                            <p className="movies-card__description">Зона</p>
                            <img type="button" className="movies-card__del-button" src={btnDelMovie} alt="Иконка кнопки сохранения фильма"></img>
                        </figcaption>
                        <div className="movies__line"></div>
                        <p className="movies-card__duration">1ч 42м</p>
                    </figure>
                </Route>
            </Switch>
        </>
    );
}

export default MoviesCard;