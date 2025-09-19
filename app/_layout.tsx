import { Quicksand_300Light } from "@expo-google-fonts/quicksand/300Light";
import { Quicksand_400Regular } from "@expo-google-fonts/quicksand/400Regular";
import { Quicksand_500Medium } from "@expo-google-fonts/quicksand/500Medium";
import { Quicksand_600SemiBold } from "@expo-google-fonts/quicksand/600SemiBold";
import { Quicksand_700Bold } from "@expo-google-fonts/quicksand/700Bold";
import { useFonts } from "@expo-google-fonts/quicksand/useFonts";
import { Stack, usePathname, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, useColorScheme } from "react-native";

export default function RootLayout() {
  const colorScheme = useColorScheme();

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
      if (pathname === "/did-you-know") {
        router.replace("/flash-card-screen");
      } else {
        router.replace("/did-you-know");
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [pathname]);

  if (!fontsLoaded) return null;

  return (
    <>
      <Stack
        screenOptions={{
          headerTintColor: "white",
          title: "UNLEARN OLD PATTERNS",
        }}
      >
        <Stack.Screen
          name="did-you-know"
          options={{ headerStyle: { backgroundColor: "#230A0F" } }}
        />
        <Stack.Screen
          name="flash-card-screen"
          options={{ headerStyle: { backgroundColor: "#051423" } }}
        />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  textTheme: {
    color: "white",
    fontFamily: "Quicksand_400Regular",
  },
});
