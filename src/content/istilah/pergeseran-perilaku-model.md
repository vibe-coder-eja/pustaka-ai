---
title: "Pergeseran Perilaku Model"
aliases:
  - "Drift"
  - "Model drift"
  - "Data drift"
  - "Concept drift"
summary: "Perubahan mutu atau perilaku sistem AI dari waktu ke waktu, baik karena modelnya diperbarui maupun karena data dan dunia yang dihadapinya berubah, sehingga hasil yang dulu baik bisa memburuk tanpa disadari."
category: dasar-ai
related:
  - evals
  - dataset-acuan
  - regression
  - monitoring
  - observability
  - rilis-bertahap-model
sources:
  - title: "Chen, Zaharia & Zou, “How is ChatGPT's behavior changing over time?”, arXiv:2307.09009 (18 Juli 2023)"
    url: https://arxiv.org/abs/2307.09009
  - title: "Sculley dkk., “Hidden Technical Debt in Machine Learning Systems”, NeurIPS 2015"
    url: https://papers.nips.cc/paper_files/paper/2015/hash/86df7dcfd896fcaf2674f757a2463eba-Abstract.html
level: menengah
status: ditinjau
updated: 2026-10-13
---

## Dua sumber pergeseran

- **Dunia berubah.** Data yang dihadapi model berbeda dari data pelatihannya, misalnya istilah baru, produk baru, atau perilaku pengguna yang bergeser. Sculley dkk. (NeurIPS 2015) memasukkan "perubahan di dunia luar" ke dalam faktor risiko khas sistem pembelajaran mesin yang menimbulkan biaya perawatan besar.
- **Model berubah.** Pada layanan LLM lewat API, model di balik nama yang sama dapat diperbarui penyedia. Aplikasi yang tidak berubah sama sekali pun bisa merasakan perbedaan perilaku.

## Bukti pada LLM

Chen, Zaharia & Zou (Juli 2023) membandingkan versi Maret dan Juni 2023 dari GPT-3.5 dan GPT-4 pada tujuh jenis tugas. Kinerja dan perilaku kedua layanan bisa berubah besar dalam tiga bulan. Contohnya, akurasi GPT-4 dalam membedakan bilangan prima dan komposit turun dari 84% (Maret) ke 51% (Juni). Penulis mengaitkan sebagiannya dengan menurunnya kepatuhan GPT-4 pada prompt [chain-of-thought](/ensiklopedia/chain-of-thought/). Sebaliknya, GPT-3.5 justru jauh lebih baik pada tugas yang sama di bulan Juni. GPT-4 versi Juni juga lebih jarang mau menjawab pertanyaan sensitif.

## Cara menghadapinya

Pergeseran tidak bisa dicegah sepenuhnya, tetapi bisa dideteksi. Caranya: jalankan [dataset acuan](/ensiklopedia/dataset-acuan/) secara berkala, kunci versi model bila penyedia mengizinkan, [pantau](/ensiklopedia/monitoring/) metrik mutu di produksi, dan terapkan [rilis bertahap](/ensiklopedia/rilis-bertahap-model/) setiap kali berganti model.
