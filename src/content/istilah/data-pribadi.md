---
title: "Data Pribadi"
aliases:
  - "PII"
  - "Personally identifiable information"
  - "Personal data"
  - "UU PDP"
summary: "Data tentang orang perseorangan yang teridentifikasi atau dapat diidentifikasi, sendiri atau bila digabung dengan informasi lain; dalam AI, data ini bisa ikut terhimpun dalam data pelatihan, prompt, log, atau memori agent."
category: keselamatan-etika
related:
  - hak-akses-minimum
  - peracunan-data
  - memori-episodik
  - pagar-pengaman-ai
  - tata-kelola-ai
  - encryption
sources:
  - title: "Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi (JDIH BPK)"
    url: https://peraturan.bpk.go.id/Details/229798/uu-no-27-tahun-2022
  - title: "Carlini dkk., “Extracting Training Data from Large Language Models”, arXiv:2012.07805 (14 Desember 2020)"
    url: https://arxiv.org/abs/2012.07805
  - title: "NIST SP 800-122, “Guide to Protecting the Confidentiality of Personally Identifiable Information (PII)” (April 2010)"
    url: https://csrc.nist.gov/pubs/sp/800/122/final
level: dasar
status: ditinjau
updated: 2026-10-13
---

## Definisi hukum di Indonesia

Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP), yang disahkan dan diundangkan pada 17 Oktober 2022, mendefinisikan data pribadi sebagai data tentang orang perseorangan yang teridentifikasi atau dapat diidentifikasi secara tersendiri atau dikombinasi dengan informasi lainnya, baik secara langsung maupun tidak langsung, melalui sistem elektronik atau nonelektronik. Pasal 4 membaginya menjadi dua jenis:

- **Bersifat spesifik:** data dan informasi kesehatan, data biometrik, data genetika, catatan kejahatan, data anak, data keuangan pribadi, dan data lain sesuai peraturan.
- **Bersifat umum:** antara lain nama lengkap, jenis kelamin, agama, status perkawinan, dan data pribadi yang dikombinasikan untuk mengidentifikasi seseorang.

Pasal 74 memberi pengendali dan prosesor data pribadi waktu paling lama dua tahun sejak undang-undang diundangkan untuk menyesuaikan diri. Di Amerika Serikat, istilah yang lazim dipakai adalah PII. Pedoman NIST SP 800-122 (April 2010) membahas cara melindungi kerahasiaannya di sistem informasi lembaga federal.

## Risiko khas pada model bahasa

Carlini dkk. (Desember 2020) menunjukkan bahwa penyerang dapat mengekstrak contoh data pelatihan dengan mengajukan kueri ke model. Dari GPT-2, mereka berhasil mengambil ratusan potongan teks verbatim, termasuk informasi identitas pribadi yang bersifat publik seperti nama, nomor telepon, dan alamat surel. Serangan ini berhasil meskipun tiap potongan hanya muncul di satu dokumen dalam data pelatihan, dan model yang lebih besar justru lebih rentan.

## Untuk aplikasi dan agent

Data pribadi juga dapat masuk lewat prompt pengguna, dokumen yang diambil [RAG](/ensiklopedia/rag/), log [observability](/ensiklopedia/observability/), dan [memori agent](/ensiklopedia/memori-episodik/). Langkah dasarnya adalah mengumpulkan data seminimal mungkin, membatasi siapa dan apa yang boleh membacanya ([hak akses minimum](/ensiklopedia/hak-akses-minimum/)), menyamarkan atau menghapus data sebelum disimpan di log, dan mematuhi kewajiban hukum yang berlaku.
