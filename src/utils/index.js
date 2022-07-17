export const getRandom = (min, max) =>
  Math.floor(Math.floor(Math.random() * (max - min + 1) + min));

export const createArr = (n, val) =>
  Array(n)
    .fill(0)
    .map(() => val);

export const createTwoDimensionalArr = (size) => {
  return createArr(size, createArr(size, 0));
};

export const moveTo = (dir, coo) => {
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

export const findAvailableDirections = (coo, size) => {
  const directions = [];
  if (coo[0] - 1 >= 0) {
    directions.push("top");
  }
  if (coo[0] + 1 <= size - 1) {
    directions.push("down");
  }
  if (coo[1] - 1 >= 0) {
    directions.push("left");
  }
  if (coo[1] + 1 <= size - 1) {
    directions.push("right");
  }
  return directions;
};
