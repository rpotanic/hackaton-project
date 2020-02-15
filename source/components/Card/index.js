import React, { Component } from 'react';

import './style.scss'

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { item } = this.props;
        console.log(this.props)
        return (
            <div className='card-container' style={this.props.style}>
                <div className='photo'>123</div>
                <div className='info'>
                    <div>Фамилия: {item.surname}</div>
                    <div>Имя: {item.name}</div>
                    <div>Отчество: {item.lastname}</div>
                    <div>Стаж работы: {item.workAge}</div>
                </div>
            </div>
        )
    }
}