import React from 'react';
import { Link } from '@reach/router';
import '../../css/navbar/Nav.css';

const Nav = props => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/articles">All Articles</Link>
        </li>
        {props.topics.map(topic => (
          <li key={`navTopics${topic.slug}`}>
            <Link to={`/topics/${topic.slug}/articles`}>
              {topic.title} Articles
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
