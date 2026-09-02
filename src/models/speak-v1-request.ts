import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SpeakV1Request = {
  text: string;
};

export const speakV1RequestSchema: Schema<SpeakV1Request> = s.object<SpeakV1Request>({
  text: s.string(),
});
