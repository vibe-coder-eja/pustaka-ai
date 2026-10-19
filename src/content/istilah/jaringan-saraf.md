---
title: "Jaringan saraf"
aliases:
  - "Jaringan saraf tiruan"
  - "Neural network"
  - "Artificial neural network"
summary: "Model komputasi yang tersusun dari banyak simpul (neuron tiruan) yang saling terhubung dengan bobot berbeda. Bobot itu disetel selama pelatihan sehingga jaringan belajar mengenali pola."
category: dasar-ai
related:
  - pembelajaran-mesin
  - pembelajaran-mendalam
  - parameter-model
  - transformer
  - model
  - prosesor-grafis
  - interpretabilitas-mekanistik
sources:
  - title: "NobelPrize.org, “The Nobel Prize in Physics 2024: Popular science background”"
    url: https://www.nobelprize.org/prizes/physics/2024/popular-information/
  - title: "Goodfellow, Bengio, Courville, “Deep Learning” (MIT Press, 2016), Bab 1: Introduction"
    url: https://www.deeplearningbook.org/contents/intro.html
level: dasar
status: ditinjau
updated: 2026-10-19
---

## Arti singkat

**Jaringan saraf** (*neural network*) adalah susunan banyak unit hitung sederhana, yang sering disebut simpul atau neuron tiruan. Unit-unit itu saling terhubung, dan setiap sambungan punya kekuatan atau **bobot** yang dapat diperkuat atau diperlemah. Sebuah masukan, misalnya piksel gambar, mengalir melewati jaringan dan diolah lapis demi lapis sampai menjadi keluaran, misalnya label “kucing”. Ketika jaringan dilatih, yang berubah adalah bobot-bobot itu. Di situlah “pengetahuannya” tersimpan.

## Terinspirasi otak, tetapi bukan otak

Gagasan ini berawal dari upaya meniru cara kerja otak. Latar belakang ilmiah Nobel Fisika 2024 mencatat bahwa sejak 1940-an para peneliti mulai merumuskan matematika di balik jaringan neuron dan sinapsis di otak. Mereka juga terinspirasi hipotesis psikolog Donald Hebb bahwa belajar terjadi karena sambungan antarneuron menguat ketika keduanya aktif bersamaan.

Meski begitu, jaringan saraf modern hanyalah model matematis. Ia jauh lebih sederhana dari otak dan bekerja dengan cara yang berbeda.

## Naik turun sejarahnya

Buku *Deep Learning* (Goodfellow, Bengio, Courville, 2016) membagi sejarah jaringan saraf menjadi tiga gelombang:

1. **Sibernetika (1940-an sampai 1960-an):** termasuk *perceptron* Rosenblatt (1958), yang dapat melatih satu neuron.
2. **Koneksionisme (1980-an sampai pertengahan 1990-an):** algoritma *backpropagation* (Rumelhart dkk., 1986) memungkinkan pelatihan jaringan dengan satu atau dua lapisan tersembunyi.
3. **[Pembelajaran mendalam](/ensiklopedia/pembelajaran-mendalam/) (sekitar 2006 sampai sekarang):** jaringan dengan banyak lapisan.

Di antara gelombang itu ada masa lesu. Menurut latar belakang Nobel, pada akhir 1960-an sejumlah hasil teoretis membuat banyak peneliti ragu jaringan saraf akan berguna. Minat itu bangkit lagi pada 1980-an, antara lain lewat karya John Hopfield dan Geoffrey Hinton. Jaringan Hopfield dapat menyimpan pola dan memulihkannya dari data yang rusak. Hinton bersama Terrence Sejnowski mengembangkannya menjadi *mesin Boltzmann*, salah satu contoh awal model generatif. Keduanya menerima Nobel Fisika 2024 atas penemuan yang memungkinkan pembelajaran mesin dengan jaringan saraf tiruan.

## Hubungan dengan istilah lain

- Jaringan saraf adalah salah satu jenis [model](/ensiklopedia/model/) dalam [pembelajaran mesin](/ensiklopedia/pembelajaran-mesin/). Jumlah bobotnya disebut jumlah [parameter](/ensiklopedia/parameter-model/).
- [Transformer](/ensiklopedia/transformer/), arsitektur di balik [LLM](/ensiklopedia/llm/), adalah jenis jaringan saraf.
- Memahami apa yang dihitung di dalam jaringan saraf adalah tujuan riset [interpretabilitas mekanistik](/ensiklopedia/interpretabilitas-mekanistik/).
