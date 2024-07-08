"use strict";
function getFirstElement(array) {
    return array[0];
}
const numbers = [1, 2, 3, 4];
getFirstElement(numbers);
const str = ["cash"];
getFirstElement(str);
let firstName = "Ann";
firstName = 23;
// let x : never = true
const car = {
    type: "Toyota",
};
car.mileage = 2000;
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
let playerDirection = Direction.Right;
if (playerDirection === Direction.Right) {
    console.log("Player is moving to the right");
}
console.log("Money");
const gender = "her";
console.log(gender);
