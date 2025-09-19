import ProgressBar from "@/components/progress-bar";
import { useGetScreen1DataQuery } from "@/store/services/screen";
import { typography } from "@/styles/theme";
import {
  openBrowserAsync,
  WebBrowserPresentationStyle,
} from "expo-web-browser";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  const { data } = useGetScreen1DataQuery();

  const handleOpenBrowser = async (url: string) => {
    if (process.env.EXPO_OS !== "web") {
      await openBrowserAsync(url, {
        presentationStyle: WebBrowserPresentationStyle.AUTOMATIC,
      });
    }
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#230A0F",
      }}
    >
      <ProgressBar duration={5000} color="white" />
      <Image
        style={{ width: "100%", height: "40%" }}
        source={
          data?.image_url
            ? { uri: `${apiUrl}${data.image_url}` }
            : require("@/assets/images/partial-react-logo.png")
        }
      />
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            width: "30%",
            padding: 10,
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: "20%",
            justifyContent: "center",
          }}
        >
          <Text
            style={[
              typography.regular,
              { textAlign: "center", color: "#230A0F" },
            ]}
          >
            DID YOU KNOW?
          </Text>
        </View>
        <View
          style={{
            marginTop: 20,

            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Cause */}
          <View style={{ flex: 1, marginRight: 8 }}>
            <Text
              style={[
                typography.regular,
                {
                  color: "white",
                  backgroundColor: "#dc8ca5",
                  borderColor: "white",
                  borderWidth: 1,
                  padding: 12,
                  borderRadius: 12,
                  textAlign: "center",
                  fontSize: 16,
                },
              ]}
            >
              {data?.cause_and_effect?.cause}
            </Text>
          </View>

          {/* Separator */}
          <Text style={{ marginHorizontal: 4, fontSize: 18 }}>➰</Text>

          {/* Effect */}
          <View style={{ flex: 1, marginLeft: 8 }}>
            <Text
              style={[
                typography.regular,
                {
                  color: "white",
                  backgroundColor: "#dc8ca5",
                  borderColor: "white",
                  borderWidth: 1,
                  padding: 12,
                  borderRadius: 12,
                  textAlign: "center",
                  fontSize: 16,
                },
              ]}
            >
              {data?.cause_and_effect?.effect}
            </Text>
          </View>
        </View>

        <View style={{ flex: 1, justifyContent: "space-around" }}>
          <Text
            style={[
              { fontSize: 20, fontWeight: "bold", textAlign: "center" },
              typography.medium,
            ]}
          >
            {data?.title}
          </Text>
          <Text
            style={[{ fontSize: 20, textAlign: "center" }, typography.regular]}
          >
            {data?.content}
          </Text>
          {data?.citation?.url ? (
            <Pressable onPress={() => handleOpenBrowser(data.citation.url!)}>
              <Text
                style={[
                  typography.regular,
                  {
                    color: "yellow",
                    opacity: 0.9,
                    textAlign: "center",
                    textDecorationLine: "underline",
                    fontSize: 16,
                  },
                ]}
              >
                {data.citation.label}
              </Text>
            </Pressable>
          ) : null}
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: "60%",
    width: "100%",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    padding: 20,
    backgroundColor: "#e191a5",
    alignItems: "center",
  },
});
