# Glosarium Lengkap Agentic AI, Hermes Agent, dan Implementasi Website Modern

Dibuat: 07/07/2026 15:55 WIB

## Pendahuluan

Dokumen ini berisi glosarium ringkas untuk membantu memahami istilah penting seputar Agentic AI, Hermes Agent, pengembangan website, Git, GitHub, Next.js, Vercel, deployment, API, database, keamanan, DevOps, dan ekosistem software modern. Tujuannya adalah sebagai referensi pengetahuan pribadi yang mudah dibaca bertahap.

## Cara Membaca

- Istilah dikelompokkan berdasarkan klasifikasi/topik.
- Di dalam setiap klasifikasi, istilah diurutkan menurut abjad.
- Definisi dibuat ringkas agar mudah dipahami dan cepat dicari ulang.
- Beberapa istilah tetap menggunakan bahasa Inggris karena merupakan istilah umum dalam industri teknologi.

## Ringkasan Kategori

- A. Konsep Dasar AI dan Agentic AI (23 istilah)
- B. Hermes Agent dan Sistem AI Assistant (18 istilah)
- C. Dasar-Dasar Website (14 istilah)
- D. Framework, Library, dan Ekosistem JavaScript (16 istilah)
- E. Next.js dan Arsitektur Aplikasi Web Modern (17 istilah)
- F. Git dan Version Control (19 istilah)
- G. GitHub dan Kolaborasi Kode (15 istilah)
- H. Deployment, Hosting, dan Vercel (19 istilah)
- I. Domain, DNS, dan SSL (16 istilah)
- J. API dan Integrasi Sistem (18 istilah)
- K. Database dan Penyimpanan Data (16 istilah)
- L. Environment, Config, dan Secret (12 istilah)
- M. Testing, Debugging, dan Error Handling (15 istilah)
- N. Keamanan Website dan Aplikasi (16 istilah)
- O. DevOps dan Operasional Website (14 istilah)
- P. UI, UX, dan Desain Website (12 istilah)
- Q. SEO dan Performa Website (14 istilah)
- R. Cloud, Server, dan Infrastruktur (11 istilah)
- S. Istilah Umum Software Engineering (11 istilah)

**Total istilah:** 296

---

## Glosarium Berdasarkan Klasifikasi

## A. Konsep Dasar AI dan Agentic AI

### Agent
Entitas perangkat lunak yang dapat menerima tujuan, memproses konteks, lalu menjalankan tindakan untuk membantu menyelesaikan tugas.

### Agent Loop
Siklus kerja agent yang biasanya mencakup memahami instruksi, memilih tindakan, menggunakan alat, membaca hasil, lalu melanjutkan sampai tugas selesai.

### Agentic AI
Sistem AI yang mampu bekerja lebih mandiri dengan merencanakan langkah, menggunakan alat, dan menyesuaikan tindakan berdasarkan hasil.

### AI
Kecerdasan buatan; teknologi yang memungkinkan komputer melakukan tugas yang biasanya membutuhkan kemampuan manusia seperti memahami bahasa, mengenali pola, atau mengambil keputusan.

### AI Assistant
Asisten berbasis AI yang membantu pengguna menjawab pertanyaan, membuat konten, menganalisis data, atau menjalankan tindakan tertentu.

### Alignment
Upaya agar perilaku AI selaras dengan tujuan, nilai, instruksi, dan batasan yang diinginkan manusia.

### Autonomy
Tingkat kemandirian sistem AI dalam mengambil langkah atau keputusan tanpa arahan rinci dari pengguna di setiap tahap.

### Chain of Thought
Proses penalaran bertahap yang digunakan model untuk memecahkan masalah kompleks, meskipun tidak selalu ditampilkan kepada pengguna.

### Context
Informasi latar yang diberikan kepada AI agar respons atau tindakannya relevan dengan kebutuhan pengguna.

### Context Window
Batas jumlah informasi yang dapat diproses model dalam satu sesi percakapan atau permintaan.

### Goal
Tujuan akhir yang ingin dicapai oleh pengguna atau agent dalam suatu tugas.

### Hallucination
Kondisi ketika AI menghasilkan informasi yang terdengar meyakinkan tetapi tidak akurat atau tidak memiliki dasar yang benar.

### Inference
Proses model AI menghasilkan jawaban atau prediksi berdasarkan input yang diberikan.

### LLM
Large Language Model; model AI berskala besar yang dilatih untuk memahami dan menghasilkan teks manusia.

### Model
Sistem komputasi hasil pelatihan data yang digunakan untuk membuat prediksi, memahami input, atau menghasilkan output.

### Multimodal AI
AI yang dapat memproses lebih dari satu jenis input, misalnya teks, gambar, audio, video, atau kombinasi di antaranya.

### Planning
Kemampuan agent menyusun urutan langkah untuk mencapai tujuan tertentu.

### Prompt
Instruksi atau input yang diberikan kepada AI untuk memandu respons atau tindakan yang dihasilkan.

### Prompt Engineering
Teknik menyusun instruksi agar AI menghasilkan respons yang lebih tepat, konsisten, dan berguna.

### RAG
Retrieval-Augmented Generation; metode yang menggabungkan pencarian informasi eksternal dengan kemampuan generasi teks model AI.

### Reasoning
Kemampuan AI untuk menghubungkan informasi, menarik kesimpulan, dan memilih langkah yang masuk akal.

### Tool Calling
Kemampuan AI memanggil alat eksternal seperti terminal, pencarian web, pembaca file, API, atau database untuk menyelesaikan tugas.

### Workflow
Rangkaian langkah kerja yang disusun untuk mencapai hasil tertentu secara terstruktur.

## B. Hermes Agent dan Sistem AI Assistant

### ACP
Agent Client Protocol; protokol untuk menghubungkan agent dengan lingkungan kerja seperti IDE atau alat pengembangan.

### Auxiliary Model
Model tambahan yang digunakan untuk tugas pendukung seperti vision, kompresi konteks, atau pemrosesan khusus lain.

### Checkpoint
Titik simpan kondisi tertentu yang memungkinkan perubahan atau proses dikembalikan ke keadaan sebelumnya.

### Compression
Proses meringkas konteks percakapan agar tetap muat dalam batas context window.

### Cron Job
Tugas terjadwal yang dijalankan otomatis pada waktu atau interval tertentu.

### Gateway
Lapisan penghubung yang memungkinkan Hermes Agent berinteraksi melalui platform pesan seperti WhatsApp, Telegram, Discord, Slack, atau email.

### Hermes Agent
Framework AI agent open-source dari Nous Research yang dapat berjalan di terminal, desktop app, platform pesan, dan IDE dengan dukungan tool calling, memory, skills, dan multi-platform gateway.

