import React from 'react';
import { Platform } from 'react-native';
import { Provider } from 'react-redux';

import Home from '../Home';
import { Header } from '../../components';
import configureStore from '../../store/configureStore';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Header />
    <Home />
  </Provider>
);

export default App;
