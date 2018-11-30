import React from 'react';
import '../../css/Navbar.css';

const SearchForm = props => {
  return (
    <form className="searchForm">
      <h3>Search Articles</h3>
      <input
        type="text"
        name="searchbox"
        id="searchbox"
        value={props.searchbox}
        onChange={props.handleTextInput}
      />{' '}
      <br />
      <button
        className="searchButton"
        type="submit"
        onClick={props.searchButton}
      >
        {props.isSearching ? 'Clear Search' : 'Search Articles'}
      </button>
    </form>
  );
};

export default SearchForm;
