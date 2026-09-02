import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AgentThinkModelsV1ResponseModelsItemsOneOf2Id = {
  Gemini25Flash: "gemini-2.5-flash",
  Gemini20Flash: "gemini-2.0-flash",
  Gemini20FlashLite: "gemini-2.0-flash-lite",
} as const;
export type AgentThinkModelsV1ResponseModelsItemsOneOf2Id =
  | (typeof AgentThinkModelsV1ResponseModelsItemsOneOf2Id)[keyof typeof AgentThinkModelsV1ResponseModelsItemsOneOf2Id]
  | (string & {});

export const agentThinkModelsV1ResponseModelsItemsOneOf2IdSchema: EnumSchema<AgentThinkModelsV1ResponseModelsItemsOneOf2Id> =
  s.enumOf<AgentThinkModelsV1ResponseModelsItemsOneOf2Id>(AgentThinkModelsV1ResponseModelsItemsOneOf2Id);
