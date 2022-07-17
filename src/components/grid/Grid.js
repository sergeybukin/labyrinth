import "./Grid.css";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectLabyrinth } from "../../redux/slices/labyrinthSlice";
import { Cell } from "./cell";

export const Grid = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const { gridsArray, startCell, actionsArr } = useSelector(selectLabyrinth);

  const onTableClick = () => {
    if (actionsArr.length) {
      setShowAnswer(true);
    }
  };

  useEffect(() => {
    setShowAnswer(false);
  }, [startCell]);

  const drawGrids = useCallback(() => {
    const rows = [];
    gridsArray.forEach((a, x) => {
      const grids = [];
      a.forEach((b, y) => {
        const isStart = x === startCell[0] && y === startCell[1];
        const classList = isStart ? "start" : "";
        const key = `${x}${y}`;
        grids.push(
          <Cell
            showAnswer={showAnswer}
            x={x}
            y={y}
            classList={classList}
            key={key}
          />
        );
      });

      rows.push(<tr key={x}>{grids}</tr>);
    });

    return rows;
  }, [gridsArray, startCell, showAnswer]);

  return (
    <table onClick={onTableClick}>
      <tbody>{drawGrids()}</tbody>
    </table>
  );
};
