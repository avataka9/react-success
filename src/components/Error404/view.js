import React from 'react';

export const Error404View = ({ location }) => {
  return (
    <div>
      <h3>No match for <code>{location.pathname}</code></h3>
      error 404
    </div>
  );
};