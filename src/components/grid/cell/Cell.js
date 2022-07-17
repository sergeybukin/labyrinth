import { useDispatch, useSelector } from "react-redux";
import {
  selectLabyrinth,
  setScore,
} from "../../../redux/slices/labyrinthSlice";
import "./Cell.css";
import { useState } from "react";
export const Cell = ({ x, y, classList, showAnswer }) => {
  const { finishCell, score } = useSelector(selectLabyrinth);
  const [styles, setStyles] = useState({});
  const dispatch = useDispatch();

  const onCellClick = () => {
    setTimeout(() => setStyles({}), 500);
    if (finishCell[0] === x && finishCell[1] === y) {
      setStyles({ background: "green" });
      const newScore = score + 1;
      dispatch(setScore(newScore));
    } else {
      setStyles({ background: "tomato" });
    }
  };

  let finishClass = "";
  if (showAnswer) {
    finishClass = finishCell[0] === x && finishCell[1] === y && "finish";
  }
  return (
    <td
      style={styles}
      onClick={onCellClick}
      className={classList + " " + finishClass}
    />
  );
};
