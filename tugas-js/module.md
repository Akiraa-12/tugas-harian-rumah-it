# Bab 4: Tipe-tipe Data di JavaScript

## Tujuan Pembelajaran

- Mengenali fungsi utama tipe data dalam mengelola informasi.
- Membedakan tipe data Primitif (String, Number, Boolean, Undefined, Null) dan Non-Primitif (Object, Array).
- Menggunakan operator `typeof` untuk memeriksa tipe data sebuah variabel secara dinamis.

---

## Materi Utama

JavaScript memiliki berbagai jenis nilai yang dapat disimpan dan diproses, yang dikenal sebagai **Tipe Data**. Tanpa informasi tipe data, komputer tidak akan tahu bahwa angka `5` dapat dijumlahkan, sementara teks `"A"` hanya dapat ditampilkan.

Salah satu karakteristik unik JavaScript adalah sistem **_Dynamic Typing_** — sebuah variabel dapat diisi dengan tipe data apa pun, dan bahkan dapat diubah tipenya sewaktu-waktu tanpa menghasilkan error. JavaScript akan menyesuaikan diri secara otomatis.

```javascript
// JavaScript menerima perubahan tipe data tanpa error
let data = 42; // awalnya Number
data = "empat puluh"; // diubah menjadi String — JavaScript tidak keberatan
data = true; // diubah lagi menjadi Boolean
```

Tipe data dibagi menjadi dua kelompok: **Primitif** dan **Non-Primitif**.

---

### 1. Tipe Data Primitif

Tipe data primitif menyimpan **satu nilai tunggal** dalam sebuah variabel.

#### A. String (Teks)

Digunakan untuk menyimpan teks atau kalimat. Nilai String harus diapit oleh tanda kutip tunggal (`''`), kutip ganda (`""`), atau _backtick_ (` `` `).

```javascript
let namaSiswa = "Budi Hartono";
let kotaTinggal = "Bandung";
const keterangan = `Siswa tinggal di ${kotaTinggal}`; // Template literal dengan backtick

// Perhatikan: angka dalam kutip adalah String, bukan Number
const hargaTampil = "Rp 150.000"; // Ini teks, tidak bisa dihitung secara matematis
```

