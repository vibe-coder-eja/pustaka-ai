---
title: "Memori Episodik"
aliases:
  - "Episodic memory"
  - "Memory stream"
  - "Memori jangka panjang agent"
  - "Semantic memory"
  - "Working memory"
summary: "Ingatan agent tentang pengalaman atau kejadian yang pernah dialaminya, misalnya langkah yang diambil kemarin dan hasilnya, yang dapat diambil kembali untuk memandu keputusan berikutnya."
category: ai-agentik
related:
  - memory
  - agent
  - context-window
  - refleksi-mandiri
  - graf-pengetahuan
  - context-engineering
sources:
  - title: "Sumers dkk., “Cognitive Architectures for Language Agents”, arXiv:2309.02427 (5 September 2023)"
    url: https://arxiv.org/abs/2309.02427
  - title: "Park dkk., “Generative Agents: Interactive Simulacra of Human Behavior”, arXiv:2304.03442 (7 April 2023)"
    url: https://arxiv.org/abs/2304.03442
level: menengah
status: ditinjau
updated: 2026-10-13
---

## Jenis-jenis memori agent

Kerangka CoALA (Sumers dkk., 2023) meminjam istilah dari ilmu kognitif dan arsitektur kognitif klasik seperti Soar:

- **Memori kerja (working memory):** keadaan saat ini, berisi masukan terbaru, tujuan, dan hasil penalaran antara. Pada agent LLM, isinya kurang lebih sama dengan isi [context window](/ensiklopedia/context-window/).
- **Memori episodik:** rangkaian perilaku agent di masa lalu, yaitu apa yang dikerjakan dan apa yang terjadi.
- **Memori semantik:** fakta tentang dunia, misalnya basis pengetahuan atau [graf pengetahuan](/ensiklopedia/graf-pengetahuan/).
- **Memori prosedural:** aturan atau kode yang menentukan cara agent bertindak.

## Contoh: generative agents

Park dkk. (April 2023) membangun 25 agent yang hidup di kota kecil virtual mirip The Sims. Inti arsitekturnya adalah memory stream: daftar lengkap pengalaman agent dalam bahasa alami, masing-masing dengan stempel waktu pembuatan dan waktu terakhir diakses. Saat agent perlu bertindak, pengambil memori menggabungkan tiga skor: kebaruan (recency), kepentingan (importance), dan relevansi (relevance). Secara berkala, agent juga melakukan refleksi, yaitu merangkum ingatan menjadi kesimpulan tingkat lebih tinggi yang kemudian dipakai untuk merencanakan hari berikutnya.

## Dalam praktik

Agent kerja sehari-hari biasanya menyimpan memori episodik sebagai log, catatan sesi, atau berkas ringkasan yang dibaca saat sesi baru dimulai. Tantangannya ada pada memilih ingatan mana yang dimasukkan ke konteks, yang menjadi salah satu pokok bahasan [context engineering](/ensiklopedia/context-engineering/).
