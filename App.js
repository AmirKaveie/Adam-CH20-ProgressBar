import React, { useState, useEffect } from "react";
import { SafeAreaView, View } from "react-native";
import ProgressBar from "./ProgressBar";
import styles from "./styles";

export default function MeasuringProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    function updateProgress() {
      setProgress(currentProgress => {
        if (currentProgress < 1) {
          setTimeout(updateProgress, 300);
          return currentProgress + 0.01;
        }
        return currentProgress;
      });
    }
    updateProgress();
  }, []);
  return (
    <View style={styles.container}>
      <ProgressBar progress={progress} />
    </View>
  );
}