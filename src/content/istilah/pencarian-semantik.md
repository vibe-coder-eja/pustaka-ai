---
title: "Pencarian Semantik"
aliases:
  - "Semantic search"
  - "Dense retrieval"
  - "Hybrid search"
  - "Pencarian hibrida"
  - "BM25"
summary: "Pencarian berdasarkan kemiripan makna, biasanya dengan membandingkan embedding kueri dan dokumen, bukan sekadar mencocokkan kata yang sama; sering digabung dengan pencarian kata kunci menjadi pencarian hibrida."
category: dasar-ai
related:
  - representasi-vektor
  - basis-data-vektor
  - rag
  - pemotongan-dokumen
  - penambatan-sumber
sources:
  - title: "Karpukhin dkk., “Dense Passage Retrieval for Open-Domain Question Answering”, arXiv:2004.04906 (10 April 2020)"
    url: https://arxiv.org/abs/2004.04906
  - title: "Anthropic, “Introducing Contextual Retrieval” (19 September 2024)"
    url: https://www.anthropic.com/engineering/contextual-retrieval
level: menengah
status: ditinjau
updated: 2026-10-13
---

## Kata kunci dan makna

Pencarian leksikal seperti TF-IDF dan BM25 menilai dokumen dari kata yang sama dengan kueri. Cara ini kuat untuk nama, kode produk, atau istilah persis, tetapi lemah saat dokumen memakai sinonim atau parafrasa. Pencarian semantik membandingkan [embedding](/ensiklopedia/representasi-vektor/) kueri dan dokumen, sehingga "biaya pengiriman" tetap bisa menemukan dokumen tentang "ongkos kirim".

## Retrieval padat

Dense Passage Retrieval (Karpukhin dkk., 2020) memakai dua encoder, satu untuk pertanyaan dan satu untuk passage, yang dilatih dari sejumlah kecil pasangan pertanyaan-passage. Pada berbagai dataset tanya jawab domain terbuka, metode ini mengungguli sistem Lucene-BM25 yang kuat sebesar 9–19 poin persentase pada akurasi 20 passage teratas. Sebelumnya, metode leksikal adalah standar de facto.

## Pencarian hibrida

Dalam praktik, kedua cara sering digabung karena kelebihannya saling melengkapi. Pada eksperimen Anthropic (September 2024), embedding dan indeks BM25 yang sama-sama diberi konteks per potongan menurunkan tingkat gagal ambil pada 20 potongan teratas dari 5,7% menjadi 2,9%. Langkah lanjutannya, pemeringkatan ulang, dibahas di [pemotongan dokumen](/ensiklopedia/pemotongan-dokumen/).
