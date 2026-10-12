# Katalog Skills Hermes Agent

> Snapshot katalog: 12 Oktober 2026 · versi kode `7cc3fb8`. Hanya skill resmi dari repositori Hermes Agent milik Nous Research: 58 skill bawaan dan 152 skill opsional resmi. Skill komunitas pihak ketiga dan skill pribadi tidak dimuat.

## Cara membaca

Skills dikelompokkan berdasarkan bidang penggunaan. **Bawaan** berarti ikut terpasang bersama Hermes Agent; **Resmi opsional** berarti dirawat oleh Nous Research tetapi harus dipasang sendiri. Setiap entri menautkan ke kode sumbernya di GitHub agar dapat diperiksa sebelum dipakai. Nama skill dibiarkan sesuai aslinya; deskripsi diterjemahkan ke bahasa Indonesia. Skill resmi yang dirancang untuk menembus pengaman model atau perlindungan anti-bot tidak dimuat. Periksa dokumentasi Hermes Agent terbaru karena isi repositori terus berubah.

## Daftar lengkap

### apple

#### `apple-notes`

- **Deskripsi:** Mengelola Apple Notes lewat CLI memo: membuat, mencari, mengedit.
- **Tingkat:** Bawaan
- **Platform:** macos
- **Tag:** Notes, Apple, macOS, note-taking
- **Sumber:** [skills/apple/apple-notes/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/apple/apple-notes/SKILL.md)

#### `apple-reminders`

- **Deskripsi:** Apple Reminders lewat remindctl: menambah, melihat, menyelesaikan.
- **Tingkat:** Bawaan
- **Platform:** macos
- **Tag:** Reminders, tasks, todo, macOS, Apple
- **Sumber:** [skills/apple/apple-reminders/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/apple/apple-reminders/SKILL.md)

#### `findmy`

- **Deskripsi:** Melacak perangkat Apple dan AirTag lewat FindMy.app di macOS.
- **Tingkat:** Bawaan
- **Platform:** macos
- **Tag:** FindMy, AirTag, location, tracking, macOS, Apple
- **Sumber:** [skills/apple/findmy/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/apple/findmy/SKILL.md)

#### `imessage`

- **Deskripsi:** Mengirim dan menerima iMessage/SMS lewat CLI imsg di macOS.
- **Tingkat:** Bawaan
- **Platform:** macos
- **Tag:** iMessage, SMS, messaging, macOS, Apple
- **Sumber:** [skills/apple/imessage/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/apple/imessage/SKILL.md)

### autonomous-ai-agents

#### `agent-merge-conflict-arbiter`

- **Deskripsi:** Penengah netral untuk konflik penggabungan (merge) antara dua agen.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** Multi-Agent, Git, Merge-Conflict, Kanban, Arbitration
- **Sumber:** [optional-skills/autonomous-ai-agents/agent-merge-conflict-arbiter/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/autonomous-ai-agents/agent-merge-conflict-arbiter/SKILL.md)

#### `antigravity-cli`

- **Deskripsi:** Mengoperasikan Antigravity CLI (agy): plugin, autentikasi, sandbox.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** Coding-Agent, Antigravity, CLI, Auth, Plugins, Sandbox
- **Sumber:** [optional-skills/autonomous-ai-agents/antigravity-cli/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/autonomous-ai-agents/antigravity-cli/SKILL.md)

#### `blackbox`

- **Deskripsi:** Mendelegasikan tugas pemrograman ke CLI multi-model Blackbox AI.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** Coding-Agent, Blackbox, Multi-Agent, Judge, Multi-Model
- **Sumber:** [optional-skills/autonomous-ai-agents/blackbox/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/autonomous-ai-agents/blackbox/SKILL.md)

#### `claude-code`

- **Deskripsi:** Mendelegasikan pemrograman ke Claude Code CLI (fitur, PR).
- **Tingkat:** Bawaan
- **Platform:** linux, macos, windows
- **Tag:** Coding-Agent, Claude, Anthropic, Code-Review, Refactoring, PTY, Automation
- **Sumber:** [skills/autonomous-ai-agents/claude-code/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/autonomous-ai-agents/claude-code/SKILL.md)

#### `codex`

- **Deskripsi:** Mendelegasikan pemrograman ke OpenAI Codex CLI (fitur, PR).
- **Tingkat:** Bawaan
- **Platform:** linux, macos, windows
- **Tag:** Coding-Agent, Codex, OpenAI, Code-Review, Refactoring
- **Sumber:** [skills/autonomous-ai-agents/codex/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/autonomous-ai-agents/codex/SKILL.md)

#### `computer-use`

- **Deskripsi:** Mengendalikan desktop dengan prioritas latar belakang; naik ke layar depan saat diperlukan.
- **Tingkat:** Bawaan
- **Platform:** macos, windows, linux
- **Tag:** computer-use, desktop, automation, gui, cross-platform
- **Sumber:** [skills/autonomous-ai-agents/computer-use/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/autonomous-ai-agents/computer-use/SKILL.md)

#### `dynamic-workflow`

- **Deskripsi:** Perencanaan fan-out dalam kode, verifikasi adversarial, dan gelombang kerja.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** orchestration, fan-out, subagents, delegation, verification, migration, audit, research, campaign
- **Sumber:** [optional-skills/autonomous-ai-agents/dynamic-workflow/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/autonomous-ai-agents/dynamic-workflow/SKILL.md)

#### `grok`

- **Deskripsi:** Mendelegasikan pemrograman ke xAI Grok Build CLI (fitur, PR).
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** Coding-Agent, Grok, xAI, Code-Review, Refactoring, Automation
- **Sumber:** [optional-skills/autonomous-ai-agents/grok/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/autonomous-ai-agents/grok/SKILL.md)

#### `hermes-agent`

- **Deskripsi:** Memakai, mengonfigurasi, menata tema, memperluas, dan mengorkestrasi Hermes Agent.
- **Tingkat:** Bawaan
- **Platform:** linux, macos, windows
- **Tag:** hermes, setup, configuration, multi-agent, spawning, cli, gateway, bots, bot-mode, features, themes, skins, desktop-plugins, tui-widgets, petdex, development
- **Sumber:** [skills/autonomous-ai-agents/hermes-agent/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/autonomous-ai-agents/hermes-agent/SKILL.md)

#### `honcho`

- **Deskripsi:** Mengonfigurasi dan memecahkan masalah memori Honcho untuk Hermes.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** Honcho, Memory, Profiles, Observation, Dialectic, User-Modeling, Session-Summary
- **Sumber:** [optional-skills/autonomous-ai-agents/honcho/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/autonomous-ai-agents/honcho/SKILL.md)

#### `opencode`

- **Deskripsi:** Mendelegasikan pemrograman ke OpenCode CLI (fitur, tinjauan PR).
- **Tingkat:** Bawaan
- **Platform:** linux, macos, windows
- **Tag:** Coding-Agent, OpenCode, Autonomous, Refactoring, Code-Review
- **Sumber:** [skills/autonomous-ai-agents/opencode/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/autonomous-ai-agents/opencode/SKILL.md)

#### `openhands`

- **Deskripsi:** Mendelegasikan pemrograman ke OpenHands CLI (tidak terikat model, LiteLLM).
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos
- **Tag:** Coding-Agent, OpenHands, Model-Agnostic, LiteLLM
- **Sumber:** [optional-skills/autonomous-ai-agents/openhands/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/autonomous-ai-agents/openhands/SKILL.md)

### blockchain

#### `evm`

- **Deskripsi:** Klien EVM hanya-baca: dompet, token, gas di 8 jaringan.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** EVM, Ethereum, BNB, BSC, Base, Arbitrum, Polygon, Optimism, Avalanche, zkSync, Blockchain, Crypto, Web3, DeFi, NFT, ENS, Whale, Security
- **Sumber:** [optional-skills/blockchain/evm/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/blockchain/evm/SKILL.md)

#### `hyperliquid`

- **Deskripsi:** Data pasar Hyperliquid, riwayat akun, dan peninjauan perdagangan.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** Hyperliquid, Blockchain, Crypto, Trading, Perpetuals, Spot, DeFi
- **Sumber:** [optional-skills/blockchain/hyperliquid/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/blockchain/hyperliquid/SKILL.md)

#### `solana`

- **Deskripsi:** Menanyakan dompet, token, transaksi, dan NFT Solana dalam USD.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** Solana, Blockchain, Crypto, Web3, RPC, DeFi, NFT
- **Sumber:** [optional-skills/blockchain/solana/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/blockchain/solana/SKILL.md)

### communication

#### `one-three-one-rule`

- **Deskripsi:** Ringkasan keputusan 1-3-1: satu masalah, tiga opsi, satu pilihan.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** communication, decision-making, proposals, trade-offs
- **Sumber:** [optional-skills/communication/one-three-one-rule/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/communication/one-three-one-rule/SKILL.md)

### creative

#### `ai-presenter-video`

- **Deskripsi:** Membuat video presenter AI terverifikasi dari naskah dan gambar.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos
- **Tag:** video, presenter, avatar, lipsync, tts, captions, creative
- **Sumber:** [optional-skills/creative/ai-presenter-video/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/creative/ai-presenter-video/SKILL.md)

#### `anatomy`

- **Deskripsi:** Menjelaskan sebuah gagasan sebagai gambar mesin isometrik interaktif.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** isometric, svg, webgl, 3d, diagram, explainer, illustration, docs, html, react
- **Sumber:** [optional-skills/creative/anatomy/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/creative/anatomy/SKILL.md)

#### `archify`

