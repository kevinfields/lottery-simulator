import checkAgainstBoundaries from "./fishCoordHelpers/checkAgainstBoundaries";

export default function getFishCoord(xMin, xMax, yMin, yMax, fishnet, fish) {
  
  let forbiddenAreas = [];
  fishnet.forEach(single => {
    let forbiddenBoundaries = {
      xLow: Number(single.left),
      xHigh: Number(single.left) + Number(single.size),
      yLow: Number(single.bottom),
      yHigh: Number(single.bottom) + Number(single.size),
    };
    forbiddenAreas.push(forbiddenBoundaries);
  });

  let bottomLeft = {
      x: Math.floor(Math.random() * xMax - xMin) + 1, 
      y: Math.floor(Math.random() * yMax - yMin) + 1,
  };

  while (checkAgainstBoundaries(bottomLeft, fish.size, forbiddenAreas)) {
    bottomLeft = {
      x: Math.floor(Math.random() * xMax - xMin) + 1, 
      y: Math.floor(Math.random() * yMax - yMin) + 1,
    };
  };

  

  return bottomLeft;
}