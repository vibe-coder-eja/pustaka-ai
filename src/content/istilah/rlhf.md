---
title: "RLHF"
aliases:
  - "Reinforcement Learning from Human Feedback"
  - "Pembelajaran penguatan dari umpan balik manusia"
summary: "Metode melatih model memakai penilaian manusia atas keluarannya, lazimnya lewat model imbalan yang dipelajari dari perbandingan pilihan, lalu dioptimalkan dengan pembelajaran penguatan."
category: keselamatan-etika
related:
  - alignment
  - llm
  - pengawasan-skalabel
  - reward-hacking
  - constitutional-ai
  - model
sources:
  - title: "Christiano dkk., “Deep reinforcement learning from human preferences”, arXiv:1706.03741 (12 Juni 2017)"
    url: https://arxiv.org/abs/1706.03741
  - title: "Ouyang dkk., “Training language models to follow instructions with human feedback”, arXiv:2203.02155 (4 Maret 2022)"
    url: https://arxiv.org/abs/2203.02155
level: menengah
status: ditinjau
updated: 2026-10-13
---

## Cara kerja

Christiano dkk. (2017) melatih agen pembelajaran penguatan **tanpa fungsi imbalan buatan tangan**. Orang non-ahli membandingkan dua potongan pendek perilaku agen dan menunjukkan mana yang lebih sesuai tujuan; agen belajar dari perbandingan itu. Pada tugas seperti permainan Atari dan gerak robot simulasi, umpan balik manusia hanya mencakup kurang dari 1% interaksi agen, dan perilaku baru dapat dilatih dengan sekitar satu jam waktu manusia.

## Pada model bahasa

Ouyang dkk. (Maret 2022) menerapkannya pada GPT-3 dengan tiga langkah: menyetel dengan contoh jawaban tulisan labeler (supervised), mengumpulkan peringkat beberapa keluaran model, lalu menyetel lebih lanjut dengan pembelajaran penguatan dari peringkat itu. Hasilnya, InstructGPT. Dalam evaluasi manusia atas distribusi prompt mereka, InstructGPT 1,3 miliar parameter lebih disukai daripada GPT-3 175 miliar parameter, lebih jujur, dan kurang beracun, tetapi masih membuat kesalahan sederhana.

## Keterbatasan

RLHF bergantung pada kemampuan manusia menilai keluaran, yang menjadi masalah ketika tugas makin sulit ([pengawasan skalabel](/ensiklopedia/pengawasan-skalabel/)). Model juga dapat mengeksploitasi celah pada model imbalan ([reward hacking](/ensiklopedia/reward-hacking/)). Lihat juga [Constitutional AI](/ensiklopedia/constitutional-ai/) yang mengganti sebagian penilaian manusia dengan prinsip tertulis.
