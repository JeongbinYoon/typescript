/**
 * Let's make a game 🕹
 */
type Direction = "up" | "down" | "left" | "right" | "he";
type Position = {
  x: number;
  y: number;
};

const position: Position = {
  x: 0,
  y: 0,
};
function move(direction: Direction): Position {
  switch (direction) {
    case "up":
      position.y += 1;
      break;
    case "down":
      position.y -= 1;
      break;
    case "left":
      position.x -= 1;
      break;
    case "right":
      position.x += 1;
      break;
    case "he":
      position.x += 1;
      break;
    default:
      const invalid: never = direction;
      new Error(`Unknown direction: ${invalid}`);
  }
  return position;
}
console.log(position); // { x: 0, y: 0}
move("up");
console.log(position); // { x: 0, y: 1}
move("down");
console.log(position); // { x: 0, y: 0}
move("left");
console.log(position); // { x: -1, y: 0}
move("right");
console.log(position); // { x: 0, y: 0}
