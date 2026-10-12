/** Serialisasi JSON aman untuk disisipkan di dalam <script>: `<` diloloskan agar tidak menutup tag. */
export function jsonForScript(value: unknown): string {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}
