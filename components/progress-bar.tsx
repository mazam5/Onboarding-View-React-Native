import { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";

type ProgressBarProps = {
  duration?: number; // default 5000 ms
  color?: string;
};

export default function ProgressBar({
  duration = 5000,
  color = "#fff",
}: ProgressBarProps) {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    progress.setValue(0); // reset
    Animated.timing(progress, {
      toValue: 1,
      duration,
      useNativeDriver: false, // width animation requires false
    }).start();
  }, [duration, progress]);

  const width = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.bar, { backgroundColor: color, width }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 4,
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.3)", // track
    borderRadius: 2,
    overflow: "hidden",
  },
  bar: {
    height: "100%",
    borderRadius: 2,
  },
});
