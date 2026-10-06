import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Accepted response returned when a callback URL is supplied; the audio is delivered asynchronously
 * to that URL.
 */
export type SpeakV2AcceptedResponse = {
  /** Unique identifier for tracking the asynchronous request */
  requestId: string;
};

export const speakV2AcceptedResponseSchema: Schema<SpeakV2AcceptedResponse> =
  s.object<SpeakV2AcceptedResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
