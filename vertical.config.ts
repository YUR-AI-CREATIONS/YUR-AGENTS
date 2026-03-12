import { VerticalConfig } from '../vertical.config';

const orchestrationKernel: VerticalConfig = {
  id: 'kernel-orchestration',
  name: 'Orchestration Kernel',
  tagline: 'Fleet Conductor — Route, Balance, Coordinate',
  icon: '🎛️',
  primaryColor: '#FF6F00',
  accentColor: '#FFE0B2',
  bgGradient: 'linear-gradient(135deg, #1A1000 0%, #FF6F00 50%, #2E1A00 100%)',
  systemInstruction: `You are the Orchestration Kernel — the fleet conductor of the YUR ecosystem. You route requests across 50+ microservices, balance load across instances, coordinate multi-service transactions with saga patterns, and ensure the entire fleet operates as a coherent organism. You are the nervous system connecting every kernel, runtime, and agent.`,
  complianceStandards: [
    'SOC 2 Type II (Availability & Processing Integrity)',
    'ISO 27001 Annex A.12 (Operations Security)',
    'ITIL v4 (Service Management)',
    'SRE Golden Signals (Latency, Traffic, Errors, Saturation)'
  ],
  agents: [
    {
      name: 'REQUEST_ROUTER',
      role: 'Intelligent Request Routing & Load Balancing',
      systemPrompt: 'You route incoming requests to the optimal service instance based on content-based routing rules, service health scores, geographic proximity, and current load. You implement circuit breakers for failing services, retry with exponential backoff, and maintain request affinity where session state requires it.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 8192
    },
    {
      name: 'SAGA_COORDINATOR',
      role: 'Distributed Transaction Orchestrator',
      systemPrompt: 'You coordinate distributed transactions across multiple microservices using the saga pattern. You manage compensation actions for rollback, handle partial failures gracefully, maintain transaction state machines, and ensure eventual consistency across the fleet without distributed locks.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 16384
    },
    {
      name: 'FLEET_SCALER',
      role: 'Auto-Scaling & Capacity Management',
      systemPrompt: 'You manage fleet scaling — analyzing traffic patterns to predict demand, issuing scale-up directives before traffic spikes, consolidating instances during low-demand periods, and maintaining resource budgets. You optimize for cost efficiency while guaranteeing SLA compliance.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 8192
    },
    {
      name: 'HEALTH_MONITOR',
      role: 'Service Health & SLA Compliance',
      systemPrompt: 'You monitor fleet health using the four golden signals — latency, traffic, errors, and saturation. You detect degradation before users notice, correlate symptoms across services to identify root causes, and maintain SLA compliance dashboards with burn rate alerts for error budgets.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 8192
    }
  ],
  dataSources: [
    {
      name: 'Service Registry',
      type: 'database',
      description: 'Registry of all 50+ microservices — endpoints, health status, version, routing rules, circuit breaker state'
    },
    {
      name: 'Telemetry Stream',
      type: 'realtime',
      description: 'Real-time metrics from all services — request rates, latency histograms, error counts, resource utilization'
    },
    {
      name: 'Saga State Store',
      type: 'database',
      description: 'Distributed transaction state machines — saga progress, compensation history, timeout tracking'
    }
  ],
  outputFormats: [
    'Fleet Health Dashboards',
    'Routing Rule Configurations',
    'Saga Transaction Traces',
    'Scaling Event Reports',
    'SLA Compliance Reports',
    'Circuit Breaker Status Maps',
    'Capacity Planning Forecasts'
  ],
  defaultModel: 'CORE_FAST',
  features: {
    videoGen: false,
    tts: false,
    imageGen: true,
    maps: false,
    search: true,
    governance: true,
    stripe: false
  }
};

export default orchestrationKernel;
