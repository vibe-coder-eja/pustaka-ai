---
title: Prompt Engineering
aliases:
  - Rekayasa Prompt
summary: "Praktik merancang, menguji, dan memperbaiki prompt agar model AI menghasilkan jawaban yang tepat, konsisten, dan berguna untuk tugas tertentu."
category: dasar-ai
related:
  - prompt
  - prompt-sistem
  - few-shot-prompting
  - chain-of-thought
  - rantai-prompt
  - context-engineering
  - keluarga-x-engineer
  - evals
sources:
  - title: "Claude Platform Docs, “Prompt engineering overview”"
    url: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview
  - title: "Wei dkk., “Chain-of-Thought Prompting Elicits Reasoning in Large Language Models”, arXiv:2201.11903 (28 Januari 2022)"
    url: https://arxiv.org/abs/2201.11903
  - title: "Kojima dkk., “Large Language Models are Zero-Shot Reasoners”, arXiv:2205.11916 (24 Mei 2022)"
    url: https://arxiv.org/abs/2205.11916
level: dasar
status: ditinjau
updated: 2026-10-19
---

## Arti singkat

**Prompt engineering** (rekayasa prompt) adalah praktik menyusun [prompt](/ensiklopedia/prompt/) secara sistematis, lalu mengujinya dan memperbaikinya sampai model AI menghasilkan keluaran yang diharapkan. Kata *engineering* menekankan bahwa ini kerja berulang yang diukur, bukan sekadar menebak kalimat ajaib.

## Mulai dari tujuan, bukan dari kalimat

Panduan prompt engineering Anthropic mengandaikan tiga hal sudah tersedia sebelum prompt diperbaiki: definisi yang jelas tentang kriteria keberhasilan, cara menguji prompt terhadap kriteria itu, dan draf prompt pertama. Tanpa kriteria dan pengujian, sulit mengetahui apakah perubahan prompt benar-benar membuat hasil lebih baik. Pengujian semacam ini kini lazim disebut [evals](/ensiklopedia/evals/).

## Teknik yang sering dipakai

- **Instruksi yang jelas dan langsung:** sebutkan tugas, audiens, dan format keluaran.
- **Contoh ([few-shot](/ensiklopedia/few-shot-prompting/)):** tunjukkan beberapa pasangan masukan dan keluaran yang benar.
- **Peran:** tetapkan peran atau sudut pandang lewat [prompt sistem](/ensiklopedia/prompt-sistem/).
- **Berpikir bertahap ([chain of thought](/ensiklopedia/chain-of-thought/)):** minta model menguraikan langkahnya sebelum menjawab. Wei dkk. (2022) menunjukkan bahwa contoh berisi langkah penalaran meningkatkan kinerja pada soal aritmetika dan logika. Kojima dkk. (2022) menemukan bahwa menambahkan kalimat “Let's think step by step” saja sudah membantu.
- **Memecah tugas ([rantai prompt](/ensiklopedia/rantai-prompt/)):** tugas besar dibagi menjadi beberapa prompt berurutan yang lebih kecil.
- **Struktur:** pisahkan instruksi, data, dan contoh dengan penanda yang jelas, misalnya judul bagian atau tag.

## Perkembangannya

Sebagian trik lama menjadi kurang penting karena model makin pandai mengikuti instruksi. Model penalaran, misalnya, sudah berpikir bertahap tanpa perlu diminta. Fokus praktik pun bergeser dari memilih kata ke mengatur seluruh informasi yang masuk ke model. Cakupan yang lebih luas ini disebut [context engineering](/ensiklopedia/context-engineering/). Urutan disiplin ini dibahas di entri [Keluarga X Engineer](/ensiklopedia/keluarga-x-engineer/).
