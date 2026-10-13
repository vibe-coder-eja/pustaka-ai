---
title: "Tolok Ukur"
aliases:
  - "Benchmark"
  - "Tolok ukur AI"
  - "MMLU"
  - "HumanEval"
  - "SWE-bench"
summary: "Kumpulan tugas baku dengan cara penilaian tetap untuk membandingkan kemampuan model atau agent secara terbuka."
category: dasar-ai
related:
  - evals
  - llm-as-a-judge
  - regression
  - model-terdepan
  - hukum-penskalaan
sources:
  - title: "Hendrycks dkk., “Measuring Massive Multitask Language Understanding”, arXiv:2009.03300 (7 September 2020)"
    url: https://arxiv.org/abs/2009.03300
  - title: "Chen dkk., “Evaluating Large Language Models Trained on Code”, arXiv:2107.03374 (7 Juli 2021)"
    url: https://arxiv.org/abs/2107.03374
  - title: "Jimenez dkk., “SWE-bench: Can Language Models Resolve Real-World GitHub Issues?”, arXiv:2310.06770 (10 Oktober 2023)"
    url: https://arxiv.org/abs/2310.06770
level: dasar
status: ditinjau
updated: 2026-10-13
---

## Fungsi

Tolok ukur memberi tugas yang sama dan aturan penilaian yang sama kepada semua model, sehingga hasilnya bisa dibandingkan. Karena terbuka dan baku, skornya sering dikutip saat model baru dirilis.

## Tiga contoh berpengaruh

- **MMLU** (Hendrycks dkk., September 2020) menguji pengetahuan dan pemecahan masalah pada 57 tugas, dari matematika dasar dan sejarah Amerika Serikat hingga ilmu komputer dan hukum. Saat dirilis, kebanyakan model nyaris setara tebakan acak. Model GPT-3 terbesar unggul hampir 20 poin persentase di atas acak.
- **HumanEval** (Chen dkk., Juli 2021) mengukur kebenaran fungsional program yang ditulis dari docstring. Codex menyelesaikan 28,8% soal, GPT-3 0%. Dengan 100 sampel per soal, angka Codex naik menjadi 70,2%.
- **SWE-bench** (Jimenez dkk., Oktober 2023) berisi 2.294 masalah nyata dari issue dan pull request GitHub di 12 repositori Python populer. Model harus mengubah codebase untuk menyelesaikan issue, yang sering melibatkan banyak fungsi dan berkas sekaligus.

## pass@k

Metrik ini dipopulerkan makalah HumanEval: peluang setidaknya satu dari k sampel jawaban lolos uji. Makin besar k, makin tinggi skornya. Penjelasannya juga ada di entri [evals](/ensiklopedia/evals/).

## Batas tolok ukur publik

Penyusun SWE-bench membuka makalahnya dengan pengamatan bahwa kemampuan model bahasa sudah melampaui kemampuan kita mengevaluasinya secara efektif. Selain itu, skor publik belum tentu mencerminkan tugas di organisasi Anda. Karena itu tim biasanya juga membangun evals sendiri dari kasus nyata mereka.
