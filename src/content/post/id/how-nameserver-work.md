---
coverImage:
  src: "@/assets/blogs/pexels-cookiecutter-1148820.jpg"
  alt: "Photo by panumas nikhomkhai from Pexels"
  url: "https://www.pexels.com/photo/close-up-photo-of-mining-rig-1148820"
title: "Bagaimana Nameserver Bekerja?"
description: "Nameserver memungkinkan akses mudah ke situs web. Artikel ini menjelaskan cara kerja dan pentingnya nameserver dalam dunia digital."
publishDate: "12 Sep 2024"
tags: ["internet", "basic", "server"]
---

## Pengertian Nameserver

Nameserver adalah komponen utama dari Domain Name System (DNS) yang berfungsi untuk mengonversi nama domain yang mudah diingat (seperti *example.com*) menjadi alamat IP (seperti *192.0.2.1*) yang dibutuhkan oleh komputer untuk berkomunikasi di jaringan internet. Nameserver bertindak sebagai penerjemah antara nama domain yang dimengerti manusia dan alamat IP yang dipahami oleh mesin.

## Cara Kerja Nameserver

Ketika Anda mengetikkan URL di browser, proses di balik layar untuk mendapatkan informasi yang tepat melalui nameserver melibatkan beberapa langkah penting:

### Memulai Permintaan (DNS Query)
Proses dimulai saat Anda memasukkan nama domain (misalnya, *www.example.com*) ke dalam browser. Browser kemudian mengirimkan permintaan ke nameserver untuk mengetahui alamat IP dari domain tersebut.

### Melakukan Caching
Sebelum permintaan dikirim keluar, browser atau sistem operasi terlebih dahulu memeriksa cache lokal. Jika alamat IP dari domain yang diminta sudah tersimpan di cache (karena pernah diakses sebelumnya), browser akan langsung menggunakan alamat tersebut tanpa perlu melakukan permintaan lebih lanjut.

### DNS Recursor
Jika informasi tidak ditemukan di cache, permintaan diteruskan ke **DNS recursor** (sering kali disediakan oleh ISP atau DNS publik seperti Google DNS). Recursor bertindak sebagai perantara untuk menemukan alamat IP yang diminta dari nameserver yang relevan.

### Meminta Informasi dari Root Nameserver
DNS recursor pertama-tama akan mengirimkan permintaan ke **Root Nameserver**, yang berfungsi sebagai titik awal pencarian alamat IP untuk domain. Root nameserver tidak menyimpan alamat IP domain secara langsung, tetapi memberikan referensi ke **TLD Nameserver** (Top-Level Domain), yang bertanggung jawab atas ekstensi domain, seperti *.com*, *.net*, atau *.org*.

### TLD Nameserver
Setelah permintaan diteruskan ke TLD nameserver (misalnya, untuk domain *example.com*), TLD nameserver akan memberikan informasi terkait **authoritative nameserver** yang bertanggung jawab atas domain tersebut.

### Authoritative Nameserver
Authoritative nameserver adalah nameserver terakhir dalam pencarian ini yang memiliki informasi lengkap tentang domain, termasuk catatan DNS seperti **A record** (yang memetakan nama domain ke alamat IP). Authoritative nameserver akan mengirimkan alamat IP yang relevan kembali ke DNS recursor.

### Mengembalikan Hasil ke Browser
Setelah DNS recursor mendapatkan alamat IP dari authoritative nameserver, informasi ini dikirim kembali ke browser. Browser kemudian menggunakan alamat IP tersebut untuk terhubung ke server web yang menampung situs yang diminta.

## Catatan Penting dalam Nameserver

1. **Primary dan Secondary Nameserver**: Biasanya, domain dikonfigurasi dengan lebih dari satu nameserver untuk keandalan. Primary nameserver bertindak sebagai server utama, sedangkan secondary nameserver digunakan sebagai cadangan jika primary nameserver gagal.
   
2. **Record DNS**: Berbagai jenis record DNS (seperti A, CNAME, MX, TXT) disimpan di dalam authoritative nameserver, dan masing-masing memiliki fungsi spesifik, seperti mengarahkan email atau verifikasi domain.

3. **Propagation**: Ketika perubahan dilakukan pada DNS (misalnya, saat Anda mengubah hosting atau mengalihkan domain), dibutuhkan waktu yang disebut **DNS propagation** sebelum perubahan ini menyebar ke seluruh nameserver di dunia, yang bisa memakan waktu hingga 48 jam.

## Kesimpulan

Nameserver memainkan peran krusial dalam membuat internet lebih mudah diakses oleh manusia. Dengan menerjemahkan nama domain menjadi alamat IP, nameserver memungkinkan kita mengakses situs web hanya dengan mengingat nama domain yang sederhana, tanpa harus mengingat deretan angka yang sulit.
