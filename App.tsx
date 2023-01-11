import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {Root} from './src/navigation/MainNavigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <Root />
      </GestureHandlerRootView>
    </Provider>
  );
};

export default App;
