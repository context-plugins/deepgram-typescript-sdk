import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** AWS Bedrock models (custom models accepted) */
export type AgentThinkModelsV1ResponseModelsItems4 = {
  /** The unique identifier of the AWS Bedrock model (any model string accepted for BYO LLMs) */
  id: string;
  /** The display name of the model */
  name: string;
  /** The provider of the model */
  provider: Record<string, unknown>;
};

export const agentThinkModelsV1ResponseModelsItems4Schema: Schema<AgentThinkModelsV1ResponseModelsItems4> =
  s.object<AgentThinkModelsV1ResponseModelsItems4>({
    id: s.string(),
    name: s.string(),
    provider: s.record(s.string(), s.unknown()),
  });
