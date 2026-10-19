---
title: Planning
aliases:
  - Perencanaan
  - Perencanaan agent
summary: "Perencanaan: kemampuan agent AI memecah tujuan menjadi langkah-langkah, memilih urutan tindakan, dan merevisi rencana berdasarkan hasil yang diamati."
category: ai-agentik
related:
  - agent
  - goal
  - reasoning
  - chain-of-thought
  - react-pola-agent
  - agent-loop
  - memory
  - orkestrasi-agent
sources:
  - title: "Huang dkk., “Understanding the planning of LLM agents: A survey”, arXiv:2402.02716 (5 Februari 2024)"
    url: https://arxiv.org/abs/2402.02716
  - title: "Wang dkk., “Plan-and-Solve Prompting: Improving Zero-Shot Chain-of-Thought Reasoning by Large Language Models”, arXiv:2305.04091 (6 Mei 2023)"
    url: https://arxiv.org/abs/2305.04091
  - title: "Yao dkk., “ReAct: Synergizing Reasoning and Acting in Language Models”, arXiv:2210.03629 (6 Oktober 2022)"
    url: https://arxiv.org/abs/2210.03629
level: menengah
status: ditinjau
updated: 2026-10-19
---

## Arti singkat

**Perencanaan** adalah langkah ketika [agent](/ensiklopedia/agent/) memutuskan **apa yang akan dikerjakan dan dalam urutan apa** untuk mencapai [tujuan](/ensiklopedia/goal/). Misalnya, untuk “perbaiki bug login”, rencananya bisa berupa: baca laporan bug, cari berkas terkait, buat tes yang mereproduksi bug, ubah kode, lalu jalankan tes.

## Dua gaya utama

- **Rencanakan dulu, lalu jalankan.** Model menyusun daftar langkah di awal, lalu mengerjakannya satu per satu. Wang dkk. (2023) merumuskan versi prompt dari gaya ini, *Plan-and-Solve*: pertama susun rencana yang membagi tugas menjadi subtugas, lalu kerjakan sesuai rencana. Pada GPT-3, teknik ini mengungguli *zero-shot chain of thought* di sepuluh dataset penalaran.
- **Berselang-seling.** Model merencanakan sedikit, bertindak, mengamati hasil, lalu memperbarui rencana. Ini pola [ReAct](/ensiklopedia/react-pola-agent/) (Yao dkk., 2022), di mana jejak penalaran membantu model menyusun, melacak, dan memperbarui rencana tindakan sekaligus menangani hal tak terduga.

Banyak agent memadukan keduanya: rencana kasar di awal, lalu direvisi di tengah jalan.

## Peta pendekatan

Survei Huang dkk. (2024) mengelompokkan upaya meningkatkan perencanaan agent berbasis LLM ke dalam lima arah:

1. **Dekomposisi tugas:** memecah tujuan menjadi subtugas.
2. **Pemilihan rencana:** membuat beberapa kandidat rencana lalu memilih yang terbaik.
3. **Modul luar:** memakai perencana klasik atau alat khusus untuk menyusun rencana.
4. **Refleksi:** menilai hasil dan kesalahan sendiri, lalu memperbaiki rencana.
5. **[Memori](/ensiklopedia/memory/):** memanfaatkan pengalaman atau pengetahuan tersimpan saat merencanakan.

## Batasan

Rencana yang terdengar masuk akal belum tentu dapat dijalankan. Model bisa melewatkan langkah penting, mengandaikan alat yang tidak ada, atau terus berpegang pada rencana yang sudah terbukti gagal. Karena itu, agent yang baik memeriksa hasil setiap langkah terhadap kenyataan, misalnya keluaran tes atau isi berkas, alih-alih hanya percaya pada rencananya sendiri.

## Hubungan dengan istilah lain

Perencanaan bertumpu pada [penalaran](/ensiklopedia/reasoning/) dan dijalankan di dalam [agent loop](/ensiklopedia/agent-loop/). Pada sistem banyak agent, rencana dibagikan ke beberapa pelaksana lewat [orkestrasi](/ensiklopedia/orkestrasi-agent/).
