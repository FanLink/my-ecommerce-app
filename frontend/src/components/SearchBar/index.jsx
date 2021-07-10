import React, { useState } from 'react'
import "./SearchBar.css"

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const onSearchHandler = (e) => {
    e.preventDefault();
    console.log(searchTerm);
  }
  return (
    <div className="searchbar">
      <form className="searchbar__form">
        <input type="text" placeholder="Search for games"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} />
        <button className="btn btn-block" onClick={onSearchHandler}>
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  )
}

export default SearchBar
