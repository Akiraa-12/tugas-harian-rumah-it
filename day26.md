1. Jelaskan mengapa Merge Conflict bisa terjadi. Sebutkan minimal 2 situasi yang memicunya, dan berikan 1 contoh skenario nyata (misal dua orang mengedit file yang sama)!

2. Perhatikan potongan kode berikut:
```<<<<<<< HEAD
<h1 style="color: red;">Selamat Datang</h1>
=======
<h1 style="color: blue;">Selamat Datang</h1>
>>>>>>> branch-teman```

a. Apa arti dari masing-masing penanda <<<<<<< HEAD, =======, dan >>>>>>> branch-teman?
b. Baris mana yang merupakan versi dari branch aktifmu?
c. Baris mana yang merupakan versi dari branch yang datang?

3. Jelaskan 2 cara menyelesaikan Merge Conflict: melalui Visual Studio Code dan melalui editor teks manual. Untuk masing-masing cara, sebutkan langkah-langkahnya! Mengapa VS Code direkomendasikan untuk pemula?

4. Setelah semua konflik diselesaikan secara manual, apa yang harus dijalankan di terminal untuk mencatat hasilnya? Tuliskan urutan perintahnya (minimal 3 perintah) dan jelaskan fungsi masing-masing!

5. Apa fungsi dari perintah git merge --abort? Sebutkan 1 situasi nyata di mana kamu sebaiknya menggunakan perintah ini daripada menyelesaikan konflik secara manual!

6. Sebutkan minimal 4 praktik terbaik untuk meminimalkan frekuensi Merge Conflict dalam kerja tim. Untuk masing-masing praktik, jelaskan mengapa praktik tersebut dapat mengurangi risiko konflik!

7. Jelaskan mengapa pesan commit yang jelas sangat penting. Berikan 3 contoh pesan commit yang buruk dan 3 contoh pesan commit yang baik!

8. Jelaskan format penulisan Conventional Commits. Sebutkan minimal 4 tipe commit beserta fungsinya, dan berikan 1 contoh pesan commit untuk masing-masing tipe!

9. Perhatikan 3 pesan commit berikut:
- git commit -m "update"
- git commit -m "fix bug tombol"
- git commit -m "feat: menambahkan fitur pencarian produk di navbar"
Mana yang paling baik? Jelaskan alasanmu berdasarkan prinsip penulisan pesan commit yang benar!

10. Apa fungsi file .gitignore dalam proyek Git? Sebutkan minimal 4 jenis file yang sebaiknya dimasukkan ke dalam .gitignore, dan jelaskan mengapa masing-masing jenis file tersebut tidak perlu di-upload ke GitHub!

11. Jelaskan format standar penamaan branch yang direkomendasikan. Berikan 3 contoh penamaan branch yang baik, beserta alasan mengapa format ini lebih baik dibanding penamaan yang bebas!

12. Jelaskan peran masing-masing dari ketiga teknologi web (HTML, CSS, JavaScript) dalam pengembangan website. 

13. Jelaskan 2 lingkungan tempat JavaScript dapat dijalankan.

14. Jelaskan perbedaan antara JavaScript dan ECMAScript (ES). Berikan 1 contoh perbandingan kode antara gaya lama dan gaya modern!

                    ============jawaban===========

1. Mengapa Merge Conflict Terjadi
Karena 2 branch mengubah baris yang sama di file yang sama.

2 Pemicu:
1. Dua orang edit file yang sama di baris yang sama.
2. Satu hapus file, satu edit file yang sama.

Contoh : Andi ubah header jadi merah di main, Budi ubah jadi biru di fitur, saat merge tabrakan.

 2. Analisis Penanda Konflik
<<<<<<< HEAD
<h1 style="color: red;">Selamat Datang</h1>

<h1 style="color: blue;">Selamat Datang</h1>
>>>>>>> branch-teman

a. <<<<<<< HEAD = awal versi branch aktifmu
   ======= = pemisah
   >>>>>>> branch-teman = akhir versi branch datang

b. Versi aktif: <h1 style="color: red;">...

c. Versi datang: <h1 style="color: blue;">...

 3. Cara Menyelesaikan Konflik

VS Code:
1. Buka file, klik Accept Current / Incoming / Both
2. Save

Manual:
1. Buka file di text editor
2. Pilih manual & hapus tanda <<<<<<< ======= >>>>>>>
3. Save

Kenapa VS Code?Ada tombol warna, lebih mudah untuk pemula.

4. Perintah Setelah Selesai
```bash
git add .
git commit -m "Menyelesaikan konflik merge"
git push
- add = tandai konflik selesai
- commit = simpan hasil merge
- push= kirim ke GitHub

 5. git merge --abort
Fungsi:Batalkan merge & kembali ke kondisi awal.

Kapan dipakai: Saat konflik terlalu banyak (20 file) dan berantakan, lebih baik abort dulu lalu koordinasi.

6. 4 Praktik Anti Konflik
1. Sering pull - biar selalu update
2. Beda branch - jangan semua di main
3. Komunikasi - bagi tugas file
4. Commit kecil - jangan 1000 baris sekaligus

7. Pesan Commit
Penting agar tim tau apa yang diubah.

Buruk:
- update
- fix
- asdasd

Baik:
- feat: menambahkan halaman login
- fix: memperbaiki bug tombol tidak bisa diklik
- docs: update README instalasi

 8. Conventional Commits
Format: tipe: deskripsi

- feat: fitur baru -> feat: menambahkan fitur keranjang
- fix: perbaikan bug -> fix: memperbaiki validasi email
- docs: dokumentasi -> docs: menambahkan panduan instalasi
- style: format -> style: merapikan indentasi CSS

9. yg terbaik
feat: menambahkan fitur pencarian produk di navbar paling baik.

Alasan: Pakai tipe feat, jelas & spesifik. Yang lain terlalu umum.

10. git ignore
Fungsi: File yang tidak di-track Git.

4 Jenis yang di-ignore:
1. node_modules - terlalu besar
2. .env- berisi rahasia / password
3. .log - file log tidak penting
4. dist/ - hasil build bisa generate ulang

 11. Penamaan Branch
Format: tipe/nama-fitu

Contoh baik:
- feat/halaman-kontak
- fix/bug-login
- docs/update-readme

Lebih jelas daripada coba-coba atau punya-andi.

12. Peran HTML, CSS, JS
- HTML: Struktur / kerangka
- CSS: Tampilan / styling
- JS: Interaksi / logika

13. Lingkungan JavaScript
1. Browser: Untuk frontend interaktif
2. Node.js:*Untuk backend / server

 14. JS vs ECMAScript
- JS = bahasanya
- ES = standarnya

Contoh:
Lama (ES5): var nama = "Andi";
Baru (ES6): const nama = "Andi";
