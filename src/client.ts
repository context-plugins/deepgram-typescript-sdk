import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { AgentV1SettingsThinkModels } from "./resources/agent-v1-settings-think-models.js";
import { AuthV1Tokens } from "./resources/auth-v1-tokens.js";
import { ListenV1Media } from "./resources/listen-v1-media.js";
import { ManageV1Models } from "./resources/manage-v1-models.js";
import { ManageV1ProjectsBillingBalances } from "./resources/manage-v1-projects-billing-balances.js";
import { ManageV1ProjectsBillingBreakdown } from "./resources/manage-v1-projects-billing-breakdown.js";
import { ManageV1ProjectsBillingFields } from "./resources/manage-v1-projects-billing-fields.js";
import { ManageV1ProjectsBillingPurchases } from "./resources/manage-v1-projects-billing-purchases.js";
import { ManageV1ProjectsKeys } from "./resources/manage-v1-projects-keys.js";
import { ManageV1ProjectsMembersInvites } from "./resources/manage-v1-projects-members-invites.js";
import { ManageV1ProjectsMembersScopes } from "./resources/manage-v1-projects-members-scopes.js";
import { ManageV1ProjectsMembers } from "./resources/manage-v1-projects-members.js";
import { ManageV1ProjectsModels } from "./resources/manage-v1-projects-models.js";
import { ManageV1ProjectsRequests } from "./resources/manage-v1-projects-requests.js";
import { ManageV1ProjectsUsageBreakdown } from "./resources/manage-v1-projects-usage-breakdown.js";
import { ManageV1ProjectsUsageFields } from "./resources/manage-v1-projects-usage-fields.js";
import { ManageV1ProjectsUsage } from "./resources/manage-v1-projects-usage.js";
import { ManageV1Projects } from "./resources/manage-v1-projects.js";
import { ReadV1Text } from "./resources/read-v1-text.js";
import { SelfHostedV1DistributionCredentials } from "./resources/self-hosted-v1-distribution-credentials.js";
import { SpeakV1Audio } from "./resources/speak-v1-audio.js";
import { SpeakV2Audio } from "./resources/speak-v2-audio.js";
import { VoiceAgentConfigurations } from "./resources/voice-agent-configurations.js";
import { VoiceAgentVariables } from "./resources/voice-agent-variables.js";
import { buildServers, type Servers } from "./servers.js";

