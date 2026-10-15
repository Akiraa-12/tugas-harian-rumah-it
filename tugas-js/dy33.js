// Potongan A
const produk = { nama: "Kopi Susu", harga: 18000, stok: 10 };

produk.harga = 20000;
produk.kategori = "minuman";
delete produk.stok;
let kunci = "nama";

console.log(produk.nama);
// tebakan : kopi susu
// hasil : 
console.log(produk[kunci]);
// tebakan : kopi  susu
// hasil : 
console.log(produk["harga"]);
// tebakan : 18000
// hasil : 20000
console.log(produk.stok);
// tebakan : undifined
// hasil : 
console.log("kategori" in produk);
// tebakan : false
// hasil : true
console.log("stok" in produk);
// tebakan : undifined
// hasil : false
console.log(Object.keys(produk));
// tebakan : nama :  , harga :
// hasil : nama :  , harga :,  kategori
console.log(Object.values(produk));
// tebakan : kopi susu, 18000
// hasil : kopi susu, 20000, minuman

// Potongan B

const dompet = {
  pemilik: "Rina",
  saldo: 50000,

  belanja(jumlah) {
    this.saldo -= jumlah;
    return this.saldo;
  },

  cekSaldo() {
    console.log(this.pemilik + ": Rp " + this.saldo);
  },
};

let sisa = dompet.belanja(20000);
console.log(sisa);
//tebakan : 30000
//hasil : 30000
dompet.cekSaldo();
//tebakan : rina : Rp 50000 - 20000
//hasil :  rina Rp 30000
dompet.belanja(10000);
dompet.cekSaldo();
//tebakan : rina : Rp 50000 - 40000
//hasil : rina Rp 20000
console.log(dompet.saldo);
//tebakan : 40000
//hasil : 20000

// Potongan C

const hari = ["Senin", "Selasa"];

for (let nilai of hari) {
  console.log(nilai);
  // tebakan : senin, selasa.
  // hasil : senin, selasa.
}

for (let indeks in hari) {
  console.log(indeks);
  // tebakan :0, 1
    // hasil :0, 1
}

const kopi = { nama: "Kopi", harga: 18000 };

for (let kolom in kopi) {
  console.log(kolom + ": " + kopi[kolom]);
  //tebakan : nama : kopi
             harga : 18000
  //hasil : nama : kopi
             harga : 18000
}

for (let huruf of "Kopi") {
  console.log(huruf);
  //tebakan : k, o, p, i
  //hasil : k, o, p, i
}

// for (let draf of kopi) {
//     console.log(draf);
// }
// pesan eror yg muncul adalah kopi tidak menggunakan string
// Setelah itu, tambahkan satu baris percobaan: for (let x of kopi) { console.log(x); }. Tebak dulu apa yang terjadi, lalu jalankan. Setelah dicoba, jadikan baris itu komentar dan tulis pesan error yang muncul.

// Pada Potongan A, apa beda produk.nama dan produk[kunci]? Kenapa produk.stok hasilnya undefined?
// Pada Potongan B, kenapa dompet.saldo di akhir bernilai 20000, padahal belanja(10000) tidak disimpan ke variabel? Apa yang dirujuk oleh this?
// Pada Potongan C, kenapa for...in pada array menghasilkan 0 dan 1, bukan "Senin" dan "Selasa"? Kenapa for...of pada object kopi menghasilkan error?

// //JAWABAN LANGKAH 1
// potongan A : produk.nama adalah variabel biasa,produk[kunci] adalah bracket notation, hasilnya undifined karena sudah dihapus
// potongan B : karena 10000 terhitung sebagai parameter, yg dirujuk oleh this adalah saldo.
// potongan C : karena pasangannya indeks, bisa eror karena kopi bukan termasuk array (Non-Iterable).

// langkah 2

// Perbaiki 7 Kesalahan
// Salin kode di bawah di bawah Langkah 1. Kode ini punya 7 kesalahan. Komentar Seharusnya memberi tahu hasil yang benar.

// Nama di kode ini sengaja berbeda dari Langkah 1 agar tidak bentrok.

