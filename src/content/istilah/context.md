---
title: Context
aliases:
  - Konteks
summary: "Seluruh informasi yang dibaca model AI saat menghasilkan jawaban: prompt sistem, pesan pengguna, riwayat percakapan, dokumen, dan hasil alat. Model hanya ‘tahu’ apa yang ada di bobotnya dan di konteksnya."
category: dasar-ai
related:
  - context-window
  - context-engineering
  - prompt
  - prompt-sistem
  - rag
  - memory
  - memori-episodik
  - cache-prompt
sources:
  - title: "Anthropic, “Effective context engineering for AI agents” (29 September 2025)"
    url: https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents
level: dasar
status: ditinjau
updated: 2026-10-19
---

## Arti singkat

**Konteks** adalah semua teks dan data yang disodorkan kepada [model](/ensiklopedia/model/) pada satu kali [inferensi](/ensiklopedia/inference/). Model tidak mengingat percakapan kemarin dan tidak melihat layar Anda. Yang ia ketahui hanyalah pengetahuan umum yang tersimpan di bobotnya ditambah apa pun yang ada di konteks saat itu. Karena itu, jawaban yang baik sangat bergantung pada konteks yang baik.

## Dari mana konteks berasal

Dalam aplikasi AI, konteks biasanya dirakit dari beberapa sumber:

- [Prompt sistem](/ensiklopedia/prompt-sistem/) dari pengembang aplikasi.
- Pesan pengguna dan riwayat percakapan sebelumnya.
- Dokumen yang diambil lewat pencarian ([RAG](/ensiklopedia/rag/)).
- Hasil pemanggilan alat, misalnya isi berkas atau hasil pencarian web.
- Catatan [memori](/ensiklopedia/memory/) yang disimpan aplikasi dari sesi lain.

Dari sisi model, semuanya hanyalah deretan token dalam satu [context window](/ensiklopedia/context-window/).

## Konteks adalah sumber daya terbatas

Lebih banyak konteks tidak selalu lebih baik. Anthropic, dalam tulisan teknik tentang context engineering (September 2025), menggambarkan konteks sebagai sumber daya terbatas yang manfaat tambahannya makin kecil. Tulisan itu juga memakai istilah *context rot*: makin banyak token di context window, makin menurun kemampuan model mengingat informasi di dalamnya secara akurat. Saran yang diberikan adalah mencari kumpulan token sekecil mungkin yang paling bermakna untuk tugas yang dikerjakan.

Dalam praktik, ini berarti memilih dokumen yang relevan saja, meringkas riwayat panjang, dan membuang hasil alat yang sudah tidak diperlukan.

## Hubungan dengan istilah lain

- [Context window](/ensiklopedia/context-window/) adalah **batas ukuran** konteks; konteks adalah **isinya**.
- [Context engineering](/ensiklopedia/context-engineering/) adalah praktik merancang isi konteks secara sengaja, terutama untuk [agent](/ensiklopedia/agent/) yang bekerja dalam banyak langkah.
- [Cache prompt](/ensiklopedia/cache-prompt/) membuat bagian konteks yang berulang lebih murah diproses.
