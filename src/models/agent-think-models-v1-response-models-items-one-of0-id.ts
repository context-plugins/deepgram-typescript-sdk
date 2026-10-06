import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The unique identifier of the OpenAI model */
export const AgentThinkModelsV1ResponseModelsItemsOneOf0Id = {
  Gpt5: "gpt-5",
  Gpt5Mini: "gpt-5-mini",
  Gpt5Nano: "gpt-5-nano",
  Gpt41: "gpt-4.1",
  Gpt41Mini: "gpt-4.1-mini",
  Gpt41Nano: "gpt-4.1-nano",
  Gpt4O: "gpt-4o",
  Gpt4OMini: "gpt-4o-mini",
} as const;
export type AgentThinkModelsV1ResponseModelsItemsOneOf0Id =
  | (typeof AgentThinkModelsV1ResponseModelsItemsOneOf0Id)[keyof typeof AgentThinkModelsV1ResponseModelsItemsOneOf0Id]
  | (string & {});

export const agentThinkModelsV1ResponseModelsItemsOneOf0IdSchema: EnumSchema<AgentThinkModelsV1ResponseModelsItemsOneOf0Id> =
  s.enumOf<AgentThinkModelsV1ResponseModelsItemsOneOf0Id>(AgentThinkModelsV1ResponseModelsItemsOneOf0Id);
