export const STATUSES = ['Pending', 'In Progress', 'Completed']

export const initialTasks = [
  {
    id: crypto.randomUUID(),
    title: 'Set up project repository',
    description: 'Initialize the GitHub repo, add a README, and configure the base folder structure.',
    status: 'Completed',
    createdDate: '2026-09-15',
  },
  {
    id: crypto.randomUUID(),
    title: 'Design the task dashboard',
    description: 'Sketch the layout for the stats overview and task list before writing components.',
    status: 'Completed',
    createdDate: '2026-09-16',
  },
  {
    id: crypto.randomUUID(),
    title: 'Build TaskForm component',
    description: 'Create a reusable form for adding and editing tasks, with basic field validation.',
    status: 'In Progress',
    createdDate: '2026-09-18',
  },
  {
    id: crypto.randomUUID(),
    title: 'Wire up status changes',
    description: 'Allow a task to move between Pending, In Progress, and Completed from the card.',
    status: 'In Progress',
    createdDate: '2026-09-19',
  },
  {
    id: crypto.randomUUID(),
    title: 'Add responsive styling',
    description: 'Make sure the layout holds up on mobile widths, not just desktop.',
    status: 'Pending',
    createdDate: '2026-09-20',
  },
  {
    id: crypto.randomUUID(),
    title: 'Write the README',
    description: 'Document install steps, available scripts, and a short overview of the project structure.',
    status: 'Pending',
    createdDate: '2026-09-21',
  },
]
