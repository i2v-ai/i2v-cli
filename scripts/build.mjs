import { chmod, readFile } from 'node:fs/promises';

// The CLI script in bin/ is the canonical source. Release tooling copies it into
// the Agent Skill bundle, so this build step only checks the two stay aligned.
const bin = new URL('../bin/i2v-cli.mjs', import.meta.url);
const manifest = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8'));
const cli = await readFile(bin, 'utf8');

if (!cli.includes(`const VERSION = '${manifest.version}';`)) {
  throw new Error('bin/i2v-cli.mjs and package.json versions differ.');
}

await chmod(bin, 0o755);
