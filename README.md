<p align="center">
  <a href="https://i2v.ai">
    <img src="https://i2v.ai/brand/folded-rabbit-light.png" alt="i2v.ai" width="96">
  </a>
</p>

<h1 align="center">i2v.ai CLI</h1>

<p align="center">
  Quote, submit, recover and download i2v.ai image and video tasks from the terminal.<br>
  Node.js 20 or newer · zero install via <code>npx</code> · USD ceiling on every paid task.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@i2v-ai/cli"><img alt="npm" src="https://img.shields.io/npm/v/@i2v-ai/cli?style=flat-square"></a>
  <a href="https://i2v.ai/cli"><img alt="Docs" src="https://img.shields.io/badge/docs-i2v.ai%2Fcli-6366f1?style=flat-square"></a>
  <a href="https://i2v.ai/api/mcp"><img alt="Remote MCP" src="https://img.shields.io/badge/MCP-i2v.ai%2Fapi%2Fmcp-0ea5e9?style=flat-square"></a>
  <a href="./LICENSE"><img alt="License" src="https://img.shields.io/badge/license-MIT-22c55e?style=flat-square"></a>
</p>

<br>

## Quick start

```bash
npx --yes @i2v-ai/cli list --type image --json
npx --yes @i2v-ai/cli price gpt-image-2
```

`list`, `doc` and `price` read the public catalog and need no API key. Install it globally for repeated use:

```bash
npm install --global @i2v-ai/cli
brew install i2v-ai/tap/i2v
```

## Generate with a budget

```bash
export I2V_API_KEY="YOUR_API_KEY"
i2v plan gpt-image-2 --input-file inputs.json
i2v run gpt-image-2 --input-file inputs.json --max-cost-usd 0.20 \
  --expected-revision REVISION --idempotency-key order-1234 --no-wait
i2v status TASK_ID --wait 120 --out ./result.png
```

- `plan` validates the inputs and returns the account quote plus the model revision.
- `run` submits only inside the approved USD ceiling and keeps the idempotency key you supply.
- `status --wait` retries HTTP 429, 502, 503 and 504 inside the same deadline, honoring `Retry-After`.
- `recover OPERATION_ID` looks up the original receipt when the submit response was lost.

## Commands

| Command | Purpose |
| --- | --- |
| `list` / `doc` / `price` | Public catalog, model documentation, USD rates |
| `plan` / `quote` | Validate inputs and quote the account reservation |
| `upload` | Upload and verify a local reference file |
| `run` | Submit with a ceiling, wait or return a receipt |
| `status` / `recover` | Continue a task or recover a lost submission |
| `balance` / `usage` | USD balance and settled usage |
| `doctor` | Check the CLI, API and MCP configuration |
| `mcp` | Start the local stdio MCP server |

Full reference: [i2v.ai/cli](https://i2v.ai/cli).

## For AI agents

- Machine-readable release manifest: <https://i2v.ai/cli/release.json>
- Agent index: <https://i2v.ai/llms.txt>
- Remote MCP server: <https://i2v.ai/api/mcp>
- Skills: [i2v-ai/i2v-skills](https://github.com/i2v-ai/i2v-skills)

## Related repositories

| Repository | Purpose |
| --- | --- |
| [i2v-sdk-js](https://github.com/i2v-ai/i2v-sdk-js) | TypeScript SDK |
| [i2v-sdk-python](https://github.com/i2v-ai/i2v-sdk-python) | Python SDK |
| [i2v-skills](https://github.com/i2v-ai/i2v-skills) | Agent Skills and plugin manifests |
| [i2v-mcp](https://github.com/i2v-ai/i2v-mcp) | Remote MCP metadata and registry publication |
| [generate-action](https://github.com/i2v-ai/generate-action) | GitHub Action |
| [i2v-api-examples](https://github.com/i2v-ai/i2v-api-examples) | Runnable API examples |
| [i2v-agent-tools](https://github.com/i2v-ai/i2v-agent-tools) | Ecosystem hub |

## License

MIT. See [LICENSE](./LICENSE).
