import React from 'react';
import PropTypes from 'prop-types';
import Toptitle from './Toptitle';

const Sidebar = props => {
  return (
    <nav>
      <Toptitle />
      <li>Articles</li>
      <ul>
        <li>Most Recent</li>
        <li>Most Popular</li>
      </ul>
      <li>Topics</li>
      <ul>
        <li>Football</li>
        <li>Coding</li>
        <li>etc.</li>
      </ul>
      <li>Users</li>
      <form>
        <h3>Search:</h3>
        <input type="text" name="" id="" /> <br />
        <input type="checkbox" name="articleSearch" id="articleSearch" />
        <label htmlFor="articleSearch">Search articles</label>
        <br />
        <input type="checkbox" name="commentsSearch" id="commentsSearch" />
        <label htmlFor="commentsSearch">Search comments</label>
        <br />
        <input type="checkbox" name="usersSearch" id="usersSearch" />
        <label htmlFor="usersSearch">Search users</label>
        <br />
        <button type="submit">Search</button>
      </form>

      <li />
    </nav>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
