# i2v.ai CLI

Use Node.js 20 or newer. Start with `i2v list --type image --json` to read the public model catalog. To use your account, set `I2V_API_KEY` in the shell or configure it in your client's secret settings.

- `i2v plan MODEL --input-file inputs.json` checks the request and quotes its cost.
- `i2v run MODEL --input-file inputs.json --max-cost-usd APPROVED_USD --expected-revision REVISION --idempotency-key OPERATION_ID --no-wait` submits a task within the reviewed budget and returns its receipt.
- `i2v status TASK_ID --wait 120 --out result.png` continues an existing task and saves the result.
- `i2v recover OPERATION_ID` reads the receipt for the original operation.
- `i2v doctor --json` checks the installed CLI and the configured API and MCP connection.
- `i2v mcp` starts a local stdio MCP server. Set `I2V_WORKSPACE_DIR` for client access to explicitly requested project files.

Read the [CLI documentation](https://i2v.ai/cli) or the [MCP client guides](https://i2v.ai/docs/mcp).
