---
title: "Evaluasi Lintasan"
aliases:
  - "Trajectory evaluation"
  - "Transcript grading"
  - "Trace evaluation"
  - "pass^k"
summary: "Penilaian atas jalan yang ditempuh agent, yaitu langkah, pemanggilan alat, dan penalarannya, di samping penilaian atas hasil akhir atau keadaan lingkungan setelah agent selesai."
category: ai-agentik
related:
  - evals
  - dataset-acuan
  - observability
  - llm-as-a-judge
  - tool-calling
  - harness-engineering
sources:
  - title: "Anthropic, “Demystifying evals for AI agents” (9 Januari 2026)"
    url: https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents
  - title: "Yao dkk., “τ-bench: A Benchmark for Tool-Agent-User Interaction in Real-World Domains”, arXiv:2406.12045 (17 Juni 2024)"
    url: https://arxiv.org/abs/2406.12045
level: menengah
status: ditinjau
updated: 2026-10-13
---

## Transkrip dan hasil akhir

Anthropic (Januari 2026) membedakan dua hal yang sering tercampur. **Transkrip** (disebut juga trace atau trajectory) adalah catatan lengkap satu percobaan: keluaran, pemanggilan alat, penalaran, dan hasil antara. **Hasil akhir** (outcome) adalah keadaan lingkungan setelah percobaan selesai. Contohnya, agent pemesan tiket bisa saja menulis "Penerbangan Anda sudah dipesan" di akhir transkrip, tetapi hasil akhirnya ditentukan oleh ada tidaknya reservasi di basis data.

## Apa yang dinilai pada lintasan

Penilaian lintasan memeriksa apakah agent memakai alat yang tepat dengan argumen yang benar, apakah ada langkah berbahaya atau boros, dan apakah agent mematuhi aturan selama bekerja. Penilainya bisa berupa pemeriksaan kode, [LLM sebagai juri](/ensiklopedia/llm-as-a-judge/), atau penilaian manusia. Data lintasannya biasanya berasal dari sistem [observability](/ensiklopedia/observability/) yang merekam setiap langkah.

## Keandalan antar-percobaan

Karena keluaran agent bervariasi, satu percobaan tidak cukup. τ-bench (Yao dkk., Juni 2024) menilai agent dalam percakapan dengan pengguna simulasi, lalu membandingkan keadaan basis data di akhir percakapan dengan keadaan tujuan yang sudah dianotasi. Tolok ukur ini memperkenalkan metrik pass^k: peluang semua k percobaan berhasil. Agent pemanggil fungsi terbaik saat itu, seperti GPT-4o, berhasil pada kurang dari 50% tugas, dan pass^8 di ranah ritel di bawah 25%. Anthropic memberi contoh hitungan: agent dengan peluang sukses 75% per percobaan hanya punya peluang sekitar 42% untuk lolos tiga percobaan berturut-turut (0,75³). Bagi agent yang melayani pelanggan, angka konsistensi ini sering lebih penting daripada pass@k.
