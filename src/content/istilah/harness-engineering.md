---
title: "Harness engineering"
aliases:
  - "Rekayasa harness"
  - "Agent harness"
  - "Scaffolding agent"
summary: "Merancang selubung di sekeliling model, yaitu loop kerja, pemakaian alat, pengelolaan konteks, dan pemeriksaan hasil, sehingga model dapat bekerja sebagai agent yang andal."
category: ai-agentik
related:
  - agent
  - agent-loop
  - context-engineering
  - tool-calling
  - evals
  - agents-md
  - keluarga-x-engineer
sources:
  - title: "Anthropic, “Effective harnesses for long-running agents” (26 November 2025)"
    url: https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents
  - title: "OpenAI, “Harness engineering” (11 Februari 2026); halaman tidak dapat dibaca otomatis, rincian dikonfirmasi lewat laporan sekunder"
    url: https://openai.com/index/harness-engineering
level: lanjut
status: ditinjau
updated: 2026-10-13
---

## Arti

Anthropic memakai kata *harness* untuk kerangka yang membungkus model agar bekerja sebagai agent: mengatur loop kerja, pemakaian alat, dan pengelolaan konteks. Claude Agent SDK disebut sebagai harness agent serbaguna. Artikel tersebut tidak memberi definisi formal; maknanya dibaca dari pemakaiannya.

## Contoh dari Anthropic

Untuk pekerjaan yang melintasi banyak sesi, tiap sesi baru tidak mengingat sesi sebelumnya. Solusi yang dijelaskan membagi dua peran: *initializer agent* menyiapkan lingkungan di sesi pertama (daftar fitur, skrip inisialisasi, catatan progres, commit git awal), lalu *coding agent* mengerjakan satu fitur per sesi dan meninggalkan kode dalam keadaan rapi beserta catatan. Pengujian end-to-end lewat otomasi browser dipakai agar agent tidak menandai fitur selesai sebelum benar-benar berfungsi.

## Istilah baru

Frasa “harness engineering” menyebar pada awal 2026, antara lain lewat tulisan OpenAI tentang pembangunan produk dengan Codex. Sebagian pihak menilainya cukup berbeda dari [context engineering](/ensiklopedia/context-engineering/); sebagian lain menganggapnya penamaan ulang. Artikel sekunder juga memuat angka-angka dari tulisan itu yang belum dapat saya konfirmasi ke sumber aslinya, sehingga tidak dikutip di sini.
