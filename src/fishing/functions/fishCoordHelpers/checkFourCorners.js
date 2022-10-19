import checkWithin from "./checkWithin";

// if none of the four corners touch another object, return FALSE

export default function checkFourCorners(bottomLeft, size, xLow, xHigh, yLow, yHigh) {
  
  if (checkWithin(xLow, xHigh, yLow, yHigh, bottomLeft)) {
    return true;
  };

  if (checkWithin(xLow, xHigh, yLow, yHigh, {
    x: bottomLeft.x,
    y: Number(bottomLeft.y) + Number(size)
  })) {
    return true;
  };

  if (checkWithin(xLow, xHigh, yLow, yHigh, {
    x: Number(bottomLeft.x) + Number(size),
    y: bottomLeft.y,
  })) {
    return true;
  };

  if (checkWithin(xLow, xHigh, yLow, yHigh, {
    x: Number(bottomLeft.x) + Number(size),
    y: Number(bottomLeft.y) + Number(size),
  })) {
    return true;
  };

  return false;
}