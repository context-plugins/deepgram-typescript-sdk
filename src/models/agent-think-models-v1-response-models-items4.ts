import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AgentThinkModelsV1ResponseModelsItems4 = {
  id: string;
  name: string;
  provider: Record<string, unknown>;
};

export const agentThinkModelsV1ResponseModelsItems4Schema: Schema<AgentThinkModelsV1ResponseModelsItems4> =
  s.object<AgentThinkModelsV1ResponseModelsItems4>({
    id: s.string(),
    name: s.string(),
    provider: s.record(s.string(), s.unknown()),
  });
