---
title: "Latensi Inferensi"
aliases:
  - "Latency"
  - "TTFT"
  - "Time to first token"
  - "TPOT"
  - "Throughput"
summary: "Waktu tunggu dalam menjalankan model, biasanya diukur sebagai waktu sampai token pertama muncul (TTFT) dan waktu per token keluaran berikutnya (TPOT); dipertimbangkan bersama throughput, yaitu jumlah pekerjaan yang dilayani per satuan waktu."
category: dasar-ai
related:
  - server-inferensi
  - inference
  - cache-prompt
  - tokenisasi
  - prosesor-grafis
  - performance
sources:
  - title: "Zhong dkk., “DistServe: Disaggregating Prefill and Decoding for Goodput-optimized Large Language Model Serving”, arXiv:2401.09670 (18 Januari 2024)"
    url: https://arxiv.org/abs/2401.09670
  - title: "Kwon dkk., “Efficient Memory Management for Large Language Model Serving with PagedAttention”, arXiv:2309.06180 (12 September 2023)"
    url: https://arxiv.org/abs/2309.06180
level: menengah
status: ditinjau
updated: 2026-10-13
---

## Dua fase, dua ukuran

Menjawab satu permintaan terdiri dari dua fase:

1. **Prefill:** seluruh prompt diproses sekaligus untuk menghasilkan token pertama. Waktu yang dibutuhkan disebut time to first token (TTFT). Inilah jeda yang terasa sebelum jawaban mulai muncul.
2. **Decoding:** token berikutnya dihasilkan satu per satu. Kecepatannya diukur sebagai time per output token (TPOT), yang menentukan seberapa cepat teks mengalir.

Zhong dkk. (Januari 2024) memakai kedua ukuran ini untuk menilai layanan LLM. Mereka juga menunjukkan bahwa menjalankan kedua fase di GPU yang sama menimbulkan gangguan timbal balik. Sistem mereka, DistServe, memisahkan prefill dan decoding ke GPU yang berbeda agar target TTFT dan TPOT bisa dipenuhi bersamaan.

## Latensi dan throughput

Throughput adalah banyaknya permintaan atau token yang dilayani per detik. Menggabungkan lebih banyak permintaan dalam satu batch menaikkan throughput, tetapi bisa memperpanjang waktu tunggu tiap pengguna. Karena itu sistem seperti vLLM dilaporkan dengan dua angka: throughput 2–4 kali lebih tinggi pada tingkat latensi yang sama.

## Yang memengaruhi latensi bagi pengguna

- Panjang prompt: makin panjang, makin lama prefill. [Cache prompt](/ensiklopedia/cache-prompt/) memangkas bagian ini.
- Panjang jawaban: makin banyak token keluaran, makin lama totalnya.
- Ukuran model dan perangkat keras: model besar di [GPU](/ensiklopedia/prosesor-grafis/) yang penuh lebih lambat.
- Penalaran tambahan: model yang berpikir dulu menghasilkan lebih banyak token sebelum jawaban akhir.
