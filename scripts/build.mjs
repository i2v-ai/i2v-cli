import { chmod, copyFile, mkdir, readFile } from 'node:fs/promises';

const source = new URL('../../../skills/i2v-models/scripts/i2v-cli.mjs', import.meta.url);
const directory = new URL('../bin/', import.meta.url);
const bin = new URL('i2v-cli.mjs', directory);
const manifest = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8'));
const cli = await readFile(source, 'utf8');

if (!cli.includes(`const VERSION = '${manifest.version}';`)) {
  throw new Error('The CLI npm and canonical script versions differ.');
}

await mkdir(directory, { recursive: true });
await copyFile(source, bin);
await chmod(bin, 0o755);
