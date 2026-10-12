if (0) {
  console.log("1: masuk");
}
//tebakan : false, tidak ada output
//hasil :

if ("0") {
  console.log("2: masuk");
}
//tebakan : true, ada output 2: masuk
//hasil : 2: masuk

if ("") {
  console.log("3: masuk");
}
//tebakan : false, tidak ada output
//hasil :

if ([]) {
  console.log("4: masuk");
}
//tebakan : true, ada output 4: masuk
//hasil : 4: masuk

if (null) {
  console.log("5: masuk");
}
//tebakan : false, tidak ada output
//hasil :

if (-1) {
  console.log("6: masuk");
}
//tebakan : true, ada output 6: masuk
//hasil : 6: masuk


// Potongan B

let belanja = 120000;

if (belanja >= 25000) {
  console.log("  Diskon 15%");
} else if (belanja >= 50000) {
  console.log("Diskon 15%");
} else if (belanja >= 100000) {
  console.log(" Diskon 15%");
} else {
  console.log("Tidak ada diskon");
}

//tebakan : output belanja >= 100000 adalah 20%
//hasil : 5%

// // Potongan C

let hari = "sabtu";

switch (hari) {
  case "jumat":
    console.log("Promo Jumat Berkah");
    break
  case "sabtu":
    console.log("Promo Akhir Pekan");
    break
  case "minggu":
    console.log("Promo Keluarga");
    break;
  default:
    console.log("Tidak ada promo");
}

// tebakan : output akan menuliskan promo akhir pekan.
// hasil : promo akhir pekan


//JAWAABAN PERTANYAAN

// 1. karena keduanya termasuk bagian jenis truthy
// 2. karena nilai variabelnya pada walnya 5%, perbaikan merubah 5% menjadi 15%
// 3. agar tercipta menadi satu baris ialah memberikan break dibawah setiap case

//Langkah 2: Perbaiki 5 Kesalahan

let totalBelanja = 80000;
let jenisMember = "gold";
let kodeVoucher = "";
let diskon;
let potonganMember;

// Diskon berdasarkan total belanja. Seharusnya: 8000 (diskon 10%)

if (totalBelanja >= 100000) {
  diskon = totalBelanja * 0.15;
} else if (totalBelanja >= 50000) {
  diskon = totalBelanja * 0.10;
} else if (totalBelanja >= 25000) {
  diskon = totalBelanja * 0.05;
} else {
  diskon = 0;
}

// Potongan member. "gold" 5000, "silver" 2000, lainnya 0. Seharusnya untuk "gold": 5000


switch  (jenisMember) {
  case "gold":
    potonganMember = 5000;
    break
  case "silver":
    potonganMember = 2000;
    break;
  default:
    potonganMember = 0;
}

// Voucher. Seharusnya tercetak: Voucher tidak dipakai

if ((kodeVoucher === "")) {
  console.log(" Voucher tidak dipakai" );
} else {
  console.log("Voucher dipakai: " + kodeVoucher);
}

// Total akhir. Seharusnya: 67000

let totalAkhir = totalBelanja - diskon - potonganMember;
// console.log(totalAkhir)

// Pembayaran dengan uang pas. Seharusnya tercetak: Status: Lunas

let uangBayar = 67000;
if (uangBayar >= totalAkhir) {
  console.log("Status: Lunas");
} else { (uangBayar < totalAkhir)
  console.log("Status: Kurang");
}

console.log(diskon, potonganMember, totalAkhir);

// Pertanyaan (jawab di komentar):

// 1. Tulis ke-5 kesalahan tadi dalam satu kalimat singkat masing-masing (apa salahnya, dan perbaikannya apa).
// 2. Mana kesalahan yang menyebabkan error di console, dan mana yang tidak error tetapi hasilnya salah?
// 3. Pada if (kodeVoucher = ""), apa bedanya =, ==, dan ===? Kenapa kodenya tidak error?

//JAWABAN
// 1. a.kesalahan penulisan yg tidak benar, perbaikan merubah ke spo penulisan yg benar yakni camelCase/caseCamel
    //b. kesalahan urutan, merubah menjadi dari yg terbesar ke yg terkecil
    //c. tidak ada break, menambahkan break
    //d. operator perbandingan pada swicth = menjadi ====
    //e. keasalahan dalam menentukan operator, menambahkan compare operator >= 


//Bagian Langkah 3

