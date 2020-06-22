import React from "react";
import "./select.css";

const Select = () => {
  return (
    <>
      <select name="language" id="language">
        <option value="en">EN</option>
        <option value="ru">RU</option>
        <option value="be">BE</option>
      </select>
    </>
  );
};

export default Select;
