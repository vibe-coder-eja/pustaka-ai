---
title: "Rilis Bertahap Model"
aliases:
  - "Canary release"
  - "Canary deployment"
  - "Model registry"
  - "Registri model"
  - "Blue/green deployment"
summary: "Praktik meluncurkan versi model atau prompt baru ke sebagian kecil lalu lintas lebih dulu, membandingkannya dengan versi lama, dan memperluas atau membatalkannya berdasarkan hasil; biasanya didukung registri model yang mencatat versi dan asal-usulnya."
category: dasar-ai
related:
  - pergeseran-perilaku-model
  - rollback
  - feature-flag
  - deployment
  - evals
  - monitoring
sources:
  - title: "Google SRE Workbook, “Canarying Releases”"
    url: https://sre.google/workbook/canarying-releases/
  - title: "MLflow, “MLflow Model Registry” (dokumentasi, diakses 13 Oktober 2026)"
    url: https://mlflow.org/docs/latest/ml/model-registry/
  - title: "Sculley dkk., “Hidden Technical Debt in Machine Learning Systems”, NeurIPS 2015"
    url: https://papers.nips.cc/paper_files/paper/2015/hash/86df7dcfd896fcaf2674f757a2463eba-Abstract.html
level: menengah
status: ditinjau
updated: 2026-10-13
---

## Canary

Buku kerja SRE Google mendefinisikan canarying sebagai penerapan perubahan pada sebagian layanan secara terbatas dan berjangka waktu, disertai evaluasi. Hasil evaluasi menentukan apakah peluncuran dilanjutkan. Bagian yang menerima perubahan disebut "canary", sisanya "control". Karena canary biasanya hanya menyentuh sebagian kecil pengguna, kerusakan yang lolos hanya berdampak pada sebagian kecil lalu lintas, dan pada dasarnya proses ini adalah uji A/B. Alternatifnya, blue/green deployment, menyiapkan dua lingkungan lengkap sehingga [rollback](/ensiklopedia/rollback/) cukup dengan mengalihkan kembali lalu lintas, tetapi butuh sumber daya dua kali lipat.

## Registri model

Agar bisa membandingkan dan membatalkan, setiap versi model harus tercatat. MLflow Model Registry, sebagai contoh, adalah penyimpanan model terpusat yang mencatat:

- asal-usul (eksperimen dan run mana yang menghasilkan model);
- nomor versi;
- alias, misalnya `@champion` untuk versi produksi;
- tag dan anotasi.

Dengan itu, tim bisa kembali ke versi sebelumnya dan menelusuri bagaimana suatu model dilatih, dengan data dan parameter apa.

## Mengapa model butuh perlakuan khusus

Sculley dkk. (NeurIPS 2015) mencatat bahwa sistem pembelajaran mesin mudah menumpuk biaya perawatan tersembunyi. Faktor risikonya antara lain keterkaitan yang kusut antarkomponen, umpan balik tersembunyi, konsumen hasil model yang tidak tercatat, dan perubahan di dunia luar. Pada aplikasi LLM, mengganti versi model atau mengubah prompt bisa mengubah perilaku secara halus ([pergeseran perilaku](/ensiklopedia/pergeseran-perilaku-model/)). Karena itu perubahan sebaiknya diuji dengan [evals](/ensiklopedia/evals/) dulu, lalu dirilis bertahap sambil [dipantau](/ensiklopedia/monitoring/).
