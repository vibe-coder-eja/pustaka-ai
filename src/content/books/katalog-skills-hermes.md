# Katalog Skills Hermes Agent

> Snapshot katalog: 17 Juli 2026. Ketersediaan tiap skill bergantung pada versi, platform, layanan, dan izin yang digunakan. Dokumen ini bukan potret konfigurasi mesin tertentu.

## Cara membaca

Skills dikelompokkan berdasarkan bidang penggunaan. Setiap entri menjelaskan tujuan umum skill; periksa dokumentasi Hermes Agent terbaru sebelum menggunakannya.

## Daftar lengkap

### autonomous-ai-agents

#### `claude-code`

- **Deskripsi:** Delegate coding to Claude Code CLI (features, PRs).

#### `codex`

- **Deskripsi:** Delegate coding to OpenAI Codex CLI (features, PRs).

#### `codex-limit-mode1`

- **Deskripsi:** Check Codex/OpenAI-Codex local Hermes usage under OpenAI rolling-window limits.

#### `daily-token-report`

- **Deskripsi:** Report local Hermes token usage for today, a complete historical day, or a precise WIB cutoff, grouped by provider and model.

#### `hermes-agent`

- **Deskripsi:** Configure, extend, or contribute to Hermes Agent.

#### `hermes-llm-provider-setup`

- **Deskripsi:** Set up Hermes Agent LLM providers as primary or fallback, with safe verification and user-friendly guidance.

#### `hermes-messaging-gateway`

- **Deskripsi:** Set up and troubleshoot Hermes Agent messaging gateway platforms (WhatsApp, Telegram, Discord, Slack, Signal, Email) with detailed Windows operations: bridge pairing, auto-start, Scheduled Task, WinError 5 fix, and process verification.

#### `nous-limit-mode1`

- **Deskripsi:** Check Nous Portal credits, rate-limit status, and local Hermes usage for the Nous provider.

#### `opencode`

- **Deskripsi:** Delegate coding to OpenCode CLI (features, PR review).

### creative

#### `architecture-diagram`

- **Deskripsi:** Dark-themed SVG architecture/cloud/infra diagrams as HTML.

#### `ascii-art`

- **Deskripsi:** ASCII art: pyfiglet, cowsay, boxes, image-to-ascii.

#### `ascii-video`

- **Deskripsi:** ASCII video: convert video/audio to colored ASCII MP4/GIF.

#### `baoyu-infographic`

- **Deskripsi:** Infographics: 21 layouts x 21 styles (信息图, 可视化).

#### `brand-accurate-infographics`

- **Deskripsi:** Produce infographics that must preserve official/client logos, seals, brand assets, and visual approvals accurately by combining AI-generated backgrounds with deterministic asset compositing.

#### `claude-design`

- **Deskripsi:** Design one-off HTML artifacts (landing, deck, prototype).

#### `comfyui`

- **Deskripsi:** Generate images, video, and audio with ComfyUI — install, launch, manage nodes/models, run workflows with parameter injection. Uses the official comfy-cli for lifecycle and direct REST/WebSocket API for execution.

#### `design-md`

- **Deskripsi:** Author/validate/export Google's DESIGN.md token spec files.

#### `excalidraw`

- **Deskripsi:** Hand-drawn Excalidraw JSON diagrams (arch, flow, seq).

#### `humanizer`

- **Deskripsi:** Humanize text: strip AI-isms and add real voice.

#### `manim-video`

- **Deskripsi:** Manim CE animations: 3Blue1Brown math/algo videos.

#### `p5js`

- **Deskripsi:** p5.js sketches: gen art, shaders, interactive, 3D.

#### `popular-web-designs`

- **Deskripsi:** 54 real design systems (Stripe, Linear, Vercel) as HTML/CSS.

#### `pretext`

- **Deskripsi:** Use when building creative browser demos with @chenglou/pretext — DOM-free text layout for ASCII art, typographic flow around obstacles, text-as-geometry games, kinetic typography, and text-powered generative art. Produces single-file HTML demos by default.

#### `sketch`

- **Deskripsi:** Throwaway HTML mockups: 2-3 design variants to compare.

#### `songwriting-and-ai-music`

