# Week 3: Frontend Layout and Navigation

## Goal

Build the initial frontend layout, create separate pages, and implement navigation between them.

## Tasks

### 1. Frontend Layout

* [x] Create a reusable Sidebar component.
* [x] Add TaskFlow branding and navigation links.
* [x] Create the main application layout with a header and content area.
* [x] Add CSS styling for the sidebar, header, and main content.
* [x] Use Flexbox to organize the layout.

### 2. Dashboard Page

* [x] Create a separate Dashboard component.
* [x] Add a welcome message.
* [x] Add statistic cards for total tasks and completed tasks.
* [x] Style the dashboard cards.

### 3. My Tasks Page

* [x] Create a separate Tasks component.
* [x] Add a placeholder message for when no tasks exist.
* [x] Style the empty task area.

### 4. Navigation

* [x] Install React Router.
* [x] Configure BrowserRouter in `main.tsx`.
* [x] Configure routes in `App.tsx`.
* [x] Add navigation between Dashboard and My Tasks.
* [x] Highlight the currently selected navigation link.
* [x] Redirect unknown routes to the Dashboard.

### 5. Responsive Design

* [x] Add responsive CSS for smaller screens.
* [x] Stack the sidebar above the main content on narrow screens.
* [x] Adjust dashboard cards and spacing for smaller displays.

### 6. Testing

* [x] Verify that the Dashboard renders.
* [x] Verify that the My Tasks page renders.
* [x] Verify navigation between pages.
* [x] Clear Vite's dependency cache to resolve a development-time rendering issue.

## Files Created

* `frontend/src/components/Sidebar.tsx`
* `frontend/src/pages/Dashboard.tsx`
* `frontend/src/pages/Tasks.tsx`

## Files Updated

* `frontend/src/App.tsx`
* `frontend/src/main.tsx`
* `frontend/src/index.css`
* `frontend/package.json`
* `frontend/package-lock.json`

## Notes

React Router was added to support client-side navigation. The application now has separate Dashboard and My Tasks pages, with responsive styling for smaller screens.

The dashboard statistics are placeholders. Task creation, editing, deletion, and persistent storage will be implemented in later phases.

## Outcome

The application has a basic frontend structure, reusable components, page navigation, and responsive styling. The project is ready to proceed to the next development phase after documenting and reviewing the changes.
