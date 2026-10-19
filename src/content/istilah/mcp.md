---
title: MCP
aliases:
  - Model Context Protocol
  - Protokol Konteks Model
summary: "Model Context Protocol: standar terbuka untuk menghubungkan aplikasi AI dengan alat dan sumber data luar lewat satu protokol, sehingga satu integrasi bisa dipakai banyak aplikasi."
category: ai-agentik
related:
  - tool-calling
  - tool
  - context
  - agent
  - a2a-agent2agent
  - api
  - prompt-injection
  - hak-akses-minimum
sources:
  - title: "Anthropic, “Introducing the Model Context Protocol” (25 November 2024)"
    url: https://www.anthropic.com/news/model-context-protocol
  - title: "Model Context Protocol, “Specification” (versi terbaru)"
    url: https://modelcontextprotocol.io/specification/latest
  - title: "Anthropic, “Donating MCP to the Agentic AI Foundation” (9 Desember 2025)"
    url: https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation
level: menengah
status: ditinjau
updated: 2026-10-19
---

## Arti singkat

**MCP** (*Model Context Protocol*) adalah standar terbuka yang mengatur cara aplikasi AI terhubung ke alat dan data luar, seperti berkas, basis data, layanan kerja, atau API. Analogi yang sering dipakai adalah colokan universal. Tanpa MCP, setiap aplikasi AI harus membuat integrasi sendiri untuk setiap layanan. Dengan MCP, satu server cukup dibuat sekali dan dapat dipakai oleh aplikasi mana pun yang mendukung protokol ini.

## Asal-usul

Anthropic memperkenalkan MCP pada 25 November 2024 sebagai standar terbuka untuk menghubungkan sistem AI dengan sumber data. Tujuannya mengganti integrasi yang terpecah-pecah dengan satu protokol. Pada 9 Desember 2025, Anthropic menyerahkan MCP kepada **Agentic AI Foundation**, dana terarah di bawah Linux Foundation. Yayasan itu didirikan bersama oleh Anthropic, Block, dan OpenAI, dengan dukungan Google, Microsoft, AWS, Cloudflare, dan Bloomberg.

## Cara kerja

Menurut spesifikasinya, MCP memakai pesan **JSON-RPC 2.0** di antara tiga pihak:

- **Host:** aplikasi AI yang memulai koneksi, misalnya aplikasi asisten atau editor kode.
- **Client:** penghubung di dalam host, satu untuk setiap server.
- **Server:** layanan yang menyediakan konteks dan kemampuan.

Server dapat menawarkan tiga jenis fitur:

- **Resources:** data dan konteks untuk pengguna atau model.
- **Prompts:** templat pesan dan alur kerja untuk pengguna.
- **Tools:** fungsi yang dapat dijalankan model ([tool calling](/ensiklopedia/tool-calling/)).

Spesifikasi itu menyebut MCP mengambil sebagian inspirasi dari Language Server Protocol, standar yang menyatukan dukungan bahasa pemrograman di berbagai editor kode.

## Keamanan

Menghubungkan model ke alat nyata membuka risiko baru:

- **Instruksi tersembunyi:** deskripsi alat atau data dari server bisa memuat instruksi jahat ([prompt injection](/ensiklopedia/prompt-injection/)).
- **Hak akses berlebih:** server yang diberi akses terlalu luas memperbesar dampak kesalahan.

Praktik yang dianjurkan: pasang server hanya dari sumber tepercaya, beri [hak akses minimum](/ensiklopedia/hak-akses-minimum/), dan minta persetujuan pengguna sebelum alat berdampak besar dijalankan.

## Hubungan dengan istilah lain

MCP menghubungkan **agent ke alat dan data**. Protokol [A2A](/ensiklopedia/a2a-agent2agent/) menghubungkan **agent ke agent lain**. Keduanya sering dipakai bersama.
