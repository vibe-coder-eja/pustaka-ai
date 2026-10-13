---
title: "Pemicu Agent"
aliases:
  - "Trigger"
  - "Event-driven agent"
  - "Agent berbasis kejadian"
  - "Scheduled agent"
summary: "Mekanisme yang membangunkan agent untuk mulai bekerja, baik menurut jadwal berkala (cron) maupun sebagai reaksi atas kejadian, misalnya komentar baru, pull request, atau webhook."
category: ai-agentik
related:
  - cron-job
  - webhook
  - workflow-github-actions
  - agent
  - manusia-dalam-putaran
  - hak-akses-minimum
sources:
  - title: "Martin Fowler, “What do you mean by ‘Event-Driven’?” (7 Februari 2017)"
    url: https://martinfowler.com/articles/201701-event-driven.html
  - title: "Anthropic, “Claude Code GitHub Actions” (dokumentasi, diakses 13 Oktober 2026)"
    url: https://code.claude.com/docs/en/github-actions
level: dasar
status: ditinjau
updated: 2026-10-13
---

## Dua jenis pemicu

- **Terjadwal:** agent berjalan pada waktu tetap, misalnya setiap pagi untuk merangkum laporan. Mekanismenya sama dengan [cron job](/ensiklopedia/cron-job/).
- **Berbasis kejadian:** agent bangun karena sesuatu terjadi, misalnya issue baru dibuka, ada komentar yang menyebut agent, atau ada [webhook](/ensiklopedia/webhook/) dari layanan lain.

## Arti "berbasis kejadian"

Martin Fowler (2017) mencatat bahwa orang memakai istilah event-driven untuk beberapa pola yang sebenarnya berbeda. Yang paling dekat dengan pemicu agent adalah notifikasi kejadian (event notification): suatu sistem mengirim pesan untuk memberi tahu sistem lain bahwa ada perubahan di ranahnya, tanpa terlalu peduli apa tanggapan penerimanya. Penerima lalu memutuskan sendiri tindakan berikutnya.

## Contoh: agent di GitHub Actions

Claude Code GitHub Actions menjalankan agent di dalam [workflow GitHub Actions](/ensiklopedia/workflow-github-actions/) sebuah repositori. Agent dapat dipicu saat pengguna menyebut @claude di komentar pull request atau issue, atau dipicu lewat jadwal. Dokumentasinya memuat dua pengaman yang relevan untuk desain pemicu:

- Pada kejadian issue dan pull request, pengguna yang memicu harus punya akses tulis ke repositori.
- Pemicu dari akun bot ditolak secara bawaan, kecuali bot itu didaftarkan secara eksplisit, agar bot tidak saling memicu dalam putaran tanpa akhir.

## Prinsip desain

Agent yang berjalan otomatis tidak selalu diawasi langsung oleh manusia. Karena itu siapa yang boleh memicu, [hak akses](/ensiklopedia/hak-akses-minimum/) agent, dan titik [persetujuan manusia](/ensiklopedia/manusia-dalam-putaran/) perlu ditetapkan sejak awal.
