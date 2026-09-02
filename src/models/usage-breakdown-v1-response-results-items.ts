import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  usageBreakdownV1ResponseResultsItemsGroupingSchema,
  type UsageBreakdownV1ResponseResultsItemsGrouping,
} from "./usage-breakdown-v1-response-results-items-grouping.js";

export type UsageBreakdownV1ResponseResultsItems = {
  hours: number;
  totalHours: number;
  agentHours: number;
  tokensIn: number;
  tokensOut: number;
  ttsCharacters: number;
  requests: number;
  grouping: UsageBreakdownV1ResponseResultsItemsGrouping;
};

export const usageBreakdownV1ResponseResultsItemsSchema: Schema<UsageBreakdownV1ResponseResultsItems> =
  s.object<UsageBreakdownV1ResponseResultsItems>({
    hours: s.number(),
    totalHours: s.number(),
    agentHours: s.number(),
    tokensIn: s.number(),
    tokensOut: s.number(),
    ttsCharacters: s.number(),
    requests: s.number(),
    grouping: usageBreakdownV1ResponseResultsItemsGroupingSchema,
    _keysMap: {
      totalHours: "total_hours",
      agentHours: "agent_hours",
      tokensIn: "tokens_in",
      tokensOut: "tokens_out",
      ttsCharacters: "tts_characters",
    },
  });
