---
title: "TowerBento US — Luxury Condominium PropTech SaaS"
description: "A fullstack multi-tenant condominium marketplace and realtor SaaS platform engineered for US metropolitan real estate markets (NYC, Miami, Austin, Chicago). Built with Laravel 11, Livewire 3, and Filament v3 — featuring state licensing verification, Stripe ACH billing, and interactive mapping."
publishDate: 2026-10-01
featured: true
order: 1
tags: ["Laravel 11", "Livewire 3", "Filament v3", "Stripe", "Leaflet", "Pest", "Tailwind CSS", "PostgreSQL"]
liveUrl: "https://www.towerbento.matthewberces.dev/"
isPrivate: true
role: "Solo Developer & Founder"
impact: "225+ passing automated tests. Zero N+1 query regressions via strict development lazy-loading. Multi-tenant brokerage portals with Stripe Cashier & ACH billing, Leaflet interactive mapping, and verified state licensing compliance."
---

## Overview

**TowerBento US** is a high-performance, fullstack multi-tenant condominium marketplace and realtor SaaS platform engineered specifically for prime US metropolitan real estate markets (New York City, Miami, Austin, and Chicago). 

The platform bridges consumer-facing luxury listing discovery with an operational B2B SaaS portal for independent brokers and boutique agencies. Built with the modern **TALL Stack (Tailwind CSS, Alpine.js, Laravel 11, Livewire 3)** and **Filament v3**.

> 🔒 **Commercial Codebase (Private Repository)**: To protect proprietary real estate workflows and business logic, the repository is kept private. Read-only repository access (`Settings -> Collaborators`) or a 1-on-1 code walkthrough is provided to serious founders and prospective clients upon request.

---

## Architecture & Subsystems

### 1. Public Luxury Marketplace
- **Dynamic Strata Bento Architecture**: Custom unit showcase displays architectural photography, floor plans, and comprehensive US condominium specifications.
- **Livewire v3 Reactive Filtering**: Instant, client-side dynamic search across US metropolitan districts (Manhattan/Brooklyn, Brickell/Miami Beach, Downtown Austin) without full-page reloads.
- **Interactive Leaflet Mapping**: Custom CartoDB Positron tiles with geographic coordinate pins, transit access indicators, and walking-distance neighborhood amenities.
- **Financial Estimator Suite**: Integrated US jumbo mortgage payment calculators, monthly HOA fee breakdowns, and real-time private tour booking workflows.

### 2. Multi-Tenant Brokerage SaaS Portal (`/portal/{team:slug}`)
- **Data Isolation**: Multi-tenancy powered by Filament v3 with dedicated subdomains and team slugs for boutique brokerages and solo realtors.
- **Inventory Lifecycle Engine**: Status state machines (*For Sale*, *For Rent*, *Draft*, *Under Review*), unit pricing in USD, and standardized US square footage calculations (`interior_area_sqft`, `balcony_area_sqft`, `total_area_sqft`).
- **Agent CRM Pipeline**: Real-time lead capture, showing request scheduling, and automated prospect status progression (*New*, *Contacted*, *Tour Scheduled*, *Closed*).
- **Stripe & ACH Billing Hub**: Tiered subscription billing (*Solo Pro* at $19/mo, *Agency Starter* at $49/mo) with automated webhook reconciliation, card billing, and US ACH Direct Debit workflows.

### 3. Superadmin Platform Console (`/admin`)
- **Platform Telemetry**: Cross-brokerage KPI monitoring, district inventory distribution analytics, and user growth funnel telemetry.
- **Compliance & Moderation**: Listing moderation review queues, ownership claim dispute flags, and state licensing compliance enforcement.
- **Route Obfuscation Security**: Custom security middleware shielding administrative and moderation endpoints against unauthorized reconnaissance.

---

## US Real Estate Licensing & Compliance

TowerBento enforces state-specific licensing validation standards:
- Verified salesperson and broker licensing integration (NY DOS, Florida DBPR, Texas TREC, California DRE).
- Exclusive Right to Sell (ATS) and representation agreement verification badges.
- Strict multi-tenant isolation ensuring brokerage data separation and client privacy compliance.

---

## Technical Specifications & Testing

- **Backend Framework**: Laravel 11.x (PHP 8.3+)
- **Reactivity & Frontend**: Livewire v3, Alpine.js v3, Tailwind CSS v4
- **Admin & Tenant Panels**: Filament v3 (Panel, Table, Form Builders)
- **Mapping**: Leaflet.js with CartoDB Positron tiles
- **Database & Cache**: PostgreSQL / MySQL / SQLite with Redis session and queue management
- **Payments**: Stripe Cashier (Cards, ACH Direct Debit, Wire Transfers)
- **Media Engine**: Spatie Laravel Media Library with optimized responsive thumbnails
- **Test Suite**: 225+ Pest tests verifying tenant data isolation, billing state machines, and listing permissions
- **Query Optimization**: Zero N+1 query regressions enforced in development using `Model::preventLazyLoading(!app()->isProduction())`
