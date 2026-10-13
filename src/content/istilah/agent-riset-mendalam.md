---
title: "Agent Riset Mendalam"
aliases:
  - "Deep research"
  - "Deep research agent"
  - "Research agent"
summary: "Agent yang ditugasi meriset satu pertanyaan secara panjang: menyusun rencana, mencari dan membaca banyak sumber di web secara berulang, lalu menulis laporan bersitasi."
category: ai-agentik
related:
  - agent
  - orkestrasi-agent
  - sistem-multi-agent
  - penambatan-sumber
  - tolok-ukur
  - browser
sources:
  - title: "Google, “Try Deep Research and our new experimental model in Gemini” (11 Desember 2024)"
    url: https://blog.google/products-and-platforms/products/gemini/google-gemini-deep-research/
  - title: "OpenAI, “Introducing deep research” (2 Februari 2025)"
    url: https://openai.com/index/introducing-deep-research/
  - title: "Anthropic, “How we built our multi-agent research system” (13 Juni 2025)"
    url: https://www.anthropic.com/engineering/multi-agent-research-system
level: dasar
status: ditinjau
updated: 2026-10-13
---

## Cara kerja umum

Agent riset mendalam bekerja dalam putaran yang panjang. Ia memecah pertanyaan menjadi rencana, mencari di web, membaca hasilnya, lalu memutuskan pencarian berikutnya berdasarkan apa yang baru dipelajari. Setelah beberapa kali putaran, temuannya disusun menjadi laporan dengan tautan ke [sumber asli](/ensiklopedia/penambatan-sumber/).

## Tiga peluncuran awal

- **Google Gemini** (11 Desember 2024): setelah pertanyaan dimasukkan, Deep Research menyusun rencana riset bertahap yang bisa direvisi atau disetujui pengguna. Setelah disetujui, Gemini menelusuri web selama beberapa menit dan menghasilkan laporan temuan utama dengan tautan ke sumbernya. Google menyebutnya fitur pertama di Gemini yang mewujudkan kemampuan agentik.
- **OpenAI** (2 Februari 2025): deep research ditenagai versi model o3 yang dioptimalkan untuk penelusuran web dan analisis data. Satu tugas dapat memakan 5–30 menit. Pada Humanity's Last Exam, model di balik fitur ini mencetak akurasi 26,6%, tertinggi di antara model yang dibandingkan OpenAI saat itu.
- **Anthropic** (Juni 2025): fitur Research Claude memakai pola [orkestrasi](/ensiklopedia/orkestrasi-agent/) orchestrator-worker. Agent utama menyusun strategi dan menjalankan beberapa subagent pencari secara paralel.

## Hal yang perlu diwaspadai

Laporan yang panjang dan rapi belum tentu benar. Klaim penting tetap perlu dicek ke sumber yang ditautkan. Halaman web yang dibaca agent juga bisa memuat [prompt injection](/ensiklopedia/prompt-injection/).