- **Deskripsi:** Diagram HTML interaktif tervalidasi, dirawat oleh pengembang aslinya.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** diagram, architecture, workflow, sequence, dataflow, state-machine, mermaid, html, svg
- **Sumber:** [optional-skills/creative/archify/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/creative/archify/SKILL.md)

#### `architecture-diagram`

- **Deskripsi:** Diagram arsitektur, cloud, dan infrastruktur bertema gelap dalam SVG berbasis HTML.
- **Tingkat:** Bawaan
- **Platform:** linux, macos, windows
- **Tag:** architecture, diagrams, SVG, HTML, visualization, infrastructure, cloud
- **Sumber:** [skills/creative/architecture-diagram/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/creative/architecture-diagram/SKILL.md)

#### `ascii-art`

- **Deskripsi:** Seni ASCII: pyfiglet, cowsay, boxes, konversi gambar ke ASCII.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** ASCII, Art, Banners, Creative, Unicode, Text-Art, pyfiglet, figlet, cowsay, boxes
- **Sumber:** [optional-skills/creative/ascii-art/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/creative/ascii-art/SKILL.md)

#### `ascii-video`

- **Deskripsi:** Video ASCII: mengubah video/audio menjadi MP4/GIF ASCII berwarna.
- **Tingkat:** Bawaan
- **Platform:** linux, macos, windows
- **Tag:** ASCII, Video, FFmpeg, Terminal-Art
- **Sumber:** [skills/creative/ascii-video/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/creative/ascii-video/SKILL.md)

#### `audiocraft-audio-generation`

- **Deskripsi:** AudioCraft: MusicGen (teks ke musik) dan AudioGen (teks ke suara).
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos
- **Tag:** Multimodal, Audio Generation, Text-to-Music, Text-to-Audio, MusicGen
- **Sumber:** [optional-skills/creative/audiocraft-audio-generation/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/creative/audiocraft-audio-generation/SKILL.md)

#### `auteur`

- **Deskripsi:** Merancang dan membangun halaman web sinematik berkelas penghargaan.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** web-design, cinematic, scroll-animation, design-system, anti-slop, frontend
- **Sumber:** [optional-skills/creative/auteur/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/creative/auteur/SKILL.md)

#### `baoyu-article-illustrator`

- **Deskripsi:** Ilustrasi artikel dengan konsistensi tipe, gaya, dan palet warna.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** article-illustration, creative, image-generation
- **Sumber:** [optional-skills/creative/baoyu-article-illustrator/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/creative/baoyu-article-illustrator/SKILL.md)

#### `baoyu-comic`

- **Deskripsi:** Komik pengetahuan (知识漫画): edukasi, biografi, tutorial.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** comic, knowledge-comic, creative, image-generation
- **Sumber:** [optional-skills/creative/baoyu-comic/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/creative/baoyu-comic/SKILL.md)

#### `baoyu-infographic`

- **Deskripsi:** Infografik: 21 tata letak x 21 gaya (信息图, 可视化).
- **Tingkat:** Bawaan
- **Platform:** linux, macos, windows
- **Tag:** infographic, visual-summary, creative, image-generation
- **Sumber:** [skills/creative/baoyu-infographic/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/creative/baoyu-infographic/SKILL.md)

#### `brag`

- **Deskripsi:** Video peluncuran proyek lewat Hyperframes, dirawat oleh pengembang aslinya.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** video, launch-video, marketing, hyperframes, motion-graphics, share-copy
- **Sumber:** [optional-skills/creative/brag/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/creative/brag/SKILL.md)

#### `brag-slim`

- **Deskripsi:** Video peluncuran dari proyek atau URL, dirawat oleh pengembang aslinya.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** video, launch-video, marketing, motion-graphics, share-copy
- **Sumber:** [optional-skills/creative/brag-slim/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/creative/brag-slim/SKILL.md)

#### `claude-design`

- **Deskripsi:** Merancang artefak HTML sekali pakai (landing page, dek, prototipe).
- **Tingkat:** Bawaan
- **Platform:** linux, macos, windows
- **Tag:** design, html, prototype, ux, ui, creative, artifact, deck, motion, design-system
- **Sumber:** [skills/creative/claude-design/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/creative/claude-design/SKILL.md)

#### `comfyui`

- **Deskripsi:** Membuat gambar, video, dan audio lewat alur kerja difusi.
- **Tingkat:** Resmi opsional
- **Platform:** macos, linux, windows
- **Tag:** comfyui, image-generation, stable-diffusion, flux, sd3, wan-video, hunyuan-video, creative, generative-ai, video-generation
- **Sumber:** [optional-skills/creative/comfyui/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/creative/comfyui/SKILL.md)

#### `concept-diagrams`

- **Deskripsi:** Membuat visual SVG edukatif yang datar dan minimalis dalam HTML.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** diagrams, svg, visualization, education, physics, chemistry, engineering
- **Sumber:** [optional-skills/creative/concept-diagrams/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/creative/concept-diagrams/SKILL.md)

#### `creative-ideation`

- **Deskripsi:** Menghasilkan ide dengan metode bernama dari praktik kreatif.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** Creative, Ideation, Brainstorming, Methods, Inspiration
- **Sumber:** [optional-skills/creative/creative-ideation/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/creative/creative-ideation/SKILL.md)

#### `design-md`

- **Deskripsi:** Menulis, memvalidasi, dan mengekspor berkas spesifikasi token DESIGN.md dari Google.
- **Tingkat:** Bawaan
- **Platform:** linux, macos, windows
- **Tag:** design, design-system, tokens, ui, accessibility, wcag, tailwind, dtcg, google
- **Sumber:** [skills/creative/design-md/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/creative/design-md/SKILL.md)

#### `draw-your-font`

- **Deskripsi:** Mengubah foto tulisan tangan menjadi font TTF yang dapat dipasang.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** font, handwriting, typography, ttf, woff, vision, creative
- **Sumber:** [optional-skills/creative/draw-your-font/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/creative/draw-your-font/SKILL.md)

#### `dream-loop`

- **Deskripsi:** Membangun adegan 3D memukau lewat putaran kesetiaan terhadap seni konsep.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos
- **Tag:** 3d, games, webgl, threejs, image-generation, visual-fidelity, creative
- **Sumber:** [optional-skills/creative/dream-loop/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/creative/dream-loop/SKILL.md)

#### `excalidraw`

- **Deskripsi:** Diagram JSON gaya gambar tangan Excalidraw (arsitektur, alur, urutan).
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** Excalidraw, Diagrams, Flowcharts, Architecture, Visualization, JSON
- **Sumber:** [optional-skills/creative/excalidraw/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/creative/excalidraw/SKILL.md)

#### `heartmula`

- **Deskripsi:** HeartMuLa: pembuatan lagu ala Suno dari lirik dan tag.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos
- **Tag:** music, audio, generation, ai, heartmula, heartcodec, lyrics, songs
- **Sumber:** [optional-skills/creative/heartmula/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/creative/heartmula/SKILL.md)

#### `humanizer`

- **Deskripsi:** Memanusiakan teks: membuang ciri khas AI dan menambahkan suara yang asli.
- **Tingkat:** Bawaan
- **Platform:** linux, macos, windows
- **Tag:** writing, editing, humanize, anti-ai-slop, voice, prose, text
- **Sumber:** [skills/creative/humanizer/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/creative/humanizer/SKILL.md)

#### `hyperframes`

- **Deskripsi:** Merender video MP4/WebM dari komposisi HTML.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** creative, video, animation, html, gsap, motion-graphics
- **Sumber:** [optional-skills/creative/hyperframes/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/creative/hyperframes/SKILL.md)

#### `impeccable`

- **Deskripsi:** Panduan desain frontend, dirawat oleh pengembang aslinya (impeccable).
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** design, frontend, ui, ux, web-design, anti-slop
- **Sumber:** [optional-skills/creative/impeccable/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/creative/impeccable/SKILL.md)

#### `ip-as-logo`

- **Deskripsi:** Merancang maskot IP imut yang minimalis dan terbaca pada ukuran 32px.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** logo, mascot, branding, ip-character, image-generation, creative
- **Sumber:** [optional-skills/creative/ip-as-logo/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/creative/ip-as-logo/SKILL.md)

#### `kanban-video-orchestrator`

- **Deskripsi:** Merencanakan dan menjalankan jalur produksi video multi-agen.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** video, kanban, multi-agent, orchestration, production-pipeline
- **Sumber:** [optional-skills/creative/kanban-video-orchestrator/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/creative/kanban-video-orchestrator/SKILL.md)

#### `manim-video`

- **Deskripsi:** Animasi Manim CE: video matematika dan algoritma ala 3Blue1Brown.
- **Tingkat:** Bawaan
- **Platform:** linux, macos, windows
- **Tag:** Manim, Animation, Math, Video
- **Sumber:** [skills/creative/manim-video/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/creative/manim-video/SKILL.md)

#### `meme-generation`

- **Deskripsi:** Membuat PNG meme dari templat dengan teks tindih lewat Pillow.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** creative, memes, humor, images
- **Sumber:** [optional-skills/creative/meme-generation/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/creative/meme-generation/SKILL.md)

#### `mono-color`

- **Deskripsi:** Membuat gambar poster cetak editorial satu atau dua tinta.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** design, poster, print, duotone, risograph, editorial, image-generation
- **Sumber:** [optional-skills/creative/mono-color/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/creative/mono-color/SKILL.md)

#### `p5js`

