import React from 'react';

import {Link} from 'react-router-dom'

import './style.scss';

const Table = props => (<div className='table-container'>
    <table className='table'>
      <thead className='thead'>
        <tr className='tr'>
          {props.options.map((option, i) => (
            <th
              className={`th${option.className ? ` ${option.className}` : ''}`}
              key={i}
            >
              {option.value}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className='tbody'>
        {props.rows.map(item => (
          <tr
            className='tr'
            key={item.id}
          >
            {props.options.map((option, j) => (
              <td
                className={`td${
                  option.className ? ` ${option.className}` : ''
                }`}
                key={`${item.id}-${j}`}
              >
                {option.text ? <Link to={option.link}>{option.text}</Link> : item[option.name]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>);

export default Table;
