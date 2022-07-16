import "./ControlPanel.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectLabyrinth,
  setHelper,
  setActionsArr,
  setFinishCell,
  setSize,
  setShowAnswer,
  setStartCell,
} from "../../redux/slices/labyrinthSlice";
import { getRandom } from "../../utils";

export const ControlPanel = ({ onSetSize }) => {
  const actionsAmount = 10;
  const directions = ["top", "left", "right", "down"];
  const sizeRange = { min: 3, max: 20 };
  const [value, setValue] = useState("");
  const [buttonLabel, setButtonLabel] = useState("Start");
  const { helper, size, score } = useSelector(selectLabyrinth);
  const dispatch = useDispatch();

  const onInputChange = (event) => {
    dispatch(setHelper(false));
    setValue(event.target.value);
  };

  const onSet = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      if (value < sizeRange.min || value > sizeRange.max) {
        dispatch(setHelper(true));
      } else {
        onSetSize(Number(value));
        dispatch(setSize(Number(value)));
        setValue("");
      }
      dispatch(setActionsArr([]));
    }
  };

  const move = (dir, coo) => {
    switch (dir) {
      case "top":
        return [coo[0] - 1, coo[1]];
      case "left":
        return [coo[0], coo[1] - 1];
      case "right":
        return [coo[0], coo[1] + 1];
      case "down":
        return [coo[0] + 1, coo[1]];
      default:
        return [0, 0];
    }
  };

  const onStart = () => {
    dispatch(setShowAnswer(false));
    setButtonLabel("Try again");
    const newStartCell = [getRandom(0, size - 1), getRandom(0, size - 1)];
    dispatch(setStartCell(newStartCell));
    const actions = [];
    let newFinishCell = [...newStartCell];
    for (let i = 0; i < actionsAmount; i++) {
      const direction = directions[getRandom(0, directions.length - 1)];
      if (!move(direction, newFinishCell).some((e) => e + 1 > size || e < 0)) {
        actions.push(direction);
        newFinishCell = move(direction, newFinishCell);
      } else {
        i--;
      }
    }
    dispatch(setActionsArr(actions));
    dispatch(setFinishCell(newFinishCell));
  };

  return (
    <div className={"control-panel"}>
      <input
        type={"number"}
        placeholder={"Type grid size"}
        onChange={onInputChange}
        value={value}
        onKeyDown={onSet}
      />
      <button className={"btn-blue"} onClick={onSet}>
        Set
      </button>
      <button className={"btn-green"} onClick={onStart}>
        {buttonLabel}
      </button>
      <span className={"score"}>{score}</span>
      {helper && (
        <div className={"helper"}>
          The size must be more than {sizeRange.min} and less than{" "}
          {sizeRange.max}
        </div>
      )}
    </div>
  );
};
