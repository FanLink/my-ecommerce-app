import React, { useState } from 'react'
import "./style.css"

const SearchBar = ({onSearchSubnit}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const onSearchHandler = (e) => {
    e.preventDefault();
    onSearchSubnit(searchTerm);
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
