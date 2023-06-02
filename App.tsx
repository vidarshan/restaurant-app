import React from 'react';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import WebAppAuthContext from './AuthContext';

const App = () => {
  return (
    <Provider store={store}>
      <WebAppAuthContext />
    </Provider>
  );
};

export default App;
