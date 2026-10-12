export type GroupId = 'ai-si' | 'alat-ai' | 'perangkat-lunak';

export interface CategoryDef {
  slug: string;
  title: string;
  description: string;
  group: GroupId;
}

export interface GroupDef {
  id: GroupId;
  title: string;
  description: string;
  /** Kelompok di luar inti AI/SI diberi catatan jelas pada tiap entri. */
  core: boolean;
}

export const GROUPS: GroupDef[] = [
  {
    id: 'ai-si',
    title: 'Kecerdasan buatan dan superintelligence',
    description: 'Inti ensiklopedia: dasar AI, AI agentik, jalan menuju AGI dan superintelligence (SI), serta keselamatan dan etikanya.',
    core: true
  },
  {
    id: 'alat-ai',
    title: 'Alat dan platform AI',
    description: 'Istilah yang melekat pada produk dan platform tertentu.',
    core: false
  },
  {
    id: 'perangkat-lunak',
    title: 'Pengembangan perangkat lunak',
    description: 'Istilah pendukung di luar inti AI: web, Git, deployment, basis data, keamanan, dan operasional.',
    core: false
  }
];

export const CATEGORIES: CategoryDef[] = [
  { slug: 'dasar-ai', title: 'Dasar-dasar AI', group: 'ai-si', description: 'Konsep pokok: model, LLM, inferensi, prompt, penalaran, dan batasannya.' },
  { slug: 'ai-agentik', title: 'AI agentik', group: 'ai-si', description: 'AI yang merencanakan, memakai alat, dan bertindak: agent, alur kerja, dan otonomi.' },
  { slug: 'menuju-si', title: 'Menuju superintelligence (SI)', group: 'ai-si', description: 'AGI, superintelligence (SI/ASI), ledakan kecerdasan, dan perdebatan tentang arah serta waktunya.' },
  { slug: 'keselamatan-etika', title: 'Keselamatan, etika, dan tata kelola', group: 'ai-si', description: 'Penyelarasan (alignment), risiko, bias, privasi, dan regulasi AI.' },
  { slug: 'hermes-agent', title: 'Hermes Agent dan asisten AI', group: 'alat-ai', description: 'Istilah seputar Hermes Agent dan sistem asisten AI.' },
  { slug: 'dasar-website', title: 'Dasar-dasar website', group: 'perangkat-lunak', description: 'HTML, browser, server, dan cara kerja web.' },
  { slug: 'javascript-ekosistem', title: 'JavaScript dan ekosistemnya', group: 'perangkat-lunak', description: 'Framework, library, dan alat di sekitar JavaScript.' },
  { slug: 'nextjs-web-modern', title: 'Next.js dan aplikasi web modern', group: 'perangkat-lunak', description: 'Arsitektur aplikasi web modern dengan Next.js.' },
  { slug: 'git', title: 'Git dan version control', group: 'perangkat-lunak', description: 'Mengelola riwayat dan perubahan kode.' },
  { slug: 'github', title: 'GitHub dan kolaborasi kode', group: 'perangkat-lunak', description: 'Pull request, issue, dan kerja sama tim.' },
  { slug: 'deployment-hosting', title: 'Deployment, hosting, dan Vercel', group: 'perangkat-lunak', description: 'Menerbitkan aplikasi ke internet.' },
  { slug: 'domain-dns-ssl', title: 'Domain, DNS, dan SSL', group: 'perangkat-lunak', description: 'Nama domain, resolusi DNS, dan sertifikat.' },
  { slug: 'api-integrasi', title: 'API dan integrasi sistem', group: 'perangkat-lunak', description: 'Menghubungkan sistem lewat API.' },
  { slug: 'database', title: 'Database dan penyimpanan data', group: 'perangkat-lunak', description: 'Basis data dan penyimpanan.' },
  { slug: 'env-config-secret', title: 'Environment, config, dan secret', group: 'perangkat-lunak', description: 'Konfigurasi dan pengelolaan rahasia.' },
  { slug: 'testing-debugging', title: 'Testing, debugging, dan error handling', group: 'perangkat-lunak', description: 'Menguji dan memperbaiki perangkat lunak.' },
  { slug: 'keamanan-web', title: 'Keamanan website dan aplikasi', group: 'perangkat-lunak', description: 'Ancaman dan pertahanan pada aplikasi web.' },
  { slug: 'devops', title: 'DevOps dan operasional', group: 'perangkat-lunak', description: 'CI/CD, pemantauan, dan operasional layanan.' },
  { slug: 'ui-ux', title: 'UI, UX, dan desain website', group: 'perangkat-lunak', description: 'Desain antarmuka dan pengalaman pengguna.' },
  { slug: 'seo-performa', title: 'SEO dan performa website', group: 'perangkat-lunak', description: 'Pencarian dan kecepatan situs.' },
  { slug: 'cloud-infrastruktur', title: 'Cloud, server, dan infrastruktur', group: 'perangkat-lunak', description: 'Komputasi awan dan infrastruktur.' },
  { slug: 'software-engineering', title: 'Istilah umum software engineering', group: 'perangkat-lunak', description: 'Praktik dan istilah umum rekayasa perangkat lunak.' }
];

export const CATEGORY_SLUGS = CATEGORIES.map((category) => category.slug) as [string, ...string[]];

export function getCategory(slug: string): CategoryDef | undefined {
  return CATEGORIES.find((category) => category.slug === slug);
}

export function getGroup(id: GroupId): GroupDef {
  return GROUPS.find((group) => group.id === id)!;
}

export function categoriesOfGroup(id: GroupId): CategoryDef[] {
  return CATEGORIES.filter((category) => category.group === id);
}

export type TermStatus = 'catatan' | 'ditinjau' | 'terverifikasi';

export const STATUS_LABELS: Record<TermStatus, { label: string; note: string }> = {
  catatan: { label: 'Catatan awal', note: 'Entri ini masih berupa catatan awal: belum ditinjau dan belum memiliki rujukan sumber.' },
  ditinjau: { label: 'Telah ditinjau', note: 'Isi entri ini telah ditinjau penyunting, tetapi belum seluruhnya bersumber primer.' },
  terverifikasi: { label: 'Terverifikasi', note: 'Klaim pada entri ini dirujuk ke sumber primer yang tercantum di bawah.' }
};

export const LEVEL_LABELS = { dasar: 'Dasar', menengah: 'Menengah', lanjut: 'Lanjut' } as const;