- **Deskripsi:** Songwriting craft and Suno AI music prompts.

#### `touchdesigner-mcp`

- **Deskripsi:** Control a running TouchDesigner instance via twozero MCP — create operators, set parameters, wire connections, execute Python, build real-time visuals. 36 native tools.

### data-science

#### `jupyter-live-kernel`

- **Deskripsi:** Iterative Python via live Jupyter kernel (hamelnb).

### email

#### `himalaya`

- **Deskripsi:** Himalaya CLI: IMAP/SMTP email from terminal.

### github

#### `codebase-inspection`

- **Deskripsi:** Inspect codebases w/ pygount: LOC, languages, ratios.

#### `github-auth`

- **Deskripsi:** GitHub auth setup: HTTPS tokens, SSH keys, gh CLI login.

#### `github-code-review`

- **Deskripsi:** Review PRs: diffs, inline comments via gh or REST.

#### `github-issues`

- **Deskripsi:** Create, triage, label, assign GitHub issues via gh or REST.

#### `github-pr-workflow`

- **Deskripsi:** GitHub PR lifecycle: branch, commit, open, CI, merge.

#### `github-repo-management`

- **Deskripsi:** Clone/create/fork repos; manage remotes, releases.

### media

#### `gif-search`

- **Deskripsi:** Search/download GIFs from Tenor via curl + jq.

#### `heartmula`

- **Deskripsi:** HeartMuLa: Suno-like song generation from lyrics + tags.

#### `long-form-video-content-repurposing`

- **Deskripsi:** Transform long-form videos, especially English educational or technical videos, into verified Indonesian learning notes and reusable Shorts/Reels content foundations. Use when a user supplies a video or playlist and wants structured notes, localized explanations, content angles, hooks, or a repeatable repurposing workflow.

#### `songsee`

- **Deskripsi:** Audio spectrograms/features (mel, chroma, MFCC) via CLI.

#### `video-content-repurposing`

- **Deskripsi:** Turn long-form videos and transcripts into verified long-form knowledge notes plus atomic Shorts/Reels content concepts, scripts, and production-ready derivatives. Use for playlist learning archives, localization, and source-to-social repurposing.

#### `video-learning-content-repurposing`

- **Deskripsi:** Convert long-form educational videos into verified Indonesian learning notes that serve as a reusable basis for Shorts/Reels content.

#### `youtube-content`

- **Deskripsi:** YouTube transcripts to summaries, threads, blogs.

### mlops

#### `huggingface-hub`

- **Deskripsi:** HuggingFace hf CLI: search/download/upload models, datasets.

#### `llama-cpp`

- **Deskripsi:** llama.cpp local GGUF inference + HF Hub model discovery.

#### `segment-anything-model`

- **Deskripsi:** SAM: zero-shot image segmentation via points, boxes, masks.

#### `weights-and-biases`

- **Deskripsi:** W&B: log ML experiments, sweeps, model registry, dashboards.

### note-taking

#### `obsidian`

- **Deskripsi:** Read, search, create, and edit notes in the Obsidian vault.

#### `obsidian-agent-network`

- **Deskripsi:** Set up and use Obsidian as a shared knowledge network / memory for AI agents (incl. Hermes Agent). Covers vault-root verification pitfall, PARA+MOC structure, the official Obsidian Skills concept (markdown/bases/json-canvas), and Hermes integration via OBSIDIAN_VAULT_PATH.

### productivity

#### `airtable`

- **Deskripsi:** Airtable REST API via curl. Records CRUD, filters, upserts.

#### `assistant-personalization`

- **Deskripsi:** Personalize this assistant for the user: identity/persona, language defaults, timezone, and response conventions.

#### `brand-playbook-development`

- **Deskripsi:** Build staged or pre-approved end-to-end brand, marketing, and service-productization playbooks with approval-aware workflows, professional document packages, templates, and verified exports.

#### `google-places-lead-generation`

- **Deskripsi:** Build and operate Google Places API workflows for business lead lookup by keyword and area, with cost controls and secret-safe local setup.

#### `google-workspace`

- **Deskripsi:** Gmail, Calendar, Drive, Docs, Sheets via gws CLI or Python.

#### `grill-me`

