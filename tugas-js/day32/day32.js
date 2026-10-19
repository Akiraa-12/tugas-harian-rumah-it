// Potongan A

let menu = ["Kopi", "Teh", "Roti", "Susu"];

menu.push("Jus");
menu.unshift("Air");
let terakhirDibuang = menu.pop();
let pertamaDibuang = menu.shift();
menu.splice(1, 1);
let irisan = menu.slice(1, 3);

console.log(terakhirDibuang);
// tebakan :jus
// hasil : jus
console.log(pertamaDibuang);
// tebakan : air 
// hasil : air
console.log(menu);
// tebakan : air, kopi, roti, jus
// hasil : kopi, roti susu

console.log(irisan);
// tebakan : air, kopi, roti
// hasil : air, kopi

console.log(menu.indexOf("Susu"));
// tebakan : susu
// hasil : 2

console.log(menu.indexOf("Nasi"));
// tebakan : tidak ditemukan
// hasil : -1

console.log(menu.includes("Kopi"));
// tebakan : true
// hasil : true

console.log(menu[menu.length - 1]);
// tebakan : jus
// hasil : susu


// Potongan B

function tambah(a, b) {
  return a + b;
}

function cetakTambah(a, b) {
  console.log(a + b);
//tebakan :  2, 3
// hasil: 5
}

let x = tambah(2, 3);
let y = cetakTambah(2, 3);
console.log(x);
// tebakan : 5
// hasil : 5
console.log(y);
// tebakan : 2, 3
// hasil : undifined


// Potongan C

const hitungDiskonPersen = (harga, persen = 10) => harga - (harga * persen) / 100;
console.log(hitungDiskonPersen(50000, 20));
// tebakan : 4000
// hasil : 40000
console.log(hitungDiskonPersen(50000));
// tebakan : 4500
// hasil : 45000

function cekAngka(n) {
  if (n < 0) {
    return "negatif";
    console.log("Baris ini muncul atau tidak?");
  }
  return "bukan negatif";
}

console.log(cekAngka(-5));
// tebakan : negatif
// hasil : negatif
console.log(cekAngka(5));
// tebakan : bukan negatif
// hasil : bukan negatif

// Pada Potongan A, kenapa menu dan irisan isinya berbeda? Mana method yang mengubah array aslinya, dan mana yang tidak?
// Pada Potongan B, apa beda tambah dan cetakTambah? Kenapa y bernilai undefined?
// Pada Potongan C, kenapa hitungDiskonPersen(50000) tetap menghasilkan angka? Apakah baris console.log("Baris ini muncul atau tidak?") tercetak? Kenapa?

//JAWABAN
// potongan A
//    Karena slice() TIDAK mengubah array asli, hanya MENYALIN sebagian elemen ke array baru. Pada saat slice(1, 3) dipanggil, menu berisi
//    ["Kopi", "Roti", "Susu"], maka indeks 1 & 2 → ["Roti", "Susu"]. Sedangkan menu tetap ["Kopi", "Roti", "Susu"].  

// 2. Method yang MENGUBAH array asli :
//    - push()    → tambah di belakang
//    - unshift() → tambah di depan
//    - pop()     → hapus di belakang
//    - shift()   → hapus di depan
//    - splice()  → hapus/ganti di posisi mana pun

//      Method yang TIDAK mengubah array asli :
//    - slice()   → menyalin sebagian array ke array baru
//    - indexOf() → hanya mencari posisi, tidak mengubah
//    - includes()→ hanya mengecek keberadaan, tidak mengubah

//potongan B

//1. Beda tambah dan cetakTambah:
//    - tambah()      : memakai RETURN → mengembalikan nilai hasil (a+b) ke pemanggil, bisa disimpan di variabel.
//    - cetakTambah() : memakai CONSOLE.LOG → hanya menampilkan ke layar, TIDAK mengembalikan nilai. Nilai balik default-nya undefined.

