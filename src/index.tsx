import { View, ViewProps, Text } from "react-native";
import { RootNavigator } from "./navigator";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import { PaperProvider } from "react-native-paper";

const AppRoot = () => {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaProvider>
        <PaperProvider>
          <RootNavigator />
        </PaperProvider>
      </SafeAreaProvider>
    </View>
  );
};

export default AppRoot;
