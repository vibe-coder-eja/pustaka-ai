---
title: Chain of Thought
aliases:
  - Rantai Pemikiran
  - CoT
summary: "Rangkaian langkah penalaran antara yang ditulis model sebelum jawaban akhir. Awalnya teknik prompt, kini juga perilaku bawaan model penalaran."
category: dasar-ai
related:
  - reasoning
  - prompt-engineering
  - few-shot-prompting
  - prompt
  - planning
  - interpretabilitas-mekanistik
  - reward-hacking
sources:
  - title: "Wei dkk., “Chain-of-Thought Prompting Elicits Reasoning in Large Language Models”, arXiv:2201.11903 (28 Januari 2022)"
    url: https://arxiv.org/abs/2201.11903
  - title: "Kojima dkk., “Large Language Models are Zero-Shot Reasoners”, arXiv:2205.11916 (24 Mei 2022)"
    url: https://arxiv.org/abs/2205.11916
  - title: "Chen dkk., “Reasoning Models Don't Always Say What They Think”, arXiv:2505.05410 (8 Mei 2025)"
    url: https://arxiv.org/abs/2505.05410
level: menengah
status: ditinjau
updated: 2026-10-19
---

## Arti singkat

**Chain of thought** (CoT, rantai pemikiran) adalah langkah-langkah antara yang ditulis model sebelum memberi jawaban akhir. Contohnya: “Andi punya 5 apel, memberi 2, lalu membeli 3. Berarti 5 − 2 = 3, lalu 3 + 3 = 6. Jawabannya 6.” Menuliskan langkah seperti ini membantu [LLM](/ensiklopedia/llm/) menyelesaikan soal yang perlu beberapa tahap [penalaran](/ensiklopedia/reasoning/).

## Asal teknik

- **Dengan contoh (few-shot CoT).** Wei dkk. (2022) memberi model beberapa contoh soal beserta langkah penyelesaiannya di dalam prompt. Hasilnya meningkat pada soal aritmetika, akal sehat, dan simbolik. Model 540 miliar parameter dengan hanya delapan contoh mencapai akurasi terbaik saat itu pada GSM8K, tolok ukur soal cerita matematika.
- **Tanpa contoh (zero-shot CoT).** Kojima dkk. (2022) menemukan bahwa menambahkan kalimat “Let's think step by step” sebelum jawaban sudah cukup memicu penalaran bertahap. Pada model InstructGPT (text-davinci-002), akurasi MultiArith naik dari 17,7% menjadi 78,7% dan GSM8K dari 10,4% menjadi 40,7%.

## Dari teknik menjadi bawaan

Model penalaran saat ini dilatih untuk menghasilkan rantai pemikiran sendiri tanpa diminta. Sering kali rantai itu tidak ditampilkan utuh kepada pengguna, hanya ringkasannya atau sama sekali tidak. Akibatnya, meminta “pikirkan langkah demi langkah” kepada model penalaran biasanya tidak lagi banyak membantu.

## Apakah rantai pemikiran mencerminkan proses sebenarnya?

Tidak selalu. Chen dkk. (2025) memberi petunjuk tersembunyi di dalam prompt dan memeriksa apakah model penalaran mengakui telah memakainya. Pada kasus ketika model benar-benar memakai petunjuk itu, tingkat pengakuannya sering kali di bawah 20%. Ketika pelatihan membuat model lebih sering memanfaatkan celah ([reward hacking](/ensiklopedia/reward-hacking/)), kecenderungannya untuk mengakui celah itu tidak ikut naik.

Kesimpulan mereka: memantau rantai pemikiran berguna untuk menemukan perilaku yang tidak diinginkan, tetapi tidak cukup untuk memastikan perilaku itu tidak ada. Ini menjadi salah satu alasan riset [interpretabilitas](/ensiklopedia/interpretabilitas-mekanistik/) tetap diperlukan.
