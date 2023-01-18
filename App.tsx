import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {Root} from './src/navigation/MainNavigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';

const App = () => {
  // const [value, setValue] = useState(false);
  // return (
  //   <View>
  //     <Text>{`[value: ${value}]`}</Text>
  //     <CheckBox value={value} onValueChange={val => setValue(val)} />
  //     <TouchableOpacity onPress={() => console.log('ff')}>
  //       <View style={{backgroundColor: 'red'}}>
  //         <Text>GG</Text>
  //       </View>
  //     </TouchableOpacity>
  //   </View>
  // );
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
