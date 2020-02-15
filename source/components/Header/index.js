import React from 'react';

import './style.scss'

import logo from '../../img/mainLogo.png'

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <img src={logo} style={{ width: '150px', height: '40px' }} />
                <div className='rigth'>
                    <div>
                        Вход
                    </div>
                    <div>
                        Регистрация
                    </div>
                </div>
            </header>
        )
    }
}