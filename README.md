# 📧 ReachInbox Email Scheduler

A full-stack email scheduling system built as part of the **ReachInbox Software Development Intern Hiring Assignment**.

The application provides a reliable email scheduling workflow where users can authenticate using Google, upload a list of recipients, compose email campaigns, schedule emails for a future time, and monitor scheduled and sent emails from a dashboard.

The backend uses **BullMQ + Redis** for persistent job scheduling and a dedicated worker process for email delivery through **Ethereal Email SMTP**.

---

# 📌 Table of Contents

- [Overview](#-overview)
- [Assignment Requirements](#-assignment-requirements)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [System Architecture](#-system-architecture)
- [Application Flow](#-application-flow)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Local Development Setup](#-local-development-setup)
- [PostgreSQL Setup](#-postgresql-setup)
- [Redis / Memurai Setup](#-redis--memurai-setup)
- [Ethereal Email Setup](#-ethereal-email-setup)
- [Google OAuth Setup](#-google-oauth-setup)
- [Environment Variables](#-environment-variables)
- [Backend Setup](#-backend-setup)
- [Worker Setup](#-worker-setup)
- [Frontend Setup](#-frontend-setup)
- [Running the Complete Application](#-running-the-complete-application)
- [Email Scheduling Flow](#-email-scheduling-flow)
- [BullMQ and Redis](#-bullmq-and-redis)
- [Database Persistence](#-database-persistence)
- [Rate Limiting](#-rate-limiting)
- [Email Delay](#-email-delay)
- [Worker Concurrency](#-worker-concurrency)
- [Restart Recovery](#-restart-recovery)
- [Idempotency](#-idempotency)
- [CSV Upload](#-csv-upload)
- [Authentication](#-authentication)
- [API Documentation](#-api-documentation)
- [Frontend Dashboard](#-frontend-dashboard)
- [Testing](#-testing)
- [Demo Video](#-demo-video)
- [Troubleshooting](#-troubleshooting)
- [Security](#-security)
- [Assumptions and Trade-offs](#-assumptions-and-trade-offs)
- [Assignment Requirement Mapping](#-assignment-requirement-mapping)
- [Future Improvements](#-future-improvements)
- [Author](#-author)

---

# 📌 Overview

ReachInbox is a platform focused on cold email outreach and lead engagement.

This project implements a small-scale version of the email scheduling infrastructure required for reliable email delivery.

The application consists of three main parts:

1. **React frontend**
   - Google login
   - Email composition
   - CSV recipient upload
   - Scheduling controls
   - Scheduled email dashboard
   - Sent email dashboard

2. **Express + TypeScript backend**
   - REST APIs
   - Authentication
   - PostgreSQL persistence
   - BullMQ job creation
   - Email scheduling
   - Configuration and validation

3. **BullMQ email worker**
   - Processes scheduled jobs
   - Connects to Redis
   - Connects to PostgreSQL
   - Sends emails through Ethereal SMTP
   - Updates email status
   - Handles background email processing independently of the API server

---

# 🎯 Assignment Requirements

The assignment requires a production-oriented email scheduler with:

- TypeScript backend
- Express.js
- PostgreSQL or MySQL
- Redis
- BullMQ
- Delayed email jobs
- Ethereal SMTP
- Persistent jobs
- Restart recovery
- Configurable worker concurrency
- Minimum delay between emails
- Hourly email rate limiting
- Multiple senders
- Idempotent email processing
- Google OAuth
- React/Next.js frontend
- Tailwind CSS
- CSV upload
- Scheduled emails dashboard
- Sent emails dashboard

The implementation in this repository is structured around these requirements.

---

# ✨ Features

## 🔐 Authentication

- Google OAuth 2.0 authentication
- Passport.js integration
- User session management
- Current-user API
- Logout functionality
- User name, email and avatar displayed in the frontend

---

## 📧 Email Scheduling

Users can:

- Enter email subject
- Enter email body
- Upload recipient CSV
- Select a start time
- Configure delay between emails
- Configure hourly sending limit
- Schedule the campaign

Each recipient is represented as an individual email job.

---

## 📄 CSV Recipient Upload

The frontend supports uploading a CSV/text file containing email addresses.

The frontend:

1. Reads the uploaded file.
2. Extracts email addresses.
3. Validates the detected email addresses.
4. Displays the number of detected recipients.
5. Sends the recipient list to the backend when the campaign is scheduled.

Example CSV:

```text
email
user1@example.com
user2@example.com
user3@example.com
```
