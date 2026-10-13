---
title: "Hukum penskalaan"
aliases:
  - "Scaling laws"
  - "Neural scaling laws"
  - "Chinchilla"
summary: "Keteraturan empiris bahwa galat model bahasa turun mengikuti pola pangkat terhadap ukuran model, jumlah data, dan komputasi pelatihan, sehingga hasil dapat diperkirakan dan anggaran dialokasikan."
category: menuju-si
related:
  - llm
  - model
  - agi
  - inference
sources:
  - title: "Kaplan dkk., “Scaling Laws for Neural Language Models”, arXiv:2001.08361 (23 Januari 2020)"
    url: https://arxiv.org/abs/2001.08361
  - title: "Hoffmann dkk., “Training Compute-Optimal Large Language Models”, arXiv:2203.15556 (29 Maret 2022)"
    url: https://arxiv.org/abs/2203.15556
level: lanjut
status: ditinjau
updated: 2026-10-13
---

## Temuan Kaplan dkk. (2020)

Makalah “Scaling Laws for Neural Language Models” melaporkan bahwa *cross-entropy loss* model bahasa mengikuti hubungan pangkat dengan ukuran model, ukuran dataset, dan komputasi pelatihan, berlaku pada lebih dari tujuh orde besaran. Pilihan arsitektur seperti lebar dan kedalaman jaringan berpengaruh relatif kecil dalam rentang yang luas. Model lebih besar lebih hemat sampel, sehingga pelatihan paling hemat komputasi memakai model sangat besar pada data secukupnya dan berhenti sebelum konvergen.

## Koreksi Hoffmann dkk. (2022)

Untuk anggaran komputasi tetap, Hoffmann dkk. menemukan ukuran model dan jumlah token pelatihan semestinya tumbuh seimbang. Model Chinchilla 70 miliar parameter, yang dilatih pada data sekitar empat kali lebih banyak, mengungguli Gopher 280 miliar parameter.

## Mengapa dibahas dalam konteks SI

Keteraturan ini menjadi dasar keyakinan bahwa menambah data dan komputasi akan terus meningkatkan kemampuan, yang dipakai sebagian pihak untuk memperkirakan jalan menuju [AGI](/ensiklopedia/agi/). Pihak lain menekankan bahwa hukum ini menggambarkan **galat prediksi token**, bukan kemampuan tertentu di dunia nyata, dan tidak menjamin kelanjutannya. Perlu dicatat bahwa kedua makalah itu hanya menguji model bahasa pada rentang yang diteliti.
