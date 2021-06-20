function squareDigits(num) {
  //may the code be with you
  let output = '';
  let result = 0;
  let str = num.toString();

  for (let i = 0; i < str.length; i++) {
    result = +str[i] * +str[i];
    output += result;
  }
  return output;
}

console.log(squareDigits(3212));
