import { StyleSheet, Text, View, StatusBar } from "react-native";
import AppRoot from "./src/index";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <AppRoot />
      {/* <Text>Hello World</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({});
