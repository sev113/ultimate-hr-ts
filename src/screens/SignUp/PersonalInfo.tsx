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
import { useDispatch } from "react-redux";
import { registerPersonalInfo } from "redux/userSlice";
import {
  cityData,
  townshipData,
  genderData,
  maritalStatusData,
  nrc,
} from "../../data";

const { width, height } = Dimensions.get("window");

const PersonalInfo = () => {
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [nrcDivision, setNrcDivisiono] = useState("");
  const [nrcTownship, setNrcTownship] = useState("");
  const [nrcNum, setNrcNum] = useState("");
  const [gender, setGender] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [countryNum, setCountryNum] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [township, setTownship] = useState("");

  const personalInfo = {
    name: name,
    fatherName: fatherName,
    nrcDivision: nrcDivision,
    nrcTownship: nrcTownship,
    nrcNum: nrcNum,
    gender: gender,
    maritalStatus: maritalStatus,
    countryNum: countryNum,
    phone: phone,
    address: address,
    city: city,
    township: township,
  };

  const dispatch = useDispatch();
  dispatch(registerPersonalInfo(personalInfo));

  const handleOnNrcDivision = (v: string) => {
    setNrcDivisiono(v);
  };

  const handleOnCityData = (v: string) => {
    setCity(v);
  };

  const handleOnTownshipData = (v: string) => {
    setTownship(v);
  };

  const handleOnGender = (v: string) => {
    setGender(v);
  };

  const handleOnMaritalStatus = (v: string) => {
    setMaritalStatus(v);
  };

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
              setValue={setName}
              // value={name} ?? How to get back the input value
              // defaultValue={name}
              inputStyle={{ width: width * 0.8 }}
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
              <Dropdown value={nrc} getValue={handleOnNrcDivision} />
              <CustomTextInput
                inputStyle={{ width: width * 0.23 }}
                setValue={setNrcTownship}
              />
              <CustomTextInput
                inputStyle={{ width: width * 0.1 }}
                value="N"
                inputTextStyle={{ textAlign: "center" }}
              />
              <CustomTextInput
                inputStyle={{ width: width * 0.26 }}
                setValue={setNrcNum}
              />
            </View>
          </View>
          <View style={styles.input_field}>
            <Text>Date of Birth</Text>
            <DatePicker />
          </View>
          <View style={styles.input_field}>
            <Text>Gender</Text>
            <Radio values={genderData} getValue={handleOnGender} />
          </View>
          <View style={styles.input_field}>
            <Text>Marital Status</Text>
            <Radio
              values={maritalStatusData}
              getValue={handleOnMaritalStatus}
            />
          </View>
          <View style={styles.input_field}>
            <Text>Contact Phone No.</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <CustomTextInput
                inputStyle={{ width: width * 0.185 }}
                setValue={setCountryNum}
              />
              <CustomTextInput
                setValue={setPhone}
                inputStyle={{ width: width * 0.6 }}
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
              <Dropdown
                value={cityData}
                menuStyle={{ width: width * 0.38 }}
                getValue={handleOnCityData}
              />
            </View>
            <View style={styles.input_field}>
              <Text>Township</Text>
              <Dropdown
                value={townshipData}
                menuStyle={{ width: width * 0.38 }}
                getValue={handleOnTownshipData}
              />
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
