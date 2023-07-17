import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const Radio = (props: any) => {
  const [checked, setChecked] = useState(0);
  return (
    <View style={styles.radio_wrapper}>
      {props.values.map((value: string, index: number) => {
        return (
          <TouchableOpacity
            key={index}
            style={styles.radio}
            onPress={() => {
              setChecked(index);
              props.getValue(value);
            }}
          >
            <View style={styles.radio_outer}>
              {index == checked ? (
                <View style={styles.radio_inner}></View>
              ) : null}
            </View>
            <Text style={styles.radio_text}>{value}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Radio;

const styles = StyleSheet.create({
  radio_wrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    flexWrap: "wrap",
    width: 250,
  },
  radio: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
  },
  radio_outer: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#1EA449",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  radio_inner: {
    width: 12,
    height: 12,
    borderRadius: 190,
    backgroundColor: "#F15B25",
  },
  radio_text: {
    textTransform: "capitalize",
  },
});
