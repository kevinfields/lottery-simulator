import checkFourCorners from "./checkFourCorners"

export default function checkAgainstBoundaries(bottomLeft, size, boundaries) {

  boundaries.forEach(bound => {
    if (checkFourCorners(bottomLeft, size, bound.xLow, bound.xHigh, bound.yLow, bound.yHigh)) {
      return true;
    };
  });

  return false;
}