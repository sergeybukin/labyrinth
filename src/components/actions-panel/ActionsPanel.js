import "./ActionsPanel.css";
import { ActionItem } from "./action-item";
import { useSelector } from "react-redux";
import { selectLabyrinth } from "../../redux/slices/labyrinthSlice";
import { useMemo } from "react";

export const ActionsPanel = () => {
  const { actionsArr } = useSelector(selectLabyrinth);
  const renderActions = useMemo(() => {
    const time = new Date().getTime();

    return actionsArr.map((direction, i) => (
      <ActionItem key={i + time} direction={direction} i={i} />
    ));
  }, [actionsArr]);

  return <div className={"actions-panel"}>{renderActions}</div>;
};