// 2. Kenapa y = undefined?
//    Karena cetakTambah tidak punya return. Setiap fungsi JavaScript yang tidak memiliki return eksplisit akan otomatis mengembalikan undefined.
//    "5" tercetak di layar BUKAN karena dikembalikan, tapi karena efek samping (side effect) dari console.log di dalam fungsi.

//    Analogi: 
//    - return  → seperti menyerahkan kertas jawaban ke pemanggil.
//    - console.log → seperti menulis di papan tulis; semua orang lihat, tapi tidak ada yang bisa "menerima" tulisannya.

// potongan c

// 1. Karena parameter "persen" punya DEFAULT VALUE = 10. Jika argumen keduatidak diberikan,
//  JavaScript otomatis memakai nilai default 10. Jadi hitungDiskonPersen(50000)
//  sama dengan hitungDiskonPersen(50000, 10) → 50000 - (50000 × 10)/100 = 50000 - 5000 = 45000.

// 2. TIDAK. Karena baris itu berada SETELAH "return" di dalam blok if. Begitu JavaScript mengeksekusi "return", ia langsung keluar dari
//    fungsi dan mengembalikan nilainya. Semua kode setelah return (dalam blok yang sama) menjadi "unreachable code" — tidak akan
//    pernah dijalankan.
//    Itulah sebabnya cekAngka(-5) hanya mencetak "negatif", tanpa diikuti pesan dari console.log yang terlewat.



// LANGKAH DUA

let daftarBelanja = ["Kopi", "Teh", "Roti"];

// Tambah "Susu" di akhir daftar. Seharusnya: ["Kopi", "Teh", "Roti", "Susu"]
daftarBelanja.push("Susu");
console.log(daftarBelanja)
// FIX:mengganti unshift menjadi push.

// Hapus "Teh" (indeks 1) dari daftar. Seharusnya: ["Kopi", "Roti", "Susu"]
daftarBelanja.splice(1, 1);
// FIX:mengganti slice menjadi .shift
console.log(daftarBelanja)

// Cek apakah "Roti" ada di daftar. Seharusnya: true
let adaRoti = daftarBelanja.includes("Roti");
//FIX:meggaanti indexof menjadi includes

// Elemen terakhir daftar. Seharusnya: "Susu"
let terakhir = daftarBelanja[daftarBelanja.length - 1];
console.log(terakhir)
console.log([daftarBelanja.length - 1])
// FIX:menambahkan -2

// Harga setelah diskon. Seharusnya hitungDiskon(100000, 20) = 80000
function hitungDiskon(harga, persen = 20) {
  return harga - (harga * persen) / 100;
}
// FIX: menambahkan return

// Pajak 11%. Seharusnya hitungPajak(80000) = 8800
const hitungPajak = (subtotal = 80000) => {
  return subtotal * 0.11;
};
// FIX:menambahkan return dan = 80000 pada subtotal

console.log(daftarBelanja, adaRoti, terakhir);
console.log(hitungDiskon(100000, 20));
console.log(hitungPajak(80000));

// function hitungTotal(subtotal )
// Total dengan pajak. Seharusnya hitungTotal(80000, 8800) = 88800
const hitungTotal = (subtotal, pajak) => subtotal + pajak;
console.log(hitungTotal(80000, 8800));


// 1.   7    Kesalahan                                              Perbaikan
// 1  unshift("Susu") menambah di DEPAN, bukan di akhir      Ganti jadi push("Susu")
// 2  slice(1, 1) hanya menyalin, tidak menghapus            Ganti jadi splice(1, 1)
// 3  adaRoti memakai indexOf → hasilnya angka (indeks)      Bungkus dengan !== -1, atau pakai includes("Roti")
// 4  daftarBelanja[length] melewati indeks terakhir         Kurangi 1 → daftarBelanja[length - 1]
// 5  hitungDiskon tidak ada "return"                        Tambah "return" sebelum harga - ...
// 6  hitungPajak tidak ada "return" di arrow function       Tambah "return subtotal * 0.11;"
// 7  hitungTotal dipanggil SEBELUM dideklarasikan (const)   Pindahkan deklarasi hitungTotal di atas console.log

