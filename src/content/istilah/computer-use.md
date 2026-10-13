---
title: "Computer use"
aliases:
  - "Penggunaan komputer oleh AI"
  - "Browser agent"
summary: "Kemampuan model mengoperasikan komputer seperti manusia: melihat layar, menggerakkan kursor, mengklik, dan mengetik, alih-alih memakai alat khusus untuk tiap tugas."
category: ai-agentik
related:
  - agent
  - tool-calling
  - prompt-injection
  - autonomy
sources:
  - title: "Anthropic, “Introducing computer use, a new Claude 3.5 Sonnet, and Claude 3.5 Haiku” (22 Oktober 2024)"
    url: https://www.anthropic.com/news/3-5-models-and-computer-use
level: menengah
status: ditinjau
updated: 2026-10-13
---

## Pengumuman awal

Anthropic merilis computer use sebagai public beta pada 22 Oktober 2024. Pendekatannya melatih kemampuan umum memakai komputer, bukan membuat alat khusus untuk setiap tugas. Saat itu Anthropic menyebutnya eksperimental, kadang kurang efisien dan rawan salah; aksi seperti scroll, drag, dan zoom masih sulit, dan pengembang disarankan memulai dari tugas berisiko rendah.

## Ukuran saat itu

Pada benchmark OSWorld, Claude 3.5 Sonnet mencapai 14,9% pada kategori hanya-tangkapan-layar dan 22,0% bila diberi lebih banyak langkah. Angka ini milik Oktober 2024 dan sudah tidak mencerminkan kemampuan model terbaru.

## Risiko

Agent yang membaca layar dan halaman web rentan terhadap [prompt injection](/ensiklopedia/prompt-injection/).
