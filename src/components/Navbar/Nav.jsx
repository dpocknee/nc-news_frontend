import React from 'react';
import { Link } from '@reach/router';
import '../../css/Navbar/Nav.css';
import PropTypes from 'prop-types';

const Nav = props => {
  const { topics } = props;
  return (
    <nav>
      <ul>
        <li>
          <Link to="/articles">All Articles</Link>
        </li>
        {topics.map(topic => (
          <li key={`navTopics${topic.slug}`}>
            <Link to={`/topics/${topic.slug}/articles`}>{`${topic.title} Articles`}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  topics: PropTypes.arrayOf(
    PropTypes.shape({
      '​_id': PropTypes.string,
      slug: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
};

Nav.defaultProps = {
  topics: PropTypes.array,
};

export default Nav;
