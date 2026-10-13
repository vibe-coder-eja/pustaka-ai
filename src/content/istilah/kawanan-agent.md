---
title: "Kawanan Agent"
aliases:
  - "Swarm"
  - "Agent swarm"
  - "Swarm intelligence"
  - "Kecerdasan kawanan"
summary: "Pola banyak agent sederhana yang berkoordinasi tanpa pengendali pusat yang kuat; istilah ini berakar dari kecerdasan kawanan di alam dan kini juga dipakai untuk kerangka multi-agent yang mengandalkan serah terima antar-agent."
category: ai-agentik
related:
  - sistem-multi-agent
  - orkestrasi-agent
  - subagent
  - agent
  - a2a-agent2agent
sources:
  - title: "Dorigo & Birattari, “Swarm intelligence”, Scholarpedia 2(9):1462 (2007)"
    url: http://www.scholarpedia.org/article/Swarm_intelligence
  - title: "OpenAI, repositori “openai/swarm” (GitHub)"
    url: https://github.com/openai/swarm
level: menengah
status: ditinjau
updated: 2026-10-13
---

## Akar: kecerdasan kawanan

Dorigo & Birattari (Scholarpedia, 2007) mendefinisikan kecerdasan kawanan (swarm intelligence) sebagai disiplin yang mempelajari sistem alami maupun buatan yang terdiri dari banyak individu, yang berkoordinasi lewat kendali terdesentralisasi dan pengorganisasian diri. Contohnya koloni semut dan rayap, kawanan ikan, dan kawanan burung. Ciri khasnya adalah kemampuan bertindak terkoordinasi tanpa koordinator atau pengendali dari luar. Karena tidak ada individu yang memegang kendali, satu individu yang gagal mudah digantikan individu lain.

## Pemakaian di era LLM

Dalam percakapan tentang agent LLM, "swarm" sering dipakai lebih longgar untuk sekumpulan agent kecil berspesialisasi yang saling mengoper pekerjaan. Contoh terkenalnya Swarm dari OpenAI, kerangka eksperimental untuk tujuan edukasi tentang orkestrasi multi-agent yang ringan. Swarm hanya punya dua abstraksi dasar: agent, yang berisi instruksi dan alat, serta handoff, yaitu kemampuan agent menyerahkan percakapan ke agent lain kapan saja. Menurut README-nya, Swarm kini digantikan oleh OpenAI Agents SDK untuk pemakaian produksi.

## Perbedaan dengan orkestrasi terpusat

Pada pola [orchestrator-workers](/ensiklopedia/orkestrasi-agent/), satu agent pusat memecah tugas dan menggabungkan hasil. Pada pola kawanan, kendali lebih tersebar: tiap agent memutuskan sendiri kapan menyerahkan tugas. Rancangan semacam ini lebih lentur, tetapi alurnya lebih sulit diprediksi dan diuji. Perbandingan lebih luas ada di [sistem multi-agent](/ensiklopedia/sistem-multi-agent/).
