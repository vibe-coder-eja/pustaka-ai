---
title: Model
aliases:
  - Model AI
  - Model pembelajaran mesin
summary: "Hasil pelatihan AI berupa fungsi matematis yang mengolah masukan menjadi keluaran, misalnya prediksi, teks, atau gambar. Model adalah ‘mesin’ di balik aplikasi AI."
category: dasar-ai
related:
  - llm
  - inference
  - parameter-model
  - pra-pelatihan
  - penyetelan-halus
  - multimodal-ai
  - bobot-terbuka
  - model-terdepan
  - auxiliary-model
sources:
  - title: "Google for Developers, “Machine Learning Glossary”: entri model dan inference"
    url: https://developers.google.com/machine-learning/glossary
level: dasar
status: ditinjau
updated: 2026-10-19
---

## Arti singkat

Dalam AI, **model** adalah konstruksi matematis yang menerima data masukan dan mengembalikan keluaran. Glosarium pembelajaran mesin Google merumuskannya secara umum seperti itu. Keluarannya bisa berupa label (“email ini spam”), angka (perkiraan harga), atau konten baru seperti teks dan gambar. Ketika orang menyebut “model GPT”, “model Claude”, atau “model Gemini”, yang dimaksud adalah berkas hasil pelatihan beserta cara menjalankannya.

## Dari data menjadi model

Model tidak ditulis baris demi baris oleh programmer. Pengembang menentukan **arsitektur**, yaitu kerangka perhitungannya, lalu melatihnya pada data. Selama pelatihan, jutaan sampai triliunan angka di dalam model, yang disebut [parameter](/ensiklopedia/parameter-model/) atau bobot, disetel sedikit demi sedikit agar keluarannya makin sesuai dengan data. Setelah pelatihan selesai, bobot itulah yang menyimpan “pengetahuan” model.

Pada [LLM](/ensiklopedia/llm/), pelatihan biasanya bertahap: [pra-pelatihan](/ensiklopedia/pra-pelatihan/) pada data sangat besar, lalu [penyetelan halus](/ensiklopedia/penyetelan-halus/) agar model mengikuti instruksi. Menjalankan model yang sudah jadi untuk menjawab masukan baru disebut [inferensi](/ensiklopedia/inference/).

## Model berbeda dari aplikasi

Model adalah mesinnya; aplikasi adalah kendaraannya. Satu aplikasi asisten bisa memakai beberapa model sekaligus, misalnya model utama untuk menjawab dan [model pembantu](/ensiklopedia/auxiliary-model/) yang lebih kecil untuk meringkas. Sebaliknya, satu model bisa dipakai banyak aplikasi lewat API. Karena itu, kemampuan sebuah aplikasi AI tidak hanya ditentukan modelnya, tetapi juga oleh prompt, alat, dan data yang disediakan aplikasi itu.

## Beberapa cara membedakan model

- **Berdasarkan keluaran:** model klasifikasi atau prediksi, dan model generatif yang menghasilkan konten baru.
- **Berdasarkan jenis data:** model bahasa, model gambar, atau [model multimodal](/ensiklopedia/multimodal-ai/) yang menangani beberapa jenis sekaligus.
- **Berdasarkan akses:** model tertutup yang hanya dapat dipakai lewat layanan penyedianya, dan model [bobot terbuka](/ensiklopedia/bobot-terbuka/) yang bobotnya dapat diunduh.
- **Berdasarkan posisi:** [model terdepan](/ensiklopedia/model-terdepan/) adalah model paling mampu pada masanya.

## Hubungan dengan istilah lain

- [AI](/ensiklopedia/ai/) adalah bidang ilmunya; model adalah salah satu produk utamanya.
- Ukuran model sering dinyatakan dengan jumlah [parameter](/ensiklopedia/parameter-model/), tetapi ukuran saja tidak menentukan kualitas.
