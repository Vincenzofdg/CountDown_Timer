import React from 'react';
import Provider from './Context/provider';

import Page from './page';

function App() {
  return (
    <Provider>
      <Page />
    </Provider>
  );
}

export default App;
