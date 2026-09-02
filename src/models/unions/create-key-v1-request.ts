import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type CreateKeyV1Request = Record<string, unknown>;

export const createKeyV1RequestSchema: Schema<CreateKeyV1Request> = s.of<CreateKeyV1Request>(
  s.union([s.record(s.string(), s.unknown())]),
);
