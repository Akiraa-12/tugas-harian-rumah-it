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


  //  LANGKAH 3: BIKIN KASIR SENDIRI
  //  Nama  : (Fariz)
  //  Tujuan: Membuat object kasirKedai dengan method untuk mencari harga,
  //          mengelola keranjang, menghitung diskon/pajak, dan mencetak struk.
   


//  OBJECT KASIR KEDAI 


const kasirKedai = {
    nama: "Kedai Senja",
    kota: "Yogyakarta",
    saldoKas: 0,
    jamOperasional: { buka: "08:00", tutup: "21:00" },
    menu: [
        { nama: "Kopi Susu",     kategori: "minuman", harga: 18000, stok: 10 },
        { nama: "Es Teh Manis",  kategori: "minuman", harga: 7500,  stok: 20 },
        { nama: "Roti Bakar",    kategori: "makanan", harga: 15000, stok: 8  },
        { nama: "Nasi Goreng",   kategori: "makanan", harga: 25000, stok: 6  },
        { nama: "Pisang Goreng", kategori: "makanan", harga: 10000, stok: 15 }
    ],
    keranjang: [],

   
    // Method: cariHarga
    // Mencari harga menu berdasarkan nama. Return 0 jika tidak ditemukan.
   
    cariHarga: function (namaMenu) {
        for (const item of this.menu) {
            if (item.nama === namaMenu) {
                return item.harga;
            }
        }
        return 0;
    },

   
    // Method: tambahKeKeranjang
    // Menambah item ke keranjang + mengurangi stok. Return true/false.
  
    tambahKeKeranjang: function (namaMenu, jumlah) {
        for (const item of this.menu) {
            if (item.nama === namaMenu) {
                if (item.stok >= jumlah) {
                    this.keranjang.push({ nama: namaMenu, jumlah: jumlah });
                    item.stok -= jumlah;
                    return true;
                }
                return false; // nama ada, stok tidak cukup
            }
        }
        return false; // nama tidak ditemukan
    },

    // Method: hitungSubtotal
    // Menjumlahkan harga × jumlah tiap item di keranjang.
  
    hitungSubtotal: function () {
        let subtotal = 0;
        for (const item of this.keranjang) {
            subtotal += this.cariHarga(item.nama) * item.jumlah;
        }
        return subtotal;
    },

   
    // Method: hitungDiskon
    // Aturan: ≥100000 → 15%, ≥50000 → 10%, ≥25000 → 5%, selain itu 0.
   
    hitungDiskon: function (subtotal) {
        if (subtotal >= 100000) {
            return subtotal * 0.15;
        } else if (subtotal >= 50000) {
            return subtotal * 0.10;
        } else if (subtotal >= 25000) {
            return subtotal * 0.05;
        }
        return 0;
    },


    // Method: cetakStruk
    // Mencetak struk rapi, lalu menambah total ke saldoKas.
 
    cetakStruk: function () {
        const subtotal = this.hitungSubtotal();
        const diskon = this.hitungDiskon(subtotal);
        const setelahDiskon = subtotal - diskon;
        const pajak = setelahDiskon * 0.11;
        const total = setelahDiskon + pajak;

    
        console.log(`         ${this.nama.toUpperCase()}`);
        console.log(`         ${this.kota}`);


        let nomor = 1;
        for (const item of this.keranjang) {
            const harga = this.cariHarga(item.nama);
            const hargaItem = harga * item.jumlah;
            console.log(`${nomor}. ${item.nama} x${item.jumlah}  @Rp ${harga}  = Rp ${hargaItem}`);
            nomor++;
        }

      
        console.log(`Subtotal     : Rp ${subtotal}`);
        console.log(`Diskon       : Rp ${diskon}`);
        console.log(`Pajak 11%    : Rp ${pajak}`);
        console.log(`Total        : Rp ${total}`);
        

        this.saldoKas += total;
        console.log(`Saldo kas sekarang: Rp ${this.saldoKas}`);
    }
};


//  7 PROPERTI DINAMIS (BRACKET NOTATION) 


// Menyimpan nama properti dalam variabel memaksa kita memakai bracket
// notation, karena dot notation tidak bisa menerima variabel.
const namaPropertiBaru = "website";
kasirKedai[namaPropertiBaru] = "https://kedaisenja.id";

console.log("Ada 'website'? ", "website" in kasirKedai); // true

delete kasirKedai[namaPropertiBaru];
console.log("Setelah dihapus? ", "website" in kasirKedai); // false


// 8 FOR...IN PADA OBJECT 


console.log("\n--- for...in: jamOperasional ---");
for (const kunci in kasirKedai.jamOperasional) {
    console.log(`${kunci}: ${kasirKedai.jamOperasional[kunci]}`);
}

console.log("\n--- for...in: menu pertama ---");
for (const kunci in kasirKedai.menu[0]) {
    console.log(`${kunci}: ${kasirKedai.menu[0][kunci]}`);
}


// 9 OBJECT.KEYS DAN OBJECT.VALUES 


console.log("\nObject.keys(jamOperasional)   :", Object.keys(kasirKedai.jamOperasional));
// ["buka", "tutup"]

console.log("Object.values(jamOperasional) :", Object.values(kasirKedai.jamOperasional));
// ["08:00", "21:00"]


// 10 HITUNG HURUF "a" DI kasirKedai.nama 


