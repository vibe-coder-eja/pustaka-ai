---
title: Reasoning
aliases:
  - Penalaran
  - Model penalaran
  - Reasoning model
summary: "Penalaran: kemampuan AI menghubungkan informasi dan menarik kesimpulan lewat langkah-langkah antara. Model penalaran dilatih untuk ‘berpikir’ panjang sebelum menjawab."
category: dasar-ai
related:
  - chain-of-thought
  - planning
  - inference
  - llm
  - prompt-engineering
  - tolok-ukur
  - agi
sources:
  - title: "Wei dkk., “Chain-of-Thought Prompting Elicits Reasoning in Large Language Models”, arXiv:2201.11903 (28 Januari 2022)"
    url: https://arxiv.org/abs/2201.11903
  - title: "DeepSeek-AI, “DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning”, arXiv:2501.12948 (22 Januari 2025)"
    url: https://arxiv.org/abs/2501.12948
level: menengah
status: ditinjau
updated: 2026-10-19
---

## Arti singkat

**Penalaran** (*reasoning*) adalah kemampuan menggabungkan beberapa informasi untuk sampai pada kesimpulan yang tidak tertulis langsung, misalnya menyelesaikan soal cerita matematika, menelusuri penyebab bug, atau menimbang pilihan. Pada [LLM](/ensiklopedia/llm/), penalaran biasanya tampak sebagai rangkaian langkah antara yang ditulis model sebelum jawaban akhir.

## Dari teknik prompt ke model penalaran

**Tahap pertama: dipancing lewat prompt.** Wei dkk. (2022) menunjukkan bahwa memberi model beberapa contoh berisi langkah penalaran, teknik yang mereka namai [chain of thought](/ensiklopedia/chain-of-thought/), meningkatkan kinerja pada soal aritmetika, akal sehat, dan simbolik. Model 540 miliar parameter dengan delapan contoh saja mencapai akurasi terbaik saat itu pada tolok ukur soal matematika GSM8K.

**Tahap kedua: dilatih langsung.** Sejak 2024, beberapa pengembang merilis *model penalaran* yang dilatih untuk menghasilkan rantai pemikiran panjang secara otomatis sebelum menjawab. Makalah DeepSeek-R1 (Januari 2025) melaporkan bahwa kemampuan ini dapat dipupuk lewat *reinforcement learning* murni, tanpa contoh penalaran tulisan manusia. Selama pelatihan muncul pola seperti refleksi diri, memeriksa ulang, dan mengganti strategi. Hasilnya paling kuat pada tugas yang jawabannya dapat diperiksa, seperti matematika, kompetisi pemrograman, dan sains.

## Konsekuensi praktis

- **Lebih akurat untuk soal bertahap,** tetapi lebih lambat dan lebih mahal, karena model menghasilkan banyak token “berpikir” selama [inferensi](/ensiklopedia/inference/).
- **Tidak selalu perlu:** untuk tugas sederhana seperti merangkum atau menerjemahkan, model biasa sering sudah cukup.
- **Rantai pemikiran tidak selalu jujur:** langkah yang ditulis model belum tentu mencerminkan proses yang benar-benar terjadi di dalamnya. Lihat entri [chain of thought](/ensiklopedia/chain-of-thought/).

## Perdebatan

Para peneliti masih berbeda pendapat tentang sejauh mana kemampuan ini setara dengan penalaran manusia, dan seberapa baik ia bertahan pada soal yang benar-benar baru. Skor [tolok ukur](/ensiklopedia/tolok-ukur/) yang tinggi tidak otomatis berarti model bernalar dengan andal di dunia nyata. Kemampuan bernalar juga menjadi salah satu ukuran penting dalam diskusi tentang [AGI](/ensiklopedia/agi/).

## Hubungan dengan istilah lain

[Perencanaan](/ensiklopedia/planning/) pada agent memakai penalaran untuk menyusun urutan tindakan.
