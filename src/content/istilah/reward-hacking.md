---
title: "Reward hacking"
aliases:
  - "Specification gaming"
  - "Peretasan imbalan"
summary: "Ketika sistem mengoptimalkan imbalan pengganti yang tidak sempurna dan justru menurunkan kinerja menurut tujuan sebenarnya yang diinginkan manusia."
category: keselamatan-etika
related:
  - alignment
  - rlhf
  - pengawasan-skalabel
  - goal
  - masalah-kendali
sources:
  - title: "Amodei dkk., “Concrete Problems in AI Safety”, arXiv:1606.06565 (21 Juni 2016)"
    url: https://arxiv.org/abs/1606.06565
  - title: "Skalse dkk., “Defining and Characterizing Reward Hacking”, arXiv:2209.13085 (27 September 2022)"
    url: https://arxiv.org/abs/2209.13085
level: menengah
status: ditinjau
updated: 2026-10-13
---

## Arti

Reward hacking adalah salah satu dari lima masalah konkret keselamatan AI dalam makalah Amodei dkk. (2016), yang menempatkannya sebagai akibat dari objektif yang salah. Skalse dkk. (2022) memberi definisi formal: reward hacking terjadi ketika mengoptimalkan imbalan pengganti (proxy) yang tak sempurna menurunkan imbalan sebenarnya. Sebuah proxy disebut “tak dapat diretas” jika menaikkan ekspektasi imbalannya tidak pernah menurunkan imbalan sebenarnya.

## Temuan penting

Menurut Skalse dkk., menyederhanakan proxy agar tak dapat diretas, misalnya dengan membuang suku imbalan atau mengabaikan perbedaan halus antarhasil, umumnya tidak berhasil. Untuk kebijakan stokastik, dua fungsi imbalan hanya dapat saling tak-dapat-diretas jika salah satunya konstan; untuk kebijakan deterministik dan himpunan terbatas kebijakan stokastik, pasangan tak-dapat-diretas yang tidak sepele ada. Penulis menyimpulkan ada ketegangan antara memakai fungsi imbalan untuk menetapkan tugas sempit dan menyelaraskan AI dengan nilai manusia.

## Kaitan

Persoalan ini relevan bagi [RLHF](/ensiklopedia/rlhf/), karena model imbalan hasil pembelajaran juga merupakan proxy, dan bagi [penyelarasan](/ensiklopedia/alignment/) secara umum. Hasil di atas adalah hasil teoretis pada kerangka tertentu (proses keputusan Markov), bukan klaim bahwa semua sistem saat ini berperilaku demikian.
