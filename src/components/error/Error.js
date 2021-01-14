import React from 'react';
import { Link } from 'react-router-dom';

import './Error.scss';

const Error = (props) => {
  return (
    <div className="error-page">
      <h1 className="error-header">Oops!</h1>
      <p className="error-msg">Something went wrong</p>
      <Link className="error-link" to={'/'}>
        <i className="icon-home"></i> Go Back to home page.
      </Link>
    </div>
  );
};

export default Error;
