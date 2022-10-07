import { createSlice } from "@reduxjs/toolkit";

const lsHere = localStorage.getItem("DisplayMode : ");
console.log(localStorage.getItem("DisplayMode : "), "Hihi");

let valueHere = {};

if (lsHere === null || lsHere === "undefined") {
  valueHere = false;
}
if (lsHere === true) {
  valueHere = true;
}
if (lsHere === false) {
  valueHere = false;
}

export const modeSlice = createSlice({
  name: "modeSelected",
  initialState: {
    value: valueHere,
  },
  reducers: {
    changeMode: (state) => {
      state.value = !state.value;
    },
  },
});

export const { changeMode } = modeSlice.actions;

export default modeSlice.reducer;
