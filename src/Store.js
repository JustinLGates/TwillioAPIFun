import { configureStore } from "@reduxjs/toolkit";
import exampleReducer from "./Components/Example/Slice";

export default configureStore({
  reducer: {
    example: exampleReducer,
  },
});
