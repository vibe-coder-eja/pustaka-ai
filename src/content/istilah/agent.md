---
title: Agent
aliases:
  - Agen
  - Agen AI
  - AI agent
summary: "Sistem AI yang menerima tujuan lalu mengarahkan langkahnya sendiri: memilih tindakan, memakai alat, membaca hasilnya, dan mengulang sampai tugas selesai."
category: ai-agentik
related:
  - agentic-ai
  - agent-loop
  - tool-calling
  - planning
  - goal
  - autonomy
  - workflow-ai-agentik
  - react-pola-agent
  - subagent
  - ai-assistant
  - memory
  - manusia-dalam-putaran
sources:
  - title: "Anthropic, “Building effective agents” (19 Desember 2024)"
    url: https://www.anthropic.com/engineering/building-effective-agents
  - title: "Yao dkk., “ReAct: Synergizing Reasoning and Acting in Language Models”, arXiv:2210.03629 (6 Oktober 2022)"
    url: https://arxiv.org/abs/2210.03629
level: dasar
status: ditinjau
updated: 2026-10-19
---

## Arti singkat

**Agent** (agen AI) adalah sistem yang tidak berhenti pada satu jawaban. Ia menerima [tujuan](/ensiklopedia/goal/), lalu memutuskan sendiri langkah berikutnya: membaca berkas, mencari di web, menjalankan kode, atau memanggil API. Hasil setiap langkah dibacanya, dan ia melanjutkan sampai tugas selesai. Contohnya adalah agent pemrograman yang memperbaiki bug di sebuah repositori, atau agent riset yang menelusuri puluhan sumber lalu menyusun laporan.

## Agent berbeda dari workflow

Tulisan Anthropic “Building effective agents” (Desember 2024) memberi pembedaan yang banyak dipakai:

- **[Workflow](/ensiklopedia/workflow-ai-agentik/):** model dan alat dirangkai lewat alur kode yang sudah ditentukan.
- **Agent:** model mengarahkan sendiri prosesnya dan pemakaian alatnya, termasuk menentukan cara menyelesaikan tugas.

Keduanya disebut sistem agentik. Tulisan yang sama menyarankan memulai dari solusi paling sederhana dan baru menambah kerumitan bila perlu. Banyak tugas cukup diselesaikan dengan satu prompt yang baik atau workflow tetap.

## Cara kerja

Inti agent adalah putaran berulang ([agent loop](/ensiklopedia/agent-loop/)): model menalar, memilih tindakan, memanggil [alat](/ensiklopedia/tool-calling/), mengamati hasil, lalu menalar ulang. Pola ini dirumuskan antara lain oleh Yao dkk. (2022) dalam [ReAct](/ensiklopedia/react-pola-agent/). Mereka menunjukkan bahwa menyelang-nyelingkan jejak penalaran dengan tindakan, misalnya mengakses API Wikipedia, mengurangi halusinasi dan kesalahan beruntun dibanding penalaran tanpa tindakan.

Anthropic menekankan bahwa agent perlu mendapat “kebenaran lapangan” dari lingkungannya pada setiap langkah, misalnya hasil pemanggilan alat atau hasil menjalankan kode, untuk menilai kemajuannya sendiri.

## Risiko dan pengaman

Karena bekerja mandiri dalam banyak langkah, agent lebih mahal dan kesalahannya dapat menumpuk. Pengaman yang umum dipakai:

- Batas jumlah langkah atau kondisi berhenti.
- [Hak akses minimum](/ensiklopedia/hak-akses-minimum/) dan [kotak pasir](/ensiklopedia/kotak-pasir/).
- Persetujuan manusia untuk tindakan berdampak besar ([manusia dalam putaran](/ensiklopedia/manusia-dalam-putaran/)).

## Hubungan dengan istilah lain

- [AI assistant](/ensiklopedia/ai-assistant/) umumnya menjawab per giliran; agent bertindak lintas banyak langkah.
- Tingkat kemandirian agent dibahas di entri [otonomi](/ensiklopedia/autonomy/).
- Agent besar dapat membagi pekerjaan ke [subagent](/ensiklopedia/subagent/) lewat [orkestrasi](/ensiklopedia/orkestrasi-agent/).