- **Deskripsi:** A relentless interview to sharpen a plan or design.

#### `grilling`

- **Deskripsi:** Grill the user relentlessly about a plan, decision, or idea. Use when the user wants to stress-test their thinking, or uses any 'grill' trigger phrases.

#### `lean-brand-playbook-builder`

- **Deskripsi:** Build a launch-ready Lean Brand Playbook for a new UMKM brand through a controlled, stage-by-stage process with mandatory user verification and approval gates.

#### `maps`

- **Deskripsi:** Geocode, POIs, routes, timezones via OpenStreetMap/OSRM.

#### `n8n-local-automation`

- **Deskripsi:** Use when building, importing, operating, or troubleshooting a local n8n workflow that connects local services, AI APIs, webhooks, and file-based reports on Windows.

#### `nano-pdf`

- **Deskripsi:** Edit PDF text/typos/titles via nano-pdf CLI (NL prompts).

#### `notion`

- **Deskripsi:** Notion API + ntn CLI: pages, databases, markdown, Workers.

#### `ocr-and-documents`

- **Deskripsi:** Extract text from PDFs/scans (pymupdf, marker-pdf).

#### `petdex`

- **Deskripsi:** Install and select animated petdex mascots for Hermes.

#### `powerpoint`

- **Deskripsi:** Create, read, edit .pptx decks, slides, notes, templates.

#### `teams-meeting-pipeline`

- **Deskripsi:** Operate the Teams meeting summary pipeline via Hermes CLI — summarize meetings, inspect pipeline status, replay jobs, manage Microsoft Graph subscriptions.

### research

#### `arxiv`

- **Deskripsi:** Search arXiv papers by keyword, author, category, or ID.

#### `blogwatcher`

- **Deskripsi:** Monitor blogs and RSS/Atom feeds via blogwatcher-cli tool.

#### `llm-wiki`

- **Deskripsi:** Karpathy's LLM Wiki: build/query interlinked markdown KB.

#### `platform-api-requirements-research`

- **Deskripsi:** Validate current third-party platform API requirements and produce an exact developer-dashboard/OAuth checklist grounded in official documentation. Use for Meta, Google, LinkedIn, TikTok, X, and similar APIs when permissions, access levels, app review, account eligibility, versioning, or test requests must be verified without changing configuration.

#### `polymarket`

- **Deskripsi:** Query Polymarket: markets, prices, orderbooks, history.

#### `research-paper-writing`

- **Deskripsi:** Write ML papers for NeurIPS/ICML/ICLR: design→submit.

### smart-home

#### `openhue`

- **Deskripsi:** Control Philips Hue lights, scenes, rooms via OpenHue CLI.

### social-media

#### `social-graph-directory`

- **Deskripsi:** Build a verified, categorized directory of followers/following/connections from social-platform exports or authorized APIs, with resumable enrichment and CSV/XLSX/Markdown delivery.

#### `xurl`

- **Deskripsi:** X/Twitter via xurl CLI: post, search, DM, media, v2 API.

### software-development

#### `hermes-agent-skill-authoring`

- **Deskripsi:** Author in-repo SKILL.md: frontmatter, validator, structure, and writing-quality principles.

#### `http-connector-security-hardening`

- **Deskripsi:** Harden HTTP/API connectors that handle webhooks, OAuth, upstream bearer tokens, admin endpoints, and public health checks using strict test-first security controls.

#### `node-inspect-debugger`

- **Deskripsi:** Debug Node.js via --inspect + Chrome DevTools Protocol CLI.

#### `plan`

- **Deskripsi:** Plan mode: write an actionable markdown plan to .hermes/plans/, no execution. Bite-sized tasks, exact paths, complete code.

#### `requesting-code-review`

- **Deskripsi:** Pre-commit review: security scan, quality gates, auto-fix.

#### `responsive-ui-debugging`

- **Deskripsi:** Diagnose and verify responsive web UI defects involving viewport sizing, scrolling, sticky/fixed positioning, overflow, stacking contexts, mobile navigation, and breakpoint-specific behavior.

#### `safe-local-operations`

- **Deskripsi:** Run local environment audits and configuration changes safely: read-only discovery first, explicit confirmation before side effects, secret-aware output.

