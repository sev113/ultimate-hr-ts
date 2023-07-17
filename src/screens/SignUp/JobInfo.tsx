import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Platform,
} from "react-native";
import React, { useState } from "react";
import CustomTextInput from "components/CusTextInput";
import Button from "components/Button";
import Radio from "components/Radio";
import Dropdown from "components/Dropdown";
import { StackScreenProps } from "@react-navigation/stack";
import { IStackRouteParamList } from "models";
import { branchData, deptData, positionData, jobTypeData } from "data";
import { useDispatch } from "react-redux";
import { registerJobInfo } from "redux/userSlice";

const { width, height } = Dimensions.get("window");

type MainRoutePropsType = StackScreenProps<IStackRouteParamList>;

const JobInfo = ({ navigation }: MainRoutePropsType) => {
  const [jobType, setJobType] = useState("");
  const [position, setPosition] = useState("");
  const [dept, setDept] = useState("");
  const [branch, setBranch] = useState("");

  const jobInfo = {
    jobType: jobType,
    position: position,
    dept: dept,
    branch: branch,
  };

  const dispatch = useDispatch();
  dispatch(registerJobInfo(jobInfo));

  const handleOnJobType = (v: string) => {
    setJobType(v);
  };

  const handleOnPosition = (v: string) => {
    setPosition(v);
  };

  const handleOnDept = (v: string) => {
    setDept(v);
  };

  const handleOnBranch = (v: string) => {
    setBranch(v);
  };

  const handleOnRegister = () => {
    navigation.navigate("Registered");
  };

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
          <Radio values={jobTypeData} getValue={handleOnJobType} />
        </View>

        <View style={styles.input_field}>
          <Text>Position</Text>
          <View style={{ position: "relative" }}>
            <Dropdown
              value={positionData}
              menuStyle={{ width: width * 0.8 }}
              getValue={handleOnPosition}
            />
          </View>
        </View>
        <View style={styles.input_field}>
          <Text>Department</Text>
          <View style={{ position: "relative" }}>
            <Dropdown
              value={deptData}
              menuStyle={{ width: width * 0.8 }}
              getValue={handleOnDept}
            />
          </View>
        </View>
        <View style={styles.input_field}>
          <Text>Branch</Text>
          <View style={{ position: "relative" }}>
            <Dropdown
              value={branchData}
              menuStyle={{ width: width * 0.8 }}
              getValue={handleOnBranch}
            />
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
          onPress={handleOnRegister}
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