### MCP
Model Context Protocol; standar integrasi yang memungkinkan agent terhubung dengan server alat atau sumber data eksternal.

### Memory
Penyimpanan fakta penting yang dapat digunakan kembali oleh AI pada sesi berikutnya agar tidak perlu selalu diulang oleh pengguna.

### Plugin
Komponen tambahan yang memperluas kemampuan aplikasi atau agent tanpa mengubah inti sistem secara langsung.

### Profile
Konfigurasi Hermes yang terpisah, biasanya berisi pengaturan, session, skills, memory, dan plugin masing-masing.

### Session
Satu rangkaian percakapan atau interaksi antara pengguna dan agent.

### Skill
Dokumen prosedural yang berisi pengetahuan atau langkah kerja reusable agar agent dapat melakukan jenis tugas tertentu dengan lebih konsisten.

### Slash Command
Perintah singkat yang diawali garis miring, misalnya /help atau /model, untuk mengontrol sesi atau fitur agent.

### Subagent
Agent tambahan yang dijalankan untuk mengerjakan sub-tugas secara terpisah dari agent utama.

### Tool
Kemampuan eksternal yang dapat dipakai agent, seperti membaca file, menjalankan terminal, mencari web, membuat gambar, atau mengatur cron job.

### Toolset
Kelompok tools yang diaktifkan untuk jenis tugas atau platform tertentu.

## C. Dasar-Dasar Website

### Backend
Bagian sistem yang berjalan di server dan menangani logika aplikasi, database, autentikasi, dan API.

### Browser
Aplikasi untuk membuka dan menampilkan halaman web, seperti Chrome, Edge, Safari, atau Firefox.

### CSS
Cascading Style Sheets; bahasa untuk mengatur tampilan visual halaman web seperti warna, ukuran, layout, dan animasi.

### Dynamic Website
Website yang kontennya dapat berubah berdasarkan data, pengguna, waktu, atau interaksi tertentu.

### Frontend
Bagian website yang dilihat dan digunakan langsung oleh pengunjung melalui browser.

### Full-stack
Pendekatan pengembangan yang mencakup frontend dan backend sekaligus.

### HTML
HyperText Markup Language; bahasa markup utama untuk menyusun struktur halaman web.

### JavaScript
Bahasa pemrograman utama di web untuk membuat halaman menjadi interaktif dan dinamis.

### Landing Page
Halaman web yang dirancang khusus untuk mengarahkan pengunjung melakukan tindakan tertentu, seperti mendaftar atau menghubungi.

### Responsive Design
Desain website yang menyesuaikan tampilan dengan ukuran layar perangkat seperti desktop, tablet, dan ponsel.

### Static Website
Website yang kontennya relatif tetap dan tidak banyak berubah berdasarkan interaksi pengguna atau data server.

### Web App
Aplikasi yang berjalan melalui browser dan memiliki fungsi interaktif seperti aplikasi desktop atau mobile.

### Web Page
Satu halaman individual dalam sebuah website.

### Website
Kumpulan halaman web yang saling terhubung dan dapat diakses melalui internet atau jaringan tertentu.

## D. Framework, Library, dan Ekosistem JavaScript

### Bundler
Alat yang menggabungkan dan mengoptimalkan file kode, aset, dan dependency agar siap dijalankan di browser atau server.

### Component
Bagian UI atau logika yang dapat digunakan ulang dalam aplikasi web modern.

### Dependency
Paket, library, atau modul eksternal yang dibutuhkan proyek agar dapat berjalan.

### Framework
Kerangka kerja yang menyediakan struktur, aturan, dan alat untuk membangun aplikasi dengan lebih cepat dan konsisten.

### Library
Kumpulan fungsi atau komponen siap pakai yang membantu developer menyelesaikan tugas tertentu.

### Module
Bagian kode yang dipisahkan agar dapat diimpor, digunakan ulang, dan dikelola dengan lebih rapi.

### Next.js
Framework berbasis React untuk membangun aplikasi web modern dengan routing, rendering, API route, dan deployment yang terintegrasi.

### Node.js
Runtime JavaScript yang memungkinkan kode JavaScript berjalan di luar browser, terutama di server dan alat pengembangan.

### npm
Package manager bawaan ekosistem Node.js untuk menginstal dan mengelola dependency proyek.

### Package
Unit distribusi kode yang dapat dipasang ke proyek melalui package manager.

### Package Manager
Alat untuk menginstal, memperbarui, dan mengelola dependency, seperti npm, pnpm, yarn, atau bun.

### pnpm
Package manager JavaScript yang efisien dalam penggunaan ruang penyimpanan dan populer untuk proyek modern.

### React
Library JavaScript untuk membangun antarmuka pengguna berbasis komponen.

### Runtime
Lingkungan tempat kode dijalankan, seperti browser, Node.js, serverless, atau edge runtime.

### TypeScript
Superset JavaScript yang menambahkan tipe data statis untuk membantu membuat kode lebih aman dan mudah dirawat.

### Vite
Build tool modern yang cepat untuk proyek frontend berbasis JavaScript atau TypeScript.

## E. Next.js dan Arsitektur Aplikasi Web Modern

### API Route
Endpoint API yang dibuat langsung di dalam aplikasi Next.js untuk menangani request backend sederhana.

### App Router
Sistem routing modern di Next.js yang menggunakan folder app dan mendukung layout, server component, serta route handler.

### Build
Proses mengubah kode sumber menjadi versi yang siap dijalankan atau dideploy.

### Client Component
Komponen React di Next.js yang berjalan di browser dan dapat menggunakan state, event handler, atau efek interaktif.

### Dynamic Route
Rute halaman yang menggunakan parameter dinamis, misalnya slug atau ID.

### Hydration
Proses ketika HTML yang sudah dirender diberi kemampuan interaktif oleh JavaScript di browser.

### ISR
Incremental Static Regeneration; teknik memperbarui halaman statis secara berkala tanpa membangun ulang seluruh website.

### Layout
Komponen struktur tampilan yang membungkus halaman, misalnya header, sidebar, dan footer.

### Metadata
Informasi halaman seperti title, description, dan data SEO lain yang dibaca browser atau mesin pencari.

### Middleware
Kode yang berjalan di antara request dan response untuk menangani logika seperti redirect, autentikasi, atau filter.

### Page
File atau komponen yang mewakili halaman tertentu dalam aplikasi Next.js.

### Pre-rendering
Proses menghasilkan HTML sebelum halaman dikirim ke browser agar loading lebih cepat dan SEO lebih baik.

### Route Handler
Fungsi di Next.js App Router untuk menangani request HTTP seperti GET, POST, PUT, atau DELETE.