#### `simplify-code`

- **Deskripsi:** Parallel 3-agent cleanup of recent code changes.

#### `spike`

- **Deskripsi:** Throwaway experiments to validate an idea before build.

#### `static-site-handoff-review`

- **Deskripsi:** Review static website changes handed off by another agent before visual review, merge, or deployment.

#### `static-site-migration-review`

- **Deskripsi:** Review and hand off static marketing/portfolio site migrations to Next.js/Tailwind, especially when an external coding agent produced the implementation.

#### `systematic-debugging`

- **Deskripsi:** 4-phase root cause debugging: understand bugs before fixing.

#### `test-driven-development`

- **Deskripsi:** TDD: enforce RED-GREEN-REFACTOR, tests before code.

#### `vercel-deployment-debugging`

- **Deskripsi:** Debug and fix Vercel deployment/domain issues for web projects, especially `Ready` deployments that return platform-level 404s.

#### `website-architecture-prd-handoff`

- **Deskripsi:** Use when approved website discovery, content, and design inputs must become a neutral stack decision, Architecture Decision Record, standalone implementation PRD, and bounded execution contract for Antigravity, Codex, Claude Code, OpenCode, or another coding agent. Separates current phase needs from future roadmap and separates recommended commands from authorized side effects.

#### `website-brand-content-blueprint`

- **Deskripsi:** Use when a website needs a decision-ready bridge from approved brand strategy to sitemap, page-by-page copy, CTA, SEO metadata, internal links, and claim provenance before design or coding. Reuses existing playbooks, routes missing strategy to brand specialists, and produces a structured content blueprint without inventing substantive facts.

#### `website-cms-content-operations`

- **Deskripsi:** Use when selecting, adding, migrating, operating, debugging, or verifying a website CMS—especially Sanity—while preserving framework stability, explicit field ownership, local fallback, staged schema rollout, editorial approvals, secret-safe webhooks, and end-to-end publish-to-production proof. Separates CMS content operations from hosting/deployment fault diagnosis.

#### `website-design-prototyping`

- **Deskripsi:** Use when approved brand and content inputs must become a website visual direction, normalized design tokens, wireframe/section hierarchy, comparison sketches, or a disposable prototype before production implementation. Preserves official assets, separates evidence from invention, and hands formal token output to design-md rather than creating a competing spec.

#### `website-discovery-source-of-truth`

- **Deskripsi:** Use when starting or resuming a website project, auditing an existing site before changes, inventorying brand/content/design assets, resolving conflicting requirements, or detecting drift among approved documents, repository, CMS, and production. Produces a read-only evidence inventory, provenance map, decision/open-issues ledger, and Website Project State input.

#### `website-implementation-review`

- **Deskripsi:** Use when a coding agent, developer, migration, or local edit claims a website implementation is complete and needs independent read-only verification before visual QA, commit, preview, merge, or release. Reviews static HTML, Astro, Next.js, migrations, and non-Git folders against the approved PRD, content, assets, architecture, and claimed scope.

#### `website-maintenance-operations`

- **Deskripsi:** Use when a website has reached observed production, or when operating an existing live site, to define recurring health/content/security/dependency/analytics reviews, monitor changes and failures, intake edits safely, detect drift, manage incidents and rollback evidence, and route each change back through the smallest required website lifecycle phases.

#### `website-project-orchestrator`

- **Deskripsi:** Use when creating, continuing, migrating, auditing, fixing, releasing, or maintaining a website across multiple phases or systems. Routes work through a lifecycle state machine, preserves source-of-truth boundaries, enforces scoped approval and verification gates, and delegates detail to specialist skills instead of becoming a framework-specific mega-workflow.

#### `website-quality-verification`

- **Deskripsi:** Use when website implementation compliance has passed and evidence is required before preview approval or production release across functional behavior, routes/assets, responsive visuals, accessibility, SEO, performance, privacy/security, forms, and browser/device coverage without treating a green build or HTTP 200 as completion.

#### `website-release-operations`

- **Deskripsi:** Use when a verified website must move through branch, commit, push, PR/CI, preview, explicit production approval, merge, deployment, domain/DNS, exact-SHA attribution, and rollback readiness. Owns the release state machine and evidence contract while routing GitHub mechanics and Vercel/provider faults to specialists.

