---
title: SignalQL | Unified Security Signal Management
description: Normalize, deduplicate, and act on GitHub security signals with a centralized AppSec hub.
---

# SignalQL

**GitHub-native security signals.** Structured. Auditable. Actionable.

SignalQL is the central nervous system for your GitHub security ecosystem. We ingest, normalize, and deduplicate signals from CodeQL, Dependabot, and Secret Scanning, transforming raw alerts into a structured history of organizational risk.

---

## The AppSec Noise Problem

Modern security teams are drowning in "data debt":
- **Alert Fatigue:** Thousands of signals scattered across hundreds of repositories.
- **Context Loss:** Hard to track a vulnerability’s lifecycle as code moves or branches merge.
- **Manual Overhead:** Security engineers spend hours manually triaging duplicate findings.

---

## Key Features

### 1. Unified Security Schema
We normalize findings from CodeQL, Dependabot, and Secret Scanning into a single, queryable data model. Stop jumping between GitHub tabs; analyze your entire organization’s risk surface in one view.

### 2. Intelligent Fingerprinting & Deduplication
SignalQL uses advanced matching algorithms to correlate alerts. We recognize when the same vulnerability appears across different branches or persists after code refactors, preventing double-counting of risks.

### 3. Immutable Signal History
While GitHub shows you the current state, SignalQL maintains a **full audit trail**. Track when a signal first appeared, how its severity evolved, and exactly when it was remediated. Essential for SOC2 and ISO 27001 compliance.

### 4. Risk-Based Prioritization
Not every "Critical" alert is a priority. Apply custom scoring logic based on repository business impact, production exposure, and automated reachability analysis to focus your team on what matters most.

---

## Built for Security-First Teams

- **Zero-Agent Architecture:** No sidecars, no CI/CD binaries. SignalQL works entirely via an official GitHub App.
- **Read-Only by Design:** We don't need access to your source code. SignalQL only requests access to security metadata.
- **Enterprise-Grade Security:** Data is encrypted at rest (AES-256) and in transit (TLS 1.3), hosted on secure SOC2-compliant infrastructure.

---

## Get Started in Minutes

1. **Connect:** Install the SignalQL GitHub App to your organization.
2. **Authorize:** Enable SSO for your security and engineering teams.
3. **Analyze:** Automatically sync and normalize your existing security backlog.

[Install GitHub App](#) | [View Documentation](/docs)