let jumlahHurufA = 0;
for (const huruf of kasirKedai.nama) {
    if (huruf === "a") {
        jumlahHurufA++;
    }
}
console.log(`\nJumlah huruf "a" di "${kasirKedai.nama}": ${jumlahHurufA}`);
// "Kedai Senja" → 2 huruf 'a'


//11 UJI SKENARIO 

console.log("\n########## SKENARIO 1 ##########");
// Keranjang: Kopi Susu x2, Roti Bakar x1, Pisang Goreng x2
console.log(kasirKedai.tambahKeKeranjang("Kopi Susu", 2));     
console.log(kasirKedai.tambahKeKeranjang("Roti Bakar", 1));     
console.log(kasirKedai.tambahKeKeranjang("Pisang Goreng", 2)); 
kasirKedai.cetakStruk();

console.log("\n########## SKENARIO 2 ##########");
// Reset keranjang untuk skenario baru
kasirKedai.keranjang = [];

// Keranjang: Nasi Goreng x3, Es Teh Manis x4, Kopi Susu x2
console.log(kasirKedai.tambahKeKeranjang("Nasi Goreng", 3));    
console.log(kasirKedai.tambahKeKeranjang("Es Teh Manis", 4));   
console.log(kasirKedai.tambahKeKeranjang("Kopi Susu", 2));     
kasirKedai.cetakStruk();

// Kasus gagal:
console.log("\n########## UJI GAGAL ##########");
console.log(kasirKedai.tambahKeKeranjang("Matcha Latte", 1));   
console.log(kasirKedai.tambahKeKeranjang("Kopi Susu", 999));   



// HASIL SKENARIO


// Skenario 1: Kopi Susu x2, Roti Bakar x1, Pisang Goreng x2
// Hasil struk:
// Subtotal: 18000×2 + 15000×1 + 10000×2 = 36000 + 15000 + 20000 = 71000
// Diskon  : 71000 ≥ 50000 → 10% = 7100
// Setelah diskon: 71000 - 7100 = 63900
// Pajak   : 63900 × 0.11 = 7029
// Total   : 63900 + 7029 = 70929

// Skenario 2: Nasi Goreng x3, Es Teh Manis x4, Kopi Susu x2
// Hasil struk:
// Subtotal: 25000×3 + 7500×4 + 18000×2 = 75000 + 30000 + 36000 = 141000
// Diskon  : 141000 ≥ 100000 → 15% = 21150
// Setelah diskon: 141000 - 21150 = 119850
// Pajak   : 119850 × 0.11 = 13183.5
// Total   : 119850 + 13183.5 = 133033.5

// Uji gagal:
// - tambahKeKeranjang("Matcha Latte", 1) → false  (menu tidak ada)
// - tambahKeKeranjang("Kopi Susu", 999)   → false  (stok hanya 8 setelah skenario 2)


// JAWABAN 


// 1. Beda dot notation dan bracket notation:
//    - Dot: kasirKedai.nama → ringkas, hanya untuk nama properti yang valid
//      sebagai identifier (tanpa spasi, tidak diawali angka).
//    - Bracket: kasirKedai["kota"] atau kasirKedai[namaPropertiBaru] →
//      wajib dipakai ketika nama properti disimpan dalam VARIABEL, mengandung
//      spasi/tanda khusus, atau diakses lewat hasil ekspresi.
//    Contoh dari kode: kasirKedai.nama (dot) dan kasirKedai[namaPropertiBaru]
//    (bracket, karena nama propertinya ada di variabel).

// 2. Kenapa this.saldoKas, bukan saldoKas?
//    Karena saldoKas adalah properti milik object kasirKedai. Di dalam method,
//    kita harus merujuk ke object pemiliknya lewat this. Kalau kita tulis
//    saldoKas saja, JavaScript akan mencari variabel lokal/global bernama
//    saldoKas dan tidak menemukannya.
//    Bukti:
//      // console.log(saldoKas);
//      // → ReferenceError: saldoKas is not defined

// 3. Beda for...of dan for...in:
//    - for...of → mengiterasi NILAI dari iterable (array, string, Map, Set).
//      Di kode: for (const item of this.menu), for (const huruf of kasirKedai.nama)
//    - for...in → mengiterasi KUNCI (key) dari object.
//      Di kode: for (const kunci in kasirKedai.jamOperasional)
//    Tidak bisa ditukar karena for...of tidak menerima plain object (tidak
//    iterable), dan for...in pada array memberi indeks sebagai string —
//    bukan nilai elemennya.

// 4. for...of pada kasirKedai (object) error karena object biasa bukan
//    iterable (tidak punya Symbol.iterator). String dan array punya.
//    Pesan errornya:
//      // TypeError: kasirKedai is not iterable

// 5. Beda Object.keys dan Object.values:
//    - Object.keys(obj)   → array berisi NAMA properti.
//      Hasil di kode: ["buka", "tutup"]
//    - Object.values(obj) → array berisi NILAI properti.
//      Hasil di kode: ["08:00", "21:00"]

// 6. Kenapa cariHarga dan hitungSubtotal memakai return, sedangkan
//    cetakStruk boleh tidak?
//    - cariHarga dan hitungSubtotal menghasilkan NILAI yang akan dipakai
//      perhitungan lain → harus di-return agar nilainya bisa ditangkap.
//    - cetakStruk hanya melakukan aksi (console.log + update saldoKas) →
//      tidak perlu mengembalikan nilai.
//    Jika hitungSubtotal hanya memakai console.log tanpa return:
//      const subtotal = this.hitungSubtotal();
  