### Tanpa kategori

#### `computer-use`

- **Deskripsi:** Drive the user's desktop in the background — clicking, typing, scrolling, dragging — without stealing the cursor, keyboard focus, or switching virtual desktops / Spaces. Cross-platform: macOS, Windows, Linux. Works with any tool-capable model. Load this skill whenever the `computer_use` tool is available.

#### `dogfood`

- **Deskripsi:** Exploratory QA of web apps: find bugs, evidence, reports.

#### `firecrawl`

- **Deskripsi:** Search, scrape, and interact with the web via the Firecrawl CLI. Use this skill whenever the user wants to search the web, find articles, research a topic, look something up online, scrape a webpage, grab content from a URL, get data from a website, crawl documentation, download a site, or interact with pages that need clicks or logins. Also use when they say "fetch this page", "pull the content from", "get the page at https://", or reference external websites. This provides real-time web search with full page content and interact capabilities — beyond what Claude can do natively with built-in tools. Do NOT trigger for local file operations, git commands, deployments, or code editing tasks.

#### `firecrawl-agent`

- **Deskripsi:** AI-powered autonomous data extraction that navigates complex sites and returns structured JSON. Use this skill when the user wants structured data from websites, needs to extract pricing tiers, product listings, directory entries, or any data as JSON with a schema. Triggers on "extract structured data", "get all the products", "pull pricing info", "extract as JSON", or when the user provides a JSON schema for website data. More powerful than simple scraping for multi-page structured extraction.

#### `firecrawl-build-interact`

- **Deskripsi:** Integrate Firecrawl `/interact` into product code for dynamic pages and browser actions after scraping. Use when a feature needs clicks, form fills, pagination, authentication-aware flows, or other multi-step interactions that plain `/scrape` cannot complete.

#### `firecrawl-build-onboarding`

#### `firecrawl-build-scrape`

- **Deskripsi:** Integrate Firecrawl `/scrape` into product code for single-page extraction. Use when an app already has a URL and needs markdown, HTML, links, screenshots, metadata, or structured page output. Prefer this skill over broader crawl patterns when the feature is page-level.

#### `firecrawl-build-search`

- **Deskripsi:** Integrate Firecrawl `/search` into product code and agent workflows. Use when an app needs discovery before extraction, when the feature starts with a query instead of a URL, or when the system should search the web and optionally hydrate result content.

#### `firecrawl-company-directories`

- **Deskripsi:** Extract structured company lists from directories with Firecrawl. Use for scraping YC, Crunchbase, Product Hunt, G2, startup directories, category directories, or custom company databases into JSON, CSV, CRM-ready lists, or research tables.

#### `firecrawl-competitive-intel`

- **Deskripsi:** Monitor competitor pricing, features, changelogs, dashboards, and product changes with Firecrawl. Use for recurring competitive intelligence, pricing tier extraction, feature change tracking, or structured competitor alerts.

#### `firecrawl-crawl`

- **Deskripsi:** Bulk extract content from an entire website or site section. Use this skill when the user wants to crawl a site, extract all pages from a docs section, bulk-scrape multiple pages following links, or says "crawl", "get all the pages", "extract everything under /docs", "bulk extract", or needs content from many pages on the same site. Handles depth limits, path filtering, and concurrent extraction.

#### `firecrawl-dashboard-reporting`

- **Deskripsi:** Pull metrics from analytics dashboards and internal web tools with Firecrawl browser. Use when the user needs dashboard reporting, cross-platform metric summaries, authenticated analytics extraction, date-range reports, or structured metrics from web dashboards.

#### `firecrawl-deep-research`

- **Deskripsi:** Produce an intensive, cited analytical report: executive summary, multi-angle findings, contrarian views, open questions, and full sources. Use only when the user needs rigorous synthesis of a complex topic (scientific, technical, policy, or market-analytical) that cannot be answered with a short search, and wants a formal written report, not a recommendation list. Do not use for product picks, top-N lists, quick lookups, or routine "find out about X" tasks. If the request does not clearly need this kind of report, do not use this skill.

