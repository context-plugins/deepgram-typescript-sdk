import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AgentThinkModelsV1ResponseModelsItemsOneOf3Id = {
  OpenaiGptOss20B: "openai/gpt-oss-20b",
} as const;
export type AgentThinkModelsV1ResponseModelsItemsOneOf3Id =
  | (typeof AgentThinkModelsV1ResponseModelsItemsOneOf3Id)[keyof typeof AgentThinkModelsV1ResponseModelsItemsOneOf3Id]
  | (string & {});

export const agentThinkModelsV1ResponseModelsItemsOneOf3IdSchema: EnumSchema<AgentThinkModelsV1ResponseModelsItemsOneOf3Id> =
  s.enumOf<AgentThinkModelsV1ResponseModelsItemsOneOf3Id>(AgentThinkModelsV1ResponseModelsItemsOneOf3Id);
