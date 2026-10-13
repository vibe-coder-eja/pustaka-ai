---
title: "Rantai Prompt"
aliases:
  - "Prompt chaining"
  - "AI Chains"
  - "Chaining"
summary: "Teknik memecah tugas besar menjadi beberapa langkah prompt berurutan, di mana keluaran satu langkah menjadi masukan langkah berikutnya."
category: ai-agentik
related:
  - workflow-ai-agentik
  - prompt-engineering
  - orkestrasi-agent
  - prompt-sistem
  - agent-loop
sources:
  - title: "Wu, Terry & Cai, “AI Chains: Transparent and Controllable Human-AI Interaction by Chaining Large Language Model Prompts”, arXiv:2110.01691 (4 Oktober 2021)"
    url: https://arxiv.org/abs/2110.01691
  - title: "Anthropic, “Building effective agents” (19 Desember 2024)"
    url: https://www.anthropic.com/engineering/building-effective-agents
level: dasar
status: ditinjau
updated: 2026-10-13
---

## Gagasan

Satu prompt yang diminta mengerjakan semuanya sekaligus sering menghasilkan jawaban yang sulit dikendalikan. Rantai prompt memecah pekerjaan menjadi langkah-langkah kecil. Contohnya: ringkas dokumen, ekstrak poin penting dari ringkasan, lalu tulis surel berdasarkan poin tersebut. Tiap langkah punya prompt sendiri, dan keluarannya diteruskan ke langkah berikutnya.

## Hasil studi pengguna

Wu, Terry & Cai (Oktober 2021) memperkenalkan konsep merangkai langkah-langkah LLM dan mendefinisikan sejumlah operasi dasar untuk menyusun rantai. Dalam studi dengan 20 orang, rantai tidak hanya meningkatkan mutu hasil tugas. Peserta juga merasa sistem jauh lebih transparan, lebih mudah dikendalikan, dan lebih terasa sebagai kolaborasi. Mereka bisa melihat dan mengubah hasil antara, membandingkan strategi alternatif, dan melacak keluaran yang tidak terduga ke langkah penyebabnya.

## Sebagai pola workflow

Anthropic (Desember 2024) menguraikan prompt chaining sebagai pola [workflow](/ensiklopedia/workflow-ai-agentik/) pertama. Alurnya ditetapkan oleh kode, bukan diputuskan model, sehingga mudah diuji. Di antara dua langkah dapat disisipkan pemeriksaan terprogram untuk memastikan proses masih di jalur yang benar. Pola ini cocok untuk tugas yang dapat dipecah dengan rapi menjadi sub-tugas tetap, dengan imbalan latensi sedikit lebih tinggi demi akurasi yang lebih baik. Bila langkahnya tidak bisa ditentukan sebelumnya, rancangan berpindah ke [orkestrasi](/ensiklopedia/orkestrasi-agent/) dinamis atau [agent](/ensiklopedia/agent/).
