    for (let i = 7; i >= 4; i--) {
  console.log(i);
}
console.log("Mulai!");


let total = 0;

for (let i = 3; i <= 15; i++) {
  total += i;
}

console.log("Total:", total); 

const buah = ["PISANG", "NANGKA", "PIR", "SAWO"];

for (let i = 0; i < buah.length; i++) {
  console.log(i + 1 + ".", buah[i]);
}

let angkaRahasia = 11;
let tebakan = 5;
let percobaan = 7;

while (tebakan !== angkaRahasia) {
  percobaan++;
  tebakan = Math.floor(Math.random() * 20) + 1; 
  console.log("Percobaan ke-" + percobaan + ": menebak angka", tebakan);
}

console.log(
  "Berhasil menebak angka",
  angkaRahasia,
  "dalam",
  percobaan,
  "percobaan.",
);

// let konfirmasi;

// do {
//   konfirmasi = prompt("Ketik 'ya' untuk memesan:");
// } while (konfirmasi !== "ya");

// console.log("Pembeli telah memesan. Melanjutkan pemesanan...");

// let konfirmasi;

// INI EROR MAS GATAU KENAPA

for (let i = 1; i <= 90; i++) {
  if (i === 30) {
    console.log(
      "Target ditemukan pada posisi ke-" + i + ". Pencarian dihentikan.",
    );
    break;
  }
  console.log("Memeriksa posisi ke-" + i);
}

const nilai = [15, -5, 12, -10, 11, 4];

console.log("Nilai valid:");
for (let i = 0; i < nilai.length; i++) {
  if (nilai[i] < 0) {
  }
  console.log("-", nilai[i]);
}

const daftarNilai = [98, 55, 82, -1, 78, 77, 90, 10, 87 ,];
let jumlah = 0;
let valid = 0;
let invalid = 0;

for (let i = 0; i < daftarNilai.length; i++) {
  const nilai = daftarNilai[i];

  if (nilai < 0 || nilai > 100) {
    console.log("Nilai tidak valid dilewati:", nilai);
    invalid++;
    continue;
  }

  jumlah += nilai;
  valid++;
}

const rataRata = jumlah / valid;

console.log("---");
console.log("Total data    :", daftarNilai.length);
console.log("Data valid    :", valid);
console.log("Data tidak valid:", invalid);
console.log("Rata-rata     :", rataRata.toFixed(2));
