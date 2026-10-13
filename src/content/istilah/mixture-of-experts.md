---
title: "Mixture of Experts"
aliases:
  - "MoE"
  - "Campuran pakar"
summary: "Arsitektur jaringan saraf dengan banyak sub-jaringan “pakar” dan jaringan gerbang yang memilih sebagian pakar untuk tiap masukan, sehingga kapasitas membesar tanpa kenaikan komputasi sebanding."
category: dasar-ai
related:
  - model
  - llm
  - inference
  - hukum-penskalaan
sources:
  - title: "Shazeer dkk., “Outrageously Large Neural Networks: The Sparsely-Gated Mixture-of-Experts Layer”, arXiv:1701.06538 (23 Januari 2017)"
    url: https://arxiv.org/abs/1701.06538
level: lanjut
status: ditinjau
updated: 2026-10-13
---

## Gagasan

Daya tampung jaringan saraf dibatasi jumlah parameternya. Komputasi bersyarat, yaitu hanya sebagian jaringan aktif untuk setiap contoh, memungkinkan kapasitas jauh lebih besar tanpa komputasi yang naik sebanding. Shazeer dkk. menghadirkan lapisan Sparsely-Gated MoE: hingga ribuan sub-jaringan feed-forward, dengan jaringan gerbang terlatih memilih kombinasi jarang pakar untuk tiap contoh.

## Hasil pada makalah

Peningkatan kapasitas lebih dari 1000 kali dengan kehilangan efisiensi kecil pada klaster GPU, dan model hingga 137 miliar parameter pada pemodelan bahasa dan terjemahan mesin yang unggul dengan biaya komputasi lebih rendah. Makalah ini memakai LSTM, bukan Transformer.
