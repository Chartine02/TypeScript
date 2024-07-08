function getFirstElement(array: (number | string)[]) {
  return array[0];
}

const numbers = [1, 2, 3, 4];
getFirstElement(numbers);

const str = ["cash"];
getFirstElement(str);

let firstName: any = "Ann";
firstName = 23;

// let x : never = true

const car: { type: string; mileage?: number } = {
  type: "Toyota",
};
car.mileage = 2000;

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

let playerDirection: Direction = Direction.Right;

if (playerDirection === Direction.Right) {
  console.log("Player is moving to the right");
}
console.log("Money");

const gender: string = "her";
console.log(gender);
