import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const Registered = () => {
  const user = useSelector((state: any) => state.user);

  return (
    <View style={styles.registeredWrapper}>
      <Text style={{ fontSize: 20 }}>
        You have been successfully registered.
      </Text>
      <Text>Please check these facts!</Text>
      <View style={styles.dataWrapper}>
        <Text style={styles.heading}>Personal Information</Text>
        <View style={styles.info}>
          <View>
            <Text style={styles.customText}>Your name is </Text>
            <Text style={styles.customText}>Your father name is </Text>
            <Text style={styles.customText}>Your NRC number is </Text>
            <Text style={styles.customText}>You are </Text>
            <Text style={styles.customText}>You are </Text>
            <Text style={styles.customText}>Your contact number is </Text>
            <Text style={styles.customText}>Your address is </Text>
            <Text style={styles.customText}>Your city is </Text>
            <Text style={styles.customText}>Your township is </Text>
          </View>

          <View>
            <Text style={styles.dataText}>{user.name}</Text>
            <Text style={styles.dataText}>{user.fatherName}</Text>
            <Text style={styles.dataText}>
              {user.nrcDivision}
              {user.nrcTownship}(N){user.nrcNum}
            </Text>
            <Text style={styles.dataText}>{user.gender}</Text>
            <Text style={styles.dataText}>{user.maritalStatus}</Text>

            <Text style={styles.dataText}>
              {user.countryNum}
              {user.phone}
            </Text>
            <Text style={styles.dataText}>{user.address}</Text>
            <Text style={styles.dataText}>{user.city}</Text>
            <Text style={styles.dataText}>{user.township}</Text>
          </View>
        </View>
        <Text style={styles.heading}>Job Information</Text>
        <View style={styles.info}>
          <View>
            <Text style={styles.customText}>Your job type is </Text>
            <Text style={styles.customText}>Your position is </Text>
            <Text style={styles.customText}>Your department is </Text>
            <Text style={styles.customText}>Your branch is </Text>
          </View>
          <View>
            <Text style={styles.dataText}>{user.jobType}</Text>
            <Text style={styles.dataText}>{user.position}</Text>
            <Text style={styles.dataText}>{user.dept}</Text>
            <Text style={styles.dataText}>{user.branch}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Registered;

const styles = StyleSheet.create({
  registeredWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fbeae4",
  },
  dataWrapper: {
    width: 280,
    marginTop: 30,
    backgroundColor: "#1EA449",
    padding: 30,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  info: {
    width: 280,
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "center",
  },
  heading: {
    fontSize: 18,
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "500",
    color: "#fff",
  },
  dataText: {
    color: "#fff",
    fontSize: 15,
  },
  customText: {
    textAlign: "right",
    fontSize: 15,
  },
});
