import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  agentThinkModelsV1ResponseModelsItems0Schema,
  type AgentThinkModelsV1ResponseModelsItems0,
} from "../agent-think-models-v1-response-models-items0.js";
import {
  agentThinkModelsV1ResponseModelsItems1Schema,
  type AgentThinkModelsV1ResponseModelsItems1,
} from "../agent-think-models-v1-response-models-items1.js";
import {
  agentThinkModelsV1ResponseModelsItems2Schema,
  type AgentThinkModelsV1ResponseModelsItems2,
} from "../agent-think-models-v1-response-models-items2.js";
import {
  agentThinkModelsV1ResponseModelsItems3Schema,
  type AgentThinkModelsV1ResponseModelsItems3,
} from "../agent-think-models-v1-response-models-items3.js";
import {
  agentThinkModelsV1ResponseModelsItems4Schema,
  type AgentThinkModelsV1ResponseModelsItems4,
} from "../agent-think-models-v1-response-models-items4.js";

export type AgentThinkModelsV1ResponseModelsItems =
  | AgentThinkModelsV1ResponseModelsItems0
  | AgentThinkModelsV1ResponseModelsItems1
  | AgentThinkModelsV1ResponseModelsItems2
  | AgentThinkModelsV1ResponseModelsItems3
  | AgentThinkModelsV1ResponseModelsItems4;

export const agentThinkModelsV1ResponseModelsItemsSchema: Schema<AgentThinkModelsV1ResponseModelsItems> =
  s.of<AgentThinkModelsV1ResponseModelsItems>(
    s.union([
      s.lazy(() => agentThinkModelsV1ResponseModelsItems0Schema),
      s.lazy(() => agentThinkModelsV1ResponseModelsItems1Schema),
      s.lazy(() => agentThinkModelsV1ResponseModelsItems2Schema),
      s.lazy(() => agentThinkModelsV1ResponseModelsItems3Schema),
      s.lazy(() => agentThinkModelsV1ResponseModelsItems4Schema),
    ]),
  );