- **Deskripsi:** Sketsa p5.js: seni generatif, shader, interaktif, 3D.
- **Tingkat:** Bawaan
- **Platform:** linux, macos, windows
- **Tag:** creative-coding, generative-art, p5js, canvas, interactive, visualization, webgl, shaders, animation
- **Sumber:** [skills/creative/p5js/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/creative/p5js/SKILL.md)

#### `pixel-art`

- **Deskripsi:** Seni piksel dengan palet era tertentu (NES, Game Boy, PICO-8).
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** creative, pixel-art, arcade, snes, nes, gameboy, retro, image, video
- **Sumber:** [optional-skills/creative/pixel-art/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/creative/pixel-art/SKILL.md)

#### `popular-web-designs`

- **Deskripsi:** 54 sistem desain nyata (Stripe, Linear, Vercel) dalam HTML/CSS.
- **Tingkat:** Bawaan
- **Platform:** linux, macos, windows
- **Sumber:** [skills/creative/popular-web-designs/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/creative/popular-web-designs/SKILL.md)

#### `pretext`

- **Deskripsi:** Membuat demo browser kreatif dengan tata letak teks tanpa DOM.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** creative-coding, typography, pretext, ascii-art, canvas, generative, text-layout, kinetic-typography
- **Sumber:** [optional-skills/creative/pretext/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/creative/pretext/SKILL.md)

#### `simple-english`

- **Deskripsi:** Menulis ulang teks ke Simplified Technical English ASD-STE100.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** writing, documentation, ste, asd-ste100, technical-writing, editing, anti-ai-slop
- **Sumber:** [optional-skills/creative/simple-english/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/creative/simple-english/SKILL.md)

#### `sketch`

- **Deskripsi:** Mockup HTML sekali pakai: 2-3 varian desain untuk dibandingkan.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** sketch, mockup, design, ui, prototype, html, variants, exploration, wireframe, comparison
- **Sumber:** [optional-skills/creative/sketch/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/creative/sketch/SKILL.md)

#### `social-media-content-calendar`

- **Deskripsi:** Merencanakan kampanye multi-platform: dari brief hingga jadwal posting.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** Social-Media, Content-Calendar, Campaigns, Publishing
- **Sumber:** [optional-skills/creative/social-media-content-calendar/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/creative/social-media-content-calendar/SKILL.md)

#### `songwriting-and-ai-music`

- **Deskripsi:** Seni menulis lagu dan prompt musik Suno AI.
- **Tingkat:** Bawaan
- **Platform:** linux, macos, windows
- **Sumber:** [skills/creative/songwriting-and-ai-music/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/creative/songwriting-and-ai-music/SKILL.md)

#### `system-atlas`

- **Deskripsi:** Membangun atlas arsitektur isometrik yang dapat dijelajahi dalam HTML.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos
- **Tag:** architecture, diagrams, isometric, documentation
- **Sumber:** [optional-skills/creative/system-atlas/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/creative/system-atlas/SKILL.md)

#### `tldraw-offline`

- **Deskripsi:** Mengendalikan dan membuat skrip kanvas tldraw offline bersama agen.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** tldraw, canvas, whiteboard, document-script, diagramming
- **Sumber:** [optional-skills/creative/tldraw-offline/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/creative/tldraw-offline/SKILL.md)

#### `unreal-mcp`

- **Deskripsi:** Mengotomatisasi adegan, aktor, dan render di editor Unreal Engine.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** unreal, unreal-engine, ue5, 3d, mcp, scenes, cinematics, lighting, gamedev
- **Sumber:** [optional-skills/creative/unreal-mcp/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/creative/unreal-mcp/SKILL.md)

### data-science

#### `jupyter-notebook`

- **Deskripsi:** Python iteratif lewat kernel Jupyter langsung (hamelnb).
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** jupyter, notebook, repl, data-science, exploration, iterative
- **Sumber:** [optional-skills/data-science/jupyter-notebook/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/data-science/jupyter-notebook/SKILL.md)

### devops

#### `actual-setup`

- **Deskripsi:** Menyiapkan inferensi Actual Computer (actual.inc) di Hermes.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** actual, actual-inc, provider, local-inference, relay, gguf, setup
- **Sumber:** [optional-skills/devops/actual-setup/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/devops/actual-setup/SKILL.md)

#### `docker-management`

- **Deskripsi:** Mengelola kontainer, image, volume, dan Compose Docker.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** docker, containers, devops, infrastructure, compose, images, volumes, networks, debugging
- **Sumber:** [optional-skills/devops/docker-management/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/devops/docker-management/SKILL.md)

#### `hermes-s6-container-supervision`

- **Deskripsi:** Mengubah atau men-debug layanan s6 pada image Docker Hermes.
- **Tingkat:** Resmi opsional
- **Platform:** linux
- **Tag:** docker, s6, supervision, gateway, profiles
- **Sumber:** [optional-skills/devops/hermes-s6-container-supervision/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/devops/hermes-s6-container-supervision/SKILL.md)

#### `inference-sh-cli`

- **Deskripsi:** Menjalankan 150+ aplikasi AI (gambar, video, LLM) lewat CLI inference.sh.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** AI, image-generation, video, LLM, search, inference, FLUX, Veo, Claude
- **Sumber:** [optional-skills/devops/inference-sh-cli/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/devops/inference-sh-cli/SKILL.md)

#### `pinggy-tunnel`

- **Deskripsi:** Terowongan localhost tanpa instalasi lewat SSH dengan Pinggy.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** Pinggy, Tunnel, Networking, SSH, Webhook, Localhost
- **Sumber:** [optional-skills/devops/pinggy-tunnel/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/devops/pinggy-tunnel/SKILL.md)

#### `sdlc-review`

- **Deskripsi:** Meninjau serah terima Kanban dan merutekan hasil yang telah diverifikasi.
- **Tingkat:** Bawaan
- **Platform:** linux, macos, windows
- **Tag:** kanban, review, quality, verification
- **Sumber:** [skills/devops/sdlc-review/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/devops/sdlc-review/SKILL.md)

#### `setup-wizard-generator`

- **Deskripsi:** Membuat wizard bash yang memandu manusia melewati penyiapan manual.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos
- **Tag:** wizard, setup, onboarding, credentials, secrets, migration, bash, human-in-the-loop
- **Sumber:** [optional-skills/devops/setup-wizard-generator/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/devops/setup-wizard-generator/SKILL.md)

#### `watchers`

- **Deskripsi:** Memantau RSS, API JSON, dan GitHub dengan deduplikasi berbasis watermark.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos
- **Tag:** cron, polling, rss, github, http, automation, monitoring
- **Sumber:** [optional-skills/devops/watchers/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/devops/watchers/SKILL.md)

### dogfood

#### `adversarial-ux-test`

- **Deskripsi:** Berperan sebagai pengguna yang memusuhi untuk menemukan dan memilah masalah UX.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** qa, ux, testing, adversarial, dogfood, personas, user-testing
- **Sumber:** [optional-skills/dogfood/adversarial-ux-test/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/dogfood/adversarial-ux-test/SKILL.md)

### email

#### `agentmail`

- **Deskripsi:** Dipakai saat agen membutuhkan kotak masuk email lewat CLI AgentMail.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** Email, CLI, AgentMail, Communication
- **Sumber:** [optional-skills/email/agentmail/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/email/agentmail/SKILL.md)

#### `email-inbox-triage`

- **Deskripsi:** Memilah kotak masuk: memprioritaskan utas, menyusun balasan dengan aman.
- **Tingkat:** Bawaan
- **Platform:** linux, macos, windows
- **Tag:** Email, Inbox, Triage, Replies, Productivity
- **Sumber:** [skills/email/email-inbox-triage/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/email/email-inbox-triage/SKILL.md)

#### `himalaya`

- **Deskripsi:** Himalaya CLI: email IMAP/SMTP dari terminal.
- **Tingkat:** Bawaan
- **Platform:** linux, macos, windows
- **Tag:** Email, IMAP, SMTP, CLI, Communication
- **Sumber:** [skills/email/himalaya/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/email/himalaya/SKILL.md)

### finance

#### `3-statement-model`

- **Deskripsi:** Membangun buku kerja keuangan terintegrasi (laba rugi, neraca, arus kas) di Excel.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** finance, three-statement, income-statement, balance-sheet, cash-flow, excel, openpyxl, modeling
- **Sumber:** [optional-skills/finance/3-statement-model/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/finance/3-statement-model/SKILL.md)

#### `comps-analysis`

- **Deskripsi:** Membangun buku kerja valuasi perusahaan pembanding di Excel.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** finance, valuation, comps, excel, openpyxl, modeling, investment-banking
- **Sumber:** [optional-skills/finance/comps-analysis/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/finance/comps-analysis/SKILL.md)

#### `dcf-model`

- **Deskripsi:** Membangun buku kerja valuasi arus kas terdiskonto (DCF) di Excel.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** finance, valuation, dcf, excel, openpyxl, modeling, investment-banking
- **Sumber:** [optional-skills/finance/dcf-model/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/finance/dcf-model/SKILL.md)

#### `excel-author`

- **Deskripsi:** Membangun buku kerja keuangan yang dapat diaudit tanpa antarmuka lewat openpyxl.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** excel, openpyxl, finance, spreadsheet, modeling
- **Sumber:** [optional-skills/finance/excel-author/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/finance/excel-author/SKILL.md)

#### `lbo-model`

- **Deskripsi:** Membangun buku kerja leveraged buyout dengan IRR/MOIC di Excel.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** finance, valuation, lbo, private-equity, excel, openpyxl, modeling
- **Sumber:** [optional-skills/finance/lbo-model/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/finance/lbo-model/SKILL.md)

#### `merger-model`

