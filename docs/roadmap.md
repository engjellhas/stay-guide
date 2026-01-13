# 90-DAY MVP DEVELOPMENT ROADMAP: StayGuide

## 1. MVP SCOPE & DEFINITION

**Core Value Proposition**: A voice-activated guest concierge that automates repetitive property questions, saving hosts hours of communication while providing guests with instant, 5-star property-specific information.

**Success Metrics**:

- **80% Deflection Rate**: Percentage of common guest queries (WiFi, checkout, appliances) resolved without host intervention.
- **5+ Hours Saved/Week**: Average time reclaimed by hosts per property.
- **4.8/5 Guest Rating**: Average satisfaction score for the voice assistance experience.

**User Personas**:

- **Primary**: Individual Airbnb Hosts ("Busy Betty") feeling overwhelmed by repetitive messaging.
- **Secondary**: Tech-savvy Guests seeking a premium, frictionless stay experience.

**Key User Journey**:

1. Host registers and uploads/links property information (WiFi, House Rules, Local Tips).
2. Host installs the StayGuide voice device (or simulator for beta).
3. Guest asks questions out loud ("What's the WiFi?", "How do I work the coffee maker?").
4. System provides instant, voice-first responses.
5. Host reviews interaction summaries and reclaimed time metrics.

**MVP Boundaries**:

- **What's IN**: Voice Concierge Engine (STT/TTS), Property-Specific Knowledge Base (RAG), Basic Host Dashboard, SMS Escalation for unresolved queries.
- **What's OUT**: Multi-unit property management dashboards, Smart home device control (IoT), Integrated booking/referral commissions, Advanced multilingual support.

---

## 2. FEATURE PRIORITIZATION MATRIX

**Must-Have Features** (Core MVP):

- **Voice Concierge Engine (VCE)**:

  - User Value: Instant, low-latency voice responses.
  - Technical Effort: High (OpenAI Voice API + RAG pipeline).
  - Dependencies: Knowledge Base Infrastructure.
  - Acceptance Criteria: Latency < 3s; 90% accuracy on provided property facts.

- **Dynamic Property Knowledge Base**:

  - User Value: Accurate, house-specific answers.
  - Technical Effort: Medium (Vector DB + Data Ingestion).
  - Dependencies: Database & Hosting setup.
  - Acceptance Criteria: Support for text input, PDF uploads, and basic PMS sync.

- **Critical Escalation System**:
  - User Value: Prevents guest frustration when AI is unsure.
  - Technical Effort: Low (Twilio/SMS API).
  - Dependencies: VCE confidence scoring.
  - Acceptance Criteria: SMS sent to host within 15s of an unresolved query.

**Should-Have Features** (Post-MVP):

- **Guest Analytics Dashboard**: Visualize common questions and satisfaction trends.
- **Guided Onboarding**: Interactive walkthrough for hosts setting up their first property.

**Could-Have Features** (Future Versions):

- **Local Business Referrals**: Automated monetization through restaurant/activity bookings.
- **Branded Voice Personas**: Custom voice profiles to match the rental's theme.

---

## 3. TECHNICAL ARCHITECTURE

**Technology Stack**:

- **Frontend**: Next.js (Dashboard) & React (Device Simulation) - Fast development, excellent SEO, and robust ecosystem.
- **Backend**: Node.js/TypeScript + Supabase - Serverless architecture for rapid scaling and built-in Auth/DB.
- **Hosting**: Vercel (Frontend) & AWS (Vector Store/Reasoning Services).
- **Third-party Services**: OpenAI (Whisper/GPT-4o/Realtime), Twilio (SMS), Pinecone (Vector Engine).

**Architecture Decisions**:

- **Database Design**: Relational Schema (Postgres) for property metadata + Vector Store for house rules/manuals.
- **API Structure**: RESTful API for dashboard; WebSockets for Realtime Voice interaction.
- **Authentication**: Supabase Auth (Email/Google/Apple).

**Technical Risks**:

- **API Cost Scaling**: High costs from LLM/Voice usage. _Mitigation_: Implement usage limits and aggressive caching.
- **Connectivity Stability**: Guests might have poor WiFi. _Mitigation_: Implement robust retry logic and offline error messaging.

---

## 4. USER STORIES & ACCEPTANCE CRITERIA

**Epic 1: Host Onboarding & Knowledge Setup**

- **Story 1.1**: As a Host, I want to upload my property manual so the AI learns my house rules.
  - AC1: Support for .pdf and .txt uploads.
  - AC2: Content is indexed into the vector store within 60 seconds.
- **Story 1.2**: As a Host, I want to set up an escalation number for urgent queries.
  - AC1: Validation for international phone numbers.

**Epic 2: Guest Voice Interaction (The Meat)**

- **Story 2.1**: As a Guest, I want to ask about amenities so I can enjoy the property.
  - AC1: Near-instant response for "How do I work the [Appliance]?"
  - AC2: System gracefully says "I'm checking with the host" if data is missing.

---

## 5. 90-DAY SPRINT PLAN

**DAYS 1-30: FOUNDATION SPRINT**

- **Week 1-2**: Infrastructure Setup (Supabase, Vercel, Repo structure) & Authentication.
- **Week 3-4**: Knowledge Base Ingestion Pipeline (RAG) & Vector Store setup.

**DAYS 31-60: CORE FEATURES SPRINT**

- **Week 5-6**: Integration with OpenAI Voice/Realtime API. Baseline Voice Concierge working.
- **Week 7-8**: Host Dashboard for property management and knowledge entry.

**DAYS 61-90: LAUNCH PREPARATION SPRINT**

- **Week 9-10**: Bug fixing, Performance tuning (Latency < 2.5s), and Beta testing (10-20 properties).
- **Week 11-12**: Analytics implementation, Support docs, and Public MVP Launch.

---

## 6. TESTING STRATEGY

- **Unit**: API endpoint validation, Knowledge chunking logic.
- **Integration**: OpenAI -> Vector Store -> TTS loop.
- **User**: Beta testing with high-volume hosts to identify "unanswerable" queries.

---

## 7. RISK MITIGATION

- **Privacy**: Strict "No record unless Wake Word" policy in Privacy Policy and device logic.
- **Reliability**: Fallback to SMS communication if Voice API is unavailable.

---

## 8. LAUNCH CRITERIA

- **P0**: Accuracy > 90% for standard property questions.
- **P0**: SMS escalation working flawlessly.
- **P1**: Analytics tracking active for Host feedback.

---

## 9. POST-LAUNCH ITERATION PLAN

- **Week 1**: Daily triage of "Unknown Questions" to update property knowledge bases.
- **Month 2**: Introduce Host-to-Guest broadcast messages via the voice device.
