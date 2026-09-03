import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AgentThinkModelsV1ResponseModelsItems3 = {
  id: "openai/gpt-oss-20b";
  name: string;
  provider: Record<string, unknown>;
};

export const agentThinkModelsV1ResponseModelsItems3Schema: Schema<AgentThinkModelsV1ResponseModelsItems3> =
  s.object<AgentThinkModelsV1ResponseModelsItems3>({
    id: s.literal("openai/gpt-oss-20b"),
    name: s.string(),
    provider: s.record(s.string(), s.unknown()),
  });
