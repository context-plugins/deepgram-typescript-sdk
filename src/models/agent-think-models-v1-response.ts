import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  agentThinkModelsV1ResponseModelsItemsSchema,
  type AgentThinkModelsV1ResponseModelsItems,
} from "./unions/agent-think-models-v1-response-models-items.js";

export type AgentThinkModelsV1Response = {
  models: AgentThinkModelsV1ResponseModelsItems[];
};

export const agentThinkModelsV1ResponseSchema: Schema<AgentThinkModelsV1Response> =
  s.object<AgentThinkModelsV1Response>({
    models: s.array(s.lazy(() => agentThinkModelsV1ResponseModelsItemsSchema)),
  });
