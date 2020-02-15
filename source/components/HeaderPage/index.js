import React from 'react'

import './style.scss'

const HeaderPage = (props) => (
    <div className={`header-page${props.className ? props.className : ''}`}>
        <div className='header'>{props.label}</div>
        {props.children ? <div>{props.children}</div> : null}
    </div>
   
)

export default HeaderPage