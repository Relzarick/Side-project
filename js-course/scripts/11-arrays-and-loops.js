/*
const myArray = [10, 20, 30];
console.log(myArray);

console.log(myArray[2]);

myArray[0] = 99;
console.log(myArray);

const newArray = [1, "hello", true, { name: "socks" }, [1, 2]];

console.log(Array.isArray(newArray));
console.log(myArray.length);
// add value to the end
myArray.push(100);
console.log(myArray);

// first value is the index, second is the values removed
myArray.splice(0, 2);
console.log(myArray);
*/
/*
let i = 1;
while (i <= 5) {
  //console.log(i);
  i++;
}

for (let i = 1; i <= 5; i++) {
  //console.log(i);
}

let randomNumber = 0;
while (randomNumber < 0.5) {
  randomNumber = Math.random();
  console.log(randomNumber);
}
*/

/*
const todoList = ["make dinner", "wash dishes", "watch youtube"];

for (let i = 0; i < todoList.length; i++) {
  const value = todoList[i];
  console.log(value);
}

const nums = [1, 1, 3];
//accumulator var
let total = 0;

for (let i = 0; i < nums.length; i++) {
  const num = nums[i];
  total += num;
  console.log(total);
}

const numsDouble = [];

for (let i = 0; i < nums.length; i++) {
  const num = nums[i];
  numsDouble.push(num * 2);
  console.log(numsDouble);
}
*/

const array1 = [1, 2, 3];
const array2 = array1.slice();
array2.push(4);
// console.log(array1);
// console.log(array2);

const [firstValue, secondValue] = [1, 2, 3];
// console.log(firstValue);

// for (let i = 1; i <= 10; i++) {
//   if (i % 3 === 0) {
//     continue;
//   }
//   // console.log(i);
//   if (i === 8) {
//     break;
//   }
// }

// let i = 1;
// while (i <= 10) {
//   if (i % 3 === 0) {
//     i++;
//     continue;
//   }
//   console.log(i);
//   i++;
// }

function doubleArray(nums) {
  const numsDoubled = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num === 0) {
      return numsDoubled;
    }
    numsDoubled.push(num * 2);
  }
  return numsDoubled;
}

console.log(doubleArray([1, 9, 4, 0, 5]));
