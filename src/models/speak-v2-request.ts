import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SpeakV2Request = {
  text: string;
};

export const speakV2RequestSchema: Schema<SpeakV2Request> = s.object<SpeakV2Request>({
  text: s.string(),
});
