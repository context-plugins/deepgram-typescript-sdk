import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LeaveProjectV1Response = {
  /** confirmation message */
  message?: string;
};

export const leaveProjectV1ResponseSchema: Schema<LeaveProjectV1Response> = s.object<LeaveProjectV1Response>({
  message: s.optional(s.string()),
});
