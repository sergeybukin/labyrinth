import { createSlice } from "@reduxjs/toolkit";

export const labyrinthSlice = createSlice({
  name: "labyrinth",
  initialState: {
    size: 6,
    array: [[]],
    startCell: [],
    finishCell: [0, 0],
    helper: false,
    actionsArr: [],
    showAnswer: false,
    score: 0,
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
      state.finishCell = action.payload;
    },
    setFinishCell: (state, action) => {
      state.finishCell = action.payload;
    },
    setHelper: (state, action) => {
      state.helper = action.payload;
    },
    setActionsArr: (state, action) => {
      state.actionsArr = action.payload;
    },
    setShowAnswer: (state, action) => {
      state.showAnswer = action.payload;
    },
    setScore: (state, action) => {
      state.score = action.payload;
    },
  },
});

export const {
  setSize,
  setArray,
  setStartCell,
  setHelper,
  setActionsArr,
  setFinishCell,
  setShowAnswer,
  setScore,
} = labyrinthSlice.actions;

export const selectLabyrinth = (state) => state.labyrinth;

export const orderUsers = (size) => (dispatch) => {
  dispatch(setSize(size));
};

export default labyrinthSlice.reducer;
