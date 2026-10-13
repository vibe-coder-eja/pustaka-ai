---
title: "Context engineering"
aliases:
  - "Rekayasa konteks"
summary: "Disiplin memilih dan merawat himpunan token yang tepat untuk model pada saat inferensi: instruksi, alat, data eksternal, dan riwayat pesan, bukan sekadar menulis prompt."
category: ai-agentik
related:
  - prompt-engineering
  - context
  - context-window
  - rag
  - memory
  - harness-engineering
  - keluarga-x-engineer
sources:
  - title: "Anthropic, “Effective context engineering for AI agents” (29 September 2025)"
    url: https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents
level: menengah
status: ditinjau
updated: 2026-10-13
---

## Definisi

Anthropic (29 September 2025) menggambarkan context engineering sebagai strategi untuk mengurasi dan memelihara himpunan token (informasi) yang optimal selama inferensi model bahasa. Cakupannya lebih luas daripada teks instruksi: ikut dihitung deskripsi alat, data yang diambil dari luar, dan riwayat percakapan.

## Beda dengan prompt engineering

[Prompt engineering](/ensiklopedia/prompt-engineering/) berfokus pada cara menulis dan menyusun instruksi, terutama system prompt, dan cenderung menjadi pekerjaan yang dilakukan sekali. Context engineering bersifat iteratif: kurasi dilakukan setiap kali sistem memutuskan apa yang dikirim ke model pada langkah berikutnya. Karena [jendela konteks](/ensiklopedia/context-window/) terbatas, pertanyaan intinya adalah informasi mana yang layak masuk.

## Posisi dalam tangga evolusi

Context engineering sering ditempatkan sebagai tahap sesudah prompt engineering dan sebelum perancangan loop dan graf agent. Lihat [tangga evolusi](/ensiklopedia/tangga-evolusi/).
