import React, {useEffect} from 'react';
import Azalia from '../../assets/svgImage/azalia_logo.svg';
import {ScreenBackgroundView, SizedBox} from '../components/styledComponents';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/MainNavigation';
import Loading from '../components/Loader';

export const GreetingScreen = () => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  useEffect(() => {
    setTimeout(() => navigate('MainTaskScreen'), 2500);
  }, [navigate]);
  return (
    <ScreenBackgroundView justifyContent="center" alignItems="center">
      <Azalia width={234} height={36} />
      <SizedBox height={46} />
      <Loading height={45} width={45} />
    </ScreenBackgroundView>
  );
};
