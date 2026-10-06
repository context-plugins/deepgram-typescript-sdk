import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Accepted response for asynchronous transcription requests */
export type ListenV1AcceptedResponse = {
  /** Unique identifier for tracking the asynchronous request */
  requestId: string;
};

export const listenV1AcceptedResponseSchema: Schema<ListenV1AcceptedResponse> =
  s.object<ListenV1AcceptedResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
