import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request body for text-to-speech conversion */
export type SpeakV1Request = {
  /** The text content to be converted to speech */
  text: string;
};

export const speakV1RequestSchema: Schema<SpeakV1Request> = s.object<SpeakV1Request>({
  text: s.string(),
});
