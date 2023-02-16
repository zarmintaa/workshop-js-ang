// Angka Prima

// Diberikan sebuah function angkaPrima(angka) yang menerima satu parameter berupa angka.
// Function akan me-return true jika angka tersebut adalah bilangan prima. Jika tidak, return false.

function angkaPrima(angka) {
  if (angka < 2) {
    // Bilangan prima harus lebih besar dari 1
    return false;
  }

  for (let i = 2; i <= Math.sqrt(angka); i++) {
    // Lakukan iterasi dari 2 sampai akar kuadrat dari angka
    // Jika angka dapat dibagi dengan i, maka angka bukanlah bilangan prima
    if (angka % i === 0) {
      return false;
    }
  }

  return true; // Jika angka tidak habis dibagi dengan bilangan selain 1 dan angka itu sendiri, maka angka adalah bilangan prima
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
