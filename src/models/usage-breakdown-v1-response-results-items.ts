import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  usageBreakdownV1ResponseResultsItemsGroupingSchema,
  type UsageBreakdownV1ResponseResultsItemsGrouping,
} from "./usage-breakdown-v1-response-results-items-grouping.js";

export type UsageBreakdownV1ResponseResultsItems = {
  /** Audio hours processed */
  hours: number;
  /** Total hours including all processing */
  totalHours: number;
  /** Agent hours used */
  agentHours: number;
  /** Number of input tokens */
  tokensIn: number;
  /** Number of output tokens */
  tokensOut: number;
  /** Number of text-to-speech characters processed */
  ttsCharacters: number;
  /** Number of requests */
  requests: number;
  grouping: UsageBreakdownV1ResponseResultsItemsGrouping;
};

export const usageBreakdownV1ResponseResultsItemsSchema: Schema<UsageBreakdownV1ResponseResultsItems> =
  s.object<UsageBreakdownV1ResponseResultsItems>({
    hours: s.float64(),
    totalHours: s.float64(),
    agentHours: s.float64(),
    tokensIn: s.float64(),
    tokensOut: s.float64(),
    ttsCharacters: s.float64(),
    requests: s.float64(),
    grouping: usageBreakdownV1ResponseResultsItemsGroupingSchema,
    _keysMap: {
      totalHours: "total_hours",
      agentHours: "agent_hours",
      tokensIn: "tokens_in",
      tokensOut: "tokens_out",
      ttsCharacters: "tts_characters",
    },
  });
