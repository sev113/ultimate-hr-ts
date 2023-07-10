import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");

const Button = (props: any) => {
  return (
    <TouchableOpacity
      style={[styles.btn, { ...props.btnStyle }]}
      onPress={props.onPress}
      disabled={props.disabled}
    >
      <Text style={[{ ...props.textStyle }]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    width: width * 0.6,
    alignItems: "center",
    borderRadius: 5,
    padding: 10,
    // margin: 5,
  },
});
