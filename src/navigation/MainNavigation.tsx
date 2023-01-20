import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {CreateTaskScreen} from '../screens/CreateTaskScreen';
import {GreetingScreen} from '../screens/GreetingScreen';
import {MainScreen} from '../screens/MainScreen';

export type RootStackParamList = {
  MainTaskScreen: undefined;
  CreateTaskScreen: undefined;
  GreetingScreen: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();
export const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="GreetingScreen" component={GreetingScreen} />
        <Stack.Screen name="CreateTaskScreen" component={CreateTaskScreen} />
        <Stack.Screen name="MainTaskScreen" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
