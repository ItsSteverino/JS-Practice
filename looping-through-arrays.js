const pets = ["cat", "dog", "rat"]; // set variable of pets to array with 3 strings //
for (i = 0; i < pets.length; i++) {
  // value is equal to 0 in begining of loop; ALL strings in array are filtered through loop //
  pets[i] = pets[i] + "s"; // "s" is added to strings in array to make words plural //
}
console.log(pets); // prints variable pets after loop is executed //
