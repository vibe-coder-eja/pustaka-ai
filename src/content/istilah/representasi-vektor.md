---
title: "Representasi Vektor"
aliases:
  - "Embedding"
  - "Embeddings"
  - "Word embedding"
  - "Sentence embedding"
summary: "Cara mengubah kata, kalimat, atau dokumen menjadi deretan angka (vektor) sehingga teks yang maknanya mirip letaknya berdekatan dan kemiripannya dapat dihitung."
category: dasar-ai
related:
  - basis-data-vektor
  - pencarian-semantik
  - rag
  - pemotongan-dokumen
  - llm
sources:
  - title: "Mikolov dkk., “Efficient Estimation of Word Representations in Vector Space”, arXiv:1301.3781 (16 Januari 2013)"
    url: https://arxiv.org/abs/1301.3781
  - title: "Reimers & Gurevych, “Sentence-BERT: Sentence Embeddings using Siamese BERT-Networks”, arXiv:1908.10084 (27 Agustus 2019)"
    url: https://arxiv.org/abs/1908.10084
level: menengah
status: ditinjau
updated: 2026-10-13
---

## Gagasan

Komputer tidak bisa membandingkan makna kata secara langsung, tetapi bisa membandingkan angka. Embedding memetakan setiap potongan teks ke sebuah titik dalam ruang berdimensi banyak. Teks yang maknanya berdekatan diharapkan jatuh di titik yang berdekatan pula. Kedekatan itu biasanya diukur dengan kemiripan kosinus, yaitu seberapa searah dua vektor.

## Dari kata

Word2vec (Mikolov dkk., 2013) memperkenalkan dua arsitektur untuk mempelajari vektor kata dari data yang sangat besar. Vektor berkualitas tinggi dapat dipelajari dari 1,6 miliar kata dalam waktu kurang dari sehari. Hasilnya unggul pada uji kemiripan kata, baik secara sintaksis maupun semantik.

## Ke kalimat

Untuk membandingkan kalimat, BERT harus menerima kedua kalimat sekaligus. Mencari pasangan paling mirip di antara 10.000 kalimat butuh sekitar 50 juta kali inferensi, kira-kira 65 jam. Sentence-BERT (Reimers & Gurevych, 2019) mengubah BERT agar setiap kalimat menghasilkan embedding sendiri yang bisa dibandingkan dengan kemiripan kosinus. Waktu pencarian yang sama turun menjadi sekitar 5 detik dengan akurasi setara.

## Pemakaian

Embedding menjadi bahan dasar [pencarian semantik](/ensiklopedia/pencarian-semantik/), pengelompokan dokumen, dan [RAG](/ensiklopedia/rag/). Vektornya disimpan dan dicari lewat [basis data vektor](/ensiklopedia/basis-data-vektor/).
