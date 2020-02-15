import React, { Component } from 'react';

import './style.scss';

export default class Button extends Component {


    getClassName=()=>{
        let className= 'button ';
        if (this.props.className) className += this.props.className;

        return className;
    }


    render() {
        return (
            <div className={this.getClassName()}>
                <div className='label' onClick={this.props.onClick}>{this.props.label}</div>
            </div>
        )
    }
}