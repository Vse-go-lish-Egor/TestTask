import React, {useEffect} from 'react';
import Azalia from '../assets/Azalia.svg';
import {ScreenBackgroundView} from '../components/styledComponents';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/MainNavigation';
import Loading from '../components/loading';
import {StyleSheet, View} from 'react-native';
export const GreetingScreen = () => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  useEffect(() => {
    setTimeout(() => navigate('MainTaskScreen'), 2500);
  }, [navigate]);
  return (
    <ScreenBackgroundView>
      <View style={styles.backgrounds}>
        <Azalia width={234} height={36} style={styles.logo} />
        <Loading />
      </View>
    </ScreenBackgroundView>
  );
};
const styles = StyleSheet.create({
  loading: {
    height: 20,
    width: 20,
  },
  logo: {
    marginBottom: 46,
  },
  backgrounds: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
