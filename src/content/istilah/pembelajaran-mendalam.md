---
title: "Pembelajaran mendalam"
aliases:
  - "Deep learning"
  - "Pembelajaran dalam"
summary: "Bagian dari pembelajaran mesin yang memakai jaringan saraf berlapis banyak. Setiap lapisan membangun representasi yang makin abstrak dari lapisan sebelumnya, sehingga model belajar langsung dari data mentah."
category: dasar-ai
related:
  - jaringan-saraf
  - pembelajaran-mesin
  - transformer
  - model-difusi
  - prosesor-grafis
  - representasi-vektor
  - hukum-penskalaan
  - llm
sources:
  - title: "Goodfellow, Bengio, Courville, “Deep Learning” (MIT Press, 2016), Bab 1: Introduction"
    url: https://www.deeplearningbook.org/contents/intro.html
  - title: "Krizhevsky, Sutskever, Hinton, “ImageNet Classification with Deep Convolutional Neural Networks”, NeurIPS 2012"
    url: https://papers.nips.cc/paper_files/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html
  - title: "NobelPrize.org, “The Nobel Prize in Physics 2024: Popular science background”"
    url: https://www.nobelprize.org/prizes/physics/2024/popular-information/
level: menengah
status: ditinjau
updated: 2026-10-19
---

## Arti singkat

**Pembelajaran mendalam** (*deep learning*) adalah [pembelajaran mesin](/ensiklopedia/pembelajaran-mesin/) yang memakai [jaringan saraf](/ensiklopedia/jaringan-saraf/) dengan **banyak lapisan**. Kata “mendalam” merujuk pada jumlah lapisan itu, bukan pada kedalaman pemahaman. Hampir semua AI yang ramai dibicarakan saat ini, seperti pengenal wajah, penerjemah, [LLM](/ensiklopedia/llm/), dan pembuat gambar, dibangun dengan pembelajaran mendalam.

## Mengapa lapisan banyak membantu

Pada pembelajaran mesin klasik, manusia sering harus menentukan sendiri ciri yang penting, misalnya panjang kalimat atau warna dominan sebuah gambar. Buku *Deep Learning* (Goodfellow, Bengio, Courville, 2016) menjelaskan bahwa pembelajaran mendalam menyelesaikan masalah ini dengan menyusun representasi bertingkat. Konsep yang rumit dibangun dari konsep yang lebih sederhana. Pada gambar, misalnya, lapisan awal mengenali tepi, lapisan berikutnya bentuk, lalu bagian benda, dan akhirnya benda utuh. Karena konsep-konsep itu bertumpuk dalam banyak lapisan, pendekatan ini disebut *deep*.

## Titik balik

- **2006:** menurut latar belakang Nobel Fisika 2024, Geoffrey Hinton bersama Simon Osindero, Yee Whye Teh, dan Ruslan Salakhutdinov mengembangkan cara melatih awal jaringan berlapis-lapis. Buku *Deep Learning* menandai sekitar tahun ini sebagai awal gelombang ketiga riset jaringan saraf.
- **2012:** Krizhevsky, Sutskever, dan Hinton melatih jaringan konvolusional dalam dengan 60 juta parameter pada data ImageNet, memanfaatkan [prosesor grafis](/ensiklopedia/prosesor-grafis/). Hasil klasifikasinya jauh lebih baik dari hasil terbaik sebelumnya. Model ini dikenal sebagai **AlexNet** dan sering dianggap pemicu ledakan pembelajaran mendalam.
- **2017 dan sesudahnya:** arsitektur [transformer](/ensiklopedia/transformer/) menjadi dasar model bahasa besar, dan [model difusi](/ensiklopedia/model-difusi/) menjadi dasar pembuat gambar.

## Bahan bakarnya

Kebangkitan pembelajaran mendalam ditopang tiga hal yang tumbuh bersamaan: **data** yang makin besar, **komputasi** yang makin murah dan kuat (terutama GPU), serta **algoritma** pelatihan yang lebih baik. Hubungan antara besarnya model, data, dan komputasi dengan kinerja model dibahas di entri [hukum penskalaan](/ensiklopedia/hukum-penskalaan/).

## Batasan

Model mendalam butuh data dan energi dalam jumlah besar, dan keputusan di dalamnya sulit ditelusuri. Model juga bisa gagal secara tak terduga pada data yang berbeda dari data latihnya.