- **Deskripsi:** Membangun buku kerja akresi/dilusi merger dan akuisisi di Excel.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** finance, m-and-a, merger, accretion-dilution, excel, openpyxl, modeling, investment-banking
- **Sumber:** [optional-skills/finance/merger-model/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/finance/merger-model/SKILL.md)

#### `polymarket`

- **Deskripsi:** Menanyakan Polymarket: pasar, harga, buku order, riwayat.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Sumber:** [optional-skills/finance/polymarket/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/finance/polymarket/SKILL.md)

#### `pptx-author`

- **Deskripsi:** Membuat dek PowerPoint tanpa antarmuka dengan python-pptx.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** powerpoint, pptx, python-pptx, presentation, finance
- **Sumber:** [optional-skills/finance/pptx-author/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/finance/pptx-author/SKILL.md)

#### `stocks`

- **Deskripsi:** Kuotasi saham, riwayat, pencarian, perbandingan, dan kripto lewat Yahoo.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** Stocks, Finance, Market, Crypto, Investing
- **Sumber:** [optional-skills/finance/stocks/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/finance/stocks/SKILL.md)

### gaming

#### `minecraft-modpack-server`

- **Deskripsi:** Menjalankan server Minecraft bermod (CurseForge, Modrinth).
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos
- **Sumber:** [optional-skills/gaming/minecraft-modpack-server/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/gaming/minecraft-modpack-server/SKILL.md)

#### `pokemon-player`

- **Deskripsi:** Memainkan Pokemon lewat emulator tanpa antarmuka dan pembacaan RAM.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Sumber:** [optional-skills/gaming/pokemon-player/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/gaming/pokemon-player/SKILL.md)

### health

#### `fitness-nutrition`

- **Deskripsi:** Perencanaan latihan, makro nutrisi, dan metrik tubuh lewat wger/USDA.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** health, fitness, nutrition, gym, workout, diet, exercise
- **Sumber:** [optional-skills/health/fitness-nutrition/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/health/fitness-nutrition/SKILL.md)

#### `neuroskill-bci`

- **Deskripsi:** Memakai status kognitif dan suasana hati BCI langsung dari NeuroSkill.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** BCI, neurofeedback, health, focus, EEG, cognitive-state, biometrics, neuroskill
- **Sumber:** [optional-skills/health/neuroskill-bci/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/health/neuroskill-bci/SKILL.md)

### mcp

#### `fastmcp`

- **Deskripsi:** Membangun, menguji, dan men-deploy server MCP berbasis Python.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** MCP, FastMCP, Python, Tools, Resources, Prompts, Deployment
- **Sumber:** [optional-skills/mcp/fastmcp/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/mcp/fastmcp/SKILL.md)

#### `mcp-oauth-remote-gateway`

- **Deskripsi:** OAuth manual untuk server MCP jarak jauh pada gateway tanpa antarmuka.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos
- **Tag:** MCP, OAuth, PKCE, Remote-Deployment
- **Sumber:** [optional-skills/mcp/mcp-oauth-remote-gateway/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/mcp/mcp-oauth-remote-gateway/SKILL.md)

#### `mcporter`

- **Deskripsi:** Mendaftar, mengautentikasi, dan memanggil server/alat MCP dari terminal.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** MCP, Tools, API, Integrations, Interop
- **Sumber:** [optional-skills/mcp/mcporter/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/mcp/mcporter/SKILL.md)

### media

#### `gif-search`

- **Deskripsi:** Mencari dan mengunduh GIF dari Tenor lewat curl dan jq.
- **Tingkat:** Bawaan
- **Platform:** linux, macos, windows
- **Tag:** GIF, Media, Search, Tenor, API
- **Sumber:** [skills/media/gif-search/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/media/gif-search/SKILL.md)

#### `songsee`

- **Deskripsi:** Spektrogram dan fitur audio (mel, chroma, MFCC) lewat CLI.
- **Tingkat:** Bawaan
- **Platform:** linux, macos, windows
- **Tag:** Audio, Visualization, Spectrogram, Music, Analysis
- **Sumber:** [skills/media/songsee/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/media/songsee/SKILL.md)

#### `youtube-content`

- **Deskripsi:** Mengubah transkrip YouTube menjadi ringkasan, utas, dan blog.
- **Tingkat:** Bawaan
- **Platform:** linux, macos, windows
- **Tag:** YouTube, Video, Transcripts, Media
- **Sumber:** [skills/media/youtube-content/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/media/youtube-content/SKILL.md)

### migration

#### `openclaw-migration`

- **Deskripsi:** Mengimpor penyiapan OpenClaw (memori, skill) ke Hermes.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** Migration, OpenClaw, Hermes, Memory, Persona, Import
- **Sumber:** [optional-skills/migration/openclaw-migration/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/migration/openclaw-migration/SKILL.md)

### mlops

#### `accelerate`

- **Deskripsi:** Menjalankan pelatihan PyTorch di banyak GPU dengan perubahan minimal.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** Distributed Training, HuggingFace, Accelerate, DeepSpeed, FSDP, Mixed Precision, PyTorch, DDP, Unified API, Simple
- **Sumber:** [optional-skills/mlops/accelerate/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/mlops/accelerate/SKILL.md)

#### `axolotl`

- **Deskripsi:** Axolotl: fine-tuning LLM berbasis YAML (LoRA, DPO, GRPO).
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos
- **Tag:** Fine-Tuning, Axolotl, LLM, LoRA, QLoRA, DPO, KTO, ORPO, GRPO, YAML, HuggingFace, DeepSpeed, Multimodal
- **Sumber:** [optional-skills/mlops/training/axolotl/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/mlops/training/axolotl/SKILL.md)

#### `chroma`

- **Deskripsi:** Basis data embedding untuk RAG dan pencarian semantik.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** RAG, Chroma, Vector Database, Embeddings, Semantic Search, Open Source, Self-Hosted, Document Retrieval, Metadata Filtering
- **Sumber:** [optional-skills/mlops/chroma/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/mlops/chroma/SKILL.md)

#### `clip`

- **Deskripsi:** Klasifikasi gambar zero-shot dan pencarian gambar-teks.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** Multimodal, CLIP, Vision-Language, Zero-Shot, Image Classification, OpenAI, Image Search, Cross-Modal Retrieval, Content Moderation
- **Sumber:** [optional-skills/mlops/clip/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/mlops/clip/SKILL.md)

#### `dspy`

- **Deskripsi:** DSPy: program model bahasa deklaratif, optimasi prompt otomatis, RAG.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** Prompt Engineering, DSPy, Declarative Programming, RAG, Agents, Prompt Optimization, LM Programming, Stanford NLP, Automatic Optimization, Modular AI
- **Sumber:** [optional-skills/mlops/research/dspy/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/mlops/research/dspy/SKILL.md)

#### `evaluating-llms-harness`

- **Deskripsi:** lm-eval-harness: tolok ukur LLM (MMLU, GSM8K, dll.).
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos
- **Tag:** Evaluation, LM Evaluation Harness, Benchmarking, MMLU, HumanEval, GSM8K, EleutherAI, Model Quality, Academic Benchmarks, Industry Standard
- **Sumber:** [optional-skills/mlops/evaluation/evaluating-llms-harness/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/mlops/evaluation/evaluating-llms-harness/SKILL.md)

#### `faiss`

- **Deskripsi:** Pencarian kemiripan vektor cepat pada skala miliaran.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos
- **Tag:** RAG, FAISS, Similarity Search, Vector Search, Facebook AI, GPU Acceleration, Billion-Scale, K-NN, HNSW, High Performance, Large Scale
- **Sumber:** [optional-skills/mlops/faiss/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/mlops/faiss/SKILL.md)

#### `flash-attention`

- **Deskripsi:** Mempercepat pelatihan dan inferensi transformer berurutan panjang.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos
- **Tag:** Optimization, Flash Attention, Attention Optimization, Memory Efficiency, Speed Optimization, Long Context, PyTorch, SDPA, H100, FP8, Transformers
- **Sumber:** [optional-skills/mlops/flash-attention/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/mlops/flash-attention/SKILL.md)

#### `guidance`

- **Deskripsi:** Membatasi keluaran LLM dengan tata bahasa; menjamin JSON valid.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** Prompt Engineering, Guidance, Constrained Generation, Structured Output, JSON Validation, Grammar, Microsoft Research, Format Enforcement, Multi-Step Workflows
- **Sumber:** [optional-skills/mlops/guidance/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/mlops/guidance/SKILL.md)

#### `huggingface-hub`

- **Deskripsi:** CLI hf HuggingFace: mencari, mengunduh, dan mengunggah model serta dataset.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Sumber:** [optional-skills/mlops/models/huggingface-hub/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/mlops/models/huggingface-hub/SKILL.md)

#### `huggingface-tokenizers`

- **Deskripsi:** Tokenisasi BPE/WordPiece cepat dan pelatihan kosakata khusus.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** Tokenization, HuggingFace, BPE, WordPiece, Unigram, Fast Tokenization, Rust, Custom Tokenizer, Alignment Tracking, Production
- **Sumber:** [optional-skills/mlops/huggingface-tokenizers/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/mlops/huggingface-tokenizers/SKILL.md)

#### `instructor`

- **Deskripsi:** Keluaran LLM terstruktur yang divalidasi dengan Pydantic.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** Prompt Engineering, Instructor, Structured Output, Pydantic, Data Extraction, JSON Parsing, Type Safety, Validation, Streaming, OpenAI, Anthropic
- **Sumber:** [optional-skills/mlops/instructor/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/mlops/instructor/SKILL.md)

