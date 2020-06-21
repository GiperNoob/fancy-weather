import React from 'react';
import './select.css';

const Select = () => {
  return (
    <React.Fragment>
      <select name="language" id="language">
        <option value="en">EN</option>
        <option value="ru">RU</option>
        <option value="be">BE</option>
      </select>
    </React.Fragment>
  )
};

export default Select;
