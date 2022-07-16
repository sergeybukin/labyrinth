import "./Grid.css";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectLabyrinth,
  setShowAnswer,
} from "../../redux/slices/labyrinthSlice";
import { Cell } from "./cell";

export const Grid = () => {
  const { array, startCell, actionsArr } = useSelector(selectLabyrinth);
  const dispatch = useDispatch();

  const onTableClick = () => {
    if (actionsArr.length) {
      dispatch(setShowAnswer(true));
    }
  };

  const drawGrids = useCallback(() => {
    const rows = [];
    array.forEach((a, x) => {
      const grids = [];
      a.forEach((b, y) => {
        const isStart = x === startCell[0] && y === startCell[1];
        const classList = isStart ? "start" : "";
        const key = `${x}${y}`;
        grids.push(<Cell x={x} y={y} classList={classList} key={key} />);
      });

      rows.push(<tr key={x}>{grids}</tr>);
    });

    return rows;
  }, [array, startCell]);

  return (
    <table onClick={onTableClick}>
      <tbody>{drawGrids()}</tbody>
    </table>
  );
};
