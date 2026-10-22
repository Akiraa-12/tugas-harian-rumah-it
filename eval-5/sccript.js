
//   Nama     : FARIZ
//   Tanggal  : 2026-10-21
//   Tujuan   : Program pencatat transaksi Kedai Senja (Bagian 2 & 3)


// BAGIAN 2: DATA KEDAI 
  nama: "Kedai Senja",{
  pemilik: "Bu Sari",
  kota: "Yogyakarta",
  tahunBerdiri: 2018,
  sedangBuka: true,
  nomorWhatsApp: "6281234567890",
  website: null,
  jamOperasional: { buka: "08:00", tutup: "21:00" },
};

const menu = [
  { nama: "Kopi Senja",    kategori: "Minuman", harga: 18000, stok: 20, tersedia: true  },
  { nama: "Es Teh",        kategori: "Minuman", harga: 8000,  stok: 30, tersedia: true  },
  { nama: "Roti Bakar",    kategori: "Makanan", harga: 15000, stok: 15, tersedia: true  },
  { nama: "Nasi Goreng",   kategori: "Makanan", harga: 25000, stok: 10, tersedia: true  },
  { nama: "Matcha Latte",  kategori: "Minuman", harga: 22000, stok: 0,  tersedia: false },
  { nama: "Pisang Goreng", kategori: "Makanan", harga: 12000, stok: 8,  tersedia: true  },
];

const transaksi = [
  {
    kode: "TRX-001", pelanggan: "Andi", sudahMember: true, uangBayar: 50000,
    catatan: "Tanpa gula",
    pesanan: [ { indeksMenu: 0, jumlah: 1 }, { indeksMenu: 2, jumlah: 2 } ],
  },
  {
    kode: "TRX-002", pelanggan: "Budi", sudahMember: false, uangBayar: 30000,
    catatan: null,
    pesanan: [ { indeksMenu: 1, jumlah: 2 }, { indeksMenu: 3, jumlah: 1 } ],
  },
  {
    kode: "TRX-003", pelanggan: "Citra", sudahMember: true, uangBayar: 100000,
    catatan: null,
    pesanan: [ { indeksMenu: 0, jumlah: 2 }, { indeksMenu: 5, jumlah: 3 } ],
  },
];

// 
//Cetak data 

console.log(kedai.nama);
console.log(kedai["kota"]);
console.log(kedai.jamOperasional.tutup);
console.log(menu[0], menu[menu.length - 1]);
console.log(transaksi[1].pelanggan);
console.log(menu[transaksi[2].pesanan[1].indeksMenu].nama);

console.log(typeof kedai.tahunBerdiri); 
      // "number"
console.log(typeof kedai.sedangBuka);   
      // "boolean"
console.log(typeof kedai.website);       
     // "object" (null)
console.log(typeof kedai.jamOperasional);  
   // "object"
console.log(typeof menu);                 
    // "object" (array = object)
console.log(typeof transaksi[0].catatan); 
   // "string"

let catatanKasir;
console.log(catatanKasir); // undefined


//   JAWABAN BAGIAN 2:
//   1. nomorWhatsApp disimpan sebagai string karena nomor telepon bukan untuk
//      dihitung, tapi dihubungi. String menjaga angka 0 di depan & menghindari
//      kehilangan presisi.
//   2. website = null karena field-nya SENGAJA kosong (diketahui tidak ada),
//      sedangkan catatanKasir tanpa nilai karena belum diinisialisasi (undefined).
//   3. menu[6] = undefined, karena indeks array dimulai dari 0, jadi item ke-6
//      ada di indeks 5. Indeks 6 tidak ada.
//   4. typeof menu = "object", karena array di JavaScript secara teknis adalah
//      object (khusus).
//   5. menu = array karena kumpulan item berurutan (bisa di-loop, diindeks);
//      kedai = object karena mendeskripsikan satu entitas dengan properti
//      bernama (key-value).

