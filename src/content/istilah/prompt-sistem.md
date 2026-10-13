---
title: "Prompt Sistem"
aliases:
  - "System prompt"
  - "System message"
  - "Instruksi sistem"
summary: "Instruksi dasar yang dipasang pengembang aplikasi sebelum percakapan dimulai, misalnya peran, aturan, dan format; model diharapkan memprioritaskannya di atas pesan pengguna atau isi dari pihak ketiga."
category: dasar-ai
related:
  - prompt
  - prompt-engineering
  - prompt-injection
  - context-engineering
  - pembobolan-model
  - cache-prompt
sources:
  - title: "Wallace dkk., “The Instruction Hierarchy: Training LLMs to Prioritize Privileged Instructions”, arXiv:2404.13208 (19 April 2024)"
    url: https://arxiv.org/abs/2404.13208
  - title: "Anthropic, “Prompting best practices” (dokumentasi Claude, diakses 13 Oktober 2026)"
    url: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices
level: dasar
status: ditinjau
updated: 2026-10-13
---

## Fungsi

Prompt sistem adalah lapisan instruksi paling dasar dalam sebuah aplikasi AI. Isinya bisa berupa identitas atau peran asisten, aturan yang harus dipatuhi, gaya bahasa, dan format jawaban. Pada API Claude, prompt sistem dikirim lewat parameter `system`, terpisah dari daftar pesan percakapan. Dokumentasi Anthropic menyebut bahwa menetapkan peran di prompt sistem memfokuskan perilaku dan nada model, bahkan bila hanya satu kalimat.

## Hierarki instruksi

Wallace dkk. (OpenAI, April 2024) berpendapat bahwa salah satu kerentanan utama model bahasa adalah memperlakukan prompt sistem dari pengembang setara dengan teks dari pengguna yang tidak tepercaya atau pihak ketiga. Mereka mengusulkan hierarki instruksi: bila instruksi bertentangan, yang berprivilese lebih tinggi dimenangkan. Setelah GPT-3.5 dilatih dengan data yang mencontohkan hierarki itu, ketahanannya meningkat tajam, termasuk terhadap jenis serangan yang tidak muncul saat pelatihan, dengan penurunan kemampuan umum yang minimal.

## Bukan pagar mutlak

Prompt sistem tetap dapat dikalahkan oleh [prompt injection](/ensiklopedia/prompt-injection/) dan [pembobolan model](/ensiklopedia/pembobolan-model/). Karena itu aturan yang benar-benar penting juga ditegakkan di luar prompt, misalnya lewat [pagar pengaman](/ensiklopedia/pagar-pengaman-ai/) dan [hak akses minimum](/ensiklopedia/hak-akses-minimum/).
