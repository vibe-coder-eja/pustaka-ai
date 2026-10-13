---
title: "Prompt injection"
aliases:
  - "Injeksi prompt"
  - "Indirect prompt injection"
summary: "Serangan yang menyelipkan instruksi ke dalam masukan atau data yang dibaca model sehingga mengalahkan instruksi asli; pada varian tidak langsung, instruksi disembunyikan di data yang kelak diambil aplikasi."
category: keselamatan-etika
related:
  - agent
  - tool-calling
  - rag
  - alignment
  - hallucination
  - pembobolan-model
  - prompt-sistem
  - kotak-pasir
sources:
  - title: "Greshake dkk., “Not what you've signed up for: Compromising Real-World LLM-Integrated Applications with Indirect Prompt Injection”, arXiv:2302.12173 (23 Februari 2023)"
    url: https://arxiv.org/abs/2302.12173
level: menengah
status: ditinjau
updated: 2026-10-13
---

## Masalah inti

Fungsi model bahasa diatur lewat bahasa alami, sehingga model sulit membedakan instruksi dari data. Greshake dkk. menunjukkan bahwa aplikasi yang terhubung ke model “mengaburkan batas antara data dan instruksi”: penyerang tidak perlu berbicara langsung dengan model, cukup menanam instruksi di data yang kemungkinan akan diambil aplikasi, misalnya halaman web.

## Dampak yang didemonstrasikan

Makalah memetakan pencurian data, penyebaran seperti worm, pencemaran ekosistem informasi, dan manipulasi pemanggilan API, serta memperagakannya pada sistem nyata (Bing Chat berbasis GPT-4 dan asisten penulis kode). Penulis menyimpulkan bahwa mitigasi yang efektif saat itu belum ada.

## Relevansi bagi agent

Makin besar kewenangan [agent](/ensiklopedia/agent/) untuk membaca web, surel, atau berkas dan memanggil alat, makin besar akibat satu instruksi tersisip. Karena itu isi yang diamati agent diperlakukan sebagai data, bukan perintah.
