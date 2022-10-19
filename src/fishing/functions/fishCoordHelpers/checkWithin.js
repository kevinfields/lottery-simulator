export default function checkWithin(xLow, xHigh, yLow, yHigh, coord) {

  if (xLow < coord.x && xHigh > coord.x) {
    if (yLow < coord.y && yHigh > coord.y) {
      return true;
    };
  };

  return false;
}