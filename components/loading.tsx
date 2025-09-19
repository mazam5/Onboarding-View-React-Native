import { Text, View } from "react-native";
const LoadingScreen = ({ bg }: { bg: string }) => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: bg,
    }}
  >
    <Text style={{ color: "white" }}>Loading...</Text>
  </View>
);

export default LoadingScreen;
