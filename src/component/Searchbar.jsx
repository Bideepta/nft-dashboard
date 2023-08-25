import React, { useState } from 'react';
import './searchbar.css';

const Searchbar = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div style={{ padding: '0 16px', marginTop: '25px', marginLeft: '10px' }}>
      <input
        type="search"
        placeholder="Search.."
        value={searchText}
        onChange={handleSearch}
        className="search-input"
      />
      {/* <img src="/search.png" alt="search" /> */}
    </div>
  );
};

export default Searchbar;

