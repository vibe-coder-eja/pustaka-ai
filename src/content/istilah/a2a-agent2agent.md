---
title: "A2A (Agent2Agent)"
aliases:
  - "Agent2Agent Protocol"
  - "Protokol agent-ke-agent"
summary: "Standar terbuka agar agent AI dari framework dan vendor berbeda dapat saling menemukan, mendelegasikan tugas, dan bertukar hasil; berbeda dari MCP yang menghubungkan agent ke alat."
category: ai-agentik
related:
  - mcp
  - agent
  - sistem-multi-agent
  - tool-calling
sources:
  - title: "Proyek A2A, dokumentasi resmi"
    url: https://a2a-protocol.org/latest/
level: menengah
status: ditinjau
updated: 2026-10-13
---

## Apa itu

Menurut dokumentasi resminya, A2A awalnya dikembangkan Google lalu didonasikan ke Linux Foundation, berlisensi Apache 2.0, dengan komite pengarah teknis yang beranggotakan AWS, Cisco, Google, IBM Research, Microsoft, Salesforce, SAP, dan ServiceNow. Tujuannya interoperabilitas antarplatform dan kolaborasi agent tanpa membuka memori internal, alat, atau logika milik masing-masing.

## A2A dan MCP

Keduanya dinyatakan saling melengkapi: [MCP](/ensiklopedia/mcp/) untuk komunikasi agent ke alat, API, dan sumber data; A2A untuk komunikasi agent ke agent. Dokumentasi juga menegaskan A2A bukan framework pengembangan agent dan bukan protokol pemanggilan alat.
