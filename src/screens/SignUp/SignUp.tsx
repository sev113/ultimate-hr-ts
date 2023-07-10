import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useState } from "react";
import { PersonalInfo, JobInfo } from "screens";

const { width, height } = Dimensions.get("window");

const SignUp = () => {
  const [personalInfo, setPersonalInfo] = useState(true);
  const [jobInfo, setJobInfo] = useState(false);

  return (
    <View style={styles.register_wrapper}>
      <View style={styles.info_bar}>
        <Text
          // style={styles.info_text}
          style={personalInfo ? styles.info_text : null}
          onPress={() => {
            setPersonalInfo(true);
            setJobInfo(false);
          }}
        >
          Personal Information
        </Text>
        <Text
          style={jobInfo && styles.info_text}
          onPress={() => {
            setPersonalInfo(false);
            setJobInfo(true);
          }}
        >
          Job Information
        </Text>
      </View>
      {personalInfo && <PersonalInfo />}
      {jobInfo && <JobInfo />}
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  register_wrapper: {
    width: width,
    height: height,
    padding: 8,
    backgroundColor: "#fff",
  },
  top_bar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  back_icon: {
    width: width * 0.05,
    height: height * 0.025,
    alignItems: "flex-start",
  },
  info_bar: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  info_text: {
    borderWidth: 2,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    paddingBottom: 7,
    borderColor: "#F15B25",
  },
});
