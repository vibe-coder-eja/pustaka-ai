---
title: Agentic AI
aliases:
  - AI Agentik
  - Sistem agentik
summary: "Sebutan untuk sistem AI yang tidak hanya menjawab, tetapi juga merencanakan, memakai alat, dan bertindak menuju tujuan dengan tingkat kemandirian tertentu."
category: ai-agentik
related:
  - agent
  - workflow-ai-agentik
  - autonomy
  - tool-calling
  - planning
  - orkestrasi-agent
  - manusia-dalam-putaran
  - alignment
sources:
  - title: "Anthropic, “Building effective agents” (19 Desember 2024)"
    url: https://www.anthropic.com/engineering/building-effective-agents
  - title: "Feng, McDonald, Zhang, “Levels of Autonomy for AI Agents”, arXiv:2506.12469 (14 Juni 2025)"
    url: https://arxiv.org/abs/2506.12469
level: dasar
status: ditinjau
updated: 2026-10-19
---

## Arti singkat

**AI agentik** adalah istilah payung untuk sistem AI yang **bertindak**, bukan sekadar menjawab. Sistem semacam ini menerima tujuan, memecahnya menjadi langkah, memakai alat seperti pencarian web, terminal, atau API, lalu menyesuaikan langkah berikutnya berdasarkan hasil. Kata sifat “agentik” menunjukkan bahwa ini soal **kadar**: sebuah sistem bisa sedikit atau sangat agentik.

## Spektrum, bukan kotak

Anthropic, dalam “Building effective agents” (Desember 2024), memasukkan dua bentuk ke dalam sistem agentik:

- **[Workflow](/ensiklopedia/workflow-ai-agentik/):** model dan alat dijalankan menurut alur kode yang sudah ditetapkan.
- **[Agent](/ensiklopedia/agent/):** model sendiri yang menentukan proses dan pemakaian alatnya.

Di antara keduanya ada banyak variasi, misalnya workflow yang memberi model kebebasan pada satu langkah saja. Feng dkk. (2025) mengusulkan agar tingkat [otonomi](/ensiklopedia/autonomy/) agent diperlakukan sebagai **keputusan desain yang disengaja**, terpisah dari seberapa mampu modelnya. Model yang sangat mampu tetap bisa dijalankan dengan kendali manusia yang ketat.

## Contoh penggunaan

- **Agent pemrograman** yang membaca kode, menjalankan tes, dan mengusulkan perbaikan.
- **[Agent riset mendalam](/ensiklopedia/agent-riset-mendalam/)** yang mencari, membaca, dan merangkum banyak sumber.
- **Agent yang [mengoperasikan komputer](/ensiklopedia/computer-use/)** lewat layar, papan ketik, dan tetikus.
- **Otomasi kantor:** memilah email, mengisi formulir, atau menyusun laporan rutin.

## Mengapa perlu hati-hati

Makin mandiri sebuah sistem, makin besar pula dampak kesalahannya. Agent yang salah memahami tujuan dapat menghapus berkas, mengirim pesan, atau membelanjakan uang. Praktik yang dianjurkan antara lain:

- Mulai dari rancangan paling sederhana yang cukup.
- Beri [hak akses minimum](/ensiklopedia/hak-akses-minimum/).
- Jalankan di [kotak pasir](/ensiklopedia/kotak-pasir/).
- Minta persetujuan manusia untuk tindakan yang tidak dapat dibatalkan ([manusia dalam putaran](/ensiklopedia/manusia-dalam-putaran/)).

Di tingkat lebih luas, AI agentik memperbesar pentingnya [alignment](/ensiklopedia/alignment/), karena sistem yang bertindak sendiri harus tetap mengikuti maksud penggunanya.

## Catatan istilah

“Agentic AI” juga banyak dipakai sebagai istilah pemasaran. Produk yang disebut agentik belum tentu mengambil keputusan sendiri; sebagian hanyalah workflow tetap. Pertanyaan yang berguna: **siapa yang menentukan langkah berikutnya**, kode yang ditulis pengembang atau modelnya?
