// Target Terdekat

// Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter.
// Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat.
// Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.

function targetTerdekat(arr) {
  // you can only write your code here!
  let oIndex = arr.indexOf("o");
  const xIndex = arr.indexOf("x");
  let distance = arr.length;

  // Jika tidak ditemukan karakter 'x', return 0
  if (xIndex === -1) {
    return 0;
  }

  // Cari jarak terdekat dengan mencari nilai mutlak selisih index
  // antara karakter 'o' dan 'x'
  while (oIndex !== -1) {
    const currentDistance = Math.abs(oIndex - xIndex);
    if (currentDistance < distance) {
      distance = currentDistance;
    }
    oIndex = arr.indexOf("o", oIndex + 1);
  }

  return distance;
}

// TEST CASES
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
