import { createSlice } from "@reduxjs/toolkit";

export const labyrinthSlice = createSlice({
  name: "labyrinth",
  initialState: {
    size: 6,
    gridsArray: [[]],
    startCell: [],
    finishCell: [0, 0],
    actionsArr: [],
    score: 0,
  },
  reducers: {
    setSize: (state, action) => {
      state.size = action.payload;
    },
    setGridsArray: (state, action) => {
      state.gridsArray = action.payload;
    },
    setStartCell: (state, action) => {
      state.startCell = action.payload;
      state.finishCell = action.payload;
    },
    setFinishCell: (state, action) => {
      state.finishCell = action.payload;
    },
    setActionsArr: (state, action) => {
      state.actionsArr = action.payload;
    },
    setScore: (state, action) => {
      state.score = action.payload;
    },
  },
});

export const {
  setSize,
  setGridsArray,
  setStartCell,
  setActionsArr,
  setFinishCell,
  setScore,
} = labyrinthSlice.actions;

export const selectLabyrinth = (state) => state.labyrinth;

export default labyrinthSlice.reducer;
