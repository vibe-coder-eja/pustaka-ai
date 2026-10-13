---
title: "Prosesor Grafis"
aliases:
  - "GPU"
  - "Graphics processing unit"
  - "Akselerator AI"
  - "TPU"
summary: "Chip yang mengerjakan banyak operasi hitung sederhana secara paralel; awalnya dibuat untuk grafis, kini menjadi perangkat utama untuk melatih dan menjalankan model AI."
category: dasar-ai
related:
  - server-inferensi
  - kuantisasi
  - hukum-penskalaan
  - parameter-model
  - inference
  - cloud
sources:
  - title: "Krizhevsky, Sutskever & Hinton, “ImageNet Classification with Deep Convolutional Neural Networks”, NeurIPS 2012"
    url: https://papers.nips.cc/paper_files/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html
  - title: "Jouppi dkk., “In-Datacenter Performance Analysis of a Tensor Processing Unit”, arXiv:1704.04760 (16 April 2017)"
    url: https://arxiv.org/abs/1704.04760
level: dasar
status: ditinjau
updated: 2026-10-13
---

## Mengapa GPU cocok untuk AI

Jaringan saraf didominasi perkalian matriks: jutaan operasi kali-dan-tambah yang bisa dikerjakan bersamaan. CPU dirancang untuk menjalankan sedikit tugas rumit dengan cepat. GPU dirancang untuk menjalankan ribuan tugas sederhana secara paralel, pola yang awalnya dibutuhkan untuk menggambar piksel di layar.

## Titik balik 2012

Krizhevsky, Sutskever & Hinton (NeurIPS 2012) melatih jaringan konvolusi dengan 60 juta parameter untuk mengklasifikasikan 1,3 juta gambar ImageNet ke dalam 1.000 kelas. Galat top-5 sebesar 18,9% pada data uji jauh lebih baik daripada hasil terbaik sebelumnya. Untuk mempercepat pelatihan, mereka memakai implementasi konvolusi yang sangat efisien di GPU. Hasil ini, yang dikenal sebagai AlexNet, sering disebut sebagai awal ledakan pembelajaran mendalam berbasis GPU.

## Akselerator khusus

Selain GPU, ada chip yang dirancang khusus untuk AI. Jouppi dkk. (Google, 2017) menganalisis Tensor Processing Unit (TPU), sebuah ASIC yang dipakai di pusat data Google sejak 2015 untuk mempercepat tahap inferensi jaringan saraf. Intinya adalah unit perkalian matriks dengan 65.536 pengali-akumulator 8-bit yang mencapai puncak 92 TeraOps per detik. Model eksekusinya yang deterministik lebih cocok untuk target waktu respons persentil ke-99 daripada optimasi CPU dan GPU yang lebih menguntungkan rata-rata throughput.

## Memori sering jadi batas

Untuk model bahasa besar, kapasitas memori kartu sering lebih menentukan daripada kecepatan hitungnya, karena seluruh [parameter](/ensiklopedia/parameter-model/) dan cache perhatian harus muat. Inilah alasan teknik seperti [kuantisasi](/ensiklopedia/kuantisasi/) dan manajemen memori di [server inferensi](/ensiklopedia/server-inferensi/) sangat penting.
