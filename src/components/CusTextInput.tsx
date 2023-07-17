import { StyleSheet, View, TextInput, Dimensions } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");

const CustomTextInput = (props: any) => {
  return (
    <View style={[styles.text_input, { ...props.inputStyle }]}>
      <TextInput
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        style={{ ...props.inputTextStyle }}
        onChangeText={props.setValue}
        value={props.value}
        defaultValue={props.defaultValue}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  text_input: {
    width: width * 0.6,
    padding: 10,
    paddingTop: 3,
    paddingBottom: 3,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#444",
    marginBottom: 5,
    marginTop: 3,
  },
});