const warung = {
  nama: "Warung Senja",
  saldoKas: 100000,

  // Menambah kas. Seharusnya: setelah tambahKas(50000), saldoKas menjadi 150000
  tambahKas(jumlah) {
    this.saldoKas += jumlah;
    return this.saldoKas;
  },

//   Mengambil kas. Seharusnya mengembalikan sisa saldoKas
  ambilKas(jumlah) {
    this.saldoKas -= jumlah;
    return this.saldoKas;
  },
};

warung.tambahKas(50000);
console.log(warung.saldoKas);
console.log(warung.ambilKas(30000));

// // Key dengan tanda hubung. Seharusnya tercetak: 08123
const kontak = { noWa: "08123" };
console.log(kontak.noWa);

// // Hapus kataSandi dari akun. Seharusnya tercetak: { nama: 'Rina' }
const akun = { nama: "Rina", kataSandi: "abc123" };
delete akun.kataSandi;
console.log(akun);

// // Cetak semua isi array, satu per baris. Seharusnya: Kopi, Teh, Roti
const menu = ["Kopi", "Teh", "Roti"];
for (let item of menu) {
  console.log(item);
}

// // Cetak semua properti object. Seharusnya: nama: Warung Senja dan kota: Yogyakarta
const info = {
  nama: "Warung Senja",
  kota: "Yogyakarta"
};

for (let kolom in info) {
  console.log(kolom + ": " + info[kolom]);
}

// // Daftar kunci object. Seharusnya: [ 'nama', 'kota' ]
console.log(Object.keys(info));

// Yang dikerjakan:

// Perbaiki ke-7 kesalahan. Tandai tiap perbaikan dengan komentar // FIX: ....
// Hasil akhir di console harus:
// 150000
// 120000
// 08123
// { nama: 'Rina' }
// Kopi
// Teh
// Roti
// nama: Warung Senja
// kota: Yogyakarta
// [ 'nama', 'kota' ]


// 1) Ke-7 kesalahan

//    1. Method tambahKas menulis "saldoKas" tanpa this. → tidak mengakses
//       properti object, hanya variabel bebas → perbaikannya pakai this.saldoKas.
//    2. Method ambilKas tidak mengembalikan nilai → hasil pemanggilannya undefined
//       → perbaikannya tambahkan return this.saldoKas;.
//    3. Key no-wa diakses dengan notasi titik yang tidak valid untuk nama
//       ber-tanda-hubung → perbaikannya pakai notasi kurung siku kontak[no-wa].
//    4. Menghapus properti dengan = undefined tidak benar-benar menghapus key
//       → perbaikannya pakai "delete akun.kataSandi".
//    5. Loop array pakai for...in menghasilkan indeks, bukan nilai
//       → perbaikannya pakai for...of.
//    6. Loop object pakai for...of memicu TypeError karena object bukan iterable
//       → perbaikannya pakai for...in.
//    7. Nama method salah: "Object.key" tidak ada → perbaikannya Object.keys.

// 2) Kesalahan yang MENGHENTIKAN program (error di console):
// -  "for...of" pada object → TypeError: info is not iterable.
// - Object.key bukan fungsi → TypeError: Object.key is not a function.

//    Kesalahan yang TIDAK error tapi hasilnya salah:
// - saldoKas += jumlah → dalam mode non-strict, "saldoKas" dianggap
//      variabel global baru sehingga tidak error, tapi tidak mengubah object.
// - ambilKas tanpa return → hasil "undefined", tapi tidak error.
// - kontak.no-wa → dievaluasi sebagai (kontak.no) - (wa) → NaN, tidak melempar error karena dideklarasikan 
// - akun.kataSandi = undefined → key masih ada, hanya nilainya undefined.
// - for...in pada array → mencetak indeks (0,1,2), bukan nilai.

// 3) Beda akun.kataSandi = undefined dan delete akun.kataSandi :
//    - "akun.kataSandi = undefined" hanya menimpa nilai, tapi key-nya masih ada di object. Cek dengan:
//          kataSandi in akun   → true
//      Artinya: key tetap ada, hanya nilainya undefined.
//    - delete akun.kataSandi benar-benar MENGHAPUS key dari object.
