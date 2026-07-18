# Referensi Perintah Hermes CLI

## Session

```text
/new            - Start a new session (fresh session ID +     
history) (usage: /new [name])
/reset          - Start a new session (fresh session ID +     
history) (alias for /new)
/clear          - Clear screen and start a new session        
/redraw         - Force a full UI repaint (recovers from      
terminal drift)
/history        - Show conversation history
/save           - Save the current conversation
/retry          - Retry the last message (resend to agent)    
/prompt         - Compose your next prompt in $EDITOR
(markdown), then send it (usage: /prompt [initial text])
/compose        - Compose your next prompt in $EDITOR
(markdown), then send it (alias for /prompt)
/undo           - Back up N user turns and re-prompt (default 
1) (usage: /undo [N])
/title          - Set a title for the current session (usage: 
/title [name])
/handoff        - Hand off this session to a messaging        
platform (Telegram, Discord, etc.) (usage: /handoff <platform>)   
/branch         - Branch the current session (explore a       
different path) (usage: /branch [name])
/fork           - Branch the current session (explore a       
different path) (alias for /branch)
/compress       - Compress conversation context (add 'here    
[N]' to keep recent N turns) (usage: /compress [here [N] | focus  
topic])
/rollback       - List or restore filesystem checkpoints      
(usage: /rollback [number])
/snapshot       - Create or restore state snapshots of Hermes 
config/state (usage: /snapshot [create|restore <id>|prune])       
/snap           - Create or restore state snapshots of Hermes 
config/state (alias for /snapshot)
/stop           - Kill all running background processes       
/background     - Run a prompt in the background (usage:      
/background <prompt>)
/bg             - Run a prompt in the background (alias for   
/background)
/btw            - Run a prompt in the background (alias for   
/background)
/agents         - Show active agents and running tasks        
/tasks          - Show active agents and running tasks (alias 
for /agents)
/queue          - Queue a prompt for the next turn (doesn't   
interrupt) (usage: /queue <prompt>)
/q              - Queue a prompt for the next turn (doesn't   
interrupt) (alias for /queue)
/steer          - Inject a message after the next tool call   
without interrupting (usage: /steer <prompt>)
/goal           - Set a standing goal Hermes works on across  
turns until achieved (usage: /goal [text | draft <text> | show |  
pause | resume | clear | status | wait <pid> | unwait])
/moa            - Run one prompt through the default Mixture  
of Agents preset, then restore your model (usage: /moa <prompt>)  
/subgoal        - Add or manage extra criteria on the active  
goal (usage: /subgoal [text | remove N | clear])
/status         - Show session, model, token, and context info
/resume         - Resume a previously-named session (usage:   
/resume [name])
/sessions       - Browse and resume previous sessions

```

## Info

```text
/whoami         - Show your slash command access (admin /     
user)
/profile        - Show active profile name and home directory 
/help           - Show available commands
/usage          - Show token usage and rate limits for the    
current session
/credits        - Show Nous credit balance and top up
/billing        - Manage Nous terminal billing — buy credits, 
auto-reload, limits
/insights       - Show usage insights and analytics (usage:   
/insights [days])
/platforms      - Show gateway/messaging platform status      
/gateway        - Show gateway/messaging platform status      
(alias for /platforms)
/copy           - Copy the last assistant response to
clipboard (usage: /copy [number])
/paste          - Attach clipboard image from your clipboard  
/image          - Attach a local image file for your next     
prompt (usage: /image <path>)
/update         - Update Hermes Agent to the latest version   
/version        - Show Hermes Agent version
/v              - Show Hermes Agent version (alias for        
/version)
/debug          - Upload debug report (system info + logs) and
get shareable links

```

## Configuration

