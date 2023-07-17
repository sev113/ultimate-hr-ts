import * as SplashScreen from "expo-splash-screen";
import { StyleSheet, View } from "react-native";
import AppRoot from "./src/index";
import { Provider } from "react-redux";
import store from "redux/store";

// SplashScreen.preventAutoHideAsync();
// setTimeout(SplashScreen.hideAsync, 1000);

export default function App() {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <AppRoot />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({});
