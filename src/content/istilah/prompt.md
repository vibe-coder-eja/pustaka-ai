---
title: Prompt
aliases:
  - Perintah
  - Instruksi
summary: "Teks atau masukan lain yang diberikan kepada model AI untuk memandu jawabannya: pertanyaan, instruksi, contoh, data, atau gabungan semuanya."
category: dasar-ai
related:
  - prompt-engineering
  - prompt-sistem
  - context
  - few-shot-prompting
  - chain-of-thought
  - rantai-prompt
  - prompt-injection
  - llm
sources:
  - title: "Brown dkk., “Language Models are Few-Shot Learners”, arXiv:2005.14165 (28 Mei 2020)"
    url: https://arxiv.org/abs/2005.14165
  - title: "Claude Platform Docs, “Prompt engineering overview”"
    url: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview
level: dasar
status: ditinjau
updated: 2026-10-19
---

## Arti singkat

**Prompt** adalah masukan yang Anda berikan kepada [model](/ensiklopedia/model/) AI. Bentuknya bisa sesederhana satu pertanyaan (“Apa ibu kota Kalimantan Timur?”) atau sepanjang beberapa halaman berisi instruksi, dokumen, dan contoh. Bagi [LLM](/ensiklopedia/llm/), prompt adalah satu-satunya jalan untuk menyampaikan apa yang diinginkan saat [inferensi](/ensiklopedia/inference/).

## Isi prompt yang baik

Prompt yang efektif biasanya memuat beberapa unsur berikut:

- **Instruksi:** tugas apa yang harus dikerjakan.
- **Konteks:** latar belakang, data, atau dokumen yang diperlukan.
- **Contoh:** satu atau beberapa contoh masukan dan keluaran yang diharapkan ([few-shot](/ensiklopedia/few-shot-prompting/)).
- **Format:** bentuk jawaban, misalnya daftar, tabel, atau JSON.
- **Batasan:** hal yang tidak boleh dilakukan, panjang maksimum, atau gaya bahasa.

## Prompt sebagai cara “memprogram” model

Brown dkk. (2020) menunjukkan bahwa GPT-3 dapat mengerjakan tugas baru hanya dari instruksi dan beberapa contoh di dalam prompt, tanpa pelatihan ulang. Temuan ini mengubah cara orang memakai model bahasa: alih-alih melatih model baru untuk setiap tugas, pengguna cukup menulis prompt yang tepat. Kemampuan menyusun prompt kemudian berkembang menjadi praktik tersendiri, yaitu [prompt engineering](/ensiklopedia/prompt-engineering/).

## Jenis prompt dalam aplikasi

Pada aplikasi AI, prompt biasanya terdiri dari beberapa lapis:

- [Prompt sistem](/ensiklopedia/prompt-sistem/) dari pengembang, yang menetapkan peran dan aturan umum.
- Pesan pengguna, yaitu permintaan yang diketik.
- Riwayat percakapan, hasil pencarian, atau keluaran alat yang ditambahkan aplikasi.

Semua lapis itu bersama-sama membentuk [konteks](/ensiklopedia/context/) yang dibaca model.

## Risiko

Model membaca seluruh isi prompt sebagai teks, termasuk teks dari dokumen atau halaman web yang tidak ditulis pengguna. Penyerang dapat menyisipkan instruksi tersembunyi di sana; serangan ini disebut [prompt injection](/ensiklopedia/prompt-injection/). Karena itu, aplikasi yang memasukkan data luar ke prompt perlu memisahkan instruksi dari data dan membatasi tindakan yang dapat dilakukan model.
