---
title: "Kuantisasi"
aliases:
  - "Quantization"
  - "Kuantisasi model"
  - "4-bit"
  - "INT8"
summary: "Teknik memampatkan model dengan menyimpan parameternya dalam angka berpresisi lebih rendah, misalnya 8 atau 4 bit, sehingga butuh memori lebih sedikit dan bisa dijalankan di perangkat yang lebih kecil."
category: dasar-ai
related:
  - parameter-model
  - bobot-terbuka
  - lora
  - prosesor-grafis
  - server-inferensi
  - distilasi-model
sources:
  - title: "Dettmers dkk., “LLM.int8(): 8-bit Matrix Multiplication for Transformers at Scale”, arXiv:2208.07339 (15 Agustus 2022)"
    url: https://arxiv.org/abs/2208.07339
  - title: "Frantar dkk., “GPTQ: Accurate Post-Training Quantization for Generative Pre-trained Transformers”, arXiv:2210.17323 (31 Oktober 2022)"
    url: https://arxiv.org/abs/2210.17323
  - title: "Dettmers dkk., “QLoRA: Efficient Finetuning of Quantized LLMs”, arXiv:2305.14314 (23 Mei 2023)"
    url: https://arxiv.org/abs/2305.14314
level: menengah
status: ditinjau
updated: 2026-10-13
---

## Gagasan

[Parameter](/ensiklopedia/parameter-model/) model biasanya disimpan sebagai bilangan 16 atau 32 bit. Kuantisasi mengubahnya menjadi format yang lebih ringkas, misalnya bilangan bulat 8 bit (INT8) atau 4 bit. Memori yang dibutuhkan turun kira-kira sebanding dengan jumlah bit yang dipangkas, tetapi ada risiko mutu sedikit menurun karena angka-angkanya dibulatkan.

## Tiga tonggak

- **LLM.int8()** (Dettmers dkk., Agustus 2022) memangkas separuh memori inferensi tanpa penurunan kinerja. Checkpoint 175 miliar parameter dapat langsung dimuat dalam INT8. Kuncinya: segelintir dimensi fitur bernilai ekstrem (outlier) tetap dihitung dalam 16 bit, sedangkan sisanya dalam 8 bit.
- **GPTQ** (Frantar dkk., Oktober 2022) melakukan kuantisasi setelah pelatihan dalam satu langkah. Model 175 miliar parameter dapat dipampatkan ke 3 atau 4 bit per bobot dalam sekitar empat jam GPU, dengan penurunan akurasi yang dapat diabaikan.
- **QLoRA** (Dettmers dkk., Mei 2023) menggabungkan model dasar yang dibekukan dalam 4 bit dengan adaptor [LoRA](/ensiklopedia/lora/). Model 65 miliar parameter dapat [disetel](/ensiklopedia/penyetelan-halus/) di satu GPU 48 GB dengan mutu setara penyetelan 16 bit. Makalah ini memperkenalkan tipe data 4-bit NormalFloat (NF4).

## Mengapa penting

Kuantisasi membuat model [berbobot terbuka](/ensiklopedia/bobot-terbuka/) bisa dijalankan di laptop atau satu kartu grafis, bukan hanya di pusat data. Pada [server inferensi](/ensiklopedia/server-inferensi/), memori yang dihemat bisa dipakai untuk melayani lebih banyak permintaan sekaligus.
