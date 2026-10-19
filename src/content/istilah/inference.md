---
title: Inference
aliases:
  - Inferensi
summary: "Inferensi: proses menjalankan model AI yang sudah dilatih untuk menghasilkan jawaban atau prediksi dari masukan baru. Ini tahap ‘memakai’, berbeda dari tahap melatih."
category: dasar-ai
related:
  - model
  - llm
  - reasoning
  - server-inferensi
  - latensi-inferensi
  - prosesor-grafis
  - kuantisasi
  - temperatur-sampling
  - cache-prompt
sources:
  - title: "Google for Developers, “Machine Learning Glossary”: entri inference"
    url: https://developers.google.com/machine-learning/glossary
level: dasar
status: ditinjau
updated: 2026-10-19
---

## Arti singkat

**Inferensi** adalah tahap ketika [model](/ensiklopedia/model/) yang sudah dilatih dipakai untuk mengolah masukan baru. Glosarium pembelajaran mesin Google mendefinisikannya sebagai proses membuat prediksi dengan menerapkan model terlatih pada contoh yang belum berlabel. Setiap kali Anda mengirim pertanyaan ke asisten AI dan menerima jawaban, yang terjadi di balik layar adalah inferensi.

## Pelatihan dan inferensi

Siklus hidup model AI terbagi dua:

- **Pelatihan** dilakukan sekali atau beberapa kali. Bobot model disetel memakai data dalam jumlah besar, dan prosesnya bisa memakan waktu berminggu-minggu di ribuan [prosesor grafis](/ensiklopedia/prosesor-grafis/).
- **Inferensi** terjadi terus-menerus, untuk setiap permintaan pengguna. Bobot model tidak berubah; model hanya menghitung keluaran dari masukan.

Karena inferensi berlangsung jutaan kali sehari pada layanan populer, biaya totalnya bisa melampaui biaya pelatihan. Inilah alasan penyedia berlomba membuat inferensi lebih murah dan cepat.

## Inferensi pada LLM

[LLM](/ensiklopedia/llm/) menghasilkan jawaban satu token demi satu token. Setiap token baru dihitung dari prompt ditambah token yang sudah dihasilkan sebelumnya, lalu dipilih dengan aturan *sampling* yang dapat diatur, misalnya lewat [temperatur](/ensiklopedia/temperatur-sampling/). Akibatnya, jawaban yang panjang butuh waktu lebih lama, dan pertanyaan yang sama bisa menghasilkan jawaban yang sedikit berbeda.

Beberapa cara umum menekan biaya dan [latensi](/ensiklopedia/latensi-inferensi/) inferensi:

- [Kuantisasi](/ensiklopedia/kuantisasi/): menyimpan bobot dengan presisi lebih rendah agar model lebih ringan.
- [Cache prompt](/ensiklopedia/cache-prompt/): menyimpan hasil hitung bagian prompt yang berulang.
- [Server inferensi](/ensiklopedia/server-inferensi/) khusus yang mengelompokkan banyak permintaan sekaligus.

## Jangan tertukar dengan “penalaran”

Dalam logika dan statistik, *inference* juga berarti menarik kesimpulan. Dalam konteks AI sehari-hari, kata ini hampir selalu berarti **menjalankan model**. Kemampuan model menarik kesimpulan bertahap dibahas di entri [penalaran](/ensiklopedia/reasoning/). Model penalaran justru memakai lebih banyak komputasi inferensi karena “berpikir” lebih lama sebelum menjawab.
