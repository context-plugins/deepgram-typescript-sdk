import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReadV1RequestText = {
  /** The plain text to analyze */
  text: string;
};

export const readV1RequestTextSchema: Schema<ReadV1RequestText> = s.object<ReadV1RequestText>({
  text: s.string(),
});
