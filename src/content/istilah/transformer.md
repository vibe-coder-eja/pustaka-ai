---
title: "Transformer"
aliases:
  - "Arsitektur transformer"
  - "Transformer architecture"
summary: "Arsitektur jaringan saraf berbasis mekanisme attention yang diperkenalkan pada 2017. Ia menjadi fondasi hampir semua model bahasa besar dan banyak model multimodal saat ini."
category: dasar-ai
related:
  - llm
  - jaringan-saraf
  - pembelajaran-mendalam
  - tokenisasi
  - context-window
  - pra-pelatihan
  - hukum-penskalaan
  - multimodal-ai
sources:
  - title: "Vaswani dkk., “Attention Is All You Need”, arXiv:1706.03762 (12 Juni 2017)"
    url: https://arxiv.org/abs/1706.03762
  - title: "Devlin dkk., “BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding”, arXiv:1810.04805 (11 Oktober 2018)"
    url: https://arxiv.org/abs/1810.04805
  - title: "Brown dkk., “Language Models are Few-Shot Learners”, arXiv:2005.14165 (28 Mei 2020)"
    url: https://arxiv.org/abs/2005.14165
level: menengah
status: ditinjau
updated: 2026-10-19
---

## Arti singkat

**Transformer** adalah rancangan [jaringan saraf](/ensiklopedia/jaringan-saraf/) yang diperkenalkan Vaswani dkk. dari Google pada Juni 2017 dalam makalah berjudul *Attention Is All You Need*. Huruf **T** pada GPT (*Generative Pre-trained Transformer*) merujuk pada arsitektur ini. Hampir semua [LLM](/ensiklopedia/llm/) saat ini adalah transformer.

## Gagasan utamanya: attention

Sebelum transformer, model bahasa terbaik umumnya membaca teks kata demi kata secara berurutan, memakai jaringan rekuren atau konvolusional. Transformer meninggalkan pendekatan itu sepenuhnya dan hanya bertumpu pada mekanisme **attention**.

Attention memungkinkan setiap [token](/ensiklopedia/token/) “melihat” semua token lain dalam teks sekaligus, lalu menimbang mana yang paling relevan. Dalam kalimat “Rina menaruh buku di meja karena ia lelah”, attention membantu model menghubungkan “ia” dengan “Rina”, bukan dengan “meja”.

Karena semua token diproses serentak, bukan satu per satu, pelatihan dapat dibagi ke banyak prosesor sekaligus. Vaswani dkk. melaporkan model mereka lebih unggul dalam terjemahan mesin, lebih mudah diparalelkan, dan jauh lebih cepat dilatih. Model terbesarnya dilatih hanya 3,5 hari pada delapan GPU.

## Dari terjemahan ke model bahasa besar

Transformer awalnya dirancang untuk menerjemahkan. Tak lama kemudian arsitektur ini dipakai sebagai dasar [pra-pelatihan](/ensiklopedia/pra-pelatihan/) pada teks dalam jumlah besar:

- **BERT** (Devlin dkk., Google, 2018) memakai bagian *encoder* transformer untuk memahami teks dengan membaca konteks kiri dan kanan sekaligus. BERT mencetak hasil terbaik pada sebelas tugas pemrosesan bahasa saat itu.
- **GPT-3** (Brown dkk., OpenAI, 2020) memakai bagian *decoder* untuk menghasilkan teks. Dengan 175 miliar parameter, GPT-3 menunjukkan bahwa transformer yang sangat besar dapat mengerjakan tugas baru hanya dari beberapa contoh dalam prompt.

Kemudahan transformer untuk diperbesar menjadi salah satu alasan [hukum penskalaan](/ensiklopedia/hukum-penskalaan/) bisa dimanfaatkan. Transformer juga dipakai untuk gambar, audio, dan video, sehingga menjadi dasar banyak model [multimodal](/ensiklopedia/multimodal-ai/).

## Batasan

Biaya attention naik tajam seiring panjang teks, karena setiap token dibandingkan dengan setiap token lain. Inilah salah satu alasan [context window](/ensiklopedia/context-window/) memiliki batas, dan mengapa banyak riset berusaha membuat attention lebih hemat.
