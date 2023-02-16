// Check AB

// Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string.
// function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali.
// Jika tidak ditemukan sama sekali, kembalikan nilai false.

function checkAB(num) {
  // you can only write your code here!
  let indexA = 0;
  let indexB = 0;

  for (const i of num) {
    if (i === "a") {
      if (indexA === 0) {
        indexA = num.indexOf(i);
      }
    } else if (i === "b") {
      if (indexB === 0) {
        indexB = num.indexOf(i);
      }
    }
  }

  // return { indexA, indexB };
  const number = indexA - indexB;
  return number > 3 || number > -3;
}

// TEST CASES
console.log(checkAB("lane borrowed")); // true
console.log(checkAB("i am sick")); // false
console.log(checkAB("you are boring")); // true
console.log(checkAB("barbarian")); // true
console.log(checkAB("bacon and meat")); // false
