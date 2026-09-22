# Task Manager

A simple task management web application built with React and Tailwind CSS, created for the NSS Developer Technical Assignment (Web Development track).

Task data is mocked/static and lives entirely in browser state, there is no backend integration.

## Features

- View all tasks in a responsive card grid
- Add a new task
- Edit an existing task
- Delete a task (with confirmation)
- Change a task's status directly from its card (Pending / In Progress / Completed)
- Dashboard showing total, pending, in progress, and completed task counts

## Tech stack

- React 18
- Vite
- Tailwind CSS

## Project structure

src/
  components/
    Dashboard.jsx    # Task statistics row
    StatCard.jsx      # Single stat block used by Dashboard
    TaskList.jsx       # Grid of TaskCards
    TaskCard.jsx       # Single task display + status/edit/delete controls
    TaskForm.jsx       # Slide-in panel for adding/editing a task
  data/
    mockTasks.js        # Initial mock task data + status options
  App.jsx                # Top-level state and layout
  main.jsx                # React entry point
  index.css                # Tailwind directives

## Getting started

### Prerequisites

- Node.js 18+ and npm

### Install and run

npm install
npm run dev

The app will be available at the URL printed in the terminal (typically `http://localhost:5173`).

### Build for production

npm run build
npm run preview

## Notes

- All task data resets on page refresh, since there is no backend or persistence layer. This matches the assignment's requirement to use mocked/static data only.
- The layout is responsive: task cards reflow from a 3-column grid on desktop down to a single column on mobile.
