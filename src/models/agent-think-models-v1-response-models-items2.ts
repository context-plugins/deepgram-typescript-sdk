import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  agentThinkModelsV1ResponseModelsItemsOneOf2IdSchema,
  type AgentThinkModelsV1ResponseModelsItemsOneOf2Id,
} from "./agent-think-models-v1-response-models-items-one-of2-id.js";

export type AgentThinkModelsV1ResponseModelsItems2 = {
  id: AgentThinkModelsV1ResponseModelsItemsOneOf2Id;
  name: string;
  provider: Record<string, unknown>;
};

export const agentThinkModelsV1ResponseModelsItems2Schema: Schema<AgentThinkModelsV1ResponseModelsItems2> =
  s.object<AgentThinkModelsV1ResponseModelsItems2>({
    id: agentThinkModelsV1ResponseModelsItemsOneOf2IdSchema,
    name: s.string(),
    provider: s.record(s.string(), s.unknown()),
  });
