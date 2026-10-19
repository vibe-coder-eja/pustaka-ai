---
title: Context Window
aliases:
  - Jendela Konteks
summary: "Batas jumlah token yang dapat dibaca model AI dalam satu permintaan, termasuk prompt, riwayat percakapan, dokumen, dan jawaban yang sedang ditulis."
category: dasar-ai
related:
  - context
  - token
  - tokenisasi
  - rag
  - compression
  - cache-prompt
  - context-engineering
  - llm
sources:
  - title: "Claude Platform Docs, “Context windows”"
    url: https://platform.claude.com/docs/en/build-with-claude/context-windows
  - title: "Liu dkk., “Lost in the Middle: How Language Models Use Long Contexts”, arXiv:2307.03172 (6 Juli 2023)"
    url: https://arxiv.org/abs/2307.03172
level: dasar
status: ditinjau
updated: 2026-10-19
---

## Arti singkat

**Context window** (jendela konteks) adalah kapasitas “meja kerja” model AI. Dokumentasi Claude mendefinisikannya sebagai seluruh teks yang dapat dirujuk model ketika menghasilkan jawaban, **termasuk jawaban itu sendiri**. Ukurannya dihitung dalam [token](/ensiklopedia/token/), bukan kata atau karakter. Teks yang tidak muat di jendela ini tidak dapat dibaca model sama sekali.

## Seberapa besar

Ukuran context window berbeda antarmodel dan terus bertambah. Model awal hanya menampung beberapa ribu token, sedangkan sebagian model saat ini menawarkan ratusan ribu hingga sekitar satu juta token. Dokumentasi Claude, misalnya, menyebut jendela 200 ribu token dan 1 juta token untuk model tertentu. Satu kata sering terpecah menjadi beberapa token, jadi angka itu tidak bisa langsung dibaca sebagai jumlah kata. Cara teks dipecah dibahas di entri [tokenisasi](/ensiklopedia/tokenisasi/).

## Lebih panjang tidak berarti lebih baik

Muat di jendela belum tentu terbaca dengan baik. Liu dkk. (2023) menguji model pada tugas mencari informasi di konteks panjang. Kinerjanya paling tinggi ketika informasi penting berada di **awal atau akhir** konteks, dan turun cukup tajam ketika informasi itu berada di tengah, bahkan pada model yang khusus dirancang untuk konteks panjang. Gejala ini dikenal sebagai *lost in the middle*.

Konteks yang panjang juga membuat [inferensi](/ensiklopedia/inference/) lebih lambat dan lebih mahal, karena setiap token di jendela ikut diproses.

## Cara mengelolanya

- **Ambil seperlunya:** gunakan [RAG](/ensiklopedia/rag/) untuk memasukkan bagian dokumen yang relevan saja, bukan seluruh dokumen.
- **Ringkas:** padatkan riwayat percakapan yang panjang ([kompresi](/ensiklopedia/compression/)).
- **Letakkan dengan sengaja:** taruh instruksi dan informasi kunci di awal atau akhir.
- **Simpan yang berulang:** [cache prompt](/ensiklopedia/cache-prompt/) mengurangi biaya bagian konteks yang selalu sama.

## Hubungan dengan istilah lain

[Konteks](/ensiklopedia/context/) adalah isinya, sedangkan context window adalah batas wadahnya. Merancang isi wadah itu disebut [context engineering](/ensiklopedia/context-engineering/).
