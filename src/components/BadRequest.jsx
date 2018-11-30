import React from 'react';
import '../css/NotFound.css';

const BadRequest = props => {
  const { errorMsg, errorStatus } = props.location.state;
  return (
    <div className="notFound">
      <h1>
        <span className="errorStatus">{errorStatus} Error:</span>{' '}
        <span className="errorMsg">{errorMsg}</span>
      </h1>
    </div>
  );
};

export default BadRequest;
