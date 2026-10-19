---
title: AI Assistant
aliases:
  - Asisten AI
  - Chatbot AI
summary: "Aplikasi percakapan berbasis model AI yang membantu pengguna menjawab pertanyaan, menulis, menganalisis, dan, bila diberi alat, menjalankan tugas tertentu."
category: ai-agentik
related:
  - llm
  - agent
  - prompt-sistem
  - rlhf
  - constitutional-ai
  - tool-calling
  - memory
  - hallucination
sources:
  - title: "Ouyang dkk., “Training language models to follow instructions with human feedback”, arXiv:2203.02155 (4 Maret 2022)"
    url: https://arxiv.org/abs/2203.02155
  - title: "Bai dkk., “Training a Helpful and Harmless Assistant with Reinforcement Learning from Human Feedback”, arXiv:2204.05862 (12 April 2022)"
    url: https://arxiv.org/abs/2204.05862
level: dasar
status: ditinjau
updated: 2026-10-19
---

## Arti singkat

**Asisten AI** adalah antarmuka percakapan yang menghubungkan pengguna dengan [model](/ensiklopedia/model/) AI. Pengguna mengetik atau berbicara, lalu asisten menjawab, menulis draf, menerjemahkan, merangkum dokumen, atau menganalisis data. Asisten berbasis [LLM](/ensiklopedia/llm/) mulai dipakai luas sejak akhir 2022.

## Dari model bahasa menjadi asisten

Model hasil pra-pelatihan hanya pandai melanjutkan teks; ia belum tentu menuruti permintaan. Dua makalah tahun 2022 menggambarkan langkah yang membuatnya menjadi asisten:

- **Ouyang dkk. (2022)** menyetel GPT-3 dengan contoh tulisan manusia dan penilaian manusia atas jawaban model ([RLHF](/ensiklopedia/rlhf/)). Hasilnya, model InstructGPT 1,3 miliar parameter lebih disukai penilai daripada GPT-3 175 miliar parameter.
- **Bai dkk. (2022)** dari Anthropic memakai pemodelan preferensi dan RLHF untuk melatih asisten yang **membantu** (*helpful*) sekaligus **tidak membahayakan** (*harmless*). Mereka juga menemukan bahwa pelatihan penyelarasan ini meningkatkan kinerja pada hampir semua evaluasi bahasa alami.

Di atas model yang sudah disetel itu, aplikasi asisten menambahkan [prompt sistem](/ensiklopedia/prompt-sistem/), riwayat percakapan, dan kadang [memori](/ensiklopedia/memory/) jangka panjang.

## Asisten dan agent

Batasnya makin kabur. Asisten klasik menjawab per giliran dan menunggu pesan berikutnya. Kini banyak asisten diberi kemampuan [memanggil alat](/ensiklopedia/tool-calling/), misalnya mencari di web, menjalankan kode, atau membaca berkas. Ketika asisten mulai mengerjakan tugas berlangkah banyak secara mandiri, ia sudah berperilaku sebagai [agent](/ensiklopedia/agent/).

## Hal yang perlu diingat pengguna

- **Bisa salah dengan yakin:** periksa fakta penting, angka, dan rujukan ([halusinasi](/ensiklopedia/hallucination/)).
- **Bukan pengganti tenaga ahli:** untuk keputusan medis, hukum, atau keuangan, tetap konsultasikan dengan profesional.
- **Privasi:** pahami kebijakan penyimpanan data penyedia sebelum memasukkan informasi pribadi atau rahasia kantor.
- **Pengetahuan terbatas:** pengetahuan model berhenti pada data pelatihannya, kecuali asisten diberi akses pencarian.
