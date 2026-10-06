import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Our public models available to all accounts */
export const V1ListenPostParametersModel0 = {
  Nova3: "nova-3",
  Nova3General: "nova-3-general",
  Nova3Medical: "nova-3-medical",
  Nova2: "nova-2",
  Nova2General: "nova-2-general",
  Nova2Meeting: "nova-2-meeting",
  Nova2Finance: "nova-2-finance",
  Nova2Conversationalai: "nova-2-conversationalai",
  Nova2Voicemail: "nova-2-voicemail",
  Nova2Video: "nova-2-video",
  Nova2Medical: "nova-2-medical",
  Nova2Drivethru: "nova-2-drivethru",
  Nova2Automotive: "nova-2-automotive",
  Nova: "nova",
  NovaGeneral: "nova-general",
  NovaPhonecall: "nova-phonecall",
  NovaMedical: "nova-medical",
  Enhanced: "enhanced",
  EnhancedGeneral: "enhanced-general",
  EnhancedMeeting: "enhanced-meeting",
  EnhancedPhonecall: "enhanced-phonecall",
  EnhancedFinance: "enhanced-finance",
  Base: "base",
  Meeting: "meeting",
  Phonecall: "phonecall",
  Finance: "finance",
  Conversationalai: "conversationalai",
  Voicemail: "voicemail",
  Video: "video",
} as const;
export type V1ListenPostParametersModel0 =
  | (typeof V1ListenPostParametersModel0)[keyof typeof V1ListenPostParametersModel0]
  | (string & {});

export const v1ListenPostParametersModel0Schema: EnumSchema<V1ListenPostParametersModel0> =
  s.enumOf<V1ListenPostParametersModel0>(V1ListenPostParametersModel0);