### Routing
Mekanisme yang menentukan halaman atau endpoint mana yang dijalankan berdasarkan URL.

### Server Component
Komponen React di Next.js yang dirender di server dan tidak mengirim JavaScript interaktif ke browser secara default.

### SSG
Static Site Generation; metode membuat halaman HTML statis saat build.

### SSR
Server-Side Rendering; metode merender halaman di server setiap kali ada request.

## F. Git dan Version Control

### Branch
Cabang kerja di Git yang memungkinkan perubahan dikembangkan terpisah dari cabang utama.

### Checkout
Perintah untuk berpindah branch, commit, atau kondisi tertentu dalam riwayat Git.

### Clone
Proses menyalin repository dari sumber remote ke komputer lokal.

### Commit
Catatan perubahan di Git yang menyimpan snapshot kode pada waktu tertentu.

### Conflict
Benturan perubahan ketika Git tidak dapat otomatis menggabungkan perbedaan dari dua sumber.

### Diff
Perbandingan perubahan antara dua versi file atau commit.

### Fetch
Mengambil informasi terbaru dari remote repository tanpa langsung menggabungkannya ke branch lokal.

### Git
Sistem version control untuk mencatat, mengelola, dan melacak perubahan file dalam proyek.

### Gitignore
File yang menentukan file atau folder mana yang tidak perlu dilacak oleh Git.

### Main Branch
Branch utama repository, sering bernama main atau master, yang biasanya berisi versi stabil.

### Merge
Proses menggabungkan perubahan dari satu branch ke branch lain.

### Pull
Mengambil perubahan dari remote repository lalu menggabungkannya ke branch lokal.

### Push
Mengirim commit dari repository lokal ke remote repository.

### Rebase
Teknik memindahkan basis commit ke titik riwayat lain agar riwayat terlihat lebih linear.

### Remote
Alamat repository eksternal yang terhubung dengan repository lokal.

### Repo
Singkatan dari repository.

### Repository
Tempat penyimpanan proyek yang dilacak oleh Git, termasuk file dan riwayat perubahannya.

### Staging Area
Area sementara untuk memilih perubahan mana yang akan dimasukkan ke commit berikutnya.

### Version Control
Sistem untuk mencatat dan mengelola perubahan file dari waktu ke waktu.

## G. GitHub dan Kolaborasi Kode

### Actions
Fitur GitHub untuk menjalankan workflow otomatis seperti testing, build, dan deployment.

### Branch Protection
Aturan GitHub untuk melindungi branch penting agar tidak sembarang diubah atau di-merge.

### CI/CD
Continuous Integration dan Continuous Delivery/Deployment; praktik otomatisasi build, test, dan rilis aplikasi.

### Code Review
Proses memeriksa perubahan kode untuk menemukan masalah, meningkatkan kualitas, dan berbagi pengetahuan.

### Fork
Salinan repository milik orang lain ke akun sendiri untuk dikembangkan secara terpisah.

### GitHub
Platform hosting repository Git untuk kolaborasi kode, issue tracking, pull request, automation, dan dokumentasi proyek.

### GitHub CLI
Alat command-line bernama gh untuk mengelola GitHub dari terminal.

### Issue
Catatan tugas, bug, ide, atau diskusi yang dilacak dalam repository GitHub.

### Label
Penanda pada issue atau pull request untuk mengelompokkan jenis, prioritas, atau status pekerjaan.

### Pull Request
Permintaan untuk meninjau dan menggabungkan perubahan dari satu branch ke branch lain.

### README
Dokumen utama repository yang biasanya menjelaskan tujuan proyek, cara instalasi, dan cara penggunaan.

### Release
Versi resmi proyek yang dipublikasikan pada titik tertentu.

### Remote Repository
Repository yang berada di layanan eksternal seperti GitHub dan dapat disinkronkan dengan repository lokal.

### Tag
Penanda permanen pada commit tertentu, sering digunakan untuk versi rilis.

### Workflow
Rangkaian proses otomatis di GitHub Actions yang dipicu oleh event tertentu.

## H. Deployment, Hosting, dan Vercel

### Analytics
Pengumpulan dan analisis data penggunaan website seperti jumlah pengunjung, halaman populer, dan performa.

### Build Command
Perintah yang dijalankan platform hosting untuk membangun aplikasi sebelum dideploy.

### Build Log
Catatan proses build yang menunjukkan langkah, peringatan, atau error saat aplikasi disiapkan.

### CDN
Content Delivery Network; jaringan server global untuk menyajikan konten lebih cepat ke pengguna berdasarkan lokasi terdekat.

### Deploy
Proses menerbitkan aplikasi atau website agar dapat diakses pengguna.

### Deployment
Hasil atau instance dari proses deploy pada waktu tertentu.

### Edge Function
Fungsi serverless yang berjalan di lokasi edge network agar respons lebih dekat dengan pengguna.

### Hosting
Layanan penyimpanan dan penyajian website atau aplikasi agar bisa diakses melalui internet.

### Output Directory
Folder hasil build yang berisi file siap publish atau dijalankan oleh platform hosting.

### Preview Deployment
Deployment sementara untuk meninjau perubahan sebelum dipublikasikan ke production.

### Preview URL
Alamat sementara yang digunakan untuk mengakses preview deployment.

### Production
Lingkungan resmi yang digunakan pengguna akhir.

### Production URL
Alamat resmi website atau aplikasi yang digunakan publik.

### Project
Unit aplikasi di platform deployment seperti Vercel yang berisi konfigurasi build, domain, dan deployment.

### Rollback
Proses mengembalikan aplikasi ke versi deployment sebelumnya.

### Serverless Function
Fungsi backend yang berjalan sesuai permintaan tanpa perlu mengelola server secara langsung.

### Staging
Lingkungan uji yang menyerupai production tetapi belum digunakan publik.

### Uptime
Persentase waktu layanan tersedia dan dapat diakses.

### Vercel
Platform deployment modern yang populer untuk Next.js dan aplikasi web frontend, dengan fitur preview deployment, serverless function, edge network, dan integrasi GitHub.

## I. Domain, DNS, dan SSL

### A Record
Jenis DNS record yang mengarahkan domain ke alamat IP versi IPv4.

### AAAA Record
Jenis DNS record yang mengarahkan domain ke alamat IP versi IPv6.

### Certificate
Sertifikat digital yang membuktikan identitas website dan mendukung koneksi terenkripsi.

### CNAME
DNS record yang mengarahkan satu nama domain ke nama domain lain.

### DNS
Domain Name System; sistem yang menerjemahkan nama domain menjadi alamat server.

### Domain
Nama alamat website yang mudah dibaca manusia, seperti contoh.com.

### Domain Registrar
Layanan tempat membeli dan mengelola nama domain.

