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