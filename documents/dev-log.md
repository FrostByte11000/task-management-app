# Development Log

## July 24, 2026

## Summary

Completed the initial project planning and repository setup for the Task Management Application. Established a professional Git workflow using branches and pull requests to organize development.

## Completed Tasks

### Repository Setup

- Created GitHub repository for the Task Management Application
- Configured `.gitignore`
- Initialized Git repository
- Established branch-based development workflow
- Practiced creating and managing feature branches

### Git Workflow

- Created feature branches for planned development tasks
- Established pull request workflow:
  - Create branch
  - Complete feature work
  - Open pull request
  - Review changes
  - Merge into `main`
- Learned how to:
  - Create branches
  - Push branches to GitHub
  - Merge changes
  - Update branches from `main`
  - Manage completed branches

### Project Documentation

Created initial documentation structure:


## September 12, 2026 — Week 1: Project Foundation

### Completed
- Finalized repository structure
- Created documentation structure
- Established Git branching workflow
- Created 12-week roadmap

### Learned
- How to use feature branches
- How Pull Requests fit into the development workflow
- How to keep main separate from feature development

### Challenges
- Initially created branches before updating them with main
- Had to learn how to synchronize feature branches with main

### Next Steps
- Finish README
- Finish architecture documentation
- Begin application setup


## September 12, 2026 — Week 2: Frontend Setup

### Completed

* Created the React frontend using Vite.
* Configured TypeScript.
* Configured ESLint.
* Installed frontend dependencies with npm.
* Verified the frontend runs successfully with the Vite development server.
* Removed the default Vite starter content.
* Created a basic `App.tsx` for the Task Management App.
* Simplified the global CSS.
* Created initial `components/` and `pages/` directories.
* Verified the cleaned-up application runs successfully.

### Current Frontend Structure

```text
frontend/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── package.json
└── ...
```

### What I Learned

* How to create a React application using Vite.
* How TypeScript is integrated into a React project.
* How ESLint is used for code quality.
* How the basic React application is structured.
* How `App.tsx`, `main.tsx`, and `index.css` work together.

### Challenges

The initial Vite project included demonstration code that was not needed for the Task Management App. I removed the starter content and created a simpler starting point for the application.

### Next Steps

* Set up the Node.js and Express backend.
* Create the initial backend server.
* Create the `/api/status` endpoint.
* Verify the backend runs locally.

## October 15, 2026 — Week 3: Frontend Layout and Navigation

### Work Completed

* Created a reusable `Sidebar` component with TaskFlow branding and navigation links.
* Built the main application layout with a sidebar, header, and content area.
* Created separate `Dashboard` and `Tasks` page components.
* Added dashboard statistic cards for total tasks and completed tasks.
* Installed React Router and configured navigation between the Dashboard and My Tasks pages.
* Added active-link styling and a redirect for unknown routes.
* Implemented responsive CSS to adjust the layout for smaller screens.

### Issues Encountered

* The application initially displayed a blank page due to an invalid hook call involving `BrowserRouter`.
* Cleared Vite's dependency cache and restarted the development server, resolving the rendering issue.

### Files Created or Modified

* `frontend/src/components/Sidebar.tsx`
* `frontend/src/pages/Dashboard.tsx`
* `frontend/src/pages/Tasks.tsx`
* `frontend/src/App.tsx`
* `frontend/src/main.tsx`
* `frontend/src/index.css`
* `frontend/package.json`
* `frontend/package-lock.json`
* `docs/tasks/week-03.md`

### Next Steps

* Finish testing navigation and responsive behavior.
* Review and clean up unused starter code.
* Complete Week 3 documentation and prepare a pull request.
* Begin Week 4 by developing reusable task components and sample task data.