### HTTPS
Versi aman dari HTTP yang menggunakan enkripsi untuk melindungi komunikasi antara browser dan server.

### MX Record
DNS record yang menentukan server email untuk sebuah domain.

### Nameserver
Server yang menyimpan dan mengelola DNS record untuk domain.

### Propagation
Waktu penyebaran perubahan DNS ke berbagai server internet di seluruh dunia.

### Root Domain
Domain utama tanpa subdomain, misalnya contoh.com.

### SSL
Teknologi keamanan untuk mengenkripsi koneksi web; istilah ini sering dipakai walau implementasi modernnya adalah TLS.

### Subdomain
Bagian tambahan sebelum domain utama, misalnya blog.contoh.com.

### TLS
Transport Layer Security; protokol modern untuk mengenkripsi komunikasi internet.

### TXT Record
DNS record berbentuk teks yang sering digunakan untuk verifikasi domain, SPF, DKIM, atau konfigurasi layanan.

## J. API dan Integrasi Sistem

### API
Application Programming Interface; cara standar agar satu sistem dapat berkomunikasi dengan sistem lain.

### API Client
Aplikasi atau kode yang mengirim request ke API.

### API Key
Kode rahasia atau identitas akses yang digunakan untuk mengautentikasi penggunaan API.

### Authentication
Proses membuktikan identitas pengguna atau sistem.

### Authorization
Proses menentukan hak akses setelah identitas terbukti.

### Endpoint
Alamat spesifik pada API yang menerima request untuk fungsi tertentu.

### GraphQL
Bahasa query dan runtime API yang memungkinkan client meminta data secara lebih spesifik.

### HTTP Method
Jenis aksi request HTTP seperti GET, POST, PUT, PATCH, atau DELETE.

### JSON
Format data ringan berbasis teks yang umum digunakan untuk pertukaran data antar sistem.

### Payload
Isi data yang dikirim dalam request atau response.

### Rate Limit
Batas jumlah request yang boleh dilakukan dalam periode tertentu.

### Request
Permintaan yang dikirim client ke server atau API.

### Response
Jawaban yang dikirim server atau API setelah menerima request.

### REST API
Gaya arsitektur API yang menggunakan resource, URL, dan HTTP method untuk berkomunikasi.

### SDK
Software Development Kit; paket alat, library, dan dokumentasi untuk memudahkan integrasi layanan tertentu.

### Status Code
Kode angka HTTP yang menunjukkan hasil request, seperti 200, 404, atau 500.

### Token
String akses yang digunakan untuk autentikasi, otorisasi, atau sesi pengguna.

### Webhook
Mekanisme pengiriman data otomatis dari satu sistem ke sistem lain ketika event tertentu terjadi.

## K. Database dan Penyimpanan Data

### Backup
Salinan data yang disimpan untuk pemulihan jika terjadi kehilangan atau kerusakan.

### Column
Bagian vertikal dalam tabel database yang menyimpan jenis data tertentu.

### Database
Sistem penyimpanan data terstruktur yang dapat dicari, diubah, dan dikelola.

### Field
Unit data tertentu dalam record, sering digunakan sebagai istilah umum untuk kolom atau properti.

### Foreign Key
Kolom yang menghubungkan satu tabel dengan tabel lain berdasarkan primary key.

### Index
Struktur tambahan yang mempercepat pencarian data dalam database.

### Migration
Perubahan terstruktur pada skema database, seperti menambah tabel atau kolom.

### NoSQL
Jenis database non-relasional yang fleksibel dalam struktur data, seperti document, key-value, graph, atau wide-column.

### Primary Key
Kolom atau nilai unik yang mengidentifikasi setiap baris dalam tabel.

### Query
Permintaan untuk membaca, menambah, mengubah, atau menghapus data dalam database.

### Record
Satu entri data lengkap dalam tabel atau koleksi.

### Relational Database
Database yang menyimpan data dalam tabel saling berhubungan.

### Row
Baris dalam tabel database yang mewakili satu record.

### Schema
Struktur data yang mendefinisikan tabel, kolom, tipe data, dan relasi.

### SQL
Structured Query Language; bahasa standar untuk mengelola dan mengambil data dari database relasional.

### Table
Struktur database yang terdiri dari baris dan kolom untuk menyimpan data sejenis.

## L. Environment, Config, dan Secret

### Access Token
Token yang memberi akses sementara atau terbatas ke resource tertentu.

### Config
Pengaturan aplikasi yang menentukan perilaku sistem, koneksi, fitur, atau lingkungan.

### Credential
Informasi autentikasi seperti username, password, token, atau key.

### .env

### Environment
Lingkungan tempat aplikasi berjalan, misalnya development, staging, atau production.

Variabel konfigurasi yang disimpan di lingkungan sistem dan dibaca aplikasi saat berjalan.

### Feature Flag
Konfigurasi untuk mengaktifkan atau menonaktifkan fitur tanpa mengubah kode utama.

### Private Key
Kunci rahasia dalam kriptografi yang harus dijaga dan tidak dibagikan.

### Public Key
Kunci publik dalam kriptografi yang boleh dibagikan untuk verifikasi atau enkripsi.

### Scope
Batas izin yang melekat pada token atau credential.

### Secret
Data sensitif seperti password, token, private key, atau API key yang tidak boleh dipublikasikan.

### Secret Manager
Layanan atau alat untuk menyimpan, mengatur, dan mengakses secret secara aman.

## M. Testing, Debugging, dan Error Handling

### Assertion
Pernyataan dalam test yang memeriksa apakah hasil aktual sesuai dengan hasil yang diharapkan.

### Bug
Kesalahan dalam software yang menyebabkan perilaku tidak sesuai harapan.

### Console
Tempat menampilkan pesan, log, error, atau hasil eksekusi saat debugging.

### Debugging
Proses mencari, memahami, dan memperbaiki penyebab masalah pada software.

### End-to-End Test
Pengujian alur aplikasi dari awal hingga akhir seperti yang dilakukan pengguna nyata.

### Error
Kondisi gagal yang muncul saat program tidak dapat menjalankan sesuatu dengan benar.

### Exception
Gangguan runtime yang dapat ditangani oleh kode agar aplikasi tidak langsung berhenti.

### Integration Test
Pengujian untuk memastikan beberapa bagian sistem bekerja bersama dengan benar.

### Log
Catatan aktivitas atau kejadian sistem yang membantu pemantauan dan debugging.

### Regression
Munculnya kembali bug atau kerusakan fitur yang sebelumnya sudah berfungsi.

### Stack Trace
Jejak urutan fungsi yang menunjukkan lokasi dan jalur terjadinya error.

### Test Case
Skenario spesifik yang digunakan untuk memverifikasi perilaku aplikasi.

