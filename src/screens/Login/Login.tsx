import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React, { useState } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { IStackRouteParamList } from "models";
import CustomTextInput from "components/CusTextInput";
import Button from "components/Button";

const { width, height } = Dimensions.get("window");

export type user = {
  username: string;
  password: string;
};

const user: user = {
  username: "sev",
  password: "123",
};

type MainRoutePropsType = StackScreenProps<IStackRouteParamList>;

const Login = ({ navigation }: MainRoutePropsType) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    username == user.username && password == user.password
      ? navigation.navigate("Home", {
          username: user.username,
        })
      : null;
  };
  return (
    <View style={styles.login_wrapper}>
      <Image
        source={require("../../assets/bg-img.png")}
        style={styles.bg_img}
      />
      <Image
        source={require("../../assets/Logo.png")}
        style={styles.img}
      ></Image>
      <Text style={styles.heading}>Ultimate HR Solution</Text>
      <Text style={styles.subHeading}>
        The Ultimate HR Solution is the key to everything.
      </Text>

      <CustomTextInput placeholder="Username" setValue={setUsername} />
      <CustomTextInput
        placeholder="Password"
        secureTextEntry
        setValue={setPassword}
      />
      <Button
        title="Log In"
        btnStyle={
          username == user.username && password == user.password
            ? { backgroundColor: "#1EA449", marginTop: 10 }
            : { backgroundColor: "#84d49f", marginTop: 10 }
        }
        textStyle={{ color: "#fff" }}
        disabled={
          username == user.username && password == user.password ? false : true
        }
        onPress={handleLogin}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  login_wrapper: {
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
    marginBottom: 5,
  },
  subHeading: {
    marginBottom: 10,
  },
});
