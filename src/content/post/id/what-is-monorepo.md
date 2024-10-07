---
coverImage:
  src: "@/assets/blogs/what-is-monorepo.png"
  alt: "image by voiceflow.com"
  url: "https://www.voiceflow.com/"
title: "Apa itu Monorepo?"
description: "Pelajari apa itu monorepo, manfaat, tantangan, dan cara mengimplementasikannya dengan pnpm dan GitHub. Panduan lengkap untuk software engineer berpengalaman."
publishDate: "5 Oct 2024"
tags: ["git", "management"]
---

Sebagai seorang software engineer dengan pengalaman lebih dari 7 tahun, saya telah menyaksikan evolusi manajemen kode dalam proyek-proyek besar. Salah satu pendekatan yang semakin populer adalah penggunaan monorepo. Mari kita bahas apa itu monorepo, manfaatnya, tantangannya, dan bagaimana mengimplementasikannya menggunakan pnpm dan GitHub.

## Pengertian Monorepo

Monorepo, singkatan dari "monolithic repository", adalah strategi pengembangan perangkat lunak di mana kode untuk berbagai proyek atau komponen disimpan dalam satu repositori version control. Ini berbeda dengan pendekatan tradisional di mana setiap proyek atau modul memiliki repositori terpisah.

## Manfaat Menggunakan Monorepo

1. **Berbagi Kode**: Memudahkan berbagi dan menggunakan kembali kode antar proyek.
2. **Refactoring Berskala Besar**: Perubahan dapat diterapkan ke seluruh codebase dengan lebih mudah.
3. **Dependency Management**: Memastikan konsistensi versi dependensi antar proyek.
4. **Kolaborasi Tim**: Meningkatkan visibilitas dan kolaborasi antar tim yang berbeda.
5. **Atomic Commits**: Memungkinkan perubahan yang melibatkan beberapa proyek dalam satu commit.

## Tantangan Monorepo

1. **Ukuran Repositori**: Dapat menjadi sangat besar seiring waktu.
2. **Kompleksitas Build**: Memerlukan sistem build yang canggih untuk menangani berbagai proyek.
3. **Kontrol Akses**: Mungkin memerlukan strategi khusus untuk membatasi akses ke bagian tertentu dari repo.
4. **Performa Version Control**: Dapat memperlambat operasi git pada skala besar.

## Menyiapkan Monorepo dengan pnpm

pnpm adalah package manager yang sangat cocok untuk monorepo karena fitur workspaces-nya. Berikut langkah-langkah dasar untuk menyiapkan monorepo dengan pnpm:

1. Inisialisasi proyek:
   ```bash
   mkdir my-monorepo && cd my-monorepo
   pnpm init
   ```

2. Buat file `pnpm-workspace.yaml`:
   ```yaml
   packages:
     - 'packages/*'
   ```

3. Buat struktur folder:
   ```bash
   mkdir packages
   mkdir packages/project-a packages/project-b
   ```

4. Inisialisasi sub-proyek:
   ```bash
   cd packages/project-a && pnpm init
   cd ../project-b && pnpm init
   ```

5. Tambahkan script di `package.json` utama:
   ```json title="package.json"
   {
     "scripts": {
       "dev": "pnpm -r run dev",
       "build": "pnpm -r run build",
       "test": "pnpm -r run test"
     }
   }
   ```

## Contoh Struktur Tree Repository Monorepo

Berikut adalah contoh struktur folder untuk sebuah monorepo yang menggunakan pnpm:

```
my-monorepo/
├── package.json
├── pnpm-workspace.yaml
├── .gitignore
├── README.md
├── packages/
│   ├── project-a/
│   │   ├── package.json
│   │   ├── src/
│   │   │   └── index.js
│   │   └── tests/
│   │       └── index.test.js
│   ├── project-b/
│   │   ├── package.json
│   │   ├── src/
│   │   │   └── index.js
│   │   └── tests/
│   │       └── index.test.js
│   └── shared-utils/
│       ├── package.json
│       └── src/
│           └── utils.js
├── tools/
│   └── build-scripts/
│       └── build.js
└── docs/
    ├── project-a/
    │   └── README.md
    └── project-b/
        └── README.md
```

Dalam struktur ini:

- `packages/` berisi semua sub-proyek atau packages.
- `project-a/` dan `project-b/` adalah contoh proyek terpisah dalam monorepo.
- `shared-utils/` adalah contoh package yang bisa digunakan bersama oleh proyek lain.
- `tools/` berisi script-script build atau utilitas lain yang digunakan di seluruh monorepo.
- `docs/` menyimpan dokumentasi untuk masing-masing proyek.

## Mengelola Monorepo dengan GitHub

GitHub menyediakan beberapa fitur yang membantu dalam mengelola monorepo:

1. **GitHub Actions**: Buat workflow untuk CI/CD yang dapat mendeteksi perubahan pada sub-proyek tertentu.

2. **Branch Protection Rules**: Terapkan aturan proteksi branch untuk mengontrol merge ke branch utama.

3. **Code Owners**: Gunakan file CODEOWNERS untuk menentukan siapa yang bertanggung jawab atas bagian tertentu dari monorepo.

4. **GitHub Projects**: Manfaatkan untuk mengelola dan melacak pekerjaan di seluruh monorepo.

## Best Practices dan Tips

1. **Gunakan Conventional Commits**: Membantu dalam generasi changelog otomatis dan versioning.

2. **Implementasikan Linting dan Formatting**: Gunakan tools seperti ESLint dan Prettier untuk menjaga konsistensi kode.

3. **Otomatisasi Sebanyak Mungkin**: Gunakan GitHub Actions untuk testing, building, dan deploying.

4. **Dokumentasi yang Baik**: Buat README.md yang jelas untuk setiap proyek dan di root monorepo.

5. **Pertimbangkan Penggunaan Changesets**: Untuk mengelola versi dan changelog dengan lebih baik.

## Kesimpulan

Monorepo bukan solusi one-size-fits-all, tetapi dapat sangat bermanfaat untuk proyek-proyek besar dengan banyak komponen yang saling terkait. Dengan tools seperti pnpm dan fitur-fitur GitHub, mengelola monorepo menjadi lebih mudah dan efisien. Sebagai engineer berpengalaman, saya telah melihat bagaimana pendekatan ini dapat meningkatkan produktivitas tim dan kualitas kode secara signifikan ketika diimplementasikan dengan benar.

Ingatlah bahwa transisi ke monorepo memerlukan perencanaan yang matang dan mungkin membutuhkan penyesuaian dalam proses pengembangan tim Anda. Namun, dengan manfaat yang ditawarkannya, monorepo layak dipertimbangkan untuk proyek-proyek skala besar dan tim yang berkembang.
