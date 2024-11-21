const exercise11o = ["hello", "world", "search", "pp", "search"];

function findIndex(array, word) {
  let index = -1;
  for (i = 0; i < array.length; i++) {
    if (array[i] === word) {
      index = i;
      break;
    }
  }
  return i;
}

// console.log(findIndex(exercise11o, "search"));

// make note to remember all the commands
// have the idea just dont remember commd

const foodItems = ["egg", "ham", "apple", "egg", "eel", "egg", "egg"];

// same issue as line 17

function removeEgg(foods) {
  const result = [];
  let eggsRemoved = 0;
  const foodsCopy = foods.slice();
  const foodReversed = foodsCopy.reverse();

  for (i = 0; i < foods.length; i++) {
    if (foodReversed[i] === "egg" && eggsRemoved < 2) {
      eggsRemoved++;
      continue;
    }
    result.push(foods[i]);
  }
  return result.reverse();
}

// console.log(removeEgg(foodItems));
// console.log(foodItems);
