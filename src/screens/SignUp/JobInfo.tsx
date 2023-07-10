import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Platform,
} from "react-native";
import React from "react";
import CustomTextInput from "components/CusTextInput";
import Button from "components/Button";
import Radio from "components/Radio";
import Dropdown from "components/Dropdown";

const { width, height } = Dimensions.get("window");
const jobType = ["internship", "probation", "permanent"];

const position = [
  "Project Manager",
  "Frontend Developer",
  "Backend Developer",
  "UI/UX Designer",
  "Software Tester",
];

const department = ["Developer", "HR", "Academic", "Marketing"];

const branch = ["Hlaing", "Downtown"];

const JobInfo = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={100}
    >
      <View style={styles.job_info}>
        <View style={styles.input_field}>
          <Text>Start Joining Date</Text>
          <View style={{ position: "relative" }}>
            <CustomTextInput inputStyle={{ width: width * 0.8 }} />
            <Image
              style={styles.input_icon}
              source={require("../../assets/icons/calendar.png")}
            />
          </View>
        </View>

        <View
          style={[
            styles.input_field,
            {
              ...{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
              },
            },
          ]}
        >
          <Text style={{ display: "flex" }}>Type</Text>
          <Radio values={jobType} />
        </View>

        <View style={styles.input_field}>
          <Text>Position</Text>
          <View style={{ position: "relative" }}>
            <Dropdown value={position} menuStyle={{ width: width * 0.8 }} />
          </View>
        </View>
        <View style={styles.input_field}>
          <Text>Department</Text>
          <View style={{ position: "relative" }}>
            <Dropdown value={department} menuStyle={{ width: width * 0.8 }} />
          </View>
        </View>
        <View style={styles.input_field}>
          <Text>Branch</Text>
          <View style={{ position: "relative" }}>
            <Dropdown value={department} menuStyle={{ width: width * 0.8 }} />
          </View>
        </View>
        <Button
          title="Register"
          btnStyle={{
            backgroundColor: "#1EA449",
            width: width * 0.8,
            marginTop: 10,
          }}
          textStyle={{ color: "#fff" }}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default JobInfo;

const styles = StyleSheet.create({
  job_info: {
    // backgroundColor: "green",
    padding: 20,
    margin: 10,
  },
  input_field: { marginBottom: 5 },
  input_icon: {
    width: 20,
    height: 20,
    position: "absolute",
    right: 20,
    top: 10,
  },
});
