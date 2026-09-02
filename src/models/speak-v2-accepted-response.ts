import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SpeakV2AcceptedResponse = {
  requestId: string;
};

export const speakV2AcceptedResponseSchema: Schema<SpeakV2AcceptedResponse> =
  s.object<SpeakV2AcceptedResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
