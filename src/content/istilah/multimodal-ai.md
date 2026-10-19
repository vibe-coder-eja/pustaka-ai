---
title: Multimodal AI
aliases:
  - AI Multimodal
  - Model multimodal
summary: "AI yang dapat menerima atau menghasilkan lebih dari satu jenis data, seperti teks, gambar, audio, dan video, dalam satu model."
category: dasar-ai
related:
  - llm
  - model
  - representasi-vektor
  - computer-use
  - prompt-injection
  - transformer
  - model-difusi
sources:
  - title: "Radford dkk., “Learning Transferable Visual Models From Natural Language Supervision” (CLIP), arXiv:2103.00020 (26 Februari 2021)"
    url: https://arxiv.org/abs/2103.00020
  - title: "OpenAI, “GPT-4 Technical Report”, arXiv:2303.08774 (15 Maret 2023)"
    url: https://arxiv.org/abs/2303.08774
level: dasar
status: ditinjau
updated: 2026-10-19
---

## Arti singkat

**AI multimodal** adalah sistem yang menangani beberapa *modalitas*, atau jenis data, sekaligus: teks, gambar, suara, video, bahkan tangkapan layar. Contohnya: memotret struk belanja lalu meminta AI menjumlahkan totalnya, bertanya tentang grafik di sebuah laporan, atau berbicara langsung dengan asisten suara.

## Bagaimana teks dan gambar dipertemukan

Kuncinya adalah mengubah setiap jenis data ke “bahasa” bersama berupa [representasi vektor](/ensiklopedia/representasi-vektor/). CLIP (Radford dkk., 2021) adalah salah satu tonggaknya. Model ini dilatih pada 400 juta pasangan gambar dan teks dari internet dengan tugas sederhana: menebak keterangan mana yang cocok dengan gambar mana. Hasilnya, model dapat mengenali konsep visual baru hanya dari deskripsi bahasa alami, tanpa data berlabel khusus. Pada ImageNet, ketepatannya menyamai ResNet-50 asli tanpa memakai satu pun dari 1,28 juta contoh pelatihan ResNet-50.

## Dari model bahasa ke model multimodal

Laporan teknis GPT-4 (Maret 2023) menggambarkan GPT-4 sebagai model multimodal berskala besar yang menerima masukan gambar dan teks lalu menghasilkan teks. Sejak itu banyak [LLM](/ensiklopedia/llm/) terdepan menerima gambar, dokumen, dan audio, dan sebagian juga dapat menghasilkan gambar atau suara. Kemampuan membaca layar menjadi dasar agent yang dapat [mengoperasikan komputer](/ensiklopedia/computer-use/).

## Hal yang perlu diperhatikan

- **Halusinasi visual:** model dapat salah membaca angka kecil, teks miring, atau detail grafik, lalu menjawab dengan yakin.
- **Instruksi tersembunyi:** teks di dalam gambar atau dokumen dapat berisi perintah yang dibaca model sebagai instruksi ([prompt injection](/ensiklopedia/prompt-injection/)).
- **Privasi:** foto dan rekaman sering memuat data pribadi yang tidak disadari pengirimnya, seperti wajah, alamat, atau nomor dokumen.

## Hubungan dengan istilah lain

Model multimodal tetap sebuah [model](/ensiklopedia/model/). Bedanya ada pada jenis data yang ditangani, bukan pada cara kerja dasarnya.
