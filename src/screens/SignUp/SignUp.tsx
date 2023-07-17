import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import JobInfo from "./JobInfo";
import { StackScreenProps } from "@react-navigation/stack";
import { IStackRouteParamList } from "models";

const { width, height } = Dimensions.get("window");

type MainRoutePropsType = StackScreenProps<IStackRouteParamList>;

const SignUp = ({ navigation }: MainRoutePropsType) => {
  const [personalInfo, setPersonalInfo] = useState<boolean>(true);
  const [jobInfo, setJobInfo] = useState<boolean>(false);

  return (
    <View style={styles.register_wrapper}>
      <View style={styles.info_bar}>
        <Text
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
      {jobInfo && <JobInfo navigation={navigation} />}
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
