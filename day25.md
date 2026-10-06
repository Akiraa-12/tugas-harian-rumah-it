1. Jelaskan dua arah aliran kode antara komputer lokal dan GitHub (push dan pull). Berikan 1 contoh situasi nyata kapan kamu perlu melakukan push, dan 1 situasi kapan kamu perlu melakukan pull!

2. Jelaskan fungsi perintah git push. Lalu jelaskan:
a. Apa fungsi opsi -u pada git push -u origin main?
b. Apa yang terjadi jika opsi -u tidak disertakan pada push pertama?
c. Mengapa setelah -u ditetapkan, kita cukup menjalankan git push saja?

3. Jelaskan perbedaan mendasar antara git clone dan git init. Mengapa setelah git clone, kita tidak perlu menjalankan git init lagi?

4. Jelaskan fungsi perintah git pull. Mengapa perintah ini sangat penting dalam kerja tim? Sebutkan 2 momen spesifik kapan sebaiknya menjalankan git pull

5. Tuliskan alur kerja harian yang direkomendasikan dalam bentuk urutan  (command). Jelaskan mengapa setiap langkah dalam urutan tersebut penting

6. Apa itu Fork? Sebutkan minimal 2 situasi nyata di mana seseorang perlu melakukan fork. Apa perbedaan mendasar antara fork dan clone?

7. Jelaskan 6 langkah alur kontribusi pada proyek open source menggunakan Fork + Pull Request. Untuk setiap langkah, jelaskan tujuannya masing-masing!

8. Apa yang dimaksud dengan Pull Request? Jelaskan peran PR dalam kerja tim — mengapa tim profesional tidak langsung merge setiap perubahan ke main, tetapi harus melalui PR terlebih dahulu? Sebutkan minimal 2 keuntungan menggunakan PR!

9. Perhatikan skenario berikut:
Andi dan Budi mengerjakan proyek yang sama. Andi push perubahan ke GitHub pagi ini. Budi kemarin terakhir pull, lalu pagi ini langsung mengedit file style.css di komputernya dan berusaha push.
a. Apa yang kemungkinan besar terjadi saat Budi mencoba push?
b. Mengapa hal ini bisa terjadi? Kaitkan dengan konsep git pull.
c. Apa yang seharusnya Budi lakukan sebelum mulai mengedit file tersebut?
d. Tuliskan urutan perintah yang seharusnya dilakukan Budi sejak pagi hari!

10. Studi Kasus — Alur Kerja Lengkap: Perhatikan urutan perintah berikut:
```git clone https://github.com/andi/proyek.git
cd proyek
git switch -c perbaikan-bug
touch fix.js
git add fix.js
git commit -m "Memperbaiki bug pada validasi form"
git push origin perbaikan-bug```

Analisislah skenario tersebut dengan menjawab:
a. Apa yang dilakukan oleh perintah git clone pada baris pertama?
b. Mengapa pengguna membuat branch perbaikan-bug sebelum mulai bekerja? Mengapa tidak langsung di main?
c. Apa tujuan git push origin perbaikan-bug — mengapa tidak git push saja?
d. Setelah perintah terakhir dijalankan, langkah apa yang harus dilakukan di antarmuka web GitHub untuk mengajukan perubahan ke pemilik repo?
e. Jika pemilik repo meminta revisi, apa yang harus dilakukan pengguna? Jelaskan alurnya!

                                    =====jawaban=====
1. Push dan Pull
Push = kirim kode dari lokal ke GitHub. Pull = tarik kode dari GitHub ke lokal.
Contoh Push: Setelah kamu selesai bikin fitur kontak di laptop, kamu push agar masuk ke GitHub.
Contoh Pull: Sebelum mulai kerja, kamu pull dulu biar dapat update terbaru dari teman satu tim.

2. Fungsi git push
Fungsi: Mengunggah commit dari repo lokal ke repo remote di GitHub.

a. Fungsi -u: Opsi --set-upstream, untuk menghubungkan branch lokal dengan branch remote. Jadi git tau lokal main terhubung ke origin/main.
b. Jika tanpa -u di push pertama: Kode tetap terkirim, tapi koneksinya belum disimpan. Besok kamu harus ketik panjang lagi git push origin main.
c. Mengapa setelah -u cukup git push saja: Karena koneksinya sudah disimpan, git sudah hafal harus push kemana.

