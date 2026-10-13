---
title: "Graf Pengetahuan"
aliases:
  - "Knowledge graph"
  - "GraphRAG"
  - "Graf entitas"
summary: "Kumpulan data berbentuk graf yang simpulnya mewakili entitas, seperti orang, tempat, atau konsep, dan sisinya mewakili hubungan antarentitas; dipakai untuk menyimpan dan menalar pengetahuan secara terstruktur."
category: dasar-ai
related:
  - rag
  - representasi-vektor
  - pencarian-semantik
  - penambatan-sumber
  - memory
sources:
  - title: "Hogan dkk., “Knowledge Graphs”, arXiv:2003.02320 (4 Maret 2020)"
    url: https://arxiv.org/abs/2003.02320
  - title: "Edge dkk., “From Local to Global: A Graph RAG Approach to Query-Focused Summarization”, arXiv:2404.16130 (24 April 2024)"
    url: https://arxiv.org/abs/2404.16130
level: menengah
status: ditinjau
updated: 2026-10-13
---

## Definisi

Hogan dkk. (2020), dalam salah satu pengantar paling lengkap tentang topik ini, memakai definisi yang inklusif. Graf pengetahuan adalah graf data yang dimaksudkan untuk menghimpun dan menyampaikan pengetahuan tentang dunia nyata. Simpulnya mewakili entitas yang diminati, dan sisinya mewakili hubungan di antara entitas tersebut. Contoh: simpul "Jakarta" terhubung ke simpul "Indonesia" lewat sisi "ibu kota dari".

## Beda dengan pencarian vektor

[Basis data vektor](/ensiklopedia/basis-data-vektor/) menemukan teks yang maknanya mirip. Graf pengetahuan menyimpan hubungan secara eksplisit, sehingga pertanyaan seperti "siapa saja yang bekerja di lembaga yang didirikan X" bisa dijawab dengan menelusuri sisi graf. Hogan dkk. membahas cara pengetahuan diwakili dan diekstraksi lewat gabungan teknik deduktif dan induktif, serta cara graf dibuat, diperkaya, dinilai mutunya, dan diterbitkan.

## GraphRAG

Edge dkk. (Microsoft, April 2024) mencatat bahwa [RAG](/ensiklopedia/rag/) biasa gagal pada pertanyaan global atas seluruh korpus, misalnya "apa tema utama dalam kumpulan dokumen ini?". Pertanyaan semacam itu sebenarnya tugas meringkas, bukan mengambil potongan. GraphRAG memakai LLM untuk membangun indeks dua tahap. Pertama, graf pengetahuan entitas diturunkan dari dokumen sumber. Kedua, ringkasan dibuat lebih dulu untuk setiap komunitas entitas yang saling berkaitan erat. Saat ada pertanyaan, setiap ringkasan komunitas menghasilkan jawaban parsial, lalu semua jawaban parsial digabung menjadi jawaban akhir.
