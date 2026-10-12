// let sudahMenikah = false;
// let punyaKtp = true;
// let umur = 20;

// let bolehDaftar = umur >= 17 && punyaKtp && sudahMenikah === false;
// console.log("Boleh daftar: " + bolehDaftar);

// let dapetDiskon =  sudahMenikah || umur >= 60;
// console.log("Dapat diskon: " + dapetDiskon);

// let belumMenikah = !sudahMenikah;
// console.log("Belum menikah: " + belumMenikah);

// ```javascript
// ===================================================langkah pertama=====================================================================

console.log(7 + 3 * 2);
// Tebakan: 13
//karena operator perkalian (*) memiliki prioritas lebih tinggi daripada operator penjumlahan (+) ia mengikuti sistem operasi hutung dalam MTK
console.log((7 + 3) * 2);
// Tebakan: 20
// tanda kurung mengubah urutan operasi sehingga 7 + 3 dihitung terlebih dahulu, kemudian hasilnya dikalikan dengan 2.
// Hasil asli: 20 ✔
console.log(17 % 5);
// Tebakan: 2
// Karena modulus artinya 17 dibagi 5 sisanya adalah 2
// Hasil asli: 2 ✔
console.log(2 ** 3);
// Tebakan: 8
// Karena 2 pangkat 3 adalah 8
// Hasil asli: 8 ✔
console.log(5 == "5");
// Tebakan: true
// Karena operator == akan melakukan konversi tipe data sehingga 5 (number) dan "5" (string) dianggap sama.
// Hasil asli: true ✔
console.log(5 === "5");
// Tebakan: false
// Karena operator === membandingkan nilai dan tipe data, sehingga 5 (number) dan "5" (string) tidak sama.
// Hasil asli: false ✔
console.log(true && false);
//Tebakan: false
// Karena operator && (AND) akan menghasilkan true hanya jika kedua nilai true, dan dalam hal ini true && false menghasilkan false.
// Hasil asli: false ✔
console.log(true || false);
// Tebakan: true
// Karena operator || (OR) akan menghasilkan true jika salah satu hasilnya true, dan dalam hal ini true || false menghasilkan true.
// Hasil asli: true ✔
console.log(!true);
// Tebakan: false
// Hasil asli: false ✔
//karena operator ! (NOT) akan membalikkan nilai boolean, sehingga !true menjadi false.
console.log(10 > 5 && 3 > 8);
// Tebakan: false
// Karena operator && (AND) akan menghasilkan true hanya jika kedua nilai true, dan dalam hal ini 10 > 5 adalah true tetapi 3 > 8 adalah false, sehingga hasilnya false.
// Hasil asli: false ✔
// ```

// ===================================================== (jawab di komentar):=====================================================================

// 1. Untuk tebakan yang **meleset**, tulis kenapa hasilnya begitu. Jika semua benar, tulis tebakan yang menurutmu paling sulit dan alasannya.
// // Alhamdulillah semua tebakan saya benar, tebakan yang menurut saya sulit adalah yg terakhir karena tidak connect dengan &&
// 2. Kenapa `7 + 3 * 2` hasilnya `13`, bukan `20`?
// karena operator perkalian (*) memiliki prioritas lebih tinggi daripada operator penjumlahan (+) ia mengikuti sistem operasi hutung dalam MTK
// 3. Kenapa `5 == "5"` hasilnya `true`, tetapi `5 === "5"` hasilnya `false`?
// karena operator == akan melakukan konversi tipe data sehingga 5 (number) dan "5" (string) dianggap sama, sedangkan operator === membandingkan nilai dan tipe data, sehingga 5 (number) dan "5" (string) tidak sama.

// ===================================================langkah kedua=====================================================================

const hargaKopi = 18000;
const hargaTeh = 7500;
let jumlahMember = 5;
let sudahMember = true;
let uangDiterima = "51000";

// Total 2 kopi + 2 teh. Seharusnya: 51000
let totalPesanan = hargaKopi + hargaTeh * 2;

// Uang diterima sama persis dengan total? Seharusnya: true
let uangPas = uangDiterima == totalPesanan;

// Tambah 1 member baru. Seharusnya jumlahMember jadi 6
jumlahMember + 1;

// Dapat diskon jika sudah member ATAU total lebih dari 100000. Seharusnya: true
let dapatDiskon = sudahMember && totalPesanan > 100000;

console.log(totalPesanan, uangPas, jumlahMember, dapatDiskon);
// ```