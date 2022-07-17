import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  selectLabyrinth,
  setGridsArray,
} from "../../redux/slices/labyrinthSlice";
import { createTwoDimensionalArr } from "../index";

export const useCreateArray = () => {
  const dispatch = useDispatch();
  const { size } = useSelector(selectLabyrinth);

  useEffect(() => {
    const arr = createTwoDimensionalArr(size);
    dispatch(setGridsArray(arr));
  }, [dispatch, size]);
};
