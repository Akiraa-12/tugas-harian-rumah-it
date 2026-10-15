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