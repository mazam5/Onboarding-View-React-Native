import { store } from "@/store/store";
import { Quicksand_300Light } from "@expo-google-fonts/quicksand/300Light";
import { Quicksand_400Regular } from "@expo-google-fonts/quicksand/400Regular";
import { Quicksand_500Medium } from "@expo-google-fonts/quicksand/500Medium";
import { Quicksand_600SemiBold } from "@expo-google-fonts/quicksand/600SemiBold";
import { Quicksand_700Bold } from "@expo-google-fonts/quicksand/700Bold";
import { useFonts } from "@expo-google-fonts/quicksand/useFonts";
import { Stack, usePathname, useRouter } from "expo-router";
import { useEffect } from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";

export default function RootLayout() {
  const router = useRouter();
  const pathname = usePathname();

  const [fontsLoaded] = useFonts({
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      if (pathname === "/") {
        router.replace("/flash-card-screen");
      } else {
        router.replace("/");
      }
    }, 8000);

    return () => clearInterval(timer);
  }, [pathname, router]);

  if (!fontsLoaded) return null;

  return (
    <Provider store={store}>
      <Stack
        screenOptions={{
          headerTintColor: "white",
          title: "UNLEARN OLD PATTERNS",
        }}
      >
        <Stack.Screen
          name="index"
          options={{ headerStyle: { backgroundColor: "#230A0F" } }}
        />
        <Stack.Screen
          name="flash-card-screen"
          options={{ headerStyle: { backgroundColor: "#051423" } }}
        />
      </Stack>
      <StatusBar />
    </Provider>
  );
}
