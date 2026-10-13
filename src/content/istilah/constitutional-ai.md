---
title: "Constitutional AI"
aliases:
  - "AI Konstitusional"
  - "RLAIF"
  - "RL from AI Feedback"
summary: "Metode dari Anthropic untuk melatih asisten AI yang tidak berbahaya dengan sedikit label manusia: manusia hanya memberi daftar prinsip, dan AI mengkritik serta menilai keluarannya sendiri."
category: keselamatan-etika
related:
  - rlhf
  - alignment
  - pengawasan-skalabel
  - llm
sources:
  - title: "Bai dkk., “Constitutional AI: Harmlessness from AI Feedback”, arXiv:2212.08073 (15 Desember 2022)"
    url: https://arxiv.org/abs/2212.08073
level: lanjut
status: ditinjau
updated: 2026-10-13
---

## Dua tahap

Makalah Bai dkk. (Anthropic, Desember 2022) melatih asisten yang tidak berbahaya dengan label manusia minimal. Manusia hanya menyediakan sekumpulan prinsip pemandu (“konstitusi”). Metodenya dua fase:

1. **Fase terawasi:** model membuat jawaban, mengkritiknya berdasarkan prinsip, lalu merevisinya. Model awal kemudian disetel pada jawaban hasil revisi.
2. **Fase pembelajaran penguatan:** model hasil setelan menghasilkan pasangan jawaban, model AI menilai mana yang lebih baik, dan penilaian itu melatih model preferensi yang menjadi sinyal imbalan. Pendekatan ini disebut RLAIF (pembelajaran penguatan dari umpan balik AI).

Hasilnya, menurut penulis, asisten yang tidak berbahaya namun tetap menanggapi permintaan berbahaya dengan menjelaskan keberatannya, bukan sekadar menolak.

## Catatan

Ini hasil satu kelompok riset pada model mereka. Prinsip dipilih oleh pengembang, jadi pertanyaan siapa yang menentukan isi “konstitusi” tetap terbuka, dan metode ini tidak menyelesaikan masalah penyelarasan secara umum. Bandingkan dengan [RLHF](/ensiklopedia/rlhf/).
