import checkFourCorners from "./checkFourCorners"

export default function checkAgainstBoundaries(bottomLeft, size, boundaries) {

  let failure = false;
  boundaries.forEach(bound => {
    if (checkFourCorners(bottomLeft, size, bound.xLow, bound.xHigh, bound.yLow, bound.yHigh)) {
      console.log('corner failed, rerolling...');
      failure = true;
    };
  });

  return failure;
};