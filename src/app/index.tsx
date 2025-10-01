import { Text, View } from "react-native";
import Main from "../screens/Main";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider>
      <Main />
    </SafeAreaProvider>
  );
}