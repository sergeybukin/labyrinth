import "./App.css";
import { ControlPanel } from "../control-panel";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setSize,
  selectLabyrinth,
  setArray,
  setStartCell,
} from "../../redux/slices/labyrinthSlice";
import { useSelector } from "react-redux";

export const App = () => {
  const dispatch = useDispatch();
  const { size, array, startCell } = useSelector(selectLabyrinth);

  const getRandom = (min, max) =>
    Math.floor(Math.floor(Math.random() * (max - min + 1) + min));

  const drawGrids = useCallback(() => {
    const rows = [];
    array.forEach((a, x) => {
      const grids = [];
      a.forEach((b, y) => {
        const isEnd = x === startCell[0] && y === startCell[1];
        grids.push(<td className={isEnd && "end"} />);
      });
      rows.push(<tr>{grids}</tr>);
    });

    return rows;
  }, [array]);

  const onSetSize = useCallback(
    (value) => {
      onCreateArray(Number(value));
      dispatch(setSize(""));
    },
    [size]
  );

  const onCreateArray = (size) => {
    const createArr = (n, val) =>
      Array(n)
        .fill(0)
        .map(() => val);
    const arr = createArr(size, createArr(size, 0));
    dispatch(setArray(arr));
    const newStartCell = [getRandom(0, size - 1), getRandom(0, size - 1)];
    dispatch(setStartCell(newStartCell));
  };

  useEffect(() => {
    onCreateArray(6);
  }, []);

  return (
    <div className="app">
      <ControlPanel onSetSize={onSetSize} />
      <table>{drawGrids()}</table>
    </div>
  );
};
