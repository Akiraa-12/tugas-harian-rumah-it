// // Program pencatatan data usaha
// // Dibuat oleh rekan sebelumnya
// // code starter
const namaUsaha = "Kopi Senja";
const kotaUsaha = "Yogyakarta";
const tahunBerdiri = "2020";
// menghapus tanda kutip agar bisa menjadi operasi hitung mtk yg benar 
const TARIF_PAJAK = 0.11;
let statusBuka = true
let website = null; 
website = "www.kopisenja.com";
// memperbakiki urutan pada kode diatas agar tidak eror yakni null/
var jumlahProduk = 3;

let produk = ["Kopi Susu", "Es Teh Manis", "Roti Bakar"];
let hargaProduk = [18000, 7500, 15000];

console.log("produk[0] + hargaProduk[0]: " + produk[0] + " - " + hargaProduk[0]);
console.log("produk[1] + hargaProduk[1]: " + produk[1] + " - " + hargaProduk[1]);
console.log("produk[2] + hargaProduk[2]: " + produk[2] + " - " + hargaProduk[2]);


console.log("namaUsaha :" + namaUsaha);
console.log("Kota: " + kotaUsaha);
console.log("Tahun berdiri berikutnya: " + (tahunBerdiri + 1));
console.log("TARIF_PAJAK: " + TARIF_PAJAK);

// TARIF_PAJAK = 0.12;
// di ubah menjadi
 TARIF_PAJAK
// karena konstanta tidak bisa diubah nilainya setelah dideklarasikan, sehingga jika mencoba mengubahnya akan menghasilkan error.
let hargaKopiSetelahPajak = hargaProduk[0] * (1 + TARIF_PAJAK);
console.log("Harga kopi + pajak: " + hargaKopiSetelahPajak);

let hargaTermurah = Math.min(hargaProduk[0], hargaProduk[1], hargaProduk[2]);

console.log("Termurah: " + hargaTermurah);
console.log("Produk ke-4: " + produk[3]);
console.log("Status buka: " + statusBuka);

// ==========================penegerjaan ==========================
// >>>>>>>>>>>>>>>langkah pertama>>>>>>>>>>>>>>>

const namaWarung = "warung mae";
const kota = "lamongan";
const berdiriSejak = 2023;
const owner = "mae lilis";
// let statusBuka = true;

console.log("namaWarung: " + namaWarung);
console.log("kota: " + kota);
console.log("berdiriSejak: " + berdiriSejak);
console.log("owner: " + owner);


console.log(typeof 42);
// tebakan: number
console.log(typeof "42");
// tebakan: string
console.log(typeof true);
// tebakan: boolean
console.log(typeof undefined);
// tebakan: undefined
console.log(typeof null);
// tebakan: object
console.log(typeof [1, 2, 3]);
// tebakan: object
console.log(typeof { nama: "Budi" });
// tebakan: object
console.log("5" + 3);

console.log("5" * 3);
console.log("abc" * 2);
// tebakan: NaN
console.log(10 / 0);
// tebakan: Infinity
console.log(typeof usaha.website);