#### `lambda-labs`

- **Deskripsi:** Instans cloud GPU sesuai permintaan untuk pelatihan ML.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** Infrastructure, GPU Cloud, Training, Inference, Lambda Labs
- **Sumber:** [optional-skills/mlops/lambda-labs/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/mlops/lambda-labs/SKILL.md)

#### `llama-cpp`

- **Deskripsi:** Inferensi GGUF lokal dengan llama.cpp dan penemuan model di HF Hub.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** llama.cpp, GGUF, Quantization, Hugging Face Hub, CPU Inference, Apple Silicon, Edge Deployment, AMD GPUs, Intel GPUs, NVIDIA, URL-first
- **Sumber:** [optional-skills/mlops/inference/llama-cpp/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/mlops/inference/llama-cpp/SKILL.md)

#### `llava`

- **Deskripsi:** Percakapan visi-bahasa: VQA, pembuatan keterangan gambar, dialog gambar.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** LLaVA, Vision-Language, Multimodal, Visual Question Answering, Image Chat, CLIP, Vicuna, Conversational AI, Instruction Tuning, VQA
- **Sumber:** [optional-skills/mlops/llava/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/mlops/llava/SKILL.md)

#### `modal`

- **Deskripsi:** Cloud GPU serverless untuk pekerjaan ML dan API model.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** Infrastructure, Serverless, GPU, Cloud, Deployment, Modal
- **Sumber:** [optional-skills/mlops/modal/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/mlops/modal/SKILL.md)

#### `nemo-curator`

- **Deskripsi:** Kurasi data pelatihan LLM: deduplikasi, filter, penyamaran PII.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos
- **Tag:** Data Processing, NeMo Curator, Data Curation, GPU Acceleration, Deduplication, Quality Filtering, NVIDIA, RAPIDS, PII Redaction, Multimodal, LLM Training Data
- **Sumber:** [optional-skills/mlops/nemo-curator/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/mlops/nemo-curator/SKILL.md)

#### `outlines`

- **Deskripsi:** Outlines: pembuatan keluaran LLM terstruktur (JSON/regex/Pydantic).
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** Prompt Engineering, Outlines, Structured Generation, JSON Schema, Pydantic, Local Models, Grammar-Based Generation, vLLM, Transformers, Type Safety
- **Sumber:** [optional-skills/mlops/inference/outlines/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/mlops/inference/outlines/SKILL.md)

#### `peft`

- **Deskripsi:** Fine-tuning LLM besar dengan LoRA pada memori GPU terbatas.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** Fine-Tuning, PEFT, LoRA, QLoRA, Parameter-Efficient, Adapters, Low-Rank, Memory Optimization, Multi-Adapter
- **Sumber:** [optional-skills/mlops/peft/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/mlops/peft/SKILL.md)

#### `pinecone`

- **Deskripsi:** Basis data vektor terkelola untuk RAG dan pencarian di produksi.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** RAG, Pinecone, Vector Database, Managed Service, Serverless, Hybrid Search, Production, Auto-Scaling, Low Latency, Recommendations
- **Sumber:** [optional-skills/mlops/pinecone/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/mlops/pinecone/SKILL.md)

#### `pytorch-fsdp`

- **Deskripsi:** Pelatihan paralel data terbagi penuh (FSDP) untuk model besar.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos
- **Tag:** Distributed Training, PyTorch, FSDP, Data Parallel, Sharding, Mixed Precision, CPU Offloading, FSDP2, Large-Scale Training
- **Sumber:** [optional-skills/mlops/pytorch-fsdp/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/mlops/pytorch-fsdp/SKILL.md)

#### `pytorch-lightning`

- **Deskripsi:** Putaran pelatihan yang rapi dengan dukungan terdistribusi bawaan.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** PyTorch Lightning, Training Framework, Distributed Training, DDP, FSDP, DeepSpeed, High-Level API, Callbacks, Best Practices, Scalable
- **Sumber:** [optional-skills/mlops/pytorch-lightning/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/mlops/pytorch-lightning/SKILL.md)

#### `qdrant`

- **Deskripsi:** Mesin pencarian vektor untuk sistem RAG di produksi.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** RAG, Vector Search, Qdrant, Semantic Search, Embeddings, Similarity Search, HNSW, Production, Distributed
- **Sumber:** [optional-skills/mlops/qdrant/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/mlops/qdrant/SKILL.md)

#### `saelens`

- **Deskripsi:** Melatih sparse autoencoder untuk menafsirkan fitur model.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** Sparse Autoencoders, SAE, Mechanistic Interpretability, Feature Discovery, Superposition
- **Sumber:** [optional-skills/mlops/saelens/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/mlops/saelens/SKILL.md)

#### `segment-anything-model`

- **Deskripsi:** SAM: segmentasi gambar zero-shot lewat titik, kotak, dan masker.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** Multimodal, Image Segmentation, Computer Vision, SAM, Zero-Shot
- **Sumber:** [optional-skills/mlops/models/segment-anything-model/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/mlops/models/segment-anything-model/SKILL.md)

#### `serving-llms-vllm`

- **Deskripsi:** vLLM: penyajian LLM throughput tinggi, API OpenAI, kuantisasi.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos
- **Tag:** vLLM, Inference Serving, PagedAttention, Continuous Batching, High Throughput, Production, OpenAI API, Quantization, Tensor Parallelism
- **Sumber:** [optional-skills/mlops/inference/serving-llms-vllm/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/mlops/inference/serving-llms-vllm/SKILL.md)

#### `simpo`

- **Deskripsi:** Penyelarasan preferensi tanpa referensi, lebih sederhana daripada DPO.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** Post-Training, SimPO, Preference Optimization, Alignment, DPO Alternative, Reference-Free, LLM Alignment, Efficient Training
- **Sumber:** [optional-skills/mlops/simpo/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/mlops/simpo/SKILL.md)

#### `slime`

- **Deskripsi:** Pasca-pelatihan RL untuk LLM dengan Megatron dan SGLang.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos
- **Tag:** Reinforcement Learning, Megatron-LM, SGLang, GRPO, Post-Training, GLM
- **Sumber:** [optional-skills/mlops/slime/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/mlops/slime/SKILL.md)

#### `stable-diffusion`

- **Deskripsi:** Pembuatan gambar dari teks, inpainting, dan img2img.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** Image Generation, Stable Diffusion, Diffusers, Text-to-Image, Multimodal, Computer Vision
- **Sumber:** [optional-skills/mlops/stable-diffusion/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/mlops/stable-diffusion/SKILL.md)

#### `tensorrt-llm`

- **Deskripsi:** Inferensi LLM throughput tinggi pada GPU NVIDIA.
- **Tingkat:** Resmi opsional
- **Platform:** linux
- **Tag:** Inference Serving, TensorRT-LLM, NVIDIA, Inference Optimization, High Throughput, Low Latency, Production, FP8, INT4, In-Flight Batching, Multi-GPU
- **Sumber:** [optional-skills/mlops/tensorrt-llm/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/mlops/tensorrt-llm/SKILL.md)

#### `torchtitan`

- **Deskripsi:** Pra-pelatihan LLM berskala besar dengan paralelisme 4D PyTorch.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos
- **Tag:** Model Architecture, Distributed Training, TorchTitan, FSDP2, Tensor Parallel, Pipeline Parallel, Context Parallel, Float8, Llama, Pretraining
- **Sumber:** [optional-skills/mlops/torchtitan/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/mlops/torchtitan/SKILL.md)

#### `trl-fine-tuning`

- **Deskripsi:** TRL: SFT, DPO, GRPO, RLOO, dan pemodelan reward untuk RLHF pada LLM.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** Post-Training, TRL, Reinforcement Learning, Fine-Tuning, SFT, DPO, GRPO, RLOO, RLHF, Preference Alignment, HuggingFace
- **Sumber:** [optional-skills/mlops/training/trl-fine-tuning/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/mlops/training/trl-fine-tuning/SKILL.md)

#### `unsloth`

- **Deskripsi:** Unsloth: fine-tuning LoRA/QLoRA 2-5 kali lebih cepat dengan VRAM lebih sedikit.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos
- **Tag:** Fine-Tuning, Unsloth, Fast Training, LoRA, QLoRA, Memory-Efficient, Optimization, Llama, Mistral, Gemma, Qwen
- **Sumber:** [optional-skills/mlops/training/unsloth/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/mlops/training/unsloth/SKILL.md)

#### `weights-and-biases`

- **Deskripsi:** W&B: mencatat eksperimen ML, sweep, registri model, dasbor.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** MLOps, Weights And Biases, WandB, Experiment Tracking, Hyperparameter Tuning, Model Registry, Collaboration, Real-Time Visualization, PyTorch, TensorFlow, HuggingFace
- **Sumber:** [optional-skills/mlops/evaluation/weights-and-biases/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/mlops/evaluation/weights-and-biases/SKILL.md)

#### `whisper`

- **Deskripsi:** Mentranskripsi dan menerjemahkan ucapan dalam 99 bahasa.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos
- **Tag:** Whisper, Speech Recognition, ASR, Multimodal, Multilingual, OpenAI, Speech-To-Text, Transcription, Translation, Audio Processing
- **Sumber:** [optional-skills/mlops/whisper/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/mlops/whisper/SKILL.md)

### note-taking

#### `obsidian`

- **Deskripsi:** Membaca, mencari, membuat, dan mengedit catatan di vault Obsidian.
- **Tingkat:** Bawaan
- **Platform:** linux, macos, windows
- **Tag:** Obsidian, Notes, Markdown, Vault
- **Sumber:** [skills/note-taking/obsidian/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/note-taking/obsidian/SKILL.md)

