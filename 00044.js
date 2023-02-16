//   Diberikan sebuah function drawTrack yang menerima 2 parameter:
//   - players bertipe array multi dimensi dimana array tersebut berisi info:
//     * nama player
//     * posisi player
//   - lengthOfTrack bertipe number dimana ini mewakilkan panjang lintasan
  
//   Asumsi posisi tidak pernah 0 dan angka negatif.

//   Contoh hasil output bisa dilihat pada test case/driver code


function drawTrack(players, lengthOfTrack) {
    
}
  
console.log(drawTrack([
    ['Lee Minho', 5],
    ['Song Joong Ki', 7]
], 15));

// [ '', '', '', '', 'Lee Minho', '', 'Song Joong Ki', '', '', '', '', '', '', '', '' ]

console.log(drawTrack([
    ['Xavier Fox', 2],
    ['Young Fox', 3],
    ['Zen Fox', 4]
], 9));

// [ [ '', 'Xavier Fox', 'Young Fox', 'Zen Fox', '', '', '', '', '' ]
  