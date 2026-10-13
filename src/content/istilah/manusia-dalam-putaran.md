---
title: "Manusia dalam Putaran"
aliases:
  - "Human-in-the-loop"
  - "HITL"
  - "Approval mode"
  - "Human oversight"
  - "Pengawasan manusia"
summary: "Rancangan sistem AI yang menyisipkan manusia di titik keputusan penting, misalnya menyetujui tindakan berdampak besar sebelum dijalankan atau menghentikan sistem saat perlu."
category: ai-agentik
related:
  - agent
  - autonomy
  - hak-akses-minimum
  - kotak-pasir
  - pagar-pengaman-ai
  - permission
  - tata-kelola-ai
sources:
  - title: "Anthropic, “Building effective agents” (19 Desember 2024)"
    url: https://www.anthropic.com/engineering/building-effective-agents
  - title: "OWASP Gen AI Security Project, “LLM06:2025 Excessive Agency”"
    url: https://genai.owasp.org/llmrisk/llm062025-excessive-agency/
  - title: "Undang-Undang AI Uni Eropa (EU AI Act), Pasal 14: Human Oversight"
    url: https://artificialintelligenceact.eu/article/14/
  - title: "Anthropic, “Beyond permission prompts: making Claude Code more secure and autonomous” (20 Oktober 2025)"
    url: https://www.anthropic.com/engineering/claude-code-sandboxing
level: dasar
status: ditinjau
updated: 2026-10-13
---

## Dalam agent

Menurut Anthropic (Desember 2024), [agent](/ensiklopedia/agent/) perlu mendapat umpan balik nyata dari lingkungannya di setiap langkah, misalnya hasil pemanggilan alat atau eksekusi kode, untuk menilai kemajuannya. Agent juga dapat berhenti untuk meminta masukan manusia di titik pemeriksaan (checkpoint) atau ketika menemui hambatan. Kondisi berhenti, seperti batas jumlah iterasi, juga lazim dipasang agar kendali tetap terjaga.

## Sebagai kontrol keamanan

OWASP memasukkan "kewenangan berlebih" (excessive agency) dalam daftar 10 risiko teratas aplikasi LLM 2025. Salah satu mitigasinya adalah meminta persetujuan manusia sebelum tindakan berdampak tinggi dijalankan. Contoh dari OWASP: aplikasi yang membuat dan mengunggah konten media sosial atas nama pengguna sebaiknya punya langkah persetujuan pengguna. Kontrol ini dapat dipasang di dalam ekstensi itu sendiri atau di sistem hilir.

## Dalam regulasi

Pasal 14 Undang-Undang AI Uni Eropa mewajibkan sistem AI berisiko tinggi dirancang agar dapat diawasi secara efektif oleh manusia selama dipakai. Pengawas harus dimungkinkan untuk:

- memahami kapasitas dan batasan sistem;
- tetap waspada terhadap kecenderungan terlalu percaya pada keluaran mesin (automation bias);
- menafsirkan keluaran dengan benar;
- menghentikan sistem lewat tombol "stop" atau prosedur serupa hingga sistem berhenti dalam keadaan aman.

## Harga yang dibayar

Terlalu banyak permintaan persetujuan juga berisiko. Anthropic (Oktober 2025) mencatat bahwa terus-menerus menekan "setujui" dapat menimbulkan kelelahan persetujuan (approval fatigue): pengguna tidak lagi memperhatikan apa yang disetujuinya. Salah satu jawabannya adalah [kotak pasir](/ensiklopedia/kotak-pasir/), yang memberi batas tegas sehingga persetujuan cukup diminta untuk tindakan di luar batas itu.
