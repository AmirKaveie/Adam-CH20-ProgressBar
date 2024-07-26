import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ProgressBarComponent, progressProps } from './ProgressBarComponent';

const ProgressLabel = ({ progress }) => (
  <Text>{`${Math.round(progress * 100)}%`}</Text>
);

const ProgressBar = ({ progress }) => (
  <View style={styles.container}>
    <ProgressBarComponent {...progressProps} progress={progress} />
    <ProgressLabel progress={progress} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  }
});

export default ProgressBar;
