export interface PublicSafetyFinding {
  file: string;
  line: number;
  rule: string;
}

const RULES: ReadonlyArray<{ rule: string; pattern: RegExp }> = [
  { rule: 'private-key', pattern: /-----BEGIN (?:RSA |EC |OPENSSH |DSA )?PRIVATE KEY-----/i },
  { rule: 'provider-token', pattern: /\b(?:gh[opusr]_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,}|sk-[A-Za-z0-9]{20,}|xox[baprs]-[A-Za-z0-9-]{10,}|AIza[0-9A-Za-z_-]{30,}|AKIA[0-9A-Z]{16})\b/ },
  { rule: 'credential-url', pattern: /https?:\/\/[^\s/:@]+:[^\s/@]+@/i },
  { rule: 'credential-assignment', pattern: /\b(?:api[_-]?(?:key|token)|access[_-]?token|auth[_-]?token|client[_-]?secret|secret|password|passwd|allowed_users|home_channel)\b\s*[:=]\s*["']?[^\s"']{8,}/i },
  { rule: 'local-user-path', pattern: /(?:[A-Za-z]:\\Users\\[^\\\s]+|\/Users\/[^/\s]+|Documents[\\/]Yola)\b/i },
  { rule: 'private-workflow', pattern: /\b(?:Yola|Mas Dika|Andika Kusuma|Cyber Digital|Brighton Champion|ALLOWED_USERS|HOME_CHANNEL)\b/i },
  { rule: 'private-contact', pattern: /\b(?:\+?62|0)8\d{8,11}\b/ }
];

export function scanPublicText(text: string, file: string): PublicSafetyFinding[] {
  const findings: PublicSafetyFinding[] = [];
  const lines = text.split(/\r?\n/);
  for (const [index, line] of lines.entries()) {
    for (const { rule, pattern } of RULES) {
      pattern.lastIndex = 0;
      if (pattern.test(line)) findings.push({ file, line: index + 1, rule });
    }
  }
  return findings;
}
