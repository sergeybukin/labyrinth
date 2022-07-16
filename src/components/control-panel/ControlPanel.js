import "./ControlPanel.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLabyrinth, setHelper } from "../../redux/slices/labyrinthSlice";

export const ControlPanel = ({ onSetSize }) => {
  const sizeRange = { min: 3, max: 20 };
  const [value, setValue] = useState("");
  const { helper } = useSelector(selectLabyrinth);
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
        onSetSize(value);
      }
      setValue("");
    }
  };

  const onStart = () => {};

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
        Start
      </button>
      {helper && (
        <div className={"helper"}>
          The size must be more than {sizeRange.min} and less than{" "}
          {sizeRange.max}
        </div>
      )}
    </div>
  );
};
