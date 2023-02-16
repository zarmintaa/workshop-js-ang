// Pasangan Angka Terbesar

// Diberikan sebuah function pasanganTerbesar(angka) yang menerima 1 parameter berupa angka.
// Function akan menentukan pasangan dua digit angka mana yang paling besar dan me-return angka tersebut.
// Contoh, jika angka adalah 183928, maka function akan me-return 92, pasangan dua digit angka yang paling besar diantara yang lainnya.

function pasanganTerbesar(num) {
  // you can only write your code here!
  const angkaString = String(num); // Mengubah angka menjadi string
  let pasanganTerbesar = Number(angkaString.slice(0, 2)); // Mengambil dua digit pertama sebagai pasangan terbesar sementara

  for (let i = 1; i < angkaString.length - 1; i++) {
    // Mengambil dua digit berikutnya sebagai pasangan sementara
    const pasanganSementara = Number(angkaString.slice(i, i + 2));

    // Jika pasangan sementara lebih besar daripada pasangan terbesar, maka update pasangan terbesar
    if (pasanganSementara > pasanganTerbesar) {
      pasanganTerbesar = pasanganSementara;
    }
  }

  return pasanganTerbesar; // Mengembalikan pasangan terbesar
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