```text
/config         - Show current configuration
/model          - Switch model (persists by default) (usage:  
/model [model] [--provider name] [--global|--session] [--refresh])
/codex-runtime  - Toggle codex app-server runtime for
OpenAI/Codex models (usage: /codex-runtime
[auto|codex_app_server])
/codex_runtime  - Toggle codex app-server runtime for
OpenAI/Codex models (alias for /codex-runtime)
/personality    - Set a predefined personality (usage:        
/personality [name])
/statusbar      - Toggle the context/model status bar
/sb             - Toggle the context/model status bar (alias  
for /statusbar)
/timestamps     - Toggle [HH:MM] timestamps on messages and   
/history (usage: /timestamps [on|off|status])
/ts             - Toggle [HH:MM] timestamps on messages and   
/history (alias for /timestamps)
/verbose        - Cycle tool progress display: off -> new ->  
all -> verbose
/footer         - Toggle gateway runtime-metadata footer on   
final replies (usage: /footer [on|off|status])
/yolo           - Toggle YOLO mode (skip all dangerous command
approvals)
/reasoning      - Manage reasoning effort and display (usage: 
/reasoning [level|show|hide|full|clamp])
/fast           - Toggle fast mode — OpenAI Priority
Processing / Anthropic Fast Mode (Normal/Fast) (usage: /fast      
[normal|fast|status])
/skin           - Show or change the display skin/theme       
(usage: /skin [name])
/indicator      - Pick the TUI busy-indicator style (usage:   
/indicator [kaomoji|emoji|unicode|ascii])
/voice          - Toggle voice mode (usage: /voice
[on|off|tts|status])
/busy           - Control what Enter does while Hermes is     
working (usage: /busy [queue|steer|interrupt|status])

```

## Tools & Skills

```text
/tools          - Manage tools: /tools [list|disable|enable]  
[name...] (usage: /tools [list|disable|enable] [name...])
/toolsets       - List available toolsets
/skills         - Search, install, inspect, or manage skills  
/memory         - Review pending memory writes / toggle the   
approval gate (usage: /memory [pending|approve|reject|approval]   
[id|on|off])
/bundles        - List skill bundles (aliases /<name> for     
multiple skills)
/pet            - Toggle or adopt a petdex mascot (/pet, /pet 
list, /pet <slug>) (usage: /pet [toggle|list|scale <n>|<slug>])   
/hatch          - Generate a new petdex pet from a description
(usage: /hatch [description])
/generate-pet   - Generate a new petdex pet from a description
(alias for /hatch)
/learn          - Learn a reusable skill from anything you    
describe (dirs, URLs, this chat, notes) (usage: /learn <what to   
learn from>)
/cron           - Manage scheduled tasks (usage: /cron        
[subcommand])
/suggestions    - Review suggested automations
(accept/dismiss) (usage: /suggestions [accept|dismiss N |
catalog])
/suggest        - Review suggested automations
(accept/dismiss) (alias for /suggestions)
/blueprint      - Set up an automation from a blueprint       
template (usage: /blueprint [name] [slot=value ...])
/bp             - Set up an automation from a blueprint 
template (alias for /blueprint)
/curator        - Background skill maintenance (status, run,  
pin, archive, list-archived) (usage: /curator [subcommand])       
/kanban         - Multi-profile collaboration board (tasks,   
links, comments) (usage: /kanban [subcommand])
/reload         - Reload .env variables into the running      
session
/reload-mcp     - Reload MCP servers from config
/reload_mcp     - Reload MCP servers from config (alias for   
/reload-mcp)
/reload-skills  - Re-scan ~/.hermes/skills/ for newly
installed or removed skills
/reload_skills  - Re-scan ~/.hermes/skills/ for newly
installed or removed skills (alias for /reload-skills)
/browser        - Connect browser tools to your live
Chromium-family browser via CDP (usage: /browser
[connect|disconnect|status])
/plugins        - List installed plugins and their status     

```

## Exit

