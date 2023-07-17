import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  fatherName: "",
  nrcDivision: "",
  nrcTownship: "",
  nrcNum: "",
  gender: "",
  maritalStatus: "",
  countryNum: "",
  phone: "",
  address: "",
  city: "",
  township: "",
  jobType: "",
  position: "",
  dept: "",
  branch: "",
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    registerPersonalInfo: (state, action) => {
      state.name = action.payload.name;
      state.fatherName = action.payload.fatherName;
      state.nrcDivision = action.payload.nrcDivision;
      state.nrcTownship = action.payload.nrcTownship;
      state.nrcNum = action.payload.nrcNum;
      state.gender = action.payload.gender;
      state.maritalStatus = action.payload.maritalStatus;
      state.countryNum = action.payload.countryNum;
      state.phone = action.payload.phone;
      state.address = action.payload.address;
      state.city = action.payload.city;
      state.township = action.payload.township;
    },
    registerJobInfo: (state, action) => {
      state.jobType = action.payload.jobType;
      state.position = action.payload.position;
      state.dept = action.payload.dept;
      state.branch = action.payload.branch;
    },
  },
});

export const { registerPersonalInfo, registerJobInfo } = userSlice.actions;
export default userSlice.reducer;
