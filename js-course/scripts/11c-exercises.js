/*for (i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}*/

function findIndex(array, word) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      // Instead of creating an accumulator
      // variable and updating it in the loop,
      // we can just return i directly, when
      // we find it since this is a function.
      return i;
    }
  }

  // If the function has not returned by now,
  // logically that means the word must not
  // exist in the array, so we'll return -1.
  return -1;
}

const randomArray = ["pp", "peepee", "pipi", "pp", "jacob", "pipi", "pipi"];

// general idea but not creative enough, need more pratice

function unique(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    const word = array[i];
    if (findIndex(result, word) === -1) {
      result.push(word);
    }
  }
  return result;
}

// console.log(unique(randomArray));