```text
/quit           - Exit the CLI (use --delete to also remove   
session history) (usage: /quit [--delete])
/exit           - Exit the CLI (use --delete to also remove   
session history) (alias for /quit)

⚡ Skill Commands (116 installed):
/airtable              - Airtable REST API via curl. Records 
CRUD, filters, upserts.
/architecture-diagram  - Dark-themed SVG
architecture/cloud/infra diagrams as HTML.
/arxiv                 - Search arXiv papers by keyword,      
author, category, or ID.
/ascii-art             - ASCII art: pyfiglet, cowsay, boxes,  
image-to-ascii.
/ascii-video           - ASCII video: convert video/audio to  
colored ASCII MP4/GIF.
/assistant-personalization - Personalize this assistant for   
the user: identity/persona, language defaults, timezone, and      
response conventions.
/baoyu-infographic     - Infographics: 21 layouts x 21 styles 
(信息图, 可视化).
/blogwatcher           - Monitor blogs and RSS/Atom feeds via 
blogwatcher-cli tool.
/brand-playbook-development - Build staged brand/marketing    
playbooks (Lean Brand Playbook, brand foundation, service
architecture, personas, voice, visual identity, website/SEO       
blueprint) with user approval gates and exportable deliverables.  
/claude-code           - Delegate coding to Claude Code CLI   
(features, PRs).
/claude-design         - Design one-off HTML artifacts        
(landing, deck, prototype).
/codebase-inspection   - Inspect codebases w/ pygount: LOC,   
languages, ratios.
/codex                 - Delegate coding to OpenAI Codex CLI 
(features, PRs).
/codex-limit-mode1     - Check Codex/OpenAI-Codex local Hermes
usage under OpenAI rolling-window limits.
/comfyui               - Generate images, video, and audio    
with ComfyUI — install, launch, manage nodes/models, run workflows
with parameter injection. Uses the official comfy-cli for
lifecycle and direct REST/WebSocket API for execution.
/computer-use          - Drive the user's desktop in the      
background — clicking, typing,
scrolling, dragging — without stealing the cursor, keyboard focus,
or switching virtual desktops / Spaces. Cross-platform: macOS,
Windows, Linux. Works with any tool-capable model. Load this skill
whenever the `computer_use` tool is available.
/design-md             - Author/validate/export Google's      
DESIGN.md token spec files.
/dogfood               - Exploratory QA of web apps: find     
bugs, evidence, reports.
/excalidraw            - Hand-drawn Excalidraw JSON diagrams  
(arch, flow, seq).
/firecrawl             - Search, scrape, and interact with the
web via the Firecrawl CLI. Use this skill whenever the user wants 
to search the web, find articles, research a topic, look something
up online, scrape a webpage, grab content from a URL, get data    
from a website, crawl documentation, download a site, or interact 
with pages that need clicks or logins. Also use when they say     
"fetch this page", "pull the content from", "get the page at 
https://", or reference external websites. This provides real-time
web search with full page content and interact capabilities —     
beyond what Claude can do natively with built-in tools. Do NOT 
trigger for local file operations, git commands, deployments, or  
code editing tasks.
/firecrawl-agent       - AI-powered autonomous data extraction
that navigates complex sites and returns structured JSON. Use this
skill when the user wants structured data from websites, needs to 
extract pricing tiers, product listings, directory entries, or any
data as JSON with a schema. Triggers on "extract structured data",
"get all the products", "pull pricing info", "extract as JSON", or
when the user provides a JSON schema for website data. More       
powerful than simple scraping for multi-page structured
extraction.
/firecrawl-build-interact - Integrate Firecrawl `/interact`   
into product code for dynamic pages and browser actions after     
scraping. Use when a feature needs clicks, form fills, pagination,
authentication-aware flows, or other multi-step interactions that 
plain `/scrape` cannot complete.
/firecrawl-build-onboarding - Get Firecrawl credentials and   
SDK setup into a project. Use when an application needs
when the user wants to authenticate Firecrawl for app code, or    
when choosing the first SDK and docs for a new Firecrawl
integration. This skill includes its own browser auth flow, so it 
does not depend on the website onboarding skill.
/firecrawl-build-scrape - Integrate Firecrawl `/scrape` into  
product code for single-page extraction. Use when an app already  
has a URL and needs markdown, HTML, links, screenshots, metadata, 
or structured page output. Prefer this skill over broader crawl   
patterns when the feature is page-level.
/firecrawl-build-search - Integrate Firecrawl `/search` into  
product code and agent workflows. Use when an app needs discovery 
before extraction, when the feature starts with a query instead of
a URL, or when the system should search the web and optionally    
hydrate result content.
/firecrawl-company-directories - Extract structured company   
lists from directories with Firecrawl. Use for scraping YC,       
Crunchbase, Product Hunt, G2, startup directories, category 
directories, or custom company databases into JSON, CSV, CRM-ready
lists, or research tables.
/firecrawl-competitive-intel - Monitor competitor pricing, 
features, changelogs, dashboards, and product changes with        
Firecrawl. Use for recurring competitive intelligence, pricing    
tier extraction, feature change tracking, or structured competitor
alerts.
/firecrawl-crawl       - Bulk extract content from an entire 
website or site section. Use this skill when the user wants to    
crawl a site, extract all pages from a docs section, bulk-scrape  
multiple pages following links, or says "crawl", "get all the     
pages", "extract everything under /docs", "bulk extract", or needs
content from many pages on the same site. Handles depth limits,   
path filtering, and concurrent extraction.
/firecrawl-dashboard-reporting - Pull metrics from analytics  
dashboards and internal web tools with Firecrawl browser. Use when
the user needs dashboard reporting, cross-platform metric
summaries, authenticated analytics extraction, date-range reports,
or structured metrics from web dashboards.
/firecrawl-deep-research - Produce an intensive, cited 
analytical report: executive summary, multi-angle
findings, contrarian views, open questions, and full sources. Use 
only when the
user needs rigorous synthesis of a complex topic (scientific,     
technical, policy,
or market-analytical) that cannot be answered with a short search,
and wants
a formal written report, not a recommendation list.

Do not use for product picks, top-N lists, quick lookups, or      
routine "find out
about X" tasks. If the request does not clearly need this kind of 
report, do
not use this skill.
/firecrawl-demo-walkthrough - Walk through a product's key    
flows with Firecrawl browser and produce a structured UX/product  
walkthrough. Use for signup, onboarding, pricing, docs, dashboard,
product demo prep, UX teardown, and first-run experience analysis.
/firecrawl-download    - Download an entire website as local  
files — markdown, screenshots, or multiple formats per page. Use  
this skill when the user wants to save a site locally, download   
documentation for offline use, bulk-save pages as files, or says  
"download the site", "save as local files", "offline copy",       
"download all the docs", or "save for reference". Combines site   
mapping and scraping into organized local directories.
/firecrawl-interact    - Control and interact with a live     
browser session on any scraped page — click buttons, fill forms,  
navigate flows, and extract data using natural language prompts or
code. Use when the user needs to interact with a webpage beyond   
simple scraping: logging into a site, submitting forms, clicking 
through pagination, handling infinite scroll, navigating
multi-step checkout or wizard flows, or when a regular scrape     
failed because content is behind JavaScript interaction. Also     
useful for authenticated scraping via profiles. Triggers on       
"interact", "click", "fill out the form", "log in to", "sign in", 
"submit", "paginated", "next page", "infinite scroll", "interact  
with the page", "navigate to", "open a session", or "scrape 
failed".
/firecrawl-knowledge-base - Build a knowledge base from web   
content with Firecrawl. Use for local reference docs, RAG-ready   
chunks, fine-tuning datasets, documentation mirrors, topic        
corpora, or LLM-ready markdown organized from web sources.        
/firecrawl-knowledge-ingest - Ingest public or authenticated  
knowledge bases and docs portals with Firecrawl browser. Use for  
JS-heavy docs, login-gated portals, paginated help centers,       
support knowledge bases, or structured JSON/markdown extraction 
from documentation sites.
/firecrawl-lead-gen    - Generate structured lead lists from  
prospect databases and web directories with Firecrawl browser. Use
for finding prospects by role, company type, industry, stage,     
location, technologies, or other criteria and exporting CRM-ready 
JSON or CSV.
/firecrawl-lead-research - Produce pre-meeting lead
intelligence briefs with Firecrawl. Use when the user needs 
company research, person research, recent news, talking points,   
pain points, or outreach preparation before a sales call,
partnership meeting, investor conversation, or customer interview.
/firecrawl-map         - Discover and list all URLs on a      
website, with optional search filtering. Use this skill when the  
user wants to find a specific page on a large site, list all URLs,
see the site structure, find where something is on a domain, or   
says "map the site", "find the URL for", "what pages are on", or  
"list all pages". Essential when the user knows which site but not
which exact page.
/firecrawl-market-research - Extract market, financial,       
earnings, industry, and company metrics with Firecrawl. Use when  
the user asks for market research, industry trends, public company
data, financial comparisons, earnings research, or structured     
market reports.
/firecrawl-monitor     - Detect when content on a website     
changes and get notified by webhook or email — no cron jobs,      
scrapers, or diff scripts required. Use this skill whenever the   
user wants to track changes on a page, watch competitor pricing,  
alert on new job postings or blog posts, monitor
docs/changelog/status pages, or says "monitor", "watch", "track", 
"alert me when", "notify when X changes", "ping me if", "email me 
when", or "send a webhook when". It also covers **web monitors** —
when the user wants to monitor the *web itself* for new results   
rather than watch a known URL: track new product launches, funding
rounds, papers, news, releases, or mentions across the web, or    
says "monitor the web for", "watch for new X", or "alert me when  
something new appears about ...". For those, give search queries  
plus a goal instead of a URL. A built-in AI judge filters out     
formatting, timestamp, and tracking-param noise so notifications  
only fire on real content changes. Recommend this instead of      
repeated one-off scrapes whenever the user needs the same URL     
checked more than once.
/firecrawl-parse       - Efficiently extract and convert the  
contents of any local file—such as PDF, DOCX, DOC, ODT, RTF, XLSX,
XLS, or HTML—into clean, well-formatted markdown saved to disk.   
Use this skill whenever the user requests to parse, read, or      
extract information from a file on their computer, including      
phrases like “parse this PDF”, “convert this document”, “read this
file”, “extract text from”, or when a local file path (not a URL) 
is provided. This skill offers advanced options like generating   
AI-powered summaries and answering questions based on the file's  
content. Prefer this tool over `scrape` when handling local files 
to deliver precise, structured outputs for downstream tasks.      
/firecrawl-qa          - QA test a live website with Firecrawl
browser and scrape evidence. Use when the user wants exploratory  
QA, form testing, navigation/link checks, responsive checks,      
performance observations, bug reports, or a pre-launch quality    
review.
/firecrawl-research-index - Find the papers that answer a     
research query with Firecrawl Research, using semantic search,    
semantic and structural expansion, and in-body verification.      
Always use this skill for any literature-finding / paper-retrieval
task — single-paper lookups or full multi-paper sets.
/firecrawl-research-papers - Find and synthesize research     
papers, whitepapers, PDFs, technical reports, and academic sources
with Firecrawl Research, using semantic paper search,
related-paper expansion, and in-body verification. Use when the   
user wants a literature review, paper summary, research landscape,
or sourced synthesis from PDFs and scholarly/industry
publications.
/firecrawl-scrape      - Extract clean markdown from any URL, 
including JavaScript-rendered SPAs. Use this skill whenever the   
user provides a URL and wants its content, says "scrape", "grab", 
"fetch", "pull", "get the page", "extract from this URL", or "read
this webpage". Handles JS-rendered pages, multiple concurrent     
URLs, and returns LLM-optimized markdown. Use this instead of     
WebFetch for any webpage content extraction.
/firecrawl-search      - Web search with full page content    
extraction. Use this skill whenever the user asks to search the   
web, find articles, research a topic, look something up, find     
recent news, discover sources, or says "search for", "find me",   
"look up", "what are people saying about", or "find articles      
about". Returns real search results with optional full-page 
markdown — not just snippets. Provides capabilities beyond        
Claude's built-in WebSearch.
/firecrawl-seo-audit   - Audit a website's SEO with Firecrawl.
Use when the user asks for an SEO audit, metadata and heading     
review, sitemap/site-structure analysis, keyword opportunities,   
competitor SERP comparison, or prioritized search optimization    
recommendations.
/firecrawl-shop        - Research products across the web with
Firecrawl and produce a shopping recommendation or cart-ready     
summary. Use when the user wants to compare products, find the 
best option, evaluate reviews, respect budget/preferences, or shop
with a saved browser session.
/firecrawl-website-design-clone - Extract any website's design
system into an agent-ready DESIGN.md using Firecrawl scrape       
evidence. Use when the user wants colors, fonts, spacing,
components, layout patterns, or brand/UI guidance from a website  
so AI agents can create new websites, clone a look, or build pages
inspired by that design.
/firecrawl-workflows   - Run outcome-focused Firecrawl        
workflows that produce deliverables such as research reports, SEO 
audits, QA reports, lead lists, knowledge bases, website design   
systems, and other structured web-data artifacts. Use when the    
user wants Firecrawl to complete a business, marketing, product,  
or creative workflow rather than merely scrape a page or integrate
API calls into code.
/gif-search            - Search/download GIFs from Tenor via  
curl + jq.
/github-auth           - GitHub auth setup: HTTPS tokens, SSH 
keys, gh CLI login.
/github-code-review    - Review PRs: diffs, inline comments   
via gh or REST.
/github-issues         - Create, triage, label, assign GitHub 
issues via gh or REST.
/github-pr-workflow    - GitHub PR lifecycle: branch, commit, 
open, CI, merge.
/github-repo-management - Clone/create/fork repos; manage     
remotes, releases.
/google-places-lead-generation - Build and operate Google     
Places API workflows for business lead lookup by keyword and area,
with cost controls and secret-safe local setup.
/google-workspace      - Gmail, Calendar, Drive, Docs, Sheets 
via gws CLI or Python.
/heartmula             - HeartMuLa: Suno-like song generation 
from lyrics + tags.
/hermes-agent          - Configure, extend, or contribute to  
Hermes Agent.
/hermes-agent-skill-authoring - Author in-repo SKILL.md:      
frontmatter, validator, structure, and writing-quality principles.
/hermes-gateway-windows-operations - Operate and troubleshoot 
Hermes Agent messaging gateway on Windows: WhatsApp bridge 
pairing, manual vs login-start launch, hidden Node bridge windows,
and verification.
/hermes-messaging-gateway - Set up and troubleshoot Hermes    
Agent messaging gateway platforms, especially WhatsApp/WhatsApp   
Business pairing and gateway runtime on Windows.
/himalaya              - Himalaya CLI: IMAP/SMTP email from   
terminal.
/huggingface-hub       - HuggingFace hf CLI: 
search/download/upload models, datasets.
/humanizer             - Humanize text: strip AI-isms and add 
real voice.
/jupyter-live-kernel   - Iterative Python via live Jupyter    
kernel (hamelnb).
/lean-brand-playbook   - Build staged Lean Brand Playbooks for
new brands with user approval gates and exported DOCX/PDF
deliverables.
/lean-brand-playbook-builder - Build a launch-ready Lean Brand
Playbook for a new UMKM brand through a controlled, stage-by-stage
process with mandatory user verification and approval gates.      
/llama-cpp             - llama.cpp local GGUF inference + HF 
Hub model discovery.
/llm-wiki              - Karpathy's LLM Wiki: build/query     
interlinked markdown KB.
/manim-video           - Manim CE animations: 3Blue1Brown     
math/algo videos.
/maps                  - Geocode, POIs, routes, timezones via 
OpenStreetMap/OSRM.
/nano-pdf              - Edit PDF text/typos/titles via       
nano-pdf CLI (NL prompts).
/node-inspect-debugger - Debug Node.js via --inspect + Chrome 
DevTools Protocol CLI.
/notion                - Notion API + ntn CLI: pages,
databases, markdown, Workers.
/obsidian              - Read, search, create, and edit notes 
in the Obsidian vault.
/ocr-and-documents     - Extract text from PDFs/scans
(pymupdf, marker-pdf).
/opencode              - Delegate coding to OpenCode CLI      
(features, PR review).
/openhue               - Control Philips Hue lights, scenes,  
rooms via OpenHue CLI.
/p5js                  - p5.js sketches: gen art, shaders,    
interactive, 3D.
/petdex                - Install and select animated petdex   
mascots for Hermes.
/plan                  - Plan mode: write an actionable       
markdown plan to .hermes/plans/, no execution. Bite-sized tasks,  
exact paths, complete code.
/polymarket            - Query Polymarket: markets, prices,   
orderbooks, history.
/popular-web-designs   - 54 real design systems (Stripe,      
Linear, Vercel) as HTML/CSS.
/powerpoint            - Create, read, edit .pptx decks,      
slides, notes, templates.
/pretext               - Use when building creative browser 
demos with @chenglou/pretext — DOM-free text layout for ASCII art,
typographic flow around obstacles, text-as-geometry games, kinetic
typography, and text-powered generative art. Produces single-file 
HTML demos by default.
/remotion-video        - Use when working with Remotion       
through Hermes Agent: planning, scaffolding, implementing,        
rendering, debugging, or reviewing programmatic React/TypeScript  
video projects, including AI-assisted video templates and
batch-generated marketing/property videos.
/requesting-code-review - Pre-commit review: security scan, 
quality gates, auto-fix.
/safe-local-audits     - Use when inspecting a user's local   
machine, workspace, folder structure, installed tools, OS details,
or project-like directories without making changes. Emphasizes    
read-only enumeration, privacy boundaries, explicit command       
reporting, and confirmation before risky actions.
/safe-local-operations - Run local environment audits and     
configuration changes safely: read-only discovery first, explicit 
confirmation before side effects, secret-aware output.
/segment-anything-model - SAM: zero-shot image segmentation   
via points, boxes, masks.
/simplify-code         - Parallel 3-agent cleanup of recent   
code changes.
/sketch                - Throwaway HTML mockups: 2-3 design   
variants to compare.
/songsee               - Audio spectrograms/features (mel,    
chroma, MFCC) via CLI.
/songwriting-and-ai-music - Songwriting craft and Suno AI     
music prompts.
/spike                 - Throwaway experiments to validate an 
idea before build.
/static-site-handoff-review - Review static website changes   
handed off by another agent before visual review, merge, or       
deployment.
/static-site-migration-review - Review and hand off static    
marketing/portfolio site migrations to Next.js/Tailwind,
especially when an external coding agent produced the
implementation.
/systematic-debugging  - 4-phase root cause debugging:        
understand bugs before fixing.
/teams-meeting-pipeline - Operate the Teams meeting summary   
pipeline via Hermes CLI — summarize meetings, inspect pipeline    
status, replay jobs, manage Microsoft Graph subscriptions.        
/test-driven-development - TDD: enforce RED-GREEN-REFACTOR,   
tests before code.
/touchdesigner-mcp     - Control a running TouchDesigner      
instance via twozero MCP — create operators, set parameters, wire 
connections, execute Python, build real-time visuals. 36 native   
tools.
/vercel-deployment-debugging - Debug and fix Vercel 
deployment/domain issues for web projects, especially `Ready`     
deployments that return platform-level 404s.
/weights-and-biases    - W&B: log ML experiments, sweeps,     
model registry, dashboards.
/youtube-content       - YouTube transcripts to summaries,    
threads, blogs.
/yuanbao               - Yuanbao (元宝) groups: @mention      
users, query info/members.

Tip: Just type your message to chat with Hermes!
Multi-line: Alt+Enter for a new line
Draft editor: Ctrl+G (Alt+G in VSCode/Cursor)
Paste image: Alt+V (or /paste)
```
