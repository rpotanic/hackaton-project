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
            <div className='card-container'>
                <div className='title'>Мои оферты</div>
                <div className='content-block'>
                    div
                </div>
            </div>
        )
    }
}