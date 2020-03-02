import React from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';

import Home from './src/containers/Home';
import { Header } from './src/components';
import configureStore from './src/store/configureStore';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <View>
      <Header />
      <Home />
    </View>
  </Provider>
);

export default App;
