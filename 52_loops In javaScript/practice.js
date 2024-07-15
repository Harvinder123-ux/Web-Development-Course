let result = 1;
for (let i = 1; i <= 5; i++) {
  result *= i;
}
console.log(result);


//recursive approach
function recFact(n) {
  if (n === 0) {
    return 1;
  }
  result = n * recFact(n - 1);
  return result;
}

console.log(recFact(5));

//finding the factorial using the reduce method