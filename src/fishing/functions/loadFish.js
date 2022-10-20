export default function loadFish(number) {

  return {
    value: Math.floor(Math.random() * number * 5) + 1,
    difficulty: number,
    size: 9 - Math.floor(Math.random() * number),
    forSale: true,
  }
}