---
title: "Viaje — Car Rental Management System"
description: "A full-stack car rental management system with date-based vehicle availability, multi-step booking flow, and an admin panel for fleet and reservation management."
publishDate: 2026-08-30
featured: true
order: 4
tags: ["Laravel", "PHP", "Livewire", "Tailwind", "MySQL"]
githubUrl: "https://github.com/matthewwilliamberces-droid/viajecarrental"
liveUrl: "https://www.viaje.matthewberces.dev/"
role: "Full-Stack Developer"
impact: "2-day minimum to 1-month rental booking engine with real-time availability conflict detection. Multi-step reservation wizard reduces booking abandonment."
---

## Overview

Viaje is a car rental management system built to handle the complete lifecycle of vehicle reservations — from customer-facing date-based availability browsing to admin fleet management and booking approval.

### Key Features

- **Date-Based Availability Engine**: Customers select a rental period (minimum 2 days, up to 1 month). The system prevents double-booking by checking reservation conflicts in real time against the active fleet calendar.
- **Multi-Step Booking Flow**: A guided 4-step wizard (Date Selection → Vehicle Choice → Details → Confirmation) reduces friction and booking abandonment.
- **Admin Fleet Dashboard**: Built with Filament v3, the admin panel manages vehicles, reservation approvals, customer records, and payment tracking.
- **Reservation Status Machine**: Bookings move through defined states (Pending → Confirmed → Active → Completed / Cancelled) with proper transition guards.

### Tech Stack & Architecture

- **Framework**: Laravel + Livewire 3
- **Admin Panel**: Filament v3
- **Frontend**: Tailwind CSS + Alpine.js
- **Database**: MySQL with optimized date-range conflict queries
- **Deployment**: Hetzner VPS + Coolify ([viaje.matthewberces.dev](https://www.viaje.matthewberces.dev/))