> **Catatan:** _Backtick_ (`` ` ``) memiliki kemampuan tambahan bernama _Template Literal_ — memungkinkan penyisipan nilai variabel langsung ke dalam teks menggunakan `${}`.

#### B. Number (Angka)

Digunakan untuk menyimpan angka bulat, negatif, maupun desimal. Penulisannya **tidak** menggunakan tanda kutip. Untuk angka desimal, gunakan titik (`.`), bukan koma.

```javascript
let umur = 25;
let suhuAir = -7;
const nilaiPhi = 3.14;
let persentase = 98.6;
```

**Nilai Number khusus yang perlu diketahui:**

```javascript
console.log(10 / 0); // Output: Infinity
console.log("abc" * 2); // Output: NaN (Not a Number — hasil operasi yang tidak valid)
```

#### C. Boolean (Logika)

Boolean hanya memiliki dua kemungkinan nilai: **`true`** (benar) dan **`false`** (salah). Tipe ini sangat sering digunakan untuk menyimpan status atau kondisi.

```javascript
let sudahLogin = false;
let lampiNyala = true;
let formTerkirim = false;

// Boolean juga dihasilkan dari operasi perbandingan
console.log(10 > 5); // Output: true
console.log(3 === 7); // Output: false
```

#### D. Undefined (Belum Didefinisikan)

Terjadi ketika sebuah variabel dideklarasikan namun **belum diberi nilai**. JavaScript secara otomatis mengisi variabel tersebut dengan `undefined`.

```javascript
let namaAnak;
console.log(namaAnak); // Output: undefined
console.log(typeof namaAnak); // Output: "undefined"
```

#### E. Null (Kosong yang Disengaja)

`null` adalah nilai yang secara **sengaja** ditetapkan oleh programmer untuk menyatakan bahwa sebuah variabel saat ini tidak memiliki nilai. Berbeda dari `undefined` yang terjadi secara otomatis, `null` adalah keputusan eksplisit.

```javascript
let dataPengguna = null; // Sengaja dikosongkan karena data belum dimuat

// Setelah data dimuat dari server, baru diisi nilainya
dataPengguna = { nama: "Budi", umur: 25 };
```

**Perbedaan `undefined` vs `null`:**

|          | `undefined`                        | `null`                                      |
| -------- | ---------------------------------- | ------------------------------------------- |
| Penyebab | Otomatis oleh JavaScript           | Disengaja oleh programmer                   |
| Artinya  | Variabel belum pernah diberi nilai | Variabel sengaja dikosongkan                |
| `typeof` | `"undefined"`                      | `"object"` _(perilaku historis JavaScript)_ |

---

### 2. Tipe Data Non-Primitif

Tipe data non-primitif digunakan untuk menyimpan **kumpulan nilai** dalam satu variabel.

#### A. Array (Daftar Berurutan)

Digunakan untuk menyimpan daftar beberapa nilai secara berurutan dalam satu variabel. Ditulis menggunakan **kurung siku `[]`**, dengan setiap nilai dipisahkan oleh koma.

```javascript
let daftarBuah = ["Apel", "Jeruk", "Mangga"];
let nilaiUjian = [90, 85, 88, 100];
let campuran = ["Budi", 25, true]; // Array bisa menyimpan tipe data berbeda
```

Setiap nilai dalam array dapat diakses menggunakan **indeks** yang dimulai dari angka `0`:

```javascript
console.log(daftarBuah[0]); // Output: "Apel"    ← indeks ke-0
console.log(daftarBuah[1]); // Output: "Jeruk"   ← indeks ke-1
console.log(daftarBuah[2]); // Output: "Mangga"  ← indeks ke-2
```

#### B. Object (Data Terstruktur)

Digunakan ketika sebuah entitas memiliki beberapa atribut yang terkait satu sama lain — misalnya data pengguna yang memiliki nama, umur, dan alamat. Ditulis menggunakan **kurung kurawal `{}`** dengan format `kunci: nilai`.

```javascript
let dataUser = {
  namaLengkap: "Joko Anwar",
  umur: 28,
  alamat: "Sleman",
  sudahLogin: true,
};
```

Nilai dalam object dapat diakses menggunakan **notasi titik** (`.`) atau **notasi kurung siku**:

```javascript
console.log(dataUser.namaLengkap); // Output: "Joko Anwar"
console.log(dataUser.umur); // Output: 28
console.log(dataUser["alamat"]); // Output: "Sleman"
```

---

### 3. Memeriksa Tipe Data (`typeof`)

Karena JavaScript bersifat dinamis, kadang kamu perlu memastikan tipe data dari sebuah variabel, terutama ketika bekerja dengan data yang datang dari luar (misalnya dari input pengguna atau server). Gunakan operator `typeof` untuk memeriksanya.

```javascript
let umur = 50;
let tahun = "2025";
let aktif = true;
let data;

console.log(typeof umur); // Output: "number"
console.log(typeof tahun); // Output: "string"
console.log(typeof aktif); // Output: "boolean"
console.log(typeof data); // Output: "undefined"
```

**Mengapa `"2025"` bertipe String, bukan Number?**

```javascript
let tahun = "2025";
// Meskipun isinya tampak seperti angka,
// karena diapit tanda kutip, JavaScript memperlakukannya sebagai teks.

console.log(typeof tahun); // Output: "string"
console.log(tahun + 1); // Output: "20251"  ← penggabungan teks, bukan penjumlahan!

let tahunAngka = 2025;
console.log(tahunAngka + 1); // Output: 2026  ← penjumlahan matematika yang benar
```

**Contoh penggunaan `typeof` dalam program:**

```javascript
function tampilkanInfo(nilai) {
  console.log("Nilai  :", nilai);
  console.log("Tipe   :", typeof nilai);
}

tampilkanInfo(42); // Nilai: 42      | Tipe: number
tampilkanInfo("Halo"); // Nilai: Halo    | Tipe: string
tampilkanInfo(true); // Nilai: true    | Tipe: boolean
tampilkanInfo([1, 2, 3]); // Nilai: [1,2,3] | Tipe: object
tampilkanInfo({ nama: "X" }); // Nilai: {nama:X}| Tipe: object
```

---

### Kesimpulan

Memahami tipe data adalah fondasi yang diperlukan untuk menulis logika program yang benar. Banyak bug dalam JavaScript terjadi karena ketidaktahuan tentang tipe data — misalnya menjumlahkan angka yang tidak sengaja tersimpan sebagai String, atau mengakses properti dari variabel yang bernilai `null`.

**Ringkasan Tipe Data:**

| Tipe Data   | Kelompok     | Contoh Nilai                          |
| ----------- | ------------ | ------------------------------------- |
| `String`    | Primitif     | `"Halo"`, `'Budi'`, `` `Teks` ``      |
| `Number`    | Primitif     | `25`, `-7`, `3.14`, `NaN`, `Infinity` |
| `Boolean`   | Primitif     | `true`, `false`                       |
| `Undefined` | Primitif     | `undefined` (otomatis)                |
| `Null`      | Primitif     | `null` (disengaja)                    |
| `Array`     | Non-Primitif | `["Apel", "Jeruk"]`, `[1, 2, 3]`      |
| `Object`    | Non-Primitif | `{ nama: "Budi", umur: 25 }`          |


# Bab 5: Macam-macam Operator di JavaScript

## Tujuan Pembelajaran

- Menggunakan Operator Aritmatika untuk operasi perhitungan matematis.
- Membedakan operator perbandingan `==` dan `===` beserta implikasinya.
- Memahami cara kerja Operator Penugasan (_Assignment_) dan Operator Logika.

---

## Materi Utama

Komputer pada dasarnya adalah alat komputasi. Untuk dapat memproses dan membandingkan nilai dari variabel yang telah dideklarasikan, JavaScript menggunakan **Operator** — yaitu simbol khusus yang memberikan instruksi kepada komputer untuk melakukan suatu operasi pada satu atau lebih nilai.

JavaScript memiliki empat kelompok operator utama yang perlu dikuasai.

---

### 1. Operator Aritmatika

Digunakan untuk melakukan operasi matematika pada nilai bertipe Number.

| Operator | Nama                | Contoh   | Hasil |
| -------- | ------------------- | -------- | ----- |
| `+`      | Penjumlahan         | `5 + 2`  | `7`   |
| `-`      | Pengurangan         | `5 - 2`  | `3`   |
| `*`      | Perkalian           | `5 * 2`  | `10`  |
| `/`      | Pembagian           | `10 / 2` | `5`   |
| `%`      | Modulus (sisa bagi) | `10 % 3` | `1`   |
| `**`     | Perpangkatan        | `2 ** 3` | `8`   |

**Penjelasan Modulus (`%`):**

Modulus mengembalikan sisa dari operasi pembagian. Operator ini sering digunakan untuk menentukan apakah sebuah angka genap atau ganjil.

```javascript
console.log(10 % 3); // Output: 1  (10 dibagi 3 = 3 sisa 1)
console.log(12 % 4); // Output: 0  (12 dibagi 4 = 3 sisa 0 — bilangan genap)
console.log(7 % 2); // Output: 1  (7 dibagi 2 = 3 sisa 1 — bilangan ganjil)
```

**Operator Increment dan Decrement:**

`++` menambahkan nilai sebesar 1, dan `--` menguranginya sebesar 1. Keduanya paling sering digunakan dalam perulangan.

```javascript
let skor = 10;
skor++;
console.log(skor); // Output: 11

skor--;
console.log(skor); // Output: 10
```

**Contoh lengkap — Kalkulasi harga:**

```javascript
const hargaSatuan = 25000;
const jumlahBeli = 4;
const diskon = 10000;

let subtotal = hargaSatuan * jumlahBeli; // 100000
let total = subtotal - diskon; // 90000

console.log("Subtotal :", subtotal); // Output: Subtotal : 100000
console.log("Total    :", total); // Output: Total    : 90000
```

---

### 2. Operator Penugasan (_Assignment Operators_)

Operator penugasan digunakan untuk **menyimpan nilai ke dalam variabel**. Operator utamanya adalah tanda sama dengan (`=`).

Selain itu, terdapat operator penugasan ringkas yang menggabungkan operasi aritmatika dengan penyimpanan nilai:

| Operator | Kepanjangan       | Contoh   | Setara dengan |
| -------- | ----------------- | -------- | ------------- |
| `=`      | Penugasan dasar   | `x = 5`  | `x = 5`       |
| `+=`     | Tambah dan simpan | `x += 3` | `x = x + 3`   |
| `-=`     | Kurang dan simpan | `x -= 3` | `x = x - 3`   |
| `*=`     | Kali dan simpan   | `x *= 2` | `x = x * 2`   |
| `/=`     | Bagi dan simpan   | `x /= 2` | `x = x / 2`   |

```javascript
let poin = 100;

poin += 50; // poin = 100 + 50
console.log(poin); // Output: 150

poin -= 30; // poin = 150 - 30
console.log(poin); // Output: 120

poin *= 2; // poin = 120 * 2
console.log(poin); // Output: 240
```

---

### 3. Operator Perbandingan (_Comparison Operators_)

Operator perbandingan membandingkan dua nilai dan selalu menghasilkan nilai **Boolean** (`true` atau `false`).

| Operator | Arti                               | Contoh      | Hasil   |
| -------- | ---------------------------------- | ----------- | ------- |
| `>`      | Lebih besar dari                   | `5 > 3`     | `true`  |
| `<`      | Lebih kecil dari                   | `5 < 3`     | `false` |
| `>=`     | Lebih besar atau sama dengan       | `5 >= 5`    | `true`  |
| `<=`     | Lebih kecil atau sama dengan       | `3 <= 5`    | `true`  |
| `==`     | Sama nilai (longgar)               | `5 == "5"`  | `true`  |
| `===`    | Sama nilai dan tipe data (ketat)   | `5 === "5"` | `false` |
| `!=`     | Tidak sama nilai (longgar)         | `5 != 3`    | `true`  |
| `!==`    | Tidak sama nilai atau tipe (ketat) | `5 !== "5"` | `true`  |

#### Perbedaan Penting: `==` vs `===`

Ini adalah salah satu sumber kebingungan yang paling umum bagi pemula JavaScript.

**`==` (Perbandingan Longgar — _Loose Equality_)**

Membandingkan hanya **nilainya** saja, dan secara otomatis mengonversi tipe data jika keduanya berbeda sebelum membandingkan. Perilaku ini disebut _type coercion_.

```javascript
5 == "5"; // true  — angka 5 dan string "5" dianggap sama karena nilainya mirip
0 == false; // true  — angka 0 dikonversi menjadi false
"" == false; // true — string kosong dikonversi menjadi false
```

**`===` (Perbandingan Ketat — _Strict Equality_)**

Membandingkan **nilai dan tipe datanya** sekaligus. Tidak ada konversi tipe data. Ini adalah operator yang direkomendasikan untuk digunakan dalam kode produksi.

```javascript
5 === "5"; // false — nilai sama, tapi tipe berbeda (Number vs String)
5 === 5; // true  — nilai sama, tipe sama
false === 0; // false — tipe berbeda (Boolean vs Number)
```

**Mengapa `===` lebih direkomendasikan:**

```javascript
// Dengan ==, hasil yang tidak terduga bisa terjadi
let inputPengguna = "0"; // Pengguna mengetik angka nol sebagai teks
if (inputPengguna == false) {
  console.log("Kondisi terpenuhi"); // Ini akan tereksekusi — kemungkinan bukan yang dimaksud
}

// Dengan ===, perilaku lebih dapat diprediksi
if (inputPengguna === false) {
  console.log("Kondisi terpenuhi"); // Ini TIDAK akan tereksekusi — lebih aman
}
```

> **Panduan praktis:** Selalu gunakan `===` dan `!==` untuk perbandingan. Gunakan `==` hanya jika ada alasan teknis yang sangat spesifik.

---

### 4. Operator Logika (_Logical Operators_)

Operator logika digunakan untuk menggabungkan dua atau lebih kondisi Boolean menjadi satu hasil akhir.

| Operator | Nama | Deskripsi                                                   |
| -------- | ---- | ----------------------------------------------------------- |
| `&&`     | AND  | `true` hanya jika **semua** kondisi bernilai `true`         |
| `\|\|`   | OR   | `true` jika **setidaknya satu** kondisi bernilai `true`     |
| `!`      | NOT  | Membalik nilai Boolean (`true` → `false`, `false` → `true`) |

**Operator AND (`&&`):**

```javascript
let sudahDaftar = true;
let sudahBayar = false;

// AND: semua kondisi harus true
console.log(sudahDaftar && sudahBayar); // Output: false
// Karena sudahBayar masih false, hasilnya false

console.log(sudahDaftar && true); // Output: true
```

**Operator OR (`||`):**

```javascript
let punyaKartuMember = false;
let punyaKodePromo = true;

// OR: cukup satu kondisi yang true
console.log(punyaKartuMember || punyaKodePromo); // Output: true
// Karena punyaKodePromo bernilai true, hasilnya true

console.log(false || false); // Output: false
// Keduanya false, tidak ada yang lolos
```

**Operator NOT (`!`):**

```javascript
let lampuNyala = true;
console.log(!lampuNyala); // Output: false — nilainya dibalik

let formKosong = false;
console.log(!formKosong); // Output: true
```

**Contoh lengkap — Kombinasi operator logika:**

```javascript
let umur = 20;
let punyaKTP = true;
let sudahMenikah = false;

// Boleh mendaftar jika: umur minimal 17 DAN punya KTP
let bolehdaftar = umur >= 17 && punyaKTP;
console.log("Boleh mendaftar:", bolehdaftar); // Output: true

// Mendapat diskon jika: sudah menikah ATAU berusia di atas 60
let dapatDiskon = sudahMenikah || umur > 60;
console.log("Dapat diskon   :", dapatDiskon); // Output: false

// Status belum menikah
let belumMenikah = !sudahMenikah;
console.log("Belum menikah  :", belumMenikah); // Output: true
```

---

### 5. Urutan Prioritas Operator (_Operator Precedence_)

Ketika sebuah ekspresi mengandung lebih dari satu operator, JavaScript tidak mengevaluasinya dari kiri ke kanan secara membabi-buta. JavaScript mengikuti **aturan prioritas** yang menentukan operator mana yang dijalankan terlebih dahulu — mirip dengan aturan matematika yang mengutamakan perkalian dan pembagian sebelum penjumlahan dan pengurangan.

**Contoh sederhana:**

```javascript
let hasil = 2 + 3 * 4;
console.log(hasil); // Output: 14, bukan 20

// Penjelasan:
// Perkalian (*) memiliki prioritas lebih tinggi dari penjumlahan (+)
// Maka JavaScript mengevaluasi: 3 * 4 = 12, lalu 2 + 12 = 14
```

**Tabel prioritas operator dari tertinggi ke terendah:**

| Prioritas     | Operator                 | Keterangan                                   |
| ------------- | ------------------------ | -------------------------------------------- |
| 1 (tertinggi) | `()`                     | Tanda kurung — selalu dieksekusi paling awal |
| 2             | `!`                      | NOT logika                                   |
| 3             | `**`                     | Perpangkatan                                 |
| 4             | `*`, `/`, `%`            | Perkalian, pembagian, modulus                |
| 5             | `+`, `-`                 | Penjumlahan, pengurangan                     |
| 6             | `>`, `<`, `>=`, `<=`     | Perbandingan relasional                      |
| 7             | `==`, `===`, `!=`, `!==` | Perbandingan kesetaraan                      |
| 8             | `&&`                     | AND logika                                   |
| 9             | `\|\|`                   | OR logika                                    |
| 10 (terendah) | `=`, `+=`, `-=`, dll.    | Penugasan                                    |

**Menggunakan tanda kurung untuk kejelasan:**

Tanda kurung `()` memiliki prioritas tertinggi dan selalu dieksekusi pertama. Gunakan tanda kurung untuk memastikan urutan eksekusi sesuai dengan yang dimaksud, sekaligus membuat kode lebih mudah dibaca.

```javascript
// Tanpa kurung — bisa membingungkan
let a = 10 + 2 * 5 - 1;
console.log(a); // Output: 19
// Urutan: (2 * 5) = 10, lalu (10 + 10) = 20, lalu (20 - 1) = 19

// Dengan kurung — urutan eksekusi menjadi eksplisit dan jelas
let b = (10 + 2) * (5 - 1);
console.log(b); // Output: 48
// Urutan: (10 + 2) = 12, lalu (5 - 1) = 4, lalu 12 * 4 = 48
```

**Contoh dengan operator perbandingan dan logika:**

```javascript
let umur = 20;
let premium = true;

// Tanpa kurung — bisa menghasilkan hasil yang tidak terduga
let akses = (umur >= 18 && premium) || false;
// Urutan: (umur >= 18) terlebih dahulu → true
//         (true && premium) → true
//         (true || false)   → true
console.log(akses); // Output: true

// Dengan kurung — niat programmer tersampaikan dengan jelas
let aksesJelas = umur >= 18 && (premium || false);
// Urutan: (umur >= 18) → true
//         (premium || false) → true
//         true && true → true
console.log(aksesJelas); // Output: true
```

> **Rekomendasi:** Jika ragu dengan urutan eksekusi, selalu tambahkan tanda kurung. Kode yang sedikit lebih panjang namun mudah dipahami jauh lebih baik daripada kode yang ringkas namun mengandalkan hafalan aturan prioritas.

---

### Kesimpulan

Operator adalah alat yang kamu gunakan untuk memproses, membandingkan, dan menggabungkan nilai dalam setiap program JavaScript. Memahami perbedaan `==` vs `===`, cara kerja operator logika, dan urutan prioritas eksekusi adalah keterampilan dasar yang akan terus digunakan di seluruh topik berikutnya — terutama saat mempelajari kondisi (`if`) dan perulangan (`for`).

**Ringkasan:**

| Kelompok           | Operator Utama                                                        | Hasil                       |
| ------------------ | --------------------------------------------------------------------- | --------------------------- |
| Aritmatika         | `+`, `-`, `*`, `/`, `%`, `**`                                         | Nilai Number                |
| Penugasan          | `=`, `+=`, `-=`, `*=`, `/=`                                           | Menyimpan nilai ke variabel |
| Perbandingan       | `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`                        | Nilai Boolean               |
| Logika             | `&&`, `\|\|`, `!`                                                     | Nilai Boolean               |
| Prioritas eksekusi | `()` → `!` → `**` → `*/%` → `+-` → perbandingan → `&&` → `\|\|` → `=` | Menentukan urutan evaluasi  |