//  Data awal 
const kasirNamaPelanggan = "epen";
const kasirTotalBelanja  = 90000;
const kasirHari          = "sabtu";
const kasirJenisMember   = "silver";
const kasirKodeVoucher   = "SENJA10";
const kasirUangBayar     = 100000;


// ATURAN 2: Diskon berdasarkan total belanja 

let kasirDiskonBelanja = 0;
if (kasirTotalBelanja >= 100000) {
    kasirDiskonBelanja = kasirTotalBelanja * 0.15;
} else if (kasirTotalBelanja >= 50000) {
    kasirDiskonBelanja = kasirTotalBelanja * 0.10;
} else if (kasirTotalBelanja >= 25000) {
    kasirDiskonBelanja = kasirTotalBelanja * 0.05;
} else {
    kasirDiskonBelanja = 0;
}


// ATURAN 3: Potongan member

let kasirPotonganMember = 0;
if (kasirJenisMember === "gold") {
    kasirPotonganMember = 5000;
} else if (kasirJenisMember === "silver") {
    kasirPotonganMember = 2000;
} else {
    kasirPotonganMember = 0;
}


// ATURAN 4: Promo hari memakai switch
// "sabtu" dan "minggu" digabung (tanpa break di antara keduanya).

let kasirPromoHari = 0;
switch (kasirHari) {
    case "jumat":
        kasirPromoHari = 3000;
        break;
    case "sabtu":
    case "minggu":
        kasirPromoHari = 5000;
        break;
    default:
        kasirPromoHari = 0;
        break;
}


// ATURAN 5: Validasi nama memakai Truthy/Falsy

if (kasirNamaPelanggan) {
    console.log(`Pelanggan: ${kasirNamaPelanggan}`);
} else {
    console.log("Nama pelanggan belum diisi");
}


// ATURAN 6: Voucher memakai Truthy/Falsy

let kasirPotonganVoucher = 0;
if (kasirKodeVoucher) {
    kasirPotonganVoucher = 2000;
    console.log(`Voucher dipakai: ${kasirKodeVoucher}`);
} else {
    kasirPotonganVoucher = 0;
    console.log("Voucher tidak dipakai");
}


// ATURAN 7: Total akhir

const kasirTotalAkhir = kasirTotalBelanja
                      - kasirDiskonBelanja
                      - kasirPotonganMember
                      - kasirPromoHari
                      - kasirPotonganVoucher;


// ATURAN 8 Status pembayaran

let kasirStatusPembayaran = "";
let kasirKembalian = 0;
let kasirKekurangan = 0;

if (kasirUangBayar > kasirTotalAkhir) {
    kasirKembalian = kasirUangBayar - kasirTotalAkhir;
    kasirStatusPembayaran = `Lunas, kembalian Rp ${kasirKembalian}`;
} else if (kasirUangBayar === kasirTotalAkhir) {
    kasirStatusPembayaran = "Lunas (uang pas)";
} else {
    kasirKekurangan = kasirTotalAkhir - kasirUangBayar;
    kasirStatusPembayaran = `Kurang Rp ${kasirKekurangan}`;
}


// ATURAN 9

console.log("");
console.log(`Hari             : ${kasirHari}`);
console.log(`Jenis Member     : ${kasirJenisMember}`);
console.log(`Total Belanja    : Rp ${kasirTotalBelanja}`);
console.log(`Diskon Belanja   : Rp ${kasirDiskonBelanja}`);
console.log(`Potongan Member  : Rp ${kasirPotonganMember}`);
console.log(`Promo Hari       : Rp ${kasirPromoHari}`);
console.log(`Potongan Voucher : Rp ${kasirPotonganVoucher}`);
console.log(`Total Akhir      : Rp ${kasirTotalAkhir}`);
console.log(`Uang Bayar       : Rp ${kasirUangBayar}`);
console.log(`Status           : ${kasirStatusPembayaran}`);

//  ATURAN 10

//skenario -1

// const kasirNamaPembeli = "Rehan";
// const kasirTotalBelanjaan  = 90000;
// const kasirHariIni          = "sabtu";
// const kasirTipeMember   = "silver";
// const kasirKodeVoucherBelanja   = "SENJA10";
// const kasirUangBayarBelanja     = 100000;

