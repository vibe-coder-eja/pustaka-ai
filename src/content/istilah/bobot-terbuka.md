---
title: "Bobot Terbuka"
aliases:
  - "Open weights"
  - "Open-weight model"
  - "Model berbobot terbuka"
summary: "Model yang parameter hasil pelatihannya dirilis untuk diunduh dan dijalankan sendiri; berbeda dari AI sumber terbuka penuh karena kode pelatihan dan informasi datanya belum tentu ikut dibuka."
category: dasar-ai
related:
  - parameter-model
  - open-source
  - model-terdepan
  - penyetelan-halus
  - lora
sources:
  - title: "Open Source Initiative, “Open Weights: not quite what you’ve been told”"
    url: https://opensource.org/ai/open-weights
  - title: "Open Source Initiative, “The Open Source AI Definition 1.0”"
    url: https://opensource.org/ai/open-source-ai-definition
  - title: "NTIA, “Dual-Use Foundation Models with Widely Available Model Weights” (30 Juli 2024)"
    url: https://www.ntia.gov/programs-and-initiatives/artificial-intelligence/open-model-weights-report
  - title: "Touvron dkk., “Llama 2: Open Foundation and Fine-Tuned Chat Models”, arXiv:2307.09288 (18 Juli 2023)"
    url: https://arxiv.org/abs/2307.09288
level: menengah
status: ditinjau
updated: 2026-10-13
---

## Apa yang dibuka

Model berbobot terbuka merilis [parameter](/ensiklopedia/parameter-model/) akhirnya, yaitu bobot dan bias jaringan saraf yang sudah dilatih. Dengan berkas itu, orang lain dapat menjalankan model di perangkatnya sendiri, [menyetelnya](/ensiklopedia/penyetelan-halus/), atau memasangnya dalam layanan. Contohnya Llama 2 (Juli 2023), kumpulan model pralatih dan model obrolan berukuran 7 hingga 70 miliar parameter.

## Bukan berarti sumber terbuka penuh

Open Source Initiative (OSI) menegaskan bahwa bobot terbuka berbeda dari AI sumber terbuka. Yang biasanya tidak ikut dirilis adalah kode pelatihan, dataset pelatihan, dan keterangan rinci tentang komposisi data. Tanpa itu, proses pengembangan model sulit direproduksi atau diaudit. Open Source AI Definition 1.0 mensyaratkan tiga unsur sekaligus: informasi data yang cukup rinci, kode lengkap untuk melatih dan menjalankan sistem, serta parameter model, semuanya dengan ketentuan yang disetujui OSI.

## Perdebatan kebijakan

Laporan NTIA (Amerika Serikat, 30 Juli 2024) menilai risiko model berbobot terbuka sebagai risiko marginal, yakni tambahan risiko dibanding model tertutup dan teknologi lain yang sudah ada. Kesimpulannya: bukti saat itu belum cukup untuk memastikan bahwa pembatasan diperlukan, maupun bahwa pembatasan tidak akan pernah diperlukan. NTIA menyarankan pemerintah memantau risiko secara aktif dan bersiap bertindak bila bukti berubah.
