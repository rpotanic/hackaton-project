import React, { Component } from 'react';

import './style.scss'

export default class Table extends Component {
    render() {
        const { option } = this.props;
        return (
            <div className='table-container'>
                <table className='table'>
                    <thead>{option.map((item) => <th>{item}</th>)}</thead>
                    <tbody>
                        {this.props.data}
                    </tbody>
                </table>
            </div>
        )
    }
}