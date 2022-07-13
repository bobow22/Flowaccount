import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profileReducer";

const store = configureStore({
  reducer: {
    profile: profileReducer,
  },
});

export default store;
