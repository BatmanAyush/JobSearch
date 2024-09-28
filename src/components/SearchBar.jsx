import React from 'react';
import './SearchBar.css';
import logo from './company.png'

const SearchBar = ({ value, onChange, placeholder }) => {
  return (
    <div className="search-container">
      <div>
        <img src={logo} className='company-logo' />
      </div>

      <input
        type="text"
        className="search-input"
        value={value}
        onChange={onChange}
        placeholder={placeholder || 'Search...'}
      />
      
    </div>
  );
};

export default SearchBar;
