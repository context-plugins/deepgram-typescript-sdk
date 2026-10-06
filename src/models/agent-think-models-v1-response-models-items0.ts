import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  agentThinkModelsV1ResponseModelsItemsOneOf0IdSchema,
  type AgentThinkModelsV1ResponseModelsItemsOneOf0Id,
} from "./agent-think-models-v1-response-models-items-one-of0-id.js";

/** OpenAI models */
export type AgentThinkModelsV1ResponseModelsItems0 = {
  /** The unique identifier of the OpenAI model */
  id: AgentThinkModelsV1ResponseModelsItemsOneOf0Id;
  /** The display name of the model */
  name: string;
  /** The provider of the model */
  provider: Record<string, unknown>;
};

export const agentThinkModelsV1ResponseModelsItems0Schema: Schema<AgentThinkModelsV1ResponseModelsItems0> =
  s.object<AgentThinkModelsV1ResponseModelsItems0>({
    id: agentThinkModelsV1ResponseModelsItemsOneOf0IdSchema,
    name: s.string(),
    provider: s.record(s.string(), s.unknown()),
  });
