import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Home = ({ route }: any) => {
  const { username } = route.params;
  return (
    <View style={styles.home}>
      <View style={styles.heading}>
        <Text style={{ fontSize: 30 }}>Welcome</Text>
        <Text style={{ fontWeight: "bold", color: "#333", fontSize: 25 }}>
          {username}
        </Text>
        <Text style={{ fontSize: 30 }}>🥸</Text>
      </View>
      <View style={styles.menu}>
        <Text>Home</Text>
        <Text>Services</Text>
        <Text>About Us</Text>
        <Text>Contact Us</Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  menu: {
    // flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  heading: {
    alignItems: "center",
    marginBottom: 30,
  },
});