//2.
// a. eror (program berhenti / baris tidak dijalankan):  No. 7: hitungTotal dipanggil sebelum deklarasi.
//      → ReferenceError: Cannot access 'hitungTotal' before initialization (karena const kena temporal dead zone).

// b. tidak eror tapi hasilnya salah :
//    - No. 1: unshift → "Susu" masuk ke depan, urutan jadi salah.
//    - No. 2: slice   → "Teh" tidak terhapus, array tetap berisi "Teh".
//    - No. 3: indexOf → hasilnya angka (1), bukan boolean (true).
//    - No. 4: [length] → hasilnya undefined, bukan "Susu".
//    - No. 5: hitungDiskon tanpa return → hasilnya undefined.
//    - No. 6: hitungPajak tanpa return   → hasilnya undefined.

// 3.
// Keduanya sama-sama undefined karena SAMA-SAMA TIDAK MEMAKAI "return".
// - hitungDiskon  → function DECLARATION (function biasa).
// - hitungPajak   → ARROW function dengan kurung kurawal { }.

// LANGKAH 3

// PROGRAM KASIR (TAMBAHAN DI BAGIAN PALING BAWAH FILE)

//  Data awal 
// Dua array paralel: nama menu & harganya berpasangan berdasarkan indeks.
const kasirNamaMenu = ["Kopi Susu", "Es Teh", "Roti Bakar", "Nasi Goreng", "Jus Jeruk"];
const kasirHargaMenu = [18000, 7500, 15000, 22000, 12000];

// Keranjang mulai kosong, akan diisi lewat method array.
let kasirKeranjang = [];

//  Kelola keranjang menggunakan method array 

// push: menambah item di belakang (item biasa).
kasirKeranjang.push("Kopi Susu");
kasirKeranjang.push("Es Teh");
kasirKeranjang.push("Roti Bakar");

// unshift: menambah item prioritas di DEPAN (misal pesanan cepat).
kasirKeranjang.unshift("Jus Jeruk");

// Tambah 1 lagi agar minimal 4 item terpenuhi dengan variasi.
kasirKeranjang.push("Nasi Goreng");

// pop: membatalkan item terakhir (Nasi Goreng dihapus).
kasirKeranjang.pop();

// shift: membatalkan item paling depan (Jus Jeruk dihapus).
kasirKeranjang.shift();

// splice: mengganti item di indeks 1 ("Es Teh") dengan "Teh Tarik".
kasirKeranjang.splice(1, 1, "Teh Tarik");

// Isi keranjang akhir: ["Kopi Susu", "Teh Tarik", "Roti Bakar"]
// Tambah 1 lagi agar minimal 4 item.
kasirKeranjang.push("Nasi Goreng");
// Isi akhir: ["Kopi Susu", "Teh Tarik", "Roti Bakar", "Nasi Goreng"]

console.log("Isi keranjang akhir:", kasirKeranjang);

//  includes & slice 
// includes mengecek apakah satu menu ada di keranjang (mengembalikan boolean).
const kasirAdaKopi = kasirKeranjang.includes("Kopi Susu");
const kasirAdaJus  = kasirKeranjang.includes("Jus Jeruk");
console.log("Ada Kopi Susu?", kasirAdaKopi);   // true
console.log("Ada Jus Jeruk?", kasirAdaJus);    // false (sudah di-shift)

// slice: menyalin 3 item pertama sebagai "paket cepat" (tidak mengubah asli).
const kasirPaketCepat = kasirKeranjang.slice(0, 3);
console.log("Paket cepat (3 item pertama):", kasirPaketCepat);
// ["Kopi Susu", "Teh Tarik", "Roti Bakar"]

