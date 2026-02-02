# SignalQL Web

Minimalist frontend for **SignalQL** — a GitHub-native security signal platform.

SignalQL helps teams collect, normalize, and reason about GitHub security signals
(CodeQL, Dependabot, Secret Scanning) with strong guarantees around auditability,
correctness, and security.

---

## Purpose

This repository contains the **user-facing web layer** of SignalQL.

Its responsibility is limited to:

- Product landing page
- GitHub App installation entrypoint
- OAuth-based onboarding UX
- Installation success and failure flows

No backend logic, secrets, or signal processing live here — by design.

---

## Authentication Model (High Level)

SignalQL uses **GitHub App + OAuth SSO**.  
Personal Access Tokens are intentionally not supported.

### Flow

1. User clicks “Install GitHub App”
2. GitHub redirects user through OAuth
3. GitHub calls `/auth/github/callback`
4. Backend syncs organization and repositories
5. User is redirected to a success or error page

---

## Responsibilities Split

### Frontend

- Trigger GitHub App installation
- Handle OAuth redirects
- Display onboarding state
- Show installation success or failure

### Backend

- Sign JWT with GitHub App private key
- Exchange installation ID for short-lived tokens
- Synchronize organizations and repositories
- Persist installation and audit metadata

---

## Design Principles

- GitHub-native authentication
- Security-first onboarding
- Clear separation of concerns
- Minimal surface area
- Infrastructure-aware UX
- Auditability over convenience

---

## Tech Stack

- Astro
- Tailwind CSS
- Dark mode support
- Static-first rendering
- Minimal JavaScript
- Hosted on Google Cloud Platform (GCP)

---

## Security Notes

- No Personal Access Tokens
- Installation-scoped GitHub tokens
- Short-lived credentials only
- Redirect-based OAuth flow
- Backend-owned secrets and trust boundaries

---

## Repository Scope

### Included

- Landing page
- GitHub App install CTA
- OAuth redirect handling
- Success and error UI states

### Explicitly Excluded

- Webhooks
- Signal ingestion
- Deduplication logic
- Persistence layer
- Risk scoring and enrichment

These components live in the backend repository.

---

## Project Status

Active development.

Current focus:

- Clean onboarding UX
- Correct GitHub App install flows
- MVP validation

---

## 🧱 High-level architecture

```text
┌──────────────┐
│   Browser    │
└──────┬───────┘
       │
       ▼
┌────────────────────┐
│   signalql-web     │  (Astro)
│  Landing + Auth UI │
└──────┬─────────────┘
       │ OAuth redirect
       ▼
┌────────────────────────┐
│    signalql-api        │  (Go, net/http)
│  Auth + Webhooks + API │
└──────┬─────────────────┘
       │
       ▼
┌────────────────────┐
│   PostgreSQL       │  (Neon)
│  Signals + Audit   │
└────────────────────┘

---

## Author

Built by a Staff-level Application Security / Platform Engineer
with a focus on DevSecOps, secure platforms, and product-minded security tooling.
```
