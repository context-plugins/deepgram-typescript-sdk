import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  agentThinkModelsV1ResponseModelsItemsOneOf3IdSchema,
  type AgentThinkModelsV1ResponseModelsItemsOneOf3Id,
} from "./agent-think-models-v1-response-models-items-one-of3-id.js";

export type AgentThinkModelsV1ResponseModelsItems3 = {
  id: AgentThinkModelsV1ResponseModelsItemsOneOf3Id;
  name: string;
  provider: Record<string, unknown>;
};

export const agentThinkModelsV1ResponseModelsItems3Schema: Schema<AgentThinkModelsV1ResponseModelsItems3> =
  s.object<AgentThinkModelsV1ResponseModelsItems3>({
    id: agentThinkModelsV1ResponseModelsItemsOneOf3IdSchema,
    name: s.string(),
    provider: s.record(s.string(), s.unknown()),
  });