### payments

#### `mpp-agent`

- **Deskripsi:** Membayar API HTTP 402 lewat Machine Payments Protocol (MPP).
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos
- **Tag:** Payments, MPP, HTTP-402, Tempo, Stripe
- **Sumber:** [optional-skills/payments/mpp-agent/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/payments/mpp-agent/SKILL.md)

#### `stripe-link-cli`

- **Deskripsi:** Pembayaran agen lewat Stripe Link: kartu, SPT, persetujuan.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos
- **Tag:** Payments, Stripe, Link, Checkout, MPP
- **Sumber:** [optional-skills/payments/stripe-link-cli/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/payments/stripe-link-cli/SKILL.md)

#### `stripe-projects`

- **Deskripsi:** Menyiapkan layanan SaaS dan menyinkronkan kredensial lewat Stripe Projects.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos
- **Tag:** Payments, Stripe, Projects, Provisioning, Infrastructure
- **Sumber:** [optional-skills/payments/stripe-projects/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/payments/stripe-projects/SKILL.md)

### productivity

#### `airtable`

- **Deskripsi:** REST API Airtable lewat curl. CRUD rekaman, filter, upsert.
- **Tingkat:** Bawaan
- **Platform:** linux, macos, windows
- **Tag:** Airtable, Productivity, Database, API
- **Sumber:** [skills/productivity/airtable/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/productivity/airtable/SKILL.md)

#### `box`

- **Deskripsi:** Box mengelola berkas cloud, berbagi, pencarian, dan metadata.
- **Tingkat:** Bawaan
- **Platform:** linux, macos, windows
- **Tag:** Box, Productivity, Cloud Storage, Collaboration, Metadata, Content Extraction, CLI, SDK
- **Sumber:** [skills/productivity/box/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/productivity/box/SKILL.md)

#### `canvas`

- **Deskripsi:** Mengambil mata kuliah dan tugas Canvas LMS lewat token API.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** Canvas, LMS, Education, Courses, Assignments
- **Sumber:** [optional-skills/productivity/canvas/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/productivity/canvas/SKILL.md)

#### `decision-questionnaire`

- **Deskripsi:** Mengubah keputusan yang sulit dijawab menjadi dokumen kuesioner.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** questionnaire, decision, async, stakeholder, discovery, communication
- **Sumber:** [optional-skills/productivity/decision-questionnaire/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/productivity/decision-questionnaire/SKILL.md)

#### `document-to-action-items`

- **Deskripsi:** Mengekstrak kewajiban, tenggat, dan tugas bersitasi dari dokumen.
- **Tingkat:** Bawaan
- **Platform:** linux, macos, windows
- **Tag:** Documents, OCR, Action-Items, Deadlines, Extraction
- **Sumber:** [skills/productivity/document-to-action-items/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/productivity/document-to-action-items/SKILL.md)

#### `docx`

- **Deskripsi:** Membuat, membaca, mengedit, membuat templat, dan meninjau berkas Word .docx.
- **Tingkat:** Bawaan
- **Platform:** linux, macos, windows
- **Tag:** word, docx, documents, office, templates, revisions, comments
- **Sumber:** [skills/productivity/docx/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/productivity/docx/SKILL.md)

#### `first-task`

- **Deskripsi:** Menjalankan percakapan tugas pertama yang diserahkan oleh penyiapan.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** onboarding, first-run, desktop, handoff
- **Sumber:** [optional-skills/productivity/first-task/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/productivity/first-task/SKILL.md)

#### `google-workspace`

- **Deskripsi:** Gmail, Kalender, Drive, Docs, Sheets lewat CLI gws atau Python.
- **Tingkat:** Bawaan
- **Platform:** linux, macos, windows
- **Tag:** Google, Gmail, Calendar, Drive, Sheets, Docs, Contacts, Email, OAuth
- **Sumber:** [skills/productivity/google-workspace/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/productivity/google-workspace/SKILL.md)

#### `here-now`

- **Deskripsi:** Menerbitkan situs ke {slug}.here.now dan menyimpan berkas di Drives.
- **Tingkat:** Resmi opsional
- **Platform:** macos, linux
- **Tag:** here.now, herenow, publish, deploy, hosting, static-site, web, share, URL, drive, storage
- **Sumber:** [optional-skills/productivity/here-now/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/productivity/here-now/SKILL.md)

#### `initiate-setup`

- **Deskripsi:** Menjalankan percakapan penyiapan pertama di aplikasi desktop Hermes.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** onboarding, setup, first-run, desktop, handoff
- **Sumber:** [optional-skills/productivity/initiate-setup/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/productivity/initiate-setup/SKILL.md)

#### `live-dashboard`

- **Deskripsi:** Membangun dasbor yang memperbarui diri dari sumber langsung.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** dashboards, monitoring, status, automation, reporting
- **Sumber:** [optional-skills/productivity/live-dashboard/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/productivity/live-dashboard/SKILL.md)

#### `maps`

- **Deskripsi:** Geokode, titik minat, rute, dan zona waktu lewat OpenStreetMap/OSRM.
- **Tingkat:** Bawaan
- **Platform:** linux, macos, windows
- **Tag:** maps, geocoding, places, routing, distance, directions, nearby, location, openstreetmap, nominatim, overpass, osrm
- **Sumber:** [skills/productivity/maps/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/productivity/maps/SKILL.md)

#### `meeting-action-items`

- **Deskripsi:** Mengubah catatan rapat menjadi keputusan, penanggung jawab, dan tiket bersitasi.
- **Tingkat:** Bawaan
- **Platform:** linux, macos, windows
- **Tag:** Meetings, Action-Items, Follow-Up, Productivity
- **Sumber:** [skills/productivity/meeting-action-items/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/productivity/meeting-action-items/SKILL.md)

#### `memento-flashcards`

- **Deskripsi:** Kartu kilat pengulangan berjeda: membuat, meninjau, kuis, ekspor.
- **Tingkat:** Resmi opsional
- **Platform:** macos, linux
- **Tag:** Education, Flashcards, Spaced Repetition, Learning, Quiz, YouTube
- **Sumber:** [optional-skills/productivity/memento-flashcards/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/productivity/memento-flashcards/SKILL.md)

#### `notion`

- **Deskripsi:** API Notion dan CLI ntn: halaman, basis data, markdown, Workers.
- **Tingkat:** Bawaan
- **Platform:** linux, macos, windows
- **Tag:** Notion, Productivity, Notes, Database, API, CLI, Workers
- **Sumber:** [skills/productivity/notion/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/productivity/notion/SKILL.md)

#### `pdf`

- **Deskripsi:** Berkas PDF: membuat, membaca, menggabung, mengisi, OCR, mengedit teks.
- **Tingkat:** Bawaan
- **Platform:** linux, macos, windows
- **Tag:** pdf, documents, forms, ocr, text-extraction, reportlab, pypdf, pdfplumber, pymupdf, marker
- **Sumber:** [skills/productivity/pdf/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/productivity/pdf/SKILL.md)

#### `powerpoint`

- **Deskripsi:** Membuat, membaca, dan mengedit dek .pptx dengan python-pptx.
- **Tingkat:** Bawaan
- **Platform:** linux, macos, windows
- **Tag:** pptx, powerpoint, presentations, slides, office, python-pptx
- **Sumber:** [skills/productivity/powerpoint/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/productivity/powerpoint/SKILL.md)

#### `product-price-monitor`

- **Deskripsi:** Memantau harga produk, tiket, atau listing; memberi peringatan saat mencapai target.
- **Tingkat:** Bawaan
- **Platform:** linux, macos, windows
- **Tag:** Prices, Availability, Shopping, Travel, Alerts
- **Sumber:** [skills/productivity/product-price-monitor/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/productivity/product-price-monitor/SKILL.md)

#### `property-listings`

- **Deskripsi:** Menampilkan listing properti dan sewa sebagai kartu desktop.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** property, rental, real-estate, listings, desktop, cards
- **Sumber:** [optional-skills/productivity/property-listings/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/productivity/property-listings/SKILL.md)

#### `shop`

- **Deskripsi:** Pencarian katalog toko, checkout, pelacakan pesanan, pengembalian.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** Shopping, E-commerce, Shop, Products, Orders, Returns, Checkout, Reorder
- **Sumber:** [optional-skills/productivity/shop/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/productivity/shop/SKILL.md)

#### `shopify`

- **Deskripsi:** Menanyakan API GraphQL Admin/Storefront Shopify lewat curl.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** Shopify, E-commerce, Commerce, API, GraphQL
- **Sumber:** [optional-skills/productivity/shopify/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/productivity/shopify/SKILL.md)

#### `siyuan`

- **Deskripsi:** Menanyakan dan mengedit basis pengetahuan SiYuan lewat API-nya.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** SiYuan, Notes, Knowledge Base, PKM, API
- **Sumber:** [optional-skills/productivity/siyuan/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/productivity/siyuan/SKILL.md)

#### `teams-meeting-pipeline`

- **Deskripsi:** Ringkasan rapat Teams, pemutaran ulang pekerjaan, langganan Graph.
- **Tingkat:** Bawaan
- **Platform:** linux, macos, windows
- **Tag:** Teams, Microsoft Graph, Meetings, Productivity, Operations
- **Sumber:** [skills/productivity/teams-meeting-pipeline/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/productivity/teams-meeting-pipeline/SKILL.md)

#### `telephony`

