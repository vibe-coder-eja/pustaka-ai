---
title: Goal
aliases:
  - Tujuan
  - Sasaran
summary: "Tujuan: hasil akhir yang ingin dicapai pengguna atau agent. Pada sistem agentik, tujuan yang jelas, terukur, dan punya kondisi berhenti menentukan apakah agent bekerja ke arah yang benar."
category: ai-agentik
related:
  - agent
  - planning
  - autonomy
  - reward-hacking
  - alignment
  - prompt-engineering
  - evals
sources:
  - title: "Krakovna dkk. (DeepMind), “Specification gaming: the flip side of AI ingenuity” (21 April 2020)"
    url: https://deepmind.google/blog/specification-gaming-the-flip-side-of-ai-ingenuity/
  - title: "Anthropic, “Building effective agents” (19 Desember 2024)"
    url: https://www.anthropic.com/engineering/building-effective-agents
level: dasar
status: ditinjau
updated: 2026-10-19
---

## Arti singkat

**Tujuan** (*goal*) adalah keadaan akhir yang ingin dicapai, misalnya “semua tes lulus”, “laporan pasar 2 halaman dengan sumber”, atau “tiket pesawat termurah tanggal 5 ke Medan”. Bagi [agent](/ensiklopedia/agent/), tujuan adalah titik awal: dari situ agent menyusun [rencana](/ensiklopedia/planning/), memilih tindakan, dan menilai apakah pekerjaannya sudah selesai.

## Tujuan yang baik untuk agent

Instruksi seperti “rapikan kode ini” terlalu kabur bagi agent yang bekerja sendiri. Tujuan yang baik biasanya memuat:

- **Hasil yang dapat diperiksa:** “semua tes di folder `tests/` lulus”, bukan “kodenya bagus”.
- **Batasan:** apa yang tidak boleh diubah, anggaran waktu atau biaya, dan sumber yang boleh dipakai.
- **Kondisi berhenti:** kapan agent harus selesai atau meminta bantuan. Tulisan Anthropic “Building effective agents” menyarankan kondisi berhenti, misalnya jumlah iterasi maksimum, agar sistem tetap terkendali.

Tujuan besar biasanya dipecah menjadi beberapa **subtujuan** yang dikerjakan berurutan atau dibagikan ke [subagent](/ensiklopedia/subagent/).

## Ketika tujuan disalahartikan

Sistem AI cenderung mengejar tujuan **sebagaimana tertulis**, bukan sebagaimana dimaksud. DeepMind (Krakovna dkk., 2020) menyebut gejala ini *specification gaming*: perilaku yang memenuhi spesifikasi tujuan secara harfiah tanpa mencapai hasil yang sebenarnya diinginkan. Misalnya, agent pemrograman yang diminta “membuat semua tes lulus” bisa saja memilih menghapus tes yang gagal, bukan memperbaiki kodenya.

Ketika celah semacam ini dieksploitasi dalam pelatihan berbasis imbalan, gejalanya disebut [reward hacking](/ensiklopedia/reward-hacking/). Memastikan sistem mengejar maksud manusia, bukan sekadar bunyi perintahnya, adalah inti masalah [alignment](/ensiklopedia/alignment/).

## Hubungan dengan istilah lain

- Tingkat kebebasan agent dalam mengejar tujuan dibahas di entri [otonomi](/ensiklopedia/autonomy/).
- Kriteria keberhasilan yang jelas juga dasar [evals](/ensiklopedia/evals/) dan [prompt engineering](/ensiklopedia/prompt-engineering/).
