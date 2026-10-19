---
title: Autonomy
aliases:
  - Otonomi
  - Otonomi AI
  - Tingkat otonomi
summary: "Otonomi: seberapa jauh sistem AI mengambil langkah dan keputusan sendiri tanpa arahan atau persetujuan manusia di setiap tahap. Otonomi adalah pilihan desain, terpisah dari kemampuan model."
category: ai-agentik
related:
  - agent
  - agentic-ai
  - manusia-dalam-putaran
  - goal
  - agi
  - alignment
  - hak-akses-minimum
sources:
  - title: "Morris dkk., “Levels of AGI for Operationalizing Progress on the Path to AGI”, arXiv:2311.02462 (4 November 2023)"
    url: https://arxiv.org/abs/2311.02462
  - title: "Feng, McDonald, Zhang, “Levels of Autonomy for AI Agents”, arXiv:2506.12469 (14 Juni 2025)"
    url: https://arxiv.org/abs/2506.12469
level: menengah
status: ditinjau
updated: 2026-10-19
---

## Arti singkat

**Otonomi** menggambarkan seberapa banyak keputusan yang diserahkan kepada sistem AI. Pada satu ujung, AI hanya menyarankan dan manusia memutuskan semuanya. Pada ujung lain, AI menjalankan tugas dari awal sampai akhir tanpa campur tangan. Kebanyakan sistem nyata berada di antaranya.

## Otonomi berbeda dari kemampuan

Dua kerangka penting sama-sama menegaskan bahwa otonomi perlu dipisahkan dari kemampuan:

- **Morris dkk. (Google DeepMind, 2023)**, dalam makalah *Levels of AGI*, menilai kemampuan AI pada sumbu kinerja dan generalitas, lalu menempatkan otonomi sebagai dimensi tersendiri. Ada enam tingkat, dari 0 “tanpa AI” sampai 5 “AI sebagai agen” yang sepenuhnya otonom. Di antaranya ada AI sebagai alat, konsultan, kolaborator, dan ahli. Tabel lengkapnya ada di [Peta menuju superintelligence](/ensiklopedia/peta-si/#tingkat).
- **Feng, McDonald, dan Zhang (2025)** berpendapat bahwa tingkat otonomi agent adalah **keputusan desain yang disengaja**, terpisah dari kemampuan dan lingkungan operasinya. Mereka mendefinisikan lima tingkat berdasarkan peran pengguna: **operator**, **kolaborator**, **konsultan**, **pemberi persetujuan**, dan **pengamat**. Makin tinggi tingkatnya, makin kecil peran pengguna dalam setiap langkah.

Artinya, model yang sangat mampu tidak harus diberi otonomi tinggi. Sebaliknya, model sederhana yang diberi otonomi penuh bisa berbahaya bila salah.

## Mengatur otonomi dalam praktik

- **Persetujuan bertingkat:** tindakan ringan seperti membaca berkas berjalan otomatis, sedangkan tindakan berisiko seperti menghapus atau membayar perlu persetujuan ([manusia dalam putaran](/ensiklopedia/manusia-dalam-putaran/)).
- **Batas wewenang:** beri akses hanya ke yang dibutuhkan ([hak akses minimum](/ensiklopedia/hak-akses-minimum/)).
- **Batas langkah dan anggaran:** hentikan agent setelah sejumlah langkah atau biaya tertentu.
- **Jejak audit:** catat setiap tindakan agar bisa ditinjau.

Feng dkk. juga mengusulkan gagasan **sertifikat otonomi** untuk mengatur perilaku agent, baik pada sistem dengan satu agent maupun banyak agent.

## Mengapa penting untuk keselamatan

Otonomi tinggi berarti makin sedikit kesempatan manusia menangkap kesalahan sebelum berdampak. Karena itu, otonomi menjadi topik pusat dalam diskusi [alignment](/ensiklopedia/alignment/) dan dalam kerangka seperti *Levels of AGI*, yang membahas risiko berbeda pada setiap tingkat.
