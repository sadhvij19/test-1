//javascript code for dividing two fractions:

function divideFractions(num1, den1, num2, den2) {
  const invertedNum = den2;
  const invertedDen = num2;

  
  const resultNum = num1 * invertedNum;
  const resultDen = den1 * invertedDen;

  
  const gcd = findGCD(resultNum, resultDen);
  const simplifiedNum = resultNum / gcd;
  const simplifiedDen = resultDen / gcd;

 
  return `${simplifiedNum}/${simplifiedDen}`;
}

function findGCD(a, b) {
  
  if (b === 0) {
    return a;
  } else {
    return findGCD(b, a % b);
  }
}


console.log(divideFractions(1, 2, 3, 4));
