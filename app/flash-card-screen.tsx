import LoadingScreen from "@/components/loading";
import ProgressBar from "@/components/progress-bar";
import { useGetScreen2DataQuery } from "@/store/services/screen";
import { typography } from "@/styles/theme";
import { API_URL } from "@/utils/config";
import { Button, Image, StyleSheet, Text, View } from "react-native";

const FlashCardScreen = () => {
  const { data, isLoading, isError, refetch } = useGetScreen2DataQuery();

  if (isLoading) {
    return <LoadingScreen bg="#051423" />;
  }

  if (isError) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#051423",
        }}
      >
        <Text style={{ color: "red" }}>
          Something went wrong. Please check your internet connection.
        </Text>
        <Button title="Retry" onPress={() => refetch()} />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#051423",
      }}
    >
      <ProgressBar duration={7000} color="white" />
      <Image
        style={{ width: "100%", height: "40%" }}
        source={
          data?.image_url
            ? { uri: `${API_URL}${data.image_url}` }
            : require("@/assets/images/partial-react-logo.png")
        }
      />
      <View style={styles.container}>
        <View
          style={[
            { borderLeftColor: "white", borderLeftWidth: 2, padding: 10 },
          ]}
        >
          <Text
            style={[
              { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
              typography.medium,
            ]}
          >
            {data?.title}
          </Text>
          <Text style={[{ fontSize: 16 }, typography.regular]}>
            {data?.content}
          </Text>
        </View>
      </View>
    </View>
  );
};
export default FlashCardScreen;
const styles = StyleSheet.create({
  container: {
    height: "60%",
    width: "100%",
    padding: 20,
    backgroundColor: "#4b789b",
  },
});
