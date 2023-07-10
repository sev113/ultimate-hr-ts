import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
import CustomTextInput from "./CusTextInput";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const DatePicker = () => {
  return (
    <View style={{ position: "relative" }}>
      <CustomTextInput inputStyle={{ width: width * 0.8 }} />
      <Image
        style={styles.input_icon}
        source={require("../assets/icons/calendar.png")}
      />
    </View>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  input_icon: {
    width: 20,
    height: 20,
    position: "absolute",
    right: 18,
    top: 10,
  },
});
