---
title: "ReAct (pola agent)"
aliases:
  - "Reason + Act"
  - "Reasoning and Acting"
summary: "Pola yang membuat model bahasa menghasilkan jejak penalaran dan tindakan secara berselang-seling: berpikir, memanggil alat, mengamati hasil, lalu menalar ulang."
category: ai-agentik
related:
  - chain-of-thought
  - agent-loop
  - tool-calling
  - agent
  - hallucination
sources:
  - title: "Yao dkk., “ReAct: Synergizing Reasoning and Acting in Language Models”, arXiv:2210.03629 (6 Oktober 2022)"
    url: https://arxiv.org/abs/2210.03629
level: menengah
status: ditinjau
updated: 2026-10-13
---

## Gagasan

Sebelum ReAct, kemampuan bernalar (misalnya [chain-of-thought](/ensiklopedia/chain-of-thought/)) dan kemampuan bertindak (misalnya menyusun rencana aksi) umumnya diteliti terpisah. Yao dkk. membuat model menghasilkan keduanya bergantian: jejak penalaran membantu model menyusun, melacak, dan memperbarui rencana serta menangani pengecualian, sedangkan tindakan memungkinkannya mengambil informasi dari sumber luar.

## Hasil yang dilaporkan

Pada tanya jawab (HotpotQA) dan verifikasi fakta (Fever), ReAct dengan API Wikipedia sederhana mengurangi halusinasi dan perambatan kesalahan yang lazim pada chain-of-thought murni. Pada ALFWorld dan WebShop, ReAct mengungguli metode imitation dan reinforcement learning dengan selisih keberhasilan absolut 34% dan 10%, hanya dengan satu-dua contoh dalam prompt.

## Pengaruh

Siklus berpikir, bertindak, mengamati ini adalah bentuk dasar dari [agent loop](/ensiklopedia/agent-loop/).