3. git clone dan git init
git init = membuat repo Git baru yang masih kosong dari nol di laptop.
git clone = menyalin repo yang sudah ada dari GitHub ke laptop.
Setelah clone tidak perlu init lagi karena clone sudah otomatis melakukan init + download semua riwayat + setting remote origin.

4. Fungsi git pull
Fungsi: Mengambil perubahan terbaru dari GitHub dan langsung menggabungkannya ke branch lokal.
Penting untuk kerja tim agar tidak ketinggalan update dan menghindari konflik.

2 Momen wajib pull:
1. Pagi hari sebelum mulai ngoding.
2. Sebelum melakukan push.

5. Alur Kerja Harian
Urutan: git pull -> kerja/edit file -> git add . -> git commit -m "pesan" -> git push

Kenapa penting:
pull = biar sinkron dulu.
add = menandai file yang mau disimpan.
commit = menyimpan snapshot perubahan.
push = backup dan share ke tim di GitHub.

6. Apa itu Fork?
Fork = menyalin repo orang lain ke akun GitHub milik kita sendiri.

2 Situasi perlu fork:
1. Mau kontribusi ke proyek open source orang lain tapi tidak punya akses push.
2. Mau menjadikan proyek orang lain sebagai base proyek pribadi.

Beda Fork vs Clone:
Fork = copy repo di server GitHub (akun ke akun). Clone = copy repo dari GitHub ke laptop lokal.

7. 6 Langkah Alur Fork + Pull Request
1. Fork: Menyalin repo asli ke akun kita. Tujuan: punya copy yang bisa kita ubah bebas.
2. Clone: Download hasil fork ke laptop. Tujuan: bisa ngoding offline.
3. Branch baru: Buat branch `fitur-baru`. Tujuan: agar tidak merusak main.
4. Commit & Push: Kerja lalu push ke repo fork kita. Tujuan: menyimpan perubahan di GitHub kita.
5. Pull Request (PR): Mengajukan perubahan ke repo asli. Tujuan: minta pemilik repo mereview.
6. Merge: Pemilik repo menerima PR. Tujuan: perubahan kita resmi masuk ke proyek asli.

8. Pull Request (PR)
PR adalah permintaan untuk menggabungkan perubahan kita ke branch main milik orang lain/tim.

Kenapa tidak langsung merge ke main? Agar kode direview dulu, untuk menjaga kualitas dan mencegah bug masuk ke main.

2 Keuntungan PR:
1. Code Review: Tim bisa kasih komentar dan perbaikan sebelum merge.
2. Diskusi & Dokumentasi: Setiap perubahan ada riwayat diskusinya.

9. Skenario Andi dan Budi
a. Yang terjadi: Push Budi akan DITOLAK / Rejected oleh GitHub.
b. Kenapa: Karena repo di GitHub sudah lebih baru (sudah ada commit Andi), sedangkan repo Budi masih versi kemarin. Git tidak mengizinkan menimpa.
c. Seharusnya Budi: Wajib `git pull` dulu sebelum edit.

d. Urutan yang benar untuk Budi:
git pull origin main
# baru edit file style.css
git add style.css
git commit -m "Update style"
git push origin main
10. Kasus Alur 
a. Fungsi `git clone`: Mendownload seluruh proyek proyek.git milik andi dari GitHub ke laptop lokal.
b. Kenapa buat branch perbaikan-bug: Agar perbaikan dilakukan di jalur terpisah, tidak langsung merusak branch main yang stabil. Ini best practice.
c. Tujuan git push origin perbaikan-bug: Mengirim branch baru perbaikan-bug ke GitHub. Tidak bisa git push saja karena branch ini belum pernah ada di GitHub dan belum ada upstream-nya (-u).
d. Langkah di web GitHub: Buka repo hasil clone di GitHub -> akan muncul tombol Compare & pull request -> klik -> tulis deskripsi -> Create pull request.
e. Jika diminta revisi:  tetap di branch perbaikan-bug, edit file sesuai masukan, lalu git add, git commit, git push origin perbaikan-bug` lagi. PR di GitHub akan otomatis terupdate, tidak perlu buat PR baru.