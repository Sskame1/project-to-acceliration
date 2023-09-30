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
                <Link >Отзывы</Link>
                <Link >О нас</Link>
                <button>Начать Обучение</button>
            </div>
        </div>
        <div id='HeaderLeft'>
            <h1>Logo</h1>
            <p>Обучение</p>
            <Link>Новости</Link>
            <Link>Курсы</Link>
            <Link>Игры</Link>
            <Link>Задачи</Link>
            <p>Форум</p>
            <Link>Пользователи</Link>
            <Link>Форум</Link>
            <Link>Чат</Link>
            <Link>Отзывы</Link>
        </div>
        </>
    )
}

export {  Header  }