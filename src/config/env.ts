import { z } from "zod";

const EnvSchema = z.object({
  PORT: z.coerce.number().int().positive().default(3000),
});

export interface AppConfig {
  port: number;
}

export function getConfigFromEnv(env: NodeJS.ProcessEnv = process.env): AppConfig {
  const parsedEnv = EnvSchema.safeParse(env);

  if (!parsedEnv.success) {
    const messages = parsedEnv.error.issues
      .map((issue) => `${issue.path.join(".") || "env"}: ${issue.message}`)
      .join("; ");
    throw new Error(`Invalid environment configuration: ${messages}`);
  }

  return {
    port: parsedEnv.data.PORT,
  };
}