### Test Suite
Kumpulan test case yang dijalankan bersama.

### Testing
Proses memeriksa apakah software bekerja sesuai kebutuhan dan bebas dari masalah penting.

### Unit Test
Pengujian bagian kecil kode secara terisolasi, seperti fungsi atau komponen tertentu.

## N. Keamanan Website dan Aplikasi

### Access Control
Pengaturan siapa atau sistem mana yang boleh mengakses resource tertentu.

### Attack Surface
Keseluruhan titik masuk yang dapat dimanfaatkan penyerang untuk menyerang sistem.

### Brute Force
Metode serangan dengan mencoba banyak kombinasi password atau token secara berulang.

### CORS
Cross-Origin Resource Sharing; mekanisme browser yang mengatur izin request antar domain berbeda.

### CSRF
Cross-Site Request Forgery; serangan yang memaksa pengguna melakukan aksi tidak diinginkan pada situs tempat ia sudah login.

### Encryption
Proses mengubah data menjadi bentuk tidak terbaca agar hanya pihak berwenang yang dapat membacanya.

### Firewall
Sistem yang membatasi atau memfilter lalu lintas jaringan berdasarkan aturan keamanan.

### Hashing
Proses mengubah data menjadi nilai tetap satu arah, sering dipakai untuk menyimpan password secara aman.

### Malware
Software berbahaya yang dirancang untuk merusak, mencuri data, atau mengambil alih sistem.

### OAuth
Standar otorisasi yang memungkinkan aplikasi mengakses resource pengguna tanpa membagikan password.

### Patch
Perbaikan software yang dirilis untuk menutup bug, celah keamanan, atau masalah lain.

### Permission
Izin yang menentukan tindakan apa yang boleh dilakukan pengguna atau sistem.

### Phishing
Upaya menipu pengguna agar memberikan data sensitif melalui pesan, situs, atau tampilan palsu.

### Security
Praktik melindungi sistem, data, dan pengguna dari akses tidak sah, kerusakan, atau penyalahgunaan.

### Vulnerability
Kelemahan dalam sistem yang dapat dimanfaatkan untuk menyerang atau mengganggu layanan.

### XSS
Cross-Site Scripting; serangan yang menyisipkan script berbahaya ke halaman web yang dilihat pengguna.

## O. DevOps dan Operasional Website

### Alert
Notifikasi otomatis ketika terjadi kondisi penting seperti error, downtime, atau lonjakan penggunaan.

### Autoscaling
Kemampuan sistem menambah atau mengurangi kapasitas secara otomatis sesuai beban.

### Cache
Penyimpanan sementara untuk mempercepat akses data atau halaman yang sering digunakan.

### Deployment Pipeline
Rangkaian proses otomatis dari perubahan kode sampai aplikasi siap dirilis.

### DevOps
Pendekatan kerja yang menggabungkan pengembangan software dan operasional agar rilis lebih cepat, stabil, dan terukur.

### Incident
Kejadian gangguan layanan atau keamanan yang membutuhkan respons dan penanganan.

### Load Balancer
Komponen yang membagi lalu lintas ke beberapa server agar beban lebih merata dan layanan lebih stabil.

### Logging
Proses merekam kejadian sistem untuk analisis, audit, dan debugging.

### Monitoring
Proses mengamati kondisi sistem seperti performa, error, resource, dan ketersediaan.

### Observability
Kemampuan memahami kondisi internal sistem melalui log, metrik, trace, dan sinyal operasional lain.

### Performance
Ukuran seberapa cepat, stabil, dan efisien aplikasi merespons pengguna.

### Pipeline
Alur otomatis yang menjalankan tahapan seperti install, test, build, dan deploy.

### Scaling
Proses menambah kapasitas sistem agar mampu menangani lebih banyak pengguna atau request.

### SLA
Service Level Agreement; kesepakatan tingkat layanan seperti ketersediaan, waktu respons, atau target dukungan.

## P. UI, UX, dan Desain Website

### Accessibility
Praktik membuat website dapat digunakan oleh sebanyak mungkin orang, termasuk pengguna dengan disabilitas.

### Color Palette
Kumpulan warna yang digunakan secara konsisten dalam desain.

### CTA
Call To Action; elemen yang mendorong pengguna melakukan tindakan seperti daftar, beli, hubungi, atau unduh.

### Design System
Kumpulan aturan, komponen, warna, tipografi, dan pola desain yang menjaga konsistensi produk.

### Interaction Design
Desain cara pengguna berinteraksi dengan elemen, alur, dan respons sistem.

### Layout
Susunan visual elemen pada halaman.

### Navigation
Struktur dan elemen yang membantu pengguna berpindah antar halaman atau bagian website.

### Prototype
Versi simulasi desain atau aplikasi untuk menguji ide sebelum dibangun penuh.

### Typography
Pengaturan huruf, ukuran, jarak, dan gaya teks dalam desain.

### UI
User Interface; tampilan dan elemen visual yang digunakan pengguna untuk berinteraksi dengan sistem.

### UX
User Experience; pengalaman keseluruhan pengguna saat menggunakan website atau aplikasi.

### Wireframe
Sketsa struktur halaman yang menunjukkan tata letak utama tanpa detail visual final.

## Q. SEO dan Performa Website

### Alt Text
Deskripsi teks pada gambar yang membantu aksesibilitas dan mesin pencari memahami isi gambar.

### Canonical URL
URL utama yang dipilih untuk menghindari duplikasi konten di mesin pencari.

### Core Web Vitals
Metrik Google untuk menilai pengalaman pengguna, terutama kecepatan, responsivitas, dan stabilitas visual.

### Indexing
Proses mesin pencari menyimpan halaman website ke dalam indeks agar dapat muncul di hasil pencarian.

### Keyword
Kata atau frasa yang digunakan pengguna saat mencari informasi di mesin pencari.

### Lazy Loading
Teknik memuat gambar atau konten hanya saat dibutuhkan agar halaman lebih cepat.

### Lighthouse
Alat audit dari Google untuk menilai performa, aksesibilitas, SEO, dan praktik terbaik website.

### Meta Description
Ringkasan singkat halaman yang dapat muncul di hasil pencarian.

### Meta Title
Judul halaman yang dibaca browser dan mesin pencari.

### Page Speed
Kecepatan halaman dalam memuat dan merespons pengguna.

### Robots.txt
File yang memberi arahan kepada crawler mesin pencari tentang halaman mana yang boleh atau tidak boleh dirayapi.

### SEO
Search Engine Optimization; praktik mengoptimalkan website agar lebih mudah ditemukan di mesin pencari.

### Sitemap
Daftar URL website yang membantu mesin pencari memahami struktur situs.

