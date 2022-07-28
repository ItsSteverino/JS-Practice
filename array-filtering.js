const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // defined variable numbers with numbers 1 through 10 //
const filtered = numbers.filter(function (number) {
  // defined variable filtered to a filter function involving numbers variable //
  return number % 2 === 0; // Even numbers in numbers variable are selected; 2 is how much it incriments, 0 is what it starts counting at //
});
console.log(filtered); // prints value of filtered variable //
