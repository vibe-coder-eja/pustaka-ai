---
title: "Pagar Pengaman AI"
aliases:
  - "Guardrails"
  - "Rails"
  - "Safeguard model"
  - "Moderasi konten AI"
summary: "Lapisan kontrol yang memeriksa atau membatasi masukan, keluaran, dan tindakan aplikasi AI saat berjalan, misalnya menolak topik tertentu, menyaring konten berbahaya, atau menahan aksi berisiko."
category: keselamatan-etika
related:
  - alignment
  - prompt-injection
  - pembobolan-model
  - manusia-dalam-putaran
  - hak-akses-minimum
  - constitutional-ai
sources:
  - title: "Rebedea dkk., “NeMo Guardrails: A Toolkit for Controllable and Safe LLM Applications with Programmable Rails”, arXiv:2310.10501 (16 Oktober 2023)"
    url: https://arxiv.org/abs/2310.10501
  - title: "Inan dkk., “Llama Guard: LLM-based Input-Output Safeguard for Human-AI Conversations”, arXiv:2312.06674 (7 Desember 2023)"
    url: https://arxiv.org/abs/2312.06674
level: menengah
status: ditinjau
updated: 2026-10-13
---

## Di dalam model atau di sekelilingnya

Ada dua tempat untuk memasang batasan. Yang pertama di dalam model, ditanamkan saat pelatihan lewat [alignment](/ensiklopedia/alignment/), misalnya [RLHF](/ensiklopedia/rlhf/) atau [Constitutional AI](/ensiklopedia/constitutional-ai/). Yang kedua di sekeliling model, sebagai lapisan yang berjalan saat aplikasi dipakai. Istilah guardrails biasanya merujuk pada jenis kedua.

## Pagar yang dapat diprogram

NeMo Guardrails (Rebedea dkk., Oktober 2023) adalah toolkit sumber terbuka untuk menambahkan "rails" pada aplikasi percakapan berbasis LLM. Contohnya: tidak membahas topik yang dianggap berbahaya, mengikuti alur dialog yang sudah ditentukan, atau memakai gaya bahasa tertentu. Menurut penulisnya, rails ini ditentukan pengembang, tidak bergantung pada LLM yang dipakai, dan mudah ditafsirkan.

## Model penjaga

Pendekatan lain memakai model kedua sebagai pengklasifikasi. Llama Guard (Inan dkk., Desember 2023) adalah model Llama 2 7B yang disetel untuk mengelompokkan prompt dan jawaban berdasarkan taksonomi risiko keselamatan. Pada dataset OpenAI Moderation Evaluation dan ToxicChat, kinerjanya setara atau melampaui alat moderasi konten yang tersedia saat itu.

## Berlapis, bukan tunggal

Pagar pengaman tetap bisa ditembus, seperti terlihat pada [pembobolan model](/ensiklopedia/pembobolan-model/) dan [prompt injection](/ensiklopedia/prompt-injection/). Karena itu pagar biasanya dipasang bersama kontrol lain: [hak akses minimum](/ensiklopedia/hak-akses-minimum/), [kotak pasir](/ensiklopedia/kotak-pasir/), dan [persetujuan manusia](/ensiklopedia/manusia-dalam-putaran/) untuk tindakan berisiko.
