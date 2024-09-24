---
coverImage:
  src: "@/assets/blogs/dns-transfer-hntc.png"
  alt: ""
  url: ""
title: "Cara Mentransfer Domain ke Cloudflare"
description: "Transfer domain dari Niagahoster atau Hostinger ke Cloudflare, bikin website dengan harga murah."
publishDate: "15 Sep 2024"
tags: ["internet", "basic", "server"]
---

## Pengertian Transfer Domain

Transfer domain merujuk pada proses pemindahan kepemilikan suatu nama domain dari satu registrar (penyedia layanan pendaftaran nama domain) ke registrar lainnya. Proses ini melibatkan beberapa langkah, termasuk:

1. **Persetujuan Transfer**: Pemilik domain perlu memberikan persetujuan untuk transfer. Ini biasanya melibatkan pengambilan kode otorisasi (auth code) dari registrar lama.

2. **Inisiasi Transfer**: Setelah memperoleh kode otorisasi, pemilik dapat mengajukan permintaan transfer ke registrar baru.

3. **Proses Verifikasi**: Registrar baru akan melakukan verifikasi untuk memastikan bahwa pemilik domain yang sah menginginkan transfer tersebut.

4. **Penyelesaian Transfer**: Setelah semua langkah verifikasi selesai, domain akan dipindahkan ke registrar baru, dan pemilik akan menerima konfirmasi.

## Mengapa Memilih Cloudflare?

Dalam pengembangan website dengan biaya yang rendah selayaknya kita dapat memilih layanan yang dapat memberikan banyak fitur **gratis** yang dapat mempublikasi website yang telah kita buat. Di sini saya memilih cloudflare karena servernya telah banyak tersebar di belahan dunia termasuk di 🇮🇩 Indonesia. Selain itu cloudflare memberikan solusi yang sangat lengkap untuk mengoptimalkan kecepatan situs website kita.

## Transfer dari Niagahoster/Hostinger ke Cloudflare

