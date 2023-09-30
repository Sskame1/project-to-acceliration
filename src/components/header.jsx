import '../css/header.css'
import iconSearch from "../img/Search-icon.png"

import {  Link  } from 'react-router-dom'

const Header = () => {
    return (
        <>
        <div id="Header">
            <h1>Курсы</h1>
            <div id="search">
                <img src={iconSearch} />
                <input type="text" placeholder='Поиск' />
            </div>
            <div id='nav'>
                <Link to="/reviews" >Отзывы</Link>
                <Link to="/AboutUs" >О нас</Link>
                <Link to="/auth">Зарегистрироваться/войти</Link>
            </div>
        </div>
        <div id='HeaderLeft'>
            <h1><Link to="/">Logo</Link></h1>
            <p>Обучение</p>
            <Link to="/news">Новости</Link>
            <Link to="/courses">Курсы</Link>
            <Link to="/game">Игры</Link>
            <Link to="/task">Задачи</Link>
            <p>Форум</p>
            <Link to="/peeple">Пользователи</Link>
            <Link to="/forum">Форум</Link>
            <Link to="/chat">Чат</Link>
            <Link to="/reviews">Отзывы</Link>
        </div>
        </>
    )
}

export {  Header  }