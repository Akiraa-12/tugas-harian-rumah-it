// Langkah 1: Tebak Dulu, Baru Cek
// Salin tiga potongan kode di bawah ke tugas_day_35.js, satu per satu. Untuk setiap console.log:

// Tulis tebakan output di komentar sebelum menjalankan kode.
// Jalankan, lalu tulis hasil aslinya.

// Potongan A

const nama = "Global";

function luar() {
  const nama = "Luar";

  function dalam() {
    const nama = "Dalam";
    console.log(nama);
  }

  dalam();
  console.log(nama);
}

luar();
console.log(nama);
// tebakan: dalam luar global
// asli: dalam luar global

const diskonGlobal = 10;

function hitung(harga) {
  const diskonLokal = 5;
  return harga - diskonGlobal - diskonLokal;
}

console.log(hitung(100));
//tebakan: 85
//asli : 85

if (true) {
  let pesanBlok = "di dalam blok";
  console.log(pesanBlok);
 //tebakan: di dalam blok
// asli: di dalam blok
}
// console.log(pesanBlok);
//tebakan: error
//asli: error pesanBlok is not defined

for (let i = 0; i < 2; i++) {
  console.log("putaran", i);
//tebakan: putaran 1
//asli:putaran 0, putaran 1
}
// console.log("putaran", i);
//tebakan: error
//asli: error Uncaught ReferenceError: i is not defined

// Setelah itu, tambahkan dua baris percobaan: console.log(pesanBlok); dan console.log(i); (di luar blok). Tebak dulu apa yang terjadi, jalankan satu per satu, lalu jadikan komentar dan tulis pesan errornya.

// Potongan B

console.log(sapa());
//tebakan: Halo!
//asli: Halo!

function sapa() {
  return "Halo!";
}

console.log(warna);
//tebakan: undifined
//asli: undifined
var warna = "biru";
console.log(warna);
//tebakan: biru
//asli: biru

// Setelah itu, tambahkan dua percobaan berikut (satu per satu, lalu jadikan komentar setelah dicoba):
//1. console.log(lokasi); lalu di bawahnya const lokasi = "Sleman";

//percobaan 1
// console.log (lokasi);
// const  lokasi = "sleman";
//hasil: error  Uncaught ReferenceError: Cannot access 'lokasi' before initialization

// 2. console.log(salam()); lalu di bawahnya const salam = function () { return "Hai"; };
// percobaan 2
// console.log(salam());
// const salam = function () {
//     return "hai";
// };
//hasil: error  Uncaught ReferenceError: Cannot access 'salam' before initialization

// Potongan C

function buatPenghitung() {
  let hitungan = 0;

  return function () {
    hitungan++;
    return hitungan;
  };
}

const penghitungA = buatPenghitung();
const penghitungB = buatPenghitung();

console.log(penghitungA());
//tebakan: 1
// asli:1
console.log(penghitungA());
//tebakan: 2
// asli:2
console.log(penghitungA());
//tebakan: 3
// asli:3
console.log(penghitungB());
//tebakan: 4
// asli:1
console.log(penghitungA());
//tebakan: 5
// asli:4

// Pertanyaan (jawab di komentar):

// Pada Potongan A, kenapa tiga console.log(nama) menghasilkan nilai yang berbeda? Kenapa hitung(100) tetap bisa memakai diskonGlobal? Kenapa pesanBlok dan i error di luar blok?
// Pada Potongan B, kenapa sapa() bisa dipanggil sebelum didefinisikan, sedangkan warna bernilai undefined, dan lokasi serta salam menimbulkan error?
// Pada Potongan C, kenapa penghitungA terus bertambah padahal buatPenghitung sudah selesai dijalankan? Kenapa penghitungB mulai dari 1 lagi?
// Tips: Untuk tebakan yang meleset, tulis kenapa hasilnya begitu. Jika semua tebakanmu benar, tulis tebakan yang menurutmu paling sulit dan alasannya.

// ===== POTONGAN A =====
// A1. Tiga console.log(nama) beda nilai karena LEXICAL SCOPE:
//    js cari variabel dari scope terdekat dulu.
//     dalam() -> "Dalam", luar() -> "Luar", global -> "Global". Ketiganya variabel berbeda.
// A2. hitung(100) bisa pakai diskonGlobal karena diskonGlobal ada discope GLOBAL.
// A3. pesanBlok & i error di luar blok karena pakai let = BLOCK SCOPE.

//  POTONGAN B
// B1. sapa() bisa dipanggil duluan karena FUNCTION DECLARATION di-HOIST utuh
//     (nama + isi), jadi sudah siap sebelum barisnya dieksekusi.
// B2. warna = undefined karena var di-HOIST hanya deklarasinya, bukan nilainya.
// B3. lokasi & salam error karena const/let kena TEMPORAL DEAD ZONE (TDZ)


