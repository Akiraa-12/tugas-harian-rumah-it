// Program hitung transaksi Kedai Senja
// const namaKedai = "Kedai Senja";
// const HARGA_KOPI = 18000;
// const HARGA_ROTI = 15000;
// const TARIF_PAJAK = 0.11;
// let jumlahKopi = 3;
// let jumlahRoti = "2";
// let transaksiSelesai = 0;

// // Jumlah seluruh item. Seharusnya: 5
// let jumlahItem = jumlahKopi + jumlahRoti;

// // Subtotal. Seharusnya: 84000
// let subtotal = HARGA_KOPI * jumlahkopi + HARGA_ROTI * jumlahRoti;

// // Pajak 11% dari subtotal setelah dipotong diskon 10000. Seharusnya: 8140
// let pajak = subtotal - 10000 * TARIF_PAJAK;

// // Total bayar. Seharusnya: 82140
// let totalBayar = subtotal - 10000 + pajak

// // Pelanggan membayar 100000. Cukup? Seharusnya: true
// let uangBayar = 100000;
// let uangCukup = uangBayar = totalBayar;

// // Kembalian. Seharusnya: 17860
// let kembalian = totalBayar - uangBayar;

// // Jumlah item genap? Seharusnya: false
// let itemGenap = jumlahItem % 2 === 1;

// // Transaksi selesai bertambah 1. Seharusnya: 1
// transaksiSelesai + 1;

// // Kedai berganti nama. Seharusnya "Kedai Senja Baru"
// let namaKedai = "Kedai Senja Baru";

// // Tarif pajak tidak boleh berubah. Seharusnya tetap 0.11
// TARIF_PAJAK = 0.12;

// Console.log(namaKedai, jumlahItem, subtotal, pajak, totalBayar, uangCukup, kembalian, itemGenap, transaksiSelesai);

//jawaban

//langkah ke empat
//Program hitung transaksi Kedai Senja
let namaKedai = "Kedai Senja baru ";
const HARGA_KOPI = 18000;
const HARGA_ROTI = 15000;
const TARIF_PAJAK = 0.11;
let jumlahKopi = 3;
let jumlahRoti = 2;
let transaksiSelesai = 0;

// Jumlah seluruh item. Seharusnya: 5
let jumlahItem = jumlahKopi + jumlahRoti;
// FIX:merubah nilai jumlah jumlah roti menjadi number agar bisa menjadi operasi hitung bilangan yg benar

// FIX:Subtotal. Seharusnya: 84000
let subtotal = HARGA_KOPI * jumlahKopi + HARGA_ROTI * jumlahRoti;
// FIX:memperbaiki huruf k pada harga kopi

// Pajak 11% dari subtotal setelah dipotong diskon 10000. Seharusnya: 8140
let pajak = (subtotal - 10000) * TARIF_PAJAK;
// FIX:menambahkan kurung di awal

// Total bayar. Seharusnya: 82140
let totalBayar = subtotal - 10000 + pajak;
// FIX:menambahkann titik koma pada akhir statmen

// Pelanggan membayar 100000. Cukup? Seharusnya: true
let uangBayar = 100000;
let uangCukup = uangBayar >= totalBayar;
// FIX:memberikan compare pada  variabel

// Kembalian. Seharusnya: 17860
let kembalian = uangBayar - totalBayar;
// FIX:membalikan variabel

// Jumlah item genap? Seharusnya: false
let itemGenap = jumlahItem % 2 === 0;
// FIX:merubah menjadi nol agar false

// Transaksi selesai bertambah 1. Seharusnya: 1
transaksiSelesai ++;
// FIX:menambahkan tanda plus

// Kedai berganti nama. Seharusnya "Kedai Senja Baru"
let = "Kedai Senja baru ";
// FIX:merubah conts menjadi let

// tarif pajak tidak boleh berubah. Seharusnya tetap 0.11
TARIF_PAJAK
//FIX:hanya mnulis ulang TARIF_PAJAK

console.log("Nama Kedai: " + namaKedai);
console.log("Jumlah Item: " + jumlahItem);
console.log("Subtotal: " + subtotal);   
console.log("Pajak: " + pajak);
console.log("Total Bayar: " + totalBayar);
console.log("Uang Cukup: " + uangCukup);
console.log("Kembalian: " + kembalian);
console.log("Item Genap: " + itemGenap);
console.log("Transaksi Selesai: " + transaksiSelesai);
console.log("Tarif Pajak: " + TARIF_PAJAK * 100 + "%");

console.log(namaKedai, jumlahItem, subtotal, pajak, totalBayar, uangCukup, kembalian, itemGenap, transaksiSelesai);



// CATATAN BUG (12 kesalahan)


// [1] Komentar  tidak ditutup 
//     jenis  : menghentikan program (SyntaxError)
//     sebab  : seluruh sisa file dianggap komentar, sehingga kode tidak jalan.

// [2] jumlahRoti = "2" (string)
//     jenis  : tidak error, hasil salah
//     sebab  : 3 + "2" = "32" (konkatenasi), bukan 5.

// [3] jumlahkopi (typo, huruf kecil)
//     jenis  : menghentikan program (ReferenceError)
//     sebab  : variabel `jumlahkopi` tidak pernah dideklarasikan.

// [4] pajak = subtotal - 10000 * TARIF_PAJAK
//     jenis  : tidak error, hasil salah
//     sebab  : operator precedence — `10000 * 0.11 dihitung dulu,
//              bukan (subtotal - 10000) * 0.1.

// [5] totalBayar tanpa titik koma
//     jenis  : tidak error (ASI), tapi rawan bug
//     sebab  : JavaScript menambahkan ; otomatis, tapi praktik buruk.

// [6] uangCukup = uangBayar = totalBayar
//     jenis  : tidak error, hasil salah
//     sebab  : = adalah assignment, bukan perbandingan (>=). uangCukup
//              jadi berisi angka, bukan boolean.

// [7] kembalian = totalBayar - uangBayar
//     jenis  : tidak error, hasil salah (negatif)
//     sebab  : urutan terbalik; seharusnya uangBayar - totalBayar.

// [8] itemGenap = jumlahItem % 2 === 1
//     jenis  : tidak error, hasil salah
//     sebab  : % 2 === 1 berarti GANJIL, bukan genap. Seharusnya === 0.

// [9] let namaKedai = "Kedai Senja Baru" (setelah `const namaKedai` di atas)
//     jenis  : menghentikan program (SyntaxError)
//     sebab  : redeclaration identifier yang sama di scope yang sama.

// [10] transaksiSelesai + 1;
//      jenis  : tidak error, hasil tidak berubah
//      sebab  : ekspresi tanpa assignment; nilainya dibuang. Harus ++.

// [11] TARIF_PAJAK = 0.12;
//      jenis  : menghentikan program (TypeError)
//      sebab  : assignment ke `const` tidak diizinkan.

// [12] Console.log(...)
//      jenis  : menghentikan program (ReferenceError)
//      sebab  : `Console` (huruf besar) bukan objek global; yang benar console.