### Structured Data
Format data terstruktur yang membantu mesin pencari memahami informasi halaman secara lebih detail.

## R. Cloud, Server, dan Infrastruktur

### Autoscaling
Kemampuan infrastruktur menyesuaikan kapasitas secara otomatis berdasarkan beban.

### Cloud
Layanan komputasi berbasis internet untuk menjalankan server, database, storage, dan aplikasi tanpa mengelola perangkat fisik sendiri.

### Container
Paket ringan yang berisi aplikasi dan dependencynya agar dapat berjalan konsisten di berbagai lingkungan.

### Docker
Platform populer untuk membuat, menjalankan, dan mengelola container.

### Edge Network
Jaringan server yang tersebar dekat pengguna akhir untuk mempercepat pengiriman konten atau fungsi.

### Kubernetes
Platform orkestrasi container untuk mengelola deployment, scaling, dan operasional aplikasi containerized.

### Load Balancer
Komponen yang membagi trafik ke beberapa server agar layanan tetap stabil.

### Region
Lokasi geografis pusat data cloud tempat resource dijalankan.

### Server
Komputer atau layanan yang menyediakan data, aplikasi, atau fungsi kepada client.

### Storage
Layanan penyimpanan file, objek, atau data dalam sistem lokal maupun cloud.

### Virtual Machine
Komputer virtual yang berjalan di atas infrastruktur fisik dan memiliki sistem operasi sendiri.

## S. Istilah Umum Software Engineering

### Architecture
Struktur besar sistem software, termasuk komponen, relasi, alur data, dan keputusan teknis utama.

### Changelog
Catatan perubahan antar versi software.

### Codebase
Kumpulan seluruh kode sumber dalam suatu proyek atau aplikasi.

### Documentation
Materi tertulis yang menjelaskan cara kerja, penggunaan, instalasi, atau desain sistem.

### License
Izin hukum yang mengatur bagaimana software boleh digunakan, dimodifikasi, atau didistribusikan.

### Open Source
Software yang kode sumbernya tersedia untuk dilihat, digunakan, dimodifikasi, atau dikembangkan oleh publik sesuai lisensi.

### Refactor
Proses merapikan atau memperbaiki struktur kode tanpa mengubah perilaku utama aplikasi.

### Release Version
Nomor atau penanda versi software yang dipublikasikan.

### Roadmap
Rencana pengembangan fitur, perbaikan, atau arah produk dalam periode tertentu.

### Technical Debt
Beban teknis akibat keputusan cepat atau tidak ideal yang perlu diperbaiki di masa depan.

### Version
Penanda edisi atau keadaan software pada titik tertentu.

---

## Indeks Alfabet Global

