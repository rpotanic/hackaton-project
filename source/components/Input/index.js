import React from 'react';

import './style.scss';

const getClassName = props => {
  let className = 'Input';
  if (props.className) className += ` ${props.className}`;
  if (props.inputProps.value || props.inputProps.value === 0)
    className += ' Input_active';
  return className;
};

const getInputTag = (props, id) => {
  const Component = props.inputComponent || 'input';

  if (props.type !== 'textarea')
    return (
      <Component
        {...props.inputProps}
        className='Input__TextField'
        id={id}
        maxLength={props.maxLength}
        style={props.style}
        type={props.type}
      />
    );
  return (
    <textarea
      className='Input__TextField TextArea'
      cols={props.cols}
      id={id}
      maxLength={props.maxLength}
      rows={props.rows}
      style={props.style}
      {...props.inputProps}
    />
  );
};

const Input = props => (
  <div className={getClassName(props)}>
    {getInputTag(props, props.label)}
    <label htmlFor={props.label}>{props.label}</label>
  </div>
);

export default Input;
