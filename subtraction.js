function subtractFractions(num1, den1, num2, den2) {
 
  const commonDenominator = den1 * den2;

  
  const newNum1 = num1 * den2;
  const newNum2 = num2 * den1;

 
  const diffNumerators = newNum1 - newNum2;

  
  const gcd = findGCD(diffNumerators, commonDenominator);
  const resultNum = diffNumerators / gcd;
  const resultDen = commonDenominator / gcd;

  
  return `${resultNum}/${resultDen}`;
}

function findGCD(a, b) {
  // Find the greatest common divisor (GCD) of two numbers
  if (b === 0) {
    return a;
  } else {
    return findGCD(b, a % b);
  }
}


console.log(subtractFractions(3, 4, 1, 2)); // Output: 5/4
