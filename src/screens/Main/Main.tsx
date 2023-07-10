import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
import Button from "../../components/Button";
import { Login, SignUp } from "screens";
import { StackScreenProps } from "@react-navigation/stack";
import { IStackRouteParamList } from "models";

const { width, height } = Dimensions.get("window");

type MainRoutePropsType = StackScreenProps<IStackRouteParamList>;

const Main = ({ navigation }: MainRoutePropsType) => {
  return (
    <View style={styles.main}>
      <Image
        source={require("../../assets/bg-img.png")}
        style={styles.bg_img}
      />
      <View style={styles.main_wrapper}>
        <Image
          source={require("../../assets/Logo.png")}
          style={styles.img}
        ></Image>
        <Text style={styles.heading}>Ultimate HR Solution</Text>
        <Text style={styles.sub_heading}>
          The Ultimate HR Solution is the key to everything.
        </Text>
        <View style={styles.btnWrapper}>
          <Button
            title="Log In"
            btnStyle={{ backgroundColor: "#1EA449", marginBottom: 14 }}
            textStyle={{ color: "#fff" }}
            onPress={() => {
              navigation.navigate("Login");
            }}
          />
          <Button
            title="Register"
            btnStyle={{ borderColor: "#1EA449", borderWidth: 1 }}
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <Text>version 1.0</Text>
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  bg_img: {
    width: width,
    height: width * 0.5,
    position: "absolute",
    bottom: -10,
    opacity: 0.5,
  },
  main_wrapper: {
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  img: {
    width: 40,
    height: 70,
    marginBottom: 10,
  },
  btnWrapper: {
    margin: 15,
  },
  heading: {
    fontSize: 18,
    marginBottom: 8,
  },
  sub_heading: { marginBottom: 16 },
  footer: {
    position: "absolute",
    color: "#fff",
    alignItems: "center",
    bottom: 0,
  },
});
