import React from 'react';
import LottieView from 'lottie-react-native';
import {StyleSheet} from 'react-native';
export default function Loading() {
  return (
    <LottieView
      source={require('../assets/Loading.json')}
      autoPlay
      style={styles.loading}
    />
  );
}
const styles = StyleSheet.create({
  loading: {
    height: 45,
    width: 45,
  },
});
