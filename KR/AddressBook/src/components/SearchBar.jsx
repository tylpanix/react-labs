import React from 'react';

const SearchBar = ({ value, onChange }) => (
  <input
    className="search"
    type="text"
    placeholder="Search..."
    value={value}
    onChange={(e) => onChange(e.target.value)}
  />
);

export default SearchBar;
