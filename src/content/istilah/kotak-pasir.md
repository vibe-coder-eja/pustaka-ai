---
title: "Kotak Pasir"
aliases:
  - "Sandbox"
  - "Sandboxing"
  - "Lingkungan terisolasi"
summary: "Lingkungan eksekusi terisolasi yang membatasi berkas, jaringan, dan sumber daya yang dapat dijangkau sebuah program atau agent, sehingga kesalahan atau serangan tidak merembet ke sistem utama."
category: ai-agentik
related:
  - hak-akses-minimum
  - manusia-dalam-putaran
  - prompt-injection
  - computer-use
  - container
  - virtual-machine
sources:
  - title: "Goldberg, Wagner, Thomas & Brewer, “A Secure Environment for Untrusted Helper Applications”, 6th USENIX Security Symposium (1996)"
    url: https://www.usenix.org/legacy/publications/library/proceedings/sec96/goldberg.html
  - title: "Anthropic, “Beyond permission prompts: making Claude Code more secure and autonomous” (20 Oktober 2025)"
    url: https://www.anthropic.com/engineering/claude-code-sandboxing
level: menengah
status: ditinjau
updated: 2026-10-13
---

## Gagasan lama di keamanan komputer

Kebutuhan mengurung program yang tidak sepenuhnya dipercaya sudah lama ada. Goldberg dkk. (USENIX Security, 1996) membahas aplikasi pembantu yang dipakai peramban seperti Netscape untuk memproses data dari jaringan. Data itu bisa saja dibuat penyerang, sementara aplikasinya terlalu rumit untuk bebas dari bug. Kesimpulan mereka: aplikasi semacam itu perlu dijalankan di lingkungan aman yang membatasi apa yang bisa disentuhnya.

## Untuk agent AI

Agent yang menulis berkas dan menjalankan perintah menghadapi masalah serupa, terutama bila terkena [prompt injection](/ensiklopedia/prompt-injection/). Anthropic (Oktober 2025) menggambarkan dua batas yang dipasang dengan fitur sistem operasi:

- **Isolasi sistem berkas:** agent hanya dapat membaca atau mengubah direktori tertentu, sehingga agent yang tersusupi tidak bisa mengubah berkas sistem yang sensitif.
- **Isolasi jaringan:** agent hanya dapat terhubung ke server yang disetujui, sehingga tidak bisa membocorkan informasi atau mengunduh malware.

Menurut Anthropic, keduanya harus dipasang bersama. Tanpa isolasi jaringan, agent yang tersusupi bisa mengirim keluar berkas seperti kunci SSH. Tanpa isolasi berkas, agent bisa keluar dari kotak pasir dan memperoleh akses jaringan.

## Dampak pada persetujuan

Dengan batas yang jelas, agent boleh bekerja bebas di dalamnya tanpa meminta izin untuk setiap langkah. Pada pemakaian internal Anthropic, kotak pasir mengurangi permintaan izin sebesar 84%. Ini membantu mengatasi kelelahan persetujuan yang dibahas di [manusia dalam putaran](/ensiklopedia/manusia-dalam-putaran/). Bentuk teknisnya beragam, mulai dari fitur sistem operasi hingga [kontainer](/ensiklopedia/container/) dan [mesin virtual](/ensiklopedia/virtual-machine/).
