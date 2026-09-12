# Task Management App — Technical Decisions

This document records important technical decisions made during development and the reasoning behind them.

---

## Decision 1 — Frontend Framework

**Date:** September 2026

**Decision:** Use React with TypeScript.

**Reason:**

React provides a component-based approach that is well suited for building an interactive task-management interface. TypeScript will provide static typing and help make the code easier to maintain as the application grows.

**Alternatives considered:**

* Vanilla JavaScript
* Vue
* Angular

**Status:** Planned

---

## Decision 2 — Build Tool

**Decision:** Use Vite.

**Reason:**

Vite provides a fast development environment and straightforward setup for a React application.

**Alternatives considered:**

* Create React App
* Next.js

**Status:** Planned

---

## Decision 3 — Backend Framework

**Decision:** Use Node.js with Express.

**Reason:**

Express provides a relatively simple way to build a REST API and allows the frontend and backend to use the same primary programming language.

**Alternatives considered:**

* Django
* Flask
* Ruby on Rails

**Status:** Planned

---

## Decision 4 — Database

**Decision:** Use PostgreSQL.

**Reason:**

The application will contain structured relationships between users and tasks. PostgreSQL is a relational database that is well suited for this type of data.

**Alternatives considered:**

* MySQL
* MongoDB
* SQLite

**Status:** Planned

---

## Decision 5 — ORM

**Decision:** Use Prisma.

**Reason:**

Prisma will provide a typed interface for interacting with PostgreSQL and will simplify database schema management.

**Alternatives considered:**

* Sequelize
* Raw SQL

**Status:** Planned

---

## Decision 6 — Version Control Workflow

**Decision:** Use feature branches and Pull Requests.

**Reason:**

Using feature branches and Pull Requests provides practice with a professional Git workflow and keeps the main branch stable.

**Workflow:**

```text
main
 |
 +-- feature branch
       |
       +-- commits
       |
       +-- Pull Request
                 |
                 v
               main
```

**Status:** Active

---

## Decision 7 — Documentation Structure

**Decision:** Keep project documentation in the `docs/` directory.

**Reason:**

The README should serve as the public overview of the project, while detailed development documentation can be separated into dedicated files.

**Documentation:**

* `README.md` — project overview
* `roadmap.md` — development plan
* `architecture.md` — technical architecture
* `decisions.md` — important technical decisions
* `dev-log.md` — development history

**Status:** Active
