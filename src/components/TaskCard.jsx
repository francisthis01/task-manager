import { STATUSES } from '../data/mockTasks.js'
import StatusDropdown from './StatusDropdown.jsx'

const STATUS_BORDER = {
  Pending: 'border-l-amber',
  'In Progress': 'border-l-blue',
  Completed: 'border-l-accent',
}

const STATUS_TEXT = {
  Pending: 'text-amber',
  'In Progress': 'text-blue',
  Completed: 'text-accent',
}

function formatDate(dateStr) {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export default function TaskCard({ task, onEdit, onDelete, onStatusChange }) {
  return (
    <div
      className={`border border-line border-l-4 ${STATUS_BORDER[task.status]} bg-white p-4 flex flex-col gap-3`}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display font-semibold text-lg leading-snug break-words">
          {task.title}
        </h3>
        <span className={`text-sm font-medium whitespace-nowrap ${STATUS_TEXT[task.status]}`}>
          {task.status}
        </span>
      </div>

      {task.description && (
        <p className="text-sm text-muted leading-relaxed break-words">{task.description}</p>
      )}

      <div className="flex items-center justify-between gap-3 pt-2 border-t border-line mt-auto">
        <span className="text-xs text-muted">Created {formatDate(task.createdDate)}</span>

        <div className="flex items-center gap-3">
          <StatusDropdown
  value={task.status}
  onChange={(status) => onStatusChange(task.id, status)}
  label={`Change status for ${task.title}`}
/>
          <button
            onClick={() => onEdit(task)}
            className="text-xs font-medium text-ink hover:text-accent"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="text-xs font-medium text-ink hover:text-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}
