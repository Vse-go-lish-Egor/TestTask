import React from 'react';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {Root} from './navigation/MainNavigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={styles.rootView}>
        <Root />
      </GestureHandlerRootView>
    </Provider>
  );
};
const styles = StyleSheet.create({
  rootView: {
    flex: 1,
  },
});
export default App;
