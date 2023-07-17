import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Menu, MenuItem } from "react-native-material-menu";

const { width, height } = Dimensions.get("window");

const Dropdown = (props: any) => {
  const [visible, setVisible] = useState(false);
  const [selectedValue, setselectedValue] = useState("");

  return (
    <View style={[styles.menu, { ...props.menuStyle }]}>
      <Menu
        visible={visible}
        anchor={<Text>{selectedValue}</Text>}
        onRequestClose={() => {
          setVisible(false);
        }}
      >
        {props.value.map((value: string, index: number) => {
          return (
            <MenuItem
              key={index}
              onPress={() => {
                setVisible(false);
                setselectedValue(value);
                props.getValue(value);
              }}
            >
              {value}
            </MenuItem>
          );
        })}
      </Menu>
      <TouchableOpacity
        onPress={() => {
          setVisible(true);
        }}
      >
        <Image
          source={require("../assets/icons/select.png")}
          style={styles.select}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  menu: {
    flexDirection: "row",
    width: width * 0.15,
    height: 35,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    paddingTop: 3,
    paddingBottom: 3,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#444",
    marginBottom: 5,
    marginTop: 3,
  },

  select: {
    width: 20,
    height: 20,
  },
});
