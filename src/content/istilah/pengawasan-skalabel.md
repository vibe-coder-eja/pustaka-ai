---
title: "Pengawasan skalabel"
aliases:
  - "Scalable oversight"
  - "Scalable supervision"
summary: "Tantangan mengawasi sistem AI yang mungkin melampaui manusia pada tugas yang dinilai, dan riset untuk membuat penilaian manusia tetap berarti saat tugasnya makin sulit."
category: keselamatan-etika
related:
  - alignment
  - rlhf
  - masalah-kendali
  - constitutional-ai
  - reward-hacking
sources:
  - title: "Amodei dkk., “Concrete Problems in AI Safety”, arXiv:1606.06565 (21 Juni 2016)"
    url: https://arxiv.org/abs/1606.06565
  - title: "Bowman dkk., “Measuring Progress on Scalable Oversight for Large Language Models”, arXiv:2211.03540 (4 November 2022)"
    url: https://arxiv.org/abs/2211.03540
  - title: "Burns dkk., “Weak-to-Strong Generalization”, arXiv:2312.09390 (14 Desember 2023)"
    url: https://arxiv.org/abs/2312.09390
level: lanjut
status: ditinjau
updated: 2026-10-13
---

## Masalahnya

Banyak metode penyelarasan, seperti [RLHF](/ensiklopedia/rlhf/), bergantung pada manusia yang dapat menilai apakah keluaran model baik. Jika model kelak melakukan hal yang terlalu rumit untuk dinilai manusia secara andal, penilaian itu menjadi pengawasan yang lemah.

“Scalable supervision” muncul sebagai salah satu dari lima masalah konkret dalam makalah Amodei dkk. (2016): objektif yang terlalu mahal dievaluasi sesering yang diperlukan. Bowman dkk. (2022) menggambarkan tantangannya sebagai mengawasi sistem yang mungkin melampaui manusia pada sebagian besar keterampilan yang relevan, dan mengusulkan studi empiris pada tugas yang dikuasai spesialis tetapi tidak oleh non-spesialis maupun model. Dalam studi awal mereka, orang yang berdialog dengan asisten model bahasa yang tidak andal mengungguli model sendirian maupun diri mereka tanpa bantuan.

## Generalisasi lemah-ke-kuat

Burns dkk. (Desember 2023) meniru situasi itu dengan model lemah sebagai pengawas model kuat. Melatih model kuat dari label model lemah umumnya membuatnya melampaui pengawasnya (“weak-to-strong generalization”), tetapi penyetelan naif masih jauh di bawah kemampuan penuhnya. Dengan pengawas setingkat GPT-2 dan tambahan fungsi kehilangan berbasis keyakinan, GPT-4 memulihkan kinerja mendekati GPT-3.5 pada tugas NLP. Penulis menyimpulkan kemajuan empiris pada masalah ini dapat dicapai sekarang, sekaligus mengingatkan bahwa pendekatan setara RLHF bisa sulit diskalakan tanpa kerja tambahan.

## Catatan

Ini bidang riset aktif; temuan di atas berasal dari eksperimen pada model dan tugas tertentu, bukan bukti bahwa masalahnya terpecahkan.
