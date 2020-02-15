import React, {Component} from 'react';

import './style.scss'

export default class SideBar extends Component {
    state={

    }

    render(){
        return <div className='sidebar'>
            <div className='link'>Вакансии</div>
            <div className='link'>Работники</div>
        </div>
    }
}