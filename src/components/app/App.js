import "./App.css";
import { ControlPanel } from "../control-panel";
import { ActionsPanel } from "../actions-panel";
import { Grid } from "../grid";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { selectLabyrinth, setArray } from "../../redux/slices/labyrinthSlice";
import { useSelector } from "react-redux";

export const App = () => {
  const dispatch = useDispatch();
  const { size } = useSelector(selectLabyrinth);

  const onCreateArray = (size) => {
    const createArr = (n, val) =>
      Array(n)
        .fill(0)
        .map(() => val);
    const arr = createArr(size, createArr(size, 0));
    dispatch(setArray(arr));
  };

  useEffect(() => {
    onCreateArray(size);
  }, []);

  return (
    <div className="app">
      <ControlPanel onSetSize={onCreateArray} />
      <Grid />
      <ActionsPanel />
    </div>
  );
};
