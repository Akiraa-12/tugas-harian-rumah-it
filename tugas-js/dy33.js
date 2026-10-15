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