import React from 'react';
import '../../css/Navbar/SearchForm.css';
import PropTypes from 'prop-types';

const SearchForm = props => {
  const {
    searchbox, handleTextInput, searchButton, isSearching,
  } = props;
  return (
    <div className="searchForm">
      <form>
        <h3>Search Articles</h3>
        <input
          type="text"
          name="searchbox"
          id="searchbox"
          value={searchbox}
          onChange={handleTextInput}
        />
        {' '}
        <br />
        <button className="searchButton" type="submit" onClick={searchButton}>
          {isSearching ? 'Clear Search' : 'Search Articles'}
        </button>
      </form>
    </div>
  );
};

SearchForm.propTypes = {
  searchbox: PropTypes.string.isRequired,
  handleTextInput: PropTypes.func.isRequired,
  searchButton: PropTypes.func.isRequired,
  isSearching: PropTypes.bool.isRequired,
};

export default SearchForm;
