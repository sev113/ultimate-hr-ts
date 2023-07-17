import { StyleSheet, Text, View, StatusBar } from "react-native";
import AppRoot from "./src/index";
import { Provider } from "react-redux";
import store from "redux/store";

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