// --- Function 1: kasirCariHarga (function declaration) ---
// Memakai indexOf untuk mencari posisi nama menu, lalu mengambil harga
// pada indeks yang sama di kasirHargaMenu. return dipakai agar nilai
// bisa diproses fungsi lain (bukan sekadar dicetak).
function kasirCariHarga(namaMenu) {
    const indeks = kasirNamaMenu.indexOf(namaMenu);
    if (indeks === -1) {
        return 0;   // menu tidak ditemukan
    }
    return kasirHargaMenu[indeks];
}

// Function 2: kasirHitungSubtotal (function expression) 
// Menjumlahkan harga semua item di keranjang dengan memanggil kasirCariHarga.
const kasirHitungSubtotal = function (keranjang) {
    let subtotal = 0;
    for (let i = 0; i < keranjang.length; i++) {
        subtotal += kasirCariHarga(keranjang[i]);
    }
    return subtotal;
};

//  Function 3: kasirHitungDiskon (arrow function dengan return) 
const kasirHitungDiskon = (subtotal) => {
    if (subtotal >= 100000) {
        return subtotal * 0.15;
    } else if (subtotal >= 50000) {
        return subtotal * 0.10;
    } else if (subtotal >= 25000) {
        return subtotal * 0.05;
    } else {
        return 0;
    }
};

// --- Function 4: kasirHitungPajak (arrow function ringkas + default) ---
// Karena pakai default parameter, pemanggilan 1 argumen otomatis memakai 0.11.
const kasirHitungPajak = (nilai, tarif = 0.11) => nilai * tarif;

// --- Function 5: kasirCetakStruk (tanpa return, hanya mencetak) ---
const kasirCetakStruk = (keranjang, subtotal, diskon, pajak) => {

    console.log("Item yang dibeli:");
    for (let i = 0; i < keranjang.length; i++) {
        console.log(`  ${i + 1}. ${keranjang[i].padEnd(15)} Rp ${kasirCariHarga(keranjang[i])}`);
    }
    console.log(`Subtotal     : Rp ${subtotal}`);
    console.log(`Diskon       : Rp ${diskon}`);
    console.log(`Pajak 11%    : Rp ${pajak}`);
    console.log(`Total Bayar  : Rp ${subtotal - diskon + pajak}`); 
};

// --- Fungsi utama: hitung & cetak untuk keranjang saat ini ---
const kasirSubtotal = kasirHitungSubtotal(kasirKeranjang);
const kasirDiskon   = kasirHitungDiskon(kasirSubtotal);
const kasirPajak    = kasirHitungPajak(kasirSubtotal - kasirDiskon);
const kasirTotal    = kasirSubtotal - kasirDiskon + kasirPajak;

kasirCetakStruk(kasirKeranjang, kasirSubtotal, kasirDiskon, kasirPajak);
console.log("Total akhir:", kasirTotal);

// SKENARIO 1: keranjang berisi ["Kopi Susu", "Teh Tarik", "Roti Bakar", "Nasi Goreng"]
//
// Perhitungan harga:
// - Kopi Susu  (18000)
// - Teh Tarik  (TIDAK ADA di kasirNamaMenu → kasirCariHarga = 0)
// - Roti Bakar (15000)
// - Nasi Goreng (22000)
//
// Subtotal = 18000 + 0 + 15000 + 22000 = 55000
// Diskon   = 10% (karena 55000 >= 50000)  → 5500
// Setelah diskon = 55000 - 5500 = 49500
// Pajak    = 49500 × 0.11 = 5445
// Total    = 49500 + 5445 = 54945
//
// Hasil:
// Subtotal: 55000
// Diskon  : 5500
// Pajak   : 5445
// Total   : 54945

