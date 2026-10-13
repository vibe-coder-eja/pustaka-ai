---
title: "Orkestrasi Agent"
aliases:
  - "Agent orchestration"
  - "Orchestrator"
  - "Lead agent"
  - "Supervisor pattern"
  - "Handoff"
summary: "Lapisan pengatur yang menentukan bagaimana tugas dipecah, dibagikan ke agent atau panggilan model lain, lalu hasilnya digabungkan; alurnya bisa ditetapkan kode atau diputuskan model secara dinamis."
category: ai-agentik
related:
  - sistem-multi-agent
  - subagent
  - workflow-ai-agentik
  - agent
  - a2a-agent2agent
  - planning
sources:
  - title: "Anthropic, “Building effective agents” (19 Desember 2024)"
    url: https://www.anthropic.com/engineering/building-effective-agents
  - title: "Anthropic, “How we built our multi-agent research system” (13 Juni 2025)"
    url: https://www.anthropic.com/engineering/multi-agent-research-system
level: menengah
status: ditinjau
updated: 2026-10-13
---

## Siapa yang mengatur alur

Anthropic (Desember 2024) membedakan dua jenis sistem agentik. Pada **workflow**, model dan alat diatur melalui jalur kode yang sudah ditentukan sebelumnya. Pada **agent**, model sendiri yang secara dinamis mengarahkan langkah dan pemakaian alatnya. Orkestrasi adalah lapisan yang memegang keputusan alur itu, entah ditulis tetap oleh pengembang atau diserahkan kepada model. Ragam pola workflow dibahas di [workflow AI agentik](/ensiklopedia/workflow-ai-agentik/).

## Pola orchestrator-workers

Dalam pola ini, satu model pusat memecah tugas secara dinamis, mendelegasikannya ke model pekerja, lalu menggabungkan hasilnya. Pola ini cocok untuk tugas yang sub-tugasnya tidak bisa diperkirakan sebelumnya, misalnya perubahan kode yang jumlah berkasnya baru ketahuan setelah ditelusuri.

## Contoh: sistem riset Anthropic

Fitur Research Claude (Juni 2025) memakai satu agent utama (lead agent) yang menganalisis kueri, menyusun strategi, lalu menjalankan beberapa [subagent](/ensiklopedia/subagent/) secara paralel. Pada evaluasi riset internal, sistem dengan Claude Opus 4 sebagai agent utama dan Claude Sonnet 4 sebagai subagent mengungguli Claude Opus 4 tunggal sebesar 90,2%. Biayanya juga besar. Menurut data Anthropic, agent memakai sekitar 4 kali token percakapan biasa, dan sistem multi-agent sekitar 15 kali.

Anthropic juga menulis aturan skala langsung di prompt agent utama:

- pencarian fakta sederhana: 1 agent dengan 3–10 pemanggilan alat;
- perbandingan langsung: 2–4 subagent dengan 10–15 pemanggilan masing-masing;
- riset kompleks: lebih dari 10 subagent dengan pembagian tanggung jawab yang jelas.

## Handoff

Handoff adalah serah terima tugas beserta konteksnya dari satu agent ke agent lain. Bila agent berasal dari sistem atau vendor berbeda, serah terima bisa memakai protokol seperti [A2A](/ensiklopedia/a2a-agent2agent/). Penjelasan tentang kapan sistem banyak agent layak dipakai ada di [sistem multi-agent](/ensiklopedia/sistem-multi-agent/).
