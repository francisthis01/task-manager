;import { useEffect, useState } from 'react'
import { STATUSES } from '../data/mockTasks.js'

const emptyForm = { title: '', description: '', status: 'Pending' }

export default function TaskForm({ isOpen, taskToEdit, onSave, onClose }) {
  const [form, setForm] = useState(emptyForm)
  const [error, setError] = useState('')

  useEffect(() => {
    if (taskToEdit) {
      setForm({
        title: taskToEdit.title,
        description: taskToEdit.description,
        status: taskToEdit.status,
      })
    } else {
      setForm(emptyForm)
    }
    setError('')
  }, [taskToEdit, isOpen])

  if (!isOpen) return null

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.title.trim()) {
      setError('Title is required.')
      return
    }
    onSave(form)
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-ink/40" onClick={onClose} />

      <div className="relative w-full max-w-md h-full bg-white border-l border-line p-6 flex flex-col gap-5 overflow-y-auto">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-xl font-semibold">
            {taskToEdit ? 'Edit task' : 'Add task'}
          </h2>
          <button
            onClick={onClose}
            aria-label="Close form"
            className="text-muted hover:text-ink text-xl leading-none"
          >
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="title" className="text-sm font-medium">
              Title
            </label>
            <input
              id="title"
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="border border-line px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent"
              placeholder="e.g. Write project README"
            />
            {error && <p className="text-sm text-red-600">{error}</p>}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="description" className="text-sm font-medium">
              Description
            </label>
            <textarea
              id="description"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              rows={4}
              className="border border-line px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent resize-none"
              placeholder="Optional details about the task"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="status" className="text-sm font-medium">
              Status
            </label>
            <select
              id="status"
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
              className="border border-line px-3 py-2 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-accent"
            >
              {STATUSES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              className="bg-accent hover:bg-accent-dark text-white text-sm font-medium px-4 py-2 transition-colors"
            >
              {taskToEdit ? 'Save changes' : 'Add task'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="border border-line text-sm font-medium px-4 py-2 hover:bg-paper"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