#### `firecrawl-demo-walkthrough`

- **Deskripsi:** Walk through a product's key flows with Firecrawl browser and produce a structured UX/product walkthrough. Use for signup, onboarding, pricing, docs, dashboard, product demo prep, UX teardown, and first-run experience analysis.

#### `firecrawl-download`

- **Deskripsi:** Download an entire website as local files — markdown, screenshots, or multiple formats per page. Use this skill when the user wants to save a site locally, download documentation for offline use, bulk-save pages as files, or says "download the site", "save as local files", "offline copy", "download all the docs", or "save for reference". Combines site mapping and scraping into organized local directories.

#### `firecrawl-interact`

- **Deskripsi:** Control and interact with a live browser session on any scraped page — click buttons, fill forms, navigate flows, and extract data using natural language prompts or code. Use when the user needs to interact with a webpage beyond simple scraping: logging into a site, submitting forms, clicking through pagination, handling infinite scroll, navigating multi-step checkout or wizard flows, or when a regular scrape failed because content is behind JavaScript interaction. Also useful for authenticated scraping via profiles. Triggers on "interact", "click", "fill out the form", "log in to", "sign in", "submit", "paginated", "next page", "infinite scroll", "interact with the page", "navigate to", "open a session", or "scrape failed".

#### `firecrawl-knowledge-base`

- **Deskripsi:** Build a knowledge base from web content with Firecrawl. Use for local reference docs, RAG-ready chunks, fine-tuning datasets, documentation mirrors, topic corpora, or LLM-ready markdown organized from web sources.

#### `firecrawl-knowledge-ingest`

- **Deskripsi:** Ingest public or authenticated knowledge bases and docs portals with Firecrawl browser. Use for JS-heavy docs, login-gated portals, paginated help centers, support knowledge bases, or structured JSON/markdown extraction from documentation sites.

#### `firecrawl-lead-gen`

- **Deskripsi:** Generate structured lead lists from prospect databases and web directories with Firecrawl browser. Use for finding prospects by role, company type, industry, stage, location, technologies, or other criteria and exporting CRM-ready JSON or CSV.

#### `firecrawl-lead-research`

- **Deskripsi:** Produce pre-meeting lead intelligence briefs with Firecrawl. Use when the user needs company research, person research, recent news, talking points, pain points, or outreach preparation before a sales call, partnership meeting, investor conversation, or customer interview.

#### `firecrawl-map`

- **Deskripsi:** Discover and list all URLs on a website, with optional search filtering. Use this skill when the user wants to find a specific page on a large site, list all URLs, see the site structure, find where something is on a domain, or says "map the site", "find the URL for", "what pages are on", or "list all pages". Essential when the user knows which site but not which exact page.

#### `firecrawl-market-research`

- **Deskripsi:** Extract market, financial, earnings, industry, and company metrics with Firecrawl. Use when the user asks for market research, industry trends, public company data, financial comparisons, earnings research, or structured market reports.

#### `firecrawl-monitor`

- **Deskripsi:** Detect when content on a website changes and get notified by webhook or email — no cron jobs, scrapers, or diff scripts required. Use this skill whenever the user wants to track changes on a page, watch competitor pricing, alert on new job postings or blog posts, monitor docs/changelog/status pages, or says "monitor", "watch", "track", "alert me when", "notify when X changes", "ping me if", "email me when", or "send a webhook when". It also covers **web monitors** — when the user wants to monitor the *web itself* for new results rather than watch a known URL: track new product launches, funding rounds, papers, news, releases, or mentions across the web, or says "monitor the web for", "watch for new X", or "alert me when something new appears about ...". For those, give search queries plus a goal instead of a URL. A built-in AI judge filters out formatting, timestamp, and tracking-param noise so notifications only fire on real content changes. Recommend this instead of repeated one-off scrapes whenever the ...

#### `firecrawl-parse`

- **Deskripsi:** Efficiently extract and convert the contents of any local file—such as PDF, DOCX, DOC, ODT, RTF, XLSX, XLS, or HTML—into clean, well-formatted markdown saved to disk. Use this skill whenever the user requests to parse, read, or extract information from a file on their computer, including phrases like “parse this PDF”, “convert this document”, “read this file”, “extract text from”, or when a local file path (not a URL) is provided. This skill offers advanced options like generating AI-powered summaries and answering questions based on the file's content. Prefer this tool over `scrape` when handling local files to deliver precise, structured outputs for downstream tasks.