- **A Record** — Domain, DNS, dan SSL
- **AAAA Record** — Domain, DNS, dan SSL
- **Access Control** — Keamanan Website dan Aplikasi
- **Access Token** — Environment, Config, dan Secret
- **Accessibility** — UI, UX, dan Desain Website
- **ACP** — Hermes Agent dan Sistem AI Assistant
- **Actions** — GitHub dan Kolaborasi Kode
- **Agent** — Konsep Dasar AI dan Agentic AI
- **Agent Loop** — Konsep Dasar AI dan Agentic AI
- **Agentic AI** — Konsep Dasar AI dan Agentic AI
- **AI** — Konsep Dasar AI dan Agentic AI
- **AI Assistant** — Konsep Dasar AI dan Agentic AI
- **Alert** — DevOps dan Operasional Website
- **Alignment** — Konsep Dasar AI dan Agentic AI
- **Alt Text** — SEO dan Performa Website
- **Analytics** — Deployment, Hosting, dan Vercel
- **API** — API dan Integrasi Sistem
- **API Client** — API dan Integrasi Sistem
- **API Key** — API dan Integrasi Sistem
- **API Route** — Next.js dan Arsitektur Aplikasi Web Modern
- **App Router** — Next.js dan Arsitektur Aplikasi Web Modern
- **Architecture** — Istilah Umum Software Engineering
- **Assertion** — Testing, Debugging, dan Error Handling
- **Attack Surface** — Keamanan Website dan Aplikasi
- **Authentication** — API dan Integrasi Sistem
- **Authorization** — API dan Integrasi Sistem
- **Autonomy** — Konsep Dasar AI dan Agentic AI
- **Autoscaling** — DevOps dan Operasional Website
- **Autoscaling** — Cloud, Server, dan Infrastruktur
- **Auxiliary Model** — Hermes Agent dan Sistem AI Assistant
- **Backend** — Dasar-Dasar Website
- **Backup** — Database dan Penyimpanan Data
- **Branch** — Git dan Version Control
- **Branch Protection** — GitHub dan Kolaborasi Kode
- **Browser** — Dasar-Dasar Website
- **Brute Force** — Keamanan Website dan Aplikasi
- **Bug** — Testing, Debugging, dan Error Handling
- **Build** — Next.js dan Arsitektur Aplikasi Web Modern
- **Build Command** — Deployment, Hosting, dan Vercel
- **Build Log** — Deployment, Hosting, dan Vercel
- **Bundler** — Framework, Library, dan Ekosistem JavaScript
- **Cache** — DevOps dan Operasional Website
- **Canonical URL** — SEO dan Performa Website
- **CDN** — Deployment, Hosting, dan Vercel
- **Certificate** — Domain, DNS, dan SSL
- **Chain of Thought** — Konsep Dasar AI dan Agentic AI
- **Changelog** — Istilah Umum Software Engineering
- **Checkout** — Git dan Version Control
- **Checkpoint** — Hermes Agent dan Sistem AI Assistant
- **CI/CD** — GitHub dan Kolaborasi Kode
- **Client Component** — Next.js dan Arsitektur Aplikasi Web Modern
- **Clone** — Git dan Version Control
- **Cloud** — Cloud, Server, dan Infrastruktur
- **CNAME** — Domain, DNS, dan SSL
- **Code Review** — GitHub dan Kolaborasi Kode
- **Codebase** — Istilah Umum Software Engineering
- **Color Palette** — UI, UX, dan Desain Website
- **Column** — Database dan Penyimpanan Data
- **Commit** — Git dan Version Control
- **Component** — Framework, Library, dan Ekosistem JavaScript
- **Compression** — Hermes Agent dan Sistem AI Assistant
- **Config** — Environment, Config, dan Secret
- **Conflict** — Git dan Version Control
- **Console** — Testing, Debugging, dan Error Handling
- **Container** — Cloud, Server, dan Infrastruktur
- **Context** — Konsep Dasar AI dan Agentic AI
- **Context Window** — Konsep Dasar AI dan Agentic AI
- **Core Web Vitals** — SEO dan Performa Website
- **CORS** — Keamanan Website dan Aplikasi
- **Credential** — Environment, Config, dan Secret
- **Cron Job** — Hermes Agent dan Sistem AI Assistant
- **CSRF** — Keamanan Website dan Aplikasi
- **CSS** — Dasar-Dasar Website
- **CTA** — UI, UX, dan Desain Website
- **Database** — Database dan Penyimpanan Data
- **Debugging** — Testing, Debugging, dan Error Handling
- **Dependency** — Framework, Library, dan Ekosistem JavaScript
- **Deploy** — Deployment, Hosting, dan Vercel
- **Deployment** — Deployment, Hosting, dan Vercel
- **Deployment Pipeline** — DevOps dan Operasional Website
- **Design System** — UI, UX, dan Desain Website
- **DevOps** — DevOps dan Operasional Website
- **Diff** — Git dan Version Control
- **DNS** — Domain, DNS, dan SSL
- **Docker** — Cloud, Server, dan Infrastruktur
- **Documentation** — Istilah Umum Software Engineering
- **Domain** — Domain, DNS, dan SSL
- **Domain Registrar** — Domain, DNS, dan SSL
- **Dynamic Route** — Next.js dan Arsitektur Aplikasi Web Modern
- **Dynamic Website** — Dasar-Dasar Website
- **Edge Function** — Deployment, Hosting, dan Vercel
- **Edge Network** — Cloud, Server, dan Infrastruktur
- **Encryption** — Keamanan Website dan Aplikasi
- **End-to-End Test** — Testing, Debugging, dan Error Handling
- **Endpoint** — API dan Integrasi Sistem
- **.env** — Environment, Config, dan Secret
- **Environment** — Environment, Config, dan Secret
- **Error** — Testing, Debugging, dan Error Handling
- **Exception** — Testing, Debugging, dan Error Handling
- **Feature Flag** — Environment, Config, dan Secret
- **Fetch** — Git dan Version Control
- **Field** — Database dan Penyimpanan Data
- **Firewall** — Keamanan Website dan Aplikasi
- **Foreign Key** — Database dan Penyimpanan Data
- **Fork** — GitHub dan Kolaborasi Kode
- **Framework** — Framework, Library, dan Ekosistem JavaScript
- **Frontend** — Dasar-Dasar Website
- **Full-stack** — Dasar-Dasar Website
- **Gateway** — Hermes Agent dan Sistem AI Assistant
- **Git** — Git dan Version Control
- **GitHub** — GitHub dan Kolaborasi Kode
- **GitHub CLI** — GitHub dan Kolaborasi Kode
- **Gitignore** — Git dan Version Control
- **Goal** — Konsep Dasar AI dan Agentic AI
- **GraphQL** — API dan Integrasi Sistem
- **Hallucination** — Konsep Dasar AI dan Agentic AI
- **Hashing** — Keamanan Website dan Aplikasi
- **Hermes Agent** — Hermes Agent dan Sistem AI Assistant
- **Hosting** — Deployment, Hosting, dan Vercel
- **HTML** — Dasar-Dasar Website
- **HTTP Method** — API dan Integrasi Sistem
- **HTTPS** — Domain, DNS, dan SSL
- **Hydration** — Next.js dan Arsitektur Aplikasi Web Modern
- **Incident** — DevOps dan Operasional Website
- **Index** — Database dan Penyimpanan Data
- **Indexing** — SEO dan Performa Website
- **Inference** — Konsep Dasar AI dan Agentic AI
- **Integration Test** — Testing, Debugging, dan Error Handling
- **Interaction Design** — UI, UX, dan Desain Website
- **ISR** — Next.js dan Arsitektur Aplikasi Web Modern
- **Issue** — GitHub dan Kolaborasi Kode
- **JavaScript** — Dasar-Dasar Website
- **JSON** — API dan Integrasi Sistem
- **Keyword** — SEO dan Performa Website
- **Kubernetes** — Cloud, Server, dan Infrastruktur
- **Label** — GitHub dan Kolaborasi Kode
- **Landing Page** — Dasar-Dasar Website
- **Layout** — Next.js dan Arsitektur Aplikasi Web Modern
- **Layout** — UI, UX, dan Desain Website
- **Lazy Loading** — SEO dan Performa Website
- **Library** — Framework, Library, dan Ekosistem JavaScript
- **License** — Istilah Umum Software Engineering
- **Lighthouse** — SEO dan Performa Website
- **LLM** — Konsep Dasar AI dan Agentic AI
- **Load Balancer** — DevOps dan Operasional Website
- **Load Balancer** — Cloud, Server, dan Infrastruktur
- **Log** — Testing, Debugging, dan Error Handling
- **Logging** — DevOps dan Operasional Website
- **Main Branch** — Git dan Version Control
- **Malware** — Keamanan Website dan Aplikasi
- **MCP** — Hermes Agent dan Sistem AI Assistant
- **Memory** — Hermes Agent dan Sistem AI Assistant
- **Merge** — Git dan Version Control
- **Meta Description** — SEO dan Performa Website
- **Meta Title** — SEO dan Performa Website
- **Metadata** — Next.js dan Arsitektur Aplikasi Web Modern
- **Middleware** — Next.js dan Arsitektur Aplikasi Web Modern
- **Migration** — Database dan Penyimpanan Data
- **Model** — Konsep Dasar AI dan Agentic AI
- **Module** — Framework, Library, dan Ekosistem JavaScript
- **Monitoring** — DevOps dan Operasional Website
- **Multimodal AI** — Konsep Dasar AI dan Agentic AI
- **MX Record** — Domain, DNS, dan SSL
- **Nameserver** — Domain, DNS, dan SSL
- **Navigation** — UI, UX, dan Desain Website
- **Next.js** — Framework, Library, dan Ekosistem JavaScript
- **Node.js** — Framework, Library, dan Ekosistem JavaScript
- **NoSQL** — Database dan Penyimpanan Data
- **npm** — Framework, Library, dan Ekosistem JavaScript
- **OAuth** — Keamanan Website dan Aplikasi
- **Observability** — DevOps dan Operasional Website
- **Open Source** — Istilah Umum Software Engineering
- **Output Directory** — Deployment, Hosting, dan Vercel
- **Package** — Framework, Library, dan Ekosistem JavaScript
- **Package Manager** — Framework, Library, dan Ekosistem JavaScript
- **Page** — Next.js dan Arsitektur Aplikasi Web Modern
- **Page Speed** — SEO dan Performa Website
- **Patch** — Keamanan Website dan Aplikasi
- **Payload** — API dan Integrasi Sistem
- **Performance** — DevOps dan Operasional Website
- **Permission** — Keamanan Website dan Aplikasi
- **Phishing** — Keamanan Website dan Aplikasi
- **Pipeline** — DevOps dan Operasional Website
- **Planning** — Konsep Dasar AI dan Agentic AI
- **Plugin** — Hermes Agent dan Sistem AI Assistant
- **pnpm** — Framework, Library, dan Ekosistem JavaScript
- **Pre-rendering** — Next.js dan Arsitektur Aplikasi Web Modern
- **Preview Deployment** — Deployment, Hosting, dan Vercel
- **Preview URL** — Deployment, Hosting, dan Vercel
- **Primary Key** — Database dan Penyimpanan Data
- **Private Key** — Environment, Config, dan Secret
- **Production** — Deployment, Hosting, dan Vercel
- **Production URL** — Deployment, Hosting, dan Vercel
- **Profile** — Hermes Agent dan Sistem AI Assistant
- **Project** — Deployment, Hosting, dan Vercel
- **Prompt** — Konsep Dasar AI dan Agentic AI
- **Prompt Engineering** — Konsep Dasar AI dan Agentic AI
- **Propagation** — Domain, DNS, dan SSL
- **Prototype** — UI, UX, dan Desain Website
- **Public Key** — Environment, Config, dan Secret
- **Pull** — Git dan Version Control
- **Pull Request** — GitHub dan Kolaborasi Kode
- **Push** — Git dan Version Control
- **Query** — Database dan Penyimpanan Data
- **RAG** — Konsep Dasar AI dan Agentic AI
- **Rate Limit** — API dan Integrasi Sistem
- **React** — Framework, Library, dan Ekosistem JavaScript
- **README** — GitHub dan Kolaborasi Kode
- **Reasoning** — Konsep Dasar AI dan Agentic AI
- **Rebase** — Git dan Version Control
- **Record** — Database dan Penyimpanan Data
- **Refactor** — Istilah Umum Software Engineering
- **Region** — Cloud, Server, dan Infrastruktur
- **Regression** — Testing, Debugging, dan Error Handling
- **Relational Database** — Database dan Penyimpanan Data
- **Release** — GitHub dan Kolaborasi Kode
- **Release Version** — Istilah Umum Software Engineering
- **Remote** — Git dan Version Control
- **Remote Repository** — GitHub dan Kolaborasi Kode
- **Repo** — Git dan Version Control
- **Repository** — Git dan Version Control
- **Request** — API dan Integrasi Sistem
- **Response** — API dan Integrasi Sistem
- **Responsive Design** — Dasar-Dasar Website
- **REST API** — API dan Integrasi Sistem
- **Roadmap** — Istilah Umum Software Engineering
- **Robots.txt** — SEO dan Performa Website
- **Rollback** — Deployment, Hosting, dan Vercel
- **Root Domain** — Domain, DNS, dan SSL
- **Route Handler** — Next.js dan Arsitektur Aplikasi Web Modern
- **Routing** — Next.js dan Arsitektur Aplikasi Web Modern
- **Row** — Database dan Penyimpanan Data
- **Runtime** — Framework, Library, dan Ekosistem JavaScript
- **Scaling** — DevOps dan Operasional Website
- **Schema** — Database dan Penyimpanan Data
- **Scope** — Environment, Config, dan Secret
- **SDK** — API dan Integrasi Sistem
- **Secret** — Environment, Config, dan Secret
- **Secret Manager** — Environment, Config, dan Secret
- **Security** — Keamanan Website dan Aplikasi
- **SEO** — SEO dan Performa Website
- **Server** — Cloud, Server, dan Infrastruktur
- **Server Component** — Next.js dan Arsitektur Aplikasi Web Modern
- **Serverless Function** — Deployment, Hosting, dan Vercel
- **Session** — Hermes Agent dan Sistem AI Assistant
- **Sitemap** — SEO dan Performa Website
- **Skill** — Hermes Agent dan Sistem AI Assistant
- **SLA** — DevOps dan Operasional Website
- **Slash Command** — Hermes Agent dan Sistem AI Assistant
- **SQL** — Database dan Penyimpanan Data
- **SSG** — Next.js dan Arsitektur Aplikasi Web Modern
- **SSL** — Domain, DNS, dan SSL
- **SSR** — Next.js dan Arsitektur Aplikasi Web Modern
- **Stack Trace** — Testing, Debugging, dan Error Handling
- **Staging** — Deployment, Hosting, dan Vercel
- **Staging Area** — Git dan Version Control
- **Static Website** — Dasar-Dasar Website
- **Status Code** — API dan Integrasi Sistem
- **Storage** — Cloud, Server, dan Infrastruktur
- **Structured Data** — SEO dan Performa Website
- **Subagent** — Hermes Agent dan Sistem AI Assistant
- **Subdomain** — Domain, DNS, dan SSL
- **Table** — Database dan Penyimpanan Data
- **Tag** — GitHub dan Kolaborasi Kode
- **Technical Debt** — Istilah Umum Software Engineering
- **Test Case** — Testing, Debugging, dan Error Handling
- **Test Suite** — Testing, Debugging, dan Error Handling
- **Testing** — Testing, Debugging, dan Error Handling
- **TLS** — Domain, DNS, dan SSL
- **Token** — API dan Integrasi Sistem
- **Tool** — Hermes Agent dan Sistem AI Assistant
- **Tool Calling** — Konsep Dasar AI dan Agentic AI
- **Toolset** — Hermes Agent dan Sistem AI Assistant
- **TXT Record** — Domain, DNS, dan SSL
- **TypeScript** — Framework, Library, dan Ekosistem JavaScript
- **Typography** — UI, UX, dan Desain Website
- **UI** — UI, UX, dan Desain Website
- **Unit Test** — Testing, Debugging, dan Error Handling
- **Uptime** — Deployment, Hosting, dan Vercel
- **UX** — UI, UX, dan Desain Website
- **Vercel** — Deployment, Hosting, dan Vercel
- **Version** — Istilah Umum Software Engineering
- **Version Control** — Git dan Version Control
- **Virtual Machine** — Cloud, Server, dan Infrastruktur
- **Vite** — Framework, Library, dan Ekosistem JavaScript
- **Vulnerability** — Keamanan Website dan Aplikasi
- **Web App** — Dasar-Dasar Website
- **Web Page** — Dasar-Dasar Website
- **Webhook** — API dan Integrasi Sistem
- **Website** — Dasar-Dasar Website
- **Wireframe** — UI, UX, dan Desain Website
- **Workflow** — Konsep Dasar AI dan Agentic AI
- **Workflow** — GitHub dan Kolaborasi Kode
- **XSS** — Keamanan Website dan Aplikasi
- **asisten** — Hermes Agent dan Sistem AI Assistant
