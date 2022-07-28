const a = 1; // //
const b = 2; // 3 GLOBAL Variables defined (accessible anywhere in code)
const c = 3; // //

(function firstFunction() {
  // firstFunction changes value of variables b and c. This ONLY remain's within this function and nested functions. //
  const b = 5; //
  const c = 6; // 2 local variables defined

  (function secondFunction() {
    // secondFunction changes value of variable b AGAIN. This ONLY remain's within this function and nested functions. //
    const b = 8; // local variable defined
    console.log(`a: ${a}, b: ${b}, c: ${c}`); // This will print the updated values of global variables a, b, c (after being filtered through the nested functions to this point) //
    // not sure what console.log argument means, was instructed to copy/paste it in here (lesson was to teach scope comprehension rather i believe) //

    (function thirdFunction() {
      // thirdFunction changes value of a and c. This ONLY remain's within this function and nested functions. //
      const a = 7;
      const c = 9;

      (function fourthFunction() {
        // forthFunction changes the values of a and c. This ONLY remain's within this function and nested functions. //
        const a = 1;
        const c = 8;
      })();
    })();
  })();
})();

// if i had global variables listed below these functions, could i impliment them into the functions above? //
