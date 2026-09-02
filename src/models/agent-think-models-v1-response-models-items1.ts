import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  agentThinkModelsV1ResponseModelsItemsOneOf1IdSchema,
  type AgentThinkModelsV1ResponseModelsItemsOneOf1Id,
} from "./agent-think-models-v1-response-models-items-one-of1-id.js";

export type AgentThinkModelsV1ResponseModelsItems1 = {
  id: AgentThinkModelsV1ResponseModelsItemsOneOf1Id;
  name: string;
  provider: Record<string, unknown>;
};

export const agentThinkModelsV1ResponseModelsItems1Schema: Schema<AgentThinkModelsV1ResponseModelsItems1> =
  s.object<AgentThinkModelsV1ResponseModelsItems1>({
    id: agentThinkModelsV1ResponseModelsItemsOneOf1IdSchema,
    name: s.string(),
    provider: s.record(s.string(), s.unknown()),
  });
