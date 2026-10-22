
// 5.1 TEBAK
// Format: tebak: <tebakan> | hasil: <hasil asli>


console.log(5 + "5");              // tebak: "55"      | hasil: 55  (string)
console.log("10" - 4);             // tebak: 6         | hasil: 6   (number)
console.log("10" * "2");           // tebak: 20        | hasil: 20  (number)
console.log(typeof ("5" + 5));     // tebak: "string"  | hasil: string
console.log(9 % 4);                // tebak: 1         | hasil: 1
console.log((2 + 3) ** 2);         // tebak: 25        | hasil: 25
console.log(10 / 4);               // tebak: 2.5       | hasil: 2.5
console.log(1 / 0);                // tebak: Infinity  | hasil: Infinity
console.log("abc" * 2);            // tebak: NaN       | hasil: NaN
console.log(typeof NaN);           // tebak: "number"  | hasil: number
console.log((5 > 3 && 2 > 4) || 1 === 1); // tebak: true | hasil: true
console.log(!true || !false);      // tebak: true      | hasil: true
console.log("5" == 5 && "5" !== 5);// tebak: true      | hasil: true
console.log(typeof [] === typeof {}); // tebak: true   | hasil: true
console.log([10, 20, 30][1] + [10, 20, 30][2]); // tebak: 50 | hasil: 50



// 5.2 EKSPERIMEN var DAN let


// Kasus 1: var bocor keluar blok, let tidak
{
  var bocor = "aku bocor dari blok";
  let terkunci = "aku tetap di dalam blok";
  console.log("Di dalam blok:", bocor, "|", terkunci);
}
console.log("Di luar blok (var):", bocor);       // berhasil: "aku bocor dari blok"
// console.log(terkunci);                        // ERROR: ReferenceError: terkunci is not defined
// ↑ jika diaktifkan: ReferenceError: terkunci is not defined

// Kasus 2: var boleh dideklarasi ulang, let tidak 
var dobel = 1;
var dobel = 2;
console.log("var dobel:", dobel);                // 2 (tidak error)

let tunggal = 1;
// let tunggal = 2;                              // ERROR: SyntaxError: Identifier 'tunggal' has already been declared
// ↑ jika diaktifkan: SyntaxError: Identifier 'tunggal' has already been declared



// 5.3 JELASKAN



// 1) Kenapa 5 + "5" dan "10" - 4 hasilnya berbeda jenis?
//    - Operator `+` jika salah satu operand string → KONKATENASI.
//      `5 + "5"` = "55" (string).
//    - Operator `-` HANYA untuk angka → kedua operand dipaksa jadi number.
//      `"10" - 4` = 10 - 4 = 6 (number).

// 2) typeof NaN = "number". Apa artinya NaN, kenapa tipenya number?
//    - NaN = "Not a Number", nilai khusus yang muncul saat operasi numerik
//      gagal (mis. "abc" * 2).
//    - Tipenya "number" karena NaN adalah nilai numerik khusus (bagian dari
//      tipe number di JavaScript), bukan string/object.

// 3) Urutan evaluasi 5 > 3 && 2 > 4 || 1 === 1:
//    Langkah:
//    a. 5 > 3          → true
//    b. 2 > 4          → false
//    c. true && false  → false      (&& lebih tinggi dari ||)
//    d. 1 === 1        → true
//    e. false || true  → true
//    Hasil akhir: true.

// 4) typeof [] = "object". Bagaimana membedakan array dari object biasa?
//    - Array.isArray([])        → true
//    - Array.isArray({})        → false
//    - Atau: [] instanceof Array → true
//    - Atau cek Array.prototype.isPrototypeOf.

// 5) let hasil = 5 + 10; lalu console.log(hasil * 2);
//    Statement:
//    - `let hasil = 5 + 10;`        (deklarasi + assignment)
//    - `console.log(hasil * 2);`    (pemanggilan fungsi)
//    Expression & nilainya:
//    - 5 + 10      → 15
//    - hasil       → 15
//    - hasil * 2   → 30
//    - console.log(...) → undefined (efek samping: mencetak 30)

// 6) eksperimen.js dijalankan di mana dan oleh apa?
//    - Dijalankan di BROWSER, dimuat oleh eksperimen.html lewat <script src>.
//    - Bedanya dengan Node.js: Node menjalankan JS di luar browser (tanpa DOM,
//      tanpa window), sedangkan di browser ada DOM & window.
//    - Modul ini memakai let/const (bukan var) karena:
//      * block scope → tidak bocor keluar blok,
//      * tidak bisa redeclare (const) → lebih aman dari bug,
//      * praktik modern ES6+.

// 7) Hasil eksperimen var dan let:
//    - var `bocor` tetap bisa dibaca di luar blok → "aku bocor dari blok".
//    - let `terkunci` TIDAK bisa dibaca di luar blok → ReferenceError.
//    - var `dobel` dideklarasi 2x → tidak error, nilai terakhir 2.
//    - let `tunggal` dideklarasi 2x → SyntaxError.

// 8) Contoh nyata bug karena var bocor / redeclare:
//    - Loop dengan setTimeout:
//        for (var i = 0; i < 3; i++) {
//          setTimeout(() => console.log(i), 100);
//        }
//      Semua callback mencetak 3 (bukan 0,1,2), karena `var i` satu scope
//      yang sama dan nilainya sudah 3 saat callback jalan.
//      Perbaikan: ganti `var` → `let` agar tiap iterasi punya binding sendiri.
//    - Redeclare `var total` di dua fungsi berbeda bisa saling menimpa jika
//      lupa `let`/`const`, menyebabkan perhitungan salah tanpa error.
// 