//  POTONGAN C 
// C1. penghitungA terus bertambah karena CLOSURE: fungsi dalam "mengingat"
//     variabel hitungan dari scope buatPenghitung meski fungsi luarnya sudah selesai.
// C2. penghitungB mulai dari 1 lagi karena tiap panggilan buatPenghitung()
//     bikin scope BARU dengan hitungan baru.

// Tebakan meleset:
// 1. i<2 -> bukan cuma "putaran 1", tapi "putaran 0" dan "putaran 1".
// 2. penghitungB() -> bukan 4, tapi 1 .
// Paling sulit: closure Potongan C .

// Langkah 2: Perbaiki 8 Kesalahan

// Cek stok. Seharusnya tercetak: Stok aman
const stok = 10;
if (stok > 5) {
  let pesanStok = "Stok aman";
  console.log(pesanStok);
}
// console.log(pesanStok);
//fix: console.log didalam

// Potongan 10%. Seharusnya tercetak: 45000
function hitungPotongan(harga) {
  const potongan = harga * 0.1;
  return harga - potongan;
}

console.log (hitungPotongan(50000));
// FIX: potongan di luar scope & tidak memanggil hasil fungsi

// Sambutan. Seharusnya tercetak: Selamat datang di Kedai Senja
// console.log(sambutan());
const sambutan = function () {
  return "Selamat datang di Kedai Senja";
};
console.log(sambutan());
// FIX: console.log dipindah ke atas sebelum dipanggil

// Kota. Seharusnya tercetak: Yogyakarta
// console.log(kota);
let kota = "Yogyakarta";
console.log(kota)
// FIX: deklarasi dipindah sebelum console.log 

// Total awal 100000. Diskon 90000 hanya dipakai di dalam blok.
// Seharusnya setelah blok, total tetap: 100000
var total = 100000;
if (true) {
  // var total = 90000;
  let total = 90000;
}
console.log(total);
// FIX: ganti var → let agar tidak menimpa variabel luar

// Saldo kas. Seharusnya setelah tambahKas(50000): 150000
let saldoKas = 100000;
function tambahKas(jumlah) {
  // let saldoKas = 0; // FIX: hapus `let saldoKas = 0;` agar mengubah variabel luar
  saldoKas += jumlah;
}
tambahKas(50000);
console.log(saldoKas);

// Nomor antrean. Seharusnya tercetak: 1 2 3
function buatAntrean() {
    let nomor = 0;
  return function () {
    // let nomor = 0;
    nomor++;
    return nomor;
  };
}
const ambilNomor = buatAntrean();
console.log(ambilNomor(), ambilNomor(), ambilNomor());

// Dompet. Seharusnya setelah belanja(30000), cekSaldo() mengembalikan: 70000
function buatDompet(saldoAwal) {
  let saldo = saldoAwal;
  return {
    belanja(jumlah) {
      saldo -= jumlah;
    },
    cekSaldo() {
      return saldo; // FIX: ganti `this.saldo` → `saldo`
    },
  };
}
const dompet = buatDompet(100000);
dompet.belanja(30000);
console.log(dompet.cekSaldo());

//jawaban

// 1. memindahkan console kedalam scope

// 2.console.log(potongan) memakai variabel luar scope .

// 3.sambutan dipanggil sebelum dideklarasi (TDZ) → pindahkan deklarasi ke atas.

// 4.kota diakses sebelum let dideklarasi (TDZ) → pindahkan deklarasi ke atas.

//5.var total di dalam blok menimpa variabel luar → ganti jadi let.

//6.let saldoKas = 0; di dalam fungsi membuat variabel lokal → hapus, langsung saldoKas += jumlah.

//7.let nomor = 0; di dalam return function me-reset tiap panggilan → pindahkan ke luar return.

//8.this.saldo di cekSaldo bernilai undefined → ganti return saldo;.

// 2. Error vs hasil salah:

// Error (ReferenceError/TDZ): no. 3 (sambutan) dan no. 4 (kota). No. 2 juga error (potongan is not defined).

// Tidak error tapi hasil salah: no. 1, 5, 6, 7, 8.

// 3. Karena let bersifat block scope — deklarasi di dalam fungsi membuat variabel lokal baru yang menutupi (shadowing) variabel luar. Istilahnya: variable shadowing.

// 4. Karena this di dalam method cekSaldo merujuk ke objek yang dikembalikan ({ belanja, cekSaldo }), yang tidak punya properti saldo — saldo hanya variabel closure di buatDompet. Jadi this.saldo → undefined.

