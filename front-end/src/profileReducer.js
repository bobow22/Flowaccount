import { createSlice } from "@reduxjs/toolkit";
export const profileReducer = createSlice({
  // ชื่อตัว Reducer
  name: "profileReducer",
  // ชื่อตัว ค่าเริ่มต้นของ State
  initialState: {
    userData: ['test'],
  },
  // ชื่อ Action ใน Reducer
  reducers: {
    // changeName: (state, firstname) => {
    //   state.firstname = firstname.payload;
    // },
    // changeLastname: (state, lastname) => {
    //   state.lastname = lastname.payload;
    // },
    addUser: (state, action) => {
      state.userData.push(action.payload);
    },
  },
});
// Export Reducer
export default profileReducer.reducer;
// Export Action ที่สามารถใช้ได้ใน Reducer
export const { addUser } = profileReducer.actions;