- **Deskripsi:** Menyediakan nomor Twilio, SMS/MMS, dan panggilan keluar berbasis AI.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** telephony, phone, sms, mms, voice, twilio, bland.ai, vapi, calling, texting
- **Sumber:** [optional-skills/productivity/telephony/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/productivity/telephony/SKILL.md)

#### `weekly-review-planning`

- **Deskripsi:** Reset mingguan: komitmen, pekerjaan macet, rencana pekan depan.
- **Tingkat:** Bawaan
- **Platform:** linux, macos, windows
- **Tag:** Weekly-Review, Planning, Tasks, Calendar, Productivity
- **Sumber:** [skills/productivity/weekly-review-planning/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/productivity/weekly-review-planning/SKILL.md)

#### `xlsx`

- **Deskripsi:** Membuat, membaca, dan mengedit buku kerja Excel .xlsx dan CSV.
- **Tingkat:** Bawaan
- **Platform:** linux, macos, windows
- **Tag:** excel, spreadsheet, xlsx, csv, openpyxl, productivity
- **Sumber:** [skills/productivity/xlsx/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/productivity/xlsx/SKILL.md)

### research

#### `arxiv`

- **Deskripsi:** Mencari makalah arXiv berdasarkan kata kunci, penulis, kategori, atau ID.
- **Tingkat:** Bawaan
- **Platform:** linux, macos, windows
- **Tag:** Research, Arxiv, Papers, Academic, Science, API
- **Sumber:** [skills/research/arxiv/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/research/arxiv/SKILL.md)

#### `bioinformatics`

- **Deskripsi:** Gerbang menuju 400+ skill genomika dan biologi komputasi.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos
- **Tag:** bioinformatics, genomics, sequencing, biology, research, science
- **Sumber:** [optional-skills/research/bioinformatics/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/research/bioinformatics/SKILL.md)

#### `blogwatcher`

- **Deskripsi:** Memantau blog dan umpan RSS/Atom dengan alat blogwatcher-cli.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** RSS, Blogs, Feed-Reader, Monitoring
- **Sumber:** [optional-skills/research/blogwatcher/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/research/blogwatcher/SKILL.md)

#### `competitor-news-monitor`

- **Deskripsi:** Memantau berita penting perusahaan tertentu; ringkasan bersitasi.
- **Tingkat:** Bawaan
- **Platform:** linux, macos, windows
- **Tag:** Competitors, News, Market-Research, Monitoring
- **Sumber:** [skills/research/competitor-news-monitor/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/research/competitor-news-monitor/SKILL.md)

#### `darwinian-evolver`

- **Deskripsi:** Mengevolusi prompt, regex, SQL, dan kode dengan putaran evolusi Imbue.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos
- **Tag:** evolution, optimization, prompt-engineering, research
- **Sumber:** [optional-skills/research/darwinian-evolver/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/research/darwinian-evolver/SKILL.md)

#### `domain-intel`

- **Deskripsi:** Pengintaian pasif subdomain, sertifikat SSL, WHOIS, dan DNS.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** Domains, OSINT, DNS, Research
- **Sumber:** [optional-skills/research/domain-intel/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/research/domain-intel/SKILL.md)

#### `drug-discovery`

- **Deskripsi:** Penemuan obat: pencarian ChEMBL, kemiripan obat, interaksi.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** science, chemistry, pharmacology, research, health
- **Sumber:** [optional-skills/research/drug-discovery/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/research/drug-discovery/SKILL.md)

#### `duckduckgo-search`

- **Deskripsi:** Pencarian web, berita, dan gambar gratis tanpa kunci lewat ddgs.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** search, duckduckgo, web-search, free, fallback
- **Sumber:** [optional-skills/research/duckduckgo-search/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/research/duckduckgo-search/SKILL.md)

#### `gitnexus-explorer`

- **Deskripsi:** Menyajikan antarmuka web graf pengetahuan basis kode yang interaktif.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** gitnexus, code-intelligence, knowledge-graph, visualization
- **Sumber:** [optional-skills/research/gitnexus-explorer/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/research/gitnexus-explorer/SKILL.md)

#### `grounded-citations`

- **Deskripsi:** Mendasarkan jawaban dan dokumen pada sumber yang bersitasi dan dapat diverifikasi.
- **Tingkat:** Bawaan
- **Platform:** linux, macos, windows
- **Tag:** Research, Citations, Grounding, Sources, Web, Reports
- **Sumber:** [skills/research/grounded-citations/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/research/grounded-citations/SKILL.md)

#### `llm-wiki`

- **Deskripsi:** LLM Wiki ala Karpathy: membangun dan menanyakan basis pengetahuan markdown yang saling tertaut.
- **Tingkat:** Bawaan
- **Platform:** linux, macos, windows
- **Tag:** wiki, knowledge-base, research, notes, markdown, rag-alternative
- **Sumber:** [skills/research/llm-wiki/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/research/llm-wiki/SKILL.md)

#### `osint-investigation`

- **Deskripsi:** Menelusuri aliran dana lewat catatan publik dan data sanksi.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** osint, investigation, public-records, sec, sanctions, corporate-registry, property, courts, due-diligence, journalism
- **Sumber:** [optional-skills/research/osint-investigation/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/research/osint-investigation/SKILL.md)

#### `parallel-cli`

- **Deskripsi:** Pencarian web, riset mendalam, dan pengayaan data yang ramah agen.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** Research, Web, Search, Deep-Research, Enrichment, CLI
- **Sumber:** [optional-skills/research/parallel-cli/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/research/parallel-cli/SKILL.md)

#### `pinecone-research`

- **Deskripsi:** RAG agen dan memori jangka panjang dengan Pinecone.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** RAG, Pinecone, Memory, Research, Vector Database, Agent, Retrieval
- **Sumber:** [optional-skills/research/pinecone-research/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/research/pinecone-research/SKILL.md)

#### `qmd`

- **Deskripsi:** Pencarian lokal hibrida atas catatan, dokumen, dan transkrip.
- **Tingkat:** Resmi opsional
- **Platform:** macos, linux
- **Tag:** Search, Knowledge-Base, RAG, Notes, MCP, Local-AI
- **Sumber:** [optional-skills/research/qmd/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/research/qmd/SKILL.md)

#### `research-paper-writing`

- **Deskripsi:** Menulis makalah ML untuk NeurIPS/ICML/ICLR: dari rancangan hingga pengiriman.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos
- **Tag:** Research, Paper Writing, Experiments, ML, AI, NeurIPS, ICML, ICLR, ACL, AAAI, COLM, LaTeX, Citations, Statistical Analysis
- **Sumber:** [optional-skills/research/research-paper-writing/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/research/research-paper-writing/SKILL.md)

#### `rss-feeds`

- **Deskripsi:** Membaca umpan RSS, Atom, JSON; menemukan umpan di balik sebuah halaman.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** RSS, Atom, Feeds, Monitoring, Research, Blogs, Releases
- **Sumber:** [optional-skills/research/rss-feeds/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/research/rss-feeds/SKILL.md)

#### `searxng-search`

- **Deskripsi:** Meta-pencarian gratis tanpa kunci yang menggabungkan 70+ mesin.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos
- **Tag:** search, searxng, meta-search, self-hosted, free, fallback
- **Sumber:** [optional-skills/research/searxng-search/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/research/searxng-search/SKILL.md)

### security

#### `1password`

- **Deskripsi:** Menyiapkan CLI op, masuk, serta membaca atau menyuntikkan rahasia.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** security, secrets, 1password, op, cli
- **Sumber:** [optional-skills/security/1password/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/security/1password/SKILL.md)

#### `oss-forensics`

- **Deskripsi:** Forensik rantai pasokan GitHub: pemulihan, IOC, pelaporan.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** Security, Forensics, GitHub, Supply-Chain
- **Sumber:** [optional-skills/security/oss-forensics/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/security/oss-forensics/SKILL.md)

#### `sherlock`

- **Deskripsi:** Menemukan akun berdasarkan nama pengguna di 400+ platform.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** osint, security, username, social-media, reconnaissance
- **Sumber:** [optional-skills/security/sherlock/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/security/sherlock/SKILL.md)

#### `unbroker`

- **Deskripsi:** Menghapus data pribadi Anda dari situs pialang data secara otonom.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** privacy, data-broker, opt-out, ccpa, gdpr, security, doxxing
- **Sumber:** [optional-skills/security/unbroker/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/security/unbroker/SKILL.md)

#### `web-pentest`

- **Deskripsi:** Uji penetrasi web yang diotorisasi: pengintaian, eksploit berbukti, laporan.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos
- **Tag:** Security, Pentest, Web, Recon
- **Sumber:** [optional-skills/security/web-pentest/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/security/web-pentest/SKILL.md)

### smart-home

#### `openhue`

- **Deskripsi:** Mengendalikan lampu, adegan, dan ruangan Philips Hue lewat CLI OpenHue.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** Smart-Home, Hue, Lights, IoT, Automation
- **Sumber:** [optional-skills/smart-home/openhue/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/smart-home/openhue/SKILL.md)

### social-media

#### `reddit-reading`

- **Deskripsi:** Membaca Reddit: subreddit, pencarian, utas, pengguna. Tanpa browser.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** Reddit, Social Media, Research, Discussions, Community
- **Sumber:** [optional-skills/social-media/reddit-reading/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/social-media/reddit-reading/SKILL.md)

#### `xurl`

- **Deskripsi:** X/Twitter lewat CLI xurl: pencarian posting mentah, memposting, DM, media.
- **Tingkat:** Bawaan
- **Platform:** linux, macos
- **Tag:** twitter, x, social-media, xurl, official-api
- **Sumber:** [skills/social-media/xurl/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/social-media/xurl/SKILL.md)

