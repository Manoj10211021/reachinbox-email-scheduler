# ReachInbox Email Scheduler

A full-stack email scheduling system built as part of the ReachInbox
Software Development Intern assignment.

The application allows users to authenticate using Google, compose email
campaigns, upload recipient lists through CSV files, schedule emails for
future delivery, and monitor scheduled and sent emails through a dashboard.

The backend uses BullMQ and Redis for persistent job scheduling and a
dedicated worker for email processing.

---

## Features

### Authentication

- Google OAuth 2.0 login
- User information displayed in the dashboard
- Session-based authentication
- Logout functionality

### Email Scheduling

- Schedule emails for a specific future time
- Upload recipient email addresses using CSV files
- Configure delay between individual emails
- Configure hourly email sending limits
- Store email records in PostgreSQL
- Use BullMQ delayed jobs for scheduling
- Dedicated worker process for sending emails

### Email Delivery

- Ethereal Email SMTP for testing
- Nodemailer for SMTP communication
- Email delivery status tracking
- Ethereal preview URLs for sent emails

### Queue & Reliability

- Redis-backed BullMQ queue
- Configurable worker concurrency
- Delayed BullMQ jobs instead of cron jobs
- Jobs remain in Redis when the application server restarts
- Worker can be restarted independently from the API server

### Dashboard

- Scheduled Emails view
- Sent Emails view
- Email status tracking
- Compose New Email interface
- CSV recipient upload
- Loading and empty states
- Basic error handling

---

# Tech Stack

## Backend

- Node.js
- TypeScript
- Express.js
- PostgreSQL
- TypeORM
- Redis / Memurai
- BullMQ
- Passport.js
- Nodemailer
- Winston

## Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- Axios
- React Router

## Infrastructure

- PostgreSQL
- Redis-compatible Memurai on Windows
- BullMQ
- Ethereal Email

---

# Architecture

```text
                         ┌─────────────────────┐
                         │    React Frontend   │
                         │      Port 3000      │
                         └──────────┬──────────┘
                                    │
                                    │ REST API
                                    ▼
                         ┌─────────────────────┐
                         │   Express Backend   │
                         │      Port 5000      │
                         └──────┬────────┬─────┘
                                │        │
                    ┌───────────┘        └────────────┐
                    ▼                                ▼
             ┌─────────────┐                 ┌─────────────┐
             │ PostgreSQL  │                 │ Redis       │
             │             │                 │ / Memurai   │
             └─────────────┘                 └──────┬──────┘
                                                    │
                                                    │ BullMQ
                                                    ▼
                                            ┌───────────────┐
                                            │ Email Worker  │
                                            └───────┬───────┘
                                                    │
                                                    │ SMTP
                                                    ▼
                                            ┌───────────────┐
                                            │ Ethereal      │
                                            │ Email         │
                                            └───────────────┘
```
