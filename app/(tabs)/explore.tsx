import { Image } from "expo-image";
import { StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { TYPE_FLASHCARD } from "@/utils/TYPES";
import { useState } from "react";
// #051423
// #4b789b
export default function TabTwoScreen() {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  const [data, setData] = useState<TYPE_FLASHCARD | null>({
    content:
      "Regular playdates and group activities teach children empathy, cooperation, and conflict resolution through real experience.",
    image_url:
      "/images/processed_images_openai_paperboat/1863_Strengths_of_Having_Structure/69_0207cb9631_paperboat_1.jpg",
    title: "Social Skills Need Practice",
  });
  // useEffect(() => {
  //   fetchData();
  // }, []);
  const fetchData = async () => {
    try {
      const response = await fetch(`${apiUrl}/did_you_know`);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
      console.log(error);
    }
  };
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Image
          source={
            data?.image_url
              ? { uri: `${apiUrl}${data.image_url}` }
              : require("@/assets/images/partial-react-logo.png")
          }
          style={styles.headerImage}
        />
      }
    >
      <ThemedView>
        <ThemedText type="title">{data?.title}</ThemedText>
        <ThemedText>{data?.content}</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
