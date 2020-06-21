import React from 'react';
import './form.css';

const Form = () => {
  return (
    <form className="form">

      <div><input type="text" className="search-field" placeholder="Search city" /></div>
      <div><button type="submit" className="btn btn-submit">search</button></div>

    </form>
  )
};

export default Form;