export class DeepgramClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #agentV1SettingsThinkModels?: AgentV1SettingsThinkModels;
  #voiceAgentConfigurations?: VoiceAgentConfigurations;
  #voiceAgentVariables?: VoiceAgentVariables;
  #listenV1Media?: ListenV1Media;
  #speakV1Audio?: SpeakV1Audio;
  #readV1Text?: ReadV1Text;
  #manageV1Projects?: ManageV1Projects;
  #manageV1ProjectsModels?: ManageV1ProjectsModels;
  #manageV1Models?: ManageV1Models;
  #manageV1ProjectsKeys?: ManageV1ProjectsKeys;
  #manageV1ProjectsMembers?: ManageV1ProjectsMembers;
  #manageV1ProjectsMembersScopes?: ManageV1ProjectsMembersScopes;
  #manageV1ProjectsMembersInvites?: ManageV1ProjectsMembersInvites;
  #manageV1ProjectsRequests?: ManageV1ProjectsRequests;
  #manageV1ProjectsUsage?: ManageV1ProjectsUsage;
  #manageV1ProjectsUsageFields?: ManageV1ProjectsUsageFields;
  #manageV1ProjectsUsageBreakdown?: ManageV1ProjectsUsageBreakdown;
  #manageV1ProjectsBillingBalances?: ManageV1ProjectsBillingBalances;
  #manageV1ProjectsBillingBreakdown?: ManageV1ProjectsBillingBreakdown;
  #manageV1ProjectsBillingFields?: ManageV1ProjectsBillingFields;
  #manageV1ProjectsBillingPurchases?: ManageV1ProjectsBillingPurchases;
  #selfHostedV1DistributionCredentials?: SelfHostedV1DistributionCredentials;
  #authV1Tokens?: AuthV1Tokens;
  #speakV2Audio?: SpeakV2Audio;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options),
      defaultHeaders: [
        { name: "User-Agent", value: "DeepgramClient/1.0.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "1.0.0", schema: s.string() },
        { name: "X-APIMatic-Gen-Version", value: "4.0.0", schema: s.string() },
        { name: "X-APIMatic-OS", value: host.operatingSystem(), schema: s.optional(s.string()) },
        { name: "X-APIMatic-Runtime", value: host.runtimeDescription(), schema: s.optional(s.string()) },
      ],
      defaultQuery: [],
      defaultPathParams: [],
    });

    this.#servers = buildServers(options);

    this.#auth = buildAuthSchemes(options);
  }

  get agentV1SettingsThinkModels(): AgentV1SettingsThinkModels {
    return (this.#agentV1SettingsThinkModels ??= new AgentV1SettingsThinkModels(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get voiceAgentConfigurations(): VoiceAgentConfigurations {
    return (this.#voiceAgentConfigurations ??= new VoiceAgentConfigurations(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get voiceAgentVariables(): VoiceAgentVariables {
    return (this.#voiceAgentVariables ??= new VoiceAgentVariables(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get listenV1Media(): ListenV1Media {
    return (this.#listenV1Media ??= new ListenV1Media(this.#rawClient, this.#servers, this.#auth));
  }

  get speakV1Audio(): SpeakV1Audio {
    return (this.#speakV1Audio ??= new SpeakV1Audio(this.#rawClient, this.#servers, this.#auth));
  }

  get readV1Text(): ReadV1Text {
    return (this.#readV1Text ??= new ReadV1Text(this.#rawClient, this.#servers, this.#auth));
  }

  get manageV1Projects(): ManageV1Projects {
    return (this.#manageV1Projects ??= new ManageV1Projects(this.#rawClient, this.#servers, this.#auth));
  }

  get manageV1ProjectsModels(): ManageV1ProjectsModels {
    return (this.#manageV1ProjectsModels ??= new ManageV1ProjectsModels(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get manageV1Models(): ManageV1Models {
    return (this.#manageV1Models ??= new ManageV1Models(this.#rawClient, this.#servers, this.#auth));
  }

  get manageV1ProjectsKeys(): ManageV1ProjectsKeys {
    return (this.#manageV1ProjectsKeys ??= new ManageV1ProjectsKeys(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get manageV1ProjectsMembers(): ManageV1ProjectsMembers {
    return (this.#manageV1ProjectsMembers ??= new ManageV1ProjectsMembers(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get manageV1ProjectsMembersScopes(): ManageV1ProjectsMembersScopes {
    return (this.#manageV1ProjectsMembersScopes ??= new ManageV1ProjectsMembersScopes(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get manageV1ProjectsMembersInvites(): ManageV1ProjectsMembersInvites {
    return (this.#manageV1ProjectsMembersInvites ??= new ManageV1ProjectsMembersInvites(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get manageV1ProjectsRequests(): ManageV1ProjectsRequests {
    return (this.#manageV1ProjectsRequests ??= new ManageV1ProjectsRequests(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get manageV1ProjectsUsage(): ManageV1ProjectsUsage {
    return (this.#manageV1ProjectsUsage ??= new ManageV1ProjectsUsage(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get manageV1ProjectsUsageFields(): ManageV1ProjectsUsageFields {
    return (this.#manageV1ProjectsUsageFields ??= new ManageV1ProjectsUsageFields(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get manageV1ProjectsUsageBreakdown(): ManageV1ProjectsUsageBreakdown {
    return (this.#manageV1ProjectsUsageBreakdown ??= new ManageV1ProjectsUsageBreakdown(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get manageV1ProjectsBillingBalances(): ManageV1ProjectsBillingBalances {
    return (this.#manageV1ProjectsBillingBalances ??= new ManageV1ProjectsBillingBalances(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get manageV1ProjectsBillingBreakdown(): ManageV1ProjectsBillingBreakdown {
    return (this.#manageV1ProjectsBillingBreakdown ??= new ManageV1ProjectsBillingBreakdown(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get manageV1ProjectsBillingFields(): ManageV1ProjectsBillingFields {
    return (this.#manageV1ProjectsBillingFields ??= new ManageV1ProjectsBillingFields(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get manageV1ProjectsBillingPurchases(): ManageV1ProjectsBillingPurchases {
    return (this.#manageV1ProjectsBillingPurchases ??= new ManageV1ProjectsBillingPurchases(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get selfHostedV1DistributionCredentials(): SelfHostedV1DistributionCredentials {
    return (this.#selfHostedV1DistributionCredentials ??= new SelfHostedV1DistributionCredentials(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get authV1Tokens(): AuthV1Tokens {
    return (this.#authV1Tokens ??= new AuthV1Tokens(this.#rawClient, this.#servers, this.#auth));
  }

  get speakV2Audio(): SpeakV2Audio {
    return (this.#speakV2Audio ??= new SpeakV2Audio(this.#rawClient, this.#servers, this.#auth));
  }
}
