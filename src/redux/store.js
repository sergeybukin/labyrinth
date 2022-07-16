import { configureStore } from "@reduxjs/toolkit";
import labyrinthReducer from "./slices/labyrinthSlice";

export const store = configureStore({
  reducer: {
    labyrinth: labyrinthReducer,
  },
});
