---
title: "Pemotongan Dokumen"
aliases:
  - "Chunking"
  - "Chunk"
  - "Reranking"
  - "Pemeringkatan ulang"
  - "Contextual retrieval"
summary: "Langkah memecah dokumen panjang menjadi potongan kecil (chunk) sebelum diindeks untuk retrieval; sering diikuti pemeringkatan ulang (reranking) agar potongan paling relevan masuk ke konteks model."
category: dasar-ai
related:
  - rag
  - representasi-vektor
  - basis-data-vektor
  - pencarian-semantik
  - context-window
  - context-engineering
sources:
  - title: "Anthropic, “Introducing Contextual Retrieval” (19 September 2024)"
    url: https://www.anthropic.com/engineering/contextual-retrieval
  - title: "Nogueira & Cho, “Passage Re-ranking with BERT”, arXiv:1901.04085 (13 Januari 2019)"
    url: https://arxiv.org/abs/1901.04085
level: menengah
status: ditinjau
updated: 2026-10-13
---

## Mengapa dipotong

Basis pengetahuan biasanya terlalu besar untuk dimasukkan utuh ke [context window](/ensiklopedia/context-window/). Karena itu dokumen dipecah menjadi potongan yang lebih kecil. Menurut Anthropic, ukurannya biasanya tidak lebih dari beberapa ratus token. Setiap potongan lalu diubah menjadi [embedding](/ensiklopedia/representasi-vektor/) dan diindeks. Ukuran potongan, letak batasnya, dan tumpang-tindih antarpotongan semuanya memengaruhi mutu pengambilan.

## Masalah konteks yang hilang

Potongan yang lepas dari dokumen asalnya bisa kehilangan makna. Contoh dari Anthropic: kalimat "pendapatan perusahaan tumbuh 3% dibanding kuartal sebelumnya" tidak menyebut perusahaan mana dan periode kapan. Teknik Contextual Retrieval menjawabnya dengan meminta model menulis keterangan singkat, biasanya 50–100 token, yang menempatkan potongan itu dalam dokumennya. Keterangan itu ditambahkan di depan potongan sebelum dibuat embedding dan indeks BM25.

## Pemeringkatan ulang

Pengambilan awal dari indeks yang besar dapat mengembalikan puluhan hingga ratusan potongan. Reranker menilai ulang kecocokan setiap potongan dengan kueri, lalu hanya yang teratas diteruskan ke model. Nogueira & Cho (2019) memakai BERT untuk tugas ini dan menduduki puncak papan peringkat MS MARCO, mengungguli hasil terbaik sebelumnya sebesar 27% (relatif) pada MRR@10. Dalam eksperimen Anthropic, menambah reranking ke Contextual Retrieval menurunkan tingkat gagal ambil 20 potongan teratas dari 5,7% menjadi 1,9%. Imbalannya, latensi dan biaya bertambah karena ada langkah tambahan saat kueri berjalan.
