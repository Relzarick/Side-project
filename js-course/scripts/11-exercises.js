const nums = [10, 20, 30];
const nums2 = [11, 8, 6];

//nums[2] = 99;
//console.log(nums);

function getLastValue(array) {
  const lastValue = array.length - 1;
  return array[lastValue];
}
//console.log(getLastValue(nums));

function arraySwap(array) {
  // gets the last index of the array
  const lastIndex = array.length - 1;
  // gets the value of the last index
  const lastValue = array[lastIndex];
  // gets the first value of the array
  const firstValue = array[0];

  array[lastIndex] = firstValue;
  array[0] = lastValue;
  // remember to return if you change values
  return array;
}
//console.log(arraySwap(nums));

for (let i = 0; i <= 10; i += 2) {
  //console.log(i);
}

for (let i = 5; i > 0; i--) {
  //console.log(i);
}

let fa = 0;
let fb = 5;

while (fa < 10) {
  //console.log(fa);
  fa += 2;
}
while (fb > 0) {
  //console.log(fb);
  fb--;
}

const result = [];
// need to remember to use return not console the array

for (let i = 0; i < nums.length; i++) {
  //result.push(nums[i]++);
  //console.log(nums);
}

function addOne(array) {
  for (let i = 0; i < nums.length; i++) {
    //result.push(array[i]++);
    //console.log(array);
  }
}

function addNum(array, num) {
  for (let i = 0; i < array.length; i++) {
    //result.push((array[i] += num));
    //console.log(array);
  }
}

function addArrays(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    //result.push(array1[i] + array2[i]);
  }
  return result;
}
// console.log(addArrays(nums, nums2));

function countPositive(number) {
  let positive = 0;
  for (let i = 0; i < number.length; i++) {
    if (number[i] > 0) {
      //positive++;
    }
  }
  return positive;
}
//console.log(countPositive(nums));

function minMax(number) {
  // Use the index instead of 0, if not you cant get the min value
  const result = { min: number[0], max: number[0] };

  for (let i = 0; i < number.length; i++) {
    const values = number[i];

    if (values < result.min) {
      // result.min = values;
    }

    if (values > result.max) {
      //result.max = values;
    }
  }
  return result;
}
//console.log(minMax(nums));

// bad habit of trying to use as little var as possible
function countWords(words) {
  const wordsRepeated = {};
  for (let i = 0; i < words.length; i++) {
    word = words[i];
    if (!wordsRepeated[word]) {
      wordsRepeated[word] = 1;
    } else {
      wordsRepeated[word]++;
    }
  }
  return wordsRepeated;
}
//console.log(countWords(["apple", "grape", "apple", "apple"]));
