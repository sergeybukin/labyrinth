import "./ActionsPanel.css";
import { ActionItem } from "./action-item";
import { useSelector } from "react-redux";
import { selectLabyrinth } from "../../redux/slices/labyrinthSlice";

export const ActionsPanel = () => {
  const { actionsArr } = useSelector(selectLabyrinth);

  return (
    <div className={"actions-panel"}>
      {actionsArr.map((direction, i) => (
        <ActionItem key={i + direction} direction={direction} i={i} />
      ))}
    </div>
  );
};
