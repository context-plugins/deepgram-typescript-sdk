import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  listenV1AcceptedResponseSchema,
  type ListenV1AcceptedResponse,
} from "../listen-v1-accepted-response.js";
import { listenV1ResponseSchema, type ListenV1Response } from "../listen-v1-response.js";

export type ListenV1MediaTranscribeResponse200 = ListenV1Response | ListenV1AcceptedResponse;

export const listenV1MediaTranscribeResponse200Schema: Schema<ListenV1MediaTranscribeResponse200> =
  s.of<ListenV1MediaTranscribeResponse200>(
    s.union([s.lazy(() => listenV1ResponseSchema), s.lazy(() => listenV1AcceptedResponseSchema)]),
  );