### 1. Menyiapkan Domain
Pada tahap ini pastikan kamu telah memiliki domain di [Niagahoster](https://niagahoster.co.id) atau [Hostinger](https://www.hostinger.co.id/) yang akan di transfer ke [Cloudflare](https://www.cloudflare.com). Dalam pembelian kita tidak usah membeli sertifikat ssl karena ssl hanya akan kita pakai bila kita membeli hosting sekalian, dalam kasus ini kita tidak membutuhkan hosting.
> **💡 Tips:** Website pribadi untuk kegunaan portofolio atau blog saya sarankan untuk membeli domain dengan ekstensi .me, karena selain harganya lebih murah ekstensi tersebut juga di peruntukkan untuk website personal branding. [Referensi](https://www.wix.com/encyclopedia/definition/me-domain#:~:text=me%20domains%20are%20used%20for,to%20personalize%20an%20online%20presence.)

### 2. Pemindahan Nameserver
1. **List Domain**
![Dashboard Domain List](@/assets/blogs/how-transfer-domain-to-cloudflare/dashboard-domain-list.png "Niagahoster Domain List")
Setelah membeli domain kita akan memiliki list domain yang telah kita beli pada halaman [**Portofolio domain**](https://hpanel.hostinger.com/domains). Pilih menu kelola pada domain yang ingin kita transfer.
2. **Kelola Domain**
![Niagahoster Manage Domain](@/assets/blogs/how-transfer-domain-to-cloudflare/dashboard-manage-domain.png "Niagahoster Manage Domain")
Pada tahap ini kita akan menemukan menu **DNS/Nameserver** dimana kita akan dapat melihat konfigurasi bawaan yang telah di setup oleh tim Niagahoster.
3. **Daftarkan Domain ke Cloudflare**
![Cloudlfare Transfer Domain](@/assets/blogs/how-transfer-domain-to-cloudflare/dashboard-cloudflare.png "Cloudlfare Transfer Domain")
Saya anggap kamu telah memiliki akun di [Cloudflare](https://www.cloudflare.com). Lalu silahkan klik menu **"Add"** pada header seperti gambar di atas. Pada menu dropdown list pilih menu **"Existing domain"**.
![Cloudflare Enter Domain to Transfer](@/assets/blogs/how-transfer-domain-to-cloudflare/dashboard-register-domain.png "Cloudflare Enter Domain to Transfer")
Setelah klik menu **"Existing domain"** maka kita akan di arahkan ke form untuk mendaftakan domain yang telah kita beli di Niagahoster atau Hostinger. Masukkan nama domain berikut dengan ekstensinya (e.g: heyris.me), lalu pada pilihan radio centang pada **"Manually enter DNS records"**.
![Cloudflare Transfer Domain Price](@/assets/blogs/how-transfer-domain-to-cloudflare/dashboard-price-transfer-domain.png "Cloudflare Transfer Domain Price")
Pada list daftar harga scroll ke bagian paling bawah dan pilih paket harga **"Free"** dan tekan continue.
![Dashboard Cloudflare DNS](@/assets/blogs/how-transfer-domain-to-cloudflare/dashboard-dns-cloudflare.png "Dashboard Cloudflare DNS")
Untuk menemukan Nameserver (NS) scroll ke bawah dan kamu akan menemukan dua Nameserver yang dipakai oleh cloudflare, copy atau simpan kedua Nameserver ini. Lalu kembali ke tab dashboard niagahoster di halaman **"DNS/Nameserver"**.
4. **Kelola DNS/Nameserver**
![Niagahoster Manage DNS](@/assets/blogs/how-transfer-domain-to-cloudflare/dashboard-manage-dns.png "Niagahoster Manage DNS")
Di halaman ini kita akan di sajikan 2 pilihan yaitu **Gunakan Niagahoster** dan **Ganti namseserver**, pilih Ganti nameserver dan isi input pada urutan satu dan dua dengan Nameserver yang telah kita ketahui pada langkah sebelumnya.
### 3. Pengecekan Propagasi Nameserver
Setelah melakukan langkah-langkah di atas kita harus menunggu setidaknya 1x24 jam untuk proses transfer Nameserver Domain selesai. Kita dapat melakukan pengecekan secara menerus dengan menggunakan tools yang di sebut DNS Cheker, e.g: [**gdnspc**](https://www.gdnspc.com/dns-propagation-checker/id.html) atau dengan menggunakan command line seperti berikut di dalam terminal dengan perintah `ping heyris.me` (dalam contoh ini menggunakan domain heyris.me, ubah sesuai dengan domain kamu).
```txt title="output.txt"
PING heyris.me (172.67.207.132): 56 data bytes
64 bytes from 172.67.207.132: icmp_seq=0 ttl=54 time=21.277 ms
64 bytes from 172.67.207.132: icmp_seq=1 ttl=54 time=27.960 ms
64 bytes from 172.67.207.132: icmp_seq=2 ttl=54 time=21.485 ms
64 bytes from 172.67.207.132: icmp_seq=3 ttl=54 time=21.927 ms
64 bytes from 172.67.207.132: icmp_seq=4 ttl=54 time=31.846 ms
64 bytes from 172.67.207.132: icmp_seq=5 ttl=54 time=62.449 ms
64 bytes from 172.67.207.132: icmp_seq=6 ttl=54 time=30.657 ms
64 bytes from 172.67.207.132: icmp_seq=7 ttl=54 time=30.409 ms
64 bytes from 172.67.207.132: icmp_seq=8 ttl=54 time=42.455 ms
64 bytes from 172.67.207.132: icmp_seq=9 ttl=54 time=38.346 ms
64 bytes from 172.67.207.132: icmp_seq=10 ttl=54 time=32.254 ms
64 bytes from 172.67.207.132: icmp_seq=11 ttl=54 time=28.314 ms
64 bytes from 172.67.207.132: icmp_seq=12 ttl=54 time=25.357 ms
64 bytes from 172.67.207.132: icmp_seq=13 ttl=54 time=21.101 ms
64 bytes from 172.67.207.132: icmp_seq=14 ttl=54 time=33.773 ms
64 bytes from 172.67.207.132: icmp_seq=15 ttl=54 time=29.865 ms
64 bytes from 172.67.207.132: icmp_seq=16 ttl=54 time=23.443 ms
64 bytes from 172.67.207.132: icmp_seq=17 ttl=54 time=30.314 ms
64 bytes from 172.67.207.132: icmp_seq=18 ttl=54 time=30.543 ms
64 bytes from 172.67.207.132: icmp_seq=19 ttl=54 time=33.960 ms
64 bytes from 172.67.207.132: icmp_seq=20 ttl=54 time=31.289 ms
64 bytes from 172.67.207.132: icmp_seq=21 ttl=54 time=25.613 ms
64 bytes from 172.67.207.132: icmp_seq=22 ttl=54 time=31.871 ms
64 bytes from 172.67.207.132: icmp_seq=23 ttl=54 time=31.075 ms
64 bytes from 172.67.207.132: icmp_seq=24 ttl=54 time=26.662 ms
64 bytes from 172.67.207.132: icmp_seq=25 ttl=54 time=29.052 ms
64 bytes from 172.67.207.132: icmp_seq=26 ttl=54 time=23.516 ms
64 bytes from 172.67.207.132: icmp_seq=27 ttl=54 time=29.810 ms
64 bytes from 172.67.207.132: icmp_seq=28 ttl=54 time=30.437 ms
64 bytes from 172.67.207.132: icmp_seq=29 ttl=54 time=30.324 ms
64 bytes from 172.67.207.132: icmp_seq=30 ttl=54 time=30.424 ms
--- heyris.me ping statistics ---
31 packets transmitted, 31 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 21.101/30.252/62.449/7.535 ms
```

### 4. Memvalidasi Domain
![Dashboard Cloudflare Transfer Domain](@/assets/blogs/how-transfer-domain-to-cloudflare/dashboard-cloudlfare-success-transfer.png "Dashboard Cloudflare Transfer Domain")
Setelah propagasi selesai maka kita dapat melihat domain telah terdaftar pada halaman **"Domain Registration > Transfer Domains"**

## Kesimpulan
Transfer domain ke [Cloudflare](https://www.cloudflare.com) memberikan keuntungan seperti perlindungan gratis **SSL**, optimisasi kecepatan situs, dan fitur keamanan tambahan seperti DDoS protection. Dengan harga yang terjangkau dan bahkan opsi gratis, [Cloudflare](https://www.cloudflare.com) menjadi pilihan ideal untuk pemilik website yang ingin meningkatkan performa dan keamanannya tanpa mengeluarkan biaya besar. Langkah-langkah transfer domain ini mudah diikuti, dan proses propagasi nameserver biasanya selesai dalam waktu 24 jam.
