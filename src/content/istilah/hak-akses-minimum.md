---
title: "Hak Akses Minimum"
aliases:
  - "Least privilege"
  - "Principle of least privilege"
  - "Prinsip hak istimewa minimum"
  - "Excessive agency"
summary: "Prinsip keamanan bahwa setiap program, pengguna, atau agent hanya diberi hak yang benar-benar diperlukan untuk tugasnya, sehingga dampak kesalahan atau penyalahgunaan tetap terbatas."
category: keselamatan-etika
related:
  - permission
  - authorization
  - kotak-pasir
  - manusia-dalam-putaran
  - prompt-injection
  - scope
  - data-pribadi
sources:
  - title: "Saltzer & Schroeder, “The Protection of Information in Computer Systems” (1975)"
    url: https://www.cs.virginia.edu/~evans/cs551/saltzer/
  - title: "OWASP Gen AI Security Project, “LLM06:2025 Excessive Agency”"
    url: https://genai.owasp.org/llmrisk/llm062025-excessive-agency/
level: dasar
status: ditinjau
updated: 2026-10-13
---

## Asal prinsip

Saltzer & Schroeder (1975) merumuskan delapan prinsip desain mekanisme perlindungan pada sistem komputer, dan hak akses minimum adalah salah satunya. Menurut mereka, setiap program dan setiap pengguna sebaiknya beroperasi dengan himpunan hak terkecil yang cukup untuk menyelesaikan pekerjaannya. Prinsip ini terutama membatasi kerusakan akibat kecelakaan atau kesalahan. Bila ada dugaan penyalahgunaan hak, jumlah program yang perlu diaudit pun lebih sedikit. Mereka menyebut aturan militer "perlu tahu" (need-to-know) sebagai contoh penerapannya.

## Untuk aplikasi dan agent LLM

OWASP menyebut risiko kewenangan berlebih (excessive agency) pada daftar 10 risiko teratas aplikasi LLM 2025. Akarnya ada tiga: fungsi berlebih, izin berlebih, dan otonomi berlebih. Mitigasi yang disarankan:

- Batasi ekstensi atau alat yang boleh dipanggil agent seminimal mungkin.
- Batasi fungsi di dalam ekstensi. Ekstensi peringkas surel cukup bisa membaca surel, tanpa kemampuan menghapus atau mengirim.
- Jalankan ekstensi dalam konteks pengguna dengan hak minimum, misalnya OAuth dengan [cakupan](/ensiklopedia/scope/) sesempit mungkin.
- Minta [persetujuan manusia](/ensiklopedia/manusia-dalam-putaran/) untuk tindakan berdampak tinggi.

## Mengapa makin penting

Agent yang terkena [prompt injection](/ensiklopedia/prompt-injection/) hanya dapat merusak sebatas hak yang dimilikinya. Hak akses minimum dan [kotak pasir](/ensiklopedia/kotak-pasir/) tidak mencegah serangan, tetapi memperkecil dampaknya.
