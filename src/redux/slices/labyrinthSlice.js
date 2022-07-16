import { createSlice } from "@reduxjs/toolkit";

export const labyrinthSlice = createSlice({
  name: "labyrinth",
  initialState: {
    size: 3,
    array: [[]],
    startCell: [0, 0],
    helper: false,
  },
  reducers: {
    setSize: (state, action) => {
      state.size = action.payload;
    },
    setArray: (state, action) => {
      state.array = action.payload;
    },
    setStartCell: (state, action) => {
      state.startCell = action.payload;
    },
    setHelper: (state, action) => {
      state.helper = action.payload;
    },
  },
});

export const { setSize, setArray, setStartCell, setHelper } =
  labyrinthSlice.actions;

export const selectLabyrinth = (state) => state.labyrinth;

export const orderUsers = (size) => (dispatch) => {
  dispatch(setSize(size));
};

export default labyrinthSlice.reducer;