//  Langkah 3: Bikin Kasir Sendiri 
const NAMA_WARUNG = "Warung pakdhe";
const TARIF_PAJAK = 0.11;

// Syarat 2: dipanggil sebelum didefinisikan (function declaration = hoisting)
cetakJudul();

function cetakJudul() {
  console.log(NAMA_WARUNG.toUpperCase());
}

// Syarat 3 & 4: pabrik kasir dengan data privat (closure)
function buatKasir(namaKasir, modalAwal) {
  let saldoKas = modalAwal;
  let jumlahTransaksi = 0;
  let riwayat = [];

  return {
    // Syarat 5
    catatPenjualan(namaMenu, harga, jumlah) {
      const subtotal = harga * jumlah;
      const pajak = subtotal * TARIF_PAJAK; // pakai global scope
      const total = subtotal + pajak;
      saldoKas += total;
      jumlahTransaksi++;
      riwayat.push({ namaMenu, jumlah, total });
      return total;
    },
    // Syarat 6
    ambilKas(jumlah) {
      if (jumlah > saldoKas) return false;
      saldoKas -= jumlah;
      return true;
    },
    // Syarat 7
    cekSaldo() {
      return saldoKas;
    },
    lihatRiwayat() {
      return riwayat.slice(); // salinan, bukan array asli
    },
    // Syarat 8
    ringkasan() {
      console.log(`Kasir ${namaKasir} | Transaksi: ${jumlahTransaksi} | Saldo: ${saldoKas}`);
    },
  };
}

// Syarat 9: dua kasir
const kasirPagi = buatKasir("Rina", 100000);
const kasirMalam = buatKasir("Dodi", 50000);

kasirPagi.catatPenjualan("Kopi", 15000, 2);
kasirPagi.catatPenjualan("Roti", 10000, 1);
kasirPagi.catatPenjualan("Teh", 8000, 3);

kasirMalam.catatPenjualan("Nasi Goreng", 20000, 1);
kasirMalam.catatPenjualan("Es Jeruk", 7000, 2);

console.log(kasirPagi.ambilKas(50000)); // true (berhasil)
console.log(kasirPagi.ambilKas(999999)); // false (gagal)

kasirPagi.ringkasan();
kasirMalam.ringkasan();

// Syarat 10: bukti data privat
console.log(kasirPagi.saldoKas); // undefined
kasirPagi.saldoKas = 999999;
console.log(kasirPagi.cekSaldo()); // tetap saldo asli, bukan 999999

// Syarat 11: bukti salinan
const salinan = kasirPagi.lihatRiwayat();
salinan.push({ namaMenu: "Palsu", jumlah: 1, total: 0 });
console.log(salinan.length);            // 4
console.log(kasirPagi.lihatRiwayat().length); // 3 (asli tidak berubah)

// Syarat 12: pabrik diskon (closure)
function buatPenghitungDiskon(persen) {
  return (harga) => harga - harga * (persen / 100);
}
const diskon10 = buatPenghitungDiskon(10);
const diskon25 = buatPenghitungDiskon(25);
console.log(diskon10(80000)); // 72000
console.log(diskon25(80000)); // 60000

// Syarat 13: shadowing
// const nama = "Global";
function tesShadow() {
  const nama = "Lokal";
  console.log(nama); // "Lokal"
}
tesShadow();
console.log(nama); // "Global"


// jawaban
// 1. kasirPagi.saldoKas = undefined karena saldoKas BUKAN properti object, melainkan variabel lokal di dalam closure buatKasir. Method bisa mengaksesnya
//    karena closure "mengingat" scope tempat ia dibuat.

// 2. saldo kasirPagi & kasirMalam terpisah karena setiap pemanggilan buatKasir membuat closure BARU dengan variabel lokal baru (instance berbeda).

// 3. Setelah buatKasir selesai, yang masih diingat: saldoKas, jumlahTransaksi, riwayat, namaKasir, modalAwal. Tidak hilang karena method-method masih
//    memegang referensi ke scope tersebut (closure).

// 4. TARIF_PAJAK bisa dipakai karena lexical scope: function mencari variabel ke scope luar (global). Mekanismenya: scope chain / lexical scoping.

// 5. cetakJudul() bisa dipanggil sebelum definisi karena function declaration di-hoist. Jika diubah ke const (function expression), hasilnya:
//    // ReferenceError: Cannot access 'cetakJudul' before initialization (TDZ — Temporal Dead Zone)

// 6. diskon10(80000) tahu nilai persen karena arrow function yang dikembalikan  "menangkap" parameter persen dari scope buatPenghitungDiskon — inilah closure.