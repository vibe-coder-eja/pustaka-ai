---
title: "Dataset Acuan"
aliases:
  - "Golden dataset"
  - "Golden set"
  - "Reference solution"
  - "Set uji evals"
summary: "Kumpulan kasus uji milik sendiri, lengkap dengan jawaban atau kriteria lulus yang disepakati, yang dipakai berulang untuk menilai apakah perubahan pada model, prompt, atau agent membuat hasil lebih baik atau lebih buruk."
category: ai-agentik
related:
  - evals
  - tolok-ukur
  - evaluasi-lintasan
  - regression
  - llm-as-a-judge
  - test-suite
sources:
  - title: "Anthropic, “Demystifying evals for AI agents” (9 Januari 2026)"
    url: https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents
level: menengah
status: ditinjau
updated: 2026-10-13
---

## Beda dengan tolok ukur publik

[Tolok ukur](/ensiklopedia/tolok-ukur/) seperti MMLU atau SWE-bench dipakai untuk membandingkan model secara umum. Dataset acuan disusun oleh tim sendiri dari tugas yang benar-benar mereka hadapi. Fungsinya mirip [test suite](/ensiklopedia/test-suite/) dalam rekayasa perangkat lunak: dijalankan setiap kali ada perubahan untuk menangkap [regresi](/ensiklopedia/regression/).

## Menyusun dataset yang baik

Anthropic (Januari 2026) memberi beberapa pedoman:

- **Ambil dari kegagalan nyata.** Bug tracker dan antrean dukungan pelanggan adalah sumber yang baik. Kegagalan yang dilaporkan pengguna diubah menjadi kasus uji, lalu diprioritaskan menurut dampaknya bagi pengguna.
- **Tulis tugas yang tidak ambigu.** Tugas yang baik adalah tugas yang akan dinilai sama, lulus atau gagal, oleh dua pakar ranah secara terpisah. Ambiguitas dalam spesifikasi tugas menjadi derau dalam metrik.
- **Sertakan solusi acuan.** Untuk setiap tugas, buat satu keluaran yang diketahui benar dan lolos semua penilai (grader). Ini membuktikan tugasnya bisa diselesaikan dan penilainya terpasang dengan benar.
- **Seimbangkan kasus.** Uji kasus ketika suatu perilaku seharusnya terjadi dan ketika seharusnya tidak. Evals yang berat sebelah menghasilkan optimasi yang berat sebelah.

Anthropic juga mencatat bahwa tingkat lulus 0% pada banyak percobaan dengan model terdepan paling sering menandakan tugas atau penilainya yang rusak, bukan agent yang tidak mampu.
