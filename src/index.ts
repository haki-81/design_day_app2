import { getConfigFromEnv } from "./config/env";
import { createApp } from "./app";

const config = getConfigFromEnv();
const app = createApp();

app.listen(config.port, () => {
  console.log(`Design Day App 2.0 running on http://localhost:${config.port}`);
});
