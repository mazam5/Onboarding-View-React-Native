import { useState } from "react";

import { Image } from "expo-image";
import { StyleSheet } from "react-native";

import { ExternalLink } from "@/components/external-link";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { TYPE_API_DATA } from "@/utils/TYPES";
// ! main bg-card #e191a5
export default function HomeScreen() {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  const [data, setData] = useState<TYPE_API_DATA | null>({
    cause_and_effect: {
      cause: "Mindful listening",
      effect: "Improved communication skills",
    },
    citation: {
      label: "Harvard Child Health",
      url: "https://www.health.harvard.edu",
    },
    content:
      "Regular playdates and group activities teach children empathy, cooperation, and conflict resolution through real experience.",
    image_url:
      "/images/processed_images_openai_paperboat/1863_Strengths_of_Having_Structure/69_0207cb9631_paperboat_1.jpg",
    title: "Social Skills Need Practice",
  });

  // useEffect(() => {
  //   fetchData();
  //   console.log(data);
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
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={
            data?.image_url
              ? { uri: `${apiUrl}${data.image_url}` }
              : require("@/assets/images/partial-react-logo.png")
          }
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="title">{data?.title}</ThemedText>
        <ThemedView
          style={{
            flexDirection: "row",
            borderRadius: 8, // use a number, not "px"
            borderWidth: 1, // you need borderWidth for borderColor to show
            borderColor: "white",
            padding: 8, // spacing inside the box
          }}
        >
          <ThemedText
            style={{
              color: "white",
              backgroundColor: "#dc8ca5",
              borderColor: "white",
              borderWidth: 1,
              padding: 6,
              marginRight: 4, // spacing between cause & effect
              borderRadius: 4,
            }}
          >
            {data?.cause_and_effect.cause}
          </ThemedText>

          <ThemedText
            style={{
              color: "white",
              backgroundColor: "#dc8ca5",
              borderColor: "white",
              borderWidth: 1,
              padding: 6,
              borderRadius: 4,
            }}
          >
            {data?.cause_and_effect.effect}
          </ThemedText>
        </ThemedView>

        <ThemedText style={{ textAlign: "center" }}>{data?.content}</ThemedText>

        {/* ✅ show external link if url exists */}
        {data?.citation?.url ? (
          <ExternalLink href={data.citation.url}>
            <ThemedText style={{ textAlign: "center" }} type="link">
              {data.citation.label}
            </ThemedText>
          </ExternalLink>
        ) : null}
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: "#cd6987",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    width: "100%",
    height: "100%",
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