### software-development

#### `ast-grep`

- **Deskripsi:** Pencarian dan penulisan ulang kode terstruktur berbasis AST lewat ast-grep.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** ast, codemod, refactoring, structural-search, code-search, rewrite, tree-sitter
- **Sumber:** [optional-skills/software-development/ast-grep/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/software-development/ast-grep/SKILL.md)

#### `code-wiki`

- **Deskripsi:** Membuat dokumen wiki dan diagram Mermaid untuk basis kode apa pun.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** Documentation, Mermaid, Architecture, Diagrams, Wiki, Code-Analysis
- **Sumber:** [optional-skills/software-development/code-wiki/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/software-development/code-wiki/SKILL.md)

#### `codebase-inspection`

- **Deskripsi:** Memeriksa basis kode dengan pygount: LOC, bahasa, rasio.
- **Tingkat:** Bawaan
- **Platform:** linux, macos, windows
- **Tag:** LOC, Code Analysis, pygount, Codebase, Metrics, Repository
- **Sumber:** [skills/software-development/codebase-inspection/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/software-development/codebase-inspection/SKILL.md)

#### `dogfood`

- **Deskripsi:** QA eksploratif aplikasi web: menemukan bug, bukti, laporan.
- **Tingkat:** Bawaan
- **Platform:** linux, macos, windows
- **Tag:** qa, testing, browser, web, dogfood
- **Sumber:** [skills/software-development/dogfood/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/software-development/dogfood/SKILL.md)

#### `github`

- **Deskripsi:** GitHub lewat CLI gh: PR, issue, tinjauan, repositori, autentikasi.
- **Tingkat:** Bawaan
- **Platform:** linux, macos, windows
- **Tag:** github, gh, git, pull-requests, issues, code-review, repos, auth, ci
- **Sumber:** [skills/software-development/github/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/software-development/github/SKILL.md)

#### `grill-me`

- **Deskripsi:** Wawancara rencana secara adversarial sebelum implementasi.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** planning, adversarial, interview, decision-tree, pre-implementation, review, alignment
- **Sumber:** [optional-skills/software-development/grill-me/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/software-development/grill-me/SKILL.md)

#### `hermes-agent-skill-authoring`

- **Deskripsi:** Menulis berkas SKILL.md di dalam repositori: frontmatter dan struktur.
- **Tingkat:** Bawaan
- **Platform:** linux, macos, windows
- **Tag:** skills, authoring, hermes-agent, conventions, skill-md
- **Sumber:** [skills/software-development/hermes-agent-skill-authoring/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/software-development/hermes-agent-skill-authoring/SKILL.md)

#### `inspecting-hermes-desktop-dom`

- **Deskripsi:** Membaca DOM/CSS aplikasi desktop Hermes secara langsung lewat CDP.
- **Tingkat:** Bawaan
- **Platform:** linux, macos, windows
- **Tag:** desktop, electron, cdp, dom, ui-verification, self-inspection
- **Sumber:** [skills/software-development/inspecting-hermes-desktop-dom/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/software-development/inspecting-hermes-desktop-dom/SKILL.md)

#### `node-inspect-debugger`

- **Deskripsi:** Men-debug Node.js lewat --inspect dan CLI Chrome DevTools Protocol.
- **Tingkat:** Bawaan
- **Platform:** linux, macos, windows
- **Tag:** debugging, nodejs, node-inspect, cdp, breakpoints, ui-tui
- **Sumber:** [skills/software-development/node-inspect-debugger/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/software-development/node-inspect-debugger/SKILL.md)

#### `pr-lens`

- **Deskripsi:** Menggambar perubahan kode sebagai SVG arsitektur/aliran data beranimasi.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos
- **Tag:** diagrams, pull-requests, code-review, svg
- **Sumber:** [optional-skills/software-development/pr-lens/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/software-development/pr-lens/SKILL.md)

#### `python-debugpy`

- **Deskripsi:** Debug Python: REPL pdb dan debugpy jarak jauh (DAP).
- **Tingkat:** Bawaan
- **Platform:** linux, macos
- **Tag:** debugging, python, pdb, debugpy, breakpoints, dap, post-mortem
- **Sumber:** [skills/software-development/python-debugpy/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/software-development/python-debugpy/SKILL.md)

#### `requesting-code-review`

- **Deskripsi:** Tinjauan pra-commit: pemindaian keamanan, gerbang kualitas, perbaikan otomatis.
- **Tingkat:** Bawaan
- **Platform:** linux, macos, windows
- **Tag:** code-review, security, verification, quality, pre-commit, auto-fix
- **Sumber:** [skills/software-development/requesting-code-review/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/software-development/requesting-code-review/SKILL.md)

#### `rest-graphql-debug`

- **Deskripsi:** Men-debug API REST/GraphQL: kode status, autentikasi, skema, reproduksi.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** api, rest, graphql, http, debugging, testing, curl, integration
- **Sumber:** [optional-skills/software-development/rest-graphql-debug/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/software-development/rest-graphql-debug/SKILL.md)

#### `simplify-code`

- **Deskripsi:** Pembersihan paralel empat agen atas perubahan kode terbaru.
- **Tingkat:** Bawaan
- **Platform:** linux, macos, windows
- **Tag:** code-review, cleanup, refactor, delegation, subagent, parallel, simplify
- **Sumber:** [skills/software-development/simplify-code/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/software-development/simplify-code/SKILL.md)

#### `spike`

- **Deskripsi:** Eksperimen sekali pakai untuk memvalidasi gagasan sebelum dibangun.
- **Tingkat:** Bawaan
- **Platform:** linux, macos, windows
- **Tag:** spike, prototype, experiment, feasibility, throwaway, exploration, research, planning, mvp, proof-of-concept
- **Sumber:** [skills/software-development/spike/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/software-development/spike/SKILL.md)

#### `subagent-driven-development`

- **Deskripsi:** Menjalankan rencana lewat subagen delegate\_task (tinjauan dua tahap).
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** delegation, subagent, implementation, workflow, parallel
- **Sumber:** [optional-skills/software-development/subagent-driven-development/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/software-development/subagent-driven-development/SKILL.md)

#### `systematic-debugging`

- **Deskripsi:** Debug akar masalah empat fase: pahami bug sebelum memperbaikinya.
- **Tingkat:** Bawaan
- **Platform:** linux, macos, windows
- **Tag:** debugging, troubleshooting, problem-solving, root-cause, investigation
- **Sumber:** [skills/software-development/systematic-debugging/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/software-development/systematic-debugging/SKILL.md)

#### `test-driven-development`

- **Deskripsi:** TDD: menegakkan RED-GREEN-REFACTOR, tes sebelum kode.
- **Tingkat:** Bawaan
- **Platform:** linux, macos, windows
- **Tag:** testing, tdd, development, quality, red-green-refactor
- **Sumber:** [skills/software-development/test-driven-development/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/software-development/test-driven-development/SKILL.md)

### umum

#### `yuanbao`

- **Deskripsi:** Grup Yuanbao (元宝): menyebut (@mention) pengguna, menanyakan info/anggota.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** yuanbao, mention, at, group, members, 元宝, 派, 艾特
- **Sumber:** [optional-skills/yuanbao/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/yuanbao/SKILL.md)

### web

#### `blocked-page-recovery`

- **Deskripsi:** Dipakai saat pengambilan gagal: 403/429, paywall, WAF, penghalang bot.
- **Tingkat:** Bawaan
- **Platform:** linux, macos, windows
- **Tag:** Research, Archives, Wayback, Paywall, WAF, Fallback
- **Sumber:** [skills/web/blocked-page-recovery/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/skills/web/blocked-page-recovery/SKILL.md)

### web-development

#### `cloudflare-temporary-deploy`

- **Deskripsi:** Men-deploy Worker secara langsung tanpa akun lewat wrangler --temporary.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** cloudflare, workers, wrangler, deploy, temporary, agent, serverless, web-development
- **Sumber:** [optional-skills/web-development/cloudflare-temporary-deploy/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/web-development/cloudflare-temporary-deploy/SKILL.md)

#### `har-derived-api-client`

- **Deskripsi:** Merekam XHR sebuah situs ke HAR, lalu menurunkan klien HTTP.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** Browser, HAR, API, Reverse-Engineering, Playwright
- **Sumber:** [optional-skills/web-development/har-derived-api-client/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/web-development/har-derived-api-client/SKILL.md)

#### `page-agent`

- **Deskripsi:** Menyematkan copilot GUI berbahasa alami di dalam halaman pada aplikasi web.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** web, javascript, agent, browser, gui, alibaba, embed, copilot, saas
- **Sumber:** [optional-skills/web-development/page-agent/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/web-development/page-agent/SKILL.md)

#### `publish-site`

- **Deskripsi:** Deploy situs berversi ke GitHub/Cloudflare/Netlify Pages.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** publish, deploy, hosting, github-pages, cloudflare-pages, netlify, static-site, versioning, rollback, web-development
- **Sumber:** [optional-skills/web-development/publish-site/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/web-development/publish-site/SKILL.md)

#### `scrollcraft`

- **Deskripsi:** Landing page premium yang digerakkan gulir; gulir = lini masa.
- **Tingkat:** Resmi opsional
- **Platform:** linux, macos, windows
- **Tag:** web-development, landing-page, scrollytelling, animation, design, frontend
- **Sumber:** [optional-skills/web-development/scrollcraft/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/7cc3fb8cb55898747dd1dfa56fda3e16ebba028e/optional-skills/web-development/scrollcraft/SKILL.md)
