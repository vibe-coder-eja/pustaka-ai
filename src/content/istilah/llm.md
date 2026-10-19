---
title: LLM
aliases:
  - Model Bahasa Besar
  - Large Language Model
summary: "Large language model (model bahasa besar): model AI dengan miliaran parameter yang dilatih pada teks dalam jumlah sangat besar untuk memprediksi kata berikutnya, sehingga mampu memahami dan menghasilkan bahasa."
category: dasar-ai
related:
  - model
  - prompt
  - context-window
  - inference
  - hallucination
  - rag
  - reasoning
  - multimodal-ai
  - pra-pelatihan
  - parameter-model
  - tokenisasi
  - penyetelan-halus
  - rlhf
  - temperatur-sampling
  - prompt-sistem
sources:
  - title: "Vaswani dkk., “Attention Is All You Need”, arXiv:1706.03762 (12 Juni 2017)"
    url: https://arxiv.org/abs/1706.03762
  - title: "Brown dkk., “Language Models are Few-Shot Learners”, arXiv:2005.14165 (28 Mei 2020)"
    url: https://arxiv.org/abs/2005.14165
  - title: "Ouyang dkk., “Training language models to follow instructions with human feedback”, arXiv:2203.02155 (4 Maret 2022)"
    url: https://arxiv.org/abs/2203.02155
level: dasar
status: ditinjau
updated: 2026-10-19
---

## Arti singkat

LLM (*large language model*, model bahasa besar) adalah [model](/ensiklopedia/model/) AI yang dilatih pada kumpulan teks sangat besar sehingga mampu membaca dan menulis bahasa manusia. LLM menjadi mesin di balik asisten percakapan, alat penulisan, penerjemah, dan banyak [agent](/ensiklopedia/agent/). Kata “besar” merujuk pada jumlah [parameter](/ensiklopedia/parameter-model/) yang mencapai miliaran dan pada volume data pelatihannya.

## Cara kerjanya

Teks dipecah menjadi potongan kecil yang disebut [token](/ensiklopedia/token/). Pada tahap [pra-pelatihan](/ensiklopedia/pra-pelatihan/), model berulang kali menebak token berikutnya dari teks yang ada dan menyesuaikan parameternya setiap kali tebakannya meleset. Tugas sederhana yang diulang dalam skala sangat besar ini memaksa model menyerap tata bahasa, fakta, dan pola penalaran yang terkandung dalam data.

Hampir semua LLM modern memakai arsitektur **transformer** yang diperkenalkan Vaswani dkk. pada 2017. Mekanisme *attention* di dalamnya membuat model dapat menimbang hubungan antarkata di seluruh teks sekaligus. Brown dkk. (2020) menunjukkan bahwa model sebesar GPT-3, dengan 175 miliar parameter, sudah dapat mengerjakan tugas baru hanya dari beberapa contoh di dalam [prompt](/ensiklopedia/prompt/), tanpa pelatihan ulang.

## Dari model mentah ke asisten

Model hasil pra-pelatihan hanya pandai melanjutkan teks; ia belum tentu menuruti perintah. Ouyang dkk. (2022) menunjukkan bahwa [penyetelan halus](/ensiklopedia/penyetelan-halus/) dengan contoh dari manusia dan umpan balik penilai ([RLHF](/ensiklopedia/rlhf/)) membuat model jauh lebih mampu mengikuti instruksi. Dalam penilaian mereka, keluaran model 1,3 miliar parameter hasil cara ini lebih disukai penilai daripada GPT-3 175 miliar parameter, meski ukurannya sekitar 100 kali lebih kecil. Pendekatan sejenis dipakai pada asisten AI masa kini.

## Batasan

- LLM bisa menulis jawaban yang terdengar meyakinkan tetapi salah ([halusinasi](/ensiklopedia/hallucination/)).
- Pengetahuannya berhenti pada data pelatihan; informasi baru perlu diberikan lewat prompt atau [RAG](/ensiklopedia/rag/).
- Jumlah teks yang dapat diproses sekaligus dibatasi oleh [context window](/ensiklopedia/context-window/).

## Hubungan dengan istilah lain

- LLM adalah salah satu jenis [AI](/ensiklopedia/ai/); model yang juga menerima gambar atau suara disebut [AI multimodal](/ensiklopedia/multimodal-ai/).
- Proses menjalankan model untuk menghasilkan jawaban disebut [inferensi](/ensiklopedia/inference/).
