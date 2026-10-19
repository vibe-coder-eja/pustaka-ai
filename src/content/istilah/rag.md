---
title: RAG
aliases:
  - Retrieval-Augmented Generation
  - Generasi berbantuan pencarian
summary: "Retrieval-augmented generation: teknik yang mengambil dokumen relevan dari sumber luar lalu menyertakannya dalam prompt, sehingga model AI menjawab berdasarkan data terkini atau data internal."
category: dasar-ai
related:
  - pemotongan-dokumen
  - representasi-vektor
  - basis-data-vektor
  - pencarian-semantik
  - penambatan-sumber
  - graf-pengetahuan
  - hallucination
  - context-window
  - memory
sources:
  - title: "Lewis dkk., “Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks”, arXiv:2005.11401 (22 Mei 2020)"
    url: https://arxiv.org/abs/2005.11401
level: menengah
status: ditinjau
updated: 2026-10-19
---

## Arti singkat

**RAG** (*retrieval-augmented generation*) menggabungkan dua langkah: **mencari** potongan informasi yang relevan dari kumpulan dokumen, lalu **menghasilkan** jawaban dengan potongan itu sebagai bahan. Dengan RAG, [LLM](/ensiklopedia/llm/) dapat menjawab pertanyaan tentang dokumen perusahaan, aturan terbaru, atau isi basis pengetahuan tanpa harus dilatih ulang.

## Asal gagasan

Lewis dkk. (2020) memperkenalkan nama RAG. Mereka mencatat bahwa model bahasa memang menyimpan pengetahuan di parameternya, tetapi sulit mengakses dan memperbarui pengetahuan itu, dan sulit pula menunjukkan asal jawabannya. Solusi mereka adalah memadukan **memori parametrik** (model seq2seq yang sudah dilatih) dengan **memori non-parametrik** berupa indeks vektor Wikipedia yang diakses lewat *retriever* neural. Pada tugas pembuatan teks, model RAG menghasilkan bahasa yang lebih spesifik, beragam, dan faktual dibanding model yang hanya mengandalkan parameternya.

## Alur kerja yang umum sekarang

1. **Persiapan:** dokumen dipecah menjadi bagian kecil ([pemotongan dokumen](/ensiklopedia/pemotongan-dokumen/)), lalu tiap bagian diubah menjadi [vektor](/ensiklopedia/representasi-vektor/) dan disimpan di [basis data vektor](/ensiklopedia/basis-data-vektor/).
2. **Pencarian:** pertanyaan pengguna diubah menjadi vektor, lalu bagian dokumen yang maknanya paling dekat diambil ([pencarian semantik](/ensiklopedia/pencarian-semantik/)). Banyak sistem juga menggabungkannya dengan pencarian kata kunci.
3. **Generasi:** bagian-bagian itu dimasukkan ke prompt bersama pertanyaan, dan model diminta menjawab berdasarkan bahan tersebut, sebaiknya dengan menyebut sumbernya ([penambatan sumber](/ensiklopedia/penambatan-sumber/)).

## Kelebihan dan batasan

- **Kelebihan:** data bisa diperbarui tanpa melatih ulang model, jawaban dapat ditelusuri ke sumbernya, dan risiko [halusinasi](/ensiklopedia/hallucination/) berkurang.
- **Batasan:** kualitas jawaban bergantung pada kualitas pencarian. Bila potongan yang diambil salah atau tidak lengkap, model tetap bisa menjawab dengan yakin tetapi keliru. Potongan yang terlalu banyak juga memenuhi [context window](/ensiklopedia/context-window/).

## Hubungan dengan istilah lain

RAG sering dibandingkan dengan [penyetelan halus](/ensiklopedia/penyetelan-halus/). RAG cocok untuk **menambah pengetahuan** yang sering berubah, sedangkan penyetelan halus lebih cocok untuk **mengubah perilaku** atau gaya model. Untuk data yang saling terhubung, sebagian sistem memakai [graf pengetahuan](/ensiklopedia/graf-pengetahuan/) sebagai sumber pencarian.
