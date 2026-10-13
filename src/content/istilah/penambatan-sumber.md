---
title: "Penambatan Sumber"
aliases:
  - "Grounding"
  - "Grounded generation"
  - "Atribusi sumber"
  - "Sitasi"
summary: "Upaya mengikat jawaban model pada sumber yang dapat diperiksa, seperti dokumen hasil retrieval, sehingga klaimnya bisa ditelusuri dan peluang halusinasi berkurang."
category: dasar-ai
related:
  - rag
  - hallucination
  - pencarian-semantik
  - pemotongan-dokumen
  - evals
  - prompt-injection
sources:
  - title: "Lewis dkk., “Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks”, arXiv:2005.11401 (22 Mei 2020)"
    url: https://arxiv.org/abs/2005.11401
  - title: "Gao dkk., “Enabling Large Language Models to Generate Text with Citations”, arXiv:2305.14627 (24 Mei 2023)"
    url: https://arxiv.org/abs/2305.14627
level: menengah
status: ditinjau
updated: 2026-10-13
---

## Masalah

Model bahasa menyimpan pengetahuan di dalam [parameternya](/ensiklopedia/parameter-model/). Lewis dkk. (2020) mencatat dua keterbatasan pengetahuan semacam itu: model sulit mengakses dan memanipulasinya secara tepat, dan model sulit menunjukkan asal-usul jawabannya serta memperbarui pengetahuannya. Jawaban yang tidak tertambat pada sumber mudah berubah menjadi [halusinasi](/ensiklopedia/hallucination/).

## Menambatkan lewat retrieval

[RAG](/ensiklopedia/rag/) menggabungkan memori parametrik, yaitu model pralatih, dengan memori non-parametrik berupa indeks vektor dokumen (dalam makalah Lewis dkk., Wikipedia). Dokumen yang diambil menjadi bahan jawaban, sehingga sumber dapat diganti tanpa melatih ulang model.

## Mengukur kualitas sitasi

Gao dkk. (2023) membuat ALCE, tolok ukur pertama untuk mengevaluasi sitasi yang dihasilkan model secara otomatis. Penilaiannya mencakup tiga aspek: kelancaran, kebenaran, dan kualitas sitasi. Hasilnya menunjukkan masih banyak ruang perbaikan. Pada dataset ELI5, bahkan model terbaik tidak didukung sitasi yang lengkap pada separuh kasus.

## Batas

Penambatan mengurangi halusinasi, tetapi tidak menghapusnya. Sumber yang diambil bisa keliru, usang, atau sengaja disusupi instruksi ([prompt injection](/ensiklopedia/prompt-injection/)). Karena itu jawaban yang bersitasi tetap perlu dicek ke sumbernya.
