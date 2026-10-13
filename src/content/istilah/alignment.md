---
title: Alignment
aliases:
  - Penyelarasan
  - AI alignment
summary: Upaya agar perilaku AI selaras dengan tujuan, nilai, instruksi, dan batasan yang diinginkan manusia.
category: keselamatan-etika
related:
  - ai
  - agi
  - superintelligence
  - masalah-kendali
  - tesis-ortogonalitas
  - konvergensi-instrumental
  - rlhf
  - constitutional-ai
  - reward-hacking
  - pengawasan-skalabel
  - interpretabilitas-mekanistik
  - risiko-eksistensial
sources:
  - title: "Ngo, Chan, dan Mindermann, “The Alignment Problem from a Deep Learning Perspective”, arXiv:2209.00626 (ICLR 2024)"
    url: https://arxiv.org/abs/2209.00626
  - title: "Amodei dkk., “Concrete Problems in AI Safety”, arXiv:1606.06565 (21 Juni 2016)"
    url: https://arxiv.org/abs/1606.06565
  - title: "Ouyang dkk., “Training language models to follow instructions with human feedback”, arXiv:2203.02155 (4 Maret 2022)"
    url: https://arxiv.org/abs/2203.02155
level: menengah
status: ditinjau
updated: 2026-10-13
---

## Arti

Alignment (penyelarasan) adalah usaha membuat sistem AI melakukan apa yang dimaksudkan manusia: mengikuti tujuan, nilai, instruksi, dan batasan yang diinginkan, bukan sekadar mengoptimalkan ukuran yang kebetulan dipakai saat pelatihan.

## Mengapa sulit

Makalah “Concrete Problems in AI Safety” (Amodei dkk., 2016) menguraikan lima masalah konkret yang masih dipakai sebagai peta awal: menghindari efek samping, [reward hacking](/ensiklopedia/reward-hacking/), pengawasan yang skalabel, eksplorasi yang aman, dan pergeseran distribusi. Dua yang pertama berasal dari objektif yang salah; yang ketiga dari objektif yang terlalu mahal dievaluasi.

Ngo, Chan, dan Mindermann (2022) berargumen bahwa jika AGI dilatih seperti model paling mampu saat ini, ia dapat belajar bertindak menipu demi imbalan lebih tinggi, mengembangkan tujuan internal yang melampaui distribusi latihannya, dan mengejarnya lewat strategi mencari kekuasaan. Sistem seperti itu sulit diselaraskan dan dapat tampak selaras padahal tidak. Ini argumen dan tinjauan riset, bukan bukti bahwa model sekarang berperilaku demikian.

## Pendekatan yang ada

- [RLHF](/ensiklopedia/rlhf/): melatih model dari penilaian manusia. Ouyang dkk. (2022) menunjukkan InstructGPT yang lebih kecil lebih disukai daripada GPT-3 yang jauh lebih besar.
- [Constitutional AI](/ensiklopedia/constitutional-ai/): mengganti sebagian penilaian manusia dengan prinsip tertulis dan umpan balik AI.
- [Pengawasan skalabel](/ensiklopedia/pengawasan-skalabel/) dan [interpretabilitas mekanistik](/ensiklopedia/interpretabilitas-mekanistik/): riset untuk tetap dapat menilai dan memahami sistem yang makin mampu.

## Persoalan yang lebih luas

Soal apakah penyelarasan dapat dijamin untuk sistem yang jauh melampaui manusia dibahas di [masalah kendali](/ensiklopedia/masalah-kendali/), bersama [tesis ortogonalitas](/ensiklopedia/tesis-ortogonalitas/) dan [konvergensi instrumental](/ensiklopedia/konvergensi-instrumental/). Seberapa serius risikonya diperdebatkan; lihat [risiko eksistensial](/ensiklopedia/risiko-eksistensial/) dan [Peta pandangan](/ensiklopedia/peta-si/#pandangan).
