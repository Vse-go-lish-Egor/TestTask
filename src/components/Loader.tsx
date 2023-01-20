import React from 'react';
import LottieView from 'lottie-react-native';
import {StyleSheet} from 'react-native';
interface props {
  width: number;
  height: number;
}
export default function Loading({width, height}: props) {
  return (
    <LottieView
      source={require('../../assets/Loading.json')}
      autoPlay
      style={styles(height, width).loading}
    />
  );
}
const styles = (width: number, height: number) =>
  StyleSheet.create({
    loading: {
      height: height,
      width: width,
    },
  });
