// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num) {
  //may the code be with you
  let output = '';
  let result = 0;
  let str = num.toString();

  for (let i = 0; i < str.length; i++) {
    result = +str[i] * +str[i];
    output += result;
  }
  return +output;
}

console.log(squareDigits(3212));
