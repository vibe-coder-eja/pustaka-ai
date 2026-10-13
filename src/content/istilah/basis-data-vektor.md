---
title: "Basis Data Vektor"
aliases:
  - "Vector database"
  - "Vector store"
  - "Indeks vektor"
summary: "Sistem penyimpanan yang mengindeks vektor embedding dan mencari tetangga terdekatnya dengan cepat; dipakai untuk pencarian semantik dan RAG."
category: dasar-ai
related:
  - representasi-vektor
  - pencarian-semantik
  - rag
  - pemotongan-dokumen
  - database
sources:
  - title: "Malkov & Yashunin, “Efficient and robust approximate nearest neighbor search using Hierarchical Navigable Small World graphs”, arXiv:1603.09320 (30 Maret 2016)"
    url: https://arxiv.org/abs/1603.09320
  - title: "Johnson, Douze & Jégou, “Billion-scale similarity search with GPUs”, arXiv:1702.08734 (28 Februari 2017)"
    url: https://arxiv.org/abs/1702.08734
  - title: "Anthropic, “Introducing Contextual Retrieval” (19 September 2024)"
    url: https://www.anthropic.com/engineering/contextual-retrieval
level: menengah
status: ditinjau
updated: 2026-10-13
---

## Masalah yang diselesaikan

Setelah teks diubah menjadi [embedding](/ensiklopedia/representasi-vektor/), pertanyaannya menjadi: vektor mana yang paling dekat dengan vektor kueri? Membandingkan satu per satu (brute force) dengan jutaan atau miliaran vektor terlalu lambat. Karena itu basis data vektor biasanya memakai pencarian tetangga terdekat perkiraan (approximate nearest neighbor, ANN), yang menukar sedikit ketepatan dengan kecepatan jauh lebih tinggi.

## Teknik indeks

- **HNSW** (Malkov & Yashunin, 2016) membangun beberapa lapis graf kedekatan. Pencarian dimulai dari lapis atas yang jarang, lalu turun ke lapis yang makin rapat, sehingga kompleksitasnya tumbuh secara logaritmik.
- **FAISS** (Johnson, Douze & Jégou, 2017) mengoptimalkan pencarian kemiripan di GPU. Implementasinya 8,5 kali lebih cepat daripada teknik GPU terbaik sebelumnya. Makalah itu juga memakai product quantization untuk memampatkan vektor dan membangun graf tetangga terdekat untuk 95 juta gambar dalam 35 menit.

## Peran dalam RAG

Anthropic (September 2024) merangkum alur [RAG](/ensiklopedia/rag/) yang umum dalam tiga langkah. Pertama, korpus dipecah menjadi [potongan](/ensiklopedia/pemotongan-dokumen/) kecil. Kedua, tiap potongan diubah menjadi embedding. Ketiga, embedding disimpan di basis data vektor yang bisa dicari berdasarkan kemiripan makna. Saat pengguna bertanya, potongan yang paling mirip dengan kueri diambil lalu ditambahkan ke prompt.
