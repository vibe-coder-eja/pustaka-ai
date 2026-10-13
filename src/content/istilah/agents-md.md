---
title: "AGENTS.md"
aliases:
  - "README untuk agent"
summary: "Format Markdown terbuka berisi panduan proyek bagi coding agent, seperti perintah build dan test, gaya kode, dan hal yang perlu diketahui sebelum mengubah kode."
category: ai-agentik
related:
  - agent
  - harness-engineering
  - context-engineering
  - skill
  - codebase
sources:
  - title: "AGENTS.md, situs resmi"
    url: https://agents.md
level: dasar
status: ditinjau
updated: 2026-10-13
---

## Fungsi

Menurut situs resminya, AGENTS.md adalah “README untuk agent”: tempat yang dapat diprediksi untuk memberi konteks dan instruksi saat agent mengerjakan proyek. README tetap untuk manusia; AGENTS.md memuat hal yang biasanya tak cocok di README, misalnya ringkasan proyek, perintah build dan test, gaya kode, pertimbangan keamanan, dan aturan commit atau pull request.

## Format

Markdown biasa tanpa bidang wajib, diletakkan di akar repositori. Pada monorepo, tiap subproyek dapat punya berkas sendiri; berkas terdekat dengan berkas yang diedit yang berlaku, dan perintah eksplisit pengguna di chat mengalahkan semuanya. Format ini lahir dari kolaborasi sejumlah pembuat alat coding dan kini dikelola Agentic AI Foundation di bawah Linux Foundation; situs menyebut dipakai lebih dari 60 ribu proyek terbuka.
