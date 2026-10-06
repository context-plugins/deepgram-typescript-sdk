import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Request body for Flux TTS batch (REST) text-to-speech conversion. The full block of text is
 * synthesized in a single request and returned as one audio response.
 */
export type SpeakV2Request = {
  /**
   * The text content to be converted to speech. The server normalizes and preprocesses the text
   * (e.g. stripping inline controls) before synthesis.
   */
  text: string;
};

export const speakV2RequestSchema: Schema<SpeakV2Request> = s.object<SpeakV2Request>({
  text: s.string(),
});
