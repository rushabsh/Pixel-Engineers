'use client';

import React from 'react';

const aiModels = [
  { name: 'Gemini 1.5 Pro', logo: '/images/gemini.svg', desc: 'Multimodal intelligence & cross-platform reasoning' },
  { name: 'Claude 3.5 Sonnet', logo: '/images/Claude-AI.svg', desc: 'Strategic copy generation & nuance understanding' },
  { name: 'OpenAI GPT-4o', logo: '/images/open-ai.svg', desc: 'Automated workflow triggers & semantic parsing' },
  { name: 'DeepSeek R1', logo: '/images/Deepseek.svg', desc: 'Predictive analytics & mathematical bidding algorithms' },
  { name: 'Perplexity AI', logo: '/images/Perplexity-AI.svg', desc: 'Live organic market research & citation verification' },
  { name: 'Mistral Large', logo: '/images/Mistral-AI.svg', desc: 'Localized European compliance & fast edge inference' },
  { name: 'Runway Gen-3', logo: '/images/runway.svg', desc: 'Dynamic generative video ad creative production' },
  { name: 'Grok 2.0', logo: '/images/grok-ai.svg', desc: 'Real-time social sentiment & trend forecasting' },
  { name: 'Qwen 2.5', logo: '/images/qwen.svg', desc: 'Global multilingual ad scaling & translation precision' },
];

export default function AiTechSection() {
  return (
    <section className="nexsas-aitech-section">
      <div className="section-inner">
        {/* Top Header */}
        <div className="aitech-header text-center">
          <div className="section-badge-wrap mx-auto">
            <img
              src="/images/Star-9.png"
              alt="Star"
              width={16}
              height={16}
              className="section-badge-icon"
            />
            <span className="section-badge-text">Our Tech Stack</span>
          </div>

          <h2 className="section-title">
            Built on Top AI + <span className="highlight-purple">Marketing Tools</span>
          </h2>

          <p className="section-subtitle mx-auto">
            We blend automation with human creativity to deploy campaigns 10x faster
            with surgical targeting precision.
          </p>
        </div>

        {/* Orbit Visualization */}
        <div className="aitech-orbit-container">
          <div className="aitech-orbit-circle-wrapper">
            <svg
              className="ai-voice-generator-integration-circle"
              viewBox="0 0 1484 1484"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="740"
                cy="744"
                r="699.5"
                stroke="rgba(244, 239, 231, 0.12)"
                strokeDasharray="4 4"
              />
            </svg>
          </div>

          {/* Center Pulsing Core */}
          <div className="aitech-core-badge">
            <div className="aitech-core-inner">
              <span className="aitech-core-icon">⚡</span>
              <span className="aitech-core-text">Nexsas Engine</span>
            </div>
          </div>
        </div>

        {/* AI Grid Pills */}
        <div className="aitech-models-grid">
          {aiModels.map((item, idx) => (
            <div key={idx} className="aitech-model-card group">
              <div className="aitech-model-logo-box">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="aitech-model-logo-img"
                />
              </div>
              <div className="aitech-model-info">
                <h4 className="aitech-model-title">{item.name}</h4>
                <p className="aitech-model-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