// SKENARIO 2: keranjang diubah agar diskonnya beda (misal 15%)
//
// Kode yang dijalankan untuk skenario 2:
//     kasirKeranjang = ["Kopi Susu", "Roti Bakar", "Nasi Goreng", "Nasi Goreng", "Kopi Susu"];
//     kasirKeranjang.push("Jus Jeruk");
//
// Perhitungan:
// - Kopi Susu  x2 = 36000
// - Roti Bakar x1 = 15000
// - Nasi Goreng x2 = 44000
// - Jus Jeruk  x1 = 12000
//
// Subtotal = 36000 + 15000 + 44000 + 12000 = 107000
// Diskon   = 15% (karena 107000 >= 100000) → 16050
// Setelah diskon = 107000 - 16050 = 90950
// Pajak    = 90950 × 0.11 = 10004.5
// Total    = 90950 + 10004.5 = 100954.5
//
// Hasil:
// Subtotal: 107000
// Diskon  : 16050
// Pajak   : 10004.5
// Total   : 100954.5

// JAWABAN PERTANYAAN
//
// 1. Method yang mengubah array asli: push.
//    Bukti:
//      console.log(kasirKeranjang);       // ["Kopi Susu", "Teh Tarik", "Roti Bakar"]
//      kasirKeranjang.push("Nasi Goreng");
//      console.log(kasirKeranjang);       // ["Kopi Susu", "Teh Tarik", "Roti Bakar", "Nasi Goreng"]
//    Panjang array bertambah, artinya push MENGUBAH array aslinya (mutating).
//
// 2. Beda splice dan slice:
//    - splice(i, n, ...) MENGUBAH array asli: menghapus n item dari indeks i,
//      dan bisa menyisipkan item baru.
//      Contoh: kasirKeranjang.splice(1, 1, "Teh Tarik");
//              → mengganti "Es Teh" dengan "Teh Tarik" di array asli.
//    - slice(a, b) TIDAK mengubah array asli, hanya menyalin dari indeks a
//      sampai b-1 ke array BARU.
//      Contoh: const kasirPaketCepat = kasirKeranjang.slice(0, 3);
//              → array baru, kasirKeranjang tetap utuh.
//
// 3. kasirCariHarga memakai return karena nilai harganya akan DIPAKAI
//    fungsi lain (kasirHitungSubtotal). return mengembalikan nilai yang
//    bisa diproses lebih lanjut.
//    Jika diganti console.log, fungsi akan mengembalikan undefined.
//    Akibatnya, subtotal += kasirCariHarga(...) akan menjadi
//    subtotal += undefined → hasilnya NaN (Not a Number).
//
// 4. Parameter vs argumen:
//    - Parameter: variabel di definisi fungsi.
//      Contoh: "namaMenu" pada function kasirCariHarga(namaMenu).
//    - Argumen: nilai yang dikirim saat pemanggilan.
//      Contoh: "Kopi Susu" pada kasirCariHarga("Kopi Susu").
//    Parameter adalah "wadah"; argumen adalah "isi" yang dimasukkan.
//
// 5. kasirHitungPajak(nilai, tarif = 0.11) boleh dipanggil dengan 1 atau 2
//    argumen karena parameter kedua punya DEFAULT VALUE. Jika argumen ke-2
//    tidak diberikan, JavaScript otomatis memakai 0.11.
//      kasirHitungPajak(100000)        → 100000 × 0.11 = 11000
//      kasirHitungPajak(100000, 0.05)  → 100000 × 0.05 = 5000
//
// 6. Memanggil kasirHitungSubtotal SEBELUM didefinisikan akan ERROR,
//    karena ia adalah function expression yang disimpan di variabel const.
//    Variabel const tidak bisa diakses sebelum deklarasi (temporal dead zone).
//    Sedangkan kasirCariHarga adalah function DECLARATION, yang di-hoist
//    (diangkat) ke atas oleh JavaScript, sehingga aman dipanggil lebih dulu.
//
//    Bukti (jadikan komentar setelah diuji):
//      // console.log(kasirHitungSubtotal(kasirKeranjang));
//      // → ReferenceError: Cannot access 'kasirHitungSubtotal' before initialization
//
//      console.log(kasirCariHarga("Kopi Susu"));
//      // → 18000 (berhasil meski didefinisikan di bawah, karena hoisting)