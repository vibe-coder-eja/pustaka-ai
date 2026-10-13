---
title: "Pembobolan Model"
aliases:
  - "Jailbreak"
  - "Jailbreaking"
  - "Adversarial suffix"
summary: "Upaya membujuk model yang sudah dilatih aman agar melanggar batasannya sendiri dan menghasilkan keluaran yang seharusnya ditolak."
category: keselamatan-etika
related:
  - prompt-injection
  - alignment
  - pagar-pengaman-ai
  - uji-serang-tim-merah
  - rlhf
  - prompt-sistem
sources:
  - title: "Wei, Haghtalab & Steinhardt, “Jailbroken: How Does LLM Safety Training Fail?”, arXiv:2307.02483 (5 Juli 2023)"
    url: https://arxiv.org/abs/2307.02483
  - title: "Zou dkk., “Universal and Transferable Adversarial Attacks on Aligned Language Models”, arXiv:2307.15043 (27 Juli 2023)"
    url: https://arxiv.org/abs/2307.15043
level: menengah
status: ditinjau
updated: 2026-10-13
---

## Beda dengan prompt injection

Kedua istilah ini sering tertukar. Pembobolan menyasar aturan keselamatan model itu sendiri: pengguna mencoba membuat model mengatakan atau melakukan hal yang mestinya ditolak. [Prompt injection](/ensiklopedia/prompt-injection/) menyasar instruksi aplikasi, biasanya lewat data pihak ketiga yang dibaca model.

## Mengapa pelatihan keselamatan bisa gagal

Wei, Haghtalab & Steinhardt (Juli 2023) mengajukan dua mode kegagalan:

- **Tujuan yang bersaing:** dorongan model untuk patuh atau membantu berbenturan dengan tujuan keselamatannya.
- **Generalisasi yang tidak sepadan:** pelatihan keselamatan tidak menjangkau ranah tempat kemampuan model sebenarnya ada.

Serangan yang dirancang dari kedua mode itu berhasil pada setiap prompt dalam kumpulan permintaan tidak aman yang berasal dari set evaluasi red-teaming GPT-4 dan Claude v1.3, meski kedua model sudah menjalani [uji serang](/ensiklopedia/uji-serang-tim-merah/) dan pelatihan keselamatan yang ekstensif.

## Pembobolan otomatis

Zou dkk. (Juli 2023) menunjukkan bahwa pembobolan tidak harus dirancang manual. Mereka mencari akhiran (suffix) teks secara otomatis lewat kombinasi pencarian greedy dan berbasis gradien, dengan tujuan membuat model mulai menjawab alih-alih menolak. Akhiran yang dioptimalkan pada model terbuka ternyata juga berpengaruh pada antarmuka publik ChatGPT, Bard, dan Claude. Temuan ini menjadi alasan mengapa batasan di dalam model perlu dilengkapi [pagar pengaman](/ensiklopedia/pagar-pengaman-ai/) di luar model.
