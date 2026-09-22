import { useState } from 'react'
import { initialTasks } from './data/mockTasks.js'
import Dashboard from './components/Dashboard.jsx'
import TaskList from './components/TaskList.jsx'
import TaskForm from './components/TaskForm.jsx'

export default function App() {
  const [tasks, setTasks] = useState(initialTasks)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [taskToEdit, setTaskToEdit] = useState(null)

  function openAddForm() {
    setTaskToEdit(null)
    setIsFormOpen(true)
  }

  function openEditForm(task) {
    setTaskToEdit(task)
    setIsFormOpen(true)
  }

  function closeForm() {
    setIsFormOpen(false)
    setTaskToEdit(null)
  }

  function handleSave(formData) {
    if (taskToEdit) {
      setTasks((prev) =>
        prev.map((t) => (t.id === taskToEdit.id ? { ...t, ...formData } : t)),
      )
    } else {
      const newTask = {
        id: crypto.randomUUID(),
        ...formData,
        createdDate: new Date().toISOString().slice(0, 10),
      }
      setTasks((prev) => [newTask, ...prev])
    }
    closeForm()
  }

  function handleDelete(id) {
    if (window.confirm('Delete this task? This cannot be undone.')) {
      setTasks((prev) => prev.filter((t) => t.id !== id))
    }
  }

  function handleStatusChange(id, status) {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, status } : t)))
  }

  return (
    <div className="min-h-screen bg-paper">
      <header className="border-b border-line bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-2xl font-semibold">Task Manager</h1>
            <p className="text-sm text-muted mt-0.5">Track work from pending to done.</p>
          </div>
          <button
            onClick={openAddForm}
            className="bg-accent hover:bg-accent-dark text-white text-sm font-medium px-4 py-2 transition-colors whitespace-nowrap"
          >
            + Add task
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col gap-6">
        <Dashboard tasks={tasks} />
        <TaskList
          tasks={tasks}
          onEdit={openEditForm}
          onDelete={handleDelete}
          onStatusChange={handleStatusChange}
        />
      </main>

      <TaskForm
        isOpen={isFormOpen}
        taskToEdit={taskToEdit}
        onSave={handleSave}
        onClose={closeForm}
      />
    </div>
  )
}
