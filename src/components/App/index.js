import React, { PropTypes } from 'react';

function App({ children }) {
  return (
    <div>
      <h1>
        Ivo's
      </h1>
      <div>
        {children}
      </div>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
