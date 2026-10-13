---
title: "Server Inferensi"
aliases:
  - "Inference server"
  - "LLM serving"
  - "Model serving"
  - "vLLM"
  - "Continuous batching"
summary: "Perangkat lunak yang memuat model ke perangkat keras dan melayani banyak permintaan sekaligus, dengan mengatur antrean, batching, dan memori agar throughput tinggi dan latensi tetap terjaga."
category: dasar-ai
related:
  - inference
  - prosesor-grafis
  - latensi-inferensi
  - cache-prompt
  - kuantisasi
  - api
sources:
  - title: "Yu dkk., “Orca: A Distributed Serving System for Transformer-Based Generative Models”, OSDI 2022"
    url: https://www.usenix.org/conference/osdi22/presentation/yu
  - title: "Kwon dkk., “Efficient Memory Management for Large Language Model Serving with PagedAttention”, arXiv:2309.06180 (12 September 2023)"
    url: https://arxiv.org/abs/2309.06180
level: lanjut
status: ditinjau
updated: 2026-10-13
---

## Tugasnya

Saat Anda memanggil [API](/ensiklopedia/api/) model bahasa, permintaan masuk ke server inferensi. Server inilah yang menjalankan model di [GPU](/ensiklopedia/prosesor-grafis/), menggabungkan permintaan banyak pengguna menjadi satu batch, mengelola memori, dan mengalirkan token jawaban kembali satu per satu. Mutu server inferensi menentukan berapa banyak pengguna yang bisa dilayani satu GPU dan berapa lama mereka menunggu.

## Batching per iterasi

Model bahasa menghasilkan teks token demi token. Pada batching biasa, permintaan yang selesai lebih dulu tidak bisa segera dikembalikan, dan permintaan yang baru datang harus menunggu seluruh batch selesai. Orca (Yu dkk., OSDI 2022) memperkenalkan penjadwalan tingkat iterasi: penjadwal hanya menjalankan satu iterasi model pada batch, sehingga permintaan bisa keluar dan masuk di setiap langkah. Teknik ini kini dikenal luas sebagai continuous batching.

## Mengelola memori cache KV

Setiap permintaan menyimpan cache key-value (KV) untuk token yang sudah diproses. Ukurannya besar dan berubah-ubah, sehingga mudah terbuang karena fragmentasi. PagedAttention (Kwon dkk., September 2023) meminjam teknik memori virtual dan paging dari sistem operasi. Di atasnya dibangun vLLM, yang hampir tidak membuang memori cache KV dan dapat berbagi cache di dalam maupun antar-permintaan. Throughput model populer naik 2–4 kali pada latensi yang sama dibanding sistem terbaik sebelumnya, termasuk FasterTransformer dan Orca. Mekanisme berbagi cache seperti ini juga menjadi dasar [cache prompt](/ensiklopedia/cache-prompt/).
