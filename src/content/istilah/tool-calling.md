---
title: Tool Calling
aliases:
  - Pemanggilan alat
  - Function calling
  - Tool use
summary: "Kemampuan model AI meminta aplikasi menjalankan alat, seperti pencarian web, kalkulator, terminal, atau API, dengan argumen terstruktur, lalu memakai hasilnya untuk melanjutkan jawaban."
category: ai-agentik
related:
  - tool
  - toolset
  - mcp
  - api
  - agent
  - agent-loop
  - computer-use
  - hak-akses-minimum
  - prompt-injection
sources:
  - title: "Schick dkk., “Toolformer: Language Models Can Teach Themselves to Use Tools”, arXiv:2302.04761 (9 Februari 2023)"
    url: https://arxiv.org/abs/2302.04761
  - title: "Claude Platform Docs, “Tool use with Claude”"
    url: https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview
level: menengah
status: ditinjau
updated: 2026-10-19
---

## Arti singkat

**Tool calling** (juga disebut *function calling* atau *tool use*) memungkinkan [LLM](/ensiklopedia/llm/) melakukan hal yang tidak bisa dikerjakannya sendiri: mencari informasi terbaru, menghitung dengan tepat, membaca berkas, atau mengubah data di sistem lain. Model **tidak menjalankan alat secara langsung**. Ia hanya menulis permintaan terstruktur, misalnya “panggil `cari_cuaca` dengan `kota = Bandung`”, dan aplikasilah yang menjalankannya.

## Mengapa model perlu alat

Schick dkk. (2023) mencatat sebuah paradoks: model bahasa dapat mengerjakan tugas baru dari sedikit contoh, tetapi kesulitan dengan hal dasar seperti aritmetika atau mencari fakta, yang justru dikuasai alat sederhana. Model Toolformer mereka belajar sendiri **kapan** memanggil API, **API mana**, **dengan argumen apa**, dan bagaimana memakai hasilnya. Alatnya antara lain kalkulator, sistem tanya jawab, dua mesin pencari, penerjemah, dan kalender. Hasilnya, kinerja pada banyak tugas meningkat dan sering menyaingi model yang jauh lebih besar.

## Alur kerja

Dokumentasi tool use Claude menggambarkan alur yang mirip dengan penyedia model lain:

1. **Pengembang mendefinisikan alat:** nama, deskripsi, dan skema masukan dalam format JSON.
2. **Model memutuskan:** bila sebuah alat membantu, model membalas dengan blok permintaan pemanggilan alat beserta argumennya.
3. **Aplikasi menjalankan alat** lalu mengirim hasilnya kembali ke model.
4. **Model melanjutkan:** memakai hasil itu untuk menjawab, atau memanggil alat lain.

Dokumentasi itu juga membedakan *client tools* yang dijalankan di aplikasi pengembang dan *server tools* yang dijalankan penyedia model. Pengulangan langkah 2 sampai 4 inilah yang membentuk [agent loop](/ensiklopedia/agent-loop/).

## Keamanan

Alat memberi model kemampuan bertindak, sehingga risikonya ikut naik:

- **Batasi alat:** sediakan hanya alat yang diperlukan, dengan [hak akses minimum](/ensiklopedia/hak-akses-minimum/).
- **Waspadai isi hasil alat:** halaman web atau berkas yang dibaca alat dapat berisi instruksi jahat ([prompt injection](/ensiklopedia/prompt-injection/)).
- **Minta konfirmasi:** tindakan yang tidak dapat dibatalkan, seperti menghapus, mengirim, atau membayar, sebaiknya disetujui manusia dulu.
- **Validasi argumen:** periksa argumen dari model sebelum dieksekusi, sama seperti masukan dari pengguna.

## Hubungan dengan istilah lain

[MCP](/ensiklopedia/mcp/) menstandarkan cara alat disediakan untuk banyak aplikasi sekaligus. [Computer use](/ensiklopedia/computer-use/) adalah bentuk khusus pemanggilan alat yang mengendalikan layar, papan ketik, dan tetikus.