#### `firecrawl-qa`

- **Deskripsi:** QA test a live website with Firecrawl browser and scrape evidence. Use when the user wants exploratory QA, form testing, navigation/link checks, responsive checks, performance observations, bug reports, or a pre-launch quality review.

#### `firecrawl-research-index`

- **Deskripsi:** Find the papers that answer a research query with Firecrawl Research, using semantic search, semantic and structural expansion, and in-body verification. Always use this skill for any literature-finding / paper-retrieval task — single-paper lookups or full multi-paper sets.

#### `firecrawl-research-papers`

- **Deskripsi:** Find and synthesize research papers, whitepapers, PDFs, technical reports, and academic sources with Firecrawl Research, using semantic paper search, related-paper expansion, and in-body verification. Use when the user wants a literature review, paper summary, research landscape, or sourced synthesis from PDFs and scholarly/industry publications.

#### `firecrawl-scrape`

- **Deskripsi:** Extract clean markdown from any URL, including JavaScript-rendered SPAs. Use this skill whenever the user provides a URL and wants its content, says "scrape", "grab", "fetch", "pull", "get the page", "extract from this URL", or "read this webpage". Handles JS-rendered pages, multiple concurrent URLs, and returns LLM-optimized markdown. Use this instead of WebFetch for any webpage content extraction.

#### `firecrawl-search`

- **Deskripsi:** Web search with full page content extraction. Use this skill whenever the user asks to search the web, find articles, research a topic, look something up, find recent news, discover sources, or says "search for", "find me", "look up", "what are people saying about", or "find articles about". Returns real search results with optional full-page markdown — not just snippets. Provides capabilities beyond Claude's built-in WebSearch.

#### `firecrawl-seo-audit`

- **Deskripsi:** Audit a website's SEO with Firecrawl. Use when the user asks for an SEO audit, metadata and heading review, sitemap/site-structure analysis, keyword opportunities, competitor SERP comparison, or prioritized search optimization recommendations.

#### `firecrawl-shop`

- **Deskripsi:** Research products across the web with Firecrawl and produce a shopping recommendation or cart-ready summary. Use when the user wants to compare products, find the best option, evaluate reviews, respect budget/preferences, or shop with a saved browser session.

#### `firecrawl-website-design-clone`

- **Deskripsi:** Extract any website's design system into an agent-ready DESIGN.md using Firecrawl scrape evidence. Use when the user wants colors, fonts, spacing, components, layout patterns, or brand/UI guidance from a website so AI agents can create new websites, clone a look, or build pages inspired by that design.

#### `firecrawl-workflows`

- **Deskripsi:** Run outcome-focused Firecrawl workflows that produce deliverables such as research reports, SEO audits, QA reports, lead lists, knowledge bases, website design systems, and other structured web-data artifacts. Use when the user wants Firecrawl to complete a business, marketing, product, or creative workflow rather than merely scrape a page or integrate API calls into code.

#### `obsidian-bases`

- **Deskripsi:** Create and edit structured data notes (Obsidian Bases / YAML properties + wikilinks) in the Obsidian vault via the obsidian skill — task ledgers, lightweight CRM, inventories. Use when pengguna wants a structured, queryable record linked into the vault knowledge graph.

#### `obsidian-canvas`

- **Deskripsi:** Generate Obsidian Canvas (.canvas JSON Canvas) files in the vault — mind maps, knowledge graphs, and workflow diagrams that visualize the AI-agent / project network. Use when pengguna wants a visual map of connected notes, projects, or agents.

#### `yuanbao`

- **Deskripsi:** Yuanbao (元宝) groups: @mention users, query info/members.

## Catatan audit

Glosarium ini adalah snapshot inventaris dan metadata pada saat ekspor. Untuk memastikan suatu skill bekerja end-to-end, jalankan workflow terkait dengan input uji yang aman karena dependensi runtime tidak selalu tercantum dalam frontmatter.
