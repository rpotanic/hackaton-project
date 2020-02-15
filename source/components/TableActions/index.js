import React from 'react';
import SVG from 'react-svg';

import './style.scss';

import activateIcon from './icons/activate.svg';
import deleteIcon from './icons/delete.svg';
import editIcon from './icons/edit.svg';
import infoIcon from './icons/info.svg';
import banIcon from './icons/ban.svg';



const icons = {
  activate: activateIcon,
  delete: deleteIcon,
  edit: editIcon,
  info: infoIcon,
  ban: banIcon
};

class TableActions extends React.Component {
  static defaultProps = {
    onClick: () => false
  };

  @bind
  getItemClassName(cn) {
    if (cn) {
      return `Actions-item ${cn}`;
    }
    return 'Actions-item';
  };

  getItemOnClick(fn) {
    return fn || (() => false);
  }

  render() {
    const { items } = this.props;

    return (
      <div className='Actions'>
        {items.map((item) => (
          <div
            className={this.getItemClassName(item.className)}
            key={item.icon}
            onClick={this.getItemOnClick(item.onClick)}
          >
            <SVG src={icons[item.icon]} />
          </div>
        ))}
      </div>
    );
  }
}

export default TableActions;
