import "./ActionItem.css";
import { useEffect, useState } from "react";

export const ActionItem = ({ direction, i }) => {
  const directions = {
    left: 270,
    top: 0,
    right: 90,
    down: 180,
  };
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpacity(1);
    }, 500 * i);
    return () => clearTimeout(timeout);
  }, []);

  const styles = {
    transform: `rotate(${directions[direction]}deg)`,
    opacity: opacity,
    transition: "1s",
  };

  return (
    <div className={"action-item"}>
      <svg
        style={styles}
        width="50"
        height="50"
        fill="#434343"
        viewBox="0 0 16 16"
      >
        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
      </svg>
    </div>
  );
};
