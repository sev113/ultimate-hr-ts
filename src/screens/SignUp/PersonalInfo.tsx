import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
} from "react-native";
import React, { useState } from "react";
import CustomTextInput from "components/CusTextInput";
import Radio from "components/Radio";
import Dropdown from "components/Dropdown";
import DatePicker from "components/DatePicker";

const { width, height } = Dimensions.get("window");

const genderValues = ["male", "female", "others"]; // for gender radio values
const maritalStatus = ["single", "married"]; // for marital status
const nrcNo = [
  "1/",
  "2/",
  "3/",
  "4/",
  "5/",
  "6/",
  "7/",
  "8/",
  "9/",
  "10/",
  "11/",
  "12/",
  "13/",
  "14/",
]; // for nrc no

const city = ["Yangon", "Mandalay", "Nay Pyi Taw", "Myit Kyi Na", "Taungyi"];
const township = ["Lamadaw", "Latha", "Hlaing", "Kyauktada", "Pazuntaung"];

const PersonalInfo = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={100}
    >
      <ScrollView>
        <View style={styles.personal_info}>
          <Text style={styles.heading}>Hello!</Text>
          <Text style={styles.sub_heading}>Create a new account</Text>
          <View style={styles.input_field}>
            <Text>Name</Text>
            <CustomTextInput
              inputStyle={{ width: width * 0.8 }}
              setValue={setName}
            />
          </View>
          <View style={styles.input_field}>
            <Text>Father Name</Text>
            <CustomTextInput
              inputStyle={{ width: width * 0.8 }}
              setValue={setFatherName}
            />
          </View>
          <View style={styles.input_field}>
            <Text>NRC No.</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Dropdown value={nrcNo} />
              <CustomTextInput inputStyle={{ width: width * 0.23 }} />
              <CustomTextInput
                inputStyle={{ width: width * 0.1 }}
                value="N"
                inputTextStyle={{ textAlign: "center" }}
              />
              <CustomTextInput inputStyle={{ width: width * 0.26 }} />
            </View>
          </View>
          <View style={styles.input_field}>
            <Text>Date of Birth</Text>
            <DatePicker />
          </View>
          <View style={styles.input_field}>
            <Text>Gender</Text>
            <Radio values={genderValues} />
          </View>
          <View style={styles.input_field}>
            <Text>Marital Status</Text>
            <Radio values={maritalStatus} />
          </View>
          <View style={styles.input_field}>
            <Text>Contact Phone No.</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <CustomTextInput inputStyle={{ width: width * 0.185 }} />
              <CustomTextInput
                inputStyle={{ width: width * 0.6 }}
                setValue={setContact}
              />
            </View>
          </View>
          <View style={styles.input_field}>
            <Text>Address</Text>
            <CustomTextInput
              inputStyle={{ width: width * 0.8 }}
              setValue={setAddress}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={styles.input_field}>
              <Text>City</Text>
              <Dropdown value={city} menuStyle={{ width: width * 0.38 }} />
            </View>
            <View style={styles.input_field}>
              <Text>Township</Text>
              <Dropdown value={township} menuStyle={{ width: width * 0.38 }} />
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default PersonalInfo;

const styles = StyleSheet.create({
  personal_info: {
    // backgroundColor: "green",
    padding: 20,
    margin: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sub_heading: {
    marginBottom: 10,
  },
  input_field: { marginBottom: 5 },
  input_icon: {
    width: 20,
    height: 20,
    position: "absolute",
    right: 18,
    top: 10,
  },
});
