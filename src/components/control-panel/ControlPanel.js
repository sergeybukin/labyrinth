import "./ControlPanel.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectLabyrinth,
  setActionsArr,
  setFinishCell,
  setSize,
  setStartCell,
} from "../../redux/slices/labyrinthSlice";
import { getRandom, moveTo, findAvailableDirections } from "../../utils";
import { InputField } from "./input-field";
import { useCreateArray } from "../../utils/hooks/useCreateArray";

export const ControlPanel = () => {
  const actionsAmount = 10;
  const sizeRange = { min: 3, max: 20 };
  const [sizeValue, setSizeValue] = useState("");
  const [gridSizeInputError, setGridSizeInputError] = useState(false);
  const [buttonStartLabel, setButtonStartLabel] = useState("Start game");
  const { size, score } = useSelector(selectLabyrinth);
  const dispatch = useDispatch();
  useCreateArray();

  const onInputChange = (event) => {
    setGridSizeInputError(false);
    setSizeValue(event.target.value);
  };

  const onSetGridSize = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      if (sizeValue < sizeRange.min || sizeValue > sizeRange.max) {
        setGridSizeInputError(true);
      } else {
        const numValue = Number(sizeValue);
        dispatch(setSize(numValue));
        setSizeValue("");
      }
      dispatch(setActionsArr([]));
    }
  };

  const generateDirections = (startCell) => {
    const actions = [];
    let newFinishCell = startCell;
    for (let i = 0; i < actionsAmount; i++) {
      const directions = findAvailableDirections(newFinishCell, size);
      const currDirection = directions[getRandom(0, directions.length - 1)];
      actions.push(currDirection);
      newFinishCell = moveTo(currDirection, newFinishCell);
    }

    return { actions, newFinishCell };
  };

  const onStart = () => {
    setButtonStartLabel("Try again");
    const newStartCell = [getRandom(0, size - 1), getRandom(0, size - 1)];
    dispatch(setStartCell(newStartCell));
    const { actions, newFinishCell } = generateDirections(newStartCell);
    dispatch(setActionsArr(actions));
    dispatch(setFinishCell(newFinishCell));
  };

  const gridSizeErrorLabel =
    gridSizeInputError &&
    `The size must be more than ${sizeRange.min} and less than ${sizeRange.max}`;

  return (
    <div className={"control-panel"}>
      <div className={"wrapper"}>
        <InputField
          placeholder={"Type grid size"}
          type={"number"}
          id={"grid-size"}
          error={gridSizeErrorLabel}
          onChange={onInputChange}
          value={sizeValue}
          onKeyDown={onSetGridSize}
        >
          <button className={"btn-blue"} onClick={onSetGridSize}>
            Set grid size
          </button>
        </InputField>
      </div>
      <div className={"wrapper"}>
        <div className={"score"}>Wins: {score}</div>
        <button className={"btn-green"} onClick={onStart}>
          {buttonStartLabel}
        </button>
      </div>
    </div>
  );
};