// Total belanja       = 90000
// Diskon belanja      : 90000 >= 50000 → 10% → 90000 × 0.10 = 9000
// Potongan member     : "silver" → 2000
// Promo hari          : "sabtu" → 5000
// Potongan voucher    : "SENJA10" terisi → 2000
// Total akhir         = 90000 − 9000 − 2000 − 5000 − 2000 = 72000
// Uang bayar          = 100000
// Status              : 100000 > 72000 → "Lunas, kembalian Rp 28000"

// Pelanggan: Rehan
// Voucher dipakai: SENJA10
// Hari             : sabtu
// Jenis Member     : silver
// Total Belanja    : Rp 90000
// Diskon Belanja   : Rp 9000
// Potongan Member  : Rp 2000
// Promo Hari       : Rp 5000
// Potongan Voucher : Rp 2000
// Total Akhir      : Rp 72000
// Uang Bayar       : Rp 100000
// Status           : Lunas, kembalian Rp 28000

//skenario -2

// const kasirNamaPembeli = "Reza";
// const kasirTotalBelanjaan  = 60000;
// const kasirHariIni          = "selasa";
// const kasirTipeMember   = "gold";
// const kasirKodeVoucherBelanja   = "SENJA8";
// const kasirUangBayarBelanja     = 60000;
//
//
// Perhitungan:
// Diskon belanja  : 60000 >= 50000 → 5% → 60000 × 0.05= 3000
// Potongan member : "gold" → 5000
// Promo hari      : "selasa" → 3000
// Potongan voucher: "SENJA8" terisi → 2000
// Total akhir     : 60000 − 3000 − 5000 − 3000 − 2000 = 47000
// Uang bayar      : 47000
// Status          : 47000 === 47000 → Lunas (uang pas)

// Pelanggan: Reza
// Voucher dipakai: SENJA8
// Hari             : selasa
// Jenis Member     : gold
// Total Belanja    : Rp 60000
// Diskon Belanja   : Rp 3000
// Potongan Member  : Rp 5000
// Promo Hari       : Rp 3000
// Potongan Voucher : Rp 2000
// Total Akhir      : Rp 47000
// Uang Bayar       : Rp 47000
// Status           : Lunas, kembalian Rp 0 (pas)

//skenario -3

// const kasirNamaPembeli         = "Regi";
// const kasirTotalBelanjaan      = 45000;
// const kasirHariIni             = "kamis";
// const kasirTipeMember          = "belumMember";
// const kasirKodeVoucherBelanja  = "PAGI5";
// const kasirUangBayarBelanja    = 40000;


// Perhitungan:
// Total belanja       = 45000
// Diskon belanja      : 45000 >= 25000 → 5% → 45000 × 0.05 = 2250
// Potongan member     : "belumMember" → 0
// Promo hari          : "kamis" → default → 0
// Potongan voucher    : "PAGI5" terisi → 2000
// Total potongan      = 2250 + 0 + 0 + 2000 = 4250
// Total akhir         = 45000 − 4250 = 40750
// Uang bayar          = 40000
// Status              : 40000 < 40750 → Kurang Rp 750

// Pelanggan: Regi
// Voucher dipakai: PAGI5
// Hari             : kamis
// Jenis Member     : belumMember
// Total Belanja    : Rp 45000
// Diskon Belanja   : Rp 2250
// Potongan Member  : Rp 0
// Promo Hari       : Rp 0
// Potongan Voucher : Rp 2000
// Total Akhir      : Rp 40750
// Uang Bayar       : Rp 40000
// Status           : Kurang Rp 750

// Pertanyaan (jawab di komentar):

// Kenapa urutan else if pada diskon dimulai dari angka terbesar? Apa yang terjadi jika dibalik?
// Kenapa promo hari lebih cocok memakai switch, bukan if...else if?
// Pada switch promo hari, di mana kamu sengaja tidak menulis break, dan kenapa hasilnya tetap benar?
// Sebutkan 3 nilai yang membuat if (namaPelanggan) bernilai false.
// Jika jumlah beli bernilai -1, apa hasil if (jumlahBeli) dan if (jumlahBeli > 0)? Kenapa berbeda?

//JAWABAN
// 1. karena urutan sangat penting dalam perhitungan java pada if else, ia mengambill nilai yg berada dia awal, jadi jika mengambil dari yg kecil maka yg besar dibawahnya tdk termasuk hitungan
// 2. karena promo memebutuhkan variabel yg didefinisikan makanya ia membutuhkan compare untk variabel yang lebih kompleks dan spesifik.
// 3. ketika menulis promo yg sama dihari yg berurutan, 