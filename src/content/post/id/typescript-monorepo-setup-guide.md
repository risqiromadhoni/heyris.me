---
coverImage:
  src: "@/assets/blogs/how-to-build-typescript-library-in-monorepo.jpg"
  alt: "Photo by Mohammad Rahmani from Unsplash"
  url: "https://unsplash.com/photos/black-laptop-computer-turned-on-displaying-blue-screen-cY1SvvEfRwk"
title: "Membangun Perpustakaan TypeScript di Monorepo dengan PNPM dan Turborepo"
description: "Pelajari cara mengatur monorepo TypeScript yang dapat diskalakan menggunakan PNPM, Turborepo, dan TypeScript. Panduan langkah demi langkah untuk pengembangan perpustakaan yang efisien!"
publishDate: "1 December 2024"
tags: ["typescript", "monorepo", "advanced", "library"]
---

## 📌 Pendahuluan

Membangun pustaka TypeScript dalam monorepo menawarkan beberapa keuntungan, termasuk pembagian kode yang lebih baik, manajemen ketergantungan yang efisien, dan pemeliharaan yang lebih mudah. Panduan ini akan memandu Anda dalam menyiapkan struktur monorepo untuk perpustakaan TypeScript menggunakan alat modern seperti `pnpm`, `Turborepo`, dan `TypeScript`.

## 🛠️ Menyiapkan Monorepo

### 1️⃣ Menginisialisasi Monorepo
Kita akan menggunakan `pnpm` sebagai manajer paket kita karena secara native mendukung ruang kerja dan menyediakan kinerja yang lebih baik dibandingkan dengan `npm` dan `yarn`.

```sh
mkdir ts-monorepo && cd ts-monorepo
pnpm init
```

Aktifkan ruang kerja di `pnpm` dengan menambahkan yang berikut ini ke `package.json`:

```json
{
  “private": true,
  “workspaces": [“packages/*”]
}
```

### 2️⃣ Instal Turborepo untuk Orkestrasi Tugas
[Turborepo](https://turbo.build/) membantu mengelola proses build dan ketergantungan secara efisien.

```sh
pnpm add -D turbo
```

Buat berkas konfigurasi `turbo.json`:

```json
{
  “$schema": “https://turborepo.org/schema.json”,
  “pipeline": {
    “build": {
      “dependsOn": [“^build”],
      “outputs": [“dist/**”]
    },
    “lint": {},
    “test": {}
  }
}
```

## 🏗️ Membuat Perpustakaan TypeScript

### 1️⃣ Mengatur Paket
Membuat paket baru untuk pustaka:

```sh
mkdir -p packages/my-library && cd packages/my-library
pnpm init
```

Instal TypeScript dan ketergantungan yang diperlukan:

```sh
pnpm add -D typescript tsup eslint @types/node
```

Buat berkas `tsconfig.json`:

```json
{
  “compilerOptions": {
    “outDir": “dist”,
    “module": ‘ESNext’,
    “target": “ES6”,
    “declaration": true,
    “strict": true,
    “esModuleInterop": true
  },
  “include": [“src”]
}
```

### 2️⃣ Menerapkan Kode Perpustakaan
Di dalam `packages/my-library`, buat sebuah folder `src` dan sebuah berkas `index.ts`:

```sh
mkdir src && sentuh src/index.ts
```

Tuliskan sebuah fungsi sederhana di dalam `src/index.ts`:

```ts
export function menyapa(nama: string): string {
  return `Halo, ${nama}!`;
}
```

### 3️⃣ Membangun Perpustakaan
Tambahkan skrip build ke `package.json`:

```json
{
  “skrip": {
    “build": “tsup src/index.ts --format esm,cjs --dts”
  }
}
```

Jalankan perintah build:

```sh
pnpm build
```

### 🔗 4️⃣ Menautkan Pustaka di Paket Lain
Jika Anda ingin menggunakan pustaka di paket lain di dalam monorepo, buat paket lain (misal, `app`) dan tambahkan `my-library` sebagai ketergantungan:

```sh
pnpm add my-library --filter app
```

Sekarang, Anda dapat mengimpor dan menggunakan pustaka di dalam paket `app`.

```ts
import { greet } from “my-library”;
console.log(greet(“World”));
```

## ✅ Kesimpulan

Menyiapkan pustaka TypeScript dalam struktur monorepo menyediakan cara yang terukur untuk mengelola ketergantungan, menggunakan ulang kode, dan merampingkan pengembangan. Dengan memanfaatkan `pnpm`, `Turborepo`, dan `TypeScript`, Anda dapat membangun dan memelihara pustaka berkinerja tinggi secara efisien.
