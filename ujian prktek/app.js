//bagian 1

let umur = 50;
let tahun = "2025";
let aktif = true;
let data = null;

console.log(umur, tahun, aktif, data);
  
//bagian 3

// a) Array 10 harga + for loop → total & rata-rata
const hargaProduk = [75000, 150000, 320000, 45000, 520000, 89000, 1250000, 210000, 65000, 980000];

let totalHarga = 0;
for (let i = 0; i < hargaProduk.length; i++) {
  totalHarga += hargaProduk[i];
}
const rataRataHarga = totalHarga / hargaProduk.length;

console.log("Total harga   :", totalHarga);
console.log("Rata-rata harga:", rataRataHarga);

// b) while loop → produk pertama dengan harga > 500000
let indeks = 0;
while (indeks < hargaProduk.length && hargaProduk[indeks] <= 500000) {
  indeks++;
}
if (indeks < hargaProduk.length) {
  console.log(`Produk pertama > 500000 → indeks ${indeks}, harga ${hargaProduk[indeks]}`);
} else {
  console.log("Tidak ada produk di atas 500000");
}

// c) for...of → semua harga di bawah 100000
console.log("Harga di bawah 100000:");
for (const harga of hargaProduk) {
  if (harga < 100000) {
    console.log("-", harga);
  }
}

// bagian 4
// Buat array daftarProduk berisi nama-nama produk (minimal 8 item string).

// a) Tambahkan 2 produk baru di akhir array (push)
// b) Tambahkan 1 produk di awal array (unshift)
// c) Hapus produk terakhir (pop) dan tampilkan produk yang dihapus
// d) Hapus produk pertama (shift) dan tampilkan produk yang dihapus
// e) Cek apakah "Laptop" ada di dalam array (includes)
// f) Cari posisi indeks "Sepatu" di array (indexOf)
// g) Ambil 3 produk dari indeks ke-2 tanpa mengubah array asli (slice)
// h) Sisipkan produk baru "Mouse Wireless" di posisi indeks ke-3 (splice)
// i) Tampilkan jumlah total produk saat ini (.length)

// a)
let   produk = ["hp","laptop","tv","ps","camera","cctv","scanner","cahrger"]
produk.push("headset","earphone");
console.log(produk);

//b)
produk.unshift("PB");
console.log (produk);

//c)
let produkDihapus = produk.pop()
console.log(produkDihapus);
console.log(produk);

//d)
let produk1Dihapus = produk.shift()
console.log(produk1Dihapus);
console.log(produk);

//e)
console.log(produk.includes("laptop"));

//f)
console.log(produk.indexOf("sepatu")); 

//g)
console.log(produk.slice(2,5))

//h)
let ditambah = produk.splice(3, 0, "mouse wirelles");
console.log(produk)

//i) 
console.log(produk.length);   

//bagian 10
// a) Buat Date object untuk waktu saat ini, tampilkan tanggal lengkap format:
//    "Senin, 20 Oktober 2026"

// b) Hitung berapa hari lagi menuju Tahun Baru (1 Januari tahun depan).

// c) Buat fungsi formatTanggalIndonesia(date) yang menerima Date object
//    dan mengembalikan format "DD/MM/YYYY" (contoh: "20/10/2026")

// d) Buat Date object untuk tanggal lahirmu, hitung umurmu dalam hari.

//a)
const sekarang = new Date ();
console.log (sekarang);

//b)
const tanggalMulai = new Date("2026-10-22");
const tanggalAkhir = new Date("2026-12-31");

// // Hitung selisih dalam millisecond
const selisihMs = tanggalAkhir - tanggalMulai;

// Konversi ke hari
const selisihHari = Math.floor(selisihMs / (1000 * 60 * 60 * 24));
console.log("Selisih:", selisihHari, "hari");
// Selisih: 70 hari

//c)
const tanggal = new Date("2026-10-22");

console.log(tanggal.toLocaleDateString("id-ID"));
// 22/10/2026

// d)
const tanggalStart = new Date("2026-10-22");
const tanggalLast = new Date("2005-12-14");

const berapaMs = tanggalStart - tanggalLast;

const berapaHari = Math.floor(berapaMs / (1000 * 60 * 60 * 24));
console.log("Selisih:", berapaHari, "hari");