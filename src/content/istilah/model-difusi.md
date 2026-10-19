---
title: "Model difusi"
aliases:
  - "Diffusion model"
  - "Latent diffusion"
summary: "Jenis model generatif yang belajar menghasilkan gambar, audio, atau video dengan membalik proses penambahan derau: dimulai dari derau acak, lalu dibersihkan sedikit demi sedikit hingga menjadi konten."
category: dasar-ai
related:
  - pembelajaran-mendalam
  - jaringan-saraf
  - multimodal-ai
  - model
  - representasi-vektor
  - inference
  - transformer
sources:
  - title: "Sohl-Dickstein dkk., “Deep Unsupervised Learning using Nonequilibrium Thermodynamics”, arXiv:1503.03585 (12 Maret 2015)"
    url: https://arxiv.org/abs/1503.03585
  - title: "Ho, Jain, Abbeel, “Denoising Diffusion Probabilistic Models”, arXiv:2006.11239 (19 Juni 2020)"
    url: https://arxiv.org/abs/2006.11239
  - title: "Rombach dkk., “High-Resolution Image Synthesis with Latent Diffusion Models”, arXiv:2112.10752 (20 Desember 2021)"
    url: https://arxiv.org/abs/2112.10752
level: menengah
status: ditinjau
updated: 2026-10-19
---

## Arti singkat

**Model difusi** adalah [model](/ensiklopedia/model/) generatif yang membuat konten baru, terutama gambar, dengan cara yang mirip menjernihkan foto buram secara bertahap. Banyak alat “teks ke gambar” dan sebagian alat pembuat video bekerja dengan prinsip ini.

## Cara kerjanya

Gagasan dasarnya dirumuskan Sohl-Dickstein dkk. (2015), terinspirasi fisika statistik non-kesetimbangan. Ada dua proses:

1. **Proses maju (merusak):** struktur pada data dihancurkan perlahan, misalnya dengan menambahkan derau acak sedikit demi sedikit ke sebuah gambar sampai yang tersisa hanya bintik-bintik acak.
2. **Proses balik (memulihkan):** sebuah [jaringan saraf](/ensiklopedia/jaringan-saraf/) dilatih untuk memulihkan struktur itu, langkah demi langkah.

Setelah terlatih, model dapat mulai dari derau murni dan “membersihkannya” berulang kali hingga muncul gambar baru yang belum pernah ada. Bila diberi petunjuk berupa teks, proses pembersihan itu diarahkan agar hasilnya sesuai deskripsi.

## Tonggak perkembangan

- **2020:** Ho, Jain, dan Abbeel menunjukkan bahwa model difusi dapat menghasilkan gambar berkualitas tinggi. Pada data CIFAR-10 mereka mencapai skor FID terbaik saat itu, dan kualitas sampelnya pada LSUN 256×256 setara ProgressiveGAN.
- **2021:** Rombach dkk. mencatat bahwa model difusi yang bekerja langsung pada piksel bisa menghabiskan ratusan hari GPU untuk pelatihan, dan inferensinya mahal. Solusi mereka, *latent diffusion*, menjalankan difusi di ruang [representasi](/ensiklopedia/representasi-vektor/) ringkas hasil sebuah *autoencoder*, sehingga kebutuhan komputasi turun drastis. Mereka juga menambahkan lapisan *cross-attention* agar model bisa dikendalikan dengan teks. Pendekatan ini menjadi dasar Stable Diffusion.

## Kelebihan dan batasan

- **Kelebihan:** hasilnya detail dan beragam, dan prosesnya dapat diarahkan dengan teks, gambar contoh, atau sketsa.
- **Batasan:** pembuatannya butuh banyak langkah [inferensi](/ensiklopedia/inference/), sehingga lebih lambat dari model sekali jalan. Model juga masih sering keliru pada detail seperti teks di dalam gambar atau jumlah jari.
- **Isu sosial:** persoalan hak cipta atas data latih dan risiko gambar palsu yang meyakinkan (*deepfake*) terus diperdebatkan.

## Hubungan dengan istilah lain

Model difusi adalah salah satu jenis model [pembelajaran mendalam](/ensiklopedia/pembelajaran-mendalam/). Banyak model difusi modern memakai komponen [transformer](/ensiklopedia/transformer/) untuk memahami petunjuk teks, dan dipakai dalam sistem [AI multimodal](/ensiklopedia/multimodal-ai/).
