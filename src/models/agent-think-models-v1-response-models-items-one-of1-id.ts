import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AgentThinkModelsV1ResponseModelsItemsOneOf1Id = {
  Claude35HaikuLatest: "claude-3-5-haiku-latest",
  ClaudeSonnet420250514: "claude-sonnet-4-20250514",
} as const;
export type AgentThinkModelsV1ResponseModelsItemsOneOf1Id =
  | (typeof AgentThinkModelsV1ResponseModelsItemsOneOf1Id)[keyof typeof AgentThinkModelsV1ResponseModelsItemsOneOf1Id]
  | (string & {});

export const agentThinkModelsV1ResponseModelsItemsOneOf1IdSchema: EnumSchema<AgentThinkModelsV1ResponseModelsItemsOneOf1Id> =
  s.enumOf<AgentThinkModelsV1ResponseModelsItemsOneOf1Id>(AgentThinkModelsV1ResponseModelsItemsOneOf1Id